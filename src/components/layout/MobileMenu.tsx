"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "motion/react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/cn";
import { EASE } from "@/components/motion/ease";

export function MobileMenu({ isActive }: { isActive: (href: string) => boolean }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <motion.div
      id="mobile-menu"
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink pt-28 text-bone lg:hidden"
    >
      <nav aria-label="Mobile" className="container-x flex-1">
        <ul className="border-t border-white/10">
          {nav.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.06 }}
              className="border-b border-white/10"
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-baseline justify-between py-5 font-serif text-4xl font-light sm:text-5xl",
                  isActive(item.href) ? "text-bone" : "text-bone/55",
                )}
              >
                {item.label}
                <span className="eyebrow text-silver">0{i + 1}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="container-x space-y-4 py-10 text-sm text-silver"
      >
        {site.contact.advisors.map((a) => (
          <a key={a.tel} href={a.tel} className="flex items-baseline justify-between gap-4">
            <span>{a.name}</span>
            <span className="text-bone">{a.phone}</span>
          </a>
        ))}
        <div className="flex gap-6 pt-2">
          {site.social.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="eyebrow text-silver hover:text-bone">
              {s.label}
            </a>
          ))}
        </div>
        <p className="eyebrow pt-2 text-slate">{site.tagline}</p>
      </motion.div>
    </motion.div>
  );
}
