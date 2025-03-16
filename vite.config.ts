import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['gsap', 'gsap/ScrollTrigger']
  },
  build: {
    commonjsOptions: {
      include: [/gsap/]
    }
  }
}); 