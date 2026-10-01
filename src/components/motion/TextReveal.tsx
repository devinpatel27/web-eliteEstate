"use client";

import { motion } from "motion/react";
import { EASE } from "./ease";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  /** Animate immediately on mount instead of on scroll (e.g. hero). */
  immediate?: boolean;
};

/**
 * Masked word-by-word rise. Line breaks can be forced with "\n".
 * The full string stays in the DOM for screen readers and SEO.
 */
export function TextReveal({ text, className, as = "h2", delay = 0, immediate = false }: Props) {
  const Tag = motion[as];
  const lines = text.split("\n");
  let index = 0;

  const trigger = immediate
    ? { animate: "show" as const }
    : { whileInView: "show" as const, viewport: { once: true, margin: "0px 0px -10% 0px" } };

  return (
    <Tag className={className} initial="hidden" {...trigger} aria-label={text.replace(/\n/g, " ")}>
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden>
          {line.split(" ").map((word, wi) => {
            const i = index++;
            return (
              <span key={wi} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
                <motion.span
                  className="inline-block will-change-transform"
                  variants={{
                    hidden: { y: "105%" },
                    show: { y: "0%", transition: { duration: 1.05, ease: EASE, delay: delay + i * 0.055 } },
                  }}
                >
                  {word}
                  {wi < line.split(" ").length - 1 ? " " : ""}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
