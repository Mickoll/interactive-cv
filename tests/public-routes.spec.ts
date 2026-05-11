import { expect, test, type Page } from "@playwright/test";

const htmlRoutes = [
  "/",
  "/?lang=es",
  "/resume",
  "/resume?lang=es",
  "/case-studies/inspection-report-automation",
  "/case-studies/inspection-report-automation?lang=es",
  "/case-studies/solartrack-workflow-pwa",
  "/case-studies/solartrack-workflow-pwa?lang=es",
  "/case-studies/real-estate-pricing-intelligence",
  "/case-studies/real-estate-pricing-intelligence?lang=es",
  "/case-studies/industrial-qaqc-data-automation",
  "/case-studies/industrial-qaqc-data-automation?lang=es",
];

const pdfRoutes = ["/Mickoll_Marin_CV_ATS.pdf", "/Mickoll_Marin_CV.pdf"];

async function expectCleanHeadingStructure(page: Page) {
  const headings = await page.locator("h1,h2,h3,h4,h5,h6").evaluateAll((nodes) =>
    nodes.map((node) => ({
      level: Number(node.tagName.slice(1)),
      text: node.textContent?.trim() ?? "",
    }))
  );

  expect(headings.filter((heading) => heading.level === 1), "page should have exactly one h1").toHaveLength(1);

  for (let index = 1; index < headings.length; index += 1) {
    const previous = headings[index - 1];
    const current = headings[index];
    expect(
      current.level <= previous.level + 1,
      `heading level jumps from ${previous.level} (${previous.text}) to ${current.level} (${current.text})`
    ).toBeTruthy();
  }
}

test.describe("public routes", () => {
  for (const route of htmlRoutes) {
    test(`serves ${route}`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") {
          consoleErrors.push(message.text());
        }
      });
      page.on("pageerror", (error) => {
        consoleErrors.push(error.message);
      });

      const response = await page.goto(route, { waitUntil: "networkidle" });
      expect(response?.status()).toBe(200);
      await expect(page.locator("body")).not.toContainText(/401|403|Unauthorized|Forbidden/i);
      await expectCleanHeadingStructure(page);
      expect(consoleErrors).toEqual([]);
    });
  }

  for (const route of pdfRoutes) {
    test(`serves ${route}`, async ({ request }) => {
      const response = await request.get(route);
      expect(response.status()).toBe(200);
      expect(response.headers()["content-type"]).toContain("application/pdf");
    });
  }

  test("custom 404 is available for invalid routes", async ({ page }) => {
    const response = await page.goto("/this-route-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Resume" })).toBeVisible();
  });
});

test.describe("homepage links and downloads", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
  });

  test("main CTAs point to the expected destinations", async ({ page }) => {
    const downloadLink = page.getByRole("link", { name: /Download ATS CV/i }).first();
    await expect(downloadLink).toHaveAttribute("href", "/Mickoll_Marin_CV_ATS.pdf");

    await expect(page.getByRole("link", { name: /View case studies/i }).first()).toHaveAttribute("href", "#projects");
    await expect(page.getByRole("link", { name: /Email me/i }).first()).toHaveAttribute("href", /^mailto:/);
    await expect(page.getByRole("link", { name: /^LinkedIn$/i }).first()).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/mickollmarin/"
    );
  });

  test("ATS CV downloads with the correct filename", async ({ page }) => {
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("link", { name: /Download ATS CV/i }).first().click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe("Mickoll_Marin_CV_ATS.pdf");
  });

  test("all case study cards link to public case-study pages", async ({ page }) => {
    const caseLinks = page.getByRole("link", { name: /Open case study:/i });
    await expect(caseLinks).toHaveCount(4);

    const hrefs = await caseLinks.evaluateAll((links) => links.map((link) => link.getAttribute("href")));
    expect(hrefs).toEqual([
      "/case-studies/solartrack-workflow-pwa",
      "/case-studies/inspection-report-automation",
      "/case-studies/real-estate-pricing-intelligence",
      "/case-studies/industrial-qaqc-data-automation",
    ]);
  });
});

test.describe("mobile layout", () => {
  test("homepage has no horizontal overflow", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
});
