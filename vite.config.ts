import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['gsap', 'gsap/ScrollTrigger']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap', 'gsap/ScrollTrigger']
        }
      }
    }
  }
}); 