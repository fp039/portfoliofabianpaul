import type { ImageMetadata } from 'astro';

// Blog Header Images
import fotografiskaHeader from '../assets/images/blog/fotografiska/fotografiska-1.jpg';
import welcomeHeader from '../assets/images/blog/design_code_bridge.jpg';

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
  }
} as const;

export type BlogKey = keyof typeof blogImages; 