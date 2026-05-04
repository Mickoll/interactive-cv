import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  Database,
  FileCheck2,
  Globe2,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProfileLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  name: string;
  level: string;
  icon: LucideIcon;
  items: string[];
};

export type TimelineItem = {
  period: string;
  label: string;
  title: string;
  summary: string;
  signals: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  problem: string;
  built: string[];
  stack: string[];
  value: string[];
  proof: string[];
  metrics: string[];
  icon: LucideIcon;
  accent: "amber" | "emerald" | "cyan" | "blue";
};

export const profile = {
  name: "Mickoll Marin",
  role: "Remote Operations & Data Automation Specialist",
  location: "Badajoz, Spain",
  availability: "Remote from Spain | EU and global teams",
  email: "mickmaring@gmail.com",
  phone: "+34 603 687200",
  linkedin: "https://www.linkedin.com/in/mickollmarin/",
  cvUrl: "/Mickoll_Marin_CV.pdf",
  headline:
    "Industrial engineer with SaaS product experience and hands-on automation projects across reporting, dashboards, pricing intelligence, QA/QC, and workflow tools.",
  targetRoles: [
    "Implementation Consultant",
    "Solutions Consultant",
    "RevOps Analyst",
    "Product Ops Analyst",
    "BI/Data Analyst",
    "Technical Product Specialist",
  ],
  recruiterSnapshot: [
    { label: "Role fit", value: "Implementation, RevOps, Product Ops, BI" },
    { label: "Salary target", value: "EUR 40k-45k Spain/EU; higher contractor" },
    { label: "Languages", value: "Spanish native, English C2, Portuguese C1" },
    { label: "Work style", value: "Remote, analytical, stakeholder-facing" },
  ],
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mickollmarin/" },
    { label: "Email", href: "mailto:mickmaring@gmail.com" },
    { label: "Download CV", href: "/Mickoll_Marin_CV.pdf" },
  ] satisfies ProfileLink[],
};

