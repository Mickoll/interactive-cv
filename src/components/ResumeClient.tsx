"use client";

import Link from "next/link";
import { ArrowLeft, ArrowDownToLine, Mail } from "lucide-react";
import {
  getLocalizedCapabilityGroups,
  getLocalizedCaseStudies,
  getLocalizedExperience,
  getLocalizedProfile,
  getLocalizedSignalCards,
} from "@/data/localized";
import { useLanguage } from "@/components/LanguageProvider";

export function ResumeClient() {
  const { locale, ui, localizedHref } = useLanguage();
  const profile = getLocalizedProfile(locale);
  const capabilityGroups = getLocalizedCapabilityGroups(locale);
  const professionalExperience = getLocalizedExperience(locale);
  const caseStudies = getLocalizedCaseStudies(locale);
  const signalCards = getLocalizedSignalCards(locale);

  return (
    <main className="min-h-screen bg-[#f4efe4] text-slate-950 print:bg-white">
      <div className="no-print border-b border-white/10 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4 md:px-8">
          <Link className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white" href={localizedHref("/")}>
            <ArrowLeft className="h-4 w-4" />
            {ui.back}
          </Link>
          <div className="flex gap-3">
            <a className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-3 py-2 text-sm font-bold text-slate-950" href={profile.cvUrl}>
              <ArrowDownToLine className="h-4 w-4" />
              {ui.pdf}
            </a>
            <a className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm font-bold text-white" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              {ui.email}
            </a>
          </div>
        </div>
      </div>

      <article className="mx-auto my-8 max-w-5xl rounded-[26px] border border-slate-900/12 bg-white px-5 py-10 shadow-[0_28px_80px_-62px_rgba(4,12,24,0.85)] md:px-8 print:my-0 print:rounded-none print:border-0 print:px-0 print:py-0 print:shadow-none">
        <header className="border-b border-slate-200 pb-7 print:pb-3">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div>
              <h1 className="text-4xl font-black tracking-tight print:text-2xl">{profile.name}</h1>
              <p className="mt-2 text-xl font-bold text-slate-800 print:mt-1 print:text-sm">{profile.role}</p>
              <p className="mt-5 max-w-4xl text-base leading-7 text-slate-700 print:mt-2 print:text-[10px] print:leading-4">{profile.headline}</p>
            </div>
            <div className="w-full rounded-2xl border border-slate-200 bg-[#f4efe4] p-4 text-sm leading-6 text-slate-700 md:w-auto md:min-w-60 print:bg-white print:p-2 print:text-[9px] print:leading-4">
              <p>{profile.location}</p>
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
              <p>linkedin.com/in/mickollmarin</p>
            </div>
          </div>
        </header>

        <ResumeSection title={ui.experienceHighlights}>
          <div className="grid gap-3 md:grid-cols-4 print:grid-cols-4 print:gap-1">
            {signalCards.map((card) => (
              <div key={card.label} className="rounded-2xl border border-slate-200 bg-[#f4efe4] p-4 print:bg-white print:p-1">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-slate-500 print:text-[8px] print:tracking-[0.08em]">{card.label}</p>
                <p className="mt-1 text-2xl font-black text-slate-950 print:text-base">{card.value}</p>
                <p className="mt-1 text-xs font-bold leading-5 text-slate-600 print:text-[8px] print:leading-3">{card.detail}</p>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title={ui.targetRoles}>
          <div className="flex flex-wrap gap-2 print:gap-1">
            {profile.targetRoles.map((role) => (
              <span key={role} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-bold text-slate-700 print:px-1.5 print:py-0.5 print:text-[8px]">
                {role}
              </span>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title={ui.coreOperatingSystem}>
          <div className="grid gap-4 md:grid-cols-2 print:grid-cols-5 print:gap-1">
            {capabilityGroups.map((group) => (
              <div key={group.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 print:border-0 print:bg-white print:p-0">
                <h3 className="font-black text-slate-950 print:text-[9px] print:leading-3">
                  {group.name}: {group.verb}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700 print:text-[8px] print:leading-3">{group.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title={ui.selectedExperience}>
          <div className="space-y-6 print:space-y-2">
            {professionalExperience.map((item) => (
              <div key={item.organization}>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="text-sm font-black text-slate-950 print:text-[10px] print:leading-4">{item.role}</h3>
                    <p className="text-sm font-bold text-slate-700 print:text-[10px] print:leading-4">{item.organization}</p>
                  </div>
                  <p className="text-sm font-black text-slate-500 print:text-[9px] print:leading-4">{item.period}</p>
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-600 print:mt-0 print:text-[9px] print:leading-4">{item.context}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700 print:mt-0 print:space-y-0 print:text-[9px] print:leading-4">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title={ui.projectExamples}>
          <div className="grid gap-4 md:grid-cols-2 print:grid-cols-4 print:gap-1">
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.slug} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 print:border-0 print:bg-white print:p-0">
                <h3 className="font-black text-slate-950 print:text-[9px] print:leading-3">{caseStudy.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700 print:text-[8px] print:leading-3">{caseStudy.output}</p>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title={ui.education}>
          <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700 print:space-y-0 print:text-[9px] print:leading-4">
            <li>MBA, Universidad Isabel I, Barcelona, Spain, 2020.</li>
            <li>Master in Big Data and Business Intelligence, ISEB, Barcelona, Spain, 2019. Cum Laude.</li>
            <li>Industrial Engineering Degree, Universidad Yacambu, Barquisimeto, Venezuela, 2018.</li>
          </ul>
        </ResumeSection>
      </article>
    </main>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 border-t border-slate-200 pt-5 print:mt-2 print:pt-2">
      <h2 className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-slate-500 print:mb-1 print:text-[8px] print:tracking-[0.08em]">{title}</h2>
      {children}
    </section>
  );
}
