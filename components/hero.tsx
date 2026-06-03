"use client"

import { useState } from "react"

const OPTIONS = [
  "Black streaks or stains",
  "Moss or algae buildup",
  "General dirt or discoloration",
  "Roof looks old or neglected",
  "I'm not sure",
]

export function Hero() {
  const [selected, setSelected] = useState<string | null>(null)

  const scrollToForm = () => {
    document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex min-h-screen flex-col">
      <img
        src="/images/roof-hero-real.jpg"
        alt="Before and after comparison of a roof cleaning, showing dirty moss-covered tiles transformed to clean restored terracotta tiles"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

      <div className="relative z-10 flex flex-1 flex-col items-center px-4 pt-10 pb-16 text-center">
        {/* Brand */}
        <div className="mb-8 flex items-center gap-2">
          <span className="font-heading text-3xl tracking-wide text-background md:text-4xl">
            EVER<span className="text-brand">BRIGHT</span>
          </span>
        </div>

        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-brand md:text-sm">
          Attention Adelaide Homeowners
        </p>

        <h1 className="mb-4 max-w-4xl text-pretty font-[family-name:var(--font-poppins)] text-2xl font-bold uppercase leading-[1.1] tracking-tight text-background md:text-4xl">
          <span className="block">Erase ugly roof stains and</span>
          <span className="block">
            make your home <span className="text-brand">look cared for</span>
          </span>
        </h1>

        <p className="mb-8 max-w-md text-pretty text-sm font-light leading-relaxed text-background/90 md:text-base">
          <span className="block">
            Professional Roof Cleaning in <strong className="font-semibold">Adelaide</strong>
          </span>
          <span className="block">
            <strong className="font-semibold">and Surrounding Areas</strong>
          </span>
        </p>

        {/* Quiz card */}
        <div className="w-full max-w-sm rounded-lg bg-card p-5 text-left shadow-2xl">
          <p className="mb-4 text-center text-base font-bold leading-snug text-card-foreground">
            What does your roof need help with?
          </p>
          <div className="flex flex-col gap-2">
            {OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelected(opt)}
                className={`w-full rounded-md border px-3 py-2.5 text-left text-sm transition-all ${
                  selected === opt
                    ? "border-brand bg-brand font-semibold text-brand-foreground"
                    : "border-border bg-card text-card-foreground hover:border-brand/50 hover:bg-secondary"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <button
            onClick={scrollToForm}
            className="mt-4 w-full rounded-md bg-brand py-3 text-sm font-bold text-brand-foreground transition-opacity hover:opacity-90"
          >
            Next →
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            No obligation. We reply within 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}
