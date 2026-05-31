import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { extname } from 'path';

const images = JSON.parse(readFileSync('images.json', 'utf8'));
mkdirSync('images', { recursive: true });

const delay = ms => new Promise(r => setTimeout(r, ms));

// Build a map: productUrl -> local filename, keyed by position in index.html products array
// We use the product URL as key and derive a slug from the image URL filename
let ok = 0, fail = 0;
const localMap = {}; // imageUrl -> localPath

for (const [productUrl, imgUrl] of Object.entries(images)) {
  if (!imgUrl) { localMap[productUrl] = ''; continue; }

  // Derive a clean filename from the image URL
  const urlPath = new URL(imgUrl).pathname;
  const ext = extname(urlPath) || '.jpg';
  // Use last segment of URL path as filename, sanitized
  const rawName = urlPath.split('/').pop();
  const localName = rawName.replace(/[^a-zA-Z0-9._-]/g, '_');
  const localPath = `images/${localName}`;

  try {
    const res = await fetch(imgUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ImageCache/1.0)' }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(localPath, buf);
    localMap[productUrl] = localPath;
    process.stderr.write(`✓ ${localName} (${Math.round(buf.length/1024)}KB)\n`);
    ok++;
  } catch (e) {
    localMap[productUrl] = '';
    process.stderr.write(`✗ ${imgUrl}: ${e.message}\n`);
    fail++;
  }

  await delay(150);
}

process.stderr.write(`\nDone: ${ok} downloaded, ${fail} failed\n`);
// Output map for patching
process.stdout.write(JSON.stringify(localMap, null, 2));
