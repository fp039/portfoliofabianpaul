<template>
  <nav
      class="fixed top-0 left-0 w-full z-[90] px-8 py-3 transition-all duration-500"
      :class="{'nav-scrolled': isScrolled}"
  >
    <!-- Navigation Container -->
    <div
        class="flex justify-between items-center relative px-8 py-4 transition-all duration-300 rounded-full bg-white/5 backdrop-blur-md shadow-lg border border-white/10"
        :style="isMenuOpen ? 'backdrop-filter: none; background: transparent; box-shadow: none; border: none;' : ''"
    >
      <!-- Logo -->
      <div 
        class="transition-all duration-300"
        :class="{'opacity-0 pointer-events-none': isMenuOpen}"
      >
        <a 
          href="/" 
          class="flex flex-col leading-none z-[91]" 
          ref="logoRef"
        >
          <span class="text-[36px] font-medium leading-[100%]" :class="textColorClass">FABIAN</span>
          <span class="text-[36px] font-medium leading-[100%]" :class="textColorClass">PAUL</span>
        </a>
      </div>

      <!-- Right Side -->
      <div class="flex items-center gap-6">
        <!-- Consultation Button Wrapper -->
        <div 
          class="transition-all duration-300"
          :class="{'opacity-0 pointer-events-none': isMenuOpen}"
        >
          <div class="hidden md:block mr-5 z-[91] consultation-button">
            <ConsultationButton :is-menu-open="isMenuOpen" />
          </div>
        </div>

        <!-- Burger Button -->
        <div class="relative z-[92]">
          <BurgerButton 
            :is-open="isMenuOpen" 
            @toggle="toggleMenu"
            :class="textColorClass"
          />
        </div>
      </div>
    </div>

    <!-- Fullscreen Menu -->
    <FullscreenMenu
        :is-open="isMenuOpen"
        @close="closeMenu"
        class="z-[89]"
    />
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'
import ConsultationButton from './ConsultationButton.vue'
import FullscreenMenu from './FullscreenMenu.vue'
import BurgerButton from './BurgerButton.vue'
import { useNavigation } from '../composables/useNavigation'

const {
  isMenuOpen,
  isScrolled,
  logoRef,
  textColorClass,
  toggleMenu,
  closeMenu,
  checkSection
} = useNavigation()

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
    checkSection()
  })

  checkSection()
})
</script>