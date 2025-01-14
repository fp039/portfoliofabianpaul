<template>
  <div 
    class="group relative overflow-hidden rounded-lg cursor-pointer"
    data-tech-card
    @mouseenter="onHover"
    @mouseleave="onLeave"
  >
    <div class="bg-[#2A2A2A] rounded-xl p-8 hover:bg-[#333333] transition-all duration-300">
      <div class="w-8 h-8 mb-4">
        <img 
          :src="`/icons/${icon}`" 
          :alt="`${name} Icon`"
          class="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 class="text-fluid-lg font-medium mb-2 text-white">{{ name }}</h3>
      <span class="text-accent text-fluid-sm">{{ category }}</span>
      <p class="mt-4 text-text-secondary text-fluid-sm">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  methods: {
    onHover() {
      // Hover Logik hier
    },
    onLeave() {
      // Leave Logik hier
    }
  }
}
</script> 