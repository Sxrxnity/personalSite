import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import { satteri } from '@astrojs/markdown-satteri';
// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [mdx()],
  markdown: { processor: satteri({ features: { smartPunctuation: false } }) }, // keep quotes as typed, rather than curling them
  // the Articles pages used to live under /academics/
  redirects: { '/academics': '/articles' },
});
