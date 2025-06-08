import sharp from 'sharp';
import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateProfileImages() {
  const outputDir = path.join(__dirname, '..', '..', 'public', 'assets', 'otty_kevin_optimized');

  // Create placeholder profile images
  const imageConfig = {
    width: 300,
    height: 300,
    channels: 4,
  };

  for (const index of [2, 6]) {
    // Create a circular profile placeholder
    await sharp({
      create: {
        ...imageConfig,
        background: { r: 200, g: 200, b: 200, alpha: 1 }
      }
    })
    .composite([{
      input: Buffer.from(`<svg width="${imageConfig.width}" height="${imageConfig.height}">
        <circle cx="150" cy="150" r="150" fill="#cccccc"/>
        <text x="150" y="165" font-family="Arial" font-size="24" fill="#666666" text-anchor="middle">Profile ${index}</text>
      </svg>`),
      top: 0,
      left: 0,
    }])
    .png()
    .toFile(path.join(outputDir, `${index}.png`));

    console.log(`Generated profile image ${index}.png`);
  }
}

generateProfileImages().catch(console.error);
