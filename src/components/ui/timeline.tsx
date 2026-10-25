import type { ReactNode } from "react";

import { Tag } from "@/components/ui/tag";

// Adapted from Sera UI "Timeline" (variant 3).
export type TimelineEntry = {
  id: string;
  title: ReactNode;
  subtitle: ReactNode;
  date: ReactNode;
  description?: ReactNode;
  tags?: string[];
};

export function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <ol className="space-y-12">
      {items.map((item, index) => (
        <li key={item.id} className="group relative flex gap-6 transition-transform duration-300 hover:translate-x-1">
          {index !== items.length - 1 && (
            <span aria-hidden="true" className="absolute left-3 top-8 h-[calc(100%+1rem)] w-px bg-gradient-to-b from-sky-500/70 via-white/15 to-transparent" />
          )}
          <span aria-hidden="true" className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 shadow-[0_0_20px_rgb(56_189_248/0.4)] transition-transform duration-300 group-hover:scale-110">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          <article className="timeline-item flex-1 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <div>
                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-sky-300">{item.title}</h3>
                <p className="font-medium text-sky-400">{item.subtitle}</p>
              </div>
              <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-0.5 font-mono text-xs text-sky-300">{item.date}</span>
            </div>
            {item.description ? <p className="max-w-3xl leading-relaxed text-neutral-400">{item.description}</p> : null}
            {item.tags?.length ? (
              <ul className="flex flex-wrap gap-1.5">{item.tags.map((tag) => <li key={tag}><Tag>{tag}</Tag></li>)}</ul>
            ) : null}
          </article>
        </li>
      ))}
    </ol>
  );
}
