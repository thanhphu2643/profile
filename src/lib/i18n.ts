export const locales = ["en", "vi"] as const;

export type Locale = (typeof locales)[number];

export function localizedPath(locale: Locale, path = ""): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return locale === "vi" ? `/vi${normalizedPath === "/" ? "" : normalizedPath}` : normalizedPath;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "en" ? "vi" : "en";
}
