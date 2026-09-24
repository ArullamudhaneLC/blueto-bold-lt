# Marketing

Brand assets for **Blueto Tech Pvt Ltd**: the Split B logo, its colour
versions, and the printable brand guidelines.

Not code. Nothing here is imported by the site; the running site lives in
`src/` and `public/`.

## Contents

```
marketing/
├── brand-guidelines.pdf   12-page spec: logo, clear space, colours, gradient, type, misuse, files
└── logo/
    ├── *.svg              Master artwork. Use these.
    └── png/               Transparent PNGs for uploads, docs and slides
```

## Logo

The logo is the **Split B**: a capital B built from an upright and two rounded
halves, with the top half in Signal Blue. The company name is set in Sora Bold
and **already converted to outlines**, so every file looks identical on any
machine and can go straight to a printer.

| File | Background | Use for |
|---|---|---|
| `logo.svg` | Light | Default. Site header, invoices, letterheads, decks |
| `logo-dark.svg` | Dark | Footer, dark slides, sign boards |
| `logo-stacked.svg` | Light | Posters, square spaces |
| `logo-stacked-dark.svg` | Dark | Posters, square spaces on navy |
| `mark.svg` | Light | Symbol only, when the name is already nearby |
| `mark-dark.svg` | Dark | Symbol only on navy or black |
| `mark-black.svg` | Light | One colour: photocopies, rubber stamps, newspaper ads |
| `mark-white.svg` | Dark | One colour: embroidery, engraving, on Signal Blue |
| `mark-small.svg` | Light | 24 px and below. Wider gaps so they don't blur |
| `mark-small-dark.svg` | Dark | 24 px and below on dark |
| `app-icon.svg` | Any | App icon, WhatsApp/LinkedIn/Google profile picture |
| `app-icon-gradient.svg` | Any | Richer app icon. Gradient `#2563EB` → `#0A1A33`, top half `#7DD3FC` |
| `avatar-gradient.svg` | Any | Round profile picture with the same gradient |
| `favicon.svg` | Any | Browser tab |

PNGs in `png/` have transparent backgrounds. The marks and app icon are
1024 px, the lockups are 2000 px wide, plus `favicon-32.png` and
`apple-touch-icon-180.png`.

The gradient is for app icons and profile pictures only. Everything printed,
stitched or stamped uses the flat colours, because gradients can't be
reproduced there.

**Three rules:** keep 2x clear space around the logo (x = the upright's
width), never recolour or re-space it, and switch to `mark-small` at 24 px and
below.

### Editing

Don't edit the SVGs by hand. Twelve come from one generator, and the two
gradient icons reuse its exact B geometry, so a tweak to one file would drift
from the rest. Ask Claude to regenerate them, then
re-export the PNGs with headless Chrome (no Inkscape or ImageMagick on this
machine). The PDF has to be rebuilt too, or it will show the old artwork.

## Colour

| Name | HEX | Use |
|---|---|---|
| Navy | `#0A1A33` | Logo, headlines, dark backgrounds |
| Signal Blue | `#2F7BFF` | Top half of the logo, links, buttons |
| Cloud | `#F5F8FC` | Page backgrounds, text on navy |
| Ice | `#E3EBF7` | Panels, cards |
| Slate | `#4A5A73` | Body text, captions |

CMYK values are in the PDF. They are converted from the screen colours, so ask
the printer for a colour proof before any large print run.

## Not done yet

- The website still uses the old logo and the earlier terracotta palette.
  Switching `src/` and `public/favicon.svg` over is a separate change.
- Search Indian trademark records for similar split-B marks before filing or
  printing in bulk. Use **™**, not ®, until a registration is actually issued.
