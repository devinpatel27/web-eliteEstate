"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { areas } from "@/data/areas";
import { enquirySchema, interests } from "@/lib/validation";
import { EASE } from "@/components/motion/ease";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Props = {
  tone?: "light" | "dark";
  full?: boolean;
  defaultArea?: string;
  className?: string;
};

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<string, string>>;

export function EnquiryForm({ tone = "dark", full = false, defaultArea = "", className }: Props) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const dark = tone === "dark";

  const field = cn(
    "peer w-full appearance-none rounded-none border-0 border-b bg-transparent px-0 pb-3 pt-7 text-[0.95rem] outline-none transition-colors duration-500 placeholder:text-transparent",
    dark ? "border-white/20 text-bone focus:border-bone" : "border-ink/20 text-ink focus:border-ink",
  );
  const label = cn(
    "pointer-events-none absolute left-0 top-7 origin-left text-[0.95rem] transition-all duration-500 ease-[var(--ease-luxe)]",
    "peer-focus:top-0 peer-focus:text-[0.65rem] peer-focus:tracking-[0.22em] peer-focus:uppercase",
    "peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem] peer-[:not(:placeholder-shown)]:tracking-[0.22em] peer-[:not(:placeholder-shown)]:uppercase",
    dark ? "text-silver" : "text-slate",
  );
  const staticLabel = cn("absolute left-0 top-0 text-[0.65rem] uppercase tracking-[0.22em]", dark ? "text-silver" : "text-slate");
  const errorCls = "mt-2 text-xs text-[#d98b7a]";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = enquirySchema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] ??= issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className={cn("border-t pt-10", dark ? "border-white/15" : "border-ink/15")}
            role="status"
          >
            <p className="eyebrow text-silver">Thank you</p>
            <p className="display mt-5 text-4xl sm:text-5xl">We&rsquo;ll be in touch shortly.</p>
            <p className={cn("mt-5 max-w-md text-[0.95rem] leading-relaxed", dark ? "text-silver" : "text-slate")}>
              An advisor will call you within one working day to understand your requirements.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: EASE }}
            onSubmit={onSubmit}
            noValidate
            className="grid gap-x-8 gap-y-8 sm:grid-cols-2"
          >
            <div className="relative">
              <input id={`${id}-name`} name="name" placeholder="Name" autoComplete="name" className={field} aria-invalid={!!errors.name} />
              <label htmlFor={`${id}-name`} className={label}>Full name</label>
              {errors.name && <p className={errorCls}>{errors.name}</p>}
            </div>

            <div className="relative">
              <input
                id={`${id}-phone`}
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="Phone"
                autoComplete="tel"
                className={field}
                aria-invalid={!!errors.phone}
              />
              <label htmlFor={`${id}-phone`} className={label}>Phone</label>
              {errors.phone && <p className={errorCls}>{errors.phone}</p>}
            </div>

            {full && (
              <div className="relative sm:col-span-2">
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className={field}
                  aria-invalid={!!errors.email}
                />
                <label htmlFor={`${id}-email`} className={label}>Email (optional)</label>
                {errors.email && <p className={errorCls}>{errors.email}</p>}
              </div>
            )}

            <div className="relative">
              <select id={`${id}-interest`} name="interest" defaultValue="" className={cn(field, "cursor-pointer")} aria-invalid={!!errors.interest}>
                <option value="" disabled className="text-ink">Select</option>
                {interests.map((o) => (
                  <option key={o} value={o} className="text-ink">{o}</option>
                ))}
              </select>
              <label htmlFor={`${id}-interest`} className={staticLabel}>I&rsquo;m interested in</label>
              <ChevronDown className="pointer-events-none absolute bottom-3.5 right-0 size-4 opacity-60" strokeWidth={1.3} />
              {errors.interest && <p className={errorCls}>{errors.interest}</p>}
            </div>

            <div className="relative">
              <select id={`${id}-area`} name="area" defaultValue={defaultArea} className={cn(field, "cursor-pointer")}>
                <option value="" className="text-ink">Any / not sure yet</option>
                {areas.map((a) => (
                  <option key={a.slug} value={a.slug} className="text-ink">{a.name}</option>
                ))}
              </select>
              <label htmlFor={`${id}-area`} className={staticLabel}>Preferred area</label>
              <ChevronDown className="pointer-events-none absolute bottom-3.5 right-0 size-4 opacity-60" strokeWidth={1.3} />
            </div>

            {full && (
              <div className="relative sm:col-span-2">
                <textarea
                  id={`${id}-message`}
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className={cn(field, "resize-none")}
                />
                <label htmlFor={`${id}-message`} className={label}>Tell us a little about what you&rsquo;re looking for</label>
              </div>
            )}

            {/* Honeypot */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            <div className="flex flex-col gap-5 pt-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className={cn("max-w-xs text-xs leading-relaxed", dark ? "text-slate" : "text-slate")}>
                Your details are used only to respond to this enquiry.
              </p>
              <Button type="submit" tone={dark ? "dark" : "light"} disabled={status === "submitting"}>
                {status === "submitting" ? "Sending" : "Send enquiry"}
              </Button>
            </div>
            {status === "error" && (
              <p className={cn(errorCls, "sm:col-span-2")} role="alert">
                Something went wrong. Please try again, or call us directly.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
