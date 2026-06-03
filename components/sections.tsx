"use client"

import { useState } from "react"
import { CheckIcon, GoogleIcon, HouseIcon, HourglassIcon, StarIcon, PlusIcon } from "@/components/icons"

export function StatsStrip() {
  const stats = [
    { icon: <GoogleIcon className="text-brand" />, num: "38+", label: "5-star reviews" },
    { icon: <HouseIcon className="text-brand" />, num: "100+", label: "Adelaide roofs cleaned" },
    { icon: <HourglassIcon className="text-brand" />, num: "6", label: "Years of experience" },
  ]
  return (
    <div className="relative z-20">
      <div className="flex w-full divide-x divide-border border-y border-border bg-card shadow-lg">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-1 items-center justify-center gap-3 px-3 py-5">
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <div className="font-[family-name:var(--font-slab)] text-3xl font-extrabold leading-none text-card-foreground md:text-4xl">
                {item.num}
              </div>
              <div className="mt-1 text-sm font-medium text-muted-foreground md:text-base">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Fill in Your Details",
      desc: "Tell us your name and the best way to reach you. It takes about 30 seconds, with no obligation.",
    },
    {
      num: "2",
      title: "We Assess Your Roof",
      desc: "We visit your home in Adelaide or surrounds and check your roof in person, completely free.",
    },
    {
      num: "3",
      title: "Get a Clear, Fixed Price",
      desc: "You receive a straightforward quote with no surprises. We only get started once you're happy.",
    },
  ]
  const scrollToForm = () => document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" })
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <div className="mb-12 text-center">
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.25em] text-brand">How it works</p>
        <h2 className="font-heading text-5xl font-extrabold tracking-wide text-[#0f2a4a] md:text-7xl">
          Three simple steps to a clean roof
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.num} className="rounded-lg border border-border bg-secondary p-6 text-left">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2a4a] font-heading text-3xl leading-none text-background">
              {s.num}
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
            <p className="text-sm leading-relaxed text-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center gap-5 rounded-lg bg-[#0f2a4a] px-6 py-10 text-center">
        <p className="text-balance text-xl font-bold text-background md:text-2xl">
          Ready for a roof that looks fresh from the street?
        </p>
        <button
          onClick={scrollToForm}
          className="rounded-md bg-brand px-8 py-3 text-base font-bold text-brand-foreground transition-opacity hover:opacity-90"
        >
          Get your free quote today
        </button>
      </div>
    </section>
  )
}

