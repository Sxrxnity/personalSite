import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One .mdx file per article in src/content/articles/; the file name is its URL (/articles/<name>/).
// order: position on the Articles page. written (optional): YYYY-MM-DD, shown under the title.
// synopsis: the line on its card (may contain HTML, e.g. <u>).
const articles = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    synopsis: z.string(),
    order: z.number(),
    written: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  }),
});

export const collections = { articles };
