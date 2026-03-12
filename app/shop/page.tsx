"use client";

import { useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ProductGrid } from "@/components/product-grid";
import { products, categories, type Category } from "@/data/products";
import { BackButton } from "@/components/back-button";

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "popularity", label: "Most Popular" }
];

export default function ShopPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeCategory = searchParams.get("category") as Category | null;
  const query = searchParams.get("q")?.toLowerCase() ?? "";
  const sort = searchParams.get("sort") ?? "featured";

  const setParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`/shop?${params.toString()}`);
  };

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (query) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "popularity":
        list = [...list].sort((a, b) => b.popularity - a.popularity);
        break;
      default:
        list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return list;
  }, [activeCategory, query, sort]);

  return (
    <div className="luxury-container space-y-8 py-10">
      <BackButton />
      <div className="h-px w-full bg-border/70" />
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Collection
        </p>
        <h1 className="text-2xl font-medium tracking-tight">
          Furniture for every room.
        </h1>
        <p className="max-w-xl text-sm text-muted-foreground">
          Explore sofas, beds, tables, and more—designed to layer seamlessly into
          existing spaces or define new ones.
        </p>
      </header>

      <section className="flex flex-col gap-4 rounded-3xl border border-border bg-card/70 p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setParam("category", null)}
            className={`rounded-full border px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em] ${
              !activeCategory
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() =>
                setParam("category", activeCategory === c.id ? null : c.id)
              }
              className={`rounded-full border px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em] ${
                activeCategory === c.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="text-muted-foreground">Sort</span>
          <select
            value={sort}
            onChange={(e) => setParam("sort", e.target.value)}
            className="rounded-full border border-border bg-card px-3 py-1 text-xs outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="space-y-4">
        <p className="text-xs text-muted-foreground">
          Showing {filtered.length} piece{filtered.length === 1 ? "" : "s"}
        </p>
        <ProductGrid products={filtered} />
      </section>
    </div>
  );
}

