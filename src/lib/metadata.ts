import type { Metadata } from "next";

import type { CaseStudy } from "@/content/portfolio";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

const descriptions = {
  en: "Odoo developer in Vietnam specializing in sales, purchasing, inventory, and manufacturing workflows. Custom websites, applications, and integrations.",
  vi: "Lập trình viên chuyên tùy chỉnh Odoo cho bán hàng, mua hàng, kho và sản xuất. Nhận phát triển website, ứng dụng và tích hợp hệ thống theo yêu cầu.",
};

export function homeMetadata(locale: Locale): Metadata {
  const title = locale === "en" ? "Nguyen Thanh Phu — Odoo Developer | Web & Apps" : "Nguyễn Thanh Phú — Tùy chỉnh Odoo | Web & Ứng dụng";
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
