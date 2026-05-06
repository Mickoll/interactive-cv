import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { caseStudies, getCaseStudy, profile } from "@/data/profile";
import { accentFor, ArchitectureDiagram, CaseStudyVisual, WorkflowRun } from "@/components/VisualSystem";

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) {
    return {};
  }

  return {
    title: `${caseStudy.title} | Mickoll Marin`,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const accent = accentFor(caseStudy.accent);
  const Icon = caseStudy.icon;

  return (
    <main className="min-h-screen bg-[#f4efe4] text-slate-950">
      <section className="no-print border-b border-white/10 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-5 py-5 md:px-8 lg:px-10">
          <Link className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-white" href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to cockpit
          </Link>
          <Link className="hidden items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-white sm:inline-flex" href="/resume">
            Resume
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-slate-900 bg-slate-950 text-white">
        <div className="cockpit-grid absolute inset-0 opacity-90" />
        <div className="relative mx-auto grid max-w-[1320px] gap-8 px-5 py-12 md:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:px-10 lg:py-16">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/14 bg-white/8 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-200">
              <Icon className={`h-4 w-4 ${accent.textDark}`} />
              {caseStudy.eyebrow}
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[0.98] tracking-tight md:text-6xl">
              {caseStudy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{caseStudy.summary}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <HeroFact label="Role" value={caseStudy.role} />
              <HeroFact label="Output" value={caseStudy.output} />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {caseStudy.metrics.map((metric) => (
                <span key={metric} className="rounded-lg border border-white/12 bg-white/8 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-slate-100">
                  {metric}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <CaseStudyVisual caseStudy={caseStudy} dark />
            <WorkflowRun caseStudy={caseStudy} dark />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <section className="module-card rounded-[22px] p-6">
              <div className="flex items-center gap-3">
                <div className={`grid h-11 w-11 place-items-center rounded-xl border ${accent.border} ${accent.bg}`}>
                  <FileText className={`h-5 w-5 ${accent.text}`} />
                </div>
                <div>
                  <p className="section-kicker text-slate-500">Problem / constraints</p>
                  <h2 className="mt-1 text-2xl font-black text-slate-950">Why this needed a system</h2>
                </div>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-600">{caseStudy.problem}</p>
              <div className="mt-6 space-y-3">
                {caseStudy.constraints.map((constraint) => (
                  <div key={constraint} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                    <ShieldCheck className={`mt-0.5 h-4 w-4 flex-none ${accent.text}`} />
                    <span>{constraint}</span>
                  </div>
                ))}
              </div>
            </section>

            <ArchitectureDiagram caseStudy={caseStudy} />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <DetailBlock title="System designed" icon={<Layers3 className={`h-5 w-5 ${accent.text}`} />} items={caseStudy.built} />
            <DetailBlock title="Output / impact" icon={<ArrowRight className={`h-5 w-5 ${accent.text}`} />} items={caseStudy.value} />
            <DetailBlock title="What this proves" icon={<Sparkles className={`h-5 w-5 ${accent.text}`} />} items={caseStudy.proves} />
          </div>

          <section className="mt-8 rounded-[24px] border border-slate-200 bg-[#f4efe4] p-5 md:p-6">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="section-kicker text-slate-500">Stack and evidence</p>
                <h2 className="mt-2 text-2xl font-black text-slate-950">Built around the real workflow</h2>
              </div>
              <Link className="inline-flex w-fit items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-slate-800" href="/resume">
                Printable resume
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
              <div className="flex flex-wrap gap-2">
                {caseStudy.stack.map((tech) => (
                  <span key={tech} className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="grid gap-2">
                {caseStudy.proof.map((proof) => (
                  <div key={proof} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 className={`h-4 w-4 flex-none ${accent.text}`} />
                    {proof}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-6 px-5 py-10 md:flex-row md:items-center md:px-8 lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">Next step</p>
            <h2 className="mt-2 text-2xl font-black">Return to the interactive CV</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950" href="/">
              Cockpit
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-bold text-white transition hover:border-emerald-300 hover:text-emerald-200" href={profile.cvUrl}>
              Download CV
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/12 bg-white/7 p-4">
      <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-2 text-sm font-bold leading-6 text-slate-200">{value}</p>
    </div>
  );
}

function DetailBlock({ title, icon, items }: { title: string; icon: ReactNode; items: string[] }) {
  return (
    <section className="module-card rounded-[22px] p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white">
          {icon}
        </div>
        <h2 className="text-xl font-black text-slate-950">{title}</h2>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
