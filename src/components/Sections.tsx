import Link from "next/link";
import Image from "next/image";
import {
  ArrowDownToLine,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Globe2,
  Mail,
  Network,
  Sparkles,
} from "lucide-react";
import { caseStudies, profile, roleFit, skillGroups, timeline, workflowStages } from "@/data/profile";
import { accentFor, CaseStudyVisual } from "@/components/VisualSystem";

export function ValuePipeline() {
  return (
    <section className="border-b border-slate-200 bg-white" id="value-pipeline">
      <div className="mx-auto max-w-[1500px] px-4 py-16 md:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="section-kicker text-emerald-700">How I create value</p>
            <h2 className="mt-3 max-w-xl text-4xl font-black leading-tight text-slate-950">
              A practical machine for turning operational mess into decisions.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              The creative concept is not decoration. It mirrors the actual work: capture messy inputs, define the workflow, structure the data, automate outputs, and make the next business decision easier.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-[#f8f4ea] p-4 shadow-sm">
            <div className="grid gap-3 md:grid-cols-5">
              {workflowStages.map((stage, index) => (
                <article key={stage.label} className="group relative min-h-52 overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-100 opacity-0 transition group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded bg-slate-950 text-sm font-black text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {index < workflowStages.length - 1 ? <ArrowRight className="hidden h-4 w-4 text-slate-300 md:block" /> : <Sparkles className="h-4 w-4 text-amber-500" />}
                    </div>
                    <h3 className="text-lg font-black text-slate-950">{stage.label}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{stage.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MissionTimeline() {
  return (
    <section className="border-b border-slate-200 bg-[#f8f4ea]" id="timeline">
      <div className="mx-auto max-w-[1500px] px-4 py-16 md:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker text-cyan-700">Career route</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-950">
              The transition is the point: operator first, builder second.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            A recruiter should quickly see why this profile fits hybrid roles: operations judgment, SaaS context, and enough technical execution to build the missing workflow.
          </p>
        </div>

        <div className="relative mt-12 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-400 lg:block" />
          {timeline.map((item, index) => (
            <article key={item.period} className="module-card relative overflow-hidden rounded-lg p-5">
              <div className="absolute right-4 top-4 text-7xl font-black leading-none text-slate-100">
                {index + 1}
              </div>
              <div className="relative">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded border border-slate-200 bg-white text-lg font-black text-slate-950 shadow-sm">
                  {index === 0 ? "IE" : index === 1 ? "OPS" : index === 2 ? "SaaS" : "AI"}
                </div>
                <p className="text-sm font-black text-slate-950">{item.period}</p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">{item.label}</p>
                <h3 className="mt-4 text-xl font-black leading-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.signals.slice(0, 4).map((signal) => (
                    <span key={signal} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-700">
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

export function CaseStudyMap() {
  return (
    <section className="border-b border-slate-200 bg-white" id="case-studies">
      <div className="mx-auto max-w-[1500px] px-4 py-16 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker text-amber-700">Product modules</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-950">
              Four projects, shown as workflow systems rather than portfolio thumbnails.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Each project is framed honestly: the problem, the system designed, the output, and what it proves about Mickoll as a hire.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
              <Image
                alt="AI-generated case study art direction reference"
                className="h-full w-full object-cover opacity-90"
                height={941}
                src="/images/case-study-grid-reference.png"
                width={1672}
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {caseStudies.map((caseStudy) => {
              const accent = accentFor(caseStudy.accent);
              return (
                <article key={caseStudy.slug} className="group module-card rounded-lg p-4 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
                  <CaseStudyVisual caseStudy={caseStudy} compact />
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className={`text-sm font-black uppercase tracking-[0.13em] ${accent.text}`}>{caseStudy.eyebrow}</p>
                      <h3 className="mt-2 text-2xl font-black leading-tight text-slate-950">{caseStudy.title}</h3>
                    </div>
                    <Link
                      className="grid h-11 w-11 flex-none place-items-center rounded border border-slate-200 bg-white text-slate-700 transition group-hover:border-slate-400 group-hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      href={`/case-studies/${caseStudy.slug}`}
                      aria-label={`Read ${caseStudy.title}`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <MiniProof label="Problem" value={caseStudy.problem} />
                    <MiniProof label="Output" value={caseStudy.output} />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {caseStudy.stack.slice(0, 5).map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniProof({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
      <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-1 line-clamp-3 text-sm leading-5 text-slate-600">{value}</p>
    </div>
  );
}

export function SkillMatrix() {
  return (
    <section className="border-b border-slate-200 bg-[#f8f4ea]" id="skills">
      <div className="mx-auto max-w-[1500px] px-4 py-16 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-kicker text-emerald-700">Operating system</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-950">
              Skills organized by what they make possible.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              This keeps the site recruiter-readable while still feeling like a cockpit: layers, inputs, outputs, and operating modes.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.name} className="module-card group rounded-lg p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg">
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded bg-slate-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-slate-600">
                      {group.level}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-black text-slate-950">{group.name}</h3>
                  <p className="mt-2 text-sm font-bold text-emerald-700">{group.operatingMode}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{group.output}</p>
                  <ul className="mt-4 space-y-2">
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

export function RecruiterPanel() {
  return (
    <section className="bg-slate-950 text-white" id="recruiter-scan">
      <div className="mx-auto grid max-w-[1500px] gap-8 px-4 py-16 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
        <div>
          <p className="section-kicker text-emerald-300">Recruiter mode</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight">
            Fast answer: he understands operations and can build the missing workflow.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Best fit: implementation, solutions, product operations, RevOps, BI/data, and technical product roles where business process, data, stakeholders, and hands-on systems meet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="mission-button bg-white text-slate-950 hover:bg-emerald-100" href={profile.cvUrl}>
              <ArrowDownToLine className="h-4 w-4" />
              Download CV
            </a>
            <a className="mission-button border border-white/20 text-white hover:border-emerald-300 hover:text-emerald-200" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              Email Mickoll
            </a>
            <a className="mission-button border border-white/20 text-white hover:border-cyan-300 hover:text-cyan-200" href={profile.linkedin}>
              <Globe2 className="h-4 w-4" />
              LinkedIn
            </a>
            <Link className="mission-button border border-white/20 text-white hover:border-amber-300 hover:text-amber-200" href="/resume">
              <FileText className="h-4 w-4" />
              Printable resume
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {profile.recruiterSnapshot.map((item) => (
            <div key={item.label} className="rounded-lg border border-white/12 bg-white/6 p-5">
              <div className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">{item.label}</div>
              <div className="mt-2 text-lg font-black text-white">{item.value}</div>
            </div>
          ))}
          <div className="rounded-lg border border-white/12 bg-white/6 p-5 sm:col-span-2">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
              <BriefcaseBusiness className="h-4 w-4 text-emerald-300" />
              Target roles
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {roleFit.map((role) => (
                <span key={role} className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-sm font-semibold text-slate-100">
                  {role}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/8 p-5 sm:col-span-2">
            <div className="flex gap-3">
              <Network className="mt-1 h-5 w-5 flex-none text-emerald-300" />
              <p className="text-sm leading-6 text-slate-200">
                Open to remote EU, UK, and global teams. Especially strong where the role needs process ownership, product translation, analytics, and practical automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
