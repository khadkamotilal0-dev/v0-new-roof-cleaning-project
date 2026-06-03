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
      <div className="absolute inset-0 bg-black/85" aria-hidden="true" />

      <div className="relative z-10 flex flex-1 flex-col items-center px-4 pt-10 pb-16 text-center">
        {/* Brand */}
        <div className="mb-8 flex items-center justify-center">
          <img
            src="/images/logo-white.png"
            alt="EverBright Pressure Washing & Roof Cleaning logo"
            className="h-24 w-auto md:h-28"
          />
        </div>

        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-brand md:text-sm">
          Attention Adelaide Homeowners
        </p>

        <h1 className="mb-4 max-w-4xl text-pretty font-[family-name:var(--font-poppins)] text-3xl font-bold uppercase leading-[1.1] tracking-tight text-background md:text-5xl">
          <span className="block">Erase ugly roof stains</span>
          <span className="block">and make your home</span>
          <span className="block text-brand">look cared for</span>
        </h1>

        <p className="mb-8 max-w-md text-pretty text-base font-light leading-relaxed text-background/90 md:text-lg">
          <span className="block">
            Professional Roof Cleaning in <strong className="font-semibold">Adelaide</strong>
          </span>
          <span className="block">
            <strong className="font-semibold">and Surrounding Areas</strong>
          </span>
        </p>

        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-background md:text-sm">
          Get a fast free roof cleaning quote
        </p>

        {/* Quiz card */}
        <div className="w-full max-w-xs rounded-lg bg-card p-4 text-left shadow-2xl">
          <p className="mb-3 text-center text-sm font-bold leading-snug text-card-foreground">
            What does your roof need help with?
          </p>
          <div className="flex flex-col gap-1.5">
            {OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelected(opt)}
                className={`w-full rounded-md border px-3 py-2 text-left text-sm transition-all ${
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
            className="mt-3 w-full rounded-md bg-brand py-2.5 text-sm font-bold text-brand-foreground transition-opacity hover:opacity-90"
          >
            Next →
          </button>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            No obligation. We reply within 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}
