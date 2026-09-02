# Sahil Vakte — Portfolio

A production-ready portfolio site built for recruiter conversion: React 19 +
TypeScript + Vite + Tailwind CSS v4, with routed case-study pages, working
project filtering, a functional contact form, and configurable resume /
cover-letter downloads.

Live design direction: dark, high-contrast, minimal — no fabricated
metrics, no stock illustrations, no skill percentage bars. Every project
"screenshot" in this project is an original, coded UI mockup (clearly
labeled "UI Concept · Demo Data") built from the real feature descriptions
Sahil provided — not a real production screenshot.

---

## 1. Getting started

```bash
npm install
npm run dev        # local dev server with HMR
npm run build       # type-check + production build to dist/
npm run preview     # serve the production build locally
```

Requires Node 18+.

---

## 2. Project structure

```
src/
  assets/profile/        → profile photo
  components/             → shared UI (nav, footer, icons, resume menu, SEO…)
  components/mockups/     → reusable "device frame" primitives for project visuals
  data/                   → config.ts, projects.ts, experience.ts, skills.ts
  pages/                  → Home.tsx, CaseStudy.tsx, NotFound.tsx
  projects/visuals/       → one illustrative UI mockup component per project
  sections/                → Hero, About, Experience, FeaturedWork, TechStack,
                             Architecture, Education, Resume, Contact
public/
  assets/resume/          → put your real resume/cover-letter PDFs here
  robots.txt, sitemap.xml, og-image.png
```

**All project content lives in `src/data/projects.ts`.** To edit a case
study — copy, tech stack, features, architecture, challenges — edit that
file; the page components render whatever is there. Nothing about a
project is hardcoded into the page templates.

---

## 3. Replacing the profile photo

Sahil's photo is already in place at:

```
src/assets/profile/sahil-vakte.jpg
```

To replace it, drop a new image at that same path (any common format — the
import in `Hero.tsx` / `About.tsx` will need updating if you rename the
file or change its extension). Recommended: a square-ish or 4:5 portrait,
at least 800px on the short edge, professionally cropped.

---

## 4. Adding real project screenshots

Every case study currently ships with an **original, coded UI mockup**
(built with React + Tailwind, not an image file) rather than a real
screenshot, since none were supplied. If you'd like to swap any of them
for real product screenshots:

1. Add the image(s) to `src/assets/screenshots/<project-slug>/`.
2. Open `src/projects/visuals/<ProjectName>Visual.tsx` and replace the
   mockup markup with an `<img>` tag (or a small gallery) pointing at your
   image. Keep an `alt` description.
3. If it's a real screenshot (not a mockup), remove the "UI Concept · Demo
   Data" `DemoBadge` so it isn't mislabeled.

---

## 5. Resume

The resume download uses one PDF configured in `src/data/config.ts` as
`primaryResumePath`:

```
src/assets/resume/Sahil_Vakte_Resume.pdf
```

Place the attached resume PDF at that path so every "Download Resume" button
across the site downloads the same document.

---

## 6. Contact form (email delivery)

The contact form (`src/sections/Contact.tsx`) posts JSON to whatever
endpoint you set as `contactFormEndpoint` in `src/data/config.ts`. **No
secrets live in this codebase** — nothing is hardcoded, and the endpoint
value itself is safe to expose client-side (it identifies a form, not a
credential).

Until you configure an endpoint, the form falls back to opening the
visitor's email client with a pre-filled message — so the site works with
zero setup, just with a slightly less seamless UX.

### Recommended: Formspree (fastest, no backend to run)

1. Create a form at [formspree.io](https://formspree.io) using
   `sahilvaktepatil123@gmail.com` (or your preferred inbox) as the
   recipient.
2. Copy the endpoint it gives you, e.g. `https://formspree.io/f/abcdwxyz`.
3. Set it in `src/data/config.ts`:
   ```ts
   export const contactFormEndpoint = "https://formspree.io/f/abcdwxyz";
   ```

### Alternative: your own serverless function

If you'd rather run your own backend (e.g. to use Resend, SendGrid or raw
SMTP), the architecture is:

```
Contact Form (this site) → POST /api/contact → Serverless Function → Email Service → your inbox
```

1. Deploy a small serverless function (Vercel/Netlify function, AWS
   Lambda, etc.) that accepts a POST of `{ name, email, subject, message }`
   and sends it via your email provider's API.
2. Store the email provider's API key as an environment variable **on the
   server/function**, never in this frontend codebase.
3. Set `contactFormEndpoint` in `src/data/config.ts` to that function's URL.

Either way: **never commit an SMTP password, API secret, or email
password to this repository.**

---

## 7. WhatsApp & Email CTAs

Both use standard, no-backend mechanisms — configured once in
`src/data/config.ts`:

