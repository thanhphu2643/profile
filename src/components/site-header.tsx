import { Link } from "react-router";
import { useEffect, useState } from "react";

import { DownloadIcon, MenuIcon, XIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n";
import { alternateLocale, localizedPath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

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

// Adapted from Sera UI "Navbar" (portfolio header): floating glass bar with a collapsible mobile menu.
export function SiteHeader({ locale, currentPath = "" }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const otherLocale = alternateLocale(locale);
  const homePath = localizedPath(locale);
  const localePath = localizedPath(otherLocale, currentPath);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={cn(
          "mx-auto max-w-6xl rounded-2xl border transition-all duration-300",
          isScrolled || isMenuOpen ? "border-white/10 bg-neutral-950/95 shadow-[0_8px_40px_rgb(0_0_0/0.45)]" : "border-transparent bg-transparent",
        )}
      >
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-5">
          <Link className="group flex min-h-11 items-center gap-3" to={homePath} aria-label={`${siteConfig.name} — home`}>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white font-mono text-xs font-bold text-neutral-950 transition-transform group-hover:scale-110">NP</span>
            <strong className="text-sm font-semibold tracking-tight text-white">Nguyen Thanh Phu</strong>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label={locale === "en" ? "Primary navigation" : "Điều hướng chính"}>
            {navigation[locale].map((item) => (
              <Link key={item.href} to={`${homePath}${item.href}`} className="group relative py-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white">
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <Link className="grid min-h-11 min-w-11 place-items-center rounded-full font-mono text-xs font-semibold text-neutral-400 transition-colors hover:text-white" to={localePath} hrefLang={otherLocale}>
              {otherLocale.toUpperCase()}
            </Link>
            <a
              aria-label={locale === "en" ? "Download résumé" : "Tải CV"}
              className="resume-link inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-neutral-950 transition-all hover:scale-[1.03] hover:bg-sky-100"
              href={siteConfig.resumePath}
              download
            >
              <DownloadIcon />
              <span className="hidden sm:inline">{locale === "en" ? "Résumé" : "Tải CV"}</span>
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="grid min-h-11 min-w-11 place-items-center rounded-full text-neutral-300 transition-colors hover:bg-white/10 lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={locale === "en" ? "Toggle menu" : "Mở menu"}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <nav
          id="mobile-menu"
          aria-label={locale === "en" ? "Mobile navigation" : "Điều hướng di động"}
          className={cn("grid overflow-hidden transition-all duration-300 lg:hidden", isMenuOpen ? "grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0")}
        >
          <div className="min-h-0">
            <div className="flex flex-col gap-1 border-t border-white/10 p-3">
              {navigation[locale].map((item) => (
                <Link
                  key={item.href}
                  to={`${homePath}${item.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
