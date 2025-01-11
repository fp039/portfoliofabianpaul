<template>
  <article class="group relative overflow-hidden rounded-lg bg-[#1A1A1A] transition-all hover:scale-[1.02]">
    <a :href="`/blog/${slug}`" class="block">
      <div class="aspect-video overflow-hidden">
        <img 
          :src="image" 
          :alt="title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div class="p-6 space-y-4">
        <div class="flex items-center gap-4 text-text-secondary">
          <time :datetime="date" class="text-sm">{{ formattedDate }}</time>
          <span class="w-1 h-1 rounded-full bg-accent"></span>
          <span class="text-sm">{{ readingTime }} min Lesezeit</span>
        </div>
        
        <h3 class="text-2xl font-bold text-text-primary">{{ title }}</h3>
        <p class="text-text-secondary line-clamp-2">{{ excerpt }}</p>
        
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tag in tags" 
            :key="tag"
            class="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </a>
  </article>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  slug: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  readingTime: {
    type: Number,
    required: true
  },
  tags: {
    type: Array,
    required: true
  }
});

const formattedDate = computed(() => {
  const date = new Date(props.date);
  return new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
});
</script>