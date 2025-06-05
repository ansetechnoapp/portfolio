// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import seoIntegrationServerless from './src/integrations/seo-integration-serverless.js';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
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
    seoIntegrationServerless({
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