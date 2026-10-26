# Nguyen Thanh Phu — Portfolio

A bilingual Odoo developer portfolio for project clients and recruiters, built with Vite, React, TypeScript, Tailwind CSS, and components adapted from Sera UI (`src/components/ui`). Covers Odoo customization, business workflows, integrations, and custom web/mobile development.

Homepage copy lives in `src/content/home.ts`; anonymized project contributions and experience live in `src/content/portfolio.ts`. Keep service offerings separate from completed work and avoid adding unverified outcomes or metrics. Contact links provide separate project and job enquiry templates in both languages.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for English or `http://localhost:3000/vi` for Vietnamese.

## Verification

```bash
npm run typecheck
npm run lint
npm run build
npm run test:e2e
```

Playwright browsers may need to be installed once with `npx playwright install chromium`.

## Deployment

Deploy to Vercel and set `VITE_SITE_URL` to the production origin, without a trailing slash. `npm run build` writes one `index.html` per route with its own metadata, plus `sitemap.xml` and `robots.txt` (see `vite.config.ts`); `vercel.json` falls back to the app shell for other paths. Open Graph images are static files in `public/og-en.png` and `public/og-vi.png`. The current résumé lives at `public/resume/nguyen-thanh-phu-software-engineer.pdf`.

Visitor analytics use Umami Cloud: the website ID is `umamiWebsiteId` in `src/lib/site.ts`. Page views, devices, browsers, countries and referrers are recorded automatically; `src/lib/analytics.ts` adds `cv-download`, `contact-click`, `outbound-click` and `case-study-open` events with the link label and page area. Tracking only runs in production builds on the `VITE_SITE_URL` domain.

The LinkedIn action remains hidden until `linkedinUrl` in `src/lib/site.ts` contains the verified profile URL.
