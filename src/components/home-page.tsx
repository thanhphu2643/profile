
import { ArrowUpRightIcon, CheckIcon, DownloadIcon, GitHubIcon, MailIcon } from "@/components/icons";
import { CaseStudyCard } from "@/components/case-study-card";
import { Eyebrow, SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AnimatedBadge } from "@/components/ui/animated-badge";
import { buttonClass } from "@/components/ui/button";
import { GlowLine } from "@/components/ui/glow-line";
import { GridBackground } from "@/components/ui/grid-background";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TextReveal } from "@/components/ui/text-reveal";
import { Timeline } from "@/components/ui/timeline";
import { homeCopy } from "@/content/home";
import { contactHref } from "@/lib/contact";
import { caseStudies, experiences } from "@/content/portfolio";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const text = homeCopy[locale];
  const timeline = [
    ...experiences.map((experience) => ({
      id: `${experience.company}-${experience.period.en}`,
      title: experience.role[locale],
      subtitle: experience.company,
      date: experience.period[locale],
      description: experience.summary[locale],
      tags: experience.technologies,
    })),
    { id: "education", title: text.degree, subtitle: text.school, date: text.educationMeta, description: text.education },
  ];

  return (
    <>
      <a className="skip-link" href="#main">{locale === "en" ? "Skip to content" : "Đến nội dung chính"}</a>
      <SiteHeader locale={locale} />
      <main id="main">
        <section className="relative -mt-[76px] overflow-hidden pt-[76px]" aria-labelledby="hero-title">
          <GridBackground />
          <div className="shell relative grid items-center gap-12 pb-24 pt-16 md:pt-24 lg:grid-cols-[1fr_340px] lg:gap-16 lg:pb-32">
            <div>
              <Reveal>
                <AnimatedBadge>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgb(52_211_153/0.15)]" />
                  <span>{text.availability}</span>
                  <span aria-hidden="true" className="text-neutral-600">/</span>
                  <span className="text-neutral-500">{text.location}</span>
                </AnimatedBadge>
              </Reveal>
              <h1 id="hero-title" className="mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-balance text-white sm:text-6xl lg:text-7xl xl:text-[84px]">
                <TextReveal segments={[{ text: text.heroLineOne }, { text: text.heroAccent, accent: true }, { text: text.heroLineTwo }]} />
              </h1>
              <Reveal delay={0.35}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-400 sm:text-xl">{text.intro}</p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <ShimmerButton href={contactHref(locale, "project")}>{text.emailMe}<MailIcon /></ShimmerButton>
                  <a className={buttonClass("outline")} href="#work">{text.viewWork}<ArrowUpRightIcon /></a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="mx-auto w-full max-w-[340px]">
              <div className="relative">
                <div aria-hidden="true" className="animate-move-gradient absolute -inset-3 rounded-[28px] bg-gradient-to-r from-blue-600 via-sky-400 to-violet-500 bg-[length:200%_200%] opacity-40 blur-2xl" />
                <div className="hero-portrait relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/15 bg-neutral-900">
                  <img
                    src="/profile-portrait.jpg"
                    alt={locale === "vi" ? "Ảnh chân dung Nguyễn Thanh Phú" : "Portrait of Nguyen Thanh Phu"}
                    width={720}
                    height={1080}
                    fetchPriority="high"
                    className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
                  />
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950/80 to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] py-6" aria-label={text.proofLabel}>
          <div className="shell flex items-center gap-8">
            <span className="hidden shrink-0 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500 sm:block">{text.proofLabel}</span>
            <Marquee className="flex-1 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <ul className="flex items-center gap-[var(--gap)]">
                {text.proof.map((item) => (
                  <li key={item} className="flex items-center gap-3 whitespace-nowrap text-base font-medium text-neutral-200">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Marquee>
          </div>
        </section>

        <section className="section shell" id="services" aria-labelledby="services-title">
          <SectionHeading id="services-title" kicker={`01 · ${text.servicesKicker}`} title={text.servicesTitle}>{text.servicesBody}</SectionHeading>
          <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2">
            {text.services.map((service, index) => (
              <Reveal as="article" key={service.title} delay={index * 0.08} className={cn(index === 0 && "md:row-span-2")}>
                <SpotlightCard className={cn("h-full p-7 sm:p-9", index === 0 && "bg-gradient-to-b from-blue-500/10 to-transparent")}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-sky-400">0{index + 1}</span>
                    {index === 0 ? <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-sky-300">{locale === "en" ? "Main focus" : "Trọng tâm"}</span> : null}
                  </div>
                  <h3 className={cn("mt-6 font-semibold tracking-tight text-white", index === 0 ? "text-3xl sm:text-4xl" : "text-2xl")}>{service.title}</h3>
                  <p className="mt-4 leading-relaxed text-neutral-400">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] text-neutral-300">
                        <CheckIcon className="mt-0.5 shrink-0 text-sky-400" width={16} height={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section shell" id="work" aria-labelledby="work-title">
          <SectionHeading id="work-title" kicker={`02 · ${text.workKicker}`} title={text.workTitle}>{text.workBody}</SectionHeading>
          <div className="grid gap-5 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} delay={(index % 2) * 0.1} className="h-full">
                <CaseStudyCard study={study} locale={locale} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section shell grid gap-16 lg:grid-cols-[1.05fr_0.9fr] lg:gap-24" id="about" aria-labelledby="about-title">
          <Reveal>
            <Eyebrow>03 · {text.aboutKicker}</Eyebrow>
            <h2 id="about-title" className="mb-10 mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">{text.aboutTitle}</h2>
            {text.aboutParagraphs.map((paragraph) => <p key={paragraph} className="mb-5 max-w-2xl text-[17px] leading-relaxed text-neutral-400">{paragraph}</p>)}
          </Reveal>
          <ol className="space-y-3">
            {text.principles.map(([number, title, description], index) => (
              <Reveal as="li" key={number} delay={index * 0.08}>
                <SpotlightCard className="grid grid-cols-[2.5rem_1fr] gap-4 p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-sky-400/30 bg-sky-400/10 font-mono text-xs text-sky-300">{number}</span>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">{description}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="section border-y border-white/10 bg-white/[0.02]" id="experience" aria-labelledby="experience-title">
          <div className="shell">
            <SectionHeading id="experience-title" kicker={`04 · ${text.experienceKicker}`} title={text.experienceTitle}>{text.background}</SectionHeading>
            <Reveal>
              <Timeline items={timeline} />
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden" id="contact" aria-labelledby="contact-title">
          <GlowLine />
          <GridBackground />
          <Reveal className="shell relative py-28 md:py-40">
            <Eyebrow>05 · {text.contactKicker}</Eyebrow>
            <h2 id="contact-title" className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-balance text-white sm:text-6xl lg:text-7xl">{text.contactTitle}</h2>
            <p className="my-9 max-w-2xl text-lg leading-relaxed text-neutral-400">{text.contactBody}</p>
            <div className="flex flex-wrap gap-3">
              <a className={buttonClass("default")} href={contactHref(locale, "project")}><MailIcon />{text.sayHello}</a>
              <a className={buttonClass("outline")} href={contactHref(locale, "role")}>{text.careers}<ArrowUpRightIcon /></a>
              <a className={buttonClass("outline")} href={siteConfig.githubUrl} target="_blank" rel="noreferrer"><GitHubIcon />{text.github}<ArrowUpRightIcon /></a>
              <a className={buttonClass("ghost")} href={siteConfig.resumePath} download><DownloadIcon />{text.resume}</a>
            </div>
            <a className="mt-16 inline-flex min-h-16 items-center gap-3 border-b border-white/25 text-xl text-white transition-colors hover:border-sky-400 hover:text-sky-300 sm:text-3xl md:mt-24" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}<ArrowUpRightIcon />
            </a>
          </Reveal>
        </section>
      </main>
      <SiteFooter locale={locale} note={text.footerNote} backLabel={locale === "en" ? "Back to top" : "Về đầu trang"} />
    </>
  );
}
