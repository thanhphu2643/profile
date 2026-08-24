import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyPage } from "@/components/case-study-page";
import { caseStudies, getCaseStudy } from "@/content/portfolio";
import { caseStudyMetadata } from "@/lib/metadata";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return study ? caseStudyMetadata(study, "vi") : {};
}

export default async function VietnameseCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  return <CaseStudyPage study={study} locale="vi" />;
}
