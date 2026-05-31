import { readFileSync, writeFileSync } from 'fs';

const images   = JSON.parse(readFileSync('images.json', 'utf8'));     // productUrl -> remoteImgUrl
const localMap = JSON.parse(readFileSync('local-images.json', 'utf8')); // productUrl -> localPath

let html = readFileSync('index.html', 'utf8');
let swapped = 0, skipped = 0;

for (const [productUrl, remoteUrl] of Object.entries(images)) {
  const localPath = localMap[productUrl];
  if (!remoteUrl || !localPath) { skipped++; continue; }

  // Escape for use in regex
  const escaped = remoteUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(escaped, 'g');
  const before = html;
  html = html.replace(re, localPath);
  if (html !== before) swapped++;
  else process.stderr.write(`⚠ Not found in HTML: ${remoteUrl}\n`);
}

writeFileSync('index.html', html);
process.stderr.write(`Swapped ${swapped} URLs, skipped ${skipped}\n`);
