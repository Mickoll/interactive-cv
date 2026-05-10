"use client";

import { ArrowDownToLine, BriefcaseBusiness, Eye, RadioTower } from "lucide-react";
import { getLocalizedCaseStudies, getLocalizedProfile } from "@/data/localized";
import { useLanguage } from "@/components/LanguageProvider";
import { CaseStudyVisual } from "@/components/VisualSystem";

export function CommandCenter() {
  const { locale, ui, localizedHref } = useLanguage();
  const profile = getLocalizedProfile(locale);
  const caseStudies = getLocalizedCaseStudies(locale);
  const featuredCase =
    caseStudies.find((caseStudy) => caseStudy.slug === "solartrack-workflow-pwa") ?? caseStudies[0];
  const proofChips =
    locale === "es"
      ? [
          "Liderazgo operativo en Amazon",
          "Experiencia SaaS remota",
          "Datos, reportes y herramientas internas",
        ]
      : [
          "Amazon operations leadership",
          "Remote SaaS experience",
          "Data, reporting, and internal tools",
        ];

  return (
    <section className="relative overflow-hidden border-b border-slate-900 bg-[#07131f] text-white">
      <div className="cockpit-grid absolute inset-0 opacity-95" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-300" />

      <div className="relative mx-auto grid min-h-[86svh] max-w-[1500px] gap-8 px-4 py-8 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
        <div className="flex flex-col justify-center py-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/14 bg-white/8 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
            <RadioTower className="h-4 w-4 text-emerald-300" />
            {ui.remoteFromSpain}
          </div>

          <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.92] tracking-tight text-white md:text-7xl">
            {locale === "es"
              ? "Construyo herramientas que hacen las operaciones más fáciles."
              : "I build tools that make operations easier to run."}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {locale === "es"
              ? "Soy Mickoll Marin, ingeniero industrial con experiencia liderando operaciones, trabajando en SaaS remoto y construyendo herramientas para reportes, paneles, precios, QA/QC y automatización."
              : "I am Mickoll Marin, an industrial engineer with Amazon operations leadership, remote SaaS experience, and hands-on projects in reports, dashboards, pricing data, QA/QC, and automation."}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="mission-button bg-amber-400 text-slate-950 hover:bg-amber-300" href="#case-studies">
              <Eye className="h-4 w-4" />
              {ui.viewProjects}
            </a>
            <a className="mission-button border border-white/16 bg-white/8 text-white hover:border-cyan-300 hover:text-cyan-100" href={profile.cvUrl}>
              <ArrowDownToLine className="h-4 w-4" />
              {ui.downloadCv}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {proofChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/8 px-3 py-2 text-sm font-black text-slate-100"
              >
                <BriefcaseBusiness className="h-4 w-4 text-cyan-300" />
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center py-4">
          <div className="cockpit-panel w-full rounded-[24px] p-3 md:p-4">
            <a
              aria-label={`${ui.openCaseStudy}: ${featuredCase.title}`}
              className="block rounded-[20px] focus:outline-none focus:ring-2 focus:ring-cyan-300"
              href={localizedHref(`/case-studies/${featuredCase.slug}`)}
            >
              <CaseStudyVisual caseStudy={featuredCase} dark />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
