export const initSectionAnimations = () => {
  // Wait for GSAP to be available
  window.addEventListener('load', () => {
    if (typeof gsap === 'undefined') return;

    // WOW Section Animation
    gsap.from("#wow-text", {
      scrollTrigger: {
        trigger: "#wow-section",
        start: "top center",
        end: "bottom center",
      },
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    });

    // Animate grid lines
    gsap.from("#wow-section .border-r", {
      scrollTrigger: {
        trigger: "#wow-section",
        start: "top center",
      },
      scaleY: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      transformOrigin: "top"
    });

    // Hello Section Animation
    gsap.from("#hello-text", {
      scrollTrigger: {
        trigger: "#hello-text",
        start: "top center",
      },
      x: -100,
      opacity: 0,
      duration: 1
    });

    gsap.from("#hello-image", {
      scrollTrigger: {
        trigger: "#hello-image",
        start: "top center",
      },
      x: 100,
      opacity: 0,
      duration: 1
    });
  });
};