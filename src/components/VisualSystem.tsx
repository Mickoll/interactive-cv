"use client";

import Image from "next/image";
import clsx from "clsx";
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
          <figcaption className={clsx("truncate text-sm font-black", dark ? "text-white" : "text-slate-950")}>
            {caseStudy.shortTitle}
          </figcaption>
          <p className={clsx("mt-1 truncate text-xs font-bold", dark ? "text-slate-400" : "text-slate-500")}>
            {caseStudy.role}
          </p>
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

      <div className={clsx("mt-3 grid-cols-3 gap-2", compact ? "hidden sm:grid" : "grid")}>
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
