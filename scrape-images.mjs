const urls = [
  "https://nada.com.sa/en/product/fresh-cream/",
  "https://nada.com.sa/en/product/turkish-labneh/",
  "https://nada.com.sa/en/product/sour-cream/",
  "https://nada.com.sa/en/product/greek-labneh/",
  "https://nada.com.sa/en/product/canned-fava-beans-egyptian-recipe/",
  "https://nada.com.sa/en/product/canned-fava-beans-chili/",
  "https://nada.com.sa/en/product/greek-yoghurt-berry/",
  "https://nada.com.sa/en/product/canned-fava-beans-saudi-koshna/",
  "https://nada.com.sa/en/product/greek-yoghurt-passion-fruit/",
  "https://nada.com.sa/en/product/greek-yoghurt-natural-honey/",
  "https://nada.com.sa/en/product/canned-fava-beans-secret-recipe/",
  "https://nada.com.sa/en/product/mango-mixed-fruits-drink-juice/",
  "https://nada.com.sa/en/product/beetroot-raspberry-juice/",
  "https://nada.com.sa/en/product/beetroot-blackcurrant-juice/",
  "https://nada.com.sa/en/product/apple-juice-with-pulp/",
  "https://nada.com.sa/en/product/mixed-fruits-drink-juice/",
  "https://nada.com.sa/en/product/greek-yoghurt-plain/",
  "https://nada.com.sa/en/product/greek-yoghurt-0-fat-mango-peach/",
  "https://nada.com.sa/en/product/drinking-greek-yoghurt-berry/",
  "https://nada.com.sa/en/product/lemon-mint-drink-juice/",
  "https://nada.com.sa/en/product/pineapple-juice-no-sugar-added/",
  "https://nada.com.sa/en/product/canned-baked-beans-tomato-sauce/",
  "https://nada.com.sa/en/product/apple-juice-no-sugar/",
  "https://nada.com.sa/en/product/raspberry-drink-juice/",
  "https://nada.com.sa/en/product/canned-green-peas/",
  "https://nada.com.sa/en/product/mango-grape-drink-juice/",
  "https://nada.com.sa/en/product/orange-grape-juice/",
  "https://nada.com.sa/en/product/pomegranate-drink-juice/",
  "https://nada.com.sa/en/product/greek-yoghurt-low-fat-blueberry/",
  "https://nada.com.sa/en/product/drinking-greek-yoghurt-passion-chia/",
  "https://nada.com.sa/en/product/orange-carrot-mixed-juice/",
  "https://nada.com.sa/en/product/greek-yoghurt-0-fat-mixed-berry/",
  "https://nada.com.sa/en/product/kiwi-lime-drink-juice/",
  "https://nada.com.sa/en/product/greek-yoghurt-low-fat-strawberry/",
  "https://nada.com.sa/en/product/drinking-greek-yoghurt-blackberry-raspberry-0-fat/",
  "https://nada.com.sa/en/product/canned-red-kidney-beans/",
  "https://nada.com.sa/en/product/orange-juice-no-sugar/",
  "https://nada.com.sa/en/product/drinking-greek-yoghurt-mango/",
  "https://nada.com.sa/en/product/drinking-greek-yoghurt-strawberry-cereal/",
  "https://nada.com.sa/en/product/guava-juice/",
  "https://nada.com.sa/en/product/greek-yoghurt-red-fruits-chia/",
  "https://nada.com.sa/en/product/power-milk-425ml-coffee/",
  "https://nada.com.sa/en/product/power-milk-chocolate/",
  "https://nada.com.sa/en/product/power-milk-vanilla-mixed-fruit/",
  "https://nada.com.sa/en/product/protein-milk-320ml-coffee/",
  "https://nada.com.sa/en/product/junior-chocolate-milk-girls/",
  "https://nada.com.sa/en/product/junior-chocolate-milk-boys/",
  "https://nada.com.sa/en/product/junior-strawberry-milk-girls/",
  "https://nada.com.sa/en/product/junior-strawberry-milk-boys/",
  "https://nada.com.sa/en/product/canned-fava-beans-plain-medammes/",
  "https://nada.com.sa/en/product/power-milk-strawberry-with-mixed-fruit/",
  "https://nada.com.sa/en/product/canned-cooked-chickpeas/",
  "https://nada.com.sa/en/product/protein-laban-full-fat/",
  "https://nada.com.sa/en/product/premium-grape-berries-floridas-natural-juice/",
  "https://nada.com.sa/en/product/drinking-greek-yoghurt-plain-0-fat/",
  "https://nada.com.sa/en/product/drinking-greek-yoghurt-plain/",
  "https://nada.com.sa/en/product/premium-pomegranate-floridas-natural-juice/",
  "https://nada.com.sa/en/product/greek-yoghurt-low-fat-plain/",
  "https://nada.com.sa/en/product/greek-yoghurt-0-fat-plain/",
  "https://nada.com.sa/en/product/fresh-yoghurt-full-cream/",
  "https://nada.com.sa/en/product/organic-oat-barista-drink/",
  "https://nada.com.sa/en/product/fresh-milk-full-cream/",
  "https://nada.com.sa/en/product/fresh-laban-full-cream/",
  "https://nada.com.sa/en/product/junior-milk-full-cream-girls/",
  "https://nada.com.sa/en/product/junior-milk-full-cream-boys/",
  "https://nada.com.sa/en/product/protein-plain-milk/",
  "https://nada.com.sa/en/product/protein-alphonso-mango-mixed/",
  "https://nada.com.sa/en/product/protein-chocolate-milk/",
  "https://nada.com.sa/en/product/protein-dates-milk/",
  "https://nada.com.sa/en/product/protein-strawberry-mixed-fruits/",
  "https://nada.com.sa/en/product/protein-vanilla-mixed-fruits/",
  "https://nada.com.sa/en/product/tomato-paste/",
  "https://nada.com.sa/en/product/long-life-milk-full-cream/",
  "https://nada.com.sa/en/product/premium-pineapple-floridas-natural-juice/",
  "https://nada.com.sa/en/product/premium-orange-pineapple-floridas-natural-juice/",
  "https://nada.com.sa/en/product/high-protein-vanilla-1l/",
  "https://nada.com.sa/en/product/lacto-free-milk-low-fat/",
  "https://nada.com.sa/en/product/long-life-pineapple-juice/",
  "https://nada.com.sa/en/product/long-life-orange-cocktail-nectar/",
  "https://nada.com.sa/en/product/long-life-apple-juice/",
  "https://nada.com.sa/en/product/long-life-milk-lacto-free-full-cream/",
  "https://nada.com.sa/en/product/premium-orange-most-pulp-floridas-natural-juice/",
  "https://nada.com.sa/en/product/organic-oat-drink/",
  "https://nada.com.sa/en/product/premium-lemonade-floridas-natural-juice/",
  "https://nada.com.sa/en/product/coconut-drink/",
  "https://nada.com.sa/en/product/fresh-yoghurt-low-fat/",
  "https://nada.com.sa/en/product/high-protein-plain/",
  "https://nada.com.sa/en/product/fresh-milk-low-fat/",
  "https://nada.com.sa/en/product/fresh-laban-low-fat/",
  "https://nada.com.sa/en/product/long-life-milk-low-fat/",
  "https://nada.com.sa/en/product/premium-grapefruit-floridas-natural-juice/",
  "https://nada.com.sa/en/product/organic-almond-drink/",
  "https://nada.com.sa/en/product/fresh-milk-skimmed/",
  "https://nada.com.sa/en/product/long-life-skimmed-milk/",
  "https://nada.com.sa/en/product/aryan-fresh-laban-drink/",
  "https://nada.com.sa/en/product/premium-orange-no-pulp-floridas-natural-juice/",
];

