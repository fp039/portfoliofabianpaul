<template>
  <div class="relative">
    <a 
      :href="getRoutePath('/contact')" 
      class="flex items-center group relative"
      @mouseenter="onButtonEnter"
      @mouseleave="onButtonLeave"
    >
      <div class="absolute w-full text-center -top-19 -left-5">
        <span class="text-[#1E1E1E] font-medium whitespace-nowrap">
          Erstgespräch vereinbaren
        </span>
      </div>
      <svg width="342" height="44" viewBox="0 0 342 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="overflow-visible">
        <rect width="305.667" height="42.8889" rx="21.4444" fill="#00FF00" />
        <path ref="connector" class="connector" d="M313 1.27881C304.056 7.30822 298.944 7.30822 290 1.27881V42.2788C298.944 37.4553 302.778 37.4553 313 42.2788V1.27881Z" fill="#00FF00"/>
        <g ref="circleArrow" class="circle-arrow">
          <path d="M342 21.8606C342 9.78733 332.213 0 320.139 0C308.066 0 298.279 9.78733 298.279 21.8606C298.279 33.9339 308.066 43.7212 320.139 43.7212C332.213 43.7212 342 33.9339 342 21.8606Z" fill="#00FF00"/>
          <path d="M321.638 12.1313L319.943 13.7686L326.253 20.037H310.197V22.3759H325.923L318.672 28.5507L320.226 30.3283L330.82 21.2532L321.638 12.1313Z" fill="#1E1E1E"/>
        </g>
      </svg>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { getRoutePath } from '../utils/paths'

const connector = ref(null)
const circleArrow = ref(null)
let currentAnimation = null

// Prop für den Menü-Status
const props = defineProps({
  isMenuOpen: {
    type: Boolean,
    default: false
  }
})

const resetAnimation = () => {
  if (currentAnimation) {
    currentAnimation.kill()
  }
  
  gsap.to([connector.value, circleArrow.value], {
    x: 0,
    scale: 1,
    scaleX: 1,
    opacity: 1,
    duration: 0.2,
    ease: "power2.out",
    clearProps: "all" // Wichtig: Setzt alle Properties zurück
  })
}

const onButtonEnter = () => {
  if (currentAnimation) {
    currentAnimation.kill()
  }
  
  currentAnimation = gsap.timeline()
    .to(connector.value, {
      scaleX: 1.8,
      duration: 0.4,
      ease: "elastic.out(1, 0.8)",
      transformOrigin: "left center"
    })
    .to(connector.value, {
      opacity: 0,
      duration: 0.15,
      ease: "power2.inOut"
    }, "-=0.15")
    
  gsap.to(circleArrow.value, {
    x: 15,
    scale: 1.05,
    duration: 0.6,
    ease: "elastic.out(1.2, 0.5)",
    delay: 0.1
  })
}

const onButtonLeave = () => {
  if (currentAnimation) {
    currentAnimation.kill()
  }
  
  currentAnimation = gsap.timeline()
    .to(circleArrow.value, {
      x: 0,
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.7)"
    })
    .set(connector.value, {
      scaleX: 1,
      transformOrigin: "left center"
    })
    .to(connector.value, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
      delay: 0.1
    })
}

// Beobachte Änderungen des Menü-Status
watch(() => props.isMenuOpen, (isOpen) => {
  if (isOpen) {
    resetAnimation()
  }
})

// Cleanup beim Unmount
onMounted(() => {
  return () => {
    if (currentAnimation) {
      currentAnimation.kill()
    }
  }
})
</script>

<style>
.connector,
.circle-arrow {
  transform-origin: left center;
  will-change: transform, opacity;
}
</style>