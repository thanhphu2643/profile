import { cn } from "@/lib/utils";

// Adapted from Sera UI "Moving Grid". The grid is static and the glow is a radial gradient
// rather than a blurred element, so nothing repaints while the page is idle.
export function GridBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgb(59_130_246/0.18),transparent_70%)]" />
    </div>
  );
}
