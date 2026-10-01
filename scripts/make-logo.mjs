// Generates transparent, recoloured logo variants from the supplied raster logo.
// Usage: node scripts/make-logo.mjs
// Replace public/brand/source.webp (or swap to an SVG) and re-run when the client supplies final artwork.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "public/brand/source.webp";
const OUT = "public/brand";

// Crop regions measured on the 992×2000 source artwork.
const regions = {
  mark: { left: 260, top: 60, width: 470, height: 1260 },
  wordmark: { left: 110, top: 1420, width: 780, height: 420 },
  full: { left: 110, top: 60, width: 780, height: 1790 },
};

const colors = {
  light: [243, 241, 236], // bone, for dark backgrounds
  dark: [26, 26, 28], // charcoal, for light backgrounds
};

// Logo ink is ~#636363 on white: map luminance to alpha so edges stay anti-aliased.
const INK = 99;

async function knockout(region, [r, g, b]) {
  const { data, info } = await sharp(SRC)
    .flatten({ background: "#ffffff" })
    .extract(region)
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < info.width * info.height; i++) {
    const lum = data[i * info.channels];
    const a = Math.max(0, Math.min(255, Math.round(((255 - lum) / (255 - INK)) * 255)));
    out[i * 4] = r;
    out[i * 4 + 1] = g;
    out[i * 4 + 2] = b;
    out[i * 4 + 3] = a < 12 ? 0 : a;
  }
  return sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toBuffer()
    .then((buf) => sharp(buf).trim({ threshold: 1 }).png().toBuffer());
}

await mkdir(OUT, { recursive: true });

for (const [name, region] of Object.entries(regions)) {
  for (const [tone, rgb] of Object.entries(colors)) {
    const buf = await knockout(region, rgb);
    await sharp(buf).toFile(`${OUT}/logo-${name}-${tone}.png`);
  }
}

// App icons: light key mark centred on ink.
async function icon(size, file) {
  const mark = await sharp(await knockout(regions.mark, colors.light))
    .resize({ height: Math.round(size * 0.78), fit: "inside" })
    .toBuffer();
  await sharp({
    create: { width: size, height: size, channels: 4, background: { r: 14, g: 14, b: 15, alpha: 1 } },
  })
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toFile(file);
}

await icon(512, "src/app/icon.png");
await icon(180, "src/app/apple-icon.png");

console.log("Logo variants written to", OUT);
