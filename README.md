# Nguyen Thanh Phu — Portfolio

A bilingual, recruiter-focused software engineering portfolio built with Next.js, TypeScript, and Tailwind CSS.

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
