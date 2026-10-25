import type { ReactNode } from "react";

// Sera UI "Badge" (outline variant), sized for technology tags.
export function Tag({ children }: { children: ReactNode }) {
  return <span className="inline-block rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] leading-none text-neutral-300">{children}</span>;
}
