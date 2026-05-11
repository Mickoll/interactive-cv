"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Download,
  FileText,
  Layers3,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  getLocalizedCaseStudies,
  getLocalizedCaseStudy,
  getLocalizedProfile,
} from "@/data/localized";
import { useLanguage } from "@/components/LanguageProvider";
import { accentFor, CaseStudyVisual } from "@/components/VisualSystem";

export function CaseStudyPageClient({ slug }: { slug: string }) {
  const { locale, ui, localizedHref } = useLanguage();
  const caseStudies = getLocalizedCaseStudies(locale);
  const caseStudy = getLocalizedCaseStudy(slug, locale);
  const profile = getLocalizedProfile(locale);

  if (!caseStudy) {
    return null;
  }

  const accent = accentFor(caseStudy.accent);
  const Icon = caseStudy.icon;
  const currentIndex = caseStudies.findIndex((item) => item.slug === caseStudy.slug);
  const previousCase = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const nextCase = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main className="min-h-screen bg-[#f4efe4] text-slate-950">
      <section className="no-print border-b border-white/10 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-3 px-5 py-5 md:px-8 lg:px-10">
          <Link className="inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300" href={localizedHref("/")}>
            <ArrowLeft className="h-4 w-4" />
            {ui.backToHome}
          </Link>
          <div className="flex flex-wrap gap-2">
            <Link className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/18 px-3 text-sm font-bold text-white transition hover:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300" href={localizedHref("/resume")}>
              <FileText className="h-4 w-4" />
              {ui.resume}
            </Link>
            <a className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/18 px-3 text-sm font-bold text-white transition hover:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300" download="Mickoll_Marin_CV_ATS.pdf" href={profile.cvUrl}>
              <Download className="h-4 w-4" />
              {ui.downloadCv}
            </a>
            <a className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/18 px-3 text-sm font-bold text-white transition hover:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              {ui.email}
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-slate-900 bg-slate-950 text-white">
        <div className="cockpit-grid absolute inset-0 opacity-90" />
        <div className="relative mx-auto grid max-w-[1320px] gap-8 px-5 py-12 md:px-8 lg:grid-cols-[0.84fr_1.16fr] lg:px-10 lg:py-16">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/14 bg-white/8 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-200">
              <Icon className={`h-4 w-4 ${accent.textDark}`} />
              {caseStudy.eyebrow}
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-tight md:text-6xl">
              {caseStudy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{caseStudy.recruiterSummary}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <HeroFact label={ui.myRole} value={caseStudy.role} />
              <HeroFact label={ui.resultLabel} value={caseStudy.outputs} />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {caseStudy.metrics.map((metric) => (
                <span key={metric} className="rounded-lg border border-white/12 bg-white/8 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-slate-100">
                  {metric}
                </span>
              ))}
            </div>
          </div>

          <div>
            <CaseStudyVisual caseStudy={caseStudy} dark />
            <p className="mt-3 text-sm leading-6 text-slate-400">{caseStudy.sampleAlt}</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <section className="module-card rounded-[22px] p-6">
              <div className="flex items-center gap-3">
                <div className={`grid h-11 w-11 place-items-center rounded-xl border ${accent.border} ${accent.bg}`}>
                  <ShieldCheck className={`h-5 w-5 ${accent.text}`} />
                </div>
                <div>
                  <p className="section-kicker text-slate-500">{ui.recruiterSummary}</p>
                  <h2 className="mt-1 text-2xl font-black text-slate-950">{ui.businessProblem}</h2>
                </div>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-600">{caseStudy.businessProblem}</p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="section-kicker text-slate-500">{ui.roleLabel}</p>
                <p className="mt-2 text-base font-bold leading-7 text-slate-800">{caseStudy.role}</p>
              </div>
            </section>

            <div className="grid gap-6">
              <DetailBlock title={ui.systemBuilt} icon={<Layers3 className={`h-5 w-5 ${accent.text}`} />} items={caseStudy.built} />

              <section className="module-card rounded-[22px] p-6">
                <h2 className="text-xl font-black text-slate-950">{ui.dataWorkflowInputs}</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <InfoPanel label={ui.inputsLabel} value={caseStudy.workflowInputs} />
                  <InfoPanel label={ui.systemBehavior} value={caseStudy.systemBehavior} />
                  <InfoPanel label={ui.outputs} value={caseStudy.outputs} />
                </div>
              </section>

              <DetailBlock title={ui.observableImpact} icon={<CheckCircle2 className={`h-5 w-5 ${accent.text}`} />} items={caseStudy.observableImpact} />
            </div>
          </div>

          <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.86fr]">
            <section className={`rounded-[22px] border ${accent.border} ${accent.bg} p-6`}>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/70 bg-white">
                  <Sparkles className={`h-5 w-5 ${accent.text}`} />
                </div>
                <h2 className="text-xl font-black text-slate-950">{ui.skillsProven}</h2>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {caseStudy.skillsProven.map((skill) => (
                  <span key={skill} className="rounded-lg border border-white/70 bg-white px-3 py-2 text-sm font-black text-slate-800 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-base font-black leading-7 text-slate-800">{caseStudy.hiringTakeaway}</p>
            </section>

            <section className="rounded-[22px] border border-slate-200 bg-[#f4efe4] p-6">
              <p className="section-kicker text-slate-500">{ui.stackEvidence}</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">{ui.toolsUsed}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {caseStudy.stack.map((tech) => (
                  <span key={tech} className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </section>

          <section className="mt-8 grid gap-6 lg:grid-cols-2">
            <DetailBlock title={ui.improveNext} icon={<ArrowRight className={`h-5 w-5 ${accent.text}`} />} items={caseStudy.improveNext} />
            <section className="module-card rounded-[22px] p-6">
              <h2 className="text-xl font-black text-slate-950">{ui.privacySanitization}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{ui.publicSampleIntro}</p>
              <div className="mt-4 grid gap-2">
                {caseStudy.evidence.map((item) => (
                  <p key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold leading-6 text-slate-700">
                    {item}
                  </p>
                ))}
              </div>
            </section>
          </section>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-[1320px] gap-6 px-5 py-10 md:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">{ui.nextStep}</p>
            <h2 className="mt-2 text-2xl font-black">{ui.returnToCv}</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-white px-4 text-sm font-bold text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300" href={localizedHref("/")}>
              {ui.home}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/20 px-4 text-sm font-bold text-white transition hover:border-emerald-300 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" href={localizedHref("/resume")}>
              {ui.resume}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/20 px-4 text-sm font-bold text-white transition hover:border-emerald-300 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" download="Mickoll_Marin_CV_ATS.pdf" href={profile.cvUrl}>
              {ui.downloadCv}
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1320px] gap-3 border-t border-white/10 px-5 py-6 md:px-8 lg:grid-cols-2 lg:px-10">
          <CaseNavLink label={ui.previousCase} caseStudy={previousCase} href={localizedHref(`/case-studies/${previousCase.slug}`)} />
          <CaseNavLink label={ui.nextCase} caseStudy={nextCase} href={localizedHref(`/case-studies/${nextCase.slug}`)} alignRight />
        </div>
      </section>
    </main>
  );
}

function HeroFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/12 bg-white/7 p-4">
      <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-2 text-sm font-bold leading-6 text-slate-200">{value}</p>
    </div>
  );
}

function InfoPanel({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="section-kicker text-slate-500">{label}</p>
      <p className="mt-3 text-sm font-bold leading-6 text-slate-700">{value}</p>
    </div>
  );
}

function DetailBlock({ title, icon, items }: { title: string; icon: ReactNode; items: string[] }) {
  return (
    <section className="module-card rounded-[22px] p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white">
          {icon}
        </div>
        <h2 className="text-xl font-black text-slate-950">{title}</h2>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CaseNavLink({
  label,
  caseStudy,
  href,
  alignRight = false,
}: {
  label: string;
  caseStudy: { title: string };
  href: string;
  alignRight?: boolean;
}) {
  return (
    <Link
      className={`rounded-2xl border border-white/12 bg-white/7 p-4 transition hover:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 ${
        alignRight ? "lg:text-right" : ""
      }`}
      href={href}
    >
      <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">{label}</p>
      <p className="mt-2 text-base font-black text-white">{caseStudy.title}</p>
    </Link>
  );
}
