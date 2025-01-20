<template>
  <div 
    class="fixed inset-0 z-[88] overflow-hidden pointer-events-none"
    :class="isOpen ? 'translate-y-0' : '-translate-y-full'"
    :style="{ 
      transitionDelay: isOpen ? '0ms' : '1200ms',
      transitionDuration: '500ms'
    }"
  >
    <!-- Background Layer -->
    <div 
      class="absolute top-[28px] right-[48px] rounded-full bg-[#1E1E1E] transition-all duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] pointer-events-auto"
      :class="isOpen ? 'scale-[200] opacity-100' : 'scale-[0.1] opacity-0'"
      :style="{ 
        width: '40px',
        height: '40px',
        transformOrigin: 'center center',
        transitionDelay: isOpen ? '0ms' : '700ms'
      }"
    ></div>

    <div class="h-full relative pointer-events-auto">
       <!-- Logo & Slogan -->
       <div 
       class="absolute top-nav-top pl-16 flex items-center gap-6 transition-all duration-500"
       :class="isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'"
       :style="{
         transitionDelay: isOpen ? '800ms' : '0ms'
       }"
     >
       <span class="text-[#E5E5E5] text-[36px] font-medium tracking-tight leading-[0.9]">
         FABIAN<br>PAUL
       </span>
       <span class="text-[#E5E5E5]/60 text-[20px] font-medium leading-[1.2] hidden md:block">
         digital experiences<br>& creative branding
       </span>
     </div>

      <!-- Contact Info Top Right -->
      <div 
        class="absolute top-0 right-20 pt-nav-padding transition-all duration-500 z-50"
        :class="isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'"
        :style="{
          transitionDelay: isOpen ? '900ms' : '0ms'
        }"
      >
        <div class="flex flex-col items-end whitespace-nowra pt-10">
          <a 
            href="tel:+4915901443805" 
            class="text-[#E5E5E5] text-[14px] md:text-nav-contact hover:text-[#0F0] transition-colors duration-300 cursor-pointer pointer-events-auto"
          >
            +49 159 01 44 38 05
          </a>
          <a 
            href="mailto:hello@fabian-paul.design" 
            class="text-[#E5E5E5] text-[14px] md:text-nav-contact hover:text-[#0F0] transition-colors duration-300 cursor-pointer pointer-events-auto"
          >
            hello@fabian-paul.design
          </a>
        </div>
      </div>

      <!-- Hauptcontainer mit Navigation -->
      <div class="h-full flex flex-col">
        <!-- Navigation Links -->
        <div class="flex-grow flex items-center">
          <div class="w-[90%] max-w-[1400px] pl-16">
            <div class="space-y-nav-spacing">
              <div 
                v-for="(item, index) in menuItems" 
                :key="item.path"
                class="flex items-center gap-8 transition-all duration-500"
                :class="isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
                :style="{
                  transitionDelay: isOpen 
                    ? `${1000 + (index * 100)}ms`
                    : '0ms'
                }"
              >
                <div class="w-[32px] flex justify-end">
                  <span class="text-[#0F0] text-sm uppercase tracking-wider font-light">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                </div>
                <a 
                  :href="item.path" 
                  class="rolling-text font-medium tracking-tight pointer-events-auto text-nav-title"
                  @click="$emit('close')"
                >
                  <div class="block">
                    <span 
                      v-for="(letter, letterIndex) in item.name" 
                      :key="letterIndex"
                      class="letter inline-block"
                      :style="{ transitionDelay: `${letterIndex * 0.05}s` }"
                    >
                      {{ letter === ' ' ? '\xa0' : letter }}
                    </span>
                  </div>
                  <div class="block text-[#0F0]">
                    <span 
                      v-for="(letter, letterIndex) in item.name" 
                      :key="letterIndex"
                      class="letter inline-block"
                      :style="{ transitionDelay: `${letterIndex * 0.05}s` }"
                    >
                      {{ letter === ' ' ? '\xa0' : letter }}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div 
          class="absolute bottom-0 right-0 pb-nav-bottom pr-20 transition-all duration-500"
          :class="isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{
            transitionDelay: isOpen ? '1400ms' : '0ms'
          }"
        >
          <div class="flex gap-8">
            <a 
              v-for="(social, index) in socials" 
              :key="social"
              :href="getSocialLink(social)"
              class="text-[#0F0] text-nav-social font-light hover:translate-y-[-5px] transition-transform duration-200"
              target="_blank"
              rel="noopener noreferrer"
              :style="{
                transitionDelay: isOpen 
                  ? `${(index * 50)}ms`
                  : `${200 - (index * 50)}ms`
              }"
            >
              {{ social }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
]

const socials = ['Xi', 'Li', 'Ig', 'Wa']

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

defineEmits(['close'])

const getSocialLink = (social) => {
  const links = {
    Xi: 'https://www.xing.com/profile/your-profile',
    Li: 'https://www.linkedin.com/in/your-profile',
    Ig: 'https://www.instagram.com/your-profile',
    Wa: 'https://wa.me/+4915901443805'
  }
  return links[social]
}
</script>

<style scoped>
.perspective {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.group:hover span {
  transform: translateY(-50%);
}

.group span {
  will-change: transform;
}

.rolling-text {
  display: inline-block;
  overflow: hidden;
  position: relative;
  height: 1.2em;
  letter-spacing: 0.02em;
}

.block {
  height: 100%;
  line-height: 1;
  position: relative;
}

.block:last-child {
  position: absolute;
  top: 98%;
  left: 0;
  width: 100%;
}

.letter {
  transition: transform 0.8s cubic-bezier(0.76, 0, 0.24, 1);
  display: inline-block;
}

.rolling-text:hover .letter {
  transform: translateY(-100%);
}

/* Option 1: Mit Transform */
.block:first-child {
  transform: translateY(-0.05em); /* Negative Werte bewegen nach oben */
}

/* ODER Option 2: Mit Padding */
.block:first-child {
  padding-top: 0.05em;    /* Verschiebt Text nach unten */
  /* oder */
  padding-bottom: 0.05em; /* Verschiebt Text nach oben */
}

/* ODER Option 3: Mit Position relative */
.block:first-child {
  position: relative;
  top: -0.05em; /* Negative Werte bewegen nach oben */
}
</style>