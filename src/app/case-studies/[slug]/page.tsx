import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/profile";
import { CaseStudyPageClient } from "@/components/CaseStudyPageClient";

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

  if (!getCaseStudy(slug)) {
    notFound();
  }

  return <CaseStudyPageClient slug={slug} />;
}
