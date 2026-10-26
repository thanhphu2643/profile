import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";

import { CaseStudyPage } from "@/components/case-study-page";
import { HomePage } from "@/components/home-page";
import { MotionProvider } from "@/components/ui/motion-provider";
import { getCaseStudy } from "@/content/portfolio";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { caseStudyMeta, homeMeta } from "@/lib/metadata";
import { usePageMeta } from "@/lib/use-page-meta";

export function App() {
  return (
    <MotionProvider>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomeRoute locale="en" />} />
        <Route path="/vi" element={<HomeRoute locale="vi" />} />
        <Route path="/work/:slug" element={<CaseStudyRoute locale="en" />} />
        <Route path="/vi/work/:slug" element={<CaseStudyRoute locale="vi" />} />
        <Route path="/vi/*" element={<Navigate to="/vi" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Analytics />
    </MotionProvider>
  );
}

function HomeRoute({ locale }: { locale: Locale }) {
  usePageMeta(homeMeta(locale));
  return <HomePage locale={locale} />;
}

function CaseStudyRoute({ locale }: { locale: Locale }) {
  const study = getCaseStudy(useParams().slug ?? "");
  if (!study) return <Navigate to={localizedPath(locale)} replace />;
  return <CaseStudyMetaPage key={study.slug} study={study} locale={locale} />;
}

function CaseStudyMetaPage({ study, locale }: Parameters<typeof CaseStudyPage>[0]) {
  usePageMeta(caseStudyMeta(study, locale));
  return <CaseStudyPage study={study} locale={locale} />;
}

// Client routing does not scroll on its own: jump to the hash target, or to the top on a new page.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
