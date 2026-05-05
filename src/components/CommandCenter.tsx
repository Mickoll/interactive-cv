"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import {
  ArrowDownToLine,
  ArrowRight,
  BriefcaseBusiness,
  Eye,
  Mail,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import { caseStudies, professionalExperience, profile, signalCards } from "@/data/profile";
import { accentFor, CaseStudyVisual } from "@/components/VisualSystem";

type Mode = "recruiter" | "explorer";

const quickProof = [
  "Led 107 people in Amazon operations",
  "2 years in SaaS pricing/revenue workflows",
  "4 practical automation projects",
  "Spanish, English C2, Portuguese C1",
];

export function CommandCenter() {
  const [activeSlug, setActiveSlug] = useState(caseStudies[0].slug);
  const [mode, setMode] = useState<Mode>("recruiter");

  const activeCase = useMemo(
    () => caseStudies.find((caseStudy) => caseStudy.slug === activeSlug) ?? caseStudies[0],
    [activeSlug]
  );
  const accent = accentFor(activeCase.accent);
  const ActiveIcon = activeCase.icon;

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#f8f4ea]">
      <div className="command-grid absolute inset-0 opacity-65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(16,185,129,0.16),transparent_25%),radial-gradient(circle_at_82%_34%,rgba(6,182,212,0.13),transparent_24%)]" />

      <div className="relative mx-auto grid min-h-[90svh] max-w-[1400px] gap-8 px-4 py-8 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white/85 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Remote from Spain
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.94] tracking-tight text-slate-950 md:text-7xl">
            Mickoll Marin
          </h1>
          <p className="mt-5 max-w-2xl text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            I turn operations work into simple data tools.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Industrial engineer with Amazon operations, SaaS pricing experience, and hands-on automation projects in reporting, dashboards, QA/QC, and workflow tools.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a className="mission-button bg-slate-950 text-white hover:bg-slate-800" href={profile.cvUrl}>
              <ArrowDownToLine className="h-4 w-4" />
              Download CV
            </a>
            <a className="mission-button border border-slate-300 bg-white text-slate-950 hover:border-emerald-400 hover:text-emerald-700" href={mode === "recruiter" ? "#recruiter-scan" : "#case-studies"}>
              {mode === "recruiter" ? <BriefcaseBusiness className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {mode === "recruiter" ? "Fast scan" : "See projects"}
            </a>
            <a className="mission-button border border-slate-300 bg-white text-slate-950 hover:border-cyan-400 hover:text-cyan-700" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {signalCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className="rounded-lg border border-slate-200 bg-white/86 p-4 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                    <Icon className="h-4 w-4 text-emerald-600" />
                    {card.label}
                  </div>
                  <div className="mt-2 text-3xl font-black text-slate-950">{card.value}</div>
                  <div className="text-sm leading-5 text-slate-600">{card.detail}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center" id="value-map">
          <div className="w-full rounded-lg border border-slate-300 bg-white/92 p-3 shadow-[0_28px_80px_-52px_rgba(15,23,42,0.85)] backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-2 pb-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Interactive CV</p>
                <h2 className="mt-1 text-xl font-black text-slate-950">
                  {mode === "recruiter" ? "30-second recruiter view" : "Project explorer"}
                </h2>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-1">
                {(["recruiter", "explorer"] as const).map((nextMode) => (
                  <button
                    key={nextMode}
                    className={clsx(
                      "rounded px-3 py-2 text-sm font-black capitalize transition focus:outline-none focus:ring-2 focus:ring-emerald-500",
                      mode === nextMode ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-white hover:text-slate-950"
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
              <div className="grid gap-4 p-2 pt-4 lg:grid-cols-[0.95fr_1.05fr]">
                <section className="rounded-lg border border-slate-200 bg-[#f8f4ea] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-700">Best fit</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {profile.targetRoles.slice(0, 4).map((role) => (
                      <span key={role} className="rounded border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-black text-slate-800">
                        {role}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-2">
                    {quickProof.map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700">
                        <Sparkles className="h-4 w-4 flex-none text-emerald-600" />
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Recent anchors</p>
                  <div className="mt-3 grid gap-3">
                    {professionalExperience.slice(0, 3).map((item) => (
                      <div key={item.organization} className="rounded border border-slate-200 bg-slate-50 p-3">
                        <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">{item.period}</p>
                        <p className="mt-1 text-sm font-black text-slate-950">{item.organization}</p>
                        <p className="mt-1 text-sm leading-5 text-slate-600">{item.role}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              <div className="grid gap-4 p-2 pt-4 xl:grid-cols-[1.05fr_0.95fr]">
                <CaseStudyVisual caseStudy={activeCase} />

                <section className="rounded-lg border border-slate-200 bg-slate-950 p-4 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={clsx("text-xs font-black uppercase tracking-[0.16em]", accent.text)}>{activeCase.eyebrow}</p>
                      <h3 className="mt-2 text-2xl font-black leading-tight">{activeCase.title}</h3>
                    </div>
                    <ActiveIcon className={clsx("h-6 w-6 flex-none", accent.text)} />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{activeCase.output}</p>

                  <div className="mt-5 grid gap-2">
                    {caseStudies.map((caseStudy) => {
                      const isActive = caseStudy.slug === activeSlug;
                      return (
                        <button
                          key={caseStudy.slug}
                          className={clsx(
                            "group flex items-center justify-between gap-3 rounded border px-3 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-emerald-300",
                            isActive ? "border-white/30 bg-white text-slate-950" : "border-white/10 bg-white/7 text-slate-200 hover:bg-white/12"
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
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    href={`/case-studies/${activeCase.slug}`}
                  >
                    Open case study
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
