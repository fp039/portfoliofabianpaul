import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['gsap']
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