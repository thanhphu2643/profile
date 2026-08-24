import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/icons";
import { WorkflowVisual } from "@/components/workflow-visual";
import type { CaseStudy } from "@/content/portfolio";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

type CaseStudyCardProps = {
  study: CaseStudy;
  locale: Locale;
};

export function CaseStudyCard({ study, locale }: CaseStudyCardProps) {
  return (
    <article className="case-card reveal">
      <Link href={localizedPath(locale, `/work/${study.slug}`)} aria-label={`${study.title[locale]} — ${locale === "en" ? "read case study" : "xem case study"}`}>
        <WorkflowVisual variant={study.visual} compact />
        <div className="case-card-body">
          <div className="case-meta">
            <span>{study.index}</span>
            <span>{study.type[locale]}</span>
          </div>
          <h3>{study.title[locale]}</h3>
          <p>{study.summary[locale]}</p>
          <div className="case-card-footer">
            <ul aria-label={locale === "en" ? "Technologies" : "Công nghệ"}>
              {study.technologies.slice(0, 3).map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <span className="round-icon"><ArrowUpRightIcon /></span>
          </div>
        </div>
      </Link>
    </article>
  );
}
