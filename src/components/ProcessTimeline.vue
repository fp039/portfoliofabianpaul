<template>
  <div class="relative">
    <!-- Timeline line - Always visible -->
    <div 
      class="absolute h-full w-px bg-white"
      :class="{
        'md:left-1/2 md:-translate-x-1/2': true,
        'left-[15px]': true // Align with the center of the dots in mobile
      }"
    ></div>
    
    <div class="space-y-[clamp(48px,10vh,96px)]">
      <div 
        v-for="(step, index) in currentSteps" 
        :key="`${currentType}-${index}`" 
        class="relative" 
        :ref="el => stepRefs[index] = el"
      >
        <!-- Mobile Layout (Single Column) -->
        <div class="md:hidden flex items-start">
          <!-- Timeline Dot -->
          <div class="relative shrink-0 w-7">
            <div class="w-4 h-4 rounded-full bg-accent absolute left-1/2 ml-1 transform -translate-x-1/2"></div>
          </div>
          
          <!-- Content -->
          <div class="flex-1 ml-8">
            <!-- Step Number -->
            <div class="text-accent text-fluid-sm font-medium tracking-[1.9px] uppercase leading-[1.5] mb-2">
              {{ step.stepNumber }}
              <span v-if="step.duration" class="text-accent text-fluid-sm uppercase tracking-wider font-medium">| {{ step.duration }}</span>
            </div>
            <!-- Title -->
            <h3 class="text-[clamp(24px,3vw,32px)] font-medium text-white leading-[1.2] tracking-[0.02em] mb-4">
              {{ step.title }}
            </h3>
            <!-- Description -->
            <p class="text-[clamp(16px,2vw,19px)] font-light leading-[1.3] text-white" v-html="step.description"></p>
          </div>
        </div>

        <!-- Desktop Layout (Two Columns) -->
        <div class="hidden md:flex items-center gap-8" :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'">
          <div class="w-1/2" :class="index % 2 === 0 ? 'text-right' : 'text-left'">
            <!-- Step Number -->
            <div class="text-accent text-[clamp(16px,2vw,19px)] font-normal tracking-[1.9px] uppercase leading-[1.5] mb-2">
              {{ step.stepNumber }}
              <span v-if="step.duration" class="text-accent ml-2">| {{ step.duration }}</span>
            </div>
            <!-- Title -->
            <h3 class="text-fluid-2xl font-medium text-white leading-[1.2] tracking-[0.02em] mb-4">
              {{ step.title }}
            </h3>
            <!-- Description -->
            <p class="text-fluid-lg font-light leading-[1.3] text-white" v-html="step.description"></p>
          </div>
          
          <!-- Timeline Dot -->
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
import websiteSteps from '../data/websiteSteps.json'
import brandingSteps from '../data/brandingSteps.json'

const stepRefs = ref([])
const currentType = ref('website')
const currentSteps = ref(websiteSteps.steps)

onMounted(() => {
  // Listen for timeline type changes
  window.addEventListener('timelineChange', (event) => {
    const { type } = event.detail
    currentType.value = type
    currentSteps.value = type === 'website' ? websiteSteps.steps : brandingSteps.steps
    
    // Reset and re-trigger animations
    stepRefs.value.forEach((step, index) => {
      if (!step) return
      
      gsap.from(step, {
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

  // Initial animations
  stepRefs.value.forEach((step, index) => {
    if (!step) return
    
    gsap.from(step, {
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