// Generates public/og.png (1200×630) — typographic OG card matching the
// site design system (#050505 bg, Outfit variable, violet accent).
// Run with: pnpm og
//
// Fonts: static Outfit instances live in scripts/fonts/Outfit-{400..900}.ttf.
// If missing, the script downloads the variable TTF and instantiates the
// weights with fonttools (uv). NOTE: satori's opentype fork cannot parse
// Outfit's variable fvar table — do NOT feed it the variable font directly.
import fs from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const { promises: fsp } = fs;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const FONT_DIR = path.join(__dirname, "fonts");
const VAR_FONT_PATH = path.join(FONT_DIR, "Outfit.ttf");
const OUT_PATH = path.join(ROOT, "public", "og.png");
const SITE = "portfolio-ayverson.pages.dev";
const WEIGHTS = [400, 500, 600, 700, 900];

const staticPath = (w) => path.join(FONT_DIR, `Outfit-${w}.ttf`);

async function ensureFonts() {
  const missing = WEIGHTS.filter((w) => !fs.existsSync(staticPath(w)));
  if (missing.length === 0) return;

  try {
    await fsp.access(VAR_FONT_PATH);
  } catch {
    const url =
      "https://github.com/google/fonts/raw/main/ofl/outfit/Outfit%5Bwght%5D.ttf";
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Font download failed: HTTP ${res.status}`);
    await fsp.mkdir(FONT_DIR, { recursive: true });
    await fsp.writeFile(VAR_FONT_PATH, Buffer.from(await res.arrayBuffer()));
    console.log("Downloaded Outfit variable TTF");
  }

  for (const w of missing) {
    console.log(`Instantiating Outfit wght=${w} via fonttools (uv)...`);
    execSync(
      `uv run --with fonttools fonttools varLib.instancer "${VAR_FONT_PATH}" wght=${w} -o "${staticPath(w)}"`,
      { stdio: "inherit" }
    );
  }
}

await ensureFonts();
const fonts = WEIGHTS.map((w) => ({
  name: "Outfit",
  data: fs.readFileSync(staticPath(w)),
  weight: w,
  style: "normal",
}));

const svg = await satori(
  {
    type: "div",
    props: {
      style: {
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        background: "#050505",
        fontFamily: "Outfit",
      },
      children: [
        // Eyebrow row: violet dot + role label
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 42,
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    width: 14,
                    height: 14,
                    borderRadius: 999,
                    background: "#a78bfa",
                  },
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: 26,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.7)",
                  },
                  children: "EDITOR DE VIDEO & MOTION DESIGNER",
                },
              },
            ],
          },
        },
        // Headline — hero copy, two lines
        {
          type: "div",
          props: {
            style: {
              fontSize: 104,
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              whiteSpace: "pre-wrap",
              color: "#ffffff",
              marginBottom: 30,
            },
            children: "El detalle está\nen cada corte.",
          },
        },
        // Subtitle — services line
        {
          type: "div",
          props: {
            style: {
              fontSize: 32,
              fontWeight: 500,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 64,
            },
            children:
              "Reels · Shorts · Montajes cinematográficos para creadores y streamers",
          },
        },
        // Footer — brand + domain
        {
          type: "div",
          props: {
            style: {
              fontSize: 24,
              fontWeight: 700,
              color: "#a78bfa",
            },
            children: `VFX AYVERSON — ${SITE}`,
          },
        },
      ],
    },
  },
  { width: 1200, height: 630, fonts }
);

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: 1200 },
  font: { loadSystemFonts: false },
});
const png = resvg.render().asPng();
await fsp.writeFile(OUT_PATH, png);
console.log(`public/og.png written (${(png.length / 1024).toFixed(1)} KB)`);
