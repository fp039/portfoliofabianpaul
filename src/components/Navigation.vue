<template>
  <nav 
    class="fixed top-0 left-0 w-full z-50 px-8 py-6 transition-all duration-500"
    :class="{'nav-scrolled': isScrolled}"
  >
    <!-- Navigation Container -->
    <div 
      class="max-w-7xl mx-auto flex justify-between items-center relative px-8 transition-all duration-300 rounded-full"
      :class="{'nav-glass': isScrolled && !isMenuOpen}"
    >
      <!-- Logo -->
      <a href="/" class="flex flex-col leading-none z-[60]" ref="logoRef">
        <span class="text-[36px] font-medium leading-[100%] transition-colors duration-300" :class="textColorClass">FABIAN</span>
        <span class="text-[36px] font-medium leading-[100%] transition-colors duration-300" :class="textColorClass">PAUL</span>
      </a>
      
      <!-- Right Side -->
      <div class="flex items-center gap-6">
        <div class="hidden md:block mr-5">
          <ConsultationButton />
        </div>
        <!-- Burger Button -->
        <button 
          @click="toggleMenu" 
          class="z-[70] relative group"
          @mouseenter="onBurgerHover"
          @mouseleave="onBurgerLeave"
          ref="burgerRef"
        >
          <span class="sr-only">Menu</span>
          <div class="w-8 h-5 flex flex-col justify-between relative">
            <span 
              class="w-full h-0.5 absolute top-0 transform transition-all duration-500" 
              :class="[{'!bg-white': isMenuOpen}, burgerColorClass]"
              ref="topLine"
            ></span>
            <span 
              class="w-full h-0.5 absolute top-1/2 -translate-y-1/2 transition-all duration-500" 
              :class="[{'!bg-white': isMenuOpen}, burgerColorClass, { 'opacity-0': isMenuOpen }]"
              ref="middleLine"
            ></span>
            <span 
              class="w-full h-0.5 absolute bottom-0 transform transition-all duration-500" 
              :class="[{'!bg-white': isMenuOpen}, burgerColorClass]"
              ref="bottomLine"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Fullscreen Menu -->
    <FullscreenMenu 
      :is-open="isMenuOpen"
      @close="closeMenu"
      class="z-[65]"
    />
  </nav>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import ConsultationButton from './ConsultationButton.vue'
import FullscreenMenu from './FullscreenMenu.vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const currentSection = ref('dark') // 'dark' or 'light'
const logoRef = ref(null)
const burgerRef = ref(null)
const topLine = ref(null)
const middleLine = ref(null)
const bottomLine = ref(null)

const textColorClass = computed(() => {
  if (isMenuOpen.value) return 'text-white'
  return currentSection.value === 'dark' ? 'text-white' : 'text-black'
})

const burgerColorClass = computed(() => {
  if (isMenuOpen.value) return 'bg-white'
  return currentSection.value === 'dark' ? 'bg-white' : 'bg-black'
})

const onBurgerHover = () => {
  if (isMenuOpen.value) return
  
  gsap.timeline()
    .to(topLine.value, {
      width: '50%',
      duration: 0.3,
      ease: 'power2.out'
    })
    .to(bottomLine.value, {
      width: '75%',
      duration: 0.3,
      ease: 'power2.out'
    }, 0)
}

const onBurgerLeave = () => {
  if (isMenuOpen.value) return
  
  gsap.to([topLine.value, bottomLine.value], {
    width: '100%',
    duration: 0.3,
    ease: 'power2.out'
  })
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  
  const tl = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: "power2.inOut"
    }
  })

  if (isMenuOpen.value) {
    // Reset any hover animations
    gsap.set([topLine.value, middleLine.value, bottomLine.value], {
      width: '100%',
      scaleX: 1
    })
    
    // Animate to X
    tl.to(middleLine.value, {
      opacity: 0,
      duration: 0.2
    })
    .to(topLine.value, {
      rotate: 45,
      y: 9,
      backgroundColor: '#fff'
    }, 0)
    .to(bottomLine.value, {
      rotate: -45,
      y: -9,
      backgroundColor: '#fff'
    }, 0)
    
    document.body.style.overflow = 'hidden'
  } else {
    // Animate back to burger
    tl.to([topLine.value, bottomLine.value], {
      rotate: 0,
      y: 0,
      backgroundColor: currentSection.value === 'dark' ? '#fff' : '#000'
    })
    .to(middleLine.value, {
      opacity: 1,
      backgroundColor: currentSection.value === 'dark' ? '#fff' : '#000'
    }, 0)
    
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const checkSection = () => {
  const sections = document.querySelectorAll('section')
  const navHeight = 100 // Approximate navigation height
  
  for (const section of sections) {
    const rect = section.getBoundingClientRect()
    if (rect.top <= navHeight && rect.bottom >= navHeight) {
      // Check the background color of the section
      const bgColor = window.getComputedStyle(section).backgroundColor
      const rgb = bgColor.match(/\d+/g)
      if (rgb) {
        // Calculate brightness (simplified formula)
        const brightness = (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / 3
        currentSection.value = brightness > 128 ? 'light' : 'dark'
      }
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
    checkSection()
  })
  
  // Initial check
  checkSection()
})
</script>

<style scoped>
.nav-scrolled {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

nav {
  transition: padding 0.5s ease-out;
}

button span {
  display: block;
}

.nav-glass {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
}

.nav-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  padding: 1px;
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Optional: Add hover effect */
.nav-glass:hover {
  background: rgba(255, 255, 255, 0.08);
}
</style>