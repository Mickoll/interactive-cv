import { expect, test, type Page } from "@playwright/test";
import path from "node:path";
import { spawnSync } from "node:child_process";

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
const staticRoutes = ["/robots.txt", "/sitemap.xml"];
const forbiddenPageText = new RegExp(
  [
    ["sal", "ary"].join(""),
    ["mickoll-interactive", "-ijdca54lo"].join(""),
    ["otchos", "-projects"].join(""),
    "C:\\\\Users",
    "private source filename:",
    "automation work\\.Manager",
    ["process execution\\.", "Manager"].join(""),
    ["Download", " CV CV"].join(""),
  ].join("|"),
  "i"
);

function run(command: string, args: string[]) {
  return spawnSync(command, args, {
    encoding: "utf8",
    windowsHide: true,
    maxBuffer: 20 * 1024 * 1024,
  });
}

function extractPdfText(pdfPath: string) {
  const pdftotext = run("pdftotext", ["-layout", pdfPath, "-"]);
  if (pdftotext.status === 0 && pdftotext.stdout.trim()) {
    return pdftotext.stdout;
  }

  const code = `
import sys
import fitz
doc = fitz.open(sys.argv[1])
print("\\n".join(page.get_text() for page in doc))
`;

  for (const [command, argsPrefix] of [
    ["py", ["-3.12"]],
    ["py", ["-3"]],
    ["python", []],
  ] as const) {
    const result = run(command, [...argsPrefix, "-c", code, pdfPath]);
    if (result.status === 0 && result.stdout.trim()) {
      return result.stdout;
    }
  }

  throw new Error("Could not extract text from ATS PDF for route test.");
}

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
      await expect(page.locator("body")).not.toContainText(forbiddenPageText);
      await expectCleanHeadingStructure(page);

      const imageAltValues = await page.locator("img").evaluateAll((images) => images.map((image) => image.getAttribute("alt") ?? ""));
      expect(imageAltValues.every((alt) => alt.trim().length > 0)).toBeTruthy();
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

  for (const route of staticRoutes) {
    test(`serves ${route}`, async ({ request }) => {
      const response = await request.get(route);
      expect(response.status()).toBe(200);
    });
  }

  test("ATS PDF text extraction keeps the page break before Badajoz Speed Queen", () => {
    const pdfText = extractPdfText(path.resolve(process.cwd(), "public", "Mickoll_Marin_CV_ATS.pdf"));
    expect(pdfText).not.toContain(["process execution.", "Manager"].join(""));
    expect(pdfText).toMatch(/process execution\.\s*(?:\r?\n|\f)+\s*Manager \| Badajoz Speed Queen/i);
  });

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
    await page.addInitScript(() => window.localStorage.setItem("mickoll-cv-language", "en"));
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

  test("header and footer links are usable and not duplicated", async ({ page }) => {
    await expect(page.getByRole("banner").getByText("SaaS Implementation & Operations Automation")).toBeVisible();
    await expect(page.getByRole("banner").getByRole("link", { name: "Projects" })).toHaveAttribute("href", "#projects");
    await expect(page.getByRole("banner").getByRole("link", { name: "Download CV" })).toHaveAttribute("href", "/Mickoll_Marin_CV_ATS.pdf");
    await expect(page.getByRole("banner").getByRole("link", { name: "Email" })).toHaveAttribute("href", "mailto:mickmaring@gmail.com");
    await expect(page.getByRole("banner").getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", "https://www.linkedin.com/in/mickollmarin/");
    await expect(page.locator("body")).not.toContainText(["Download", " CV CV"].join(""));

    await expect(page.getByRole("contentinfo").getByRole("link", { name: "Email" })).toHaveAttribute("href", "mailto:mickmaring@gmail.com");
    await expect(page.getByRole("contentinfo").getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", "https://www.linkedin.com/in/mickollmarin/");
    await expect(page.getByRole("contentinfo").getByRole("link", { name: "Download CV" })).toHaveAttribute("href", "/Mickoll_Marin_CV_ATS.pdf");
  });

  test("projects link scrolls to case-study section", async ({ page }) => {
    await page.getByRole("link", { name: "Projects" }).first().click();
    await expect(page.locator("#projects")).toBeInViewport();
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
      "/case-studies/inspection-report-automation",
      "/case-studies/solartrack-workflow-pwa",
      "/case-studies/industrial-qaqc-data-automation",
      "/case-studies/real-estate-pricing-intelligence",
    ]);
  });
});

test.describe("case study navigation and role relevance", () => {
  for (const route of htmlRoutes.filter((route) => route.startsWith("/case-studies/") && !route.includes("?"))) {
    test(`${route} has recruiter navigation and role relevance`, async ({ page }) => {
      await page.goto(route, { waitUntil: "networkidle" });
      await expect(page.getByRole("link", { name: /Back to Home/i })).toBeVisible();
      await expect(page.getByRole("link", { name: /^Resume$/i }).first()).toBeVisible();
      await expect(page.getByRole("link", { name: /Download ATS CV/i }).first()).toHaveAttribute("href", "/Mickoll_Marin_CV_ATS.pdf");
      await expect(page.getByRole("heading", { name: "Role relevance" })).toBeVisible();
      await expect(page.getByText(/Previous case study/i)).toBeVisible();
      await expect(page.getByText(/Next case study/i)).toBeVisible();
    });
  }
});

test.describe("resume", () => {
  test("project examples link to case studies and dates match source CV", async ({ page }) => {
    await page.goto("/resume", { waitUntil: "networkidle" });
    await expect(page.getByRole("heading", { name: "Product Specialist" })).toBeVisible();
    await expect(page.getByText("June 2023 - June 2025")).toBeVisible();
    await expect(page.getByText("Customer Success Specialist")).toBeVisible();
    await expect(page.getByText("May 2022 - May 2023")).toBeVisible();
    await expect(page.getByText("Area Manager")).toBeVisible();
    await expect(page.getByText("October 2020 - February 2021")).toBeVisible();
    await expect(page.getByText("Logistics Specialist")).toBeVisible();
    await expect(page.getByText("July 2019 - October 2020")).toBeVisible();
    await expect(page.getByText("EF SET English Certificate, 79/100, C2 Proficient.")).toBeVisible();
    await expect(page.getByText("Portfolio: mickoll-interactive-cv.vercel.app")).toBeVisible();

    await expect(page.getByRole("link", { name: /Inspection Report Automation Platform/i })).toHaveAttribute(
      "href",
      "/case-studies/inspection-report-automation"
    );
  });
});

test.describe("language mode", () => {
  test("Spanish route switches html lang and content", async ({ page }) => {
    await page.goto("/?lang=es", { waitUntil: "networkidle" });
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    await expect(page.getByRole("heading", { name: /Ayudo a equipos SaaS/i })).toBeVisible();
    await expect(page.getByRole("button", { name: "Switch language to English" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Cambiar idioma a español" })).toBeVisible();
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
