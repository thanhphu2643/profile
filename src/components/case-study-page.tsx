import Link from "next/link";

import { ArrowLeftIcon, ArrowUpRightIcon, GitHubIcon, MailIcon } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { WorkflowVisual } from "@/components/workflow-visual";
import { caseStudies, type CaseStudy } from "@/content/portfolio";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
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
    role: "My role",
    decisions: "Engineering decisions",
    validation: "How I validated it",
    outcomes: "Practical outcomes",
    technology: "Technology",
    confidentiality: "Client details are anonymized. The story focuses on my responsibilities, decisions, and verifiable operational outcomes.",
    next: "Next case study",
    contact: "Have a relevant problem to solve?",
    email: "Start a conversation",
    github: "View GitHub",
  },
  vi: {
    back: "Tất cả dự án tiêu biểu",
    overview: "Tổng quan dự án",
    context: "Bối cảnh",
    problem: "Bài toán",
    role: "Vai trò của tôi",
    decisions: "Quyết định kỹ thuật",
    validation: "Cách tôi kiểm chứng",
    outcomes: "Kết quả thực tế",
    technology: "Công nghệ",
    confidentiality: "Thông tin khách hàng đã được ẩn danh. Nội dung tập trung vào trách nhiệm, quyết định và kết quả vận hành có thể kiểm chứng.",
    next: "Case study tiếp theo",
    contact: "Bạn có một bài toán tương tự cần giải quyết?",
    email: "Bắt đầu trao đổi",
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
              <div className="reveal reveal-delay-1"><WorkflowVisual variant={study.visual} /></div>
            </div>
            <div className="confidentiality-note"><span>PRIVATE → PUBLIC</span><p>{text.confidentiality}</p></div>
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
            <div className="detail-heading"><span className="detail-number">01</span><div><span className="eyebrow">{text.decisions}</span><h2 id="decisions-title">{locale === "en" ? "Turning ambiguity into an explicit system." : "Biến yêu cầu chưa rõ thành một hệ thống minh bạch."}</h2></div></div>
            <ol className="decision-list">
              {study.decisions[locale].map((decision, index) => <li key={decision}><span>0{index + 1}</span><p>{decision}</p></li>)}
            </ol>
          </section>

          <section className="case-detail case-detail-tinted" aria-labelledby="validation-title">
            <div className="shell split-detail">
              <div className="detail-heading"><span className="detail-number">02</span><div><span className="eyebrow">{text.validation}</span><h2 id="validation-title">{locale === "en" ? "Check the business state, not just the response." : "Kiểm tra trạng thái nghiệp vụ, không chỉ response."}</h2></div></div>
              <ul className="check-list">{study.validation[locale].map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
            </div>
          </section>

          <section className="case-detail shell" aria-labelledby="outcomes-title">
            <div className="detail-heading"><span className="detail-number">03</span><div><span className="eyebrow">{text.outcomes}</span><h2 id="outcomes-title">{locale === "en" ? "Software that supports the operation." : "Phần mềm phục vụ đúng hoạt động thực tế."}</h2></div></div>
            <div className="outcome-grid">{study.outcomes[locale].map((outcome, index) => <div key={outcome}><span>0{index + 1}</span><p>{outcome}</p></div>)}</div>
            <div className="technology-row"><span>{text.technology}</span><ul>{study.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
          </section>

          <nav className="next-project shell" aria-label={text.next}>
            <span className="eyebrow">{text.next}</span>
            <Link href={localizedPath(locale, `/work/${nextStudy.slug}`)}><span>{nextStudy.title[locale]}</span><ArrowUpRightIcon /></Link>
          </nav>

          <section className="case-contact">
            <div className="shell"><h2>{text.contact}</h2><div><a className="button button-light" href={`mailto:${siteConfig.email}`}><MailIcon />{text.email}</a><a className="button button-dark-ghost" href={siteConfig.githubUrl} target="_blank" rel="noreferrer"><GitHubIcon />{text.github}<ArrowUpRightIcon /></a></div></div>
          </section>
        </article>
      </main>
      <footer className="site-footer"><div className="shell footer-inner"><p>© {new Date().getFullYear()} Nguyen Thanh Phu</p><p>{siteConfig.location}</p><Link href={localizedPath(locale)}>{locale === "en" ? "Home" : "Trang chủ"} ↑</Link></div></footer>
    </>
  );
}
