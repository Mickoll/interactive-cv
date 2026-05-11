"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  FileText,
  Globe2,
  Grid2X2,
  Mail,
  MapPin,
  ShieldCheck,
  Target,
  Timer,
  Wrench,
} from "lucide-react";
import {
  getLocalizedCaseStudies,
  getLocalizedProfile,
} from "@/data/localized";
import { useLanguage } from "@/components/LanguageProvider";
import type { CaseStudy } from "@/data/profile";

type EditorialCopy = {
  nav: {
    about: string;
    projects: string;
    experience: string;
    cv: string;
    contact: string;
    connect: string;
    industrialEngineer: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    highlight: string;
    subheadline: string;
    scanCv: string;
    exploreProjects: string;
    location: string;
  };
  proof: Array<{ title: string; description: string; accent: string; icon: typeof BriefcaseBusiness }>;
  projects: {
    kicker: string;
    title: string;
    action: string;
    cards: Record<string, { title: string; tag: string; description: string; stack: string[] }>;
  };
  career: {
    title: string;
    items: Array<{ label: string; description: string }>;
  };
  strengths: {
    title: string;
    fitLine: string;
    items: Array<{ title: string; description: string; icon: typeof Timer }>;
  };
};

const copy: Record<"en" | "es", EditorialCopy> = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      cv: "CV",
      contact: "Contact",
      connect: "Let's connect",
      industrialEngineer: "Industrial Engineer",
    },
    hero: {
      eyebrow: "Industrial engineer · Amazon ops leadership · SaaS & automation builder",
      headline: "I build tools that make operations easier to run.",
      highlight: "easier to run",
      subheadline:
        "I turn real operational problems into simple tools for reporting, tracking, pricing, and follow-up.",
      scanCv: "Scan CV",
      exploreProjects: "Explore projects",
      location: "Based in Spain · Open to remote opportunities",
    },
    proof: [
      {
        title: "Amazon operations leadership",
        description: "Led a 107-person team and worked close to daily execution, quality, and KPIs.",
        accent: "text-amber-300",
        icon: BriefcaseBusiness,
      },
      {
        title: "SaaS & product experience",
        description: "Worked with remote product, support, pricing, and data teams.",
        accent: "text-cyan-200",
        icon: Cloud,
      },
      {
        title: "Automation builder",
        description: "Built practical tools for reports, pricing context, QA/QC, and tracking.",
        accent: "text-emerald-300",
        icon: Wrench,
      },
      {
        title: "Languages & remote",
        description: "Spanish native, English C2, Portuguese C1, comfortable with distributed teams.",
        accent: "text-amber-300",
        icon: Globe2,
      },
    ],
    projects: {
      kicker: "Featured projects",
      title: "Product-style evidence from real operational friction.",
      action: "Open case",
      cards: {
        "solartrack-workflow-pwa": {
          title: "SolarTrack",
          tag: "PWA",
          description:
            "Field operations tracker for visits, report follow-up, contacts, maps, imports, and project visibility.",
          stack: ["Next.js", "PWA", "Reports"],
        },
        "inspection-report-automation": {
          title: "Report Builder",
          tag: "Automation",
          description:
            "Local report-building app for inspection notes, photos, issue catalogs, OCR, and DOCX outputs.",
          stack: ["FastAPI", "OCR", "DOCX"],
        },
        "real-estate-pricing-intelligence": {
          title: "Pricing Intelligence",
          tag: "Analytics",
          description:
            "Market and competitor pricing context from listings, attributes, geography, and freshness checks.",
          stack: ["Python", "PostGIS", "Reports"],
        },
        "industrial-qaqc-data-automation": {
          title: "QA/QC Automation",
          tag: "Internal tool",
          description:
            "Dossier, register, tolerance, equipment, and validation support for document-heavy QA/QC work.",
          stack: ["Excel", "PDF", "Validation"],
        },
      },
    },
    career: {
      title: "Career route",
      items: [
        { label: "Industrial engineer", description: "Process and data foundation" },
        { label: "Amazon operations leadership", description: "People, performance, and daily execution" },
        { label: "SaaS / product experience", description: "Remote teams, support, pricing, and product questions" },
        { label: "Automation builder", description: "Practical tools for real operational problems" },
      ],
    },
    strengths: {
      title: "Core strengths",
      fitLine: "Best fit: implementation, product operations, RevOps, BI/data, and technical product roles.",
      items: [
        { title: "Operational excellence", description: "Process design, KPIs, field work, and execution.", icon: Timer },
        { title: "Data to decisions", description: "Pricing, reporting, QA, and operational analysis.", icon: ShieldCheck },
        { title: "Product mindset", description: "User needs, prioritization, and useful delivery.", icon: Target },
        { title: "Builder mentality", description: "Automate, iterate, simplify, and ship.", icon: Wrench },
      ],
    },
  },
  es: {
    nav: {
      about: "Resumen",
      projects: "Proyectos",
      experience: "Experiencia",
      cv: "CV",
      contact: "Contacto",
      connect: "Contactar",
      industrialEngineer: "Ingeniero industrial",
    },
    hero: {
      eyebrow: "Ingeniero industrial · liderazgo operativo en Amazon · SaaS y automatización",
      headline: "Construyo herramientas que hacen las operaciones más fáciles.",
      highlight: "más fáciles",
      subheadline:
        "Convierto problemas operativos reales en herramientas sencillas para reportes, seguimiento, precios y coordinación.",
      scanCv: "Ver CV",
      exploreProjects: "Explorar proyectos",
      location: "Basado en España · Abierto a oportunidades remotas",
    },
    proof: [
      {
        title: "Liderazgo operativo en Amazon",
        description: "Lideré un equipo de 107 personas y trabajé cerca de ejecución diaria, calidad y KPIs.",
        accent: "text-amber-300",
        icon: BriefcaseBusiness,
      },
      {
        title: "Experiencia SaaS y producto",
        description: "Trabajé con equipos remotos de producto, soporte, precios y datos.",
        accent: "text-cyan-200",
        icon: Cloud,
      },
      {
        title: "Automatización práctica",
        description: "Construí herramientas para reportes, pricing, QA/QC y seguimiento operativo.",
        accent: "text-emerald-300",
        icon: Wrench,
      },
      {
        title: "Idiomas y trabajo remoto",
        description: "Español nativo, inglés C2, portugués C1 y experiencia con equipos distribuidos.",
        accent: "text-amber-300",
        icon: Globe2,
      },
    ],
    projects: {
      kicker: "Proyectos destacados",
      title: "Muestras de producto nacidas de fricción operativa real.",
      action: "Abrir caso",
      cards: {
        "solartrack-workflow-pwa": {
          title: "SolarTrack",
          tag: "PWA",
          description:
            "Tracker operativo para visitas, reportes pendientes, contactos, mapas, importaciones y visibilidad de proyectos.",
          stack: ["Next.js", "PWA", "Reportes"],
        },
        "inspection-report-automation": {
          title: "Report Builder",
          tag: "Automatización",
          description:
            "App local para notas de inspección, fotos, catálogos de incidencias, OCR y salidas DOCX.",
          stack: ["FastAPI", "OCR", "DOCX"],
        },
        "real-estate-pricing-intelligence": {
          title: "Pricing Intelligence",
          tag: "Análisis",
          description:
            "Contexto de precios de mercado a partir de listados, atributos, geografía y controles de frescura.",
          stack: ["Python", "PostGIS", "Reportes"],
        },
        "industrial-qaqc-data-automation": {
          title: "QA/QC Automation",
          tag: "Herramienta interna",
          description:
            "Soporte para dossiers, registros, tolerancias, equipos y validación en trabajo QA/QC documental.",
          stack: ["Excel", "PDF", "Validación"],
        },
      },
    },
    career: {
      title: "Ruta profesional",
      items: [
        { label: "Ingeniero industrial", description: "Base de procesos y datos" },
        { label: "Liderazgo operativo en Amazon", description: "Personas, rendimiento y ejecución diaria" },
        { label: "Experiencia SaaS / producto", description: "Equipos remotos, soporte, precios y preguntas de producto" },
        { label: "Builder de automatización", description: "Herramientas prácticas para problemas operativos reales" },
      ],
    },
    strengths: {
      title: "Fortalezas principales",
      fitLine: "Mejor encaje: implementación, operaciones de producto, RevOps, BI/data y roles técnicos de producto.",
      items: [
        { title: "Excelencia operativa", description: "Procesos, KPIs, trabajo de campo y ejecución.", icon: Timer },
        { title: "Datos para decidir", description: "Precios, reportes, QA y análisis operativo.", icon: ShieldCheck },
        { title: "Criterio de producto", description: "Necesidades de usuario, prioridad y entrega útil.", icon: Target },
        { title: "Mentalidad builder", description: "Automatizar, iterar, simplificar y lanzar.", icon: Wrench },
      ],
    },
  },
};

