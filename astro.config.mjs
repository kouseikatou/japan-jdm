import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://japan-jdm.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', pt: 'pt-BR', zh: 'zh-Hans', ko: 'ko', ja: 'ja' },
      },
    }),
  ],
});
