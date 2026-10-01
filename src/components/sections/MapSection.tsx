"use client";

import { useState } from "react";
import { areas } from "@/data/areas";
import { AreaMap } from "@/components/areas/AreaMapLoader";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const points = areas.map((a) => ({
  slug: a.slug,
  name: a.name,
  lat: a.lat,
  lng: a.lng,
  summary: a.summary,
  href: `/areas/${a.slug}`,
}));

export function MapSection({ index = "04", heading = true }: { index?: string; heading?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="bg-ink py-28 text-bone md:py-40" aria-label="Map of the areas we serve">
      <div className="container-x">
        {heading && (
          <SectionHeading
            index={index}
            eyebrow="Map of Ahmedabad"
            title={"See where each\nneighbourhood sits."}
            intro="Hover a name to find it on the map, or select a marker for a short profile. Most of our areas sit along the western corridor, between the Sabarmati and the SP Ring Road."
            tone="dark"
          />
        )}

        <Reveal className={cn("grid border border-white/12 lg:grid-cols-12", heading && "mt-16 md:mt-24")}>
          <div className="relative order-1 h-[440px] sm:h-[520px] lg:order-2 lg:col-span-8 lg:h-[680px]">
            <AreaMap points={points} active={active} onActiveChange={setActive} selected={selected} />
            <div className="pointer-events-none absolute right-4 top-4 z-[500] eyebrow text-silver/80">
              West Ahmedabad
            </div>
          </div>

          <div className="order-2 border-t border-white/12 lg:order-1 lg:col-span-4 lg:border-r lg:border-t-0">
            <div className="flex items-center justify-between border-b border-white/12 px-6 py-5">
              <span className="eyebrow text-silver">Neighbourhoods</span>
              <span className="eyebrow tabular-nums text-slate">{areas.length}</span>
            </div>
            <ul className="grid grid-cols-2 gap-px bg-white/8 sm:grid-cols-3 lg:max-h-[616px] lg:grid-cols-1 lg:overflow-y-auto">
              {areas.map((a, i) => {
                const on = active === a.slug || selected === a.slug;
                return (
                  <li key={a.slug} className="bg-ink">
                    <button
                      type="button"
                      onMouseEnter={() => setActive(a.slug)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(a.slug)}
                      onClick={() => setSelected(a.slug)}
                      className={cn(
                        "group flex w-full items-center gap-4 px-6 py-4 text-left transition-colors duration-500",
                        on ? "bg-white/[0.04] text-bone" : "text-bone/60 hover:text-bone",
                      )}
                    >
                      <span className="eyebrow hidden w-6 tabular-nums text-slate lg:inline">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-serif text-lg leading-tight lg:text-xl">{a.name}</span>
                      <span
                        className={cn(
                          "hidden size-1.5 rotate-45 bg-bone transition-all duration-500 lg:block",
                          on ? "scale-100 opacity-100" : "scale-0 opacity-0",
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
