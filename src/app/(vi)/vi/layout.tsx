import type { ReactNode } from "react";
import type { Metadata } from "next";

import { RootShell } from "@/components/root-shell";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = { metadataBase: getSiteUrl() };

export default function VietnameseLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <RootShell locale="vi">{children}</RootShell>;
}
