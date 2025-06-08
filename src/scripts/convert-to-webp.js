import sharp from 'sharp';
import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function convertToWebP() {
  const backgroundsDir = path.join(__dirname, '..', '..', 'public', 'assets', 'backgrounds');
  const files = await fs.readdir(backgroundsDir);

  for (const file of files) {
    if (file.endsWith('.jpg')) {
      const inputPath = path.join(backgroundsDir, file);
      const outputPath = path.join(backgroundsDir, file.replace('.jpg', '.webp'));

      await sharp(inputPath)
        .webp({
          quality: 90,
          effort: 6,
        })
        .toFile(outputPath);

      console.log(`Converted ${file} to WebP`);
    }
  }
}

convertToWebP().catch(console.error);
