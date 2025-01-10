<template>
  <article class="group relative overflow-hidden rounded-lg bg-[#1A1A1A] transition-all hover:scale-[1.02]">
    <a :href="`/blog/${slug}`" class="block">
      <div class="aspect-video overflow-hidden">
        <img 
          :src="image" 
          :alt="title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div class="p-6 space-y-4">
        <div class="flex items-center gap-4 text-text-secondary">
          <time :datetime="date" class="text-sm">{{ formatDate(date) }}</time>
          <span class="w-1 h-1 rounded-full bg-accent"></span>
          <span class="text-sm">{{ readingTime }} min read</span>
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

<script setup lang="ts">
interface Props {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readingTime: number;
  tags: string[];
}

defineProps<Props>();

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>