import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

declare global {
  interface Window {
    gsap: typeof gsap;
  }
}

const initGSAP = () => {
  if (typeof window !== 'undefined') {
    window.gsap = gsap;
    gsap.registerPlugin(ScrollTrigger);
  }
};

export { gsap, ScrollTrigger, initGSAP }; 