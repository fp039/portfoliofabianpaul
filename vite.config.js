import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['gsap']
  },
  build: {
    commonjsOptions: {
      include: [/gsap/]
    }
  },
  ssr: {
    noExternal: ['gsap']
  },
  resolve: {
    alias: {
      'gsap/ScrollTrigger': 'gsap/ScrollTrigger.js'
    }
  }
}); 