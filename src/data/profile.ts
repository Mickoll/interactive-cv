import {
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  FileCheck2,
  Globe2,
  LineChart,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProfileLink = {
  label: string;
  href: string;
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
  facts: string[];
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
    "Industrial engineer with Amazon operations leadership, remote SaaS experience, and hands-on projects in reports, dashboards, pricing data, QA/QC, and automation.",
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
    { label: "Work setup", value: "Spain-based, remote, comfortable with customers and internal teams" },
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
    detail: "pricing and revenue tools in SaaS",
    icon: LineChart,
  },
  {
    label: "Automation",
    value: "4",
    detail: "featured data and automation projects",
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
    verb: "Run the work first",
    input: "field visits, service queues, QA gaps",
    system: "owners, status, next actions",
    items: ["field operations", "KPI follow-up", "QA/QC", "handoffs"],
    output: "Clear priorities and fewer loose ends.",
    usedIn: ["SolarTrack", "Amazon", "report automation"],
  },
  {
    name: "Analyze",
    verb: "Make the numbers useful",
    input: "pricing data, exports, market pages",
    system: "SQL/Python checks and dashboards",
    items: ["SQL", "pricing analysis", "market research", "dashboards"],
    output: "Cleaner context for pricing, QA, and planning.",
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
    verb: "Build the screen people need",
    input: "user friction and process requirements",
    system: "React/Next/FastAPI interfaces",
    items: ["React", "Next.js", "TypeScript", "FastAPI"],
    output: "Small web tools that people can actually operate.",
    usedIn: ["SolarTrack", "report builder", "portfolio"],
  },
  {
    name: "Communicate",
    verb: "Explain clearly",
    input: "users, product behavior, business context",
    system: "clear follow-up and plain technical translation",
    items: ["English C2", "Spanish native", "Portuguese C1", "customer follow-up"],
    output: "Less confusion between users, business needs, and technical work.",
    usedIn: ["SaaS roles", "implementation", "remote teams"],
  },
];

export const workflowStages = [
  {
    badge: "Files",
    label: "Source material",
    detail: "PDFs, sheets, exports, market pages",
  },
  {
    badge: "Rules",
    label: "Business rules",
    detail: "rules, status, ownership, validation",
  },
  {
    badge: "Data",
    label: "Clean records",
    detail: "tables, records, catalogs, checks",
  },
  {
    badge: "Reports",
    label: "Finished work",
    detail: "dashboards, reports, documents, exports",
  },
  {
    badge: "Action",
    label: "Business decisions",
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
      "Worked remotely in SaaS roles at PerchPeek and PriceLabs, close to customers, pricing, revenue management, market research, product behavior, and support follow-up.",
    signals: ["remote SaaS", "pricing", "market research", "product operations"],
  },
  {
    period: "2025-present",
    label: "Independent automation",
    title: "Independent operations and data automation projects",
    summary:
      "Built tools for inspection reporting, solar project organization, real-estate pricing intelligence, QA/QC traceability, equipment extraction, dashboards, and document automation.",
    signals: ["Python", "SQL", "React", "FastAPI", "Next.js", "PostgreSQL"],
  },
];

