# NetForge Digital

Frontend build for NetForge Digital — a digital marketing & web development agency site.
Built with Next.js 15 (App Router, TypeScript), Tailwind CSS v4, Framer Motion, Phosphor Icons, and Radix UI.
Frontend-only: all data is hardcoded in `src/data/`, no backend or API calls.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Structure

- `src/app` — 5 routes: Home, Services, Work, About, Contact
- `src/components/ui` — reusable primitives (cursor, magnetic button, glass card, counters, code typer, ROI slider, etc.)
- `src/components/sections` — page sections (navbar, footer, hero, bento grid, sticky case-study scroll, etc.)
- `src/data` — hardcoded content (services, portfolio, team, testimonials)
- `src/styles/tokens.css` — full design token system (colors, glass, glow, clip-path dividers, ambient orbs)

## Notes

- Custom cursor and magnetic buttons are automatically disabled on touch devices.
- The `/work` page's signature element is a sticky horizontal-scroll case-study section (desktop) that degrades to a swipeable carousel on mobile.
- All images are loaded from Unsplash via `next/image` — `next.config.ts` whitelists `images.unsplash.com`.
