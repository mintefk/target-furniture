"use client";

import { BackButton } from "@/components/back-button";

export default function ContactPage() {
  return (
    <div className="luxury-container space-y-10 py-10">
      <BackButton />
      <div className="h-px w-full bg-border/70" />
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Contact
        </p>
        <h1 className="text-2xl font-medium tracking-tight">
          Visit the Target studio.
        </h1>
        <p className="max-w-xl text-sm text-muted-foreground">
          Share project details, request material samples, or schedule a private
          appointment with our studio team.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-[1.3fr,1fr]">
        <section className="space-y-6 rounded-[2.2rem] border border-border bg-card/80 p-7">
          <form
            className="space-y-4 text-sm"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — we will be in touch shortly.");
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Project / enquiry
              </label>
              <textarea
                required
                rows={4}
                className="w-full rounded-3xl border border-border bg-background px-4 py-3 text-sm outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Budget (optional)
              </label>
              <input
                type="text"
                placeholder="e.g. $15,000"
                className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-background"
            >
              Send message
            </button>
          </form>
        </section>

        <aside className="space-y-6 rounded-[2.2rem] border border-border bg-[#f3e7da] p-7 text-sm text-muted-foreground">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Studio
            </p>
            <p className="mt-2">
              14 Mercer Street
              <br />
              New York, NY
            </p>
            <p className="mt-2">Open by appointment only.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Contact
            </p>
            <p className="mt-2">studio@targetfurniture.com</p>
            <p>+1 (212) 555-0142</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Social
            </p>
            <div className="mt-2 space-y-1">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-foreground"
              >
                Pinterest
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

