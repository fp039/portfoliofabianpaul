<template>
  <div class="relative">
    <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-accent/30"></div>
    <div class="space-y-24">
      <div v-for="(step, index) in steps" :key="index" class="relative" :ref="el => stepRefs[index] = el">
        <div class="flex items-center gap-8" :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'">
          <div class="w-1/2" :class="index % 2 === 0 ? 'text-right' : 'text-left'">
            <h3 class="text-2xl font-bold mb-2">{{ step.title }}</h3>
            <p class="text-text-secondary">{{ step.description }}</p>
          </div>
          <div class="relative">
            <div class="w-4 h-4 rounded-full bg-accent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div class="w-1/2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const steps = [
  {
    title: 'Erstgespräch',
    description: 'Wir besprechen deine Ziele und Visionen'
  },
  {
    title: 'Konzeption',
    description: 'Entwicklung einer maßgeschneiderten Strategie'
  },
  {
    title: 'Design',
    description: 'Kreation eines einzigartigen visuellen Erlebnisses'
  },
  {
    title: 'Entwicklung',
    description: 'Technische Umsetzung mit modernsten Technologien'
  },
  {
    title: 'Launch',
    description: 'Dein Projekt geht live und begeistert deine Zielgruppe'
  }
]

const stepRefs = ref([])

onMounted(() => {
  // Wait for GSAP to be available
  if (typeof window.gsap === 'undefined') {
    console.warn('GSAP not loaded yet');
    return;
  }

  stepRefs.value.forEach((step, index) => {
    window.gsap.from(step, {
      scrollTrigger: {
        trigger: step,
        start: 'top center+=100',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.2
    })
  })
})
</script>