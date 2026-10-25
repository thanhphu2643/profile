import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  id: string;
  kicker: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ id, kicker, title, children }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 grid items-end gap-6 md:mb-20 md:grid-cols-[1.5fr_1fr] md:gap-16">
      <div>
        <Eyebrow>{kicker}</Eyebrow>
        <h2 id={id} className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">{title}</h2>
      </div>
      {children ? <p className="text-[17px] leading-relaxed text-neutral-400">{children}</p> : null}
    </Reveal>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-400">
      <span aria-hidden="true" className="h-px w-6 bg-sky-400/60" />
      {children}
    </span>
  );
}
