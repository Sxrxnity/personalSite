import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import { satteri } from '@astrojs/markdown-satteri';

// In articles with 2+ sections, wrap each ## heading and what follows it in <details open>, so sections collapse.
const collapsibleSections = {
  name: 'collapsible-sections',
  after(root, ctx) {
    const isH2 = (n) => n.type === 'element' && n.tagName === 'h2';
    if (root.children.filter(isH2).length < 2) return;
    const children = [];
    for (const node of root.children) {
      if (isH2(node)) {
        const summary = { type: 'element', tagName: 'summary', properties: {}, children: [node] };
        children.push({ type: 'element', tagName: 'details', properties: { open: true }, children: [summary] });
      } else if (children.at(-1)?.tagName === 'details') children.at(-1).children.push(node);
      else children.push(node);
    }
    ctx.replaceNode(root, { ...root, children });
  },
};

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [mdx()],
  markdown: {
    // smartPunctuation off: keep quotes as typed, rather than curling them
    processor: satteri({ features: { smartPunctuation: false }, hastPlugins: [collapsibleSections] }),
  },
  // the Articles pages used to live under /academics/
  redirects: { '/academics': '/articles' },
});
