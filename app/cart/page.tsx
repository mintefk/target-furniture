"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart-context";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/back-button";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeFromCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const shippingEstimate = subtotal > 0 ? 190 : 0;
  const total = subtotal + shippingEstimate;

  // Build WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `Hello! I want to order:\n` +
      items.map(
        (item) =>
          `- ${item.product.name} x${item.quantity} ($${item.product.price})`
      ).join("\n") +
      `\nSubtotal: $${subtotal.toLocaleString()} + Shipping: $${shippingEstimate.toLocaleString()}`
  );

  const handleCheckout = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Open WhatsApp on mobile
      window.open(`https://wa.me/0938973720?text=${whatsappMessage}`, "_blank");
    } else {
      // Show desktop popup
      setShowPopup(true);
    }
  };

  return (
    <>
      <div className="luxury-container space-y-8 py-10">
        <BackButton />
        <div className="h-px w-full bg-border/70" />

        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Cart
          </p>
          <h1 className="text-2xl font-medium tracking-tight">Your selection.</h1>
          <p className="max-w-xl text-sm text-muted-foreground">
            Review your edit before checkout. Quantities can be adjusted to suit your
            space.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-[1.5fr,1fr]">
          {/* Cart Items */}
          <section className="space-y-4">
            {!items.length ? (
              <div className="space-y-4 rounded-3xl border border-border bg-card/80 p-6 text-sm text-muted-foreground">
                <p>Your cart is currently empty.</p>
                <Button asChild size="sm" variant="outline" className="rounded-full">
                  <Link href="/shop">Browse collection</Link>
                </Button>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.product.id}
                    className="flex gap-4 rounded-3xl border border-border bg-card/80 p-4"
                  >
                    <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-2xl bg-muted" />
                    <div className="flex flex-1 flex-col gap-2">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                            {item.product.category}
                          </p>
                          <Link
                            href={`/products/${item.product.slug}`}
                            className="text-sm font-medium hover:underline"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-xs text-muted-foreground">
                            {item.product.dimensions}
                          </p>
                        </div>
                        <button
                          className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-xs">
                          <button
                            className="h-7 w-7 rounded-full border border-border text-center"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <span className="w-6 text-center">{item.quantity}</span>
                          <button
                            className="h-7 w-7 rounded-full border border-border text-center"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <p className="font-medium">
                          ${(item.product.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Summary */}
          <aside className="space-y-5 rounded-3xl border border-border bg-card/90 p-6">
            <h2 className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Summary
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated delivery</span>
                <span>${shippingEstimate.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-3 text-sm font-medium">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>

            <Button
              className="w-full rounded-full text-xs uppercase tracking-[0.25em]"
              disabled={!items.length}
              onClick={handleCheckout}
            >
              Proceed to checkout
            </Button>

            <p className="text-[0.72rem] text-muted-foreground">
              Taxes are calculated at checkout. Complimentary white-glove delivery is
              available in select cities.
            </p>
          </aside>
        </div>
      </div>

      {/* Desktop Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="rounded-2xl bg-white p-8 text-center shadow-xl max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-medium mb-2">Call or WhatsApp to Order</h3>
            <p className="text-xl font-semibold mb-4">0938973720</p>
            <Button
              className="w-full mb-2"
              onClick={() =>
                window.open(
                  `https://wa.me/0938973720?text=${whatsappMessage}`,
                  "_blank"
                )
              }
            >
              Order on WhatsApp
            </Button>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-2 rounded-full border px-4 py-2 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}