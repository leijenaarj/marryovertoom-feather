import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    // Array of tags, defaults to empty array if not provided
    tags: z.array(z.string()).default([]),
    images: z.array(z.object({
      alt: z.string(),
      src: z.string(),
    })).default([]),
    videos: z.array(z.object({
      alt: z.string(),
      src: z.string(),
    })).default([]),
    sounds: z.array(z.object({
      alt: z.string(),
      src: z.string(),
    })).default([]),
  }),
});

export const collections = { blog };
