// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt'
const defaultLocale = 'en';
const localeNames = {
  en: 'en-US', // the `defaultLocale` value must present in `locales` keys
  es: 'es-ES',
};
const locales = Object.keys(localeNames);

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com/',
  i18n: {
    locales,
    defaultLocale,
    routing: {
      redirectToDefaultLocale: true,
    },
  },
  redirects: {
    '/': {
      status: 302,
      destination: '/docs/',
    },
  },
  integrations: [
    starlight({
      title: 'My Docs',
      pagefind: false,
      prerender: true,
      disable404Route: true,
      plugins: [starlightLlmsTxt()],
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
            { label: 'Example Guide', autogenerate: { directory: 'guides' } },
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
