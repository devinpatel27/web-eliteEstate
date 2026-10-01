"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { EASE } from "@/components/motion/ease";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Parallax travel in percent. */
  strength?: number;
  caption?: string;
  tone?: boolean;
};

/** Image that drifts gently on scroll and unveils with a clip-path wipe. */
export function ParallaxImage({ src, alt, className, sizes = "50vw", priority, strength = 8, caption, tone = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <figure className={cn("relative", className)}>
      <motion.div
        ref={ref}
        initial={{ clipPath: "inset(12% 0 0 0)", opacity: 0 }}
        whileInView={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1.3, ease: EASE }}
        className="relative h-full w-full overflow-hidden bg-graphite"
      >
        <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0">
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", tone && "img-tone")} />
        </motion.div>
      </motion.div>
      {caption && (
        <figcaption className="eyebrow mt-4 flex items-center gap-3 text-slate">
          <span className="h-px w-6 bg-current opacity-50" />
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
