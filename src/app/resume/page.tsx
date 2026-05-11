import { ResumeClient } from "@/components/ResumeClient";

export const metadata = {
  title: "Resume | Mickoll Marin",
  description:
    "Printable ATS-friendly resume for Mickoll Marin, focused on SaaS implementation, operations automation, product operations, RevOps, and BI/data roles.",
  alternates: {
    canonical: "/resume",
    languages: {
      en: "/resume",
      es: "/resume?lang=es",
    },
  },
  openGraph: {
    title: "Resume | Mickoll Marin",
    description:
      "ATS-friendly resume for SaaS implementation, operations automation, product operations, RevOps, and BI/data roles.",
    url: "https://mickoll-interactive-cv.vercel.app/resume",
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}
