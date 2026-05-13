import { copyFileSync, existsSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const atsPath = path.resolve(root, "public", "Mickoll_Marin_CV_ATS.pdf");
const legacyPath = path.resolve(root, "public", "Mickoll_Marin_CV.pdf");
const expectedAts = path.join(root, "public", "Mickoll_Marin_CV_ATS.pdf");
const expectedLegacy = path.join(root, "public", "Mickoll_Marin_CV.pdf");

if (atsPath !== expectedAts || legacyPath !== expectedLegacy) {
  throw new Error("Refusing to write outside the expected public CV paths.");
}

function run(command, args) {
  return spawnSync(command, args, {
    encoding: "utf8",
    windowsHide: true,
    maxBuffer: 20 * 1024 * 1024,
  });
}

const generator = String.raw`
import os
import sys
import textwrap

try:
    import fitz
except Exception as exc:
    print("PYMUPDF_IMPORT_ERROR:" + str(exc), file=sys.stderr)
    sys.exit(2)

ats_path = sys.argv[1]
legacy_path = sys.argv[2]

doc = fitz.open()
page_width, page_height = fitz.paper_size("a4")
margin_x = 42
margin_top = 42
margin_bottom = 42
content_width = page_width - (margin_x * 2)
ink = (0.07, 0.09, 0.12)
muted = (0.26, 0.32, 0.40)
accent = (0.04, 0.44, 0.53)
rule = (0.78, 0.82, 0.86)


def add_page():
    return doc.new_page(width=page_width, height=page_height)


def wrap_text(text, size, width=content_width, prefix=""):
    max_chars = max(24, int(width / (size * 0.48)) - len(prefix))
    wrapped = textwrap.wrap(text, width=max_chars, break_long_words=False, replace_whitespace=False)
    if not wrapped:
        return [""]
    return wrapped


def put_line(page, x, y, text, size=9.2, color=ink):
    page.insert_text((x, y), text, fontsize=size, fontname="helv", color=color)


def block(page, y, text, size=9.4, color=ink, width=content_width, x=margin_x, gap=2.8):
    line_height = size * 1.34
    for line in wrap_text(text, size, width):
        put_line(page, x, y, line, size=size, color=color)
        y += line_height
    return y + gap


def section_title(page, y, title):
    if y > margin_top + 8:
        page.draw_line((margin_x, y), (page_width - margin_x, y), color=rule, width=0.6)
        y += 9
    put_line(page, margin_x, y, title.upper(), size=10.2, color=ink)
    return y + 15


def role(page, y, heading, bullets):
    y = block(page, y, heading, size=9.3, color=ink, gap=1.5)
    for bullet in bullets:
        bullet_lines = wrap_text(bullet, 8.8, content_width - 14)
        put_line(page, margin_x + 2, y, "- " + bullet_lines[0], size=8.8, color=ink)
        y += 11.5
        for continuation in bullet_lines[1:]:
            put_line(page, margin_x + 13, y, continuation, size=8.8, color=ink)
            y += 11.5
    return y + 4


def project(page, y, title, summary):
    y = block(page, y, title, size=9.3, color=ink, gap=0.5)
    return block(page, y, summary, size=8.8, color=muted, gap=3.5)


page = add_page()
y = margin_top

put_line(page, margin_x, y, "Mickoll Marin", size=22, color=ink)
y += 24
put_line(page, margin_x, y, "SaaS Implementation & Operations Automation Specialist", size=12.2, color=ink)
y += 16
put_line(page, margin_x, y, "Badajoz, Spain | Remote from Spain for EU, UK, and global teams", size=8.8, color=muted)
y += 12
put_line(page, margin_x, y, "mickmaring@gmail.com | +34 603 687200", size=8.8, color=muted)
page.insert_link({"kind": fitz.LINK_URI, "from": fitz.Rect(margin_x, y - 9, margin_x + 105, y + 2), "uri": "mailto:mickmaring@gmail.com"})
y += 12
put_line(page, margin_x, y, "linkedin.com/in/mickollmarin | mickoll-interactive-cv.vercel.app", size=8.8, color=accent)
page.insert_link({"kind": fitz.LINK_URI, "from": fitz.Rect(margin_x, y - 9, margin_x + 132, y + 2), "uri": "https://www.linkedin.com/in/mickollmarin/"})
page.insert_link({"kind": fitz.LINK_URI, "from": fitz.Rect(margin_x + 145, y - 9, margin_x + 300, y + 2), "uri": "https://mickoll-interactive-cv.vercel.app/"})
y += 16

y = block(
    page,
    y,
    "Industrial Engineer with Amazon operations leadership, remote SaaS product experience, and hands-on automation projects across reporting, pricing, QA/QC, dashboards, and document workflows.",
    size=9.8,
    color=ink,
    gap=4,
)

y = section_title(page, y, "Target roles")
y = block(
    page,
    y,
    "Implementation Consultant; Solutions Consultant; Technical Consultant; Product Operations Specialist; Technical Product Specialist; RevOps / Revenue Operations / Pricing Analyst; Operations-heavy BI/Data Analyst.",
    size=8.9,
    color=ink,
    gap=2.5,
)

y = section_title(page, y, "Experience")
y = role(page, y, "Independent Operations & Data Automation Projects | Independent | Remote, Spain | July 2025 - Present", [
    "Built practical tools for inspection reporting, solar project organization, real-estate pricing intelligence, QA/QC traceability, equipment-data extraction, dashboards, and document automation.",
    "Worked across React/TypeScript, Next.js, FastAPI, Python, SQL/PostgreSQL, SQLite, PDF/OCR, DOCX generation, and spreadsheet automation.",
    "Focused on implementation details that reduce manual checking, keep records clear, and make reporting easier to repeat.",
])
y = role(page, y, "Product Specialist | PriceLabs | Remote | June 2023 - June 2025", [
    "Worked with pricing analysis, market research, product behavior investigation, customer-facing product questions, and revenue-management processes.",
    "Helped turn pricing/product issues into clearer follow-up for customers and internal teams.",
    "Built domain experience in SaaS, hospitality revenue management, dashboards, pricing logic, and remote team work.",
])
y = role(page, y, "Customer Success Specialist | PerchPeek | Remote | May 2022 - May 2023", [
    "Supported remote SaaS operations through customer communication, follow-up, and product troubleshooting.",
    "Built stronger judgment around implementation gaps, user friction, and the handoff between business needs and product behavior.",
])
y = role(page, y, "Manager and Co-founder | Padme Yoga | Badajoz, Spain | May 2021 - January 2023", [
    "Managed day-to-day operations, scheduling, customer communication, revenue initiatives, and team coordination.",
    "Implemented operational and commercial improvements that contributed to a 30% increase in monthly revenue.",
])
y = role(page, y, "Area Manager | Amazon | Spain | October 2020 - February 2021", [
    "Led and coordinated a 107-person operations team, including quality follow-up, inventory control, KPI tracking, and action planning.",
    "Built the operational discipline that now informs implementation, product operations, BI, and automation work.",
])
y = role(page, y, "Logistics Specialist | Amazon | Spain | July 2019 - October 2020", [
    "Worked across logistics operations, issue follow-up, inventory processes, and performance tracking.",
    "Used operational metrics and cross-functional communication to support service reliability and process execution.",
])

# Explicit page break before the Badajoz role so extractors never merge the previous bullet with the next heading.
page = add_page()
y = margin_top

y = role(page, y, "Manager | Badajoz Speed Queen | Badajoz, Spain | January 2018 - June 2019", [
    "Managed accounts, planning, marketing, daily operations, data analysis, and customer communication.",
    "Helped increase revenue by 55% year over year through operational and commercial improvements.",
])
y = role(page, y, "Industrial Engineering Intern and Thesis Project | Organizacion El Tunal | Barquisimeto, Venezuela | January 2017 - December 2017", [
    "Worked on production automation, operator coordination, OEE analysis, cycle-time reduction, line launch support, and capacity improvement.",
])

y = section_title(page, y, "Selected project examples")
y = project(page, y, "Inspection Report Automation Platform", "React/TypeScript + FastAPI local-first report builder for photos, PDFs, annotations, OCR, catalog management, and DOCX export. Improved evidence-to-report traceability and reduced repeated report formatting.")
y = project(page, y, "SolarTrack Operations PWA", "Next.js / TypeScript PWA for visits, advisor assignments, report status, contacts, maps, imports, dashboards, authentication, persistence checks, and follow-up visibility.")
y = project(page, y, "Industrial QA/QC Data Automation", "Python, Excel, PDF processing, SQLite, and Pandas workflows for document indexes, coverage maps, validation summaries, anomaly reports, and traceable exports. Public sample covers 1,594 records, 98 systems, and 13,351 checks.")
y = project(page, y, "Real Estate Pricing Intelligence MVP", "Python scraping/ETL, PostgreSQL/PostGIS, deduplication, confidence/freshness metrics, dashboarding, and daily/weekly reporting for pricing context.")

y = section_title(page, y, "Skills")
y = block(
    page,
    y,
    "Implementation and operations: onboarding, handoffs, issue triage, follow-up, status modeling. Data and reporting: SQL, pricing views, dashboards, QA checks, data quality. Internal tools and automation: React, Next.js, TypeScript, Python, FastAPI, PostgreSQL, SQLite, PDF/OCR, DOCX/Excel.",
    size=8.8,
    color=ink,
    gap=3,
)

y = section_title(page, y, "Education and languages")
for item in [
    "EF SET English Certificate, 79/100, C2 Proficient.",
    "MBA, Universidad Isabel I, Barcelona, Spain, 2020.",
    "Master in Big Data and Business Intelligence, ISEB, Barcelona, Spain, 2019. Cum Laude.",
    "Industrial Engineering Degree, Universidad Yacambu, Barquisimeto, Venezuela, 2018.",
    "Languages: Spanish native, English C2, Portuguese C1.",
]:
    y = block(page, y, "- " + item, size=8.8, color=ink, gap=0.5)

doc.set_metadata({
    "title": "Mickoll Marin CV",
    "author": "Mickoll Marin",
    "subject": "ATS-friendly CV",
    "keywords": "Implementation Consultant, Solutions Consultant, Technical Consultant, Product Operations, RevOps, Pricing Analyst, BI Data Analyst, SaaS, Operations Automation",
})

tmp_path = ats_path + ".tmp"
doc.save(tmp_path, garbage=4, deflate=True)
doc.close()
os.replace(tmp_path, ats_path)
`;

const attempts = [
  ["py", ["-3.12", "-c", generator, atsPath, legacyPath]],
  ["py", ["-3", "-c", generator, atsPath, legacyPath]],
  ["python", ["-c", generator, atsPath, legacyPath]],
];

const errors = [];
for (const [command, args] of attempts) {
  const result = run(command, args);
  if (result.status === 0 && existsSync(atsPath)) {
    copyFileSync(atsPath, legacyPath);
    console.log(`Generated ${path.relative(root, atsPath)} and refreshed ${path.relative(root, legacyPath)}.`);
    process.exit(0);
  }
  errors.push(`${command}: ${(result.stderr || result.stdout || `exit ${result.status}`).trim()}`);
}

throw new Error(`Could not generate ATS PDF. Tried:\n${errors.map((error) => `- ${error}`).join("\n")}`);
