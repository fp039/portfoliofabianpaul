<template>
  <article class="group relative overflow-hidden bg-[#1A1A1A] transition-all hover:scale-[1.02] hover:bg-[#222222]">
    <a :href="getRoutePath(`/blog/${slug}`)" class="block">
      <div class="aspect-video overflow-hidden">
        <img 
          :src="image" 
          :alt="title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div class="p-8 space-y-6">
        <div class="flex items-center gap-4 text-text-secondary">
          <time :datetime="date" class="text-fluid-xsm">{{ formattedDate }}</time>
          <span v-if="readingTime" class="w-1 h-1 rounded-full bg-accent"></span>
          <span v-if="readingTime" class="text-fluid-xsm">{{ readingTime }} min Lesezeit</span>
        </div>
        
        <h3 class="text-fluid-lg font-medium text-text-primary leading-tight">{{ title }}</h3>
        <p class="text-fluid-sm text-text-secondary leading-relaxed line-clamp-2">{{ excerpt }}</p>
        
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tag in tags" 
            :key="tag"
            class="px-3 py-1 text-fluid-xsm rounded-full bg-accent/10 text-accent"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </a>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getRoutePath } from '../utils/paths';

const props = defineProps<{
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readingTime?: number;
  tags: string[];
}>();

const formattedDate = computed(() => {
  try {
    const [day, month, year] = props.date.split('.');
    const date = new Date(+year, +month - 1, +day);
    return new Intl.DateTimeFormat('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  } catch (e) {
    console.error('Error formatting date:', e);
    return props.date;
  }
});
</script>