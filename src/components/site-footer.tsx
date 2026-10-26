import { Link } from "react-router";

import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

type SiteFooterProps = {
  locale: Locale;
  note: string;
  backLabel: string;
};

// Adapted from Sera UI "Footer" (minimal variant).
export function SiteFooter({ locale, note, backLabel }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10">
      <div className="shell flex min-h-24 flex-col items-center justify-between gap-3 py-6 font-mono text-[11px] uppercase tracking-wider text-neutral-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Nguyen Thanh Phu</p>
        <p>{note}</p>
        <Link className="flex min-h-11 items-center font-semibold text-white transition-colors hover:text-sky-300" to={localizedPath(locale)}>{backLabel} ↑</Link>
      </div>
    </footer>
  );
}
