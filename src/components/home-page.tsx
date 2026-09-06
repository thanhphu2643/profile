import Image from "next/image";
import Link from "next/link";

import { ArrowUpRightIcon, DownloadIcon, GitHubIcon, MailIcon } from "@/components/icons";
import { CaseStudyCard } from "@/components/case-study-card";
import { SiteHeader } from "@/components/site-header";
import { homeCopy } from "@/content/home";
import { contactHref } from "@/lib/contact";
import { caseStudies, experiences } from "@/content/portfolio";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const text = homeCopy[locale];

  return (
    <>
      <a className="skip-link" href="#main">{locale === "en" ? "Skip to content" : "Đến nội dung chính"}</a>
      <SiteHeader locale={locale} />
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-status reveal">
            <span className="status-dot" />
            <span className="hero-specialty">{text.availability}</span>
            <span>{text.location}</span>
          </div>
          <div className="hero-main">
            <h1 id="hero-title" className="reveal reveal-delay-1">
              {text.heroLineOne} <em>{text.heroAccent}</em> {text.heroLineTwo}
            </h1>
            <div className="hero-portrait reveal reveal-delay-2">
              <Image
                src="/profile.jpg"
                alt={locale === "vi" ? "Ảnh chân dung Nguyễn Thanh Phú" : "Portrait of Nguyen Thanh Phu"}
                fill
                sizes="(max-width: 760px) min(100vw - 40px, 360px), (max-width: 1040px) 30vw, 360px"
                loading="eager"
                className="hero-portrait-image"
              />
            </div>
          </div>
          <div className="hero-bottom reveal reveal-delay-2">
            <p>{text.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={contactHref(locale, "project")}>{text.emailMe}<MailIcon /></a>
              <a className="button button-ghost" href="#work">{text.viewWork}<ArrowUpRightIcon /></a>
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

        <section className="section shell services-section" id="services" aria-labelledby="services-title">
          <div className="section-heading reveal">
            <div><span className="eyebrow">01 · {text.servicesKicker}</span><h2 id="services-title">{text.servicesTitle}</h2></div>
            <p>{text.servicesBody}</p>
          </div>
          <div className="service-grid">
            {text.services.map((service, index) => (
              <article className="service-card reveal" key={service.title}>
                <span className="eyebrow">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="work" aria-labelledby="work-title">
          <div className="section-heading reveal">
            <div><span className="eyebrow">02 · {text.workKicker}</span><h2 id="work-title">{text.workTitle}</h2></div>
            <p>{text.workBody}</p>
          </div>
          <div className="case-grid">
            {caseStudies.map((study) => <CaseStudyCard key={study.slug} study={study} locale={locale} />)}
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

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="shell">
            <div className="section-heading reveal">
              <div><span className="eyebrow">04 · {text.experienceKicker}</span><h2 id="experience-title">{text.experienceTitle}</h2></div>
            </div>
            <p className="experience-background">{text.background}</p>
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

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-inner reveal">
            <span className="eyebrow">05 · {text.contactKicker}</span>
            <h2 id="contact-title">{text.contactTitle}</h2>
            <p>{text.contactBody}</p>
            <div className="contact-actions">
              <a className="button button-light" href={contactHref(locale, "project")}><MailIcon />{text.sayHello}</a>
              <a className="button button-dark-ghost" href={contactHref(locale, "role")}>{text.careers}<ArrowUpRightIcon /></a>
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
