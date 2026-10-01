import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Area } from "@/data/areas";
import { cn } from "@/lib/cn";

type Props = {
  area: Area;
  index?: number;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  tone?: "light" | "dark";
};

export function AreaCard({
  area,
  index,
  className,
  imageClassName = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  tone = "light",
}: Props) {
  const muted = tone === "dark" ? "text-silver" : "text-slate";
  return (
    <Link
      href={`/areas/${area.slug}`}
      className={cn("group block transition-transform duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1", className)}
    >
      <article>
        <div className={cn("relative overflow-hidden bg-graphite", imageClassName)}>
          <Image
            src={area.image}
            alt={`${area.name}, Ahmedabad`}
            fill
            sizes={sizes}
            className="img-tone img-tone-hover object-cover transition-[transform,filter] duration-[1400ms] ease-[var(--ease-luxe)] group-hover:scale-[1.045]"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/50 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          <span className="eyebrow absolute left-5 top-5 bg-ink/70 px-3 py-2 text-bone">{area.character}</span>
        </div>

        <div className={cn("mt-6 border-t pt-5", tone === "dark" ? "border-white/12" : "border-ink/12")}>
          <div className="flex items-baseline justify-between gap-6">
            <h3 className="font-serif text-3xl font-light leading-tight sm:text-[2.1rem]">{area.name}</h3>
            {index !== undefined && (
              <span className={cn("eyebrow tabular-nums", muted)}>{String(index).padStart(2, "0")}</span>
            )}
          </div>
          <p className={cn("mt-3 max-w-md text-[0.9rem] leading-relaxed", muted)}>{area.summary}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.24em]">
            <span className="relative">
              Explore area
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-600 ease-[var(--ease-luxe)] group-hover:scale-x-100" />
            </span>
            <ArrowUpRight
              strokeWidth={1.4}
              className="size-3.5 transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </article>
    </Link>
  );
}
