"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-context";
import type { Product } from "@/data/products";

type Props = {
  product: Product;
};

export function ProductDetail({ product }: Props) {
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showPhone, setShowPhone] = useState(false);

  // Buy Now behavior
  const handleBuyNow = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = "tel:0938973720";
    } else {
      setShowPhone(true);
    }
  };

  return (
    <>
      <section className="grid gap-10 md:grid-cols-[1.4fr,1fr]">

        {/* LEFT SIDE IMAGES */}
        <div className="space-y-4">

          {/* Main Image */}
          <div
            className="relative h-[420px] overflow-hidden rounded-[2.4rem] border border-border bg-muted md:h-[520px] cursor-pointer"
            onClick={() => setSelectedImage(product.images[0])}
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-3 gap-3">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
                className="relative h-24 cursor-pointer overflow-hidden rounded-2xl border border-border/70"
              >
                <Image
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE PRODUCT INFO */}
        <div className="space-y-6">

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              {product.category}
            </p>

            <h1 className="text-2xl font-medium tracking-tight">
              {product.name}
            </h1>

            <p className="text-sm text-muted-foreground">
              {product.description}
            </p>
          </div>

          {/* PRICE */}
          <p className="text-lg font-medium">
            ${product.price.toLocaleString()}
            <span className="ml-2 text-xs font-normal text-muted-foreground">
              Tax exclusive
            </span>
          </p>

          {/* PRODUCT DETAILS */}
          <div className="space-y-3 rounded-3xl border border-border bg-card/80 p-5 text-sm text-muted-foreground">

            <div className="flex justify-between">
              <span>Dimensions</span>
              <span className="text-right text-foreground">
                {product.dimensions}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Materials</span>
              <span className="text-right text-foreground">
                {product.materials}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Availability</span>
              <span className="text-right text-foreground">
                {product.inStock
                  ? "Made to order — 4–6 weeks"
                  : "Waitlist"}
              </span>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="space-y-3">

            {/* Add to Cart */}
            <Button
              size="lg"
              className="w-full rounded-full text-xs uppercase tracking-[0.25em]"
              onClick={() => addToCart(product, 1)}
            >
              Add to Cart
            </Button>

            {/* Buy Now */}
            <button
              onClick={handleBuyNow}
              className="w-full rounded-full border border-border bg-card px-4 py-2 text-xs uppercase tracking-[0.24em] text-muted-foreground hover:text-foreground"
            >
              Buy Now
            </button>

          </div>

          <p className="text-[0.72rem] text-muted-foreground">
            Each piece is finished by hand in limited production runs.
            Slight variations in tone and grain are part of the design.
          </p>

        </div>
      </section>

      {/* FULL IMAGE POPUP */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative h-[90vh] w-[90vw]">
            <Image
              src={selectedImage}
              alt="Full Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* DESKTOP PHONE POPUP */}
      {showPhone && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setShowPhone(false)}
        >
          <div
            className="rounded-2xl bg-white p-8 text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-medium mb-2">
              Call to Buy
            </h3>

            <p className="text-xl font-semibold">
              0938973720
            </p>

            <button
              onClick={() => setShowPhone(false)}
              className="mt-4 rounded-full border px-4 py-2 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}