"use client";

import { useState } from "react";
import clsx from "clsx";
import {
  ArrowDownToLine,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Eye,
  Mail,
  MousePointer2,
  PanelTop,
  RadioTower,
} from "lucide-react";
import {
  getLocalizedCaseStudies,
  getLocalizedProfile,
  getLocalizedSignalCards,
} from "@/data/localized";
import { useLanguage } from "@/components/LanguageProvider";
import { accentFor, CaseStudyVisual, WorkflowRun } from "@/components/VisualSystem";

export function CommandCenter() {
  const { locale, ui, localizedHref } = useLanguage();
  const profile = getLocalizedProfile(locale);
  const caseStudies = getLocalizedCaseStudies(locale);
  const signalCards = getLocalizedSignalCards(locale);
  const cvHighlights =
    locale === "es"
      ? [
          "Lideré un equipo Amazon de 107 personas",
          "Trabajé en SaaS remoto de precios y producto",
          "Construí herramientas desplegadas y locales",
          "Español nativo, inglés C2, portugués C1",
        ]
      : [
          "Led a 107-person Amazon operations team",
          "Worked remotely in SaaS pricing and product support",
          "Built deployed and local tools from real work problems",
          "Spanish native, English C2, Portuguese C1",
        ];
  const [activeSlug, setActiveSlug] = useState("solartrack-workflow-pwa");

  const activeCase = caseStudies.find((caseStudy) => caseStudy.slug === activeSlug) ?? caseStudies[0];
  const accent = accentFor(activeCase.accent);

  return (
    <section className="relative overflow-hidden border-b border-slate-900 bg-[#07131f] text-white">
      <div className="cockpit-grid absolute inset-0 opacity-95" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-300" />

      <div className="relative mx-auto grid min-h-[92svh] max-w-[1500px] gap-7 px-4 py-6 md:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-10">
        <div className="flex flex-col justify-center py-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/14 bg-white/8 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
            <RadioTower className="h-4 w-4 text-emerald-300" />
            {ui.remoteFromSpain}
          </div>

          <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.92] tracking-tight text-white md:text-7xl">
            {locale === "es" ? "Construyo herramientas que hacen las operaciones más fáciles." : "I build tools that make operations easier to run."}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {locale === "es"
              ? "Soy Mickoll Marin: ingeniero industrial con experiencia en operaciones Amazon, SaaS remoto y proyectos propios de automatización."
              : "I am Mickoll Marin: an industrial engineer with Amazon operations experience, remote SaaS work, and my own automation projects."}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="mission-button bg-amber-400 text-slate-950 hover:bg-amber-300" href={profile.cvUrl}>
              <ArrowDownToLine className="h-4 w-4" />
              {ui.downloadCv}
            </a>
            <a className="mission-button border border-white/16 bg-white/8 text-white hover:border-cyan-300 hover:text-cyan-100" href="#recruiter-scan">
              <BriefcaseBusiness className="h-4 w-4" />
              {ui.scanMyCv}
            </a>
            <a className="mission-button border border-white/16 bg-white/8 text-white hover:border-amber-300 hover:text-amber-100" href="#case-studies">
              <Eye className="h-4 w-4" />
              {ui.exploreProjects}
            </a>
            <a className="mission-button border border-white/16 bg-white/8 text-white hover:border-emerald-300 hover:text-emerald-100" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              {ui.contact}
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {signalCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className="rounded-xl border border-white/12 bg-white/7 p-4">
                  <div className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-slate-400">
                    <Icon className="h-4 w-4 text-cyan-300" />
                    {card.label}
                  </div>
                  <div className="mt-2 text-3xl font-black text-white">{card.value}</div>
                  <div className="text-sm leading-5 text-slate-300">{card.detail}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center py-4" id="value-map">
          <div className="cockpit-panel w-full rounded-[24px] p-3 md:p-4">
            <div className="border-b border-white/10 px-1 pb-4">
              <div>
                <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-slate-400">{ui.startHere}</p>
                <h2 className="mt-1 text-2xl font-black text-white">{ui.entryHeading}</h2>
              </div>
              <div className="mt-4 rounded-2xl border border-white/12 bg-slate-950/32 p-3">
                <p className="text-sm leading-6 text-slate-300">{ui.entryIntro}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <a
                    className="min-h-16 rounded-xl border border-white bg-white px-4 py-3 text-left text-slate-950 shadow-[0_18px_44px_-32px_rgba(255,255,255,0.9)] transition hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    href="#recruiter-scan"
                  >
                    <span className="block text-sm font-black">{ui.scanMyCv}</span>
                    <span className="mt-1 block text-xs font-bold leading-5 text-slate-700">{ui.scanMyCvHelp}</span>
                  </a>
                  <a
                    className="min-h-16 rounded-xl border border-white/12 bg-white/7 px-4 py-3 text-left text-slate-200 transition hover:border-amber-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    href="#case-studies"
                  >
                    <span className="block text-sm font-black">{ui.exploreProjects}</span>
                    <span className="mt-1 block text-xs font-bold leading-5 text-slate-400">{ui.exploreProjectsHelp}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-4 xl:grid-cols-[1fr_0.82fr]">
              <div className="grid gap-3 self-start">
                <CaseStudyVisual caseStudy={activeCase} dark />
                <div className="rounded-[18px] border border-white/12 bg-white/7 p-4 text-sm leading-6 text-slate-300">
                  {ui.sanitizedNote}
                </div>
              </div>

              <div className="grid gap-4">
                <section className="rounded-[18px] border border-white/12 bg-white/7 p-4">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-emerald-300">{ui.whyProfileWorks}</p>
                  <div className="mt-4 grid gap-2">
                    {cvHighlights.map((item) => (
                      <div key={item} className="flex gap-2 rounded-lg border border-white/10 bg-slate-950/38 px-3 py-2 text-sm font-bold leading-5 text-slate-200">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[18px] border border-white/12 bg-white/7 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={clsx("text-[0.68rem] font-black uppercase tracking-[0.18em]", accent.textDark)}>{ui.exampleProject}</p>
                      <h3 className="mt-2 text-xl font-black leading-tight text-white">{activeCase.title}</h3>
                    </div>
                    <PanelTop className={clsx("h-6 w-6 flex-none", accent.textDark)} />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{activeCase.output}</p>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {caseStudies.map((caseStudy) => {
                      const isActive = caseStudy.slug === activeSlug;
                      return (
                        <button
                          key={caseStudy.slug}
                          className={clsx(
                            "group flex items-center justify-between gap-3 rounded-xl border px-3 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-cyan-300",
                            isActive ? "border-white/50 bg-white text-slate-950" : "border-white/12 bg-slate-950/35 text-slate-200 hover:bg-white/10"
                          )}
                          onClick={() => setActiveSlug(caseStudy.slug)}
                          type="button"
                        >
                          <span className="text-sm font-black">{caseStudy.shortTitle}</span>
                          <MousePointer2 className="h-4 w-4 transition group-hover:translate-x-0.5" />
                        </button>
                      );
                    })}
                  </div>

                  <a
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    href={localizedHref(`/case-studies/${activeCase.slug}`)}
                  >
                    {ui.openCaseStudy}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </section>

                <WorkflowRun caseStudy={activeCase} dark />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
