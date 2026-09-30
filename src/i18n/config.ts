export const defaultLang = 'en';

export const languages = {
  en: { label: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_US' },
  pt: { label: 'Português', short: 'PT', htmlLang: 'pt-BR', ogLocale: 'pt_BR' },
  zh: { label: '中文', short: '中文', htmlLang: 'zh-Hans', ogLocale: 'zh_CN' },
  ko: { label: '한국어', short: '한국어', htmlLang: 'ko', ogLocale: 'ko_KR' },
  ja: { label: '日本語', short: '日本語', htmlLang: 'ja', ogLocale: 'ja_JP' },
} as const;

export type Lang = keyof typeof languages;
export const langCodes = Object.keys(languages) as Lang[];
export const nonDefaultLangs = langCodes.filter((l) => l !== defaultLang);

export const isLang = (value: string | undefined): value is Lang =>
  value !== undefined && value in languages;

/** Prefix a site path with the language segment (English lives at the root). */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}` : `/${lang}${clean}`;
}

/** Remove a leading language segment, so /pt/contact -> /contact. */
export function stripLang(pathname: string): string {
  const match = pathname.match(/^\/(pt|zh|ko|ja)(\/.*)?$/);
  if (!match) return pathname || '/';
  return match[2] && match[2] !== '/' ? match[2] : '/';
}
