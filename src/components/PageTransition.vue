<template>
  <div 
    class="fixed inset-0 z-[100] pointer-events-none transition-colors duration-300"
    :class="{ 'pointer-events-auto': isTransitioning }"
  >
    <!-- Loading Overlay -->
    <div
      class="fixed inset-0 bg-[#1E1E1E] transition-all duration-[800ms] ease-[cubic-bezier(0.7,0,0.3,1)]"
      :class="isTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
    />

    <!-- Loading Animation -->
    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="relative overflow-visible">
        <div class="flex flex-col items-center">
          <div class="split-text-container">
            <div 
              class="split-text text-[clamp(36px,8vw,64px)] font-medium leading-[1.1] transition-opacity duration-500 py-1 flex"
              :class="isTransitioning ? 'opacity-100' : 'opacity-0'"
              data-text="FABIAN"
            >
              <span 
                v-for="(letter, index) in 'FABIAN'" 
                :key="index"
                class="floating-letter relative"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                {{ letter }}
                <span 
                  class="absolute inset-0 text-[#0F0] overflow-hidden reveal-letter"
                  :style="{ animationDelay: `${index * 0.1}s` }"
                >
                  {{ letter }}
                </span>
              </span>
            </div>
            <div 
              class="split-text text-[clamp(36px,8vw,64px)] font-medium leading-[1.1] -mt-1 transition-opacity duration-500 py-1 flex"
              :class="isTransitioning ? 'opacity-100' : 'opacity-0'"
              data-text="PAUL"
            >
              <span 
                v-for="(letter, index) in 'PAUL'" 
                :key="index"
                class="floating-letter relative"
                :style="{ animationDelay: `${(index + 6) * 0.1}s` }"
              >
                {{ letter }}
                <span 
                  class="absolute inset-0 text-[#0F0] overflow-hidden reveal-letter"
                  :style="{ animationDelay: `${(index + 6) * 0.1}s` }"
                >
                  {{ letter }}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const isTransitioning = ref(true)
const loadingTimeout = ref(null)

const startTransition = () => {
  isTransitioning.value = true
  document.body.style.overflow = 'hidden'
  document.documentElement.classList.add('loading')
}

const endTransition = () => {
  const minDisplayTime = 1500  // Minimale Zeit, die die Animation angezeigt wird
  const fadeOutDuration = 1200 // Zeit für das Ausblenden

  // Minimum duration für die Transition
  setTimeout(() => {
    // Erst nach minDisplayTime beginnen auszublenden
    setTimeout(() => {
      isTransitioning.value = false
      document.body.style.overflow = ''
      document.documentElement.classList.remove('loading')
    }, fadeOutDuration)
  }, minDisplayTime)
}

onMounted(() => {
  nextTick(() => {
    // Prüfen ob die Seite bereits geladen ist
    if (document.readyState === 'complete') {
      // Auch beim initialen Laden die minimale Anzeigezeit einhalten
      endTransition()
    } else {
      window.addEventListener('load', endTransition, { once: true })
    }
  })

  // Handle navigation
  document.addEventListener('astro:before-preparation', startTransition)
  document.addEventListener('astro:after-preparation', endTransition)

  // Cleanup
  return () => {
    document.removeEventListener('astro:before-preparation', startTransition)
    document.removeEventListener('astro:after-preparation', endTransition)
  }
})
</script>

<style>
:root.loading {
  visibility: hidden;
}

:root.loading [data-transition] {
  visibility: visible;
}

.split-text-container {
  position: relative;
  text-align: center;
  padding: 10px 0;
}

.split-text {
  color: transparent;
  -webkit-text-stroke: 0.5px #E5E5E5;
  position: relative;
  transform-origin: center;
  overflow: visible;
}

.floating-letter {
  display: inline-block;
  animation: float 4s cubic-bezier(0.45, 0, 0.55, 1) infinite paused;
  transform-origin: center;
  -webkit-text-stroke: 0.5px #E5E5E5;
  color: transparent;
}

.reveal-letter {
  animation: reveal 4s cubic-bezier(0.45, 0, 0.55, 1) infinite paused;
  -webkit-text-stroke: 0;
  clip-path: inset(100% 0 0 0);
}

@keyframes float {
  0% { 
    transform: translateY(0) rotate(-1.5deg) scale(1); 
  }
  25% { 
    transform: translateY(-8px) rotate(1deg) scale(1.02); 
  }
  50% { 
    transform: translateY(-16px) rotate(-1deg) scale(1); 
  }
  75% { 
    transform: translateY(-8px) rotate(1.5deg) scale(0.98); 
  }
  100% { 
    transform: translateY(0) rotate(-1.5deg) scale(1); 
  }
}

/* Startet die Animation wenn isTransitioning true ist */
[class*="opacity-100"] .floating-letter {
  animation-play-state: running;
}

[class*="opacity-100"] .reveal-letter {
  animation-play-state: running;
}

@keyframes reveal {
  0% { clip-path: inset(100% 0 0 0); }
  35% { clip-path: inset(0 0 0 0); }
  65% { clip-path: inset(0 0 0 0); }
  100% { clip-path: inset(0 0 100% 0); }
}
</style> 