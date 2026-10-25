import { cn } from "@/lib/utils";

// Adapted from Sera UI "Glow Line" (horizontal, blue scheme).
export function GlowLine({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none relative h-px w-full", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      <div className="absolute inset-0 -mt-px h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
      <div className="absolute inset-0 -mt-1 h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70 blur-md" />
      <div className="absolute inset-0 -mt-2 h-4 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-40 blur-lg" />
    </div>
  );
}
