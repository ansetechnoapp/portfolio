import sharp from 'sharp';
import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateBackgrounds() {
  const sizes = [
    { width: 1440, suffix: '1440w' },
    { width: 1024, suffix: '1024w' },
    { width: 640, suffix: '640w' },
    { width: 480, suffix: '480w' },
    { width: 320, suffix: '320w' }
  ];

  const backgrounds = [
    { name: 'bg-main-light', color: '#ffffff' },
    { name: 'bg-footer-light', color: '#f5f5f5' },
    { name: 'bg-subtle-1-light', color: '#fafafa' },
    { name: 'bg-subtle-2-light', color: '#f0f0f0' }
  ];

  for (const bg of backgrounds) {
    for (const size of sizes) {
      const outputPath = path.join(__dirname, '..', '..', 'public', 'assets', 'backgrounds', `${bg.name}-${size.suffix}.jpg`);
      
      // Create a gradient background
      await sharp({
        create: {
          width: size.width,
          height: Math.round(size.width * 0.5625), // 16:9 aspect ratio
          channels: 4,
          background: bg.color
        }
      })
      .jpeg({
        quality: 90,
        progressive: true
      })
      .toFile(outputPath);

      console.log(`Generated ${outputPath}`);
    }
  }
}

generateBackgrounds().catch(console.error);
