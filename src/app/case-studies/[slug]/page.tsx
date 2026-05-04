import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { caseStudies, getCaseStudy, profile } from "@/data/profile";
import { accentFor, CaseStudyVisual, FlowStrip } from "@/components/VisualSystem";

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

  return (
    <main className="min-h-screen bg-[#f8f4ea]">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 lg:px-10">
          <Link className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-950" href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to command center
          </Link>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f8f4ea]">
        <div className="command-grid mx-auto grid max-w-6xl gap-8 px-5 py-12 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${accent.text}`}>{caseStudy.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950">{caseStudy.title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">{caseStudy.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {caseStudy.metrics.map((metric) => (
                <span key={metric} className="rounded border border-slate-300 bg-white px-3 py-1.5 text-sm font-black uppercase tracking-[0.12em] text-slate-700">
                  {metric}
                </span>
              ))}
            </div>
          </div>
          <CaseStudyVisual caseStudy={caseStudy} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <h2 className="text-2xl font-black text-slate-950">Business problem</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{caseStudy.problem}</p>
              <div className="mt-8">
                <FlowStrip />
              </div>
            </div>
            <div className="grid gap-5">
              <DetailBlock title="What I built" items={caseStudy.built} />
              <DetailBlock title="Business value" items={caseStudy.value} />
              <DetailBlock title="Sanitized proof" items={caseStudy.proof} />
            </div>
          </div>

          <div className="mt-12 rounded-md border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-2xl font-black text-slate-950">Stack</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {caseStudy.stack.map((tech) => (
                <span key={tech} className="rounded border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-5 py-10 md:flex-row md:items-center md:px-8 lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">Next step</p>
            <h2 className="mt-2 text-2xl font-black">Review the full interactive CV</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-bold text-slate-950" href="/">
              Command center
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-3 text-sm font-bold text-white" href={profile.cvUrl}>
              Download CV
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-md border border-slate-200 bg-slate-50 p-5">
      <h2 className="text-xl font-black text-slate-950">{title}</h2>
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
