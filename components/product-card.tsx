"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import type { Product } from "@/data/products";

import Image from "next/image";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
    >
      <Link href={`/products/${product.slug}`} className="flex flex-1 flex-col">
        <div className="relative h-64 overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/15" />
          <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                 className="object-cover"
                />
        </div>
        <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
              {product.category}
             
            </p>
            {product.badge && (
              <span className="rounded-full bg-muted/70 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                {product.badge}
              </span>
            )}
          </div>
          <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
          <p className="line-clamp-2 text-xs text-muted-foreground">
            {product.description}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm font-medium">
              ${product.price.toLocaleString()}
            </p>
            <span className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground group-hover:text-foreground">
              View details
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

