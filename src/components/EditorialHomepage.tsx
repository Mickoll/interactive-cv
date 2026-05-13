"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Download,
  FileText,
  Globe2,
  Grid2X2,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Target,
  Timer,
  Wrench,
} from "lucide-react";
import { getLocalizedCaseStudies, getLocalizedProfile } from "@/data/localized";
import { useLanguage } from "@/components/LanguageProvider";
import type { CaseStudy } from "@/data/profile";

type EditorialCopy = {
  nav: {
    home: string;
    projects: string;
    resume: string;
    downloadCv: string;
    email: string;
    linkedIn: string;
    subtitle: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    downloadCv: string;
    viewCaseStudies: string;
    emailMe: string;
    linkedIn: string;
    location: string;
    visualLabel: string;
    publicLabel: string;
  };
  proof: Array<{ title: string; description: string; accent: string; icon: typeof BriefcaseBusiness }>;
  snapshot: {
    kicker: string;
    title: string;
  };
  projects: {
    kicker: string;
    title: string;
    problem: string;
    built: string;
    value: string;
    roleRelevance: string;
    stack: string;
    open: string;
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
  footer: {
    updated: string;
    rights: string;
  };
};

const copy: Record<"en" | "es", EditorialCopy> = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      resume: "Resume",
      downloadCv: "Download CV",
      email: "Email",
      linkedIn: "LinkedIn",
      subtitle: "SaaS Implementation & Operations Automation",
    },
    hero: {
      eyebrow: "SaaS Implementation & Operations Automation Specialist",
      headline: "I help SaaS and operations teams implement better workflows, reporting, and internal tools.",
      subheadline:
        "Industrial Engineer with Amazon operations leadership, remote SaaS product experience, and hands-on automation projects across reporting, pricing, QA/QC, dashboards, and document workflows.",
      downloadCv: "Download ATS CV",
      viewCaseStudies: "View case studies",
      emailMe: "Email me",
      linkedIn: "LinkedIn",
      location: "Based in Spain - open to remote EU, UK, and global roles",
      visualLabel: "Live work sample",
      publicLabel: "public",
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
        description: "Remote work across pricing, product questions, support follow-up, and customer operations.",
        accent: "text-cyan-200",
        icon: Cloud,
      },
      {
        title: "Automation builder",
        description: "Built tools for reporting, tracking, pricing context, QA/QC, and document-heavy work.",
        accent: "text-emerald-300",
        icon: Wrench,
      },
      {
        title: "Languages & remote",
        description: "Spanish native, English C2, Portuguese C1. Comfortable with distributed teams.",
        accent: "text-amber-300",
        icon: Globe2,
      },
    ],
    snapshot: {
      kicker: "Recruiter snapshot",
      title: "Role fit, location, languages, and evidence in one scan.",
    },
    projects: {
      kicker: "Featured case studies",
      title: "Four projects that show the work behind the positioning.",
      problem: "Problem",
      built: "What I built",
      value: "Business value",
      roleRelevance: "Role relevance",
      stack: "Stack",
      open: "Open case study",
    },
    career: {
      title: "Career route",
      items: [
        { label: "Industrial engineer", description: "Process, data, and production foundation" },
        { label: "Amazon operations leadership", description: "People, performance, quality, and daily execution" },
        { label: "Remote SaaS experience", description: "Product questions, pricing, customer follow-up, and distributed teams" },
        { label: "Independent automation projects", description: "Tools for reporting, tracking, pricing, QA/QC, and documents" },
      ],
    },
    strengths: {
      title: "Core strengths",
      fitLine:
        "Best fit: implementation, solutions, product operations, technical product, RevOps/pricing, and operations-heavy BI/data roles.",
      items: [
        { title: "Implementation judgment", description: "Map real operating steps, then shape the process or tool around them.", icon: Timer },
        { title: "Data to decisions", description: "Clean records, compare options, and turn reporting into action.", icon: ShieldCheck },
        { title: "Product sense", description: "Understand user friction and translate it into useful product behavior.", icon: Target },
        { title: "Builder mindset", description: "Automate repetitive work and ship lightweight tools that people can actually use.", icon: Wrench },
      ],
    },
    footer: {
      updated: "Portfolio updated May 2026",
      rights: "Public samples are sanitized and use demo labels where needed.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      resume: "CV",
      downloadCv: "Descargar CV",
      email: "Email",
      linkedIn: "LinkedIn",
      subtitle: "Implementación SaaS y automatización de operaciones",
    },
    hero: {
      eyebrow: "Especialista en implementación SaaS y automatización de operaciones",
      headline: "Ayudo a equipos SaaS y de operaciones a implementar mejores procesos, reportes y herramientas internas.",
      subheadline:
        "Ingeniero industrial con liderazgo operativo en Amazon, experiencia remota en producto SaaS y proyectos de automatización en reportes, pricing, QA/QC, paneles y procesos documentales.",
      downloadCv: "Descargar CV ATS",
      viewCaseStudies: "Ver casos",
      emailMe: "Email",
      linkedIn: "LinkedIn",
      location: "Basado en España - abierto a roles remotos en UE, UK y equipos globales",
      visualLabel: "Muestra de trabajo",
      publicLabel: "pública",
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
        description: "Trabajo remoto en pricing, dudas de producto, seguimiento de soporte y operaciones de cliente.",
        accent: "text-cyan-200",
        icon: Cloud,
      },
      {
        title: "Automatización práctica",
        description: "Herramientas para reportes, tracking, contexto de precios, QA/QC y trabajo documental.",
        accent: "text-emerald-300",
        icon: Wrench,
      },
      {
        title: "Idiomas y remoto",
        description: "Español nativo, inglés C2, portugués C1. Cómodo con equipos distribuidos.",
        accent: "text-amber-300",
        icon: Globe2,
      },
    ],
    snapshot: {
      kicker: "Resumen para reclutadores",
      title: "Encaje, ubicación, idiomas y evidencia en una lectura rápida.",
    },
    projects: {
      kicker: "Casos destacados",
      title: "Cuatro proyectos que muestran el trabajo detrás del posicionamiento.",
      problem: "Problema",
      built: "Qué construí",
      value: "Valor de negocio",
      roleRelevance: "Relevancia para roles",
      stack: "Stack",
      open: "Abrir caso",
    },
    career: {
      title: "Ruta profesional",
      items: [
        { label: "Ingeniero industrial", description: "Base de procesos, datos y producción" },
        { label: "Liderazgo operativo en Amazon", description: "Personas, rendimiento, calidad y ejecución diaria" },
        { label: "Experiencia SaaS remota", description: "Producto, pricing, seguimiento a clientes y equipos distribuidos" },
        { label: "Proyectos independientes", description: "Herramientas para reportes, tracking, pricing, QA/QC y documentos" },
      ],
    },
    strengths: {
      title: "Fortalezas principales",
      fitLine:
        "Mejor encaje: implementación, soluciones, operaciones de producto, producto técnico, RevOps/pricing y BI/data con foco operativo.",
      items: [
        { title: "Criterio de implementación", description: "Mapeo cómo ocurre el trabajo y adapto el proceso o la herramienta a esa realidad.", icon: Timer },
        { title: "Datos para decidir", description: "Ordeno registros, comparo opciones y convierto reportes en acción.", icon: ShieldCheck },
        { title: "Criterio de producto", description: "Entiendo la fricción de usuario y la traduzco en comportamiento útil del producto.", icon: Target },
        { title: "Mentalidad builder", description: "Automatizo trabajo repetido y lanzo herramientas ligeras que la gente puede usar.", icon: Wrench },
      ],
    },
    footer: {
      updated: "Portfolio actualizado en mayo de 2026",
      rights: "Las muestras públicas están anonimizadas y usan etiquetas demo cuando hace falta.",
    },
  },
};

