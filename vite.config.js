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
    external: ['gsap']
  }
}); 