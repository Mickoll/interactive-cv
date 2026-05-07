"use client";

import {
  ArrowDownToLine,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Eye,
  Mail,
  RadioTower,
} from "lucide-react";
import {
  getLocalizedCaseStudies,
  getLocalizedProfile,
  getLocalizedSignalCards,
} from "@/data/localized";
import { useLanguage } from "@/components/LanguageProvider";
import { CaseStudyVisual } from "@/components/VisualSystem";

export function CommandCenter() {
  const { locale, ui, localizedHref } = useLanguage();
  const profile = getLocalizedProfile(locale);
  const caseStudies = getLocalizedCaseStudies(locale);
  const signalCards = getLocalizedSignalCards(locale);
  const featuredCase =
    caseStudies.find((caseStudy) => caseStudy.slug === "solartrack-workflow-pwa") ?? caseStudies[0];
  const heroLines =
    locale === "es"
      ? [
          "Ingeniero industrial con base real en operaciones.",
          "Lideré un equipo Amazon de 107 personas.",
          "Trabajé en SaaS remoto cerca de clientes, producto y precios.",
          "Construí herramientas para reportes, datos, QA/QC y seguimiento operativo.",
        ]
      : [
          "Industrial engineer with real operations experience.",
          "Led a 107-person Amazon operations team.",
          "Worked remotely in SaaS across customers, product, and pricing.",
          "Built tools for reports, data, QA/QC, and operational follow-up.",
        ];

  return (
    <section className="relative overflow-hidden border-b border-slate-900 bg-[#07131f] text-white">
      <div className="cockpit-grid absolute inset-0 opacity-95" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-300" />

      <div className="relative mx-auto grid min-h-[92svh] max-w-[1500px] gap-8 px-4 py-6 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
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
              ? "Soy Mickoll Marin. Empecé en operaciones, pasé por SaaS remoto y ahora construyo herramientas web y de datos para trabajos que antes dependían de hojas, documentos y seguimiento manual."
              : "I am Mickoll Marin. I started in operations, moved into remote SaaS, and now build web and data tools for work that used to rely on spreadsheets, documents, and manual follow-up."}
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

        <div className="flex items-center py-4">
          <div className="cockpit-panel w-full rounded-[24px] p-3 md:p-4">
            <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
              <CaseStudyVisual caseStudy={featuredCase} dark />

              <div className="grid gap-4">
                <section className="rounded-[18px] border border-white/12 bg-white/7 p-5">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-emerald-300">{ui.whyProfileWorks}</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight text-white">
                    {locale === "es" ? "Perfil para equipos que necesitan ordenar el trabajo." : "A profile for teams that need the work made clearer."}
                  </h2>
                  <div className="mt-5 grid gap-2">
                    {heroLines.map((item) => (
                      <div key={item} className="flex gap-2 rounded-lg border border-white/10 bg-slate-950/38 px-3 py-2 text-sm font-bold leading-5 text-slate-200">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[18px] border border-white/12 bg-white/7 p-5">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-cyan-300">{ui.featuredProjects}</p>
                  <div className="mt-4 grid gap-2">
                    {caseStudies.map((caseStudy) => (
                      <a
                        key={caseStudy.slug}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-white/12 bg-slate-950/35 px-3 py-3 text-left text-slate-200 transition hover:border-cyan-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        href={localizedHref(`/case-studies/${caseStudy.slug}`)}
                      >
                        <span>
                          <span className="block text-sm font-black text-white">{caseStudy.shortTitle}</span>
                          <span className="mt-1 block text-xs font-bold leading-5 text-slate-400">{caseStudy.role}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </a>
                    ))}
                  </div>
                </section>

                <div className="rounded-[18px] border border-white/12 bg-slate-950/35 p-4 text-sm leading-6 text-slate-300">
                  {ui.sanitizedNote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
