import { cn } from "@/lib/utils";

// Adapted from Sera UI "Glow Line" (horizontal, blue scheme), with gradients in place of blur filters.
export function GlowLine({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none relative h-px w-full", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
      <div className="absolute inset-x-0 -top-6 h-12 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgb(56_189_248/0.25),transparent_70%)]" />
    </div>
  );
}
