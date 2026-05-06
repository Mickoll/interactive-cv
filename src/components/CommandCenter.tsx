"use client";

import { useMemo, useState } from "react";
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
import { caseStudies, profile, signalCards, workflowStages } from "@/data/profile";
import { accentFor, CaseStudyVisual, WorkflowRun } from "@/components/VisualSystem";

type Mode = "recruiter" | "explorer";

const cockpitProof = [
  "Led a 107-person Amazon operations team",
  "Worked remotely in SaaS pricing and product workflows",
  "Built deployed and local-first workflow tools",
  "Spanish native, English C2, Portuguese C1",
];

export function CommandCenter() {
  const [activeSlug, setActiveSlug] = useState("solartrack-workflow-pwa");
  const [mode, setMode] = useState<Mode>("recruiter");
  const [activeStage, setActiveStage] = useState(0);

  const activeCase = useMemo(
    () => caseStudies.find((caseStudy) => caseStudy.slug === activeSlug) ?? caseStudies[0],
    [activeSlug]
  );
  const accent = accentFor(activeCase.accent);

  return (
    <section className="relative overflow-hidden border-b border-slate-900 bg-[#07131f] text-white">
      <div className="cockpit-grid absolute inset-0 opacity-95" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-300" />

      <div className="relative mx-auto grid min-h-[92svh] max-w-[1500px] gap-7 px-4 py-6 md:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-10">
        <div className="flex flex-col justify-center py-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/14 bg-white/8 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
            <RadioTower className="h-4 w-4 text-emerald-300" />
            Remote from Spain
          </div>

          <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.92] tracking-tight text-white md:text-7xl">
            I build tools that make operations easier to run.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I am Mickoll Marin: an industrial engineer with Amazon operations experience, remote SaaS/product context, and a portfolio of practical automation tools.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a className="mission-button bg-amber-400 text-slate-950 hover:bg-amber-300" href={profile.cvUrl}>
              <ArrowDownToLine className="h-4 w-4" />
              Download CV
            </a>
            <a
              className="mission-button border border-white/16 bg-white/8 text-white hover:border-cyan-300 hover:text-cyan-100"
              href={mode === "recruiter" ? "#recruiter-scan" : "#case-studies"}
            >
              {mode === "recruiter" ? <BriefcaseBusiness className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {mode === "recruiter" ? "Recruiter scan" : "View proof"}
            </a>
            <a className="mission-button border border-white/16 bg-white/8 text-white hover:border-emerald-300 hover:text-emerald-100" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              Contact
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
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-1 pb-4">
              <div>
                <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-slate-400">Operations cockpit</p>
                <h2 className="mt-1 text-2xl font-black text-white">
                  {mode === "recruiter" ? "Fast proof first" : "Explore the systems"}
                </h2>
              </div>
              <div className="mode-toggle rounded-xl p-1">
                {(["recruiter", "explorer"] as const).map((nextMode) => (
                  <button
                    key={nextMode}
                    className={clsx(
                      "rounded-lg px-3 py-2 text-sm font-black capitalize transition focus:outline-none focus:ring-2 focus:ring-cyan-300",
                      mode === nextMode ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/8 hover:text-white"
                    )}
                    onClick={() => setMode(nextMode)}
                    type="button"
                  >
                    {nextMode}
                  </button>
                ))}
              </div>
            </div>

            {mode === "recruiter" ? (
              <div className="grid gap-4 pt-4 xl:grid-cols-[1fr_0.76fr]">
                <div className="grid gap-3 self-start">
                  <CaseStudyVisual caseStudy={activeCase} dark />
                  <div className="rounded-[18px] border border-white/12 bg-white/7 p-4 text-sm leading-6 text-slate-300">
                    Sanitized from local project routes and generated outputs. Private names, locations, contacts, coordinates, and file identifiers are replaced with demo values.
                  </div>
                </div>

                <div className="grid gap-4">
                  <section className="rounded-[18px] border border-white/12 bg-white/7 p-4">
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-emerald-300">Why this profile works</p>
                    <div className="mt-4 grid gap-2">
                      {cockpitProof.map((item) => (
                        <div key={item} className="flex gap-2 rounded-lg border border-white/10 bg-slate-950/38 px-3 py-2 text-sm font-bold leading-5 text-slate-200">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-300" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-[18px] border border-white/12 bg-white/7 p-4">
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-400">Top role fit</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {profile.targetRoles.slice(0, 5).map((role) => (
                        <span key={role} className="rounded-lg border border-white/12 bg-white/8 px-2.5 py-1.5 text-xs font-black text-slate-100">
                          {role}
                        </span>
                      ))}
                    </div>
                  </section>

                  <div className="grid grid-cols-3 gap-2">
                    {caseStudies.slice(0, 3).map((caseStudy) => (
                      <button
                        key={caseStudy.slug}
                        className={clsx(
                          "min-h-20 rounded-xl border p-2 text-left text-[0.72rem] font-black leading-tight transition focus:outline-none focus:ring-2 focus:ring-cyan-300",
                          activeSlug === caseStudy.slug ? "border-white bg-white text-slate-950" : "border-white/12 bg-white/7 text-slate-300 hover:bg-white/12"
                        )}
                        onClick={() => setActiveSlug(caseStudy.slug)}
                        type="button"
                      >
                        {caseStudy.shortTitle}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid gap-4 pt-4 xl:grid-cols-[0.84fr_1.16fr]">
                <section className="rounded-[18px] border border-white/12 bg-white/7 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={clsx("text-[0.68rem] font-black uppercase tracking-[0.18em]", accent.textDark)}>{activeCase.eyebrow}</p>
                      <h3 className="mt-2 text-2xl font-black leading-tight text-white">{activeCase.title}</h3>
                    </div>
                    <PanelTop className={clsx("h-6 w-6 flex-none", accent.textDark)} />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{activeCase.output}</p>

                  <div className="mt-5 grid gap-2">
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
                    href={`/case-studies/${activeCase.slug}`}
                  >
                    Open case study
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </section>

                <div className="grid gap-4">
                  <CaseStudyVisual caseStudy={activeCase} dark />
                  <WorkflowRun caseStudy={activeCase} dark />
                </div>
              </div>
            )}

            <section className="mt-4 rounded-[18px] border border-white/12 bg-slate-950/42 p-4">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-400">Value pipeline</p>
                  <h3 className="mt-1 text-lg font-black text-white">{workflowStages[activeStage].label}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{workflowStages[activeStage].detail}</p>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {workflowStages.map((stage, index) => (
                    <button
                      key={stage.label}
                      aria-label={`Show ${stage.label}`}
                      className={clsx(
                        "h-10 rounded-lg border text-xs font-black transition focus:outline-none focus:ring-2 focus:ring-cyan-300",
                        index === activeStage ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-white/12 bg-white/7 text-slate-300 hover:bg-white/12"
                      )}
                      onClick={() => setActiveStage(index)}
                      type="button"
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
