import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { alternateLocale, localizedPath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { DownloadIcon } from "@/components/icons";

type SiteHeaderProps = {
  locale: Locale;
  currentPath?: string;
};

const navigation = {
  en: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  vi: [
    { label: "Dịch vụ", href: "#services" },
    { label: "Dự án", href: "#work" },
    { label: "Cách làm việc", href: "#about" },
    { label: "Kinh nghiệm", href: "#experience" },
    { label: "Liên hệ", href: "#contact" },
  ],
} as const;

export function SiteHeader({ locale, currentPath = "" }: SiteHeaderProps) {
  const otherLocale = alternateLocale(locale);
  const homePath = localizedPath(locale);
  const localePath = localizedPath(otherLocale, currentPath);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href={homePath} aria-label={`${siteConfig.name} — home`}>
          <span>NP</span>
          <strong>Nguyen Thanh Phu</strong>
        </Link>
        <nav className="desktop-nav" aria-label={locale === "en" ? "Primary navigation" : "Điều hướng chính"}>
          {navigation[locale].map((item) => (
            <Link key={item.href} href={`${homePath}${item.href}`}>{item.label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="locale-link" href={localePath} hrefLang={otherLocale}>
            {otherLocale.toUpperCase()}
          </Link>
          <a
            aria-label={locale === "en" ? "Download résumé" : "Tải CV"}
            className="resume-link"
            href={siteConfig.resumePath}
            download
          >
            <DownloadIcon />
            <span>{locale === "en" ? "Résumé" : "Tải CV"}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
