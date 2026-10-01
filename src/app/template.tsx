"use client";

import { motion } from "motion/react";
import { EASE } from "@/components/motion/ease";

/** Re-mounts on every navigation: a quiet fade-and-rise between pages. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
      {children}
    </motion.div>
  );
}