export const signalCards = [
  {
    label: "Business operator",
    value: "107",
    detail: "people led in Amazon operations",
    icon: BriefcaseBusiness,
  },
  {
    label: "Revenue lens",
    value: "2 yrs",
    detail: "SaaS pricing and revenue workflows",
    icon: LineChart,
  },
  {
    label: "Builder track",
    value: "4",
    detail: "featured automation/data projects",
    icon: Workflow,
  },
  {
    label: "Remote ready",
    value: "C2",
    detail: "English, plus Spanish and Portuguese",
    icon: Globe2,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Operations",
    level: "Lead",
    icon: Workflow,
    items: ["workflow mapping", "KPI analysis", "QA/QC", "process improvement"],
  },
  {
    name: "Data",
    level: "Build",
    icon: Database,
    items: ["SQL", "Python", "ETL", "dashboards", "validation pipelines"],
  },
  {
    name: "SaaS/Product",
    level: "Translate",
    icon: Sparkles,
    items: ["pricing analysis", "product troubleshooting", "customer enablement", "RevOps"],
  },
  {
    name: "Web systems",
    level: "Ship",
    icon: Network,
    items: ["React", "TypeScript", "Next.js", "FastAPI", "REST APIs"],
  },
  {
    name: "Documents",
    level: "Automate",
    icon: FileCheck2,
    items: ["PDF extraction", "DOCX generation", "OCR", "Excel normalization"],
  },
  {
    name: "Markets",
    level: "Analyze",
    icon: BarChart3,
    items: ["pricing intelligence", "market research", "competitor analysis", "reports"],
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "2017-2018",
    label: "Industrial foundation",
    title: "Industrial Engineering and production automation",
    summary:
      "Designed and implemented process improvements in food production, including line launch support, operator coordination, OEE analysis, cycle-time reduction, and capacity gains.",
    signals: ["Industrial Engineering", "OEE", "automation", "capacity planning"],
  },
  {
    period: "2018-2021",
    label: "Operations scale",
    title: "Service operations, logistics, and Amazon leadership",
    summary:
      "Managed service operations and later worked across Amazon logistics and fulfillment, including a 107-person team, QA, inventory control, KPI follow-up, and action planning.",
    signals: ["team leadership", "last-mile logistics", "quality", "KPI action plans"],
  },
  {
    period: "2021-2025",
    label: "Remote SaaS and product",
    title: "Customer operations, product support, and revenue workflows",
    summary:
      "Built remote SaaS experience across Perchpeek and PriceLabs, combining customer-facing work with pricing, revenue management, market research, product behavior investigation, and stakeholder communication.",
    signals: ["remote SaaS", "pricing", "market research", "product operations"],
  },
  {
    period: "2025-present",
    label: "Builder mode",
    title: "Independent operations and data automation projects",
    summary:
      "Built practical tools for inspection reporting, solar workflow organization, real-estate pricing intelligence, QA/QC traceability, equipment extraction, dashboards, and document automation.",
    signals: ["Python", "SQL", "React", "FastAPI", "Next.js", "PostgreSQL"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "inspection-report-automation",
    title: "Inspection Report Automation Platform",
    shortTitle: "Report automation",
    eyebrow: "Inspection workflows",
    summary:
      "A local-first web platform that turns inspection projects, photos, annotations, OCR, catalogs, and templates into structured DOCX reports.",
    problem:
      "Inspection reporting can collapse into manual file handling, repeated Word edits, inconsistent issue catalogs, and weak traceability between photos, findings, and final reports.",
    built: [
      "React and TypeScript browser workflow for projects, front matter, assets, annotations, classifications, and generation settings.",
      "FastAPI backend with local-first project storage, uploaded assets, processed images, catalog backups, and generated reports.",
      "DOCX generation, OCR support, image handling, catalog management, map/geocoding support, and downloadable outputs.",
    ],
    stack: ["React", "TypeScript", "Vite", "FastAPI", "Python", "Pydantic", "OCR", "DOCX"],
    value: [
      "Reduced repeated report formatting work.",
      "Improved consistency between inspection evidence and report output.",
      "Created a path from desktop/manual workflows toward a browser-based operations tool.",
    ],
    proof: ["API surface for projects/assets/catalogs/reports", "Local-first storage model", "Generated report workflow"],
    metrics: ["DOCX output", "OCR", "asset workflow"],
    icon: FileCheck2,
    accent: "amber",
  },
  {
    slug: "solartrack-workflow-pwa",
    title: "SolarTrack Workflow PWA",
    shortTitle: "SolarTrack PWA",
    eyebrow: "Deployed organizer",
    summary:
      "A deployed Next.js PWA for renewable-energy project visits, report status, contacts, dashboards, maps, CSV/Excel import, and operational follow-up.",
    problem:
      "Field and advisory workflows need one reliable place to track visits, pending reports, contacts, expenses, project status, and operational handoffs across advisors.",
    built: [
      "Next.js 16 and TypeScript PWA with dashboard KPIs, calendar views, project tables, contact directory, maps, expenses, reports, and settings.",
      "CSV/Excel import, editable visit details, filters by year/month/advisor/client/status, and visual report progress.",
      "Authentication, Neon/PostgreSQL, Prisma, Vercel deployment, and smoke/persistence QA scripts in the existing product app.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Prisma", "Neon", "PWA", "Vercel"],
    value: [
      "Shows practical product thinking through a usable organizer, not a toy app.",
      "Demonstrates dashboard design, workflow modeling, data import, deployment, and operational details.",
      "Gives recruiters a live proof point for implementation and product operations roles.",
    ],
    proof: ["Live Vercel app", "PWA", "CSV/Excel import", "dashboard filters", "QA scripts"],
    metrics: ["deployed", "PWA", "multi-view"],
    icon: CalendarCheck,
    accent: "emerald",
  },
  {
    slug: "real-estate-pricing-intelligence",
    title: "Real Estate Pricing Intelligence MVP",
    shortTitle: "Pricing intelligence",
    eyebrow: "Market data product",
    summary:
      "A real-estate pricing intelligence MVP for a fragmented market with scraping, ETL, geospatial storage, deduplication, confidence metrics, dashboards, and reports.",
    problem:
      "Real-estate pricing data is inconsistent, duplicated, geographically messy, and affected by currency volatility. A useful product needs raw observations, normalized metrics, and confidence signals.",
    built: [
      "Multi-source ingestion architecture with source-mode controls, raw archive, and current-state cache.",
      "PostgreSQL/PostGIS data model for listing observations, entities, zone dictionaries, and geospatial analysis.",
      "Deduplication, unresolved-geography handling, confidence/freshness metrics, dashboards, and daily/weekly report flows.",
    ],
    stack: ["Python", "Scrapy", "Playwright", "FastAPI", "PostgreSQL", "PostGIS", "Pandas", "Streamlit"],
    value: [
      "Turned messy public listings into structured pricing intelligence.",
      "Separated raw observations from publishable metrics for more trustworthy analysis.",
      "Demonstrated data engineering, analytics, product thinking, and market-domain reasoning.",
    ],
    proof: ["multi-source ingestion", "geospatial model", "freshness metrics", "report generation"],
    metrics: ["ETL", "PostGIS", "market reports"],
    icon: Building2,
    accent: "cyan",
  },
  {
    slug: "industrial-qaqc-data-automation",
    title: "Industrial QA/QC Data Automation",
    shortTitle: "QA/QC automation",
    eyebrow: "Industrial data",
    summary:
      "Automated industrial QA/QC and equipment-data workflows by extracting, validating, normalizing, and tracing information from Excel and PDF sources.",
    problem:
      "Industrial documentation often lives across inconsistent spreadsheets, large PDF sets, repeated references, and manual validation, making traceability hard to trust.",
    built: [
      "Master document index generation from Excel and PDF sources.",
      "Closed catalogs, normalization rules, coverage maps, anomaly reports, validation summaries, and final Excel deliverables.",
      "Equipment data extraction workflow with indexed PDFs, SQLite databases, staged extraction, QA approval scripts, and dashboard review.",
    ],
    stack: ["Python", "Excel", "PDF processing", "SQLite", "Pandas", "validation scripts", "document indexing"],
    value: [
      "Reduced spreadsheet reconciliation and manual document checking.",
      "Improved traceability from source documents to QA/QC deliverables.",
      "Demonstrated fit for implementation, operations analysis, industrial data, and technical product roles.",
    ],
    proof: ["master index", "validation outputs", "coverage map", "QA approval flow"],
    metrics: ["traceability", "validation", "indexed PDFs"],
    icon: ShieldCheck,
    accent: "blue",
  },
];

export const roleFit = [
  "Implementation Consultant",
  "Solutions Consultant",
  "Revenue Operations Analyst",
  "Product Operations Analyst",
  "BI/Data Analyst",
  "Technical Product Specialist",
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

