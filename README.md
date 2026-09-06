# Nguyen Thanh Phu — Portfolio

A bilingual Odoo developer portfolio for project clients and recruiters, built with Next.js, TypeScript, and Tailwind CSS. Covers Odoo customization, business workflows, integrations, and custom web/mobile development.

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

Deploy to Vercel and set `NEXT_PUBLIC_SITE_URL` to the production origin, without a trailing slash. The current résumé lives at `public/resume/nguyen-thanh-phu-software-engineer.pdf`.

The LinkedIn action remains hidden until `linkedinUrl` in `src/lib/site.ts` contains the verified profile URL.
