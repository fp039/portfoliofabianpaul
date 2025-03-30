import type { ImageMetadata } from 'astro';

// Blog Header Images
import fotografiskaHeader from '../assets/images/blog/fotografiska/fotografiska-1.jpg';
import welcomeHeader from '../assets/images/blog/design_code_bridge.jpg';
import imageAiHeader from '../assets/images/blog/imageai/hero.jpg';

// Fotografiska Gallery
import fotografiska2 from '../assets/images/blog/fotografiska/fotografiska-2.jpg';
import fotografiska3 from '../assets/images/blog/fotografiska/fotografiska-3.jpg';
import fotografiska4 from '../assets/images/blog/fotografiska/fotografiska-4.jpg';
import fotografiska5 from '../assets/images/blog/fotografiska/fotografiska-5.jpg';
import fotografiska6 from '../assets/images/blog/fotografiska/fotografiska-6.jpg';
import fotografiska7 from '../assets/images/blog/fotografiska/fotografiska-7.jpg';
import fotografiska8 from '../assets/images/blog/fotografiska/fotografiska-8.jpg';
import fotografiska9 from '../assets/images/blog/fotografiska/fotografiska-9.jpg';
import fotografiska10 from '../assets/images/blog/fotografiska/fotografiska-10.jpg';
import fotografiska11 from '../assets/images/blog/fotografiska/fotografiska-11.jpg';

// Image AI Gallery
import imageAi1 from '../assets/images/blog/imageai/image-ai-1.png';
import imageAi2 from '../assets/images/blog/imageai/image-ai-2.png';
import imageAi3 from '../assets/images/blog/imageai/image-ai-3.png';
import imageAi4 from '../assets/images/blog/imageai/image-ai-4.png';
import imageAi5 from '../assets/images/blog/imageai/image-ai-5.png';
import imageAi6 from '../assets/images/blog/imageai/image-ai-6.png';
import imageAi7 from '../assets/images/blog/imageai/image-ai-7.jpeg';
import imageAi8 from '../assets/images/blog/imageai/image-ai-8.png';
import imageAi9 from '../assets/images/blog/imageai/image-ai-9.jpeg';
import imageAi10 from '../assets/images/blog/imageai/image-ai-10.png';
import imageAi11 from '../assets/images/blog/imageai/image-ai-11.png';

export const blogImages = {
  fotografiska: {
    header: fotografiskaHeader,
    gallery: [
      fotografiska2,
      fotografiska3,
      fotografiska4,
      fotografiska5,
      fotografiska6,
      fotografiska7,
      fotografiska8,
      fotografiska9,
      fotografiska10,
      fotografiska11
    ]
  },
  welcome: {
    header: welcomeHeader,
    gallery: []
  },
  'image-ai': {
    header: imageAiHeader,
    gallery: [
      imageAi1,
      imageAi2,
      imageAi3,
      imageAi4,
      imageAi5,
      imageAi6,
      imageAi7,
      imageAi8,
      imageAi9,
      imageAi10,
      imageAi11
    ]
  }
} as const;

export type BlogKey = keyof typeof blogImages; 