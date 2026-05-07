"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  ArrowDownToLine,
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  Globe2,
  Mail,
  Network,
} from "lucide-react";
import {
  getLocalizedCapabilityGroups,
  getLocalizedCaseStudies,
  getLocalizedExperience,
  getLocalizedProfile,
  getLocalizedRoleFit,
  getLocalizedTimeline,
  getLocalizedWorkflowStages,
} from "@/data/localized";
import { useLanguage } from "@/components/LanguageProvider";
import { accentFor, CaseStudyVisual } from "@/components/VisualSystem";

export function ValuePipeline() {
  const { locale, ui } = useLanguage();
  const workflowStages = getLocalizedWorkflowStages(locale);
  const [active, setActive] = useState(0);
  const stage = workflowStages[active];

  return (
    <section className="border-b border-slate-200 bg-[#f4efe4]" id="value-pipeline">
      <div className="mx-auto grid max-w-[1500px] gap-8 px-4 py-16 md:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
        <div>
          <p className="section-kicker text-cyan-700">{ui.valueKicker}</p>
          <h2 className="mt-3 max-w-xl text-4xl font-black leading-tight text-slate-950">
            {ui.valueHeading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            {ui.valueText}
          </p>
        </div>

        <div className="rounded-[24px] border border-slate-900/12 bg-white p-4 shadow-[0_24px_70px_-56px_rgba(4,12,24,0.72)]">
          <div className="grid auto-rows-fr gap-3 md:grid-cols-5" role="tablist" aria-label={ui.valuePipeline}>
            {workflowStages.map((item, index) => (
              <button
                key={item.label}
                aria-controls="value-pipeline-detail"
                aria-label={item.label}
                aria-selected={active === index}
                className={clsx(
                  "value-step flex min-h-44 flex-col rounded-2xl border p-4 text-left transition-shadow focus:outline-none focus:ring-2 focus:ring-cyan-500",
                  active === index
                    ? "value-step-active shadow-[0_20px_44px_-34px_rgba(4,12,24,0.95)]"
                    : "value-step-idle hover:shadow-md"
                )}
                onClick={() => setActive(index)}
                role="tab"
                type="button"
              >
                <div className="grid gap-3">
                  <span className="value-step-number grid min-h-11 w-fit min-w-16 place-items-center rounded-xl px-2 text-xs font-black uppercase tracking-[0.08em]">
                    {item.badge}
                  </span>
                  <h3 className="text-base font-black leading-tight">{item.label}</h3>
                </div>
                <p className={clsx("mt-auto pt-5 text-sm leading-6", active === index ? "text-slate-300" : "text-slate-600")}>{item.detail}</p>
              </button>
            ))}
          </div>

          <div id="value-pipeline-detail" className="mt-4 rounded-2xl border border-cyan-200 bg-[#f7faf8] p-4 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <p className="section-kicker text-emerald-700">{ui.activeStage}</p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">{stage.label}</h3>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:mt-0">{stage.detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MissionTimeline() {
  const { locale, ui } = useLanguage();
  const timeline = getLocalizedTimeline(locale);

  return (
    <section className="border-b border-slate-900 bg-slate-950 text-white" id="timeline">
      <div className="mx-auto max-w-[1500px] px-4 py-16 md:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker text-emerald-300">{ui.careerRoute}</p>
            <h2 className="mt-3 text-4xl font-black leading-tight">{ui.timelineHeading}</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-300">
            {ui.timelineText}
          </p>
        </div>

        <div className="relative mt-12 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-amber-300 via-cyan-300 to-emerald-300 lg:block" />
          {timeline.map((item, index) => (
            <article key={item.period} className="relative rounded-[22px] border border-white/12 bg-white/7 p-5">
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-xl border border-white/12 bg-slate-950 text-sm font-black text-white shadow-sm">
                {index === 0 ? "IE" : index === 1 ? "OPS" : index === 2 ? "SaaS" : "BUILD"}
              </div>
              <p className="text-sm font-black text-white">{item.period}</p>
              <p className="mt-1 text-[0.68rem] font-black uppercase tracking-[0.18em] text-cyan-300">{item.label}</p>
              <h3 className="mt-4 text-xl font-black leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.signals.slice(0, 4).map((signal) => (
                  <span key={signal} className="rounded-full border border-white/12 bg-white/8 px-2.5 py-1 text-xs font-bold text-slate-200">
                    {signal}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudyMap() {
  const { locale, ui, localizedHref } = useLanguage();
  const caseStudies = getLocalizedCaseStudies(locale);
  const [activeSlug, setActiveSlug] = useState(caseStudies[0].slug);
  const activeCase = caseStudies.find((caseStudy) => caseStudy.slug === activeSlug) ?? caseStudies[0];
  const activeAccent = accentFor(activeCase.accent);

  return (
    <section className="border-b border-slate-200 bg-white" id="case-studies">
      <div className="mx-auto max-w-[1500px] px-4 py-16 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="section-kicker text-amber-700">{ui.workSamples}</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-950">
              {ui.workSamplesHeading}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              {ui.workSamplesText}
            </p>

            <div className="mt-7 rounded-[22px] border border-slate-200 bg-[#f4efe4] p-3">
              {caseStudies.map((caseStudy) => {
                const isActive = caseStudy.slug === activeSlug;
                return (
                  <button
                    key={caseStudy.slug}
                    className={clsx(
                      "group mb-2 flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition last:mb-0 focus:outline-none focus:ring-2 focus:ring-cyan-500",
                      isActive ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white text-slate-800 hover:border-cyan-300"
                    )}
                    onClick={() => setActiveSlug(caseStudy.slug)}
                    type="button"
                  >
                    <span>
                      <span className={clsx("block text-[0.68rem] font-black uppercase tracking-[0.16em]", isActive ? activeAccent.textDark : "text-slate-500")}>
                        {caseStudy.eyebrow}
                      </span>
                      <span className="mt-1 block text-sm font-black">{caseStudy.shortTitle}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-5">
            <article className="rounded-[26px] border border-slate-900/12 bg-[#f4efe4] p-4 shadow-[0_28px_80px_-60px_rgba(4,12,24,0.88)]">
              <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
                <CaseStudyVisual caseStudy={activeCase} compact />
                <div className="flex flex-col justify-between rounded-[20px] border border-slate-200 bg-white p-5">
                  <div>
                    <p className={clsx("section-kicker", activeAccent.text)}>{activeCase.eyebrow}</p>
                    <h3 className="mt-3 text-3xl font-black leading-tight text-slate-950">{activeCase.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-600">{activeCase.summary}</p>
                  </div>

                  <div className="mt-6 grid gap-2">
                    {[
                      { label: ui.inputLabel, value: activeCase.input },
                      { label: ui.systemLabel, value: activeCase.system },
                      { label: ui.outputLabel, value: activeCase.output },
                    ].map((item, index) => (
                      <div
                        key={item.label}
                        className={clsx(
                          "rounded-xl border px-3 py-2",
                          index === 1 ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-slate-50 text-slate-700"
                        )}
                      >
                        <p className={clsx("text-[0.62rem] font-black uppercase tracking-[0.16em]", index === 1 ? activeAccent.textDark : "text-slate-500")}>{item.label}</p>
                        <p className={clsx("mt-1 text-sm font-bold leading-5", index === 1 ? "text-slate-200" : "text-slate-700")}>{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-black leading-6 text-emerald-900">
                    {activeCase.proves[0]}
                  </p>

                  <Link
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    href={localizedHref(`/case-studies/${activeCase.slug}`)}
                  >
                    {ui.openCaseStudy}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            <div className="grid gap-4 md:grid-cols-3">
              {activeCase.facts.slice(0, 3).map((fact) => (
                <div key={fact} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold leading-6 text-slate-700 shadow-sm">
                  <span className="mb-3 block h-2 w-10 rounded-full bg-slate-950" />
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillMatrix() {
  const { locale, ui } = useLanguage();
  const capabilityGroups = getLocalizedCapabilityGroups(locale);

  return (
    <section className="border-b border-slate-200 bg-[#f4efe4]" id="skills">
      <div className="mx-auto max-w-[1500px] px-4 py-16 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="section-kicker text-emerald-700">{ui.operatingSystem}</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-950">
              {ui.skillsHeading}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              {ui.skillsText}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {capabilityGroups.map((group) => (
              <article key={group.name} className="module-card rounded-[22px] p-5 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-950 text-sm font-black text-white">{group.name.slice(0, 2).toUpperCase()}</div>
                <h3 className="mt-5 text-xl font-black text-slate-950">{group.name}</h3>
                <p className="mt-2 text-sm font-black text-cyan-700">{group.verb}</p>
                <div className="mt-4 grid gap-2">
                  <SkillLine label={ui.inputLabel} value={group.input} />
                  <SkillLine label={ui.systemLabel} value={group.system} dark />
                  <SkillLine label={ui.outputLabel} value={group.output} />
                </div>
                <div className="mt-4">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-slate-500">{ui.usedIn}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.usedIn.map((item) => (
                      <span key={item} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillLine({ label, value, dark = false }: { label: string; value: string; dark?: boolean }) {
  return (
    <div className={clsx("rounded-xl border px-3 py-2", dark ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-slate-50 text-slate-700")}>
      <p className={clsx("text-[0.58rem] font-black uppercase tracking-[0.14em]", dark ? "text-cyan-300" : "text-slate-500")}>{label}</p>
      <p className={clsx("mt-1 text-xs font-bold leading-5", dark ? "text-slate-200" : "text-slate-700")}>{value}</p>
    </div>
  );
}

export function RecruiterPanel() {
  const { locale, ui, localizedHref } = useLanguage();
  const profile = getLocalizedProfile(locale);
  const roleFit = getLocalizedRoleFit(locale);
  const professionalExperience = getLocalizedExperience(locale);

  return (
    <section className="bg-slate-950 text-white" id="recruiter-scan">
      <div className="mx-auto grid max-w-[1500px] gap-8 px-4 py-16 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
        <div>
          <p className="section-kicker text-emerald-300">{ui.recruiterScan}</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight">
            {ui.recruiterHeading}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            {ui.recruiterText}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="mission-button bg-white text-slate-950 hover:bg-amber-100" href={profile.cvUrl}>
              <ArrowDownToLine className="h-4 w-4" />
              {ui.downloadCv}
            </a>
            <a className="mission-button border border-white/20 text-white hover:border-emerald-300 hover:text-emerald-200" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              {ui.email}
            </a>
            <a className="mission-button border border-white/20 text-white hover:border-cyan-300 hover:text-cyan-200" href={profile.linkedin}>
              <Globe2 className="h-4 w-4" />
              LinkedIn
            </a>
            <Link className="mission-button border border-white/20 text-white hover:border-amber-300 hover:text-amber-200" href={localizedHref("/resume")}>
              <FileText className="h-4 w-4" />
              {ui.resumePage}
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {profile.recruiterSnapshot.map((item) => (
            <div key={item.label} className="rounded-[20px] border border-white/12 bg-white/7 p-5">
              <div className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
              <div className="mt-2 text-lg font-black text-white">{item.value}</div>
            </div>
          ))}
          <div className="rounded-[20px] border border-white/12 bg-white/7 p-5 sm:col-span-2">
            <div className="flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-400">
              <BriefcaseBusiness className="h-4 w-4 text-emerald-300" />
              {ui.targetRoles}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {roleFit.map((role) => (
                <span key={role} className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-sm font-semibold text-slate-100">
                  {role}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[20px] border border-emerald-300/20 bg-emerald-300/8 p-5 sm:col-span-2">
            <div className="flex gap-3">
              <Network className="mt-1 h-5 w-5 flex-none text-emerald-300" />
              <p className="text-sm leading-6 text-slate-200">
                {ui.remoteNote}
              </p>
            </div>
          </div>
          <div className="rounded-[20px] border border-white/12 bg-white/7 p-5 sm:col-span-2">
            <div className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-400">{ui.experienceAnchors}</div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {professionalExperience.slice(0, 3).map((item) => (
                <div key={item.organization} className="rounded-xl border border-white/12 bg-slate-950/44 p-3">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-cyan-300">{item.period}</p>
                  <p className="mt-2 text-sm font-black text-white">{item.organization}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