- **WhatsApp**: `https://wa.me/<number>?text=<message>` (standard
  click-to-chat link). The visitor can edit the pre-filled message before
  sending.
- **Email**: a `mailto:` link with a pre-filled subject.

Update `contact.whatsappNumber`, `contact.whatsappDefaultMessage`,
`contact.email` and `contact.emailSubjectDefault` in that file to change
either.

---

## 8. Availability status

`src/data/config.ts` → `siteConfig.availability`:

```ts
availability: {
  open: true,
  label: "Open to Opportunities",
},
```

Flip `open` to `false` (or edit the label) whenever your status changes —
this single toggle drives the badge shown in the Hero.

---

## 9. SEO

- Per-page `<title>`, meta description, canonical URL, Open Graph and
  Twitter/X tags are set via `src/components/SEO.tsx` (uses
  `react-helmet-async`) on every route.
- `public/robots.txt` and `public/sitemap.xml` list all 8 routes (home +
  7 case studies).
- `public/og-image.png` is the social share preview image.
- **Before going live**, set `siteConfig.siteUrl` in `src/data/config.ts`
  to your real deployed domain, and update the URLs in `robots.txt` and
  `sitemap.xml` to match (they currently use a placeholder `.example`
  domain, which is reserved and never resolves to a real site).

---

## 10. Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `article`, `section`,
  `footer`), a "Skip to content" link, and a logical heading hierarchy.
- Visible focus states on every interactive element (`:focus-visible`).
- Alt text on all images; icons are `aria-hidden` with adjacent text
  labels or `aria-label`s on icon-only buttons.
- `prefers-reduced-motion` disables scroll-smoothing and reveal animations
  site-wide (see `src/index.css`).
- Category filter buttons use `aria-pressed`; the mobile menu button uses
  `aria-expanded`.

---

## 11. Deployment

This is a static Vite build — deploy `dist/` to any static host.

**Vercel**
```bash
npm i -g vercel
vercel
```
Framework preset: Vite. Build command: `npm run build`. Output dir: `dist`.
Since this uses client-side routing, add a rewrite so deep links (e.g.
`/work/openemr-healthcare-platform`) don't 404 on refresh — Vercel's Vite
preset does this automatically; if not, add a `vercel.json`:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

**Netlify**
```bash
npm run build
```
Deploy the `dist/` folder (drag-and-drop or `netlify deploy`), and add a
`public/_redirects` file containing:
```
/*  /index.html  200
```

**GitHub Pages** works too, but needs a base-path configuration in
`vite.config.ts` and a client-side-routing workaround (a `404.html` that
redirects to `index.html`) — Vercel or Netlify are simpler for this project.

---

## 12. Tech stack

React 19 · TypeScript · Vite 8 · Tailwind CSS v4 · React Router · React
Helmet Async. No UI kit, no icon library dependency (icons are hand-rolled
inline SVGs) — kept intentionally light.

---

## 13. Hostinger production deployment

1. Run `npm install` and `npm run build` locally.
2. Upload the **contents** of `dist/` to the document root for
   `sahilvakte.dev` (normally `public_html/`). Include hidden files so
   `dist/.htaccess` is uploaded.
3. Point the domain to that document root and enable SSL/HTTPS.
4. Verify `/`, `/about`, `/work`, `/contact`, and every `/work/<slug>` URL
   by opening it directly and refreshing it.
5. Verify `/robots.txt`, `/sitemap.xml`, `/og-image.png`, the manifest,
   favicon files, and the resume download return HTTP 200.
6. Test production links with LinkedIn Post Inspector and Facebook Sharing
   Debugger after DNS and SSL are live.

The Apache `.htaccess` leaves real files, directories, and `/api` routes
untouched, then falls back to `index.html` for React Router. The build also
creates static route directories with page-specific metadata so preview crawlers
receive the correct title, description, canonical URL, and OG tags without JS.

## 14. Search Console readiness

Add `sahilvakte.dev` as a Google Search Console domain property, submit
`https://sahilvakte.dev/sitemap.xml`, and request indexing for the homepage,
Work, OpenEMR, and AI Exercise Tracker pages. The same sitemap can be submitted
to Bing Webmaster Tools. Add verification tags to `index.html` only after a
search engine supplies the real token; no placeholder token is included.

The current resume is imported from `src/assets/resume/` and fingerprinted by
Vite. Only configure additional Frontend, Software/Full Stack, Product Engineer,
or cover-letter downloads after those real PDF files exist.

---

## 15. Content policy

Every claim on this site — employer, title, technology, project feature,
integration — comes from information Sahil provided directly.
**No metrics, client names, employers, or outcomes are fabricated.**
Projects without a public URL are labeled "Private / Company Project"
rather than linked to an invented demo. Where a verified outcome/metric
becomes available, add it to that project's `outcome` field in
`src/data/projects.ts` — until then, that field is intentionally omitted.
