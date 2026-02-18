# The Idea Drug — Book Launch Site

Personal brand website for **Mark Bjornsgaard**, centred around his book **"The Idea Drug: Why Ideas Are Killing Innovation and How to Stop Using Them"** published by Lowell & Pearce.

**Live site:** Deployed via Vercel (auto-deploys from `main` branch)
**Repo:** [github.com/chadgcribbins/the-idea-drug](https://github.com/chadgcribbins/the-idea-drug)

---

## What this is

A 6-page static website that serves as both a book launch conversion engine and a funnel into Mark's venture development firm, System Two. The design is editorial and restrained — clean cream canvas, bold Jost typography, red accents drawn from the book cover palette — inspired by jamesclear.com.

### Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero with book cover, core thesis, stats, short bio, email capture |
| `/the-idea-drug` | The book — synopsis, 3-part structure, YouTube talk embed, buy links, email capture |
| `/system-two` | Venture development — philosophy, methodology (Because > Someone > Will), track record of exits, Rinsing workshop CTA |
| `/investments` | Portfolio — active ventures and investment portfolio, driven by the ventures content collection |
| `/contact` | Contact form with subject dropdown (media, speaking, taster day, venture development, general) |
| `/about` | Biography, career timeline, philosophy quote |

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro v5](https://astro.build) — static-first, zero JS by default |
| Content | Markdown files with frontmatter (Astro Content Collections) |
| Styling | CSS custom properties generated from design tokens |
| Token pipeline | [Style Dictionary v5](https://amzn.github.io/style-dictionary/) with WE3 3-tier naming |
| Fonts | [Jost](https://fonts.google.com/specimen/Jost) (Google Fonts) — geometric sans-serif |
| Hosting | [Vercel](https://vercel.com) — edge CDN, auto-deploys from GitHub |
| Package manager | pnpm |

---

## Project structure

```
Website/
├── public/
│   ├── images/
│   │   └── cover.png              # Book cover image
│   └── favicon.svg                # Light bulb emoji favicon
├── requirements/
│   ├── PRD.md                     # Full product requirements document
│   ├── Front cover.png            # Source cover file
│   ├── The Idea Drug.pdf          # Book PDF
│   └── Wireframes.svg             # Design wireframes
├── src/
│   ├── components/
│   │   ├── Nav.astro              # Sticky header with mobile hamburger
│   │   ├── Footer.astro           # Site footer
│   │   └── EmailCapture.astro     # Email form (inline/block variants)
│   ├── content/
│   │   ├── config.ts              # Collection schemas
│   │   ├── pages/                 # Page content (markdown + frontmatter)
│   │   │   ├── home.md
│   │   │   ├── the-idea-drug.md
│   │   │   ├── system-two.md
│   │   │   ├── investments.md
│   │   │   ├── contact.md
│   │   │   └── about.md
│   │   └── ventures/              # Company cards (17 files)
│   │       ├── deep-green.md      # status: exited
│   │       ├── juicy.md           # status: active
│   │       ├── civo.md            # status: invested
│   │       └── ...
│   ├── layouts/
│   │   └── Layout.astro           # Base HTML shell (OG tags, JSON-LD, fonts)
│   ├── lib/
│   │   └── site.ts                # Site-wide constants (name, nav, book info)
│   ├── pages/
│   │   ├── index.astro            # Home
│   │   ├── the-idea-drug.astro    # Book page
│   │   ├── system-two.astro       # Venture development
│   │   ├── investments.astro      # Portfolio
│   │   ├── contact.astro          # Contact form
│   │   └── about.astro            # Biography
│   ├── styles/
│   │   ├── global.css             # Token-backed reset, typography, grid, components
│   │   └── tokens.generated.css   # Auto-generated (do not edit)
│   └── tokens/
│       └── tokens.generated.ts    # Auto-generated (do not edit)
├── _media/
│   ├── transcript.md              # YouTube talk transcript (cleaned from VTT)
│   └── summary.md                 # Talk summary
├── project.tokens.json            # Design tokens source file (DTCG format)
├── sd.config.js                   # Style Dictionary config
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── TODO.md                        # Outstanding work items
```

---

## Getting started

### Prerequisites

- Node.js 20+ (tested with v25.1.0)
- pnpm 10+

### Install and run

```bash
# Clone the repo
git clone https://github.com/chadgcribbins/the-idea-drug.git
cd the-idea-drug

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
# → http://localhost:4321

# Build for production (runs token pipeline + Astro build)
pnpm build

# Preview the production build locally
pnpm preview
```

### Other commands

```bash
# Rebuild design tokens only (without a full site build)
pnpm tokens:build

# Deploy manually to Vercel (if needed)
pnpm deploy
```

---

## How content editing works

All page content lives in **markdown files** under `src/content/`. Mark (or anyone) can edit these files directly — no code changes needed.

### Pages — `src/content/pages/`

Each page has a `.md` file with two parts:

1. **Frontmatter** (between `---` markers) — structured data like titles, descriptions, lists, and quotes
2. **Body** (below the frontmatter) — free-form markdown rendered as HTML on the page

**Example** (`src/content/pages/home.md`):
```markdown
---
title: Home
description: "Author of The Idea Drug..."
heroEyebrow: A new book by Mark Bjornsgaard
heroSubtitle: "Why Ideas Are Killing Innovation..."
pullQuote: "Ideas are killing innovation..."
stats:
  - number: "75%"
    label: "of startups fail"
---

## Hello, I'm Mark

I'm an entrepreneur, investor and systems thinker...
```

### Ventures — `src/content/ventures/`

One markdown file per company. The `status` field determines which page each company appears on:

| Status | Appears on |
|--------|-----------|
| `exited` | System Two page (Track record section) |
| `active` | Investments page (Active ventures section) |
| `invested` | Investments page (Portfolio section) |

**Example** (`src/content/ventures/deep-green.md`):
```markdown
---
name: Deep Green
sector: Energy
status: exited
acquiredBy: Octopus Energy
description: "Data centres that heat swimming pools..."
order: 1
---
```

### After editing

If the Vercel deployment is connected to GitHub, simply push your changes:

```bash
git add -A
git commit -m "Update content"
git push
```

Vercel will automatically rebuild and deploy within ~30 seconds.

---

## Design tokens

The visual language is defined in `project.tokens.json` using the [DTCG token format](https://design-tokens.github.io/community-group/format/). Style Dictionary transforms these into CSS custom properties.

### Token hierarchy (WE3 3-tier naming)

| Tier | Prefix | Example | Purpose |
|------|--------|---------|---------|
| Reference | `--ref-*` | `--ref-palette-cover-red` | Raw values — colours, sizes, font stacks |
| System | `--sys-*` | `--sys-color-primary` | Semantic assignments — what a token *means* |
| Component | `--comp-*` | `--comp-action-default-bg` | Component-specific — button backgrounds, card padding |

### Key palette

| Token | Value | Usage |
|-------|-------|-------|
| `--sys-color-primary` | `#D42020` | Accent — dividers, links, focus rings |
| `--ref-palette-deep-crimson` | `#A8153A` | Secondary accent |
| `--sys-surface-page` | `#F9F8F4` | Warm cream page background |
| `--comp-action-default-bg` | `#000000` | Black buttons |
| `--sys-font-family-display` | `'Jost', sans-serif` | Headings and display text |

### Rebuilding tokens

If you edit `project.tokens.json`, run:

```bash
pnpm tokens:build
```

This regenerates `src/styles/tokens.generated.css` and `src/tokens/tokens.generated.ts`. The production build command (`pnpm build`) does this automatically.

---

## Deployment

The site is deployed on **Vercel** with automatic deploys from the `main` branch.

- Every push to `main` triggers a build and deploy
- The build command is: `style-dictionary build --config sd.config.js && astro build`
- Output directory: `dist/`

### Custom domain

To connect `markbjornsgaard.com`:
1. Go to the Vercel project dashboard → Settings → Domains
2. Add `markbjornsgaard.com`
3. Update DNS records as instructed by Vercel (typically an A record or CNAME)

---

## Outstanding work

See [TODO.md](./TODO.md) for a full breakdown of remaining items, tracked against the PRD. Key blockers:

- **Retailer links** — Buy buttons currently point to `#`
- **Email integration** — Forms need a backend (Kit/ConvertKit recommended)
- **Analytics** — GA4 and Microsoft Clarity snippets not yet installed
- **Content from Mark** — Testimonials, headshot, ISBN, Chapter 1 PDF, brand assets

---

## Reference materials

| File | What it is |
|------|-----------|
| `requirements/PRD.md` | Full product requirements document |
| `requirements/Wireframes.svg` | Design wireframes |
| `requirements/Front cover.png` | Source book cover image |
| `requirements/The Idea Drug.pdf` | Book PDF |
| `_media/transcript.md` | Cleaned transcript of Mark's Imperial College talk |
| `_media/summary.md` | Summary of the talk |
| `project.tokens.json` | Design token definitions (source of truth for the visual language) |
