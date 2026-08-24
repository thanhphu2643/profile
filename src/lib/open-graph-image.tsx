import { ImageResponse } from "next/og";

export const openGraphImageSize = { width: 1200, height: 630 };

export function createOpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", background: "#f7f8fa", color: "#171717", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24 }}>
        <span style={{ fontWeight: 700 }}>NP · NGUYEN THANH PHU</span>
        <span>HO CHI MINH CITY</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 75, lineHeight: 1.04, fontWeight: 700, maxWidth: 1000 }}>Turning complex business workflows into reliable software.</div>
        <div style={{ fontSize: 28, color: "#475569" }}>ERP · Backend · Mobile · Product engineering</div>
      </div>
      <div style={{ height: 12, width: "100%", background: "#155eef" }} />
    </div>,
    openGraphImageSize,
  );
}
