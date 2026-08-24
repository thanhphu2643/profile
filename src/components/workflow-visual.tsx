import type { CaseStudy } from "@/content/portfolio";

type WorkflowVisualProps = {
  variant: CaseStudy["visual"];
  compact?: boolean;
};

const visualContent: Record<CaseStudy["visual"], { label: string; nodes: string[] }> = {
  retail: { label: "Order orchestration", nodes: ["PROMO", "ORDER", "PAYMENT", "RECEIPT"] },
  manufacturing: { label: "Production trace", nodes: ["SALES", "MATERIAL", "MRP", "DELIVERY"] },
  integration: { label: "System exchange", nodes: ["SOURCE", "API", "ODOO", "STATE"] },
  attendance: { label: "Identity flow", nodes: ["MOBILE", "FACE", "GEOFENCE", "RECORD"] },
};

export function WorkflowVisual({ variant, compact = false }: WorkflowVisualProps) {
  const content = visualContent[variant];

  return (
    <div className={`workflow-visual workflow-${variant}${compact ? " workflow-compact" : ""}`} aria-hidden="true">
      <div className="visual-header">
        <span>{content.label}</span>
        <span className="visual-status"><i /> LIVE FLOW</span>
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
