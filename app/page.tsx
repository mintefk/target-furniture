import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { products, categories } from "@/data/products";

export default function HomePage() {
  const featured = products.filter((p) => p.featured);

  return (
    <div className="space-y-20 pb-16">
      <Hero />

      <section className="luxury-container space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Featured pieces
            </p>
            <h2 className="mt-1 text-xl font-medium tracking-tight">
              The Target edit
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            A rotating selection of sofas, tables, and accent chairs that define the
            season&apos;s silhouette and palette.
          </p>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="luxury-container space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Categories
            </p>
            <h2 className="mt-1 text-xl font-medium tracking-tight">
              Pieces for every room
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/shop?category=${c.id}`}
              className="group flex cursor-pointer flex-col justify-between rounded-3xl border border-border bg-card/70 p-4 pb-5 transition-colors hover:bg-foreground hover:text-background"
            >
              <div className="h-28 rounded-2xl bg-muted/70" />
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.26em]">
                <span>{c.label}</span>
                <span className="text-[0.6rem] text-muted-foreground group-hover:text-background">
                  View
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="luxury-container grid gap-10 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Our story
          </p>
          <h2 className="text-xl font-medium tracking-tight">
            Furniture that lives with you.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Target Furniture was founded on the belief that everyday objects should
            feel as considered as gallery pieces. Each design begins with proportion,
            then material, then the small details—edge radius, stitching, the way light
            moves across a surface.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We partner with family-owned workshops across Europe, using responsibly
            sourced oak, walnut, marble, and linen. Every piece is finished by hand,
            resulting in subtle variations that make each object entirely your own.
          </p>
        </div>
        <div className="space-y-6 rounded-[2.2rem] border border-border bg-[#f3e7da] p-7">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Craft
          </p>
          <p className="text-sm text-muted-foreground">
            &ldquo;We design for the quiet moments—a first coffee, an evening light
            shifting across the room. The pieces almost disappear, but you feel them in
            the way you move through your space.&rdquo;
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.25em]">
            Creative director
          </p>
        </div>
      </section>

      <section className="luxury-container grid gap-10 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6 rounded-[2.2rem] border border-border bg-card/80 p-7">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Testimonials
          </p>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              &ldquo;The Horizon table transformed our dining room. It&apos;s sculptural
              yet quiet, and the craftsmanship is exceptional.&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.25em]">
              — Interior studio, Copenhagen
            </p>
          </div>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              &ldquo;Pieces that feel like they&apos;ve always belonged in our home.
              The oak develops a soft patina instead of wearing out.&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.25em]">
              — Private residence, New York
            </p>
          </div>
        </div>
        <div className="space-y-5 rounded-[2.2rem] border border-border bg-[#111111] p-7 text-background">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Newsletter
          </p>
          <h3 className="text-lg font-medium tracking-tight text-white">
            Receive studio notes and early previews.
          </h3>
          <p className="text-sm text-muted-foreground">
            A considered dispatch, a few times a year—no noise, just new work, material
            studies, and invitations.
          </p>
          <form className="mt-2 space-y-3">
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-full border border-border bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-background px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-foreground"
            >
              Join the list
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

