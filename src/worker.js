import { EmailMessage } from 'cloudflare:email';
import { createMimeMessage, Mailbox } from 'mimetext';

const MAX = { name: 100, email: 200, company: 150, region: 100, interest: 100, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

const clean = (value, max) => String(value ?? '').trim().slice(0, max);

async function handleContact(request, env) {
  const form = await request.formData();

  // Honeypot: bots fill the hidden field. Pretend success and store nothing.
  if (clean(form.get('website'), 200)) return json({ ok: true });

  const car = clean(form.get('car'), 200);
  const budget = clean(form.get('budget'), 60);
  const note = clean(form.get('message'), MAX.message);

  // Keep the vehicle and budget with the message so nothing needs a schema change.
  const message = [car && `Looking for: ${car}`, budget && `Budget: ${budget}`, note]
    .filter(Boolean)
    .join('\n');

  const data = {
    name: clean(form.get('name'), MAX.name),
    email: clean(form.get('email'), MAX.email),
    company: clean(form.get('company'), MAX.company),
    region: clean(form.get('region'), MAX.region),
    interest: clean(form.get('interest'), MAX.interest),
    message,
  };

  if (!data.name || !data.message || !EMAIL_RE.test(data.email)) {
    return json({ ok: false, error: 'invalid' }, 400);
  }

  await env.DB.prepare(
    'INSERT INTO inquiries (name, email, company, region, interest, message, ip) VALUES (?, ?, ?, ?, ?, ?, ?)',
  )
    .bind(
      data.name,
      data.email,
      data.company,
      data.region,
      data.interest,
      data.message,
      request.headers.get('cf-connecting-ip') ?? '',
    )
    .run();

  // Notify by email. Failures must not break the form: the inquiry is already saved in D1.
  try {
    await notify(env, data);
  } catch (err) {
    console.error('notify failed', err);
  }

  return json({ ok: true });
}

async function notify(env, data) {
  if (!env.NOTIFY) return;
  const from = 'noreply@japan-jdm.com';
  const msg = createMimeMessage();
  msg.setSender({ name: 'Japan JDM Website', addr: from });
  msg.setRecipient(env.NOTIFY_TO);
  msg.setHeader('Reply-To', new Mailbox({ addr: data.email }));
  msg.setSubject(`New inquiry from ${data.name}`);
  msg.addMessage({
    contentType: 'text/plain',
    data: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company}`,
      `Region: ${data.region}`,
      `Interest: ${data.interest}`,
      '',
      data.message,
    ].join('\n'),
  });
  await env.NOTIFY.send(new EmailMessage(from, env.NOTIFY_TO, msg.asRaw()));
}

// ---------- language by visitor location ----------
const LANGS = ['pt', 'zh', 'ko', 'ja'];
const COUNTRY_LANG = {
  BR: 'pt', PT: 'pt', AO: 'pt', MZ: 'pt',
  CN: 'zh', TW: 'zh', HK: 'zh', MO: 'zh', SG: 'zh',
  KR: 'ko',
  JP: 'ja',
};
const ONE_YEAR = 60 * 60 * 24 * 365;

const pathLang = (path) => path.match(/^\/(pt|zh|ko|ja)(\/|$)/)?.[1] ?? null;
const isPage = (path) => !path.startsWith('/_astro/') && !/\.[a-z0-9]+$/i.test(path);

function readLangCookie(request) {
  const match = (request.headers.get('cookie') ?? '').match(/(?:^|;\s*)lang=([a-z]{2})/);
  return match?.[1] ?? null;
}

const langCookie = (lang) => `lang=${lang}; Path=/; Max-Age=${ONE_YEAR}; SameSite=Lax; Secure`;

function redirect(url, cookie) {
  const headers = { Location: url, 'Cache-Control': 'no-store', Vary: 'Cookie' };
  if (cookie) headers['Set-Cookie'] = cookie;
  return new Response(null, { status: 302, headers });
}

const localized = (lang, url) => `/${lang}${url.pathname === '/' ? '' : url.pathname}${url.search}`;

async function withCookie(response, cookie) {
  const res = new Response(response.body, response);
  res.headers.append('Set-Cookie', cookie);
  return res;
}

async function handlePage(request, env, url) {
  // Explicit choice from the language menu: remember it.
  const hl = url.searchParams.get('hl');
  if (hl === 'en' || LANGS.includes(hl)) {
    url.searchParams.delete('hl');
    const target = hl === 'en' ? `${url.pathname}${url.search}` : localized(hl, url);
    return redirect(target, langCookie(hl));
  }

  const current = pathLang(url.pathname);
  if (current) {
    // Visiting a language URL counts as choosing that language.
    const res = await env.ASSETS.fetch(request);
    return readLangCookie(request) === current ? res : withCookie(res, langCookie(current));
  }

  // English (unprefixed) URL: send first-time visitors to their local language.
  const saved = readLangCookie(request);
  if (saved === 'en') return env.ASSETS.fetch(request);
  if (LANGS.includes(saved)) return redirect(localized(saved, url));
  // Same rule for every visitor, crawlers included (no user-agent special-casing).
  const geo = COUNTRY_LANG[request.cf?.country];
  if (geo) return redirect(localized(geo, url));
  return env.ASSETS.fetch(request);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') return json({ ok: false }, 405);
      try {
        return await handleContact(request, env);
      } catch (err) {
        console.error('contact error', err);
        return json({ ok: false, error: 'server' }, 500);
      }
    }

    if (request.method === 'GET' && isPage(url.pathname)) return handlePage(request, env, url);
    return env.ASSETS.fetch(request);
  },
};
