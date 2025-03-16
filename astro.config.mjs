import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://fp039.github.io',
  base: '/portfoliofabianpaul',
  integrations: [
    tailwind(),
    vue(),
    mdx()
  ],
  devToolbar: {
    enabled: false
  },
  output: 'static'
});