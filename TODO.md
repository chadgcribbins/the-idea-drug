# TODO — The Idea Drug

Outstanding items tracked against the [PRD](./requirements/PRD.md).

---

## Content needed from Mark

These items block a complete launch. The site scaffold is ready — once these arrive they slot straight into the existing markdown files.

- [ ] **Real retailer links** — Amazon UK, Amazon US, Bookshop.org (and Audible/Spotify/Apple if available). Update `src/content/pages/the-idea-drug.md` → `buyLinks`.
- [ ] **ISBN** — Needed for the JSON-LD structured data on the home and book pages.
- [ ] **Chapter 1 PDF** — Free download lead magnet. Drop into `public/downloads/chapter-1.pdf`.
- [ ] **Testimonial quotes** (3-6) — Name, title, quote, optional headshot. Will create a `testimonials` content collection when ready.
- [ ] **Author headshot** — Professional photo for the About page hero and OG images. Drop into `public/images/`.
- [ ] **Contact routing email** — Where should form submissions go? Single address or per-enquiry-type routing.
- [ ] **Three horizons diagram** (SVG preferred) — For the System Two page market positioning section.
- [ ] **"Because Someone Will" smiley icon** (SVG) — Brand mark for use across the site.
- [ ] **S2 Pre-read PDF** and **Readiness PDF** — Gated downloads for the System Two page.
- [ ] **Venture/investment logos or images** — Card images for investments and ventures grids.

---

## Technical — Phase 1 (launch blockers)

- [ ] **Email platform integration** — Connect the email capture forms to Kit (ConvertKit) or chosen provider. Currently the `<EmailCapture>` component and contact form are front-end stubs with no backend.
- [ ] **Contact form backend** — Hook up to Formspree, Netlify Forms, or a serverless function. The form markup and subject dropdown are ready.
- [ ] **GA4 tracking** — Add the Google Analytics 4 snippet to `Layout.astro`. Set up events: `cta_click`, `retailer_click`, `email_signup`, `contact_submit`, `video_play`.
- [ ] **Microsoft Clarity** — Add the Clarity snippet to `Layout.astro` for heatmaps and session recordings.
- [ ] **Custom domain** — Point `markbjornsgaard.com` to Vercel (DNS A/CNAME records).
- [ ] **OG images** — Create dedicated 1200x630 social sharing images for Home, Book, and System Two pages. Currently falls back to `/images/og-default.png` (which doesn't exist yet).

---

## Technical — Phase 1 (nice-to-have enhancements)

- [ ] **Image optimisation** — Convert cover and future images to WebP with fallbacks. Consider Astro's `<Image />` component for automatic optimisation.
- [ ] **Book-specific OG tags** — Add `og:type="book"`, `book:author`, `book:isbn`, `book:release_date` to the book page `<head>`.
- [ ] **UTM parameters on retailer links** — Append `?utm_source=markbjornsgaard.com&utm_medium=website&utm_campaign=book-launch` to all outbound buy links.
- [ ] **Mobile nav toggle animation** — The hamburger menu works but could have a smoother open/close transition.
- [ ] **Privacy & Terms pages** — Footer currently has no privacy/terms links. Create if required for GDPR compliance.

---

## Content/design — Phase 1 (nice-to-have)

- [ ] **Home: System Two panel** — PRD specifies a grey-background section with 3 CTA rows (download pre-read, download readiness, enquire). Blocked on PDFs from Mark.
- [ ] **Home: "Us and them" comparison** — Side-by-side comparison of System Two vs traditional venture development. Needs copy from Mark.
- [ ] **Book: Testimonials section** — Blocked on quotes from Mark.
- [ ] **Book: Step funnel** — PRD envisions a 3-step conversion funnel (Buy → Register for templates → Get copy). Currently simplified to a single buy links section.
- [ ] **System Two: Team section** — "The A Team" section with team bios. Needs content from Mark.
- [ ] **System Two: Background video** — PRD mentions a brand/explainer video. Needs asset.
- [ ] **System Two: Testimonials & logos** — Client/partner social proof. Needs content.
- [ ] **System Two: Downloads section** — Pre-read and readiness PDF download CTAs. Blocked on PDFs.
- [ ] **About: Media section** — Podcast appearances, interviews, press mentions. Needs list from Mark.
- [ ] **3D book cover mockup** — Currently using flat cover image. A 3D mockup with fanned pages would enhance the hero sections.

---

## Phase 2 — Post-launch

- [ ] HTBSTW component
- [ ] Customer check form
- [ ] Blog / articles section (content marketing for SEO)
- [ ] Newsletter archive
- [ ] Additional testimonials with images
- [ ] Gated content area for registered email subscribers (templates, resources)

---

## Phase 3 — Ongoing

- [ ] A/B testing on CTAs and hero copy
- [ ] Heatmap-driven UX improvements
- [ ] Additional lead magnets based on email performance
- [ ] Speaking page expansion
- [ ] Event/workshop booking system
