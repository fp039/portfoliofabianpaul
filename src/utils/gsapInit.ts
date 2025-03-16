import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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

// Register plugins
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger }; 