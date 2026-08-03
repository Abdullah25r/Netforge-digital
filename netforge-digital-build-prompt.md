# NetForge Digital — Complete Frontend Build Prompt

> **Paste this entire prompt into Claude, Cursor, or any AI coding assistant to generate the complete NetForge Digital agency website.**

---

## PROJECT IDENTITY

You are building the **complete frontend** of a digital marketing & web development agency website called **NetForge Digital**. This is a frontend-only build — zero backend, zero API calls, all data is hardcoded. The design must feel like it was crafted by a world-class creative agency: technically impressive, visually jaw-dropping, and deeply professional. Every prospective client landing on this site should immediately feel confident hiring this team.

**Brand meaning:** The name NetForge Digital fuses "networking/internet" with "forging/crafting" — implying precision-built digital products. The logo is a stylized **N** shape composed of PCB circuit lines on the left morphing into a rising arrow on the right, colored dark slate → cyan blue. Every design decision must echo this identity: technical precision meets upward momentum.

---

## TECH STACK (STRICT — DO NOT DEVIATE)

```
Framework:     Next.js 15 (App Router, TypeScript)
Styling:       Tailwind CSS v4
Animations:    Framer Motion v12
Icons:         Phosphor Icons (@phosphor-icons/react) — NO lucide-react, NO heroicons
3D/WebGL:      Three.js (for hero particle system only, optional but encouraged)
UI Primitives: Radix UI (unstyled, build your own styles on top)
Fonts:         next/font/google — Space Grotesk (display) + Inter (body) + JetBrains Mono (code)
Utilities:     clsx, tailwind-merge
Linting:       ESLint + Prettier (include config files)
```

**Project setup command:**
```bash
npx create-next-app@latest netforge-digital \
  --typescript --tailwind --eslint --app --src-dir \
  --import-alias "@/*"
```

**Then install:**
```bash
npm install framer-motion @phosphor-icons/react @radix-ui/react-dialog \
  @radix-ui/react-tabs @radix-ui/react-accordion @radix-ui/react-tooltip \
  clsx tailwind-merge three @types/three
```

---

## COLOR SYSTEM (DESIGN TOKENS)

Define these in `src/styles/tokens.css` as CSS custom properties AND mirror them in `tailwind.config.ts`:

```css
:root {
  /* Background Layers */
  --bg-void:       #030308;   /* deepest dark — page base */
  --bg-surface:    #0a0a14;   /* card surfaces */
  --bg-elevated:   #10101e;   /* elevated panels */
  --bg-overlay:    #16162a;   /* modals, drawers */

  /* Brand Gradient — primary identity */
  --brand-dark:    #0f2027;   /* gradient start */
  --brand-mid:     #1a3a4a;   /* gradient mid */
  --brand-cyan:    #00c8e0;   /* primary accent — electric cyan */
  --brand-blue:    #0080ff;   /* secondary accent — deep blue */
  --brand-violet:  #6c3fff;   /* tertiary accent — violet pop */

  /* Glow Variables */
  --glow-cyan:     0 0 40px rgba(0,200,224,0.4), 0 0 80px rgba(0,200,224,0.15);
  --glow-blue:     0 0 40px rgba(0,128,255,0.4), 0 0 80px rgba(0,128,255,0.15);
  --glow-violet:   0 0 40px rgba(108,63,255,0.4), 0 0 80px rgba(108,63,255,0.15);

  /* Glass */
  --glass-bg:      rgba(255,255,255,0.03);
  --glass-border:  rgba(255,255,255,0.08);
  --glass-blur:    blur(20px);

  /* Typography */
  --text-primary:   #f0f4ff;
  --text-secondary: #8892b0;
  --text-muted:     #4a5580;

  /* Noise texture (inline SVG) */
  --noise-url: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
}
```

**Gradient presets (use as Tailwind class or inline style):**
```
text-gradient-primary:  linear-gradient(135deg, #00c8e0, #0080ff, #6c3fff)
bg-gradient-hero:       linear-gradient(135deg, #030308 0%, #0f1929 50%, #030308 100%)
bg-gradient-card:       linear-gradient(145deg, rgba(0,200,224,0.05), rgba(108,63,255,0.05))
```

---

## GLOBAL DESIGN RULES

### Glassmorphism (apply to all cards/panels)
```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
}
```

