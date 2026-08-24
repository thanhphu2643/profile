import type { Metadata } from "next";

import type { CaseStudy } from "@/content/portfolio";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

const descriptions = {
  en: "Software engineer building reliable ERP, backend, and mobile products with Odoo, Node.js, Flutter, and PostgreSQL.",
  vi: "Kỹ sư phần mềm xây dựng sản phẩm ERP, backend và mobile đáng tin cậy với Odoo, Node.js, Flutter và PostgreSQL.",
};

export function homeMetadata(locale: Locale): Metadata {
  const title = locale === "en" ? "Nguyen Thanh Phu — Software Engineer" : "Nguyễn Thanh Phú — Kỹ sư phần mềm";
  const path = localizedPath(locale);

  return {
    metadataBase: getSiteUrl(),
    title,
    description: descriptions[locale],
    alternates: {
      canonical: path,
      languages: { "en-US": "/", "vi-VN": "/vi" },
    },
    openGraph: {
      title,
      description: descriptions[locale],
      type: "profile",
      locale: locale === "en" ? "en_US" : "vi_VN",
      url: path,
      siteName: "Nguyen Thanh Phu",
    },
    twitter: { card: "summary_large_image", title, description: descriptions[locale] },
  };
}

export function caseStudyMetadata(study: CaseStudy, locale: Locale): Metadata {
  const path = localizedPath(locale, `/work/${study.slug}`);

  return {
    metadataBase: getSiteUrl(),
    title: `${study.title[locale]} — Nguyen Thanh Phu`,
    description: study.summary[locale],
    alternates: {
      canonical: path,
      languages: {
        "en-US": `/work/${study.slug}`,
        "vi-VN": `/vi/work/${study.slug}`,
      },
    },
    openGraph: {
      title: study.title[locale],
      description: study.summary[locale],
      type: "article",
      locale: locale === "en" ? "en_US" : "vi_VN",
      url: path,
    },
    twitter: { card: "summary_large_image", title: study.title[locale], description: study.summary[locale] },
  };
}
