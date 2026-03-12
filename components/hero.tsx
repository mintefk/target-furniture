"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="luxury-gradient border-b border-border/60">
      <div className="luxury-container flex min-h-[70vh] flex-col gap-10 py-14 md:min-h-[80vh] md:flex-row md:items-center">
        <div className="flex-1 space-y-8">
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Target Furniture — Est. 2026
          </motion.p>        
          <motion.h1
            className="text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Quiet luxury
            <span className="block font-normal">for considered spaces.</span>
          </motion.h1>
          <motion.p
            className="max-w-xl text-sm leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Target Furniture crafts timeless pieces in noble materials—oak, marble,
            linen—designed to age beautifully and live at the center of everyday
            rituals.
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full text-xs tracking-[0.22em] uppercase"
            >
              <Link href="/shop">Explore collection</Link>
            </Button>
            <button className="text-xs uppercase tracking-[0.22em] text-muted-foreground underline-offset-4 hover:underline">
              Book a private viewing
            </button>
          </motion.div>
          <motion.div
            className="mt-4 flex gap-10 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span>Hand-finished in Europe</span>
            <span>Responsible materials</span>
          </motion.div>
        </div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
        >
          <div className="relative h-[360px] overflow-hidden rounded-[2.5rem] border border-border bg-[#efe4d8] shadow-soft md:h-[480px]">
            {/* Responsive background imagery */}
            <div className="absolute inset-0">
              {/* Desktop: single full-width background image */}
              <div className="hidden h-full w-full md:block">
                <Image
                  src="/images/hero-desktop.jpg"
                  alt="Aurora linen sofa in a warm, minimal living room"
                  fill
                  priority
                  sizes="(min-width: 1024px) 540px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Mobile: two stacked images */}
              <div className="flex h-full flex-col md:hidden">
                <div className="relative h-1/2 w-full overflow-hidden">
                  <Image
                    src="/images/hero-mobile-top.jpg"
                    alt="Detail of Target Furniture upholstery and cushions"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-1/2 w-full overflow-hidden">
                  <Image
                    src="/images/hero-mobile-bottom.jpg"
                    alt="Target Furniture coffee table and accessories"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Soft radial highlight overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75)_0,_transparent_55%)]" />

            {/* Foreground content */}
            <div className="relative z-10 flex h-full items-end justify-between p-7">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Featured
                </p>
                <p className="mt-1 text-lg font-medium text-foreground">
                  Aurora Linen Sofa
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  From $4,890 — in dove & sand.
                </p>
              </div>
              <div className="flex flex-col items-end gap-2 text-right text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                <span>New season palette</span>
                <span>Ships in 4–6 weeks</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

