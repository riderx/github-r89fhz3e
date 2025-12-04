// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { filterSitemapByDefaultLocale, i18n } from 'astro-i18n-aut/integration';
import sitemap from '@astrojs/sitemap';
const defaultLocale = 'en';
const localeNames = {
  en: 'en-US', // the `defaultLocale` value must present in `locales` keys
  es: 'es-ES',
};

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales,
    defaultLocale,
    routing: {
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    i18n({
      locales: localeNames,
      defaultLocale,
      redirectDefaultLocale: true,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
    starlight({
      title: 'My Docs',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
