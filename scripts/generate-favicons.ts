import sharp from 'sharp';
import fs from 'fs/promises';

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512
};

async function generateFavicons() {
  const svg = await fs.readFile('public/favicon.svg');
  
  for (const [filename, size] of Object.entries(sizes)) {
    await sharp(svg)
      .resize(size, size)
      .png()
      .toFile(`public/${filename}`);
  }
  
  // Generiere auch favicon.ico (enthält 16x16 und 32x32)
  await sharp(svg)
    .resize(32, 32)
    .toFormat('ico')
    .toFile('public/favicon.ico');
}

generateFavicons().catch(console.error); 