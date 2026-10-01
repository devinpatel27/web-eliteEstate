"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { process } from "@/data/content";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process({ index = "08", className = "bg-paper" }: { index?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className={`${className} py-28 md:py-40`}>
      <div className="container-x">
        <SectionHeading
          index={index}
          eyebrow="The journey"
          title={"Five considered steps,\none trusted advisor."}
          intro="A clear, unhurried process — so you always know what happens next, and why."
        />

        <div ref={ref} className="relative mt-20 md:mt-28">
          {/* Track (horizontal on desktop, vertical on mobile) */}
          <div className="absolute bottom-0 left-[5px] top-0 w-px bg-ink/12 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[5px] lg:h-px lg:w-auto" />
          <motion.div
            style={{ scaleY: scale }}
            className="absolute bottom-0 left-[5px] top-0 w-px origin-top bg-ink lg:hidden"
          />
          <motion.div
            style={{ scaleX: scale }}
            className="absolute left-0 right-0 top-[5px] hidden h-px origin-left bg-ink lg:block"
          />

          <Stagger as="ol" className="relative grid gap-14 lg:grid-cols-5 lg:gap-8" gap={0.12}>
            {process.map((step, i) => (
              <StaggerItem as="li" key={step.title} className="relative pl-10 lg:pl-0 lg:pt-14">
                <span className="absolute left-0 top-1.5 size-[11px] rotate-45 border border-ink bg-paper lg:top-0" />
                <span className="eyebrow tabular-nums text-slate">Step {String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-3xl font-light leading-tight">{step.title}</h3>
                <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-slate">{step.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
