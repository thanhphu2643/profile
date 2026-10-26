import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type Plugin } from "vite";

import { caseStudies } from "./src/content/portfolio";
import { caseStudyMeta, headTags, homeMeta, type PageMeta } from "./src/lib/metadata";

const pages: PageMeta[] = [
  homeMeta("en"),
  homeMeta("vi"),
  ...caseStudies.flatMap((study) => [caseStudyMeta(study, "en"), caseStudyMeta(study, "vi")]),
];

// Emits one index.html per route with its own lang and head tags, so crawlers and link
// previews see the right metadata without running JavaScript. Also writes sitemap and robots.
function staticPages(siteUrl: string): Plugin {
  return {
    name: "static-pages",
    apply: "build",
    enforce: "post",
    generateBundle(_, bundle) {
      const template = bundle["index.html"];
      if (template?.type !== "asset") return;
      const html = String(template.source);

      for (const page of pages) {
        const source = html.replace('<html lang="en">', `<html lang="${page.locale}">`).replace("<!--app-head-->", headTags(page, siteUrl));
        if (page.path === "/") template.source = source;
        else this.emitFile({ type: "asset", fileName: `${page.path.slice(1)}/index.html`, source });
      }

      const urls = pages.map(({ path }) => `  <url><loc>${new URL(path, siteUrl)}</loc></url>`).join("\n");
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n` });
      this.emitFile({ type: "asset", fileName: "robots.txt", source: `User-Agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", siteUrl)}\n` });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react(), tailwindcss(), staticPages(env.VITE_SITE_URL || "http://localhost:3000")],
    resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
    server: { port: 3000, strictPort: true },
    preview: { port: 3000, strictPort: true },
  };
});
