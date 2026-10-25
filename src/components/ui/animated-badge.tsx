import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

// Adapted from Sera UI "Animated Badge".
type AnimatedBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedBadge({ children, className }: AnimatedBadgeProps) {
  return (
    <div className={cn("animate-move-bg inline-flex rounded-full bg-gradient-to-r from-transparent via-sky-400 to-transparent bg-[length:400%_100%] p-px", className)}>
      <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full bg-neutral-950 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-neutral-300">
        {children}
      </div>
    </div>
  );
}