const projectOrder = [
  "inspection-report-automation",
  "solartrack-workflow-pwa",
  "industrial-qaqc-data-automation",
  "real-estate-pricing-intelligence",
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
        <TopNavigation copy={t} profile={profile} localizedHref={localizedHref} />
        <HeroControlRoom copy={t} profile={profile} />
        <ProofStrip items={t.proof} />
        <RecruiterSnapshot copy={t} profile={profile} />
        <FeaturedProjects
          copy={t}
          caseStudies={orderedProjects}
          localizedHref={localizedHref}
        />
        <CareerAndStrengths copy={t} />
        <SiteFooter copy={t} profile={profile} />
      </div>
    </main>
  );
}

function TopNavigation({
  copy,
  profile,
  localizedHref,
}: {
  copy: EditorialCopy;
  profile: ReturnType<typeof getLocalizedProfile>;
  localizedHref: (href: string) => string;
}) {
  const navItems = [
    { label: copy.nav.home, href: localizedHref("/") },
    { label: copy.nav.projects, href: "#projects" },
    { label: copy.nav.resume, href: localizedHref("/resume") },
  ];

  return (
    <header
      className="flex min-h-20 flex-col justify-between gap-4 border-b border-[rgba(13,24,40,0.10)] px-5 py-4 md:flex-row md:items-center md:px-10 lg:px-16"
      role="banner"
    >
      <a className="min-w-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#08A8C7]" href="#top">
        <p className="truncate text-lg font-extrabold tracking-[-0.015em] text-[#0D1828]">Mickoll Marin</p>
        <p className="truncate text-sm font-medium text-[#516070]">{copy.nav.subtitle}</p>
      </a>

      <nav className="flex w-full flex-wrap items-center gap-2 md:w-auto md:justify-end lg:gap-5" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            key={item.label}
            className="inline-flex min-h-[44px] items-center justify-center rounded-md px-2 text-sm font-bold text-[#0D1828] transition hover:text-[#08A8C7] focus:outline-none focus:ring-2 focus:ring-[#08A8C7]"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
        <a
          className="inline-flex min-h-[44px] items-center justify-center rounded-md px-1 text-sm font-bold text-[#0D1828] transition hover:text-[#08A8C7] focus:outline-none focus:ring-2 focus:ring-[#08A8C7]"
          download="Mickoll_Marin_CV_ATS.pdf"
          href={profile.cvUrl}
        >
          {copy.nav.downloadCv}
        </a>
        <a
          className="inline-flex min-h-[44px] items-center justify-center rounded-md px-1 text-sm font-bold text-[#0D1828] transition hover:text-[#08A8C7] focus:outline-none focus:ring-2 focus:ring-[#08A8C7]"
          href={`mailto:${profile.email}`}
        >
          {copy.nav.email}
        </a>
        <a
          className="inline-flex min-h-[44px] items-center justify-center rounded-md px-1 text-sm font-bold text-[#0D1828] transition hover:text-[#08A8C7] focus:outline-none focus:ring-2 focus:ring-[#08A8C7]"
          href={profile.linkedin}
          rel="noreferrer"
          target="_blank"
        >
          {copy.nav.linkedIn}
        </a>
      </nav>
    </header>
  );
}

