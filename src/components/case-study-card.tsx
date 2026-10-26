import { Link } from "react-router";

import { ArrowUpRightIcon } from "@/components/icons";
import { WorkflowVisual } from "@/components/workflow-visual";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Tag } from "@/components/ui/tag";
import type { CaseStudy } from "@/content/portfolio";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

type CaseStudyCardProps = {
  study: CaseStudy;
  locale: Locale;
};

const hues: Record<CaseStudy["visual"], number> = { retail: 218, manufacturing: 155, integration: 265, attendance: 35 };

export function CaseStudyCard({ study, locale }: CaseStudyCardProps) {
  return (
    <article className="h-full">
      <SpotlightCard hue={hues[study.visual]} className="h-full transition-transform duration-300 hover:-translate-y-1">
        <Link className="flex h-full flex-col" to={localizedPath(locale, `/work/${study.slug}`)} aria-label={`${study.title[locale]} — ${locale === "en" ? "read case study" : "xem case study"}`}>
          <WorkflowVisual variant={study.visual} locale={locale} compact />
          <div className="flex flex-1 flex-col p-6 sm:p-8">
            <CaseMeta index={study.index} type={study.type[locale]} />
            <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">{study.title[locale]}</h3>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-neutral-400">{study.summary[locale]}</p>
            <div className="mt-8 flex items-end justify-between gap-5">
              <ul className="flex flex-wrap gap-1.5" aria-label={locale === "en" ? "Technologies" : "Công nghệ"}>
                {study.technologies.slice(0, 3).map((technology) => <li key={technology}><Tag>{technology}</Tag></li>)}
              </ul>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover/spot:rotate-45 group-hover/spot:border-sky-400 group-hover/spot:bg-sky-400 group-hover/spot:text-neutral-950">
                <ArrowUpRightIcon />
              </span>
            </div>
          </div>
        </Link>
      </SpotlightCard>
    </article>
  );
}

export function CaseMeta({ index, type }: { index: string; type: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
      <span className="text-sky-400">{index}</span>
      <span aria-hidden="true" className="text-neutral-700">/</span>
      <span>{type}</span>
    </div>
  );
}
