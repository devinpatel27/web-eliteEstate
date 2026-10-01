import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = { tone?: "light" | "dark"; className?: string; compact?: boolean };

/** Horizontal lockup: key mark + wordmark, generated from the supplied artwork. */
export function Logo({ tone = "light", className, compact = false }: Props) {
  return (
    <Link href="/" aria-label="Elite Estate, home" className={cn("group flex items-center gap-3.5", className)}>
      <Image
        src={`/brand/logo-mark-${tone}.png`}
        alt=""
        width={443}
        height={1224}
        priority
        className={cn(
          "w-auto transition-all duration-700 ease-[var(--ease-luxe)] group-hover:-translate-y-0.5",
          compact ? "h-9" : "h-11",
        )}
      />
      <span className={cn("h-7 w-px", tone === "light" ? "bg-bone/25" : "bg-ink/20")} aria-hidden />
      <Image
        src={`/brand/logo-wordmark-${tone}.png`}
        alt="Elite Estate"
        width={713}
        height={367}
        priority
        className={cn("w-auto transition-all duration-700 ease-[var(--ease-luxe)]", compact ? "h-7" : "h-8")}
      />
    </Link>
  );
}