export const professionalExperience: ProfessionalExperience[] = [
  {
    period: "July 2025 - Present",
    organization: "Independent Operations & Data Automation Projects",
    role: "Remote data, automation, and web tools builder",
    context: "Spain-based independent project work for real business processes.",
    bullets: [
      "Built tools for inspection reporting, solar project organization, real-estate pricing intelligence, QA/QC traceability, equipment-data extraction, dashboards, and document automation.",
      "Worked across React/TypeScript, Next.js, FastAPI, Python, SQL/PostgreSQL, SQLite, PDF/OCR, DOCX generation, and spreadsheet automation.",
      "Focused on tools that reduce manual checking, keep records clear, and make reporting easier to repeat.",
    ],
  },
  {
    period: "June 2023 - June 2025",
    organization: "PriceLabs",
    role: "Remote SaaS pricing, revenue, and product operations",
    context: "Revenue-management SaaS for short-term rental pricing.",
    bullets: [
      "Worked with pricing analysis, market research, product behavior investigation, customer-facing product questions, and revenue-management processes.",
      "Helped turn pricing/product issues into clearer follow-up for customers and internal teams.",
      "Built domain experience in SaaS, hospitality revenue management, dashboards, pricing logic, and remote team work.",
    ],
  },
  {
    period: "2021 - 2023",
    organization: "PerchPeek",
    role: "Remote SaaS customer and product operations",
    context: "Relocation-technology environment with customer-facing operations.",
    bullets: [
      "Supported remote SaaS operations through customer communication, follow-up, and product troubleshooting.",
      "Built stronger judgment around implementation gaps, user friction, and the handoff between business process and product behavior.",
    ],
  },
  {
    period: "May 2021 - January 2023",
    organization: "Padme Yoga",
    role: "Manager and co-founder",
    context: "Local wellness business with operations, scheduling, commercial follow-up, and team coordination.",
    bullets: [
      "Managed day-to-day operations, scheduling, customer communication, revenue initiatives, and team coordination.",
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
      "Managed accounts, planning, marketing, daily operations, data analysis, and customer communication.",
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
    eyebrow: "Inspection reports",
    summary:
      "I built a local report builder for inspection projects: photos, PDFs, annotations, issue catalogs, OCR, and DOCX generation in one place.",
    input: "photos, PDFs, certificates, issue lists, project notes",
    system: "local React/FastAPI app with project storage, review states, OCR, and DOCX generation",
    problem:
      "Inspection reports can turn into a pile of folders, photos, Word edits, issue lists, and certificates. The hard part is keeping every finding traceable from source material to final report.",
    role: "Full-stack builder",
    output: "Inspection projects can be reviewed, cataloged, and exported as DOCX reports",
    constraints: [
      "Needed to preserve reliability of an existing document-heavy process.",
      "Had to keep evidence, annotations, issue catalogs, and report generation traceable.",
      "Had to work locally without forcing field material into a fragile cloud setup.",
    ],
    built: [
      "React and TypeScript interface for projects, front matter, assets, annotations, classifications, and generation settings.",
      "FastAPI backend with local-first project storage, uploaded assets, processed images, catalog backups, and generated reports.",
      "DOCX generation, OCR support, image handling, catalog management, map/geocoding support, and downloadable outputs.",
    ],
    stack: ["React", "TypeScript", "Vite", "FastAPI", "Python", "Pydantic", "OCR", "DOCX"],
    value: [
      "Reduced repeated report formatting work.",
      "Improved consistency between inspection evidence and report output.",
      "Moved a document-heavy process toward a browser-based internal tool.",
    ],
    facts: ["real local app capture", "API routes for projects/assets/catalogs/reports", "DOCX report generation"],
    evidence: ["Captured from local Vite/FastAPI app after creating a sanitized demo project.", "Other visible project names were masked and replaced with demo labels."],
    proves: [
      "Understands the document work before designing the screen.",
      "Connects file handling, APIs, review states, and document automation.",
      "Builds internal tools with enough structure to outgrow one-off scripts.",
    ],
    metrics: ["DOCX export", "OCR", "asset review"],
    sampleImage: "/work-samples/report-builder-capture.png",
    sampleAlt: "Anonymized capture of the local inspection report builder app using a demo project.",
    workflow: ["create project", "add photos", "classify issues", "export DOCX"],
    icon: FileCheck2,
    accent: "amber",
  },
  {
    slug: "solartrack-workflow-pwa",
    title: "SolarTrack Workflow PWA",
    shortTitle: "SolarTrack PWA",
    eyebrow: "Deployed organizer",
    summary:
      "A deployed Next.js PWA for solar-project visits: calendars, advisor assignments, report status, contacts, maps, imports, and follow-up.",
    input: "visit schedules, advisor assignments, report status, contacts, imports, expenses",
    system: "Next.js PWA with dashboards, calendar, maps, records, filters, imports, auth, and persistence checks",
    problem:
      "Solar visits create a lot of small follow-up: advisor assignments, pending reports, contacts, project status, expenses, and map context. I wanted one place to see what was open and what needed action.",
    role: "Product-minded builder",
    output: "Deployed PWA for visits, reports, contacts, maps, imports, and operational follow-up",
    constraints: [
      "Needed to serve daily operational use, not just look good in a demo.",
      "Had to support several views of the same work: calendar, projects, reports, contacts, maps, and expenses.",
      "Had to handle imports and editable records while remaining deployable on Vercel.",
    ],
    built: [
      "Next.js 16 and TypeScript PWA with dashboard KPIs, calendar views, project tables, contact directory, maps, expenses, reports, and settings.",
      "CSV/Excel import, editable visit details, filters by year/month/advisor/client/status, and visual report progress.",
      "Authentication, Neon/PostgreSQL, Prisma, Vercel deployment, and smoke/persistence QA scripts in the existing product app.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Prisma", "Neon", "PWA", "Vercel"],
    value: [
      "Shows product thinking through an organizer designed for daily use.",
      "Demonstrates dashboard design, data import, deployment, and attention to small operational details.",
      "Gives recruiters a live example for implementation and product operations roles.",
    ],
    facts: ["component-derived product preview", "PWA", "CSV/Excel import", "dashboard filters", "QA scripts"],
    evidence: ["Preview built from the actual SolarTrack dashboard/sidebar/report components.", "Raw app screenshots were not used because the local store contains private operational records."],
    proves: [
      "Creates product structure around real field work.",
      "Translates field operations into navigation, records, filters, and status states.",
      "Ships and verifies deployed Next.js applications.",
    ],
    metrics: ["deployed", "PWA", "multi-view"],
    sampleImage: "/work-samples/solartrack-dashboard.svg",
    sampleAlt: "Anonymized SolarTrack dashboard preview based on the local project organizer app.",
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
      "A pricing-intelligence MVP for real-estate listings: scraping, ETL, PostGIS storage, deduplication, confidence checks, dashboards, and reports.",
    input: "public listings, source snapshots, zone names, prices, geography, freshness checks",
    system: "multi-source ingestion, PostgreSQL/PostGIS model, deduplication, confidence scoring, reports",
    problem:
      "Public listing data is inconsistent, duplicated, geographically uneven, and affected by currency volatility. The MVP separates what was captured from what is safe to use in market analysis.",
    role: "Data product and pipeline designer",
    output: "Market pricing context with geospatial storage, dashboards, and daily reports",
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
      "Turned fragmented public listings into pricing context that can be compared by area and property type.",
      "Separated raw observations from publishable metrics for more trustworthy analysis.",
      "Demonstrated data engineering, analytics, product thinking, and market-domain reasoning.",
    ],
    facts: ["daily report outputs", "multi-source ingestion", "geospatial model", "freshness metrics", "report generation"],
    evidence: ["Preview uses sanitized metrics from generated daily market report files.", "Exact zones and source-specific names are generalized in the public asset."],
    proves: [
      "Thinks like a data product owner, not only a scraper implementer.",
      "Designs around data trust, source quality, and real market questions.",
      "Connects market logic, databases, dashboards, and reports.",
    ],
    metrics: ["ETL", "PostGIS", "market reports"],
    sampleImage: "/work-samples/pricing-intelligence.svg",
    sampleAlt: "Anonymized pricing intelligence dashboard preview based on the local real-estate MVP.",
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
      "Automation for industrial QA/QC records: Excel registers, PDF dossiers, tolerance checks, equipment lists, validation summaries, and traceable exports.",
    input: "Excel registers, PDF document sets, system lists, weak references, anomalies",
    system: "master index, closed catalogs, coverage maps, validation summaries, reviewable exports",
    problem:
      "Industrial documentation often lives across inconsistent spreadsheets, large PDF sets, repeated references, and manual checks. That makes dossier status and traceability hard to trust.",
    role: "Industrial data automation implementer",
    output: "Traceable QA/QC and equipment-data records from documents to validated exports",
    constraints: [
      "Inputs were document-heavy, inconsistent, and hard to audit manually.",
      "Outputs needed to preserve traceability and reviewability.",
      "The solution had to support validation, not just extraction.",
    ],
    built: [
      "Master document index generation from Excel and PDF sources.",
      "Closed catalogs, normalization rules, coverage maps, anomaly reports, validation summaries, and final Excel deliverables.",
      "Equipment data extraction with indexed PDFs, SQLite databases, staged extraction, QA approval scripts, and dashboard review.",
    ],
    stack: ["Python", "Excel", "PDF processing", "SQLite", "Pandas", "validation scripts", "document indexing"],
    value: [
      "Reduced spreadsheet reconciliation and manual document checking.",
      "Improved traceability from source documents to QA/QC deliverables.",
      "Demonstrated fit for implementation, operations analysis, industrial data, and technical product roles.",
    ],
    facts: ["validation summary outputs", "master index", "coverage map", "QA approval flow"],
    evidence: ["Preview uses sanitized values from generated QA/QC summary and validation output files.", "Private source filenames were removed from the public asset."],
    proves: [
      "Brings industrial engineering judgment into data automation work.",
      "Builds reviewable pipelines for high-friction document work.",
      "Improves operational trust without inventing fake precision.",
    ],
    metrics: ["1,594 records", "98 systems", "13,351 checks"],
    sampleImage: "/work-samples/qaqc-index.svg",
    sampleAlt: "Anonymized QA/QC master index preview based on generated validation outputs.",
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
