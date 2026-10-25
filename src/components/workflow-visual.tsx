import type { CaseStudy } from "@/content/portfolio";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

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

const glow: Record<CaseStudy["visual"], string> = {
  retail: "from-blue-600/40",
  manufacturing: "from-emerald-500/35",
  integration: "from-violet-500/40",
  attendance: "from-amber-500/35",
};

export function WorkflowVisual({ variant, locale, compact = false }: WorkflowVisualProps) {
  const content = visualContent[locale][variant];

  return (
    <div className={cn("@container relative overflow-hidden bg-neutral-950", compact ? "min-h-64" : "min-h-[420px] rounded-2xl border border-white/10")}>
      <div aria-hidden="true" className={cn("absolute inset-0 bg-gradient-to-br via-transparent to-transparent", glow[variant])} />
      <div aria-hidden="true" className="absolute inset-0 [background-image:linear-gradient(rgb(255_255_255/0.07)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.07)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]" />
      <div className="relative flex flex-wrap items-center justify-between gap-x-4 gap-y-2 p-6 font-mono text-[10px] uppercase tracking-widest text-white/70">
        <span>{content.label}</span>
        <span className="visual-status flex items-center gap-2">{locale === "en" ? "Illustrative flow" : "Minh họa quy trình"}</span>
      </div>
      <div className={cn("relative grid grid-cols-2 gap-3 px-6 pb-6 @xl:grid-cols-4 @xl:gap-4", compact ? "pt-4" : "pt-16 @xl:pt-24")}>
        {content.nodes.map((node, index) => (
          <div key={node} className="relative flex min-h-20 flex-col justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.06] p-3.5 backdrop-blur-sm">
            <span className="font-mono text-[9px] text-white/45">0{index + 1}</span>
            <strong className="font-mono text-xs tracking-wide text-white">{node}</strong>
            {index < content.nodes.length - 1 ? (
              <span aria-hidden="true" className="absolute left-full top-1/2 hidden h-px w-4 bg-gradient-to-r from-sky-300/70 to-transparent @xl:block" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
