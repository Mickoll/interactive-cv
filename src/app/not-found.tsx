import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#F6F1E8] px-5 text-[#0D1828]">
      <section className="max-w-xl rounded-[18px] border border-[rgba(20,35,50,0.10)] bg-[#FFFCF7] p-8 shadow-[0_24px_80px_rgba(13,18,32,0.10)]">
        <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#A16207]">404</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.02em]">Page not found</h1>
        <p className="mt-3 text-base leading-7 text-[#516070]">
          This portfolio route does not exist. The public CV, case studies, and resume are available from the links below.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#071526] px-4 text-sm font-extrabold text-white focus:outline-none focus:ring-2 focus:ring-[#08A8C7]" href="/">
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
          <Link className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[rgba(13,24,40,0.14)] px-4 text-sm font-extrabold text-[#0D1828] focus:outline-none focus:ring-2 focus:ring-[#08A8C7]" href="/resume">
            <FileText className="h-4 w-4" />
            Resume
          </Link>
        </div>
      </section>
    </main>
  );
}
