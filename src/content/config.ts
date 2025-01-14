import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    readingTime: z.number(),
    tags: z.array(z.string()),
    author: z.string()
  })
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    categories: z.array(z.string()),
    order: z.number().default(0)
  })
});

export const collections = {
  'blog': blogCollection,
  'projects': projectCollection
}; 