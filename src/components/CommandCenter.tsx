"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import {
  ArrowDownToLine,
  ArrowRight,
  BriefcaseBusiness,
  Compass,
  ExternalLink,
  FileText,
  Mail,
  MousePointer2,
  Radar,
  Search,
  TerminalSquare,
} from "lucide-react";
import { caseStudies, profile, signalCards, valueNodes } from "@/data/profile";
import { accentFor } from "@/components/VisualSystem";

type Mode = "recruiter" | "explorer";

export function CommandCenter() {
  const [activeSlug, setActiveSlug] = useState(caseStudies[0].slug);
  const [activeNodeId, setActiveNodeId] = useState(valueNodes[0].id);
  const [mode, setMode] = useState<Mode>("recruiter");

  const activeCase = useMemo(
    () => caseStudies.find((caseStudy) => caseStudy.slug === activeSlug) ?? caseStudies[0],
    [activeSlug]
  );
  const activeNode = useMemo(
    () => valueNodes.find((node) => node.id === activeNodeId) ?? valueNodes[0],
    [activeNodeId]
  );
  const caseAccent = accentFor(activeCase.accent);
  const nodeAccent = accentFor(activeNode.accent);
  const ActiveCaseIcon = activeCase.icon;
  const ActiveNodeIcon = activeNode.icon;

  return (
    <section className="mission-hero relative overflow-hidden border-b border-slate-200 bg-[#f7f0e3]">
      <div className="command-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(16,185,129,0.16),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(6,182,212,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.36),rgba(255,255,255,0))]" />

      <div className="relative mx-auto grid min-h-[94svh] max-w-[1500px] gap-6 px-4 py-5 md:px-7 lg:grid-cols-[78px_minmax(0,0.92fr)_minmax(520px,1.25fr)] lg:px-8">
        <aside className="no-print hidden rounded-lg border border-slate-200/80 bg-white/78 p-3 shadow-sm backdrop-blur xl:block">
          <div className="grid h-full grid-rows-[auto_1fr_auto] gap-4">
            <div className="grid h-12 place-items-center rounded bg-slate-950 text-white">
              <TerminalSquare className="h-5 w-5" />
            </div>
            <nav className="flex flex-col items-center gap-3 pt-3" aria-label="Section shortcuts">
              {[
                { href: "#value-map", label: "Value map", icon: Radar },
                { href: "#timeline", label: "Timeline", icon: Compass },
                { href: "#case-studies", label: "Case studies", icon: BriefcaseBusiness },
                { href: "#recruiter-scan", label: "Recruiter scan", icon: FileText },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    aria-label={item.label}
                    className="grid h-11 w-11 place-items-center rounded border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700"
                    href={item.href}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </nav>
            <div className="grid place-items-center rounded border border-emerald-200 bg-emerald-50 py-3 text-xs font-black uppercase tracking-[0.18em] text-emerald-700 [writing-mode:vertical-rl]">
              remote
            </div>
          </div>
        </aside>

        <div className="flex flex-col justify-center py-7 lg:py-10">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white/82 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Interactive Operations Mission Control
          </div>

          <h1 className="max-w-4xl text-[clamp(3.2rem,9vw,7.8rem)] font-black leading-[0.87] tracking-[-0.02em] text-slate-950">
            Mickoll Marin
          </h1>
          <p className="mt-6 max-w-2xl text-[clamp(1.35rem,3vw,2.45rem)] font-black leading-[1.05] text-slate-900">
            Business operator + product translator + data/workflow automation builder.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            {profile.headline} I turn messy business workflows into structured outputs people can actually use.
          </p>

          <div className="mt-7 rounded-lg border border-slate-300 bg-white/86 p-2 shadow-sm backdrop-blur">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 px-2 text-sm font-bold text-slate-500">
                <Search className="h-4 w-4" />
                mode
              </div>
              {(["recruiter", "explorer"] as const).map((nextMode) => (
                <button
                  key={nextMode}
                  className={clsx(
                    "rounded px-3 py-2 text-sm font-black capitalize transition focus:outline-none focus:ring-2 focus:ring-emerald-500",
                    mode === nextMode ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  )}
                  onClick={() => setMode(nextMode)}
                  type="button"
                >
                  {nextMode}
                </button>
              ))}
              <div className="ml-auto hidden items-center gap-2 rounded bg-slate-100 px-3 py-2 text-xs font-bold text-slate-500 md:flex">
                <MousePointer2 className="h-3.5 w-3.5" />
                click nodes
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <a className="mission-button bg-slate-950 text-white hover:bg-slate-800" href={profile.cvUrl}>
              <ArrowDownToLine className="h-4 w-4" />
              Download CV
            </a>
            <a className="mission-button border border-slate-300 bg-white text-slate-950 hover:border-emerald-400 hover:text-emerald-700" href={mode === "recruiter" ? "#recruiter-scan" : "#case-studies"}>
              <Radar className="h-4 w-4" />
              {mode === "recruiter" ? "Fast scan" : "Explore proof"}
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
                <div key={card.label} className="rounded-lg border border-slate-200 bg-white/82 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.13em] text-slate-500">
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

        <div className="grid content-center gap-4 py-4 lg:py-6" id="value-map">
          <div className="rounded-lg border border-slate-300 bg-slate-950 p-3 shadow-[0_28px_90px_-50px_rgba(15,23,42,0.92)]">
            <div className="scan-line overflow-hidden rounded-lg border border-white/10 bg-[#07111f]">
              <div className="grid gap-0 xl:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[430px] overflow-hidden p-4 sm:p-6">
                  <Image
                    alt="Command center art direction reference"
                    className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
                    height={941}
                    priority
                    src="/images/command-center-reference.png"
                    width={1672}
                  />
                  <div className="absolute inset-0 command-radar" />
                  <div className="relative mb-5 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">Value constellation</p>
                      <h2 className="mt-2 text-2xl font-black text-white">Messy work becomes an operating system</h2>
                    </div>
                    <div className={clsx("hidden rounded border p-3 sm:block", nodeAccent.border, nodeAccent.bg)}>
                      <ActiveNodeIcon className={clsx("h-6 w-6", nodeAccent.text)} />
                    </div>
                  </div>

                  <svg className="absolute inset-x-4 top-[6.5rem] h-[280px] w-[calc(100%-2rem)] sm:inset-x-6 sm:w-[calc(100%-3rem)]" viewBox="0 0 100 100" aria-hidden="true">
                    <path d="M17 52 L37 24 L61 33 L77 58 L53 76 L28 78 Z" fill="none" stroke="rgba(148,163,184,0.42)" strokeWidth="0.7" strokeDasharray="2 2" />
                    <path className="orbit-path" d="M17 52 C30 28 58 18 77 58 S43 92 17 52" fill="none" stroke="rgba(16,185,129,0.55)" strokeWidth="0.65" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(255,255,255,0.08)" />
                    <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.06)" />
                  </svg>

                  <div className="relative h-[350px]">
                    <button
                      className="absolute left-1/2 top-1/2 z-10 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-emerald-300/50 bg-white text-center text-sm font-black text-slate-950 shadow-[0_0_50px_rgba(16,185,129,0.26)]"
                      onClick={() => setActiveNodeId(activeNode.id)}
                      type="button"
                    >
                      <span>Value<br />engine</span>
                    </button>
                    {valueNodes.map((node) => {
                      const Icon = node.icon;
                      const itemAccent = accentFor(node.accent);
                      const isActive = node.id === activeNode.id;
                      return (
                        <button
                          key={node.id}
                          className={clsx(
                            "constellation-node absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded border px-3 py-2 text-left shadow-lg backdrop-blur transition focus:outline-none focus:ring-2 focus:ring-emerald-300",
                            isActive ? "scale-105 border-white bg-white text-slate-950" : "border-white/15 bg-white/10 text-white hover:scale-105 hover:bg-white/18"
                          )}
                          onClick={() => setActiveNodeId(node.id)}
                          style={{ left: `${node.x}%`, top: `${node.y}%` }}
                          type="button"
                        >
                          <span className="flex items-center gap-2">
                            <Icon className={clsx("h-4 w-4", isActive ? itemAccent.text : "text-emerald-200")} />
                            <span className="text-xs font-black uppercase tracking-[0.14em]">{node.label}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-white/10 bg-white/[0.04] p-4 sm:p-6 xl:border-l xl:border-t-0">
                  <div className="rounded-lg border border-white/10 bg-white/8 p-5">
                    <p className={clsx("text-sm font-black uppercase tracking-[0.16em]", nodeAccent.text)}>{activeNode.title}</p>
                    <p className="mt-3 text-lg leading-7 text-slate-100">{activeNode.detail}</p>
                  </div>

                  <div className="mt-4 rounded-lg border border-white/10 bg-slate-950/38 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={clsx("text-sm font-bold", caseAccent.text)}>{mode === "recruiter" ? "Strongest proof" : activeCase.eyebrow}</p>
                        <h3 className="mt-1 text-2xl font-black leading-tight text-white">{activeCase.title}</h3>
                      </div>
                      <ActiveCaseIcon className={clsx("h-7 w-7 flex-none", caseAccent.text)} />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-300">{mode === "recruiter" ? activeCase.output : activeCase.summary}</p>

                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {activeCase.metrics.map((metric) => (
                        <div key={metric} className="rounded-xl border border-white/10 bg-white/8 px-2 py-2 text-center text-[0.68rem] font-black uppercase tracking-[0.1em] text-slate-200">
                          {metric}
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-2">
                      {caseStudies.map((caseStudy) => {
                        const isActive = caseStudy.slug === activeCase.slug;
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
                            <span>
                              <span className="block text-[0.68rem] font-black uppercase tracking-[0.14em] opacity-70">{caseStudy.eyebrow}</span>
                              <span className="mt-0.5 block text-sm font-black">{caseStudy.shortTitle}</span>
                            </span>
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                          </button>
                        );
                      })}
                    </div>

                    <a
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                      href={`/case-studies/${activeCase.slug}`}
                    >
                      Open module
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {profile.targetRoles.slice(0, 6).map((role) => (
              <div key={role} className="rounded-lg border border-slate-200 bg-white/82 px-3 py-3 text-sm font-black text-slate-800 shadow-sm">
                {role}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
