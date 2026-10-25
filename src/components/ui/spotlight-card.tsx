"use client";

import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";

import { cn } from "@/lib/utils";

// Adapted from Sera UI "Spotlight Card": the glow follows the pointer inside the card
// instead of a document-wide listener, so many cards can share a page cheaply.
type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  hue?: number;
};

export function SpotlightCard({ children, className, hue = 218 }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      style={{ "--spot-hue": hue } as CSSProperties}
      className={cn("spotlight-card group/spot relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]", className)}
    >
      {children}
    </div>
  );
}
