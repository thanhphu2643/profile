import Link from "next/link";

import { ArrowLeftIcon, ArrowUpRightIcon, GitHubIcon, MailIcon } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { WorkflowVisual } from "@/components/workflow-visual";
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
          <header className="case-hero shell">
            <Link className="back-link" href={`${localizedPath(locale)}#work`}><ArrowLeftIcon />{text.back}</Link>
            <div className="case-hero-grid">
              <div className="case-hero-copy reveal">
                <div className="case-meta"><span>{study.index}</span><span>{study.type[locale]}</span></div>
                <h1>{study.title[locale]}</h1>
                <p>{study.summary[locale]}</p>
              </div>
              <div className="reveal reveal-delay-1"><WorkflowVisual variant={study.visual} locale={locale} /></div>
            </div>
            {study.visual !== "attendance" && <div className="confidentiality-note"><p>{text.confidentiality}</p></div>}
          </header>

          <section className="case-overview" aria-labelledby="overview-title">
            <div className="shell">
              <span className="eyebrow">{text.overview}</span>
              <h2 className="sr-only" id="overview-title">{text.overview}</h2>
              <div className="overview-grid">
                <div><h3>{text.context}</h3><p>{study.context[locale]}</p></div>
                <div><h3>{text.problem}</h3><p>{study.problem[locale]}</p></div>
                <div><h3>{text.role}</h3><p>{study.role[locale]}</p></div>
              </div>
            </div>
          </section>

          <section className="case-detail shell" aria-labelledby="decisions-title">
            <div className="detail-heading"><span className="detail-number">01</span><div><h2 id="decisions-title">{text.approach}</h2></div></div>
            <ol className="decision-list">
              {study.approach[locale].map((decision, index) => <li key={decision}><span>0{index + 1}</span><p>{decision}</p></li>)}
            </ol>
          </section>

          <section className="case-detail case-detail-tinted" aria-labelledby="validation-title">
            <div className="shell split-detail">
              <div className="detail-heading"><span className="detail-number">02</span><div><h2 id="validation-title">{text.validation}</h2></div></div>
              <ul className="check-list">{study.validation[locale].map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
            </div>
          </section>

          <section className="case-detail shell" aria-labelledby="outcomes-title">
            <div className="detail-heading"><span className="detail-number">03</span><div><h2 id="outcomes-title">{text.delivered}</h2></div></div>
            <div className="outcome-grid">{study.delivered[locale].map((outcome, index) => <div key={outcome}><span>0{index + 1}</span><p>{outcome}</p></div>)}</div>
            <div className="technology-row"><span>{text.technology}</span><ul>{study.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
          </section>

          <nav className="next-project shell" aria-label={text.next}>
            <span className="eyebrow">{text.next}</span>
            <Link href={localizedPath(locale, `/work/${nextStudy.slug}`)}><span>{nextStudy.title[locale]}</span><ArrowUpRightIcon /></Link>
          </nav>

          <section className="case-contact">
            <div className="shell"><h2>{text.contact}</h2><div><a className="button button-light" href={contactHref(locale, "project")}><MailIcon />{text.email}</a><a className="button button-dark-ghost" href={siteConfig.githubUrl} target="_blank" rel="noreferrer"><GitHubIcon />{text.github}<ArrowUpRightIcon /></a></div></div>
          </section>
        </article>
      </main>
      <footer className="site-footer"><div className="shell footer-inner"><p>© {new Date().getFullYear()} Nguyen Thanh Phu</p><p>{siteConfig.location}</p><Link href={localizedPath(locale)}>{locale === "en" ? "Home" : "Trang chủ"} ↑</Link></div></footer>
    </>
  );
}
