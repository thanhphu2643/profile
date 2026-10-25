import { cn } from "@/lib/utils";

// Sera UI "Button" variants, exposed as classes so they style plain links.
const variants = {
  default: "bg-white text-neutral-950 hover:bg-sky-100",
  outline: "border border-white/15 bg-white/[0.03] text-white hover:border-white/40 hover:bg-white/[0.07]",
  ghost: "text-neutral-300 hover:bg-white/5 hover:text-white",
} as const;

export function buttonClass(variant: keyof typeof variants = "default", className?: string): string {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5",
    variants[variant],
    className,
  );
}
