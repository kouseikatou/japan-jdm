import { defaultLang, type Lang } from './config';
import { en } from './en';
import { pt } from './pt';
import { zh } from './zh';
import { ko } from './ko';
import { ja } from './ja';

export type Dict = typeof en;
type DeepPartial<T> = T extends readonly (infer U)[] ? DeepPartial<U>[] : T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;
export type PartialDict = DeepPartial<Dict>;

const isObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v);

// Missing keys fall back to English, so a half-translated language never renders blanks.
function merge<T>(base: T, override: unknown): T {
  if (Array.isArray(base)) {
    if (!Array.isArray(override)) return base;
    return base.map((item, i) => merge(item, override[i])) as T;
  }
  if (isObject(base) && isObject(override)) {
    const out: Record<string, unknown> = { ...base };
    for (const key of Object.keys(base)) out[key] = merge((base as Record<string, unknown>)[key], override[key]);
    return out as T;
  }
  return (override === undefined || override === null || override === '' ? base : override) as T;
}

const overrides: Record<Lang, PartialDict | undefined> = { en: undefined, pt, zh, ko, ja };

export function useTranslations(lang: Lang): Dict {
  return merge(en, overrides[lang] ?? {}) as Dict;
}

export { defaultLang };
