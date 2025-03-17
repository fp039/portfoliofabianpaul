import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fp039.github.io',
  base: '/portfoliofabianpaul',
  integrations: [
    tailwind(),
    vue(),
    mdx(),
    sitemap({
      customPages: [],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('api/')
    })
  ],
  devToolbar: {
    enabled: false
  },
  output: 'static',
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify('/')
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/aspect-ratios.css";`
        }
      }
    }
  }
});