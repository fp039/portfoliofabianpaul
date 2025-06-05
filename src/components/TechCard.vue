<template>
  <div data-tech-card class="bg-[#2A2A2A] p-8 rounded-2xl h-full flex flex-col">
    <img :src="iconSrc" :alt="name" class="w-12 h-12 mb-6" />
    <h3 class="text-fluid-lg font-medium text-text-primary mb-2">{{ name }}</h3>
    <span class="text-accent text-fluid-sm mb-4">{{ category }}</span>
    <p class="text-text-secondary/80 text-fluid-sm">{{ description }}</p>
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
      type: [String, Object],
      required: true
    }
  },
  computed: {
    iconSrc() {
      return typeof this.icon === 'object' && this.icon !== null
        ? this.icon.src
        : this.icon
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