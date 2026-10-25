import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

// Adapted from Sera UI "Marquee": CSS-driven so it pauses for reduced motion,
// and only the first copy is exposed to assistive technology.
type MarqueeProps = {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  repeat?: number;
};

export function Marquee({ children, className, reverse = false, repeat = 4 }: MarqueeProps) {
  return (
    <div className={cn("marquee group flex overflow-hidden [--gap:2.5rem] [gap:var(--gap)]", className)}>
      {Array.from({ length: repeat }, (_, index) => (
        <div
          key={index}
          aria-hidden={index > 0 || undefined}
          className={cn("marquee-track flex shrink-0 items-center justify-around [gap:var(--gap)]", reverse && "marquee-reverse")}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
