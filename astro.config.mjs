// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import seoIntegration from './src/integrations/seo-integration-fixed.js';

export default defineConfig({
  site: 'https://anscod.online/',
  vite: {
    build: {
      rollupOptions: {
        external: ['airtable'],
      },
    },
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Default quality for WebP and AVIF formats
        quality: 80,
        // Allow WebP and AVIF formats
        formats: ['webp', 'avif', 'png', 'jpg', 'jpeg'],
      },
    },
  },
  integrations: [
    tailwind(),
    react(),
    seoIntegration({
      titleTemplate: '%s | Anscod Portfolio',
      defaultTitle: 'Anscod Portfolio',
      defaultDescription: 'Portfolio de développeur web et mobile freelance spécialisé en React, React Native, Astro.js et technologies web modernes.',
      defaultImage: '/assets/social-preview.jpg',
      siteUrl: 'https://anscod.online',
      twitterHandle: '@anscod',
      language: 'fr',
    })
  ],
});