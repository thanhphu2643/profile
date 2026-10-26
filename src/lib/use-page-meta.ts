import { useEffect } from "react";

import { headTags, type PageMeta } from "@/lib/metadata";
import { getSiteUrl } from "@/lib/site";

export function usePageMeta(meta: PageMeta) {
  const { locale, title, path } = meta;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.head.querySelectorAll("[data-meta]").forEach((element) => element.remove());
    const template = document.createElement("template");
    template.innerHTML = headTags(meta, getSiteUrl());
    document.head.append(template.content);
    // meta is rebuilt every render; title and path identify the page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, title, path]);
}
