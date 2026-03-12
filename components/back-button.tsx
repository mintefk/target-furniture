"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export function BackButton() {
  const router = useRouter();

  return (
    <motion.button
      type="button"
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground focus-visible:ring-offset-background"
      aria-label="Go back to previous page"
      whileHover={{ x: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="hidden sm:inline">Back</span>
    </motion.button>
  );
}

