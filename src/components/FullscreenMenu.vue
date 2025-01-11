<template>
  <div 
    class="fixed inset-0 z-50 overflow-hidden pointer-events-none"
    :class="isOpen ? 'translate-y-0' : '-translate-y-full'"
    :style="{ transitionDelay: isOpen ? '0ms' : '1000ms' }"
  >
    <!-- Background Layer mit Animation -->
    <div 
      class="absolute top-[28px] right-[48px] rounded-full bg-[#1E1E1E] transition-all duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] pointer-events-auto"
      :class="isOpen ? 'scale-[100] opacity-100' : 'scale-[0.1] opacity-0'"
      :style="{ 
        width: '40px',
        height: '40px',
        transformOrigin: 'center center',
        transitionDelay: isOpen ? '0ms' : '400ms'
      }"
    ></div>

    <div class="h-full relative pointer-events-auto">
      <!-- Logo & Slogan -->
      <div 
        class="absolute top-[28px] left-16 flex items-center gap-6 transition-all duration-700"
        :class="isOpen ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 -translate-y-8 delay-[300ms]'"
      >
        <span class="text-[#E5E5E5] text-[36px] font-medium tracking-tight leading-[0.9]">
          FABIAN<br>PAUL
        </span>
        <span class="text-[#E5E5E5]/60 text-[20px] font-light leading-[1.2]">
          digital experiences<br>& creative branding
        </span>
      </div>

      <!-- Contact Info Top Right -->
      <div 
        class="absolute top-0 right-20 pt-64 transition-all duration-700"
        :class="isOpen ? 'opacity-100 translate-y-0 delay-[900ms]' : 'opacity-0 -translate-y-8 delay-[200ms]'"
      >
        <div class="flex flex-col items-end whitespace-nowrap">
          <a 
            href="tel:+4915901443805" 
            class="text-[#E5E5E5] text-[clamp(16px,2vw,20px)] hover:text-[#0F0] transition-colors"
          >
            +49 159 01 44 38 05
          </a>
          <a 
            href="mailto:hello@fabian-paul.design" 
            class="text-[#E5E5E5] text-[clamp(16px,2vw,20px)] hover:text-[#0F0] transition-colors mt-2"
          >
            hello@fabian-paul.design
          </a>
        </div>
      </div>

      <!-- Hauptcontainer mit Navigation -->
      <div class="h-full flex flex-col">
        <!-- Navigation Links -->
        <div class="flex-grow pt-64 px-4 pl-16">
          <div class="space-y-[clamp(24px,4vw,48px)]">
            <div 
              v-for="(item, index) in menuItems" 
              :key="item.path"
              class="flex items-baseline gap-8 transition-all duration-700"
              :class="isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
              :style="{
                transitionDelay: isOpen 
                  ? `${700 + (index * 100)}ms`
                  : `${700 - (index * 100)}ms`
              }"
            >
              <span class="text-[#0F0] text-sm uppercase tracking-wider font-light">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <a 
                :href="item.path" 
                class="rolling-text text-[clamp(2.5rem,8vw,5rem)] font-medium leading-[0.9] tracking-tight"
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

        <!-- Social Links Bottom Right -->
        <div 
          class="absolute bottom-0 right-0 pb-28 pr-20 transition-all duration-700"
          :class="isOpen ? 'opacity-100 translate-y-0 delay-[1200ms]' : 'opacity-0 translate-y-8 delay-[100ms]'"
        >
          <div class="flex gap-8">
            <a 
              v-for="(social, index) in socials" 
              :key="social"
              :href="'#'"
              class="text-[#0F0] text-[clamp(20px,3vw,30px)] font-light hover:translate-y-[-5px] transition-all duration-300"
              :style="{
                transitionDelay: isOpen 
                  ? `${800 + (index * 50)}ms`
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
import { watch } from 'vue'

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
}

.block:last-child {
  position: absolute;
  top: 100%;
  left: 0;
}

.letter {
  transition: transform 0.8s cubic-bezier(0.76, 0, 0.24, 1);
}

.rolling-text:hover .letter {
  transform: translateY(-100%);
}
</style>