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
  operatingMode: string;
  output: string;
  items: string[];
};

export type TimelineItem = {
  period: string;
  label: string;
  title: string;
  summary: string;
  signals: string[];
};

export type ProfessionalExperience = {
  period: string;
  organization: string;
  role: string;
  context: string;
  bullets: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  input: string;
  system: string;
  problem: string;
  role: string;
  output: string;
  constraints: string[];
  built: string[];
  stack: string[];
  value: string[];
  proof: string[];
  evidence: string[];
  proves: string[];
  metrics: string[];
  sampleImage: string;
  sampleAlt: string;
  workflow: string[];
  icon: LucideIcon;
  accent: "amber" | "emerald" | "cyan" | "blue";
};

export type CapabilityGroup = {
  name: string;
  verb: string;
  input: string;
  system: string;
  items: string[];
  output: string;
  usedIn: string[];
};

export type ValueNode = {
  id: string;
  label: string;
  title: string;
  detail: string;
  icon: LucideIcon;
  x: number;
  y: number;
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
    "Industrial engineer who has led operations, worked in remote SaaS, and built practical tools for reporting, dashboards, pricing intelligence, QA/QC, and workflow automation.",
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
    { label: "Availability", value: "Open to remote EU, UK, and global roles" },
    { label: "Languages", value: "Spanish native, English C2, Portuguese C1" },
    { label: "Work setup", value: "Spain-based, async-friendly, stakeholder-facing" },
  ],
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mickollmarin/" },
    { label: "Email", href: "mailto:mickmaring@gmail.com" },
    { label: "Download CV", href: "/Mickoll_Marin_CV.pdf" },
  ] satisfies ProfileLink[],
};

