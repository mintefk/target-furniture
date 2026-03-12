"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ShoppingBag, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-context";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { count, setDrawerOpen } = useCart();

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (search.trim()) {
      params.set("q", search.trim());
    } else {
      params.delete("q");
    }
    router.push(`/shop?${params.toString()}`);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-[rgba(247,243,238,0.9)] backdrop-blur-md">
      <div className="luxury-container flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-foreground/90" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Target
              </span>
              <span className="text-sm font-semibold tracking-[0.25em] uppercase">
                Furniture
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.25em] uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <form
            onSubmit={onSearchSubmit}
            className="flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs"
            aria-label="Search products"
          >
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search furniture"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none placeholder:text-muted-foreground/70 w-40"
            />
          </form>
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full"
            aria-label="Open shopping cart"
            onClick={() => setDrawerOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.1rem] items-center justify-center rounded-full bg-foreground text-[0.6rem] font-medium text-background">
                {count}
              </span>
            )}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open cart"
            onClick={() => setDrawerOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute right-4 top-3 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[0.55rem] font-medium text-background">
                {count}
              </span>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-border/70 bg-[rgba(247,243,238,0.95)] md:hidden"
          >
            <div className="luxury-container flex flex-col gap-5 py-4">
              <form onSubmit={onSearchSubmit} className="flex items-center gap-2">
                <div className="flex flex-1 items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search furniture"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-transparent outline-none placeholder:text-muted-foreground/70 w-full"
                  />
                </div>
                <Button type="submit" size="sm" variant="ghost">
                  Go
                </Button>
              </form>
              <nav className="flex flex-col gap-3 text-xs tracking-[0.25em] uppercase">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "py-1 transition-colors hover:text-foreground",
                      pathname === link.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

