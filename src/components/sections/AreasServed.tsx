"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { areas } from "@/data/areas";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

/** Typographic index of every area, with a cursor-following photo preview on pointer devices. */
export function AreasServed({ index = "03" }: { index?: string }) {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Critically damped: follows smoothly without overshoot.
  const sx = useSpring(x, { stiffness: 160, damping: 32, mass: 1 });
  const sy = useSpring(y, { stiffness: 160, damping: 32, mass: 1 });

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !listRef.current) return;
    const r = listRef.current.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  return (
    <section className="bg-paper py-28 md:py-40">
      <div className="container-x">
        <SectionHeading
          index={index}
          eyebrow="Areas we serve"
          title={"Twelve neighbourhoods.\nKnown intimately."}
          intro="We focus on west Ahmedabad's most established and fastest-evolving addresses — so our advice comes from depth, not breadth."
        />

        <div
          ref={listRef}
          onPointerMove={onMove}
          onPointerLeave={() => setActive(null)}
          className="relative mt-20 md:mt-28"
        >
          <Stagger as="ul" className="border-t border-ink/12" gap={0.04}>
            {areas.map((a, i) => (
              <StaggerItem as="li" key={a.slug} className="border-b border-ink/12">
                <Link
                  href={`/areas/${a.slug}`}
                  onPointerEnter={(e) => e.pointerType === "mouse" && setActive(a.slug)}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-6 md:grid-cols-[4rem_1.2fr_1fr_auto] md:py-7"
                >
                  <span className="eyebrow tabular-nums text-slate">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={cn(
                      "font-serif text-3xl font-light leading-none transition-all duration-700 ease-[var(--ease-luxe)] sm:text-4xl lg:text-5xl",
                      active && active !== a.slug ? "text-ink/30" : "text-ink",
                      "group-hover:translate-x-3",
                    )}
                  >
                    {a.name}
                  </span>
                  <span
                    className={cn(
                      "hidden text-sm text-slate transition-opacity duration-500 md:block",
                      active && active !== a.slug ? "opacity-40" : "opacity-100",
                    )}
                  >
                    <span className="eyebrow mr-3 text-ink/60">{a.character}</span>
                  </span>
                  <span className="flex size-10 items-center justify-center border border-ink/15 transition-all duration-500 ease-[var(--ease-luxe)] group-hover:border-ink group-hover:bg-ink group-hover:text-bone">
                    <ArrowUpRight className="size-4" strokeWidth={1.3} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Floating preview */}
          <motion.div
            aria-hidden
            style={{ x: sx, y: sy }}
            className="pointer-events-none absolute left-0 top-0 z-10 hidden lg:block"
          >
            <motion.div
              animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.92 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative -translate-y-1/2 translate-x-10 aspect-[4/5] w-64 overflow-hidden bg-graphite xl:w-72"
            >
              {areas.map((a) => (
                <Image
                  key={a.slug}
                  src={a.image}
                  alt=""
                  fill
                  sizes="288px"
                  className={cn(
                    "img-tone object-cover transition-opacity duration-500",
                    active === a.slug ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
