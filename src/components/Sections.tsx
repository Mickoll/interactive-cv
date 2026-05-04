import Link from "next/link";
import Image from "next/image";
import { ArrowDownToLine, ArrowRight, BriefcaseBusiness, CheckCircle2, Globe2, Mail } from "lucide-react";
import { caseStudies, profile, roleFit, skillGroups, timeline } from "@/data/profile";
import { accentFor, CaseStudyVisual, FlowStrip } from "@/components/VisualSystem";

export function MissionTimeline() {
  return (
    <section className="border-b border-slate-200 bg-white" id="timeline">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Career narrative</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950">From industrial operations to business automation</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The site should make the transition easy to understand: industrial systems, operational ownership, remote SaaS, then practical software tools for messy business workflows.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {timeline.map((item, index) => (
            <article key={item.period} className="grid gap-4 rounded-md border border-slate-200 bg-slate-50 p-5 md:grid-cols-[150px_1fr]">
              <div>
                <div className="text-sm font-black text-slate-950">{item.period}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{item.label}</div>
              </div>
              <div className="relative">
                <div className="absolute -left-8 top-1 hidden h-5 w-5 rounded-full border-4 border-white bg-emerald-500 shadow-sm md:block" aria-hidden="true" />
                {index < timeline.length - 1 ? <div className="absolute -left-[1.44rem] top-7 hidden h-[calc(100%+1.25rem)] w-px bg-slate-200 md:block" aria-hidden="true" /> : null}
                <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.signals.map((signal) => (
                    <span key={signal} className="rounded border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillMatrix() {
  return (
    <section className="border-b border-slate-200 bg-[#f8f4ea]" id="skills">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Skill matrix</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">Useful because the roles are hybrid</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The strongest positioning is not pure developer. It is business operator, product translator, and technical builder.
            </p>
            <div className="mt-6">
              <FlowStrip />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.name} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <Icon className="h-6 w-6 text-emerald-600" />
                    <span className="rounded border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-black uppercase tracking-[0.12em] text-slate-600">
                      {group.level}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-black text-slate-950">{group.name}</h3>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-5 text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseStudyMap() {
  return (
    <section className="border-b border-slate-200 bg-white" id="case-studies">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Project proof</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">Four case studies that make the pivot credible</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              SolarTrack is promoted because it is a deployed organizer with dashboards, forms, imports, navigation, and product workflow thinking.
            </p>
          </div>
          <a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700" href={profile.cvUrl}>
            <ArrowDownToLine className="h-4 w-4" />
            PDF CV
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {caseStudies.map((caseStudy) => {
            const accent = accentFor(caseStudy.accent);
            return (
              <article key={caseStudy.slug} className="rounded-md border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <CaseStudyVisual caseStudy={caseStudy} compact />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className={`text-sm font-bold ${accent.text}`}>{caseStudy.eyebrow}</p>
                    <h3 className="mt-1 text-xl font-black text-slate-950">{caseStudy.title}</h3>
                  </div>
                  <Link
                    className="rounded-md border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-slate-400 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    href={`/case-studies/${caseStudy.slug}`}
                    aria-label={`Read ${caseStudy.title}`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{caseStudy.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {caseStudy.stack.slice(0, 5).map((tech) => (
                    <span key={tech} className="rounded border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-md border border-slate-200 bg-slate-50 shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Art direction</p>
              <h3 className="mt-3 text-2xl font-black text-slate-950">Generated reference, implemented as usable UI</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                The visual references shape the palette and composition, while the actual site keeps content accessible, responsive, and recruiter-readable.
              </p>
            </div>
            <div className="relative min-h-72 border-t border-slate-200 lg:border-l lg:border-t-0">
              <Image
                alt="AI-generated four-panel case study art direction reference"
                className="h-full w-full object-cover"
                height={941}
                src="/images/case-study-grid-reference.png"
                width={1672}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RecruiterPanel() {
  return (
    <section className="bg-slate-950 text-white" id="recruiter-scan">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Recruiter scan</p>
          <h2 className="mt-3 text-3xl font-black">Remote operator who can build the workflow</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Best fit: roles where business process, data, stakeholders, and hands-on systems meet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-100" href={profile.cvUrl}>
              <ArrowDownToLine className="h-4 w-4" />
              Download CV
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-3 text-sm font-bold text-white transition hover:border-emerald-300 hover:text-emerald-200" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              Email Mickoll
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200" href={profile.linkedin}>
              <Globe2 className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {profile.recruiterSnapshot.map((item) => (
            <div key={item.label} className="rounded-md border border-white/12 bg-white/6 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{item.label}</div>
              <div className="mt-2 text-lg font-black text-white">{item.value}</div>
            </div>
          ))}
          <div className="rounded-md border border-white/12 bg-white/6 p-5 sm:col-span-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              <BriefcaseBusiness className="h-4 w-4 text-emerald-300" />
              Target roles
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {roleFit.map((role) => (
                <span key={role} className="rounded border border-white/15 bg-white/8 px-3 py-1.5 text-sm font-semibold text-slate-100">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
