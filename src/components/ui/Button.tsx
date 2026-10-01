import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "text";
type Tone = "dark" | "light"; // tone of the *surface* the button sits on

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  tone?: Tone;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  icon?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-3 overflow-hidden text-[0.72rem] font-medium uppercase tracking-[0.24em] transition-colors duration-500 ease-[var(--ease-luxe)] disabled:opacity-50";

function classes(variant: Variant, tone: Tone) {
  if (variant === "text") {
    return cn(
      "gap-2 pb-1.5",
      tone === "dark" ? "text-bone" : "text-ink",
    );
  }
  if (variant === "solid") {
    return cn(
      "h-13 px-7",
      tone === "dark"
        ? "bg-bone text-ink hover:text-bone"
        : "bg-ink text-bone hover:text-ink",
    );
  }
  return cn(
    "h-13 px-7 border",
    tone === "dark"
      ? "border-bone/35 text-bone hover:text-ink hover:border-bone"
      : "border-ink/25 text-ink hover:text-bone hover:border-ink",
  );
}

function Inner({ children, variant, tone, icon }: { children: React.ReactNode; variant: Variant; tone: Tone; icon: boolean }) {
  return (
    <>
      {variant !== "text" && (
        <span
          aria-hidden
          className={cn(
            "absolute inset-0 origin-bottom scale-y-0 transition-transform duration-600 ease-[var(--ease-luxe)] group-hover:scale-y-100",
            variant === "solid"
              ? tone === "dark" ? "bg-graphite" : "bg-bone"
              : tone === "dark" ? "bg-bone" : "bg-ink",
          )}
        />
      )}
      <span className="relative">{children}</span>
      {icon && (
        <span className="relative size-3.5 overflow-hidden">
          <ArrowUpRight
            strokeWidth={1.4}
            className="absolute inset-0 size-3.5 transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:translate-x-full group-hover:-translate-y-full"
          />
          <ArrowUpRight
            strokeWidth={1.4}
            className="absolute inset-0 size-3.5 -translate-x-full translate-y-full transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:translate-x-0 group-hover:translate-y-0"
          />
        </span>
      )}
      {variant === "text" && (
        <span
          aria-hidden
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-current opacity-40 transition-transform duration-600 ease-[var(--ease-luxe)] group-hover:scale-x-0 group-hover:origin-right"
        />
      )}
    </>
  );
}

export function Button({
  href,
  children,
  variant = "solid",
  tone = "light",
  className,
  type = "button",
  disabled,
  onClick,
  icon = true,
}: Props) {
  const cls = cn(base, classes(variant, tone), className);
  const inner = <Inner variant={variant} tone={tone} icon={icon}>{children}</Inner>;
  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    return external ? (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {inner}
    </button>
  );
}