export const signalCards = [
  {
    label: "Amazon Ops",
    value: "107",
    detail: "people led in Amazon operations",
    icon: BriefcaseBusiness,
  },
  {
    label: "SaaS/Product",
    value: "2 yrs",
    detail: "SaaS pricing and revenue workflows",
    icon: LineChart,
  },
  {
    label: "Automation",
    value: "4",
    detail: "featured automation/data projects",
    icon: Workflow,
  },
  {
    label: "Remote",
    value: "C2",
    detail: "English, plus Spanish and Portuguese",
    icon: Globe2,
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    name: "Operate",
    verb: "Understand the work",
    input: "field work, service queues, QA gaps",
    system: "status rhythm, ownership, handoffs",
    items: ["field workflows", "KPI follow-up", "QA/QC", "handoffs"],
    output: "A clear picture of what needs to happen next.",
    usedIn: ["SolarTrack", "Amazon", "report automation"],
  },
  {
    name: "Analyze",
    verb: "Find the signal",
    input: "pricing data, exports, market pages",
    system: "SQL/Python checks and dashboards",
    items: ["SQL", "pricing analysis", "market research", "dashboards"],
    output: "Cleaner context for decisions and prioritization.",
    usedIn: ["PriceLabs", "pricing MVP", "QA/QC"],
  },
  {
    name: "Automate",
    verb: "Remove repeat work",
    input: "PDFs, spreadsheets, images, templates",
    system: "ETL, OCR, validation, generation",
    items: ["Python", "ETL", "PDF/OCR", "DOCX/Excel generation"],
    output: "Repeatable outputs from documents, sheets, and operational records.",
    usedIn: ["report builder", "QA/QC", "equipment data"],
  },
  {
    name: "Ship",
    verb: "Make it usable",
    input: "workflow requirements and user friction",
    system: "React/Next/FastAPI interfaces",
    items: ["React", "Next.js", "TypeScript", "FastAPI"],
    output: "Small web tools that people can actually operate.",
    usedIn: ["SolarTrack", "report builder", "portfolio"],
  },
  {
    name: "Communicate",
    verb: "Bridge teams",
    input: "users, product behavior, business context",
    system: "clear follow-up and technical translation",
    items: ["English C2", "Spanish native", "Portuguese C1", "stakeholder follow-up"],
    output: "Better translation between users, business needs, and technical work.",
    usedIn: ["SaaS roles", "implementation", "remote teams"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Operations",
    level: "Control layer",
    icon: Workflow,
    operatingMode: "Map the work",
    output: "Clear workflows, ownership, and KPIs",
    items: ["workflow mapping", "KPI analysis", "QA/QC", "process improvement"],
  },
  {
    name: "Data",
    level: "Data layer",
    icon: Database,
    operatingMode: "Normalize source data",
    output: "Tables, validations, dashboards, reports",
    items: ["SQL", "Python", "ETL", "dashboards", "validation pipelines"],
  },
  {
    name: "SaaS/Product",
    level: "Translation layer",
    icon: Sparkles,
    operatingMode: "Connect users and systems",
    output: "Better product decisions and implementation clarity",
    items: ["pricing analysis", "product troubleshooting", "customer enablement", "RevOps"],
  },
  {
    name: "Web systems",
    level: "Interface layer",
    icon: Network,
    operatingMode: "Make the workflow usable",
    output: "React/Next/FastAPI tools people can operate",
    items: ["React", "TypeScript", "Next.js", "FastAPI", "REST APIs"],
  },
  {
    name: "Documents",
    level: "Evidence layer",
    icon: FileCheck2,
    operatingMode: "Turn files into outputs",
    output: "DOCX/PDF/Excel automation and traceability",
    items: ["PDF extraction", "DOCX generation", "OCR", "Excel normalization"],
  },
  {
    name: "Markets",
    level: "Decision layer",
    icon: BarChart3,
    operatingMode: "Find the signal",
    output: "Pricing context, market reports, competitor views",
    items: ["pricing intelligence", "market research", "competitor analysis", "reports"],
  },
];

export const valueNodes: ValueNode[] = [
  {
    id: "operations",
    label: "Ops",
    title: "Operations",
    detail: "Maps real workflows, bottlenecks, KPIs, stakeholders, and handoffs before building.",
    icon: Workflow,
    x: 17,
    y: 52,
    accent: "emerald",
  },
  {
    id: "data",
    label: "Data",
    title: "Structured data",
    detail: "Turns spreadsheets, PDFs, market pages, and operational exports into clean tables and checks.",
    icon: Database,
    x: 37,
    y: 24,
    accent: "cyan",
  },
  {
    id: "product",
    label: "Product",
    title: "SaaS/product translation",
    detail: "Converts customer/product ambiguity into requirements, workflows, and better implementation decisions.",
    icon: Sparkles,
    x: 61,
    y: 33,
    accent: "amber",
  },
  {
    id: "documents",
    label: "Docs",
    title: "Document automation",
    detail: "Builds repeatable outputs from inspection evidence, QA/QC records, templates, OCR, and reports.",
    icon: FileCheck2,
    x: 77,
    y: 58,
    accent: "blue",
  },
  {
    id: "markets",
    label: "Markets",
    title: "Market intelligence",
    detail: "Connects pricing, competitor behavior, property data, and confidence signals to decisions.",
    icon: LineChart,
    x: 53,
    y: 76,
    accent: "cyan",
  },
  {
    id: "web",
    label: "Web",
    title: "Usable web tools",
    detail: "Ships dashboards, PWAs, local-first tools, and interfaces that make the workflow operational.",
    icon: Network,
    x: 28,
    y: 78,
    accent: "amber",
  },
];

export const workflowStages = [
  {
    label: "raw inputs",
    detail: "PDFs, sheets, exports, market pages",
  },
  {
    label: "workflow logic",
    detail: "rules, status, ownership, validation",
  },
  {
    label: "structured data",
    detail: "tables, records, catalogs, checks",
  },
  {
    label: "automated outputs",
    detail: "dashboards, reports, documents, exports",
  },
  {
    label: "business decisions",
    detail: "pricing, QA review, follow-up, action",
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
    label: "Independent automation",
    title: "Independent operations and data automation projects",
    summary:
      "Built practical tools for inspection reporting, solar workflow organization, real-estate pricing intelligence, QA/QC traceability, equipment extraction, dashboards, and document automation.",
    signals: ["Python", "SQL", "React", "FastAPI", "Next.js", "PostgreSQL"],
  },
];

export const professionalExperience: ProfessionalExperience[] = [
  {
    period: "July 2025 - Present",
    organization: "Independent Operations & Data Automation Projects",
    role: "Remote workflow, data, and web-systems builder",
    context: "Spain-based independent project work for practical business workflows.",
    bullets: [
      "Built tools for inspection reporting, solar project organization, real-estate pricing intelligence, QA/QC traceability, equipment-data extraction, dashboards, and document automation.",
      "Worked across React/TypeScript, Next.js, FastAPI, Python, SQL/PostgreSQL, SQLite, PDF/OCR workflows, DOCX generation, and spreadsheet automation.",
      "Focused on operational usefulness: cleaner inputs, clearer states, validation, repeatable outputs, and handoff-ready reporting.",
    ],
  },
  {
    period: "June 2023 - June 2025",
    organization: "PriceLabs",
    role: "Remote SaaS pricing, revenue, and product operations",
    context: "Revenue-management SaaS for short-term rental pricing.",
    bullets: [
      "Worked with pricing analysis, market research, product behavior investigation, customer-facing product questions, and revenue-management workflows.",
      "Translated pricing/product issues into clearer operational follow-up for customers and internal stakeholders.",
      "Built domain credibility in SaaS, hospitality revenue management, dashboards, pricing logic, and remote cross-functional work.",
    ],
  },
  {
    period: "2021 - 2023",
    organization: "PerchPeek",
    role: "Remote SaaS customer and product operations",
    context: "Relocation-technology environment with customer-facing operational workflows.",
    bullets: [
      "Supported remote SaaS operations by combining customer communication, workflow follow-up, and product troubleshooting.",
      "Built stronger judgment around implementation gaps, user friction, and the handoff between business process and product behavior.",
    ],
  },
  {
    period: "May 2021 - January 2023",
    organization: "Padme Yoga",
    role: "Manager and co-founder",
    context: "Local wellness business with operations, scheduling, commercial follow-up, and team coordination.",
    bullets: [
      "Managed day-to-day operations, scheduling, stakeholder communication, revenue initiatives, and team coordination.",
      "Implemented operational and commercial improvements that contributed to a 30% increase in monthly revenue.",
    ],
  },
  {
    period: "2018 - 2021",
    organization: "Amazon and service operations",
    role: "Operations, logistics, QA, and team leadership",
    context: "High-volume operational environments with KPI ownership and process discipline.",
    bullets: [
      "Led and coordinated operational work including a 107-person Amazon team, QA follow-up, inventory control, KPI tracking, and action planning.",
      "Developed the operating rhythm that now informs implementation, product operations, BI, and automation work.",
    ],
  },
  {
    period: "January 2018 - June 2019",
    organization: "Badajoz Speed Queen",
    role: "Manager",
    context: "Service-business operations with planning, accounts, marketing, and daily execution.",
    bullets: [
      "Managed accounts, planning, marketing, daily operations, data analysis, and stakeholder communication.",
      "Helped increase revenue by 55% year over year through operational and commercial improvements.",
    ],
  },
  {
    period: "2017 - 2018",
    organization: "Industrial engineering and production improvement",
    role: "Industrial engineer",
    context: "Food-production process improvement and line-launch support.",
    bullets: [
      "Worked on production automation, operator coordination, OEE analysis, cycle-time reduction, line launch support, and capacity improvement.",
    ],
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
    input: "inspection photos, PDFs, certificates, issue catalogs, project metadata",
    system: "local-first React/FastAPI workbench with project storage, review states, OCR, and DOCX generation",
    problem:
      "Inspection reporting can collapse into manual file handling, repeated Word edits, inconsistent issue catalogs, and weak traceability between photos, findings, and final reports.",
    role: "Workflow designer and full-stack implementer",
    output: "Structured inspection report workflow with generated DOCX output",
    constraints: [
      "Needed to preserve reliability of an existing document-heavy process.",
      "Had to keep evidence, annotations, issue catalogs, and report generation traceable.",
      "Had to work locally without turning a field workflow into a fragile cloud dependency.",
    ],
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
    proof: ["real local app capture", "API surface for projects/assets/catalogs/reports", "Generated report workflow"],
    evidence: ["Captured from local Vite/FastAPI app after creating a sanitized demo project.", "Other visible project names were masked and replaced with demo labels."],
    proves: [
      "Models the operational process before choosing the interface.",
      "Connects user workflow, file handling, APIs, and document automation.",
      "Builds internal tools with enough structure to outgrow one-off scripts.",
    ],
    metrics: ["DOCX output", "OCR", "asset workflow"],
    sampleImage: "/work-samples/report-builder-capture.png",
    sampleAlt: "Sanitized capture of the local inspection report builder app using a demo project.",
    workflow: ["project setup", "photo upload", "issue catalog", "DOCX export"],
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
    input: "visit schedules, advisor assignments, report status, contacts, imports, expenses",
    system: "Next.js PWA with dashboards, calendar, maps, records, filters, imports, auth, and persistence QA scripts",
    problem:
      "Field and advisory workflows need one reliable place to track visits, pending reports, contacts, expenses, project status, and operational handoffs across advisors.",
    role: "Product/workflow designer and implementer",
    output: "Deployed PWA for visits, reports, contacts, maps, imports, and operational follow-up",
    constraints: [
      "Needed to serve daily operational use, not just look good in a demo.",
      "Had to support several views of the same work: calendar, projects, reports, contacts, maps, and expenses.",
      "Had to handle practical imports and editable records while remaining deployable on Vercel.",
    ],
    built: [
      "Next.js 16 and TypeScript PWA with dashboard KPIs, calendar views, project tables, contact directory, maps, expenses, reports, and settings.",
      "CSV/Excel import, editable visit details, filters by year/month/advisor/client/status, and visual report progress.",
      "Authentication, Neon/PostgreSQL, Prisma, Vercel deployment, and smoke/persistence QA scripts in the existing product app.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Prisma", "Neon", "PWA", "Vercel"],
    value: [
      "Shows product thinking through an organizer designed for daily operational use.",
      "Demonstrates dashboard design, workflow modeling, data import, deployment, and operational details.",
      "Gives recruiters a live proof point for implementation and product operations roles.",
    ],
    proof: ["component-derived product preview", "PWA", "CSV/Excel import", "dashboard filters", "QA scripts"],
    evidence: ["Preview built from the actual SolarTrack dashboard/sidebar/report components.", "Raw app screenshots were not used because the local store contains private operational records."],
    proves: [
      "Creates product structure around a real business workflow.",
      "Translates field operations into navigation, records, filters, and status states.",
      "Ships and verifies deployed Next.js applications.",
    ],
    metrics: ["deployed", "PWA", "multi-view"],
    sampleImage: "/work-samples/solartrack-dashboard.svg",
    sampleAlt: "Sanitized SolarTrack dashboard preview based on the local project organizer app.",
    workflow: ["visit records", "status filters", "report queue", "follow-up"],
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
    input: "public listings, source snapshots, zone names, prices, geography, freshness signals",
    system: "multi-source ingestion, PostgreSQL/PostGIS model, deduplication, confidence scoring, reports",
    problem:
      "Real-estate pricing data is inconsistent, duplicated, geographically uneven, and affected by currency volatility. A useful product needs raw observations, normalized metrics, and confidence signals.",
    role: "Data product and pipeline designer",
    output: "Market intelligence pipeline with geospatial storage, dashboards, and reporting flows",
    constraints: [
      "Sources were fragmented, inconsistent, and not equally trustworthy.",
      "Published metrics needed to stay separate from raw captured observations.",
      "Geography, currency context, freshness, and duplicate listings all affected trust.",
    ],
    built: [
      "Multi-source ingestion architecture with source-mode controls, raw archive, and current-state cache.",
      "PostgreSQL/PostGIS data model for listing observations, entities, zone dictionaries, and geospatial analysis.",
      "Deduplication, unresolved-geography handling, confidence/freshness metrics, dashboards, and daily/weekly report flows.",
    ],
    stack: ["Python", "Scrapy", "Playwright", "FastAPI", "PostgreSQL", "PostGIS", "Pandas", "Streamlit"],
    value: [
      "Turned fragmented public listings into structured pricing intelligence.",
      "Separated raw observations from publishable metrics for more trustworthy analysis.",
      "Demonstrated data engineering, analytics, product thinking, and market-domain reasoning.",
    ],
    proof: ["daily report outputs", "multi-source ingestion", "geospatial model", "freshness metrics", "report generation"],
    evidence: ["Preview uses sanitized metrics from generated daily market report files.", "Exact zones and source-specific names are generalized in the public asset."],
    proves: [
      "Thinks like a data product owner, not only a scraper implementer.",
      "Designs around data trust, source quality, and operational usefulness.",
      "Connects market logic, databases, dashboards, and reports.",
    ],
    metrics: ["ETL", "PostGIS", "market reports"],
    sampleImage: "/work-samples/pricing-intelligence.svg",
    sampleAlt: "Sanitized pricing intelligence dashboard preview based on the local real-estate MVP.",
    workflow: ["raw listings", "dedupe", "geo confidence", "market report"],
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
    input: "Excel registers, PDF document sets, system lists, weak references, anomalies",
    system: "master index, closed catalogs, coverage maps, validation summaries, reviewable exports",
    problem:
      "Industrial documentation often lives across inconsistent spreadsheets, large PDF sets, repeated references, and manual validation, making traceability hard to trust.",
    role: "Industrial data automation implementer",
    output: "Traceable QA/QC and equipment-data workflow from documents to validated outputs",
    constraints: [
      "Inputs were document-heavy, inconsistent, and hard to audit manually.",
      "Outputs needed to preserve traceability and reviewability.",
      "The solution had to support validation, not just extraction.",
    ],
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
    proof: ["validation summary outputs", "master index", "coverage map", "QA approval flow"],
    evidence: ["Preview uses sanitized values from generated QA/QC summary and validation output files.", "Private source filenames were removed from the public asset."],
    proves: [
      "Brings industrial engineering judgment into data automation work.",
      "Builds reviewable pipelines for high-friction document workflows.",
      "Improves operational trust without inventing fake precision.",
    ],
    metrics: ["1,594 records", "98 systems", "13,351 checks"],
    sampleImage: "/work-samples/qaqc-index.svg",
    sampleAlt: "Sanitized QA/QC master index preview based on generated validation outputs.",
    workflow: ["document intake", "master index", "coverage checks", "QA summary"],
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
