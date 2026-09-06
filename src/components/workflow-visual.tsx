import type { CaseStudy } from "@/content/portfolio";
import type { Locale } from "@/lib/i18n";

type WorkflowVisualProps = {
  variant: CaseStudy["visual"];
  locale: Locale;
  compact?: boolean;
};

const visualContent: Record<Locale, Record<CaseStudy["visual"], { label: string; nodes: string[] }>> = {
  en: {
    retail: { label: "POS & reconciliation", nodes: ["Order", "Payment", "Receipt", "Session report"] },
    manufacturing: { label: "Production & subcontracting", nodes: ["Materials", "Production", "Vendor work", "Delivery"] },
    integration: { label: "API data exchange", nodes: ["External data", "API", "Mapping", "Odoo records"] },
    attendance: { label: "Attendance checks", nodes: ["Mobile", "Identity", "Location", "Attendance"] },
  },
  vi: {
    retail: { label: "POS & đối soát", nodes: ["Đơn hàng", "Thanh toán", "Hóa đơn", "Báo cáo phiên"] },
    manufacturing: { label: "Sản xuất & gia công", nodes: ["Vật tư", "Sản xuất", "Gia công", "Giao hàng"] },
    integration: { label: "Trao đổi qua API", nodes: ["Dữ liệu ngoài", "API", "Ánh xạ", "Bản ghi Odoo"] },
    attendance: { label: "Kiểm tra điểm danh", nodes: ["Mobile", "Danh tính", "Vị trí", "Điểm danh"] },
  },
};

export function WorkflowVisual({ variant, locale, compact = false }: WorkflowVisualProps) {
  const content = visualContent[locale][variant];

  return (
    <div className={`workflow-visual workflow-${variant}${compact ? " workflow-compact" : ""}`}>
      <div className="visual-header">
        <span>{content.label}</span>
        <span className="visual-status">{locale === "en" ? "Illustrative flow" : "Minh họa quy trình"}</span>
      </div>
      <div className="visual-flow">
        {content.nodes.map((node, index) => (
          <div className="visual-step" key={node}>
            <span className="visual-index">0{index + 1}</span>
            <strong>{node}</strong>
            {index < content.nodes.length - 1 ? <span className="visual-line" /> : null}
          </div>
        ))}
      </div>
      <div className="visual-grid" />
    </div>
  );
}
