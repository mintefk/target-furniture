"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/components/cart-context";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CartDrawer() {
  const { items, subtotal, drawerOpen, setDrawerOpen, updateQuantity, removeFromCart } =
    useCart();
  const [showPopup, setShowPopup] = useState(false);

  const hasItems = items.length > 0;
  const shippingEstimate = subtotal > 0 ? 190 : 0;

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
      window.open(`https://wa.me/0938973720?text=${whatsappMessage}`, "_blank");
    } else {
      setShowPopup(true);
    }
  };

  return (
    <>
      <Dialog.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
        <AnimatePresence>
          {drawerOpen && (
            <>
              <Dialog.Overlay asChild>
                <motion.div
                  className="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.aside
                  className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-card/95 shadow-2xl backdrop-blur-xl"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 280, damping: 32 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-border px-6 py-4">
                    <div className="flex flex-col gap-0.5">
                      <Dialog.Title className="text-sm font-medium tracking-[0.25em] uppercase">
                        Your selection
                      </Dialog.Title>
                      <Dialog.Description className="text-xs text-muted-foreground">
                        Curate your Target Furniture edit.
                      </Dialog.Description>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Close cart"
                      onClick={() => setDrawerOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Items */}
                  <div className="flex-1 overflow-y-auto px-6 py-4">
                    {!hasItems ? (
                      <p className="text-sm text-muted-foreground">
                        Your cart is currently empty. Discover our curated collection of
                        sofas, tables, and more.
                      </p>
                    ) : (
                      <ul className="space-y-4">
                        {items.map((item) => (
                          <li
                            key={item.product.id}
                            className="flex gap-3 rounded-2xl border border-border/70 bg-background/60 p-3"
                          >
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-muted" />
                            <div className="flex flex-1 flex-col gap-1">
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                    {item.product.category}
                                  </p>
                                  <p className="text-sm font-medium">
                                    {item.product.name}
                                  </p>
                                </div>
                                <button
                                  className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
                                  onClick={() => removeFromCart(item.product.id)}
                                >
                                  Remove
                                </button>
                              </div>
                              <div className="flex items-center justify-between pt-1">
                                <div className="flex items-center gap-2 text-xs">
                                  <button
                                    className="h-7 w-7 rounded-full border border-border text-center text-xs"
                                    onClick={() =>
                                      updateQuantity(
                                        item.product.id,
                                        item.quantity - 1
                                      )
                                    }
                                    aria-label="Decrease quantity"
                                  >
                                    -
                                  </button>
                                  <span className="w-6 text-center">{item.quantity}</span>
                                  <button
                                    className="h-7 w-7 rounded-full border border-border text-center text-xs"
                                    onClick={() =>
                                      updateQuantity(
                                        item.product.id,
                                        item.quantity + 1
                                      )
                                    }
                                    aria-label="Increase quantity"
                                  >
                                    +
                                  </button>
                                </div>
                                <p className="text-sm font-medium">
                                  ${(item.product.price * item.quantity).toLocaleString()}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="space-y-4 border-t border-border px-6 py-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal.toLocaleString()}</span>
                    </div>
                    <p className="text-[0.7rem] text-muted-foreground">
                      Taxes and shipping calculated at checkout. Delivery available in
                      select regions.
                    </p>
                    <div className="flex gap-3">
                      <Button
                        asChild
                        className="flex-1 rounded-full text-xs tracking-[0.2em] uppercase"
                        disabled={!hasItems}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <Link href="/cart">View cart</Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 rounded-full text-xs tracking-[0.2em] uppercase"
                        disabled={!hasItems}
                        onClick={handleCheckout}
                      >
                        Checkout
                      </Button>
                    </div>
                  </div>
                </motion.aside>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>
      </Dialog.Root>

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
                window.open(`https://wa.me/0938973720?text=${whatsappMessage}`, "_blank")
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