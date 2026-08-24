import type { MetadataRoute } from "next";

import { caseStudies } from "@/content/portfolio";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const pages = ["/", "/vi", ...caseStudies.flatMap(({ slug }) => [`/work/${slug}`, `/vi/work/${slug}`])];

  return pages.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: path.includes("/work/") ? "monthly" : "weekly",
    priority: path === "/" || path === "/vi" ? 1 : 0.8,
  }));
}
