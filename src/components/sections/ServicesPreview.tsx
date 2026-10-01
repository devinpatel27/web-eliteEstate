"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";
import { EASE } from "@/components/motion/ease";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function ServicesPreview({ index = "06" }: { index?: string }) {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="bg-bone py-28 md:py-40">
      <div className="container-x">
        <SectionHeading
          index={index}
          eyebrow="Services"
          title={"Every side of\nthe transaction."}
          intro="Whether you are buying, selling, leasing or investing, the same senior advisor guides you from first conversation to final signature."
        />

        <div className="mt-20 grid gap-14 md:mt-28 lg:grid-cols-12 lg:gap-8">
          <Stagger as="ol" className="border-t border-ink/12 lg:col-span-7" gap={0.06}>
            {services.map((s, i) => {
              const on = active === i;
              return (
                <StaggerItem as="li" key={s.slug} className="border-b border-ink/12">
                  <Link
                    href={`/services#${s.slug}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-4 py-8 md:grid-cols-[4rem_1fr_auto]"
                  >
                    <span className="eyebrow pt-3 tabular-nums text-slate">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3
                        className={cn(
                          "font-serif text-3xl font-light leading-tight transition-colors duration-500 sm:text-4xl",
                          on ? "text-ink" : "text-ink/45 lg:text-ink/45",
                        )}
                      >
                        {s.title}
                      </h3>
                      <div
                        className={cn(
                          "grid transition-[grid-template-rows,opacity] duration-700 ease-[var(--ease-luxe)]",
                          on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[1fr] opacity-100 lg:grid-rows-[0fr] lg:opacity-0",
                        )}
                      >
                        <p className="overflow-hidden pt-3 text-[0.92rem] leading-relaxed text-slate md:max-w-md">
                          {s.summary}
                        </p>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "mt-2 flex size-10 items-center justify-center border transition-all duration-500 ease-[var(--ease-luxe)]",
                        on ? "border-ink bg-ink text-bone" : "border-ink/15 text-ink",
                      )}
                    >
                      <ArrowUpRight className="size-4" strokeWidth={1.3} />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>

          <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
            <div className="sticky top-32">
              <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={current.slug}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.image.src}
                      alt={current.image.alt}
                      fill
                      sizes="30vw"
                      className="img-tone object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-5 flex items-center justify-between text-slate">
                <span className="eyebrow">{current.title}</span>
                <span className="eyebrow tabular-nums">
                  {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
