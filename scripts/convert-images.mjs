import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');

const remoteImages = [
  {
    url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000&auto=format&fit=crop',
    output: 'hero-poster.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    output: 'interior-room.webp'
  },
  {
    url: 'https://i.ibb.co/QvkgNjLL/upscaled-2-K.jpg',
    output: 'road-night.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop',
    output: 'environment-bg.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop',
    output: 'lab-bg.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=2000&auto=format&fit=crop',
    output: 'plaster-texture.webp'
  },
  {
    url: 'https://www.transparenttextures.com/patterns/stardust.png',
    output: 'stardust.webp'
  },
  {
    url: 'https://www.transparenttextures.com/patterns/concrete-wall.png',
    output: 'concrete-wall.webp'
  }
];

const sourceExtensions = new Set(['.png', '.jpg', '.jpeg']);

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

async function downloadRemoteImages() {
  for (const image of remoteImages) {
    const target = path.join(publicDir, image.output);
    if (await exists(target)) {
      continue;
    }

    console.log(`Downloading ${image.output}`);
    const response = await fetch(image.url, {
      headers: {
        'User-Agent': 'Spettro build image optimizer'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to download ${image.url}: ${response.status} ${response.statusText}`);
    }

    const bytes = Buffer.from(await response.arrayBuffer());
    await sharp(bytes)
      .rotate()
      .webp({ quality: 82, effort: 6 })
      .toFile(target);
  }
}

async function convertLocalImages() {
  const files = await walk(publicDir);

  for (const file of files) {
    const extension = path.extname(file).toLowerCase();
    if (!sourceExtensions.has(extension)) {
      continue;
    }

    const target = path.join(path.dirname(file), `${path.basename(file, extension)}.webp`);
    console.log(`Converting ${path.relative(publicDir, file)} -> ${path.relative(publicDir, target)}`);

    await sharp(file)
      .rotate()
      .webp({ quality: 84, effort: 6 })
      .toFile(target);

    await fs.unlink(file);
  }
}

await downloadRemoteImages();
await convertLocalImages();
console.log('Image conversion complete.');
