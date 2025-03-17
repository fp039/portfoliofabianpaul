import { gsap } from 'gsap';
import pkg from 'gsap/ScrollTrigger.js';
const { ScrollTrigger } = pkg;

declare global {
  interface Window {
    gsap: typeof gsap;
  }
}

// Make gsap globally available
if (typeof window !== 'undefined') {
  window.gsap = gsap;
  gsap.registerPlugin(ScrollTrigger);
} 