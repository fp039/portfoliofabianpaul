import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    tailwind(),
    vue(),
    mdx()
  ],
  devToolbar: {
    enabled: false
  },
  output: 'server'
});