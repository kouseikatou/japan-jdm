# japan-jdm

Multilingual (EN / PT / ZH / KO) marketing site for japan-jdm.com, with a contact form backed by a Cloudflare Worker.

## Stack

- Astro 5 (static output in `dist/`)
- Cloudflare Worker (`src/worker.js`) serving the static assets and the contact API
- Cloudflare D1 (`japan-jdm-inquiries`) for inquiry storage
- Cloudflare Email Routing `send_email` binding for notifications
- GitHub Actions for CI/CD

## Local development

```bash
npm ci
npm run dev       # Astro dev server
npm run build     # static build into dist/
npm run preview   # preview the build
npx wrangler dev  # run the Worker + assets locally (after build)
```

## Project structure

```
src/
  i18n/         translations: en.ts, pt.ts, zh.ts, ko.ts (+ config.ts, index.ts)
  components/
    pages/      page-level components
  pages/        Astro routes (index, about, services, inventory, contact, 404, [lang]/)
  layouts/      shared layouts
  styles/       global styles
  worker.js     Worker: contact API, D1 insert, email notification, asset fallthrough
wrangler.jsonc  Worker, D1, send_email and custom-domain routes
```

## Translations

Each language has one file in `src/i18n/`. To edit copy, change the string in the relevant file. To add a key, add it to `en.ts` first, then to `pt.ts`, `zh.ts` and `ko.ts` so all four stay in sync. A new language needs a new file plus registration in `config.ts` and `index.ts`.

## Deploy

Pushes to `main` build and deploy automatically (`.github/workflows/deploy.yml`); pull requests only run a build check (`ci.yml`). Dependabot opens weekly grouped updates.

### One-time GitHub setup

In the repo: Settings > Secrets and variables > Actions > New repository secret.

1. `CLOUDFLARE_API_TOKEN` (required)
   - Cloudflare dashboard > My Profile > API Tokens > Create Token > template **Edit Cloudflare Workers**.
   - Add: Account > D1 > Edit (the Worker binds D1).
   - Confirm the template's Zone permissions cover japan-jdm.com: Workers Routes > Edit, DNS > Edit (needed for custom-domain routes).
   - Scope Account Resources to your account and Zone Resources to `japan-jdm.com`.
2. `CLOUDFLARE_ACCOUNT_ID` = `8ba44deda2b23f867dc5e329728e2043`
   - The account ID is not a secret. It is stored as a secret here only for simplicity; a repository variable (`vars.CLOUDFLARE_ACCOUNT_ID`) also works if you change the workflow reference.

**Never commit tokens or secrets** to the repository. If one leaks, revoke it in Cloudflare immediately.

### Cloudflare-side requirements

- Contact form submissions are stored in D1 database `japan-jdm-inquiries` (schema must already exist; the deploy does not run migrations).
- Notification emails use Cloudflare Email Routing `send_email`; the destination address (`NOTIFY_TO` / `destination_address` in `wrangler.jsonc`) must be a verified destination in Email Routing.
- Custom domains `japan-jdm.com` and `www.japan-jdm.com` are attached by the deploy via the `routes` config.
