// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';
import seoIntegration from './src/integrations/seo-integration-fixed.js';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  site: 'https://zoddev.site/',
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
      titleTemplate: '%s | zoddev Portfolio',
      defaultTitle: 'zoddev Portfolio',
      defaultDescription: 'Portfolio de développeur web et mobile freelance spécialisé en React, React Native, Astro.js et technologies web modernes.',
      defaultImage: '/assets/social-preview.jpg',
      siteUrl: 'https://zoddev.site',
      twitterHandle: '@zoddev',
      language: 'fr',
    })
  ],
});