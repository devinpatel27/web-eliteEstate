# Elite Estate — Website

Marketing site for Elite Estate, Ahmedabad. Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion · Leaflet.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Where to edit things

| What | File |
| --- | --- |
| Advisors & phone numbers, office address, map pin, social links | `src/data/site.ts` |
| The 12 areas: copy, coordinates, featured flag | `src/data/areas.ts` |
| Values, services, reasons, process, testimonials (sample — replace), stats | `src/data/content.ts` |
| All photography (currently Unsplash) | `src/data/images.ts` |
| Colour tokens, fonts, map styling | `src/app/globals.css` |
| Map tile provider (Esri Dark Gray, keyless) | `TILES` in `src/components/areas/AreaMap.tsx` |
| Enquiry handling (currently logs to the server console) | `src/app/api/enquiry/route.ts` |

## Logo

`public/brand/source.webp` is the supplied artwork. `node scripts/make-logo.mjs` regenerates the light/dark
key mark, wordmark, full lockup, the framed crest used in the header (`logo-framed-*`) and footer (`logo-crest-*`, with tagline), plus `src/app/icon.png` / `apple-icon.png`. Swap the source (ideally for an SVG) and re-run.

## Before launch

- Set `NEXT_PUBLIC_SITE_URL` to the live domain, and refine the approximate office pin (`geo`) in `src/data/site.ts`.
- Replace sample testimonials and confirm the stats in `src/data/content.ts`.
- Connect `/api/enquiry` to email or a CRM.
- Swap Unsplash photos for commissioned photography where possible.
