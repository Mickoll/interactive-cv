import clsx from "clsx";
import { ArrowRight, CircleDot, Database, FileText, LineChart, Workflow } from "lucide-react";
import type { CaseStudy } from "@/data/profile";

const accentClasses = {
  amber: {
    border: "border-amber-300/70",
    bg: "bg-amber-100/70",
    text: "text-amber-700",
    fill: "#f59e0b",
    soft: "#fef3c7",
  },
  emerald: {
    border: "border-emerald-300/70",
    bg: "bg-emerald-100/70",
    text: "text-emerald-700",
    fill: "#10b981",
    soft: "#d1fae5",
  },
  cyan: {
    border: "border-cyan-300/70",
    bg: "bg-cyan-100/70",
    text: "text-cyan-700",
    fill: "#06b6d4",
    soft: "#cffafe",
  },
  blue: {
    border: "border-blue-300/70",
    bg: "bg-blue-100/70",
    text: "text-blue-700",
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
}: {
  caseStudy: CaseStudy;
  compact?: boolean;
}) {
  const accent = accentFor(caseStudy.accent);
  const Icon = caseStudy.icon;

  return (
    <div
      className={clsx(
        "case-module relative overflow-hidden rounded-xl border bg-white shadow-sm",
        accent.border,
        compact ? "min-h-44" : "min-h-72"
      )}
      aria-label={`${caseStudy.title} visual summary`}
    >
      <div className="absolute inset-0 command-grid opacity-70" />
      <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: accent.fill }} />
      <div className={clsx("relative flex h-full flex-col gap-4 p-4 pt-5", compact ? "min-h-44" : "min-h-72")}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className={clsx("inline-flex items-center gap-2 rounded px-2 py-1 text-xs font-semibold", accent.bg, accent.text)}>
              <Icon className="h-3.5 w-3.5" />
              {caseStudy.eyebrow}
            </div>
            <div className="mt-3 text-sm font-semibold text-slate-950">{caseStudy.shortTitle}</div>
          </div>
          <div className="rounded border border-slate-200 bg-white p-2 shadow-sm">
            <LineChart className={clsx("h-5 w-5", accent.text)} />
          </div>
        </div>

        <svg className="h-28 w-full overflow-visible" viewBox="0 0 360 132" role="img" aria-label="Abstract workflow diagram">
          <defs>
            <pattern id={`dots-${caseStudy.slug}`} x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.4" fill="#cbd5e1" />
            </pattern>
          </defs>
          <rect width="360" height="132" rx="6" fill="#f8fafc" />
          <rect width="360" height="132" rx="6" fill={`url(#dots-${caseStudy.slug})`} opacity="0.55" />
          <path className="pulse-path" d="M53 69 C96 20 132 110 177 63 S251 50 311 81" fill="none" stroke={accent.fill} strokeWidth="5" strokeLinecap="round" />
          <path d="M53 92 C110 72 133 98 176 82 S250 105 311 54" fill="none" stroke="#0f172a" strokeWidth="2" strokeDasharray="6 8" opacity="0.28" />
          {[52, 176, 310].map((x, index) => (
            <g key={x}>
              <circle cx={x} cy={index === 1 ? 64 : index === 0 ? 70 : 80} r="18" fill="white" stroke={accent.fill} strokeWidth="3" />
              <circle cx={x} cy={index === 1 ? 64 : index === 0 ? 70 : 80} r="5" fill={accent.fill} />
            </g>
          ))}
          <rect x="24" y="18" width="82" height="10" rx="3" fill="#0f172a" opacity="0.75" />
          <rect x="24" y="34" width="52" height="8" rx="3" fill={accent.fill} opacity="0.8" />
          <rect x="250" y="18" width="80" height="9" rx="3" fill="#0f172a" opacity="0.38" />
          <rect x="250" y="34" width="48" height="8" rx="3" fill={accent.fill} opacity="0.75" />
        </svg>

        <div className="grid grid-cols-3 gap-2">
          {caseStudy.metrics.map((metric) => (
            <div key={metric} className="rounded border border-slate-200 bg-white/88 px-2 py-2 text-center text-xs font-semibold text-slate-700">
              {metric}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FlowStrip() {
  const steps = [
    { label: "raw inputs", icon: FileText },
    { label: "structured data", icon: Database },
    { label: "workflow logic", icon: Workflow },
    { label: "automated output", icon: CircleDot },
  ];

  return (
    <div className="grid gap-3 md:grid-cols-4">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={step.label} className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md">
            <Icon className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-semibold text-slate-800">{step.label}</span>
            {index < steps.length - 1 ? <ArrowRight className="ml-auto hidden h-4 w-4 text-slate-300 md:block" /> : null}
          </div>
        );
      })}
    </div>
  );
}

export function ArchitectureDiagram({ caseStudy }: { caseStudy: CaseStudy }) {
  const accent = accentFor(caseStudy.accent);
  const blocks = ["Inputs", "Rules", "Data model", "Interface", "Output"];

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">System designed</p>
          <h3 className="mt-1 text-lg font-black text-slate-950">Input to decision flow</h3>
        </div>
        <span className={clsx("rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.12em]", accent.bg, accent.text)}>
          {caseStudy.shortTitle}
        </span>
      </div>

      <svg className="h-56 w-full" viewBox="0 0 720 250" role="img" aria-label={`${caseStudy.title} architecture visualization`}>
        <defs>
          <marker id={`arrow-${caseStudy.slug}`} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={accent.fill} />
          </marker>
        </defs>
        <rect width="720" height="250" rx="18" fill="#f8fafc" />
        <path d="M60 124 H660" stroke={accent.fill} strokeWidth="3" strokeDasharray="10 12" markerEnd={`url(#arrow-${caseStudy.slug})`} />
        {blocks.map((block, index) => {
          const x = 42 + index * 132;
          const y = index % 2 === 0 ? 62 : 142;
          return (
            <g key={block}>
              <rect x={x} y={y} width="112" height="54" rx="12" fill="white" stroke={index === 2 ? accent.fill : "#cbd5e1"} strokeWidth={index === 2 ? "3" : "1.5"} />
              <text x={x + 56} y={y + 23} textAnchor="middle" fontSize="13" fontWeight="800" fill="#0f172a">
                {block}
              </text>
              <text x={x + 56} y={y + 39} textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748b">
                {index === 0 ? "raw" : index === 4 ? "usable" : "structured"}
              </text>
            </g>
          );
        })}
        <circle cx="360" cy="124" r="34" fill={accent.soft} stroke={accent.fill} strokeWidth="3" />
        <circle cx="360" cy="124" r="9" fill={accent.fill} />
      </svg>
    </div>
  );
}
