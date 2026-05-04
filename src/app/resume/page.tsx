import Link from "next/link";
import { ArrowLeft, ArrowDownToLine, Mail } from "lucide-react";
import { profile, skillGroups, timeline } from "@/data/profile";

export const metadata = {
  title: "Resume | Mickoll Marin",
  description: "Printable resume page for Mickoll Marin.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <div className="no-print border-b border-slate-200 bg-[#f8f4ea]">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4 md:px-8">
          <Link className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-950" href="/">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="flex gap-3">
            <a className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-sm font-bold text-white" href={profile.cvUrl}>
              <ArrowDownToLine className="h-4 w-4" />
              PDF
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-5xl px-5 py-12 md:px-8 print:px-0">
        <header>
          <h1 className="text-4xl font-black">{profile.name}</h1>
          <p className="mt-2 text-xl font-bold text-slate-800">{profile.role}</p>
          <p className="mt-3 text-sm text-slate-600">
            {profile.location} | {profile.email} | {profile.phone} | linkedin.com/in/mickollmarin
          </p>
          <p className="mt-6 max-w-4xl text-base leading-7 text-slate-700">{profile.headline}</p>
        </header>

        <ResumeSection title="Target roles">
          <p className="text-sm leading-6 text-slate-700">{profile.targetRoles.join(" | ")}</p>
        </ResumeSection>

        <ResumeSection title="Core skills">
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.name}>
                <h3 className="font-black text-slate-950">{group.name}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">{group.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Experience narrative">
          <div className="space-y-5">
            {timeline.map((item) => (
              <div key={item.period}>
                <div className="text-sm font-black text-slate-950">{item.period} | {item.title}</div>
                <p className="mt-1 text-sm leading-6 text-slate-700">{item.summary}</p>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
            <li>MBA, Universidad Isabel I, Barcelona, Spain, 2020.</li>
            <li>Master in Big Data and Business Intelligence, ISEB, Barcelona, Spain, 2019. Cum Laude.</li>
            <li>Industrial Engineering Degree, Universidad Yacambu, Barquisimeto, Venezuela, 2018.</li>
          </ul>
        </ResumeSection>
      </article>
    </main>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 border-t border-slate-200 pt-5">
      <h2 className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-slate-500">{title}</h2>
      {children}
    </section>
  );
}

