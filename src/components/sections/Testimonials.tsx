"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/content";
import { EASE } from "@/components/motion/ease";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonials({ index = "09" }: { index?: string }) {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((p) => (p + d + testimonials.length) % testimonials.length);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="bg-bone py-28 md:py-40" aria-roledescription="carousel" aria-label="Client testimonials">
      <div className="container-x">
        <Reveal className="flex items-center gap-4 border-t border-ink/12 pt-5 text-slate">
          <span className="eyebrow tabular-nums">{index}</span>
          <span className="h-px w-8 bg-current opacity-40" aria-hidden />
          <span className="eyebrow">In their words</span>
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12">
          <div className="lg:col-span-1">
            <span aria-hidden className="block font-serif text-8xl leading-none text-ink/15 md:text-9xl">
              &ldquo;
            </span>
          </div>

          <div className="lg:col-span-10" aria-live="polite">
            <div className="relative min-h-[18rem] sm:min-h-[16rem] md:min-h-[20rem]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  <blockquote className="display text-[1.9rem] leading-[1.18] sm:text-4xl lg:text-[3.4rem]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="text-sm font-medium">{t.name}</span>
                    <span className="h-px w-6 bg-ink/30" aria-hidden />
                    <span className="text-sm text-slate">{t.context}</span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-14 flex items-center justify-between border-t border-ink/12 pt-6">
              <span className="eyebrow tabular-nums text-slate">
                {pad(i + 1)} / {pad(testimonials.length)}
              </span>
              <div className="flex gap-2">
                {[
                  { d: -1, Icon: ArrowLeft, label: "Previous testimonial" },
                  { d: 1, Icon: ArrowRight, label: "Next testimonial" },
                ].map(({ d, Icon, label }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => go(d)}
                    aria-label={label}
                    className="flex size-12 items-center justify-center border border-ink/15 transition-all duration-500 ease-[var(--ease-luxe)] hover:border-ink hover:bg-ink hover:text-bone"
                  >
                    <Icon className="size-4" strokeWidth={1.3} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
