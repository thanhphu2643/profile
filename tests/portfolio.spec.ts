import { expect, test } from "@playwright/test";

test.describe("portfolio", () => {
  test("English homepage exposes the primary recruiter journey", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("business workflows");
    await expect(page.getByRole("heading", { name: "Engineering stories, not a technology list." })).toBeVisible();
    await expect(page.locator("#work article")).toHaveCount(4);
    await expect(page.getByRole("link", { name: "Start a conversation" })).toHaveAttribute("href", /^mailto:/);
    await expect(page.locator(".resume-link")).toHaveAttribute("href", /\.pdf$/);
    await expect(page.locator(".resume-link")).toHaveAttribute("aria-label", "Download résumé");
  });

  test("language switch keeps the corresponding page", async ({ page }) => {
    await page.goto("/work/retail-operations");
    await page.getByRole("link", { name: "VI", exact: true }).click();
    await expect(page).toHaveURL(/\/vi\/work\/retail-operations$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("đáng tin cậy");
    await expect(page.locator("html")).toHaveAttribute("lang", "vi");
  });

  test("every case study route renders in both locales", async ({ page }) => {
    const slugs = ["retail-operations", "manufacturing-control", "system-integration", "attendance-platform"];
    for (const slug of slugs) {
      for (const prefix of ["", "/vi"]) {
        const response = await page.goto(`${prefix}/work/${slug}`);
        expect(response?.ok()).toBeTruthy();
        await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      }
    }
  });
});
