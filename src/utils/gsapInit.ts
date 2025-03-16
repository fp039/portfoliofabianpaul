import gsap from 'gsap';

// Dynamically import ScrollTrigger to avoid SSR issues
let ScrollTrigger;

if (typeof window !== 'undefined') {
  ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
}

declare global {
  interface Window {
    gsap: typeof gsap;
  }
}

// Make gsap globally available
if (typeof window !== 'undefined') {
  window.gsap = gsap;
}

export { gsap, ScrollTrigger }; 