export function FAQ() {
  const faqs = [
    {
      q: "Is roof cleaning safe for my roof?",
      a: "Yes. We use a gentle, low-pressure method matched to your roof type, so your tiles or metal stay protected. It lifts away stains, moss, and grime without harsh blasting or damage.",
    },
    {
      q: "Is the quote really free?",
      a: "It is. We come out, look at your roof properly, and give you a clear fixed price with no obligation. There's no cost to get a quote and no pressure to go ahead.",
    },
    {
      q: "Do I need to be home for the clean?",
      a: "Not always. We do need access to your property and roof, but many homeowners are happy to leave us to it. Just let us know what suits you when we book.",
    },
    {
      q: "How long does a roof clean take?",
      a: "Most homes are done in a single visit, often within a few hours depending on the size and condition of your roof. We'll give you a clear time estimate with your quote.",
    },
    {
      q: "Will it actually make a difference I can see?",
      a: "Yes, and the change is usually striking. Removing years of stains and streaks instantly brightens your roof and makes your whole home look cleaner and well cared for from the street.",
    },
    {
      q: "Do you cover my area?",
      a: "We clean roofs right across Adelaide and the surrounding suburbs. Not sure if you're in our patch? Just ask when you request your quote and we'll let you know.",
    },
  ]
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-balance font-heading text-6xl tracking-wide text-[#3b82f6] md:text-8xl">
            FAQ
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-foreground md:text-base">
            Thinking about a fresh, clean roof? Here are quick answers to what Adelaide homeowners ask us most.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-card-foreground md:text-base">{faq.q}</span>
                  <PlusIcon
                    className={`shrink-0 text-brand transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Transformations() {
  const items = [
    { src: "/images/ba-1.png", alt: "Before and after roof cleaning of a red tile roof, transformed from heavy moss and lichen to vibrant clean tiles", aspect: "1414/850" },
    { src: "/images/ba-2.png", alt: "Before and after roof cleaning of a suburban Adelaide tile roof with solar panels, from dark mossy tiles to clean orange tiles", aspect: "1414/918" },
    { src: "/images/ba-3.png", alt: "Before and after roof cleaning showing tiles caked in moss and debris restored to clean orange tiles", aspect: "1414/918" },
  ]
  return (
    <section className="pb-10">
      <div className="mb-6 bg-[#0f2a4a] px-4 py-8 text-center">
        <h2
          className="text-balance text-4xl font-bold uppercase leading-tight tracking-wide text-background md:text-6xl"
          style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}
        >
          <span className="block">See the Difference Our</span>
          <span className="block">Roof Cleaning Makes</span>
        </h2>
        <p className="mt-3 font-sans text-sm font-bold uppercase text-background/90 md:text-base">
          <span className="block">Roof cleaning results from</span>
          <span className="block">homes across Adelaide</span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.src} className="overflow-hidden">
            <img
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              style={{ aspectRatio: item.aspect }}
              className="w-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Burnside, SA",
      text: "EverBright did an incredible job on our tile roof. Years of moss and lichen completely gone — it looks brand new. Professional, on time and great value. Highly recommend!",
    },
    {
      name: "David T.",
      location: "Glenelg, SA",
      text: "Fantastic service from start to finish. The team was friendly, gave me a clear fixed quote with no surprises, and the result was outstanding. Our roof has never looked better.",
    },
    {
      name: "Emma R.",
      location: "Norwood, SA",
      text: "Could not be happier with the roof clean. They were thorough, tidy and respectful of our property. The before and after photos honestly speak for themselves. Five stars!",
    },
    {
      name: "Michael C.",
      location: "Prospect, SA",
      text: "Booked EverBright after seeing their work on a neighbour's roof. They turned up on time, worked safely and transformed our roof completely. Excellent communication throughout.",
    },
  ]
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <GoogleIcon />
            <div className="flex text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="text-[#FBBC05]" />
              ))}
            </div>
          </div>
          <h2 className="font-heading text-4xl tracking-wide text-foreground md:text-5xl">What Our Customers Say</h2>
          <p className="mt-2 text-base font-medium text-muted-foreground md:text-lg">
            Reviews from Adelaide homeowners
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-lg border border-border bg-card p-6 text-left shadow-sm">
              <div className="mb-3 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="text-[#FBBC05]" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-card-foreground">{r.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.location}</p>
                </div>
                <GoogleIcon className="opacity-70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyUs() {
  const points = [
    "Exact, transparent pricing — no hidden fees, ever",
    "Free on-site assessment before you commit",
    "Locally operated, Adelaide-based team",
    "Fully insured with professional equipment",
  ]
  const stats = [
    { num: "38+", label: "Five-star reviews" },
    { num: "100+", label: "Adelaide roofs cleaned" },
    { num: "6", label: "Years of experience" },
    { num: "$0", label: "Cost for your assessment" },
  ]
  return (
    <section className="bg-navy py-20 text-navy-foreground">
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 className="mb-4 font-heading text-4xl leading-tight tracking-wide">
            Why Adelaide homeowners <span className="text-brand">trust EverBright</span>
          </h2>
          <p className="mb-6 text-sm font-light leading-relaxed text-navy-foreground/70">
            Six years of experience cleaning over a hundred roofs right here in Adelaide.
          </p>
          <div className="flex flex-col gap-3">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 flex-shrink-0 text-brand" />
                <p className="text-sm font-light text-navy-foreground/90">{point}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 p-5">
              <div className="mb-1 font-heading text-3xl leading-none">{s.num}</div>
              <div className="text-xs text-navy-foreground/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-center md:flex-row">
        <span className="font-heading text-2xl tracking-wide text-foreground">
          EVER<span className="text-brand">BRIGHT</span>
        </span>
        <p className="text-xs text-muted-foreground">Serving Adelaide &amp; surrounding areas</p>
        <p className="text-xs text-muted-foreground">© 2025 EverBright Pressure Washing</p>
      </div>
    </footer>
  )
}
