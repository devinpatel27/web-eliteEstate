"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { images } from "@/data/images";
import { areas } from "@/data/areas";
import { TextReveal } from "@/components/motion/TextReveal";
import { EASE } from "@/components/motion/ease";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[640px] h-svh flex-col overflow-hidden bg-ink text-bone">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease: EASE }}
          className="absolute inset-0"
        >
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-[50%_60%] img-tone"
          />
        </motion.div>
        {/* Scrim only where the copy sits */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,14,15,0.92)_0%,rgba(14,14,15,0.55)_38%,rgba(14,14,15,0.15)_70%,rgba(14,14,15,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,14,15,0.6),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink/70 to-transparent" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="container-x flex flex-1 flex-col justify-end pb-10 pt-32 md:pb-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.5 }}
          className="eyebrow mb-8 flex items-center gap-4 text-silver"
        >
          <span className="h-px w-10 bg-silver/60" />
          Ahmedabad &middot; Real Estate Advisory
        </motion.p>

        <TextReveal
          as="h1"
          immediate
          delay={0.6}
          text={"The key to\nAhmedabad's finest\naddresses."}
          className="display text-[3.1rem] sm:text-7xl lg:text-8xl xl:text-[clamp(6rem,11.5vh,8.5rem)]"
        />

        <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.3 }}
            className="max-w-md text-[0.95rem] leading-relaxed text-bone/75 lg:col-span-5"
          >
            Independent advice on where to live and invest across west Ahmedabad &mdash; from Sindhu
            Bhavan Road to Shela. One advisor, a verified shortlist, and complete discretion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.45 }}
            className="flex flex-wrap gap-3 lg:col-span-7 lg:justify-end"
          >
            <Button href="/areas" tone="dark">
              Explore areas
            </Button>
            <Button href="/contact" tone="dark" variant="outline">
              Speak to an advisor
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Base strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8 }}
        className="container-x"
      >
        <div className="flex items-center justify-between gap-6 border-t border-white/12 py-5 text-[0.65rem] uppercase tracking-[0.24em] text-silver">
          <span className="tabular-nums">23.03&deg; N &nbsp; 72.51&deg; E</span>
          <span className="hidden md:block">{areas.length} neighbourhoods &middot; West Ahmedabad</span>
          <span className="flex items-center gap-3">
            Scroll
            <span className="relative block h-8 w-px overflow-hidden bg-white/15">
              <motion.span
                className="absolute inset-x-0 top-0 h-3 bg-bone"
                animate={{ y: ["-100%", "280%"] }}
                transition={{ duration: 2.2, ease: EASE, repeat: Infinity, repeatDelay: 0.4 }}
              />
            </span>
          </span>
        </div>
      </motion.div>
    </section>
  );
}
