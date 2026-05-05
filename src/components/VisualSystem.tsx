import clsx from "clsx";
import { ArrowRight, CalendarDays, CheckCircle2, CircleDot, Database, FileText, Home, ImageIcon, MapPin, Table2, Workflow } from "lucide-react";
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
        "case-module relative overflow-hidden rounded-lg border bg-white shadow-sm",
        accent.border,
        compact ? "min-h-52" : "min-h-[24rem]"
      )}
      aria-label={`${caseStudy.title} representative product preview`}
    >
      <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: accent.fill }} />
      <div className={clsx("flex h-full flex-col gap-4 p-4 pt-5", compact ? "min-h-52" : "min-h-[24rem]")}>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Product preview</p>
            <h3 className="mt-1 text-base font-black text-slate-950">{caseStudy.shortTitle}</h3>
          </div>
          <div className="rounded border border-slate-200 bg-white p-2 shadow-sm">
            <Icon className={clsx("h-5 w-5", accent.text)} />
          </div>
        </div>

        <PreviewMock caseStudy={caseStudy} />

        <div className="grid grid-cols-3 gap-2">
          {caseStudy.metrics.map((metric) => (
            <div key={metric} className="rounded border border-slate-200 bg-slate-50 px-2 py-2 text-center text-xs font-bold text-slate-700">
              {metric}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewMock({ caseStudy }: { caseStudy: CaseStudy }) {
  const accent = accentFor(caseStudy.accent);

  if (caseStudy.slug === "solartrack-workflow-pwa") {
    return (
      <div className="grid flex-1 gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
        <div className="grid grid-cols-3 gap-2">
          {["Visits", "Reports", "Open"].map((label, index) => (
            <div key={label} className="rounded border border-slate-200 bg-white p-2">
              <p className="text-[0.65rem] font-black uppercase tracking-[0.1em] text-slate-500">{label}</p>
              <p className="mt-1 text-xl font-black text-slate-950">{[24, 18, 6][index]}</p>
            </div>
          ))}
        </div>
        <div className="grid min-h-36 gap-3 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded border border-slate-200 bg-white p-3">
            <div className="mb-2 flex items-center gap-2 text-xs font-black text-slate-600">
              <CalendarDays className={clsx("h-4 w-4", accent.text)} />
              Visit calendar
            </div>
            <div className="grid grid-cols-5 gap-1">
              {Array.from({ length: 20 }).map((_, index) => (
                <span key={index} className={clsx("h-6 rounded", index % 6 === 0 ? "bg-emerald-200" : index % 4 === 0 ? "bg-amber-200" : "bg-slate-100")} />
              ))}
            </div>
          </div>
          <div className="rounded border border-slate-200 bg-white p-3">
            {["Pending report", "Advisor follow-up", "Client visit"].map((item, index) => (
              <div key={item} className="flex items-center justify-between border-b border-slate-100 py-2 last:border-0">
                <span className="text-xs font-bold text-slate-700">{item}</span>
                <span className={clsx("rounded px-2 py-1 text-[0.65rem] font-black", index === 0 ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700")}>
                  {index === 0 ? "open" : "ok"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (caseStudy.slug === "real-estate-pricing-intelligence") {
    return (
      <div className="grid flex-1 gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 md:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded border border-slate-200 bg-white p-3">
          <div className="mb-3 flex items-center gap-2 text-xs font-black text-slate-600">
            <MapPin className={clsx("h-4 w-4", accent.text)} />
            Price zones
          </div>
          <div className="grid h-40 grid-cols-4 gap-1">
            {Array.from({ length: 28 }).map((_, index) => (
              <span key={index} className={clsx("rounded", index % 7 === 0 ? "bg-cyan-300" : index % 5 === 0 ? "bg-amber-200" : "bg-slate-100")} />
            ))}
          </div>
        </div>
        <div className="rounded border border-slate-200 bg-white p-3">
          <div className="mb-3 flex items-center gap-2 text-xs font-black text-slate-600">
            <Home className={clsx("h-4 w-4", accent.text)} />
            Comparable listings
          </div>
          {["Freshness", "Confidence", "Duplicates", "Median price"].map((item, index) => (
            <div key={item} className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-slate-100 py-2 last:border-0">
              <span className="text-xs font-bold text-slate-700">{item}</span>
              <span className="text-xs font-black text-slate-950">{["92%", "High", "12", "Indexed"][index]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (caseStudy.slug === "industrial-qaqc-data-automation") {
    return (
      <div className="grid flex-1 gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 md:grid-cols-[1fr_1fr]">
        <div className="rounded border border-slate-200 bg-white p-3">
          <div className="mb-3 flex items-center gap-2 text-xs font-black text-slate-600">
            <Table2 className={clsx("h-4 w-4", accent.text)} />
            Master index
          </div>
          {["Document ID", "Equipment tag", "Status", "Reviewer"].map((item) => (
            <div key={item} className="grid grid-cols-[1fr_52px] gap-2 border-b border-slate-100 py-2 last:border-0">
              <span className="text-xs font-bold text-slate-700">{item}</span>
              <span className="h-3 rounded bg-slate-200" />
            </div>
          ))}
        </div>
        <div className="rounded border border-slate-200 bg-white p-3">
          <div className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-slate-500">Validation</div>
          {["Coverage checked", "Anomalies flagged", "QA approved"].map((item) => (
            <div key={item} className="flex items-center gap-2 py-2">
              <CheckCircle2 className={clsx("h-4 w-4", accent.text)} />
              <span className="text-xs font-bold text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid flex-1 gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 md:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded border border-slate-200 bg-white p-3">
        <div className="mb-3 flex items-center gap-2 text-xs font-black text-slate-600">
          <ImageIcon className={clsx("h-4 w-4", accent.text)} />
          Inspection assets
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="aspect-[4/3] rounded border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 p-2">
              <span className={clsx("block h-2 w-10 rounded", accent.bg)} />
            </div>
          ))}
        </div>
      </div>
      <div className="rounded border border-slate-200 bg-white p-3">
        <div className="mb-3 flex items-center gap-2 text-xs font-black text-slate-600">
          <FileText className={clsx("h-4 w-4", accent.text)} />
          Report builder
        </div>
        {["Issue catalog", "Photo annotations", "DOCX export"].map((item) => (
          <div key={item} className="flex items-center justify-between border-b border-slate-100 py-2 last:border-0">
            <span className="text-xs font-bold text-slate-700">{item}</span>
            <CheckCircle2 className={clsx("h-4 w-4", accent.text)} />
          </div>
        ))}
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
