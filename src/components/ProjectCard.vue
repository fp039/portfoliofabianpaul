<template>
  <div 
    class="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
    @mouseenter="onHover"
    @mouseleave="onLeave"
  >
    <img 
      :src="image" 
      :alt="title"
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div 
      class="absolute inset-0 bg-background/80 flex flex-col justify-center items-center p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ref="content"
    >
      <h3 class="text-h5 font-medium leading-tight tracking-[0.02em] mb-4">{{ title }}</h3>
      <p class="text-fluid-sm font-light leading-snug text-center text-text-secondary">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  description: String,
  image: String
})

const content = ref(null)

const onHover = () => {
  window.gsap.from(content.value.children, {
    y: 20,
    opacity: 0,
    duration: 0.4,
    stagger: 0.1
  })
}

const onLeave = () => {
  window.gsap.set(content.value.children, {
    clearProps: 'all'
  })
}
</script>