### Noise + Grain Overlay (apply once on `<body>` as fixed pseudo-element)
```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: var(--noise-url);
  pointer-events: none;
  z-index: 9999;
  opacity: 0.35;
  mix-blend-mode: overlay;
}
```

### Grid Blueprint Lines (apply on technical/dev sections)
```css
.grid-blueprint {
  background-image:
    linear-gradient(rgba(0,200,224,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,200,224,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

### Organic Border Radius (use on hero blobs and section accents)
```css
.organic-blob { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
```

### Clip-Path Polygon Dividers (use between sections)
Define these utility classes and apply between page sections:
```css
/* Angled cut — bottom of section going into next */
.clip-angled-down  { clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%); }
.clip-angled-up    { clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%); }
.clip-chevron-down { clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%); }
.clip-chevron-up   { clip-path: polygon(0 0, 50% 15%, 100% 0, 100% 100%, 0 100%); }
.clip-wave         { clip-path: polygon(0 0, 100% 0, 100% 80%, 75% 100%, 50% 80%, 25% 100%, 0 80%); }
.clip-jagged       { clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 80% 90%, 70% 100%, 60% 90%, 50% 100%, 40% 90%, 30% 100%, 20% 90%, 10% 100%, 0 90%); }
```
Use these dividers between EVERY major section transition — vary the shape per transition to create visual rhythm.

### Mix-Blend Accent Orbs
Floating abstract background orbs using `mix-blend-mode: screen` on a dark background to create ambient glow without destroying text readability:
```css
.ambient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  mix-blend-mode: screen;
  pointer-events: none;
  opacity: 0.5;
}
```

---

## TYPOGRAPHY SYSTEM

```typescript
// src/lib/fonts.ts
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
})
```

**Scale — use CSS clamp() for ALL heading sizes:**
```css
--text-hero:   clamp(3rem, 8vw, 7rem);      /* H1 hero */
--text-xl:     clamp(2rem, 5vw, 4rem);       /* H2 section titles */
--text-lg:     clamp(1.5rem, 3vw, 2.5rem);   /* H3 subsections */
--text-base:   clamp(1rem, 1.5vw, 1.125rem); /* Body */
--text-sm:     0.875rem;                      /* Captions/labels */
```

**Text masking (apply to main hero headline):**
```css
.text-gradient-clip {
  background: linear-gradient(135deg, #00c8e0 0%, #0080ff 50%, #6c3fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**Letter-spacing rules:**
- Hero display: `letter-spacing: -0.03em` (tight, powerful)
- Section subheadings: `letter-spacing: 0.12em; text-transform: uppercase;` (loose, structured)
- Body: `letter-spacing: 0.01em`

---

## CUSTOM CURSOR

Create `src/components/ui/CustomCursor.tsx` — a client component that:
- Renders two elements: a small 8px solid cyan dot (primary cursor) and a 40px ring that follows with a 0.1s lag (trailing ring)
- On any interactive element hover: primary dot expands + changes color, ring disappears
- On button hover: ring shows text "VIEW" or "CLICK" centered inside it
- Hide native cursor globally: `body { cursor: none; }`
- Uses `useEffect` + `mousemove` event to track position
- Animate position with Framer Motion `useSpring` for smooth lag

---

## MAGNETIC BUTTONS

Create `src/components/ui/MagneticButton.tsx`:
- Wraps any button/CTA children
- On `mousemove` within 80px radius: calculates distance and applies a subtle `x, y` transform toward the cursor (max 8px pull)
- On `mouseleave`: snaps back via Framer Motion spring
- On `mousedown`: applies `scale(0.96)` compression
- Export as a reusable wrapper component

**Base button styles (extend with MagneticButton):**
```css
.btn-primary {
  background: linear-gradient(135deg, #00c8e0, #0080ff);
  border-radius: 8px;
  padding: 14px 32px;
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: -0.01em;
  box-shadow: var(--glow-cyan);
  transition: box-shadow 0.3s ease;
}
.btn-ghost {
  background: transparent;
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(10px);
}
```

---

## PAGE STRUCTURE — 5 PAGES

### File structure:
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx               → Home
│   ├── services/page.tsx      → Services
│   ├── work/page.tsx          → Portfolio / Case Studies
│   ├── about/page.tsx         → About
│   └── contact/page.tsx       → Contact
├── components/
│   ├── ui/
│   │   ├── CustomCursor.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── GlassCard.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── CodeTyper.tsx
│   │   ├── LogoMarquee.tsx
│   │   ├── NoiseOverlay.tsx
│   │   └── ROISlider.tsx
│   └── sections/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── ServicesGrid.tsx
│       ├── StatsBar.tsx
│       ├── PortfolioGrid.tsx
│       ├── ProcessSection.tsx
│       ├── TestimonialsSection.tsx
│       └── CTASection.tsx
├── data/
│   ├── services.ts
│   ├── portfolio.ts
│   ├── team.ts
│   └── testimonials.ts
├── lib/
│   ├── fonts.ts
│   └── utils.ts
└── styles/
    ├── tokens.css
    └── globals.css
```

---

## PAGE 1 — HOME (`/`)

### Section 1: Hero

**Layout:** Full-viewport height. Two-column on desktop (text left, visual right), stacked on mobile.

**Left column content:**
- Eyebrow label: `DIGITAL AGENCY · DUBAI` — uppercase, cyan, letter-spaced, small font
- H1: `We Forge Digital Experiences That Drive Real Growth` — hero size, gradient clip on "Digital Experiences"
- Subtext: `NetForge Digital builds high-performance websites, aggressive marketing strategies, and measurable results for ambitious businesses.`
- Two CTAs side by side: `Start Your Project` (MagneticButton, primary) + `See Our Work` (ghost button)
- Below CTAs: three small trust badges inline — `✓ 50+ Projects` · `✓ Dubai-Based` · `✓ Results-First`

**Right column visual:**
- Animated particle field using Three.js `Points` — 800 particles forming a loose N/arrow shape, slowly rotating, colored cyan→blue, connected by thin lines when close
- OR fallback (if Three.js omitted): A CSS-only animated glowing N-shaped SVG path that draws itself using `stroke-dashoffset` animation, with ambient orbs behind it
- Both options: surrounded by 3 floating glass metric cards (Framer Motion `y` float animation, staggered):
  - Card 1: `+340%` / `Avg. Organic Traffic Growth`
  - Card 2: `4.8★` / `Client Satisfaction`
  - Card 3: `2.1×` / `Avg. Conversion Lift`

**Background:**
- `--bg-void` base
- Two ambient orbs: 600px cyan orb top-left at 30% opacity, 500px violet orb bottom-right at 20% opacity
- Noise overlay active
- Grid blueprint lines at 15% opacity across entire hero

**Section bottom:** Apply `clip-angled-down` divider cutting into the next section.

**Scroll indicator:** Animated bouncing arrow with "Scroll to explore" text — fade out after 300px scroll depth.

---

### Section 2: Trusted By (Logo Marquee)

**Layout:** Full-width dark band with `clip-angled-up` at top.

**Content:**
- Label above: `TRUSTED BY BRANDS ACROSS DUBAI & THE UAE`
- Two infinite scrolling rows using CSS `animation: marquee linear infinite`:
  - Row 1 scrolls LEFT — 8 fictional company logos as styled text wordmarks (use Space Grotesk bold, different opacities/weights to simulate diverse logos): `AlMasdar Co` · `PeakFit Studio` · `Zayara Boutique` · `Gulf Apex Tech` · `Bloom Wellness` · `TradeMark AE` · `Noor Real Estate` · `Velocity BD`
  - Row 2 scrolls RIGHT (slower) — technology icon names using Phosphor Icons + labels: `React` · `Next.js` · `TypeScript` · `Figma` · `Google Ads` · `Meta Ads` · `HubSpot` · `Shopify`
- Both rows use `gap-16`, logos at 40% opacity → 100% on hover

---

### Section 3: Services Bento Grid

**Layout:** Asymmetrical bento grid — NOT equal-size cards. Use CSS Grid with named template areas. Suggested layout (6-column grid):
```
[Large card 2×2] [Tall card 1×2] [Small card 1×1] [Small card 1×1]
[Med card 1×2]   [Tall card ^^ ]  [Med card 2×1              ^^^^ ]
```

**Cards (GlassCard component, each with Bento Hover Reveal):**
On hover: card background shifts to a subtle gradient of the card's accent color, hidden stat or quote slides up from bottom (Framer Motion `y: 20 → 0, opacity: 0 → 1`).

1. **Web Development** (Large 2×2) — Icon: `<Code />` Phosphor, accent: cyan — `We architect fast, scalable, conversion-focused websites using Next.js, TypeScript, and modern stacks.` — Hidden reveal: `"Avg. 94 PageSpeed score"`
2. **Digital Marketing** (Tall 1×2) — Icon: `<ChartLineUp />`, accent: blue — SEO, Google Ads, Meta Ads — Hidden reveal: `"+280% avg. ROI"`
3. **Brand Identity** (Small 1×1) — Icon: `<PaintBrush />`, accent: violet
4. **Social Media** (Small 1×1) — Icon: `<InstagramLogo />`, accent: cyan
5. **E-Commerce** (Med 1×2) — Icon: `<ShoppingCart />`, accent: blue
6. **Analytics & SEO** (Med 2×1) — Icon: `<MagnifyingGlass />`, accent: violet

Section title above grid: `WHAT WE BUILD & GROW` — eyebrow + large H2.
Section uses `clip-chevron-down` divider at bottom.

---

### Section 4: Stats Bar (Animated Counters)

**Layout:** Full-width section, dark `--bg-elevated`, centered row of 4 stat blocks.

**Counters (AnimatedCounter component — count up from 0 when `whileInView` triggers):**
- `50+` / Projects Delivered
- `340%` / Average Traffic Growth
- `4.8★` / Client Satisfaction Score
- `AED 2M+` / Revenue Generated for Clients

Each counter: giant number in gradient clip text, small label below in `--text-secondary`, thin cyan top-border accent per card.

Apply `clip-wave` at both top and bottom of this section.

---

### Section 5: Interactive ROI Slider

**Component:** `ROISlider.tsx` — fully client-side, no backend.

**Layout:** Two-column — left is the slider controls, right shows live calculated results.

**Controls (left):**
- Slider 1: "Your Current Monthly Website Visitors" — range 500–50,000
- Slider 2: "Your Current Conversion Rate (%)" — range 0.5–10
- Slider 3: "Average Order/Lead Value (AED)" — range 100–10,000
- Dropdown: "Primary Goal" — Website Traffic / Lead Generation / E-Commerce Sales

**Results panel (right, GlassCard with cyan glow):**
- Calculates and displays: Projected Monthly Revenue, Traffic Increase (at 280% growth), Estimated New Leads/Sales
- Large animated numbers that re-animate on slider change
- CTA below: `Get Your Custom Strategy → ` (links to /contact)
- Disclaimer: `*Based on average results across our client portfolio`

Section title: `CALCULATE YOUR GROWTH POTENTIAL`

---

### Section 6: Testimonials

**Layout:** Horizontal scroll carousel (drag to scroll on mobile, arrow buttons on desktop).

**3 testimonial cards (GlassCard):**
1. `"NetForge transformed our online presence. Within 3 months, our salon bookings doubled through Instagram alone."` — Layla Al-Rashidi, Owner, Bloom Beauty Lounge, Al Barsha
2. `"The ROI from their Google Ads campaign paid for 6 months of retainer in the first 30 days."` — Khalid Mansoor, CEO, Gulf Apex Tech
3. `"Every deliverable was professional, on time, and actually worked. Rare to find in Dubai's agency scene."` — Sara Younis, Founder, Zayara Boutique

Each card: avatar placeholder (stylized initials in a gradient circle), star rating (5 Phosphor `Star` icons, filled, cyan), company + role.

---

### Section 7: Home CTA

**Full-width dark section with `clip-chevron-up` at top.**

Center-aligned:
- Giant eyebrow: `READY TO FORGE YOUR DIGITAL FUTURE?`
- H2: `Let's Build Something That Actually Works`
- Body: `No fluff. No wasted budgets. Just clear strategy, precise execution, and measurable results.`
- MagneticButton primary: `Start Your Project`
- Ghost button: `Book a Free Strategy Call`
- Below: `📍 Dubai-Based · 🌐 Serving UAE & GCC · ⚡ Results in 90 Days`

Ambient orb background — large cyan 800px orb centered at 20% opacity.

---

## PAGE 2 — SERVICES (`/services`)

### Hero Sub-header
- Dark page header: `Our Services` H1 + breadcrumb nav
- Background: grid blueprint lines + ambient orbs
- Clip-path `clip-angled-down` at bottom

### Services Deep Dive (Accordion-style Tabs)
Use Radix UI `Tabs` component. 5 tabs across the top: Web Dev · Digital Marketing · Brand Identity · Social Media · E-Commerce.

Each tab panel:
- Two-column: left = icon + description + feature bullet list (Phosphor `CheckCircle` icons, cyan), right = mockup screenshot (use Unsplash placeholder image relevant to service)
- Under each: `Starting from AED X,XXX/month` pricing badge
- CTA: `Get a Quote for This Service`

### Process Section (Visual Timeline)
Title: `HOW WE WORK` — 5-step horizontal timeline on desktop, vertical on mobile.
Steps: 1. Discovery → 2. Strategy → 3. Build → 4. Launch → 5. Optimise
Each step: step number (giant, gradient, behind the card), card with icon + title + 2-line description.
Connecting line between steps animates (draws itself using `stroke-dashoffset`) as you scroll.

Apply `clip-jagged` divider at the bottom edge.

### Pricing CTA
Simple 3-column pricing tier cards (GlassCard with hover glow):
- Starter: `AED 2,500/mo` — 1 service, basic reporting
- Growth: `AED 5,500/mo` — 3 services, bi-weekly calls *(MOST POPULAR badge)*
- Scale: `Custom` — full-service, dedicated team
All with `Get Started` MagneticButtons.

---

## PAGE 3 — WORK / PORTFOLIO (`/work`)

### Hero
- `OUR WORK` — large H1, short subtitle
- Filter bar: All · Web Dev · Marketing · Brand · E-Commerce (animated underline indicator, Framer Motion `layoutId`)

### Sticky Horizontal Case Study Scroll

This is the signature element of the portfolio page. Implement a **sticky horizontal scroll section**:
- The section is `height: 400vh` tall
- Inside, a horizontal scroll container is `position: sticky; top: 0`
- As the user scrolls vertically, the inner content translates horizontally (using `useScroll` + `useTransform` from Framer Motion)
- 4 large case study cards (600px wide each) scroll left as you scroll down

**Case Studies (hardcoded):**
1. **Bloom Beauty Lounge** — Ladies salon, Al Barsha — Services: Web + Instagram + Google Ads — Result: `+200% bookings in 90 days` — Image: beauty/salon Unsplash URL — Color accent: rose/pink gradient on this card only
2. **Gulf Apex Tech** — B2B SaaS — Services: SEO + Content + Google Ads — Result: `+380% organic traffic` — Image: tech office Unsplash URL — Accent: cyan
3. **Zayara Boutique** — Fashion e-commerce — Services: Shopify + Meta Ads — Result: `3.2× ROAS` — Image: fashion Unsplash URL — Accent: violet
4. **Noor Real Estate** — Property listings — Services: Web + SEO — Result: `#1 Google for 14 keywords` — Image: Dubai skyline Unsplash URL — Accent: blue

Each case study card: Full-bleed background image (with dark gradient overlay), floating GlassCard stats panel, `View Case Study →` button.

After the sticky scroll: a regular filterable grid of 6 smaller project thumbnails.

---

## PAGE 4 — ABOUT (`/about`)

### Hero — Who We Are
Two-column: headline left, team photo grid right (4 placeholder images from Unsplash, arranged in a 2×2 grid with one image slightly offset for asymmetry).
Headline: `We're a Lean Team of Obsessives Who Hate Average Results`

### Manifesto Section
Full-width, centered, large type — three short punchy paragraphs that scroll-animate word-by-word (each word fades in sequentially using Framer Motion stagger as the section scrolls into view):
`"We started NetForge Digital because we were tired of agencies that overcharge, under-deliver, and disappear after the contract is signed."`
`"Every strategy we build, every pixel we place, every campaign we launch is designed with one question: does this generate real, measurable results for our client?"`
`"Dubai's business landscape is competitive. We exist to give ambitious brands the digital edge they need to win it."`

### Values Bento Grid
4 glass cards in a 2×2 grid:
- 🎯 `Results First` — We measure everything. Vanity metrics stay out.
- 🔬 `Technical Depth` — We actually know what we're building, not just selling it.
- 🤝 `Client Transparency` — Monthly reports, honest calls, real numbers.
- ⚡ `Speed Without Compromise` — Fast execution. Zero shortcuts on quality.

### Team Section
4 team member cards (GlassCard, hover: card lifts + shows social links):
- Abdullah Al-Farsi — Founder & Lead Strategist — `@netforge` placeholder avatar
- Lina Khoury — Creative Director
- Omar Siddiqui — Lead Developer
- Fatima Al-Zaabi — Performance Marketing Manager

### Code Typer Section (Technical Credibility)
Title: `BUILT WITH PRECISION`
Left: A terminal/code window UI component (`CodeTyper.tsx`) that auto-types a clean Next.js component snippet. Style: dark terminal, green cursor blink, JetBrains Mono font, syntax-highlighted using span color classes (no external syntax highlighter needed, just manual span colors).
Right: Tech stack logos grid — icons + names for: Next.js · React · TypeScript · Tailwind · Framer Motion · Figma · Google Ads · Meta Business · Shopify · HubSpot

Apply `clip-angled-up` above this section.

---

## PAGE 5 — CONTACT (`/contact`)

### Layout: Two-Column
Left: Contact form. Right: Info + map placeholder.

**Form (NO backend, show success state only — use React state):**
Fields:
- Full Name (text input)
- Business Name (text input)
- Email Address (email input)
- WhatsApp Number (tel input, with UAE +971 prefix pre-filled)
- Primary Goal (Radix Select dropdown): New Website / Marketing Campaign / SEO / Social Media / Full Retainer
- Monthly Budget (Radix Select): Under AED 2,000 / AED 2,000–5,000 / AED 5,000–10,000 / AED 10,000+
- Tell us about your project (textarea, min 4 rows)
- Submit: MagneticButton primary `Send Message →`

On submit: Replace form with animated success state — large Phosphor `CheckCircle` icon (cyan, animated scale in), headline `Message Sent!`, subtext `We'll respond within 24 hours via WhatsApp or email.`

**Right column:**
- `📍 Al Barsha 1, Dubai, UAE`
- `📱 WhatsApp: +971 XX XXX XXXX` (with Phosphor `WhatsappLogo` icon in green)
- `📧 hello@netforgedigital.com`
- `⏰ Sun–Thu, 9am–6pm GST`
- Large placeholder box (styled GlassCard, 400px tall) with centered `📍 Dubai, UAE` text and subtle grid blueprint lines — representing a map embed area
- Three social links: Instagram · LinkedIn · Behance (Phosphor icons, hover → cyan glow)

---

## NAVBAR (`Navbar.tsx`)

**Behavior:** `position: fixed`, initially fully transparent, transitions to `backdrop-filter: blur(20px)` + `border-bottom: 1px solid var(--glass-border)` after 80px scroll. Smooth transition with Framer Motion.

**Left:** NetForge Digital logo — an inline SVG recreation of the N-logo (circuit lines left, arrow right) + wordmark `NETFORGE` in Space Grotesk bold.

**Center:** Navigation links — `Home · Services · Work · About · Contact` — hover state: text transitions to cyan, animated underline using `layoutId="nav-underline"` that slides between active items.

**Right:** `Start Project` CTA button (primary, small).

**Mobile:** Hamburger menu (Phosphor `List` icon) → full-screen overlay menu with staggered link animations.

---

## FOOTER (`Footer.tsx`)

**Layout:** Dark `--bg-void`, `clip-chevron-up` at top.

**4-column grid:**
- Col 1: Logo + tagline + `Dubai, UAE` + social icons row
- Col 2: Services links
- Col 3: Company links (About, Work, Blog, Careers)
- Col 4: Newsletter signup (input + button, no backend, show "Subscribed!" on click) + WhatsApp CTA

**Bottom bar:** `© 2025 NetForge Digital. All rights reserved. Built in Dubai.` + Privacy Policy · Terms links.

**Logo in footer:** Slightly larger version of the N-logo SVG.

---

## ANIMATIONS — COMPLETE SPEC

### Framer Motion Patterns (all use `whileInView`, `once: true`, `margin: "-100px"`)

```typescript
// Fade up (default for all section entries)
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

// Stagger container
const staggerContainer = {
  visible: { transition: { staggerChildren: 0.12 } }
}

// Scale in (for cards)
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

// Slide from left
const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}
```

### Scroll-Driven Line Drawing (for process/timeline)
Use Framer Motion `useScroll` + `useTransform` to map scroll progress to `pathLength` on SVG paths. The connecting line between process steps draws itself as you scroll through the section.

### Ambient Floating Orbs
Use `animate={{ y: [0, -20, 0] }}` with `transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}` on background orbs. Different durations per orb (6s, 8s, 10s) to avoid synchronization.

### Counter Animation
Use `useInView` hook. When triggered: use a custom `useCounter(target, duration)` hook that increments from 0 to target over 2 seconds using `requestAnimationFrame`. Include suffix (%, +, ★, AED) appended after the number.

### CodeTyper Animation
Array of strings (code lines). Use `setInterval` to add one character every 50ms to a `displayedText` state. Pause 800ms at end of each line before moving to next. Show blinking cursor at end using CSS animation.

### Page Transitions
Wrap each page in a Framer Motion `<motion.div>` with `initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}`. Use `<AnimatePresence mode="wait">` in the root layout.

---

## RESPONSIVENESS

All layouts must be **mobile-first**. Key breakpoints:
- `sm`: 640px — single column, reduced padding
- `md`: 768px — two columns emerge
- `lg`: 1024px — full desktop layout
- `xl`: 1280px — max-width container (1200px centered)

**Mobile-specific rules:**
- Sticky horizontal scroll section (`/work`) degrades to a regular swipeable card carousel on mobile
- Bento grid becomes single column on mobile
- Custom cursor disabled on touch devices (`@media (hover: none)`)
- All `clamp()` font sizes already handle mobile
- Navbar collapses to hamburger at `md` breakpoint

---

## HARDCODED DATA FILES

### `src/data/services.ts`
```typescript
export const services = [
  { id: 'web', title: 'Web Development', icon: 'Code', accent: '#00c8e0', ... },
  // ... all 6 services
]
```

### `src/data/portfolio.ts`
```typescript
export const caseStudies = [
  {
    id: 'bloom-beauty',
    title: 'Bloom Beauty Lounge',
    category: 'Web + Marketing',
    result: '+200% bookings in 90 days',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200',
    accent: '#ff6b9d',
    tags: ['Web Dev', 'Marketing', 'Social Media'],
  },
  // ... 3 more
]
```

### `src/data/testimonials.ts`
All 3 testimonials as typed objects with `name`, `role`, `company`, `quote`, `rating`, `avatar` (initials string).

---

## QUALITY CHECKLIST

Before considering the build complete, verify ALL of the following:

**Visual:**
- [ ] Noise grain overlay visible on all pages (subtle, not harsh)
- [ ] At least 3 different clip-path dividers used across the home page
- [ ] Ambient orbs present in hero + CTA sections with `mix-blend-mode: screen`
- [ ] Grid blueprint lines visible in at least 2 sections
- [ ] ALL cards are glassmorphism (not solid backgrounds)
- [ ] Text gradient clip working on hero headline
- [ ] Logo SVG renders correctly in navbar and footer

**Animation:**
- [ ] Custom cursor active (with touch device fallback off)
- [ ] Magnetic buttons functioning on all primary CTAs
- [ ] All section content fades up on scroll entry
- [ ] Counter numbers animate from 0 on scroll into view
- [ ] Logo marquee scrolling infinitely (both rows, opposite directions)
- [ ] ROI slider updates results in real-time
- [ ] CodeTyper auto-typing in about page
- [ ] Sticky horizontal scroll works on /work page
- [ ] Page transitions smooth between all routes

**Functional:**
- [ ] All 5 pages accessible via nav
- [ ] Contact form shows success state (no backend errors)
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] All Phosphor icons rendering (NOT lucide-react — remove any lucide imports entirely)
- [ ] Responsive at 375px, 768px, 1024px, 1440px

**Performance:**
- [ ] All images use `next/image` with proper `width`, `height`, `alt`
- [ ] No unused imports
- [ ] `"use client"` only on interactive components
- [ ] Fonts loaded via `next/font` (no external CDN font links)

---

## FINAL NOTE TO THE AI BUILDER

This is a portfolio-grade, client-winning build. Do NOT:
- Use cookie-cutter layouts (centered hero, 3-column equal grid, that's it)
- Use `lucide-react` — use `@phosphor-icons/react` exclusively for ALL icons
- Use flat solid color backgrounds — every surface needs depth (glass, gradient, or texture)
- Skip the clip-path dividers — they are critical to the visual flow
- Make everything the same size — asymmetry is intentional and required

DO:
- Make every section feel like it was designed by a senior designer, not assembled from a template
- Let the cyan→blue→violet gradient palette breathe across the entire site
- Use generous whitespace (padding-y of at least `py-24` on all sections, `py-32` on hero)
- Test every interaction mentally before writing it — magnetic, cursor, hover reveal, counter
- Commit to the technical proof elements (CodeTyper, grid lines, blueprint aesthetics) — they signal expertise

The result must make a potential client think: *"If this is their own website, imagine what they'll build for me."*
