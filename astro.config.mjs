// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://anscod.online/',
  vite: {
    build: {
      rollupOptions: {
        external: ['airtable'],
      },
    },
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});