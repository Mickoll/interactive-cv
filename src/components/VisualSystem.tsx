"use client";

import Image from "next/image";
import clsx from "clsx";
import { CheckCircle2, Database, FileText, MonitorCog, Workflow } from "lucide-react";
import type { CaseStudy } from "@/data/profile";
import { useLanguage } from "@/components/LanguageProvider";

const accentClasses = {
  amber: {
    border: "border-amber-400/70",
    bg: "bg-amber-100",
    text: "text-amber-700",
    textDark: "text-amber-300",
    ring: "ring-amber-300/45",
    fill: "#f5a400",
    soft: "#fff3cb",
  },
  emerald: {
    border: "border-emerald-400/70",
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    textDark: "text-emerald-300",
    ring: "ring-emerald-300/45",
    fill: "#19b27f",
    soft: "#d9f9ea",
  },
  cyan: {
    border: "border-cyan-400/70",
    bg: "bg-cyan-100",
    text: "text-cyan-700",
    textDark: "text-cyan-300",
    ring: "ring-cyan-300/45",
    fill: "#00a9c7",
    soft: "#cff7ff",
  },
  blue: {
    border: "border-blue-400/70",
    bg: "bg-blue-100",
    text: "text-blue-700",
    textDark: "text-blue-300",
    ring: "ring-blue-300/45",
    fill: "#2563eb",
    soft: "#dbeafe",
  },
};

export function accentFor(accent: CaseStudy["accent"]) {
  return accentClasses[accent];
}

export function CaseStudyVisual({
  caseStudy,
  compact = false,
  dark = false,
}: {
  caseStudy: CaseStudy;
  compact?: boolean;
  dark?: boolean;
}) {
  const { ui } = useLanguage();
  const accent = accentFor(caseStudy.accent);
  const Icon = caseStudy.icon;

  return (
    <figure
      className={clsx(
        "work-sample group relative self-start overflow-hidden rounded-[18px] border p-2 shadow-[0_22px_70px_-52px_rgba(4,12,24,0.95)] transition",
        dark ? "border-white/14 bg-white/8" : "border-slate-900/12 bg-white",
        compact ? "h-full" : ""
      )}
    >
      <div className="flex items-center justify-between gap-3 px-2 pb-2">
        <div className="min-w-0">
          <p className={clsx("text-[0.68rem] font-black uppercase tracking-[0.18em]", dark ? "text-slate-400" : "text-slate-500")}>
            {ui.sanitizedWorkSample}
          </p>
          <figcaption className={clsx("mt-1 truncate text-sm font-black", dark ? "text-white" : "text-slate-950")}>
            {caseStudy.shortTitle}
          </figcaption>
        </div>
        <div className={clsx("grid h-10 w-10 flex-none place-items-center rounded-lg border", dark ? "border-white/12 bg-white/8" : "border-slate-200 bg-white")}>
          <Icon className={clsx("h-5 w-5", dark ? accent.textDark : accent.text)} />
        </div>
      </div>

      <div className={clsx("relative overflow-hidden rounded-[14px] border", dark ? "border-white/10 bg-slate-950" : "border-slate-200 bg-slate-100")}>
        <Image
          src={caseStudy.sampleImage}
          alt={caseStudy.sampleAlt}
          width={1200}
          height={760}
          className={clsx(
            "h-auto w-full object-cover transition duration-500 group-hover:scale-[1.015]",
            compact ? "aspect-[16/10]" : "aspect-[16/10]"
          )}
          priority={!compact && caseStudy.slug === "solartrack-workflow-pwa"}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/34 to-transparent" />
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {caseStudy.metrics.map((metric) => (
          <div
            key={metric}
            className={clsx(
              "rounded-lg border px-2 py-2 text-center text-[0.72rem] font-black uppercase tracking-[0.04em]",
              dark ? "border-white/12 bg-white/7 text-slate-200" : "border-slate-200 bg-slate-50 text-slate-700"
            )}
          >
            {metric}
          </div>
        ))}
      </div>
    </figure>
  );
}

export function WorkflowRun({ caseStudy, dark = false }: { caseStudy: CaseStudy; dark?: boolean }) {
  const { ui } = useLanguage();
  const accent = accentFor(caseStudy.accent);

  return (
    <div className={clsx("rounded-[18px] border p-4", dark ? "border-white/12 bg-white/7" : "border-slate-200 bg-white")}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className={clsx("text-[0.68rem] font-black uppercase tracking-[0.18em]", dark ? "text-slate-400" : "text-slate-500")}>
            {ui.workflowRun}
          </p>
          <h3 className={clsx("mt-1 text-lg font-black", dark ? "text-white" : "text-slate-950")}>{ui.workflowRunHeading}</h3>
        </div>
        <MonitorCog className={clsx("h-5 w-5 flex-none", dark ? accent.textDark : accent.text)} />
      </div>

      <div className="grid auto-rows-fr gap-3 md:grid-cols-4">
        {caseStudy.workflow.map((step, index) => (
          <div
            key={step}
            className={clsx(
              "flex min-h-36 flex-col justify-between rounded-xl border p-3",
              dark ? "border-white/12 bg-slate-950/44 text-slate-200" : "border-slate-200 bg-slate-50 text-slate-700"
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <span
                className="grid h-8 w-8 place-items-center rounded-lg text-xs font-black text-white"
                style={{ backgroundColor: index === caseStudy.workflow.length - 1 ? "#19b27f" : accent.fill }}
              >
                {index + 1}
              </span>
              {index === caseStudy.workflow.length - 1 ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : null}
            </div>
            <p className="pt-6 text-sm font-black leading-tight">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ArchitectureDiagram({ caseStudy }: { caseStudy: CaseStudy }) {
  const { ui } = useLanguage();
  const accent = accentFor(caseStudy.accent);

  return (
    <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_22px_70px_-55px_rgba(4,12,24,0.75)]">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-[0.7rem] font-black uppercase tracking-[0.18em] text-slate-500">{ui.workflowLabel}</p>
          <h3 className="mt-1 text-xl font-black text-slate-950">{ui.problemToOutput}</h3>
        </div>
        <span className={clsx("rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.12em]", accent.bg, accent.text)}>
          {caseStudy.shortTitle}
        </span>
      </div>

      <div className="rounded-[18px] border border-slate-200 bg-[#f8f5ed] p-4">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { label: ui.inputLabel, value: caseStudy.input, icon: FileText },
            { label: ui.systemLabel, value: caseStudy.system, icon: Workflow },
            { label: ui.outputLabel, value: caseStudy.output, icon: Database },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={clsx(
                  "relative rounded-2xl border p-4",
                  index === 1 ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white text-slate-700"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className={clsx("text-[0.68rem] font-black uppercase tracking-[0.18em]", index === 1 ? accent.textDark : "text-slate-500")}>
                    {item.label}
                  </p>
                  <Icon className={clsx("h-5 w-5", index === 1 ? accent.textDark : accent.text)} />
                </div>
                <p className={clsx("mt-4 text-sm font-bold leading-6", index === 1 ? "text-slate-200" : "text-slate-700")}>{item.value}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-4 grid gap-2 md:grid-cols-4">
          {caseStudy.workflow.map((step, index) => (
            <div key={step} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-black text-slate-700">
              <span className="grid h-7 w-7 place-items-center rounded-lg text-xs font-black text-white" style={{ backgroundColor: index === caseStudy.workflow.length - 1 ? "#19b27f" : accent.fill }}>
                {index + 1}
              </span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