const projectOrder = [
  "solartrack-workflow-pwa",
  "inspection-report-automation",
  "real-estate-pricing-intelligence",
  "industrial-qaqc-data-automation",
];

export function EditorialHomepage() {
  const { locale, localizedHref } = useLanguage();
  const profile = getLocalizedProfile(locale);
  const caseStudies = getLocalizedCaseStudies(locale);
  const t = copy[locale];
  const orderedProjects = projectOrder
    .map((slug) => caseStudies.find((caseStudy) => caseStudy.slug === slug))
    .filter((caseStudy): caseStudy is CaseStudy => Boolean(caseStudy));

  return (
    <main className="min-h-screen bg-[#F6F1E8] px-3 py-4 text-[#0D1828] md:px-8 md:py-8 xl:px-12">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[18px] border border-[rgba(20,35,50,0.08)] bg-[#FFFCF7] shadow-[0_24px_80px_rgba(13,18,32,0.10)]">
        <TopNavigation copy={t} email={profile.email} localizedHref={localizedHref} />
        <HeroControlRoom copy={t} cvUrl={localizedHref("/resume")} />
        <ProofStrip items={t.proof} />
        <FeaturedProjects
          actionLabel={t.projects.action}
          cards={t.projects.cards}
          caseStudies={orderedProjects}
          kicker={t.projects.kicker}
          localizedHref={localizedHref}
          title={t.projects.title}
        />
        <CareerAndStrengths copy={t} />
      </div>
    </main>
  );
}

function TopNavigation({
  copy,
  email,
  localizedHref,
}: {
  copy: EditorialCopy;
  email: string;
  localizedHref: (href: string) => string;
}) {
  const navItems = [
    { label: copy.nav.about, href: "#cv-summary" },
    { label: copy.nav.projects, href: "#projects" },
    { label: copy.nav.experience, href: "#career" },
    { label: copy.nav.cv, href: localizedHref("/resume") },
  ];

  return (
    <header className="flex min-h-20 items-center justify-between gap-4 border-b border-[rgba(13,24,40,0.10)] px-5 py-4 md:px-10 lg:px-16">
      <a className="min-w-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#08A8C7]" href="#top">
        <p className="truncate text-lg font-extrabold tracking-[-0.015em] text-[#0D1828]">Mickoll Marin</p>
        <p className="truncate text-sm font-medium text-[#516070]">{copy.nav.industrialEngineer}</p>
      </a>

      <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            key={item.label}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md px-1 text-sm font-bold text-[#0D1828] transition hover:text-[#08A8C7] focus:outline-none focus:ring-2 focus:ring-[#08A8C7]"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <a
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-lg border border-amber-400/55 px-3 text-sm font-extrabold text-[#0D1828] transition hover:-translate-y-0.5 hover:border-amber-500 focus:outline-none focus:ring-2 focus:ring-[#08A8C7] md:px-4"
        href={`mailto:${email}`}
      >
        <Mail className="h-4 w-4 text-[#F5A623]" />
        <span className="hidden sm:inline">{copy.nav.connect}</span>
      </a>
    </header>
  );
}

function HeroControlRoom({ copy, cvUrl }: { copy: EditorialCopy; cvUrl: string }) {
  return (
    <section
      className="relative overflow-hidden bg-[#071526] px-5 py-10 text-white md:px-10 md:py-14 lg:px-16 lg:py-16"
      id="top"
    >
      <div className="absolute inset-0 opacity-75">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true" viewBox="0 0 1200 620" preserveAspectRatio="none">
          <path d="M710 410 C820 250 955 230 1090 150" fill="none" stroke="rgba(104,231,242,0.22)" strokeWidth="2" />
          <path d="M650 205 C790 320 920 365 1120 330" fill="none" stroke="rgba(245,166,35,0.20)" strokeWidth="2" />
          <path d="M790 470 C860 420 960 445 1065 515" fill="none" stroke="rgba(20,184,132,0.18)" strokeWidth="2" />
          <circle cx="900" cy="300" r="86" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <circle cx="900" cy="300" r="9" fill="#68E7F2" opacity="0.85" />
          <path d="M900 208 L900 392 M808 300 L992 300" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="max-w-3xl text-xs font-extrabold uppercase tracking-[0.08em] text-[#F5A623]">
            {copy.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-[700px] text-[38px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#F7FBFF] md:text-[56px] md:leading-[1.05] md:tracking-[-0.04em]">
            {copy.hero.headline.split(copy.hero.highlight)[0]}
            <span className="text-[#68E7F2]">{copy.hero.highlight}</span>
            {copy.hero.headline.split(copy.hero.highlight)[1]}
          </h1>
          <p className="mt-5 max-w-[560px] text-[17px] leading-7 text-[#D8E3EF]">
            {copy.hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-[#08A8C7] px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-cyan-300/35"
              href={cvUrl}
            >
              <FileText className="h-4 w-4" />
              {copy.hero.scanCv}
            </Link>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-cyan-200/55 px-6 text-sm font-extrabold text-[#F7FBFF] transition hover:-translate-y-0.5 hover:border-cyan-100 focus:outline-none focus:ring-4 focus:ring-cyan-300/35"
              href="#projects"
            >
              <Grid2X2 className="h-4 w-4" />
              {copy.hero.exploreProjects}
            </a>
          </div>
        </div>

        <div className="relative hidden min-h-[360px] rounded-[18px] border border-white/12 bg-[#0B1B2D]/80 p-5 shadow-[0_24px_80px_rgba(5,12,22,0.28)] lg:block">
          <div className="grid h-full grid-rows-[auto_1fr_auto] gap-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-cyan-100">Operations map</p>
              <span className="rounded-full bg-emerald-300/12 px-3 py-1 text-xs font-bold text-emerald-200">remote</span>
            </div>
            <div className="grid place-items-center">
              <div className="relative h-52 w-52 rounded-full border border-white/10">
                <div className="absolute inset-8 rounded-full border border-cyan-200/20" />
                <div className="absolute left-5 top-9 rounded-lg border border-cyan-200/25 bg-white/8 px-3 py-2 text-xs font-extrabold text-cyan-100">reports</div>
                <div className="absolute right-1 top-20 rounded-lg border border-amber-200/25 bg-white/8 px-3 py-2 text-xs font-extrabold text-amber-100">pricing</div>
                <div className="absolute bottom-7 left-4 rounded-lg border border-emerald-200/25 bg-white/8 px-3 py-2 text-xs font-extrabold text-emerald-100">tracking</div>
                <div className="absolute bottom-16 right-8 rounded-lg border border-white/20 bg-white/8 px-3 py-2 text-xs font-extrabold text-slate-100">QA/QC</div>
                <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#FFFCF7] text-center text-sm font-extrabold leading-4 text-[#071526] shadow-[0_18px_42px_rgba(104,231,242,0.16)]">
                  ops
                  <br />
                  tools
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-end gap-2 text-sm font-semibold text-[#D8E3EF]">
              <MapPin className="h-4 w-4 text-[#F5A623]" />
              {copy.hero.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofStrip({ items }: { items: EditorialCopy["proof"] }) {
  return (
    <section className="grid border-t border-white/12 bg-[#082037] text-white sm:grid-cols-2 lg:grid-cols-4" id="cv-summary">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article key={item.title} className="border-b border-white/10 px-5 py-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:min-h-[164px] lg:px-8">
            <Icon className={`h-5 w-5 ${item.accent}`} />
            <h2 className="mt-4 text-lg font-extrabold leading-6 text-[#F7FBFF]">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#B8C7D8]">{item.description}</p>
          </article>
        );
      })}
    </section>
  );
}

function FeaturedProjects({
  actionLabel,
  cards,
  caseStudies,
  kicker,
  localizedHref,
  title,
}: {
  actionLabel: string;
  cards: EditorialCopy["projects"]["cards"];
  caseStudies: CaseStudy[];
  kicker: string;
  localizedHref: (href: string) => string;
  title: string;
}) {
  return (
    <section className="border-b border-[rgba(13,24,40,0.10)] bg-[#FFFCF7] px-5 py-10 md:px-10 md:py-12 lg:px-16" id="projects">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#A16207]">{kicker}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#0D1828] md:text-[32px]">
            {title}
          </h2>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {caseStudies.map((caseStudy) => (
          <ProjectCard
            actionLabel={actionLabel}
            caseStudy={caseStudy}
            content={cards[caseStudy.slug]}
            href={localizedHref(`/case-studies/${caseStudy.slug}`)}
            key={caseStudy.slug}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  actionLabel,
  caseStudy,
  content,
  href,
}: {
  actionLabel: string;
  caseStudy: CaseStudy;
  content: EditorialCopy["projects"]["cards"][string];
  href: string;
}) {
  return (
    <Link
      aria-label={`${actionLabel}: ${content.title}`}
      className="group overflow-hidden rounded-xl border border-[rgba(13,24,40,0.10)] bg-[#FFFCF7] shadow-[0_12px_32px_rgba(13,18,32,0.08)] transition hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_18px_42px_rgba(13,18,32,0.12)] focus:outline-none focus:ring-4 focus:ring-cyan-500/20"
      href={href}
    >
      <div className="relative aspect-video overflow-hidden bg-[#F9F4EC]">
        <Image
          alt={caseStudy.sampleAlt}
          className="h-full w-full object-cover transition duration-200 group-hover:brightness-[1.04]"
          height={675}
          src={caseStudy.sampleImage}
          width={1200}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#E6F7FB] px-3 py-1 text-xs font-extrabold text-[#087D92]">{content.tag}</span>
          <ArrowUpRight className="h-4 w-4 text-[#516070] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <h3 className="mt-4 text-lg font-extrabold leading-6 tracking-[-0.015em] text-[#0D1828]">{content.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#516070]">{content.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {content.stack.map((item) => (
            <span key={item} className="rounded-md border border-[rgba(13,24,40,0.10)] bg-[#F9F4EC] px-2.5 py-1 text-xs font-bold text-[#516070]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function CareerAndStrengths({ copy }: { copy: EditorialCopy }) {
  return (
    <section className="grid gap-6 bg-[#F9F4EC] px-5 py-10 md:px-10 md:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-16" id="career">
      <article className="rounded-[14px] border border-[rgba(13,24,40,0.10)] bg-[#FFFCF7] p-6 shadow-[0_10px_28px_rgba(13,18,32,0.07)]">
        <h2 className="text-2xl font-extrabold leading-8 tracking-[-0.02em] text-[#0D1828]">{copy.career.title}</h2>
        <div className="mt-7 space-y-5">
          {copy.career.items.map((item, index) => (
            <div key={item.label} className="grid grid-cols-[24px_1fr] gap-4">
              <div className="flex flex-col items-center">
                <span className="grid h-3 w-3 rounded-full bg-[#14B884]" />
                {index < copy.career.items.length - 1 ? <span className="mt-2 h-full w-px min-h-10 bg-[#0B315A]/20" /> : null}
              </div>
              <div className="-mt-1 pb-1">
                <h3 className="text-base font-extrabold text-[#0D1828]">{item.label}</h3>
                <p className="mt-1 text-sm leading-6 text-[#516070]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-[14px] border border-[rgba(13,24,40,0.10)] bg-[#FFFCF7] p-6 shadow-[0_10px_28px_rgba(13,18,32,0.07)]">
        <h2 className="text-2xl font-extrabold leading-8 tracking-[-0.02em] text-[#0D1828]">{copy.strengths.title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {copy.strengths.items.map((item) => {
            const Icon = item.icon;
            return (
              <section key={item.title} className="rounded-xl border border-[rgba(13,24,40,0.10)] bg-[#FFFCF7] p-4">
                <Icon className="h-5 w-5 text-[#08A8C7]" />
                <h3 className="mt-3 text-base font-extrabold text-[#0D1828]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#516070]">{item.description}</p>
              </section>
            );
          })}
        </div>
        <div className="mt-5 rounded-xl border border-emerald-200 bg-[#E8F8F2] px-4 py-3 text-sm font-bold leading-6 text-[#047857]">
          <CheckCircle2 className="mr-2 inline h-4 w-4" />
          {copy.strengths.fitLine}
        </div>
      </article>
    </section>
  );
}
