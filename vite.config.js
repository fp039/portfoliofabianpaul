import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['gsap', 'gsap/ScrollTrigger']
  },
  build: {
    rollupOptions: {
      external: ['gsap'],
      output: {
        globals: {
          gsap: 'gsap'
        }
      }
    }
  }
}); 