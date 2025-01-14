<template>
  <div v-show="isVisible" ref="cursor" class="custom-cursor">
    <div class="cursor-dot"></div>
    <div class="cursor-circle"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref(null)
const isVisible = ref(false)
let cursorDot, cursorCircle

onMounted(() => {
  // Check if device has fine pointer (mouse)
  if (window.matchMedia('(pointer: fine)').matches && !navigator.userAgent.includes('Firefox')) {
    isVisible.value = true
    cursorDot = cursor.value.querySelector('.cursor-dot')
    cursorCircle = cursor.value.querySelector('.cursor-circle')
    
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onLinkHover)
      el.addEventListener('mouseleave', onLinkLeave)
    })
    
    // Add class to html element
    document.documentElement.classList.add('has-custom-cursor')
  }
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseenter', onMouseEnter)
  document.removeEventListener('mouseleave', onMouseLeave)
  
  const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
  interactiveElements.forEach(el => {
    el.removeEventListener('mouseenter', onLinkHover)
    el.removeEventListener('mouseleave', onLinkLeave)
  })
  
  // Remove class when cursor is unmounted
  document.documentElement.classList.remove('has-custom-cursor')
})

const onMouseMove = (e) => {
  const { clientX, clientY } = e
  
  gsap.to(cursorDot, {
    x: clientX,
    y: clientY,
    duration: 0,
  })
  
  gsap.to(cursorCircle, {
    x: clientX,
    y: clientY,
    duration: 0.15,
  })
}

const onMouseEnter = () => {
  gsap.to([cursorDot, cursorCircle], {
    scale: 1,
    opacity: 1,
    duration: 0.3,
  })
}

const onMouseLeave = () => {
  gsap.to([cursorDot, cursorCircle], {
    scale: 0,
    opacity: 0,
    duration: 0.3,
  })
}

const onLinkHover = () => {
  gsap.to(cursorCircle, {
    scale: 1.5,
    opacity: 0.5,
    borderColor: '#00FF00',
    duration: 0.3,
    ease: 'power2.out'
  })
  
  gsap.to(cursorDot, {
    scale: 0.5,
    backgroundColor: '#00FF00',
    duration: 0.3
  })
}

const onLinkLeave = () => {
  gsap.to(cursorCircle, {
    scale: 1,
    opacity: 1,
    borderColor: '#00FF00',
    duration: 0.3,
    ease: 'power2.out'
  })
  
  gsap.to(cursorDot, {
    scale: 1,
    backgroundColor: '#00FF00',
    duration: 0.3
  })
}
</script>

<style>
.custom-cursor {
  pointer-events: none;
  position: fixed;
  z-index: 9999;
  mix-blend-mode: difference;
  will-change: transform;
}

.cursor-dot {
  position: fixed;
  width: 8px;
  height: 8px;
  background-color: #00FF00;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;
  pointer-events: none;
}

.cursor-circle {
  position: fixed;
  width: 40px;
  height: 40px;
  border: 1px solid #00FF00;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: border-width 0.3s;
  pointer-events: none;
}

/* Hide default cursor */
:global(html.has-custom-cursor) {
  cursor: none !important;
}

:global(html.has-custom-cursor *) {
  cursor: none !important;
}

/* Show default cursor on mobile/touch devices */
@media (pointer: coarse) {
  .custom-cursor {
    display: none !important;
  }
  
  :global(html.has-custom-cursor),
  :global(html.has-custom-cursor *) {
    cursor: auto !important;
  }
}
</style>