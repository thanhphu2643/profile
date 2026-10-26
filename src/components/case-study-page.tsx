import { Link } from "react-router";

import { ArrowLeftIcon, ArrowUpRightIcon, CheckIcon, GitHubIcon, MailIcon } from "@/components/icons";
import { CaseMeta } from "@/components/case-study-card";
import { Eyebrow } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkflowVisual } from "@/components/workflow-visual";
import { buttonClass } from "@/components/ui/button";
import { GlowLine } from "@/components/ui/glow-line";
import { GridBackground } from "@/components/ui/grid-background";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Tag } from "@/components/ui/tag";
import { caseStudies, type CaseStudy } from "@/content/portfolio";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { contactHref } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

type CaseStudyPageProps = {
  study: CaseStudy;
  locale: Locale;
};

const labels = {
  en: {
    back: "All selected work",
    overview: "Project overview",
    context: "Context",
    problem: "The problem",
    role: "My contribution",
    approach: "How I approached it",
    validation: "How I checked it",
    delivered: "Implemented functionality",
    technology: "Technology",
    confidentiality: "Client names are omitted. This page describes my contribution to the project.",
    next: "Next case study",
    contact: "Working on a similar project?",
    email: "Discuss a project",
    github: "View GitHub",
  },
  vi: {
    back: "Tất cả dự án tiêu biểu",
    overview: "Tổng quan dự án",
    context: "Bối cảnh",
    problem: "Bài toán",
    role: "Phần tôi thực hiện",
    approach: "Cách xử lý",
    validation: "Cách kiểm tra",
    delivered: "Chức năng đã triển khai",
    technology: "Công nghệ",
    confidentiality: "Tên khách hàng được giữ ẩn danh. Nội dung mô tả phần việc tôi tham gia trong dự án.",
    next: "Dự án tiếp theo",
    contact: "Bạn có một bài toán tương tự cần giải quyết?",
    email: "Trao đổi dự án",
    github: "Xem GitHub",
  },
} as const;

export function CaseStudyPage({ study, locale }: CaseStudyPageProps) {
  const text = labels[locale];
  const currentIndex = caseStudies.findIndex((candidate) => candidate.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
  const currentPath = `/work/${study.slug}`;

  return (
    <>
      <a className="skip-link" href="#main">{locale === "en" ? "Skip to content" : "Đến nội dung chính"}</a>
      <SiteHeader locale={locale} currentPath={currentPath} />
      <main id="main">
        <article>
          <header className="relative -mt-[76px] overflow-hidden pt-[76px]">
            <GridBackground />
            <div className="shell relative pb-20 pt-10 md:pb-28 md:pt-16">
              <Link className="inline-flex min-h-11 items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-400 transition-all hover:-translate-x-1 hover:text-sky-300" to={`${localizedPath(locale)}#work`}>
                <ArrowLeftIcon />{text.back}
              </Link>
              <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <Reveal>
                  <CaseMeta index={study.index} type={study.type[locale]} />
                  <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-balance text-white sm:text-5xl lg:text-6xl">{study.title[locale]}</h1>
                  <p className="mt-6 text-lg leading-relaxed text-neutral-400">{study.summary[locale]}</p>
                </Reveal>
                <Reveal delay={0.1}><WorkflowVisual variant={study.visual} locale={locale} /></Reveal>
              </div>
              {study.visual !== "attendance" && (
                <div className="confidentiality-note mt-10 border-t border-white/10 pt-6 text-sm text-neutral-500"><p>{text.confidentiality}</p></div>
              )}
            </div>
          </header>

          <section className="border-y border-white/10 bg-white/[0.02] py-16 md:py-20" aria-labelledby="overview-title">
            <div className="shell">
              <Eyebrow>{text.overview}</Eyebrow>
              <h2 className="sr-only" id="overview-title">{text.overview}</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[[text.context, study.context[locale]], [text.problem, study.problem[locale]], [text.role, study.role[locale]]].map(([heading, body], index) => (
                  <Reveal key={heading} delay={index * 0.08} className="h-full">
                    <SpotlightCard className="h-full p-7">
                      <h3 className="font-semibold text-white">{heading}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-neutral-400">{body}</p>
                    </SpotlightCard>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="section shell" aria-labelledby="decisions-title">
            <DetailHeading id="decisions-title" number="01" title={text.approach} />
            <ol className="grid gap-4 md:grid-cols-2">
              {study.approach[locale].map((decision, index) => (
                <Reveal as="li" key={decision} delay={(index % 2) * 0.08}>
                  <SpotlightCard className="flex h-full gap-5 p-7">
                    <span className="font-mono text-xs text-sky-400">0{index + 1}</span>
                    <p className="leading-relaxed text-neutral-300">{decision}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </ol>
          </section>

          <section className="section border-y border-white/10 bg-white/[0.02]" aria-labelledby="validation-title">
            <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <DetailHeading id="validation-title" number="02" title={text.validation} />
              <ul className="space-y-3">
                {study.validation[locale].map((item) => (
                  <li key={item} className="flex gap-4 rounded-xl border border-white/10 bg-neutral-950/60 p-5 text-neutral-300">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300"><CheckIcon width={14} height={14} /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section shell" aria-labelledby="outcomes-title">
            <DetailHeading id="outcomes-title" number="03" title={text.delivered} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {study.delivered[locale].map((outcome, index) => (
                <Reveal key={outcome} delay={(index % 3) * 0.06} className="h-full">
                  <SpotlightCard className="h-full p-6">
                    <span className="font-mono text-xs text-sky-400">0{index + 1}</span>
                    <p className="mt-3 leading-relaxed text-neutral-300">{outcome}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">{text.technology}</span>
              <ul className="flex flex-wrap gap-1.5">{study.technologies.map((technology) => <li key={technology}><Tag>{technology}</Tag></li>)}</ul>
            </div>
          </section>

          <nav className="shell pb-24" aria-label={text.next}>
            <Eyebrow>{text.next}</Eyebrow>
            <Link className="group mt-5 flex items-center justify-between gap-6 border-b border-white/15 pb-8 text-3xl font-semibold tracking-tight text-white transition-colors hover:text-sky-300 sm:text-5xl" to={localizedPath(locale, `/work/${nextStudy.slug}`)}>
              <span>{nextStudy.title[locale]}</span>
              <ArrowUpRightIcon className="shrink-0 transition-transform group-hover:rotate-45" width={36} height={36} />
            </Link>
          </nav>

          <section className="relative overflow-hidden">
            <GlowLine />
            <GridBackground />
            <div className="shell relative flex flex-col gap-8 py-24 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-balance text-white sm:text-5xl">{text.contact}</h2>
              <div className="flex flex-wrap gap-3">
                <a className={buttonClass("default")} href={contactHref(locale, "project")}><MailIcon />{text.email}</a>
                <a className={buttonClass("outline")} href={siteConfig.githubUrl} target="_blank" rel="noreferrer"><GitHubIcon />{text.github}<ArrowUpRightIcon /></a>
              </div>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter locale={locale} note={siteConfig.location} backLabel={locale === "en" ? "Home" : "Trang chủ"} />
    </>
  );
}

function DetailHeading({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <div className="mb-10 flex items-start gap-5 md:mb-14">
      <span className="mt-3 font-mono text-xs font-semibold text-sky-400">{number}</span>
      <h2 id={id} className="text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-white sm:text-5xl">{title}</h2>
    </div>
  );
}
