import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { MotionProvider } from "@/components/ui/motion-provider";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin", "vietnamese"], variable: "--font-jetbrains", display: "swap" });

type RootShellProps = {
  children: ReactNode;
  locale: "en" | "vi";
};

export function RootShell({ children, locale }: RootShellProps) {
  return (
    <html lang={locale} className={`${inter.variable} ${mono.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
