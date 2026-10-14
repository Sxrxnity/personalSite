import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [mdx()],
  markdown: { smartypants: false }, // keep quotes as typed, rather than curling them
  // the Articles pages used to live under /academics/
  redirects: { '/academics': '/articles' },
});
