import sharp from 'sharp';
import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateLogos() {
  const outputDir = path.join(__dirname, '..', '..', 'public', 'assets', 'zoddev_logo');

  // Create logos with text "ZodDev"
  const logoConfig = {
    width: 200,
    height: 50,
    channels: 4,
  };

  // Light mode logo
  await sharp({
    create: {
      ...logoConfig,
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    }
  })
  .composite([{
    input: Buffer.from(`<svg width="${logoConfig.width}" height="${logoConfig.height}">
      <text x="10" y="35" font-family="Arial" font-size="30" font-weight="bold" fill="#333333">ZodDev</text>
    </svg>`),
    top: 0,
    left: 0,
  }])
  .png()
  .toFile(path.join(outputDir, 'zoddev_logo_light_mode.png'));

  // Dark mode logo
  await sharp({
    create: {
      ...logoConfig,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([{
    input: Buffer.from(`<svg width="${logoConfig.width}" height="${logoConfig.height}">
      <text x="10" y="35" font-family="Arial" font-size="30" font-weight="bold" fill="#ffffff">ZodDev</text>
    </svg>`),
    top: 0,
    left: 0,
  }])
  .png()
  .toFile(path.join(outputDir, 'zoddev_logo_dark_mode.png'));

  console.log('Generated logo files');
}

generateLogos().catch(console.error);
