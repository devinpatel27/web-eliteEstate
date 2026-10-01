import { cn } from "@/lib/cn";

/** The roof chevron that sits over the “I” in the ELITE wordmark. */
export function RoofMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 12" fill="none" aria-hidden className={cn("h-2.5 w-auto", className)}>
      <path d="M1 11 20 1.5 39 11" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
