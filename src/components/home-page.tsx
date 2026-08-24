import Link from "next/link";

import { ArrowUpRightIcon, DownloadIcon, GitHubIcon, MailIcon } from "@/components/icons";
import { CaseStudyCard } from "@/components/case-study-card";
import { SiteHeader } from "@/components/site-header";
import { caseStudies, experiences } from "@/content/portfolio";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type HomePageProps = {
  locale: Locale;
};

const copy = {
  en: {
    availability: "Software Engineer · Ho Chi Minh City",
    heroLineOne: "I turn complex",
    heroAccent: "business workflows",
    heroLineTwo: "into reliable software.",
    intro: "I build ERP, backend, and mobile products with Odoo, Node.js, Flutter, and PostgreSQL—grounded in real operations, clear data flow, and careful validation.",
    viewWork: "View selected work",
    emailMe: "Email me",
    resume: "Download résumé",
    proofLabel: "Working across",
    proof: ["ERP systems", "Backend APIs", "Mobile products", "Business operations"],
    workKicker: "Selected work",
    workTitle: "Engineering stories, not a technology list.",
    workBody: "A selection of anonymized projects showing how I frame operational problems, make technical decisions, and verify that the result works in practice.",
    experienceKicker: "Experience",
    experienceTitle: "From operations to end-to-end engineering.",
    present: "Present",
    education: "Education",
    school: "Industrial University of Ho Chi Minh City",
    degree: "Bachelor of Engineering in Information Systems",
    educationMeta: "2021 — 2025 · GPA 3.15 / 4.0",
    aboutKicker: "How I work",
    aboutTitle: "Clarity before code. Evidence before assumptions.",
    aboutParagraphs: [
      "I started close to day-to-day operations, which shaped how I approach software: understand the people, documents, decisions, and exceptions before designing the implementation.",
      "When a requirement is ambiguous, I trace it through source code, database behavior, logs, and user scenarios. AI helps me research and compare options faster; the final decision still has to hold up against the system and the business rule.",
    ],
    principles: [
      ["01", "Understand the operation", "Map actors, states, documents, and failure cases before customizing the system."],
      ["02", "Make the flow explicit", "Prefer readable rules, traceable data, and interfaces that expose what users need."],
      ["03", "Validate the real outcome", "Test scenarios, inspect logs and data, and check the end state—not only the happy-path response."],
    ],
    contactKicker: "Let’s build something useful",
    contactTitle: "Looking for an engineer who can connect product, business, and implementation?",
    contactBody: "I’m always interested in thoughtful software teams and practical problems worth solving.",
    sayHello: "Start a conversation",
    github: "View GitHub",
    footerNote: "Designed and built with care in Ho Chi Minh City.",
  },
  vi: {
    availability: "Kỹ sư phần mềm · TP. Hồ Chí Minh",
    heroLineOne: "Tôi biến những",
    heroAccent: "quy trình phức tạp",
    heroLineTwo: "thành phần mềm đáng tin cậy.",
    intro: "Tôi xây dựng sản phẩm ERP, backend và mobile với Odoo, Node.js, Flutter và PostgreSQL—dựa trên vận hành thực tế, luồng dữ liệu rõ ràng và kiểm chứng cẩn thận.",
    viewWork: "Xem dự án tiêu biểu",
    emailMe: "Gửi email",
    resume: "Tải CV",
    proofLabel: "Kinh nghiệm xuyên suốt",
    proof: ["Hệ thống ERP", "Backend API", "Sản phẩm mobile", "Vận hành doanh nghiệp"],
    workKicker: "Dự án tiêu biểu",
    workTitle: "Câu chuyện kỹ thuật, không chỉ là danh sách công nghệ.",
    workBody: "Các dự án ẩn danh thể hiện cách tôi xác định bài toán vận hành, đưa ra quyết định kỹ thuật và kiểm chứng kết quả trong thực tế.",
    experienceKicker: "Kinh nghiệm",
    experienceTitle: "Từ vận hành đến phát triển sản phẩm đầu-cuối.",
    present: "Hiện tại",
    education: "Học vấn",
    school: "Đại học Công nghiệp Thành phố Hồ Chí Minh",
    degree: "Kỹ sư Hệ thống Thông tin",
    educationMeta: "2021 — 2025 · GPA 3.15 / 4.0",
    aboutKicker: "Cách tôi làm việc",
    aboutTitle: "Làm rõ trước khi viết code. Kiểm chứng trước khi kết luận.",
    aboutParagraphs: [
      "Tôi bắt đầu từ những công việc gần với vận hành hằng ngày. Điều đó định hình cách tôi làm phần mềm: hiểu con người, chứng từ, quyết định và ngoại lệ trước khi thiết kế giải pháp.",
      "Khi yêu cầu chưa rõ, tôi truy vết qua source code, hành vi database, log và tình huống người dùng. AI giúp nghiên cứu và so sánh phương án nhanh hơn; quyết định cuối cùng vẫn phải đúng với hệ thống và quy tắc nghiệp vụ.",
    ],
    principles: [
      ["01", "Hiểu hoạt động thực tế", "Xác định vai trò, trạng thái, chứng từ và trường hợp lỗi trước khi tùy chỉnh hệ thống."],
      ["02", "Làm rõ luồng xử lý", "Ưu tiên quy tắc dễ đọc, dữ liệu truy vết được và giao diện hiển thị đúng thông tin người dùng cần."],
      ["03", "Xác thực kết quả cuối", "Kiểm thử tình huống, xem log và dữ liệu, kiểm tra trạng thái nghiệp vụ thay vì chỉ nhìn response thành công."],
    ],
    contactKicker: "Cùng xây dựng điều hữu ích",
    contactTitle: "Bạn đang tìm một kỹ sư có thể kết nối sản phẩm, nghiệp vụ và triển khai?",
    contactBody: "Tôi luôn sẵn sàng trao đổi với những đội ngũ phần mềm nghiêm túc và các bài toán thực tế đáng giải quyết.",
    sayHello: "Bắt đầu trao đổi",
    github: "Xem GitHub",
    footerNote: "Được thiết kế và xây dựng cẩn thận tại TP. Hồ Chí Minh.",
  },
} as const;