function canonicalImage(raw) {
  if (!raw) return "";
  // Strip WP size suffix like -600x600, -300x300, -100x100 etc.
  const clean = raw.replace(/-\d+x\d+(\.\w+)$/, "$1");
  // Re-append -600x600 before extension for consistent size
  return clean.replace(/(\.\w+)$/, "-600x600$1");
}

function extractFromHtml(html) {
  // Strategy A: og:image meta tag
  const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
  if (ogMatch) return canonicalImage(ogMatch[1]);

  // Strategy B: first wp-content/uploads img src in the product gallery area
  const galleryMatch = html.match(/woocommerce-product-gallery[\s\S]{0,2000}?<img[^>]+src=["']([^"']*wp-content\/uploads[^"']+)["']/i);
  if (galleryMatch) return canonicalImage(galleryMatch[1]);

  // Strategy C: any wp-content/uploads image
  const anyMatch = html.match(/<img[^>]+src=["']([^"']*wp-content\/uploads[^"']+\.(jpg|jpeg|png|webp))["']/i);
  if (anyMatch) return canonicalImage(anyMatch[1]);

  return "";
}

const delay = ms => new Promise(r => setTimeout(r, ms));

const results = {};
let ok = 0, fail = 0;

for (const url of urls) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; NutritionScraper/1.0)" }
    });
    const html = await res.text();
    const img = extractFromHtml(html);
    results[url] = img;
    process.stderr.write(`✓ [${img ? "img" : "---"}] ${url}\n`);
    img ? ok++ : fail++;
  } catch (e) {
    results[url] = "";
    process.stderr.write(`✗ [err] ${url}: ${e.message}\n`);
    fail++;
  }
  await delay(200);
}

process.stderr.write(`\nDone: ${ok} images found, ${fail} missing\n`);
process.stdout.write(JSON.stringify(results, null, 2));
