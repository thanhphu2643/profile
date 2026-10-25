import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

// Adapted from Sera UI "Shimmer Button", rendered as a link.
type ShimmerButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function ShimmerButton({ children, className, ...props }: ShimmerButtonProps) {
  return (
    <a
      {...props}
      className={cn("group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full bg-neutral-800 p-[1.5px]", className)}
    >
      <span aria-hidden="true" className="animate-shimmer-spin absolute inset-0 [background:conic-gradient(from_var(--angle),transparent_25%,#38bdf8,transparent_50%)]" />
      <span className="relative z-10 inline-flex h-full w-full items-center justify-center gap-2.5 rounded-full bg-neutral-950 px-6 text-sm font-semibold text-white transition-colors group-hover:bg-neutral-900">
        {children}
      </span>
    </a>
  );
}
