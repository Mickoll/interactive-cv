"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ArrowDownToLine, ExternalLink, Mail, Radar, Send } from "lucide-react";
import { caseStudies, profile, signalCards } from "@/data/profile";
import { accentFor } from "@/components/VisualSystem";

export function CommandCenter() {
  const [activeSlug, setActiveSlug] = useState(caseStudies[0].slug);
  const active = useMemo(
    () => caseStudies.find((caseStudy) => caseStudy.slug === activeSlug) ?? caseStudies[0],
    [activeSlug]
  );
  const accent = accentFor(active.accent);
  const ActiveIcon = active.icon;

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#f8f4ea]">
      <div className="command-grid absolute inset-0 opacity-85" />
      <div className="relative mx-auto grid min-h-[88svh] max-w-7xl gap-10 px-5 py-8 md:grid-cols-[0.92fr_1.08fr] md:px-8 lg:px-10">
        <div className="flex flex-col justify-center">
          <div className="mb-8 flex flex-wrap gap-2">
            {profile.targetRoles.slice(0, 4).map((role) => (
              <span key={role} className="rounded border border-slate-300 bg-white/80 px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                {role}
              </span>
            ))}
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Remote from Spain
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-normal text-slate-950">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-2xl font-bold leading-tight text-slate-800">
            {profile.role}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500" href={profile.cvUrl}>
              <ArrowDownToLine className="h-4 w-4" />
              Download CV
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500" href="#case-studies">
              <Radar className="h-4 w-4" />
              View proof
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:border-cyan-400 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full rounded-md border border-slate-300 bg-white/92 p-4 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.8)]">
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Mission control</p>
                <p className="mt-1 text-lg font-black text-slate-950">Operations, data, and product proof</p>
              </div>
              <div className={clsx("rounded-md border p-3", accent.border, accent.bg)}>
                <ActiveIcon className={clsx("h-6 w-6", accent.text)} />
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[0.7fr_1fr]">
              <div className="space-y-2">
                {caseStudies.map((caseStudy) => {
                  const isActive = caseStudy.slug === active.slug;
                  const itemAccent = accentFor(caseStudy.accent);
                  return (
                    <button
                      key={caseStudy.slug}
                      className={clsx(
                        "w-full rounded-md border px-3 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-emerald-500",
                        isActive ? clsx(itemAccent.border, itemAccent.bg, "shadow-sm") : "border-slate-200 bg-white hover:border-slate-300"
                      )}
                      onClick={() => setActiveSlug(caseStudy.slug)}
                      type="button"
                    >
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{caseStudy.eyebrow}</span>
                      <span className="mt-1 block text-sm font-black text-slate-950">{caseStudy.shortTitle}</span>
                    </button>
                  );
                })}
              </div>

              <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className={clsx("text-sm font-bold", accent.text)}>{active.eyebrow}</p>
                    <h2 className="mt-1 text-2xl font-black leading-tight text-slate-950">{active.title}</h2>
                  </div>
                  <a
                    className="rounded-md border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-slate-400 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    href={`/case-studies/${active.slug}`}
                    aria-label={`Open ${active.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{active.summary}</p>

                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {active.metrics.map((metric) => (
                    <div key={metric} className="rounded border border-slate-200 bg-white px-3 py-2 text-center text-xs font-black uppercase tracking-[0.12em] text-slate-700">
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="relative mt-5 h-40 overflow-hidden rounded-md border border-slate-200 bg-white p-3">
                  <Image
                    alt="AI-generated command-center art direction reference"
                    className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
                    height={941}
                    priority
                    src="/images/command-center-reference.png"
                    width={1672}
                  />
                  <svg className="h-full w-full" viewBox="0 0 420 170" role="img" aria-label="Command center workflow diagram">
                    <rect x="0" y="0" width="420" height="170" rx="6" fill="#f8fafc" />
                    <path d="M44 121 C92 35 139 121 190 74 S285 27 365 88" fill="none" stroke={accent.fill} strokeWidth="6" strokeLinecap="round" />
                    <path d="M44 130 C121 105 160 147 213 116 S302 116 366 58" fill="none" stroke="#0f172a" strokeWidth="2" strokeDasharray="7 9" opacity="0.32" />
                    {[44, 190, 365].map((x, index) => (
                      <g key={x}>
                        <circle cx={x} cy={index === 0 ? 121 : index === 1 ? 74 : 88} r="18" fill="white" stroke={accent.fill} strokeWidth="4" />
                        <circle cx={x} cy={index === 0 ? 121 : index === 1 ? 74 : 88} r="5" fill="#0f172a" />
                      </g>
                    ))}
                    <rect x="24" y="24" width="110" height="12" rx="3" fill="#0f172a" opacity="0.72" />
                    <rect x="24" y="45" width="72" height="9" rx="3" fill={accent.fill} opacity="0.82" />
                    <rect x="263" y="24" width="116" height="12" rx="3" fill="#0f172a" opacity="0.26" />
                    <rect x="263" y="45" width="84" height="9" rx="3" fill={accent.fill} opacity="0.82" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {signalCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.label} className="rounded-md border border-slate-200 bg-white px-3 py-3">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      <Icon className="h-4 w-4 text-emerald-600" />
                      {card.label}
                    </div>
                    <div className="mt-2 text-2xl font-black text-slate-950">{card.value}</div>
                    <div className="text-sm text-slate-600">{card.detail}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pb-8 md:px-8 lg:px-10">
        <a className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-950" href="#recruiter-scan">
          <Send className="h-4 w-4 text-emerald-600" />
          Recruiter scan available below
        </a>
      </div>
    </section>
  );
}
