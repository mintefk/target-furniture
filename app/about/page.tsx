import { BackButton } from "@/components/back-button";

export default function AboutPage() {
  return (
    <div className="luxury-container space-y-10 py-10">
      <BackButton />
      <div className="h-px w-full bg-border/70" />
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          About
        </p>
        <h1 className="text-2xl font-medium tracking-tight">
          A studio for quiet luxury.
        </h1>
        <p className="max-w-xl text-sm text-muted-foreground">
          Target Furniture is a design-led furniture house exploring the intersection
          of architecture, art, and daily ritual.
        </p>
      </header>

      <section className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
          <p>
            Our collections are built around a few essential gestures: a softened
            corner, a generous seat depth, the way a table edge meets the palm of your
            hand. These details are subtle, but they&apos;re what you feel every day.
          </p>
          <p>
            We design in small series, allowing each piece to be refined over time
            rather than reinvented each season. The result is a collection that feels
            cohesive, calm, and quietly luxurious.
          </p>
        </div>
        <div className="space-y-4 rounded-[2.2rem] border border-border bg-card/80 p-7 text-sm text-muted-foreground">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Mission
          </p>
          <p>
            To create enduring furniture that supports daily life with a sense of ease,
            calm, and beauty—without excess.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-[2.2rem] border border-border bg-[#f3e7da] p-7">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Craftsmanship
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground">
              Materials
            </p>
            <p>
              We work with solid oak, walnut, marble, and performance fabrics chosen for
              longevity—not trend.
            </p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground">
              Workshops
            </p>
            <p>
              Each piece is produced in collaboration with family-owned workshops across
              Europe, honoring generational expertise.
            </p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground">
              Responsibility
            </p>
            <p>
              Responsible sourcing, repairable construction, and timeless silhouettes
              reduce the need for replacement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

