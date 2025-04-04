import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://fabian-paul.design',
  base: '/',
  output: 'static',
  integrations: [
    tailwind(),
    vue(),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => {
        // Filtere bestimmte Seiten aus, falls nötig
        return true;
      },
      entryLimit: 50000
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    })
  ],
  devToolbar: {
    enabled: false
  },
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
    },
    ssr: {
      noExternal: ['@studio-freight/lenis', 'gsap']
    },
    resolve: {
      alias: {
        '@': '/src',
        '@images': '/public/images',
        '@fonts': '/public/fonts'
      }
    }
  }
});