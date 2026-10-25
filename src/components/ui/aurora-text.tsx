import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

// Adapted from Sera UI "Aurora Text".
type AuroraTextProps = {
  children: ReactNode;
  className?: string;
  colors?: string[];
};

export function AuroraText({ children, className, colors = ["#60a5fa", "#38bdf8", "#818cf8", "#a78bfa"] }: AuroraTextProps) {
  const style: CSSProperties = { backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})` };
  return (
    <span className={cn("animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent", className)} style={style}>
      {children}
    </span>
  );
}
