import { expect, test } from "@playwright/test";

test.describe("portfolio", () => {
  for (const locale of ["en", "vi"] as const) {
    test(`${locale} homepage supports project and recruitment enquiries`, async ({ page, request }) => {
      await page.goto(locale === "en" ? "/" : "/vi");
      await expect(page).toHaveTitle(/Odoo/);
      await expect(page.getByRole("heading", { level: 1 })).toContainText(locale === "en" ? "Odoo customization" : "Tùy chỉnh Odoo");
      await expect(page.locator("#services article")).toHaveCount(3);
      await expect(page.locator("#work article")).toHaveCount(4);
      await expect(page.locator("#about ol li")).toHaveCount(4);
      const portrait = page.locator(".hero-portrait img");
      await expect(portrait).toBeVisible();
      await expect.poll(() => portrait.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);

      const projectLink = page.locator("#contact").getByRole("link", { name: locale === "en" ? "Discuss a project" : "Trao đổi dự án" });
      const roleLink = page.getByRole("link", { name: locale === "en" ? "Discuss a role" : "Trao đổi việc làm" });
      const projectUrl = new URL((await projectLink.getAttribute("href"))!);
      const roleUrl = new URL((await roleLink.getAttribute("href"))!);
      expect(projectUrl.protocol).toBe("mailto:");
      expect(projectUrl.searchParams.get("body")).toContain(locale === "en" ? "Target deadline:" : "Deadline mong muốn:");
      expect(roleUrl.protocol).toBe("mailto:");
      expect(roleUrl.searchParams.get("subject")).toBe(locale === "en" ? "Job opportunity" : "Trao đổi cơ hội việc làm");
      await expect(page.locator(".resume-link")).toHaveAttribute("aria-label", locale === "en" ? "Download résumé" : "Tải CV");
      const resumePath = await page.locator(".resume-link").getAttribute("href");
      expect((await request.get(resumePath!)).ok()).toBeTruthy();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();

      const ogUrl = await page.locator('meta[property="og:image"]').getAttribute("content");
      const imageResponse = await request.get(new URL(ogUrl!).pathname);
      expect(imageResponse.ok()).toBeTruthy();
      expect(imageResponse.headers()["content-type"]).toContain("image/png");
    });
  }

  test("language switch keeps the corresponding page", async ({ page }) => {
    await page.goto("/work/retail-operations");
    await page.getByRole("link", { name: "VI", exact: true }).click();
    await expect(page).toHaveURL(/\/vi\/work\/retail-operations$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Odoo POS");
    await expect(page.locator("html")).toHaveAttribute("lang", "vi");
  });

  test("every case study route renders in both locales", async ({ page }) => {
    const slugs = ["retail-operations", "manufacturing-control", "system-integration", "attendance-platform"];
    for (const slug of slugs) {
      for (const prefix of ["", "/vi"]) {
        const response = await page.goto(`${prefix}/work/${slug}`);
        expect(response?.ok()).toBeTruthy();
        await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
        await expect(page.getByRole("heading", { name: prefix ? "Chức năng đã triển khai" : "Implemented functionality" })).toBeVisible();
        await expect(page.locator(".visual-status")).toHaveText(prefix ? "Minh họa quy trình" : "Illustrative flow");
        await expect(page.locator(".confidentiality-note")).toHaveCount(slug === "attendance-platform" ? 0 : 1);
      }
    }
  });
});
