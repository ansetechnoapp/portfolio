// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: process.env.NODE_ENV === 'production'
    }
  }),
  site: 'https://zoddev.site/',
  vite: {
    build: {
      rollupOptions: {
        external: ['airtable'],
      },
    },
    ssr: {
      noExternal: ['@supabase/supabase-js']
    }
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
    // Enable experimental responsive images for automatic optimization
    domains: [],
  },
  integrations: [
    tailwind(),
    react(),
  ],
});