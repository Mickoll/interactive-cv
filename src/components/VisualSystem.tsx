import Image from "next/image";
import clsx from "clsx";
import { ArrowRight, CheckCircle2, CircleDot, Database, FileText, MonitorCog, Workflow } from "lucide-react";
import type { CaseStudy } from "@/data/profile";

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
            Sanitized work sample
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
  const accent = accentFor(caseStudy.accent);

  return (
    <div className={clsx("rounded-[18px] border p-4", dark ? "border-white/12 bg-white/7" : "border-slate-200 bg-white")}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className={clsx("text-[0.68rem] font-black uppercase tracking-[0.18em]", dark ? "text-slate-400" : "text-slate-500")}>
            Workflow run
          </p>
          <h3 className={clsx("mt-1 text-lg font-black", dark ? "text-white" : "text-slate-950")}>From messy input to usable output</h3>
        </div>
        <MonitorCog className={clsx("h-5 w-5 flex-none", dark ? accent.textDark : accent.text)} />
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        {caseStudy.workflow.map((step, index) => (
          <div
            key={step}
            className={clsx(
              "relative rounded-xl border p-3",
              dark ? "border-white/12 bg-slate-950/44 text-slate-200" : "border-slate-200 bg-slate-50 text-slate-700"
            )}
          >
            <div className="mb-6 flex items-center justify-between">
              <span
                className="grid h-8 w-8 place-items-center rounded-lg text-xs font-black text-white"
                style={{ backgroundColor: index === caseStudy.workflow.length - 1 ? "#19b27f" : accent.fill }}
              >
                {index + 1}
              </span>
              {index < caseStudy.workflow.length - 1 ? <ArrowRight className={clsx("h-4 w-4", dark ? "text-slate-500" : "text-slate-300")} /> : <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
            </div>
            <p className="text-sm font-black capitalize leading-tight">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FlowStrip() {
  const steps = [
    { label: "raw files", icon: FileText },
    { label: "clean data", icon: Database },
    { label: "workflow logic", icon: Workflow },
    { label: "usable output", icon: CircleDot },
  ];

  return (
    <div className="grid gap-3 md:grid-cols-4">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={step.label} className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md">
            <Icon className="h-5 w-5 text-cyan-700" />
            <span className="text-sm font-black text-slate-800">{step.label}</span>
            {index < steps.length - 1 ? <ArrowRight className="ml-auto hidden h-4 w-4 text-slate-300 md:block" /> : null}
          </div>
        );
      })}
    </div>
  );
}

export function ArchitectureDiagram({ caseStudy }: { caseStudy: CaseStudy }) {
  const accent = accentFor(caseStudy.accent);
  const blocks = ["Inputs", "Rules", "Data", "Interface", "Output"];

  return (
    <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_22px_70px_-55px_rgba(4,12,24,0.75)]">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-[0.7rem] font-black uppercase tracking-[0.18em] text-slate-500">System designed</p>
          <h3 className="mt-1 text-xl font-black text-slate-950">Operating flow</h3>
        </div>
        <span className={clsx("rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.12em]", accent.bg, accent.text)}>
          {caseStudy.shortTitle}
        </span>
      </div>

      <svg className="h-60 w-full" viewBox="0 0 760 270" role="img" aria-label={`${caseStudy.title} workflow architecture`}>
        <defs>
          <marker id={`arrow-${caseStudy.slug}`} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={accent.fill} />
          </marker>
          <pattern id={`grid-${caseStudy.slug}`} width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M 26 0 L 0 0 0 26" fill="none" stroke="#e5e7eb" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="760" height="270" rx="22" fill="#f8f5ed" />
        <rect width="760" height="270" rx="22" fill={`url(#grid-${caseStudy.slug})`} opacity="0.75" />
        <path d="M74 135 H686" stroke={accent.fill} strokeWidth="4" strokeDasharray="13 12" markerEnd={`url(#arrow-${caseStudy.slug})`} />
        {blocks.map((block, index) => {
          const x = 36 + index * 144;
          const y = index % 2 === 0 ? 70 : 150;
          return (
            <g key={block}>
              <rect x={x} y={y} width="122" height="60" rx="14" fill={index === 2 ? "#06131f" : "#ffffff"} stroke={index === 2 ? accent.fill : "#cbd5e1"} strokeWidth={index === 2 ? "3" : "1.5"} />
              <text x={x + 61} y={y + 27} textAnchor="middle" fontSize="14" fontWeight="900" fill={index === 2 ? "#ffffff" : "#06131f"}>
                {block}
              </text>
              <text x={x + 61} y={y + 45} textAnchor="middle" fontSize="10" fontWeight="800" fill={index === 2 ? "#a7f3d0" : "#64748b"}>
                {index === 0 ? "messy" : index === 4 ? "usable" : "structured"}
              </text>
            </g>
          );
        })}
        <circle cx="380" cy="135" r="36" fill={accent.soft} stroke={accent.fill} strokeWidth="4" />
        <circle cx="380" cy="135" r="10" fill={accent.fill} />
      </svg>
    </div>
  );
}
