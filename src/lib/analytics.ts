import { siteConfig } from "@/lib/site";

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string>) => void };
  }
}

// Umami records page views (including client-side navigation), devices, browsers,
// countries and referrers on its own. Link clicks are classified here in one place.
export function initAnalytics() {
  if (!import.meta.env.PROD) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://cloud.umami.is/script.js";
  script.dataset.websiteId = siteConfig.umamiWebsiteId;
  // Only count the production domain, not Vercel preview deployments.
  if (import.meta.env.VITE_SITE_URL) script.dataset.domains = new URL(import.meta.env.VITE_SITE_URL).hostname;
  document.head.append(script);

  document.addEventListener("click", trackLinkClick, { capture: true });
}

function trackLinkClick(event: MouseEvent) {
  const link = (event.target as Element | null)?.closest("a[href]");
  if (!link || !window.umami) return;

  const href = link.getAttribute("href") ?? "";
  const url = new URL(href, window.location.href);
  const name = linkEvent(link, url);
  if (!name) return;

  window.umami.track(name, {
    label: (link.getAttribute("aria-label") || link.textContent || "").trim().slice(0, 100),
    area: area(link),
    target: url.protocol === "mailto:" ? url.pathname : url.href.split("?")[0],
  });
}

function linkEvent(link: Element, url: URL): string | null {
  if (link.hasAttribute("download")) return "cv-download";
  if (url.protocol === "mailto:") return "contact-click";
  if (url.origin !== window.location.origin) return "outbound-click";
  if (url.pathname.includes("/work/")) return "case-study-open";
  return null;
}

function area(link: Element): string {
  const container = link.closest("header, footer, section[id], nav");
  if (!container) return "page";
  return container.id || container.tagName.toLowerCase();
}
