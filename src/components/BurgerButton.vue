<template>
  <button
    class="relative group px-4 py-2 z-[91] bg-transparent"
    @click="toggleMenu"
    ref="burgerRef"
  >
    <span class="sr-only">Menu</span>
    <svg 
      width="30" 
      class="burger-menu" 
      viewBox="0 0 30 30"
      ref="burgerSvg"
      fill="none"
      style="background: transparent;"
    >
      <path 
        class="top" 
        d="M0 9h30v2H0z" 
        fill="currentColor"
        ref="topLine"
      />
      <line 
        class="mid" 
        x1="0" 
        y1="15" 
        x2="30" 
        y2="15" 
        stroke="currentColor" 
        stroke-width="2" 
        vector-effect="non-scaling-stroke"
        ref="midLine"
      />
      <path 
        class="bot" 
        d="M0 19h30v2H0z" 
        fill="currentColor"
        ref="botLine"
      />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['toggle'])

const burgerRef = ref(null)
const burgerSvg = ref(null)
const topLine = ref(null)
const midLine = ref(null)
const botLine = ref(null)

let tl

onMounted(() => {
  // Timeline für die Animation erstellen
  tl = gsap.timeline({ paused: true })
  
  tl.to(topLine.value, {
    y: -5,
    transformOrigin: '50% 50%',
    duration: 0.5,
    ease: 'sine.inOut'
  }, 'topBotStart')
  .to(botLine.value, {
    y: 5,
    transformOrigin: '50% 50%',
    duration: 0.5,
    ease: 'sine.inOut'
  }, 'topBotStart')
  .to(midLine.value, {
    autoAlpha: 0,
    x: -40,
    transformOrigin: '50% 50%',
    duration: 0.2,
    ease: 'sine.inOut'
  }, '-=0.2')
  .add('finish')
  .to(topLine.value, {
    y: 5,
    rotation: -45,
    transformOrigin: '50% 50%',
    duration: 0.5,
    ease: 'sine.inOut'
  }, 'finish')
  .to(botLine.value, {
    y: -5,
    rotation: 45,
    transformOrigin: '50% 50%',
    duration: 0.5,
    ease: 'sine.inOut'
  }, 'finish')
  .to(burgerSvg.value, {
    rotation: 360,
    transformOrigin: '50% 50%',
    duration: 0.5,
    ease: 'sine.inOut'
  })
})

watch(() => props.isOpen, (isOpen) => {
  if (!tl) return
  
  if (isOpen) {
    tl.play()
  } else {
    tl.reverse()
  }
})

const toggleMenu = () => {
  emit('toggle')
}
</script>

<style scoped>
.burger-menu {
  color: currentColor;
  transition: color 0.3s ease;
  background: transparent;
}

button {
  background: transparent !important;
  outline: none;
  border: none;
}

/* Hover-Effekt basierend auf der aktuellen Textfarbe */
.text-white button:hover .burger-menu {
  color: #0F0;
}

.text-black button:hover .burger-menu {
  color: #0F0;
}
</style> 