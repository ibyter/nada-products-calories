import { readFileSync, writeFileSync } from "fs";

const images = JSON.parse(readFileSync("images.json", "utf8"));
let html = readFileSync("index.html", "utf8");

// For each product url→img pair, find the matching line in the products array
// and inject `img: "..."` right after the `cat:` field on that object.
let patched = 0;
for (const [url, imgUrl] of Object.entries(images)) {
  // Match the product line that has this URL, capture up to end of object
  // Each product ends at the closing `},` on the same or nearby line.
  // We target: url:'<url>', ... cat:'...' }
  // and insert img after cat field.
  const escaped = url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `(url:'${escaped}',[^}]+?cat:'[^']+')(\\s*\\})`,
    "s"
  );
  if (re.test(html)) {
    html = html.replace(re, `$1, img:'${imgUrl}'$2`);
    patched++;
  } else {
    process.stderr.write(`⚠ No match for: ${url}\n`);
  }
}

writeFileSync("index.html", html);
process.stderr.write(`Patched ${patched} products.\n`);