export function HomePage({ locale }: HomePageProps) {
  const text = copy[locale];

  return (
    <>
      <a className="skip-link" href="#main">{locale === "en" ? "Skip to content" : "Đến nội dung chính"}</a>
      <SiteHeader locale={locale} />
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-status reveal">
            <span className="status-dot" />
            {text.availability}
            <span>Nextwaves Industries</span>
          </div>
          <h1 id="hero-title" className="reveal reveal-delay-1">
            {text.heroLineOne} <em>{text.heroAccent}</em> {text.heroLineTwo}
          </h1>
          <div className="hero-bottom reveal reveal-delay-2">
            <p>{text.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">{text.viewWork}<ArrowUpRightIcon /></a>
              <a className="button button-ghost" href={`mailto:${siteConfig.email}`}>{text.emailMe}<MailIcon /></a>
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <span className="orbit-dot" />
          </div>
        </section>

        <section className="proof-bar" aria-label={text.proofLabel}>
          <div className="shell proof-inner">
            <span>{text.proofLabel}</span>
            <ul>{text.proof.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section className="section shell" id="work" aria-labelledby="work-title">
          <div className="section-heading reveal">
            <div><span className="eyebrow">01 · {text.workKicker}</span><h2 id="work-title">{text.workTitle}</h2></div>
            <p>{text.workBody}</p>
          </div>
          <div className="case-grid">
            {caseStudies.map((study) => <CaseStudyCard key={study.slug} study={study} locale={locale} />)}
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="shell">
            <div className="section-heading reveal">
              <div><span className="eyebrow">02 · {text.experienceKicker}</span><h2 id="experience-title">{text.experienceTitle}</h2></div>
            </div>
            <div className="experience-list">
              {experiences.map((experience, index) => (
                <article className="experience-row reveal" key={`${experience.company}-${experience.period.en}`}>
                  <span className="experience-index">0{index + 1}</span>
                  <div className="experience-role"><h3>{experience.role[locale]}</h3><p>{experience.company}</p></div>
                  <p className="experience-summary">{experience.summary[locale]}</p>
                  <div className="experience-meta"><time>{experience.period[locale]}</time><ul>{experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
                </article>
              ))}
              <article className="education-row reveal">
                <span className="experience-index">05</span>
                <div className="experience-role"><span className="eyebrow">{text.education}</span><h3>{text.degree}</h3><p>{text.school}</p></div>
                <p className="education-meta">{text.educationMeta}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section shell about-section" id="about" aria-labelledby="about-title">
          <div className="about-copy reveal">
            <span className="eyebrow">03 · {text.aboutKicker}</span>
            <h2 id="about-title">{text.aboutTitle}</h2>
            {text.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ol className="principles">
            {text.principles.map(([number, title, description]) => (
              <li className="reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>
            ))}
          </ol>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-inner reveal">
            <span className="eyebrow">04 · {text.contactKicker}</span>
            <h2 id="contact-title">{text.contactTitle}</h2>
            <p>{text.contactBody}</p>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${siteConfig.email}`}><MailIcon />{text.sayHello}</a>
              <a className="button button-dark-ghost" href={siteConfig.githubUrl} target="_blank" rel="noreferrer"><GitHubIcon />{text.github}<ArrowUpRightIcon /></a>
              <a className="button button-dark-ghost" href={siteConfig.resumePath} download><DownloadIcon />{text.resume}</a>
            </div>
            <a className="contact-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowUpRightIcon /></a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>© {new Date().getFullYear()} Nguyen Thanh Phu</p>
          <p>{text.footerNote}</p>
          <Link href={localizedPath(locale)}>{locale === "en" ? "Back to top" : "Về đầu trang"} ↑</Link>
        </div>
      </footer>
    </>
  );
}
