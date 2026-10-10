import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  tone?: "light" | "dark";
  /** "framed": the crest exactly as designed. "crest": framed crest plus tagline. */
  variant?: "framed" | "crest";
  className?: string;
  priority?: boolean;
};

const dims = {
  framed: { width: 991, height: 1888 },
  crest: { width: 992, height: 2000 },
};

/** The Elite Estate crest, generated from the supplied artwork (see scripts/make-logo.mjs). Size it with a height class. */
export function Logo({ tone = "light", variant = "framed", className, priority }: Props) {
  return (
    <Link href="/" aria-label="Elite Estate, home" className="group inline-block">
      <Image
        src={`/brand/logo-${variant}-${tone}.png`}
        alt="Elite Estate"
        width={dims[variant].width}
        height={dims[variant].height}
        priority={priority}
        className={cn(
          "w-auto transition-[height,opacity] duration-700 ease-[var(--ease-luxe)] group-hover:opacity-85",
          className,
        )}
      />
    </Link>
  );
}
