import { motion } from "framer-motion";

import { AuroraText } from "@/components/ui/aurora-text";

// Adapted from Sera UI "Text Reveal": words fade in from a blur, one after another.
// Spaces stay in the text so the heading reads naturally to assistive technology.
type TextRevealProps = {
  segments: { text: string; accent?: boolean }[];
};

export function TextReveal({ segments }: TextRevealProps) {
  const words = segments.flatMap((segment) => segment.text.split(" ").filter(Boolean).map((word) => ({ word, accent: segment.accent })));

  return (
    <motion.span initial="hidden" animate="visible" transition={{ staggerChildren: 0.06 }}>
      {words.map(({ word, accent }, index) => (
        <span key={index}>
          <motion.span
            className="inline-block"
            variants={{ hidden: { opacity: 0, y: 20, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {accent ? <AuroraText>{word}</AuroraText> : word}
          </motion.span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </motion.span>
  );
}
