import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const messages = {
  en: {
    project: { subject: "Project enquiry", body: "Hi Phu,\n\nBusiness workflow / problem:\nCurrent system:\nExpected scope:\nTarget deadline:\n" },
    role: { subject: "Job opportunity", body: "Hi Phu,\n\nRole and company:\nLocation / working arrangement:\nJob description:\n" },
  },
  vi: {
    project: { subject: "Trao đổi dự án", body: "Chào Phú,\n\nNghiệp vụ / vấn đề cần xử lý:\nHệ thống đang sử dụng:\nPhạm vi dự kiến:\nDeadline mong muốn:\n" },
    role: { subject: "Trao đổi cơ hội việc làm", body: "Chào Phú,\n\nVị trí và công ty:\nĐịa điểm / hình thức làm việc:\nMô tả công việc:\n" },
  },
} as const;

export function contactHref(locale: Locale, intent: "project" | "role"): string {
  const { subject, body } = messages[locale][intent];
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
