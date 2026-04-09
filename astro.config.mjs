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
      lastmod: new Date(),
      entryLimit: 50000,
      filter: (page) => !page.includes('/api/'),
      serialize(item) {
        const url = item.url;
        if (url === 'https://fabian-paul.design/' || url === 'https://fabian-paul.design') {
          return { ...item, priority: 1.0, changefreq: 'monthly' };
        }
        if (url.includes('/impressum') || url.includes('/datenschutz')) {
          return { ...item, priority: 0.2, changefreq: 'yearly' };
        }
        if (url.match(/\/(projects|blog)\/.+/)) {
          return { ...item, priority: 0.7 };
        }
        if (url.match(/\/(projects|blog|about|contact)\/?$/)) {
          return { ...item, priority: 0.8 };
        }
        return { ...item, priority: 0.6 };
      }
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