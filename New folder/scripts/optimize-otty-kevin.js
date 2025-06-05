import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../public/assets/otty_kevin_optimized');
const files = ['2.png', '6.png'];

async function optimizeImages() {
  for (const file of files) {
    const inputPath = path.join(sourceDir, file);

    if (!fs.existsSync(inputPath)) {
      console.log(`File not found: ${inputPath}`);
      continue;
    }

    // Create optimized versions
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(path.join(sourceDir, `${path.parse(file).name}_optimized.webp`));

    await sharp(inputPath)
      .avif({ quality: 65 })
      .toFile(path.join(sourceDir, `${path.parse(file).name}_optimized.avif`));

    // Create responsive versions
    await sharp(inputPath)
      .resize(640)
      .webp({ quality: 80 })
      .toFile(path.join(sourceDir, `${path.parse(file).name}_640w.webp`));

    await sharp(inputPath)
      .resize(640)
      .avif({ quality: 65 })
      .toFile(path.join(sourceDir, `${path.parse(file).name}_640w.avif`));

    await sharp(inputPath)
      .resize(1024)
      .webp({ quality: 80 })
      .toFile(path.join(sourceDir, `${path.parse(file).name}_1024w.webp`));

    await sharp(inputPath)
      .resize(1024)
      .avif({ quality: 65 })
      .toFile(path.join(sourceDir, `${path.parse(file).name}_1024w.avif`));

    console.log(`Optimized ${file}`);
  }
}

optimizeImages().catch(err => console.error('Error optimizing images:', err));
