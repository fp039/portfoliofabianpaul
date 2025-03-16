import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

interface WowElements {
  wowContainer: HTMLElement;
  wowGlowOuter: HTMLElement;
  wowGlowInner: HTMLElement;
}

export const initWowAnimations = () => {
  if (typeof window.gsap === 'undefined') return;

  const elements: WowElements = {
    wowContainer: document.getElementById('wow-container')!,
    wowGlowOuter: document.getElementById('wow-glow-outer')!,
    wowGlowInner: document.getElementById('wow-glow-inner')!
  };

  let isAnimationComplete = false;

  const scrollTrigger = {
    trigger: "#wow-section",
    start: "top center",
    end: "bottom center",
    once: true
  };

  // Main animation timeline
  const mainTimeline = gsap.timeline({
    scrollTrigger,
    defaults: {
      duration: 0.8,
      ease: "power2.out"
    }
  });

  // First sequence: Initial text
  mainTimeline
      .to("#line1", {
        y: 0,
        opacity: 1,
        duration: 0.6
      })
      // Pause for emphasis
      .addLabel("preWow", "+=0.3")
      // Second sequence: WOW with glow
      .to(["#wow-word", "#wow-glow-outer", "#wow-glow-inner"], {
        opacity: 1,
        scale: 1.2,
        duration: 0.8,
        ease: "back.out(1.7)"
      })
      .to(["#wow-word", "#wow-glow-outer", "#wow-glow-inner"], {
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      })
      // Pause for emphasis
      .addLabel("postWow", "+=0.3")
      // Third sequence: Help text
      .to("#help1", {
        y: 0,
        opacity: 1,
        duration: 0.6
      }, "postWow+=0.3")
      // Mark animation as complete
      .call(() => {
        isAnimationComplete = true;
        elements.wowContainer.classList.add('animation-complete');
      });

  // Grid lines animation
  gsap.fromTo("[id^='grid-line-']",
    { scaleY: 0 },
    {
      scrollTrigger,
      scaleY: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power1.out",
      transformOrigin: "top"
    }
  );

  // Mouse follow effect
  const handleMouseMove = (e: MouseEvent) => {
    if (!isAnimationComplete) return;

    const rect = elements.wowContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate position relative to center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const moveX = (x - centerX) * 0.1;
    const moveY = (y - centerY) * 0.1;

    // Animate glow layers
    gsap.to([elements.wowGlowOuter, elements.wowGlowInner], {
      x: moveX,
      y: moveY,
      duration: 0.5,
      ease: "power2.out"
    });

    // Adjust opacity based on mouse distance from center
    const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    const maxDistance = Math.sqrt(Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2));
    const opacity = 1 - (distance / maxDistance);

    gsap.to(elements.wowGlowOuter, {
      opacity: opacity * 0.15,
      duration: 0.5
    });
    gsap.to(elements.wowGlowInner, {
      opacity: opacity * 0.25,
      duration: 0.5
    });
  };

  const handleMouseLeave = () => {
    if (!isAnimationComplete) return;

    gsap.to([elements.wowGlowOuter, elements.wowGlowInner], {
      x: 0,
      y: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  elements.wowContainer.addEventListener('mousemove', handleMouseMove);
  elements.wowContainer.addEventListener('mouseleave', handleMouseLeave);
};