"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/cn";
import { EASE } from "@/components/motion/ease";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    if (y > 480 && y > prev + 4) setHidden(true);
    else if (y < prev - 4 || y <= 480) setHidden(false);
  });

  // Close the menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled && !open;

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: hidden && !open ? "-100%" : 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "border-b transition-[background-color,border-color,padding] duration-700 ease-[var(--ease-luxe)]",
            solid ? "border-white/10 bg-ink/95 py-3" : "border-transparent bg-transparent py-5 md:py-7",
          )}
        >
          <div className="container-x flex items-center justify-between">
            <Logo compact={scrolled} />

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-10">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "group relative py-2 text-[0.7rem] uppercase tracking-[0.26em] transition-colors duration-500",
                        isActive(item.href) ? "text-bone" : "text-bone/60 hover:text-bone",
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-bone transition-transform duration-600 ease-[var(--ease-luxe)]",
                          isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                        )}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-6">
              <a
                href={site.contact.phoneHref}
                className="hidden text-[0.7rem] tracking-[0.18em] text-bone/70 transition-colors hover:text-bone xl:block"
              >
                {site.contact.phone}
              </a>
              <Link
                href="/contact"
                className="group relative hidden h-10 items-center overflow-hidden border border-bone/30 px-5 text-[0.68rem] uppercase tracking-[0.24em] text-bone transition-colors duration-500 hover:border-bone hover:text-ink md:inline-flex"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-bone transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-y-100" />
                <span className="relative">Enquire</span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="relative -mr-2 flex size-10 items-center justify-center lg:hidden"
              >
                <span
                  className={cn(
                    "absolute h-px w-6 bg-bone transition-transform duration-500 ease-[var(--ease-luxe)]",
                    open ? "rotate-45" : "-translate-y-[4px]",
                  )}
                />
                <span
                  className={cn(
                    "absolute h-px bg-bone transition-all duration-500 ease-[var(--ease-luxe)]",
                    open ? "w-6 -rotate-45" : "w-4 translate-x-1 translate-y-[4px]",
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>{open && <MobileMenu isActive={isActive} />}</AnimatePresence>
    </>
  );
}