function HeroControlRoom({
  copy,
  profile,
}: {
  copy: EditorialCopy;
  profile: ReturnType<typeof getLocalizedProfile>;
}) {
  return (
    <section
      className="relative overflow-hidden bg-[#071526] px-5 py-10 text-white md:px-10 md:py-14 lg:px-16 lg:py-16"
      id="top"
    >
      <div className="absolute inset-0 opacity-75" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 620" preserveAspectRatio="none">
          <path d="M710 410 C820 250 955 230 1090 150" fill="none" stroke="rgba(104,231,242,0.22)" strokeWidth="2" />
          <path d="M650 205 C790 320 920 365 1120 330" fill="none" stroke="rgba(245,166,35,0.20)" strokeWidth="2" />
          <path d="M790 470 C860 420 960 445 1065 515" fill="none" stroke="rgba(20,184,132,0.18)" strokeWidth="2" />
          <circle cx="900" cy="300" r="86" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <circle cx="900" cy="300" r="9" fill="#68E7F2" opacity="0.85" />
          <path d="M900 208 L900 392 M808 300 L992 300" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="max-w-3xl text-xs font-extrabold uppercase tracking-[0.08em] text-[#F5A623]">
            {copy.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-[820px] text-[36px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#F7FBFF] md:text-[54px] md:leading-[1.05] md:tracking-[-0.04em]">
            {copy.hero.headline}
          </h1>
          <p className="mt-5 max-w-[650px] text-[17px] leading-7 text-[#D8E3EF]">
            {copy.hero.subheadline}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:flex xl:flex-wrap">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-[#08A8C7] px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-cyan-300/35"
              download="Mickoll_Marin_CV_ATS.pdf"
              href={profile.cvUrl}
            >
              <Download className="h-4 w-4" />
              {copy.hero.downloadCv}
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-cyan-200/55 px-6 text-sm font-extrabold text-[#F7FBFF] transition hover:-translate-y-0.5 hover:border-cyan-100 focus:outline-none focus:ring-4 focus:ring-cyan-300/35"
              href="#projects"
            >
              <Grid2X2 className="h-4 w-4" />
              {copy.hero.viewCaseStudies}
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-6 text-sm font-extrabold text-[#F7FBFF] transition hover:-translate-y-0.5 hover:border-amber-200 focus:outline-none focus:ring-4 focus:ring-cyan-300/35"
              href={`mailto:${profile.email}`}
            >
              <Mail className="h-4 w-4" />
              {copy.hero.emailMe}
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-6 text-sm font-extrabold text-[#F7FBFF] transition hover:-translate-y-0.5 hover:border-amber-200 focus:outline-none focus:ring-4 focus:ring-cyan-300/35"
              href={profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin className="h-4 w-4" />
              {copy.hero.linkedIn}
            </a>
          </div>
        </div>

        <div className="relative rounded-[18px] border border-white/12 bg-[#0B1B2D]/80 p-4 shadow-[0_24px_80px_rgba(5,12,22,0.28)] md:p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-cyan-100">{copy.hero.visualLabel}</p>
            <span className="rounded-full bg-emerald-300/12 px-3 py-1 text-xs font-bold text-emerald-200">{copy.hero.publicLabel}</span>
          </div>
          <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-[14px] border border-white/10 bg-slate-950">
            <Image
              alt="Sanitized SolarTrack dashboard preview showing operations status, visits, reports, and project follow-up."
              className="h-full w-full object-cover"
              height={760}
              priority
              src="/work-samples/solartrack-dashboard.svg"
              width={1200}
            />
          </div>
          <div className="mt-4 inline-flex items-center justify-end gap-2 text-sm font-semibold text-[#D8E3EF]">
            <MapPin className="h-4 w-4 text-[#F5A623]" />
            {copy.hero.location}
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

function RecruiterSnapshot({
  copy,
  profile,
}: {
  copy: EditorialCopy;
  profile: ReturnType<typeof getLocalizedProfile>;
}) {
  return (
    <section className="border-b border-[rgba(13,24,40,0.10)] bg-[#F9F4EC] px-5 py-9 md:px-10 lg:px-16">
      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#A16207]">{copy.snapshot.kicker}</p>
          <h2 className="mt-3 max-w-xl text-2xl font-extrabold leading-8 tracking-[-0.02em] text-[#0D1828]">
            {copy.snapshot.title}
          </h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {profile.recruiterSnapshot.map((item) => (
            <article key={item.label} className="rounded-xl border border-[rgba(13,24,40,0.10)] bg-[#FFFCF7] p-4 shadow-[0_10px_28px_rgba(13,18,32,0.06)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#087D92]">{item.label}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#516070]">{item.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects({
  copy,
  caseStudies,
  localizedHref,
}: {
  copy: EditorialCopy;
  caseStudies: CaseStudy[];
  localizedHref: (href: string) => string;
}) {
  return (
    <section className="border-b border-[rgba(13,24,40,0.10)] bg-[#FFFCF7] px-5 py-10 md:px-10 md:py-12 lg:px-16" id="projects">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#A16207]">{copy.projects.kicker}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#0D1828] md:text-[32px]">
            {copy.projects.title}
          </h2>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {caseStudies.map((caseStudy) => (
          <ProjectCard
            copy={copy}
            caseStudy={caseStudy}
            href={localizedHref(`/case-studies/${caseStudy.slug}`)}
            key={caseStudy.slug}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  copy,
  caseStudy,
  href,
}: {
  copy: EditorialCopy;
  caseStudy: CaseStudy;
  href: string;
}) {
  return (
    <Link
      aria-label={`${copy.projects.open}: ${caseStudy.title}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-[rgba(13,24,40,0.10)] bg-[#FFFCF7] shadow-[0_12px_32px_rgba(13,18,32,0.08)] transition hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_18px_42px_rgba(13,18,32,0.12)] focus:outline-none focus:ring-4 focus:ring-cyan-500/20"
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
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-extrabold leading-6 tracking-[-0.015em] text-[#0D1828]">{caseStudy.title}</h3>
          <ArrowUpRight className="mt-1 h-4 w-4 flex-none text-[#516070] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <dl className="mt-4 space-y-3 text-sm leading-6">
          <div>
            <dt className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#A16207]">{copy.projects.problem}</dt>
            <dd className="mt-1 text-[#516070]">{caseStudy.cardProblem}</dd>
          </div>
          <div>
            <dt className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#087D92]">{copy.projects.built}</dt>
            <dd className="mt-1 text-[#516070]">{caseStudy.cardBuilt}</dd>
          </div>
          <div>
            <dt className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#047857]">{copy.projects.value}</dt>
            <dd className="mt-1 font-semibold text-[#0D1828]">{caseStudy.cardValue}</dd>
          </div>
          <div>
            <dt className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#0D1828]">{copy.projects.roleRelevance}</dt>
            <dd className="mt-1 font-semibold text-[#516070]">{caseStudy.cardRoleRelevance}</dd>
          </div>
        </dl>
        <ul aria-label={`${copy.projects.stack}: ${caseStudy.stack.slice(0, 4).join(", ")}`} className="mt-5 flex flex-wrap gap-2">
          {caseStudy.stack.slice(0, 4).map((item) => (
            <li key={item} className="rounded-md border border-[rgba(13,24,40,0.10)] bg-[#F9F4EC] px-2.5 py-1 text-xs font-bold text-[#516070]">
              {item}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-extrabold text-[#08A8C7]">
          {copy.projects.open}
          <ArrowUpRight className="h-4 w-4" />
        </span>
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

function SiteFooter({
  copy,
  profile,
}: {
  copy: EditorialCopy;
  profile: ReturnType<typeof getLocalizedProfile>;
}) {
  return (
    <footer className="border-t border-white/12 bg-[#071526] px-5 py-8 text-white md:px-10 lg:px-16" role="contentinfo">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-lg font-extrabold">Mickoll Marin</p>
          <p className="mt-1 text-sm font-semibold text-[#B8C7D8]">{copy.footer.updated}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#B8C7D8]">{copy.footer.rights}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/18 px-4 text-sm font-bold text-white hover:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" href={`mailto:${profile.email}`}>
            <Mail className="h-4 w-4" />
            {copy.nav.email}
          </a>
          <a className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/18 px-4 text-sm font-bold text-white hover:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" href={profile.linkedin} rel="noreferrer" target="_blank">
            <Linkedin className="h-4 w-4" />
            {copy.nav.linkedIn}
          </a>
          <a className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-4 text-sm font-extrabold text-[#071526] focus:outline-none focus:ring-2 focus:ring-cyan-300" download="Mickoll_Marin_CV_ATS.pdf" href={profile.cvUrl}>
            <FileText className="h-4 w-4" />
            {copy.nav.downloadCv}
          </a>
        </div>
      </div>
    </footer>
  );
}
