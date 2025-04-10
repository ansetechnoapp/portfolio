// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://anscod.online/',
  vite: {
    build: {
      rollupOptions: {
        external: ['airtable'],
      },
    },
  },
  integrations: [
    tailwind(),
    react()
  ],
});