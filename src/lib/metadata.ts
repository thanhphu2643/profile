// Relative imports keep this module loadable from vite.config.ts, which runs outside the "@/" alias.
import type { CaseStudy } from "../content/portfolio";
import type { Locale } from "./i18n";
import { localizedPath } from "./i18n";

export type PageMeta = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  alternates: Record<Locale, string>;
  type: "profile" | "article";
};

const descriptions = {
  en: "Odoo developer in Vietnam specializing in sales, purchasing, inventory, and manufacturing workflows. Custom websites, applications, and integrations.",
  vi: "Lập trình viên chuyên tùy chỉnh Odoo cho bán hàng, mua hàng, kho và sản xuất. Nhận phát triển website, ứng dụng và tích hợp hệ thống theo yêu cầu.",
};

export function homeMeta(locale: Locale): PageMeta {
  return {
    locale,
    title: locale === "en" ? "Nguyen Thanh Phu — Odoo Developer | Web & Apps" : "Nguyễn Thanh Phú — Tùy chỉnh Odoo | Web & Ứng dụng",
    description: descriptions[locale],
    path: localizedPath(locale),
    alternates: { en: "/", vi: "/vi" },
    type: "profile",
  };
}

export function caseStudyMeta(study: CaseStudy, locale: Locale): PageMeta {
  return {
    locale,
    title: `${study.title[locale]} — Nguyen Thanh Phu`,
    description: study.summary[locale],
    path: localizedPath(locale, `/work/${study.slug}`),
    alternates: { en: `/work/${study.slug}`, vi: `/vi/work/${study.slug}` },
    type: "article",
  };
}

const escape = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Head tags as an HTML string, so the build can bake them into each route's index.html
// and the client can swap them on navigation. Every tag carries data-meta for replacement.
export function headTags(meta: PageMeta, siteUrl: string): string {
  const url = (path: string) => escape(new URL(path, siteUrl).toString());
  const image = url(`/og-${meta.locale}.png`);
  const title = escape(meta.title);
  const description = escape(meta.description);

  return [
    `<title data-meta>${title}</title>`,
    `<meta data-meta name="description" content="${description}">`,
    `<link data-meta rel="canonical" href="${url(meta.path)}">`,
    `<link data-meta rel="alternate" hreflang="en-US" href="${url(meta.alternates.en)}">`,
    `<link data-meta rel="alternate" hreflang="vi-VN" href="${url(meta.alternates.vi)}">`,
    `<meta data-meta property="og:title" content="${title}">`,
    `<meta data-meta property="og:description" content="${description}">`,
    `<meta data-meta property="og:type" content="${meta.type}">`,
    `<meta data-meta property="og:locale" content="${meta.locale === "en" ? "en_US" : "vi_VN"}">`,
    `<meta data-meta property="og:url" content="${url(meta.path)}">`,
    `<meta data-meta property="og:site_name" content="Nguyen Thanh Phu">`,
    `<meta data-meta property="og:image" content="${image}">`,
    `<meta data-meta property="og:image:width" content="1200">`,
    `<meta data-meta property="og:image:height" content="630">`,
    `<meta data-meta name="twitter:card" content="summary_large_image">`,
    `<meta data-meta name="twitter:title" content="${title}">`,
    `<meta data-meta name="twitter:description" content="${description}">`,
    `<meta data-meta name="twitter:image" content="${image}">`,
  ].join("\n    ");
}
