# 2Glaciares Pressure Washing — website

Marketing site for 2Glaciares Pressure Washing (South Florida). Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, Radix primitives (shadcn-style), Framer Motion and Lucide icons.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks)
npm run lint
```

## Deployment (GitHub Pages)

The site is a static export (`output: 'export'` in `next.config.ts`). Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with `NEXT_PUBLIC_BASE_PATH=/<repo-name>` and publishes the `out/` folder to GitHub Pages.

- Local production preview of the exported site: `NEXT_PUBLIC_BASE_PATH=/2glaciares-site npm run build && npx serve out` then open `http://localhost:3000/2glaciares-site/`.
- Moving to a custom domain later: set the Pages custom domain and drop `NEXT_PUBLIC_BASE_PATH` from the workflow.
- Old URLs (`/residential`, `/roof-cleaning`, …) are static pages under `app/[legacy]/` that meta-refresh to the new `/services/<slug>/` routes, because a static host cannot do server redirects.

## Structure

| Path | Purpose |
|---|---|
| `app/` | Routes: home, `/services`, `/services/[slug]`, `/about`, `/gallery`, `/faq`, `/contact` |
| `lib/quote.ts` | Quote form field parsing and validation (client-side) |
| `app/[legacy]/` | Static redirect pages for the old site's URLs |
| `app/fonts/` | Self-hosted variable fonts (Bricolage Grotesque display, Manrope body) |
| `app/globals.css` | Design tokens (`@theme`), base styles and custom utilities |
| `components/ui/` | Button, Accordion, Sheet primitives |
| `components/site/` | Header, footer, mobile call bar, logo, photo slot, page hero |
| `components/sections/` | Home and inner-page sections |
| `components/motion/` | Reveal / stagger / counter helpers (respect `prefers-reduced-motion`) |
| `lib/site.ts` | Business details: name, phone, hours, service areas, nav |
| `lib/services.ts` | The ten services and their copy |
| `lib/faq.ts` | FAQ entries |

## Video

`public/video/` holds three 8-second clips encoded for the web (MP4 H.264 + WebM VP9, muted, ~1.4–2.1 MB each) with JPEG posters:

- `hero-driveway` and `hero-siding` — the home hero background. `components/sections/hero-video.tsx` crossfades between them and `components/sections/hero.tsx` shows the "Now showing" caption. Add or reorder clips in the `clips` array there.
- `residential-house` — plays in the residential card on the home page via `components/site/ambient-video.tsx`, which only plays while in view.

Both components fall back to the poster image when `prefers-reduced-motion` is set or autoplay is blocked. The siding clip had a gauge graphic burned into its top-right corner; it was removed with ffmpeg's `delogo` filter (`delogo=x=1088:y=1:w=190:h=198`) so the full frame is kept. Re-encode new footage with:

```bash
ffmpeg -i in.mp4 -an -vf scale=1280:-2 -c:v libx264 -pix_fmt yuv420p -crf 24 -preset slow -movflags +faststart out.mp4
ffmpeg -i in.mp4 -an -vf scale=1280:-2 -c:v libvpx-vp9 -crf 35 -b:v 0 -row-mt 1 out.webm
ffmpeg -ss 0.5 -i in.mp4 -frames:v 1 -q:v 3 out.jpg
```

## Photos

Photos live in `public/images/` and come from Pexels (free for commercial use, no attribution required). `public/images/CREDITS.md` lists the source page for each file. Swap any of them for the business's own photos by replacing the file and keeping the name, or by changing the `src` where it is used:

- Hero: `components/sections/hero.tsx`
- Service cards and detail pages: the `image` field on each entry in `lib/services.ts`
- Residential split card: `components/sections/split.tsx`
- Before/after slider: `<BeforeAfterSlider beforeSrc="…" afterSrc="…" />` on the home, gallery and service pages
- About and Gallery: `app/about/page.tsx`, `app/gallery/page.tsx`

Every image renders through `components/site/photo.tsx`, which falls back to a branded gradient when `src` is missing.

**Before/after is simulated for now.** When only `afterSrc` is passed, the slider shows the same photo with a dark, desaturated filter on the "before" side. Replace it with real before/after pairs (`beforeSrc` + `afterSrc`) from actual jobs before launch so the comparison is genuine.

## Content to verify before launch

These were written as sensible defaults and must be confirmed with the business owner:

- `lib/site.ts` → `hours` and `serviceAreas` (the original site only said "South Florida")
- `lib/faq.ts` → job-duration and soft-wash answers
- `lib/services.ts` → "what's included" and "ideal for" lists
- `site.url` for canonical URLs and Open Graph

## Wiring the quote form

The form validates in the browser (`lib/quote.ts`) and, when `NEXT_PUBLIC_QUOTE_ENDPOINT` is set at build time, POSTs the fields as JSON to that URL (for example a Formspree, Basin or Make/Zapier webhook). Without the variable it shows the success state without sending anything, which is fine for a preview but must be wired before launch. Set the variable as a repository secret and pass it in the workflow's build step.
