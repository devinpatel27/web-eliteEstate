"use client";

import { motion } from "motion/react";
import { EASE } from "./ease";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "section" | "p" | "span";
};

/** Fade-up on first entry into the viewport. */
export function Reveal({ children, className, delay = 0, y = 24, as = "div" }: Props) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}
