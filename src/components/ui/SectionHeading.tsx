import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

type Props = {
  index?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "dark" | "light";
  className?: string;
  align?: "split" | "stack";
  as?: "h1" | "h2";
};

/**
 * Editorial heading: index numeral + eyebrow on a hairline, large serif title,
 * optional intro set to the right on wide screens.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  tone = "light",
  className,
  align = "split",
  as = "h2",
}: Props) {
  const muted = tone === "dark" ? "text-silver" : "text-slate";
  return (
    <div className={className}>
      <Reveal className={cn("flex items-center gap-4 border-t pt-5 hairline", muted)}>
        {index && <span className="eyebrow tabular-nums">{index}</span>}
        {index && <span className="h-px w-8 bg-current opacity-40" aria-hidden />}
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <div
        className={cn(
          "mt-10 grid gap-8 md:mt-14",
          align === "split" && intro ? "lg:grid-cols-12 lg:items-end" : "",
        )}
      >
        <TextReveal
          as={as}
          text={title}
          className={cn(
            "display text-[2.6rem] sm:text-6xl lg:text-7xl",
            align === "split" && intro ? "lg:col-span-7" : "max-w-5xl",
          )}
        />
        {intro && (
          <Reveal
            delay={0.15}
            className={cn(
              "max-w-md text-[0.95rem] leading-relaxed",
              muted,
              align === "split" ? "lg:col-span-4 lg:col-start-9 lg:pb-3" : "",
            )}
          >
            <p>{intro}</p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
