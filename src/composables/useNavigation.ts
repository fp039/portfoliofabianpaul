import { ref, computed } from 'vue'
import gsap from 'gsap'

export const useNavigation = () => {
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
    isMenuOpen.value = !isMenuOpen.value;

    if (isMenuOpen.value) {
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 1000);
    }
  }

  const closeMenu = () => {
    isMenuOpen.value = false
    document.body.style.overflow = ''
  }

  const checkSection = () => {
    const sections = document.querySelectorAll('section')
    const navHeight = 100

    if (window.location.pathname === '/projects') {
      currentSection.value = 'dark'
      return
    }

    for (const section of sections) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= navHeight && rect.bottom >= navHeight) {
        const bgColor = window.getComputedStyle(section).backgroundColor
        const rgb = bgColor.match(/\d+/g)
        if (rgb) {
          const brightness = (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / 3
          currentSection.value = brightness > 128 ? 'light' : 'dark'
        }
        break
      }
    }
  }

  return {
    isMenuOpen,
    isScrolled,
    currentSection,
    logoRef,
    burgerRef,
    topLine,
    middleLine,
    bottomLine,
    textColorClass,
    burgerColorClass,
    onBurgerHover,
    onBurgerLeave,
    toggleMenu,
    closeMenu,
    checkSection
  }
} 