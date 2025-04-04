import { defineCollection, z } from 'astro:content';

// Debug: Log beim Laden der Config
console.log('Loading content config...');

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    image: z.string(),
    readingTime: z.number(),
    tags: z.array(z.string()),
    author: z.string()
  })
});

// Debug: Log nach Definition
console.log('Blog collection defined');

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    projectType: z.enum(['video', 'default']).optional().default('default'),
    videoUrl: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    tags: z.array(z.string()),
    featured: z.boolean(),
    categories: z.array(z.string()),
    order: z.number()
  })
});

export const collections = {
  'blog': blog,
  'projects': projectCollection
};

// Debug: Log nach Export
console.log('Collections exported:', Object.keys(collections)); 