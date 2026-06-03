import { CheckIcon, GoogleIcon, HouseIcon, HourglassIcon } from "@/components/icons"

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
              <div className="font-heading text-2xl leading-none text-card-foreground md:text-3xl">{item.num}</div>
              <div className="mt-1 text-xs font-medium text-muted-foreground md:text-sm">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function HowItWorks() {
  const steps = [
    { num: "01", title: "Fill in your details", desc: "Tell us your name, phone, email and address below. Takes about 30 seconds." },
    { num: "02", title: "We assess your roof", desc: "We come out to your property in Adelaide or surrounds and inspect your roof at no cost." },
    { num: "03", title: "Exact price, no surprises", desc: "You get a clear, fixed quote. We only proceed when you're completely happy with it." },
  ]
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <div className="mb-12 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-brand">How it works</p>
        <h2 className="font-heading text-4xl tracking-wide text-foreground md:text-5xl">
          Three simple steps to a clean roof
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.num} className="rounded-lg border border-border bg-secondary p-6 text-left">
            <div className="mb-3 font-heading text-5xl leading-none text-brand/30">{s.num}</div>
            <h3 className="mb-2 font-bold text-foreground">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Transformations() {
  const items = [
    { src: "/images/transform-1.png", alt: "Close-up of a roof being pressure washed showing the dirty section next to the freshly cleaned section" },
    { src: "/images/transform-2.png", alt: "A clean, well-maintained Adelaide home with a spotless roof under blue sky" },
  ]
  return (
    <section className="mx-auto max-w-5xl px-4 pb-4">
      <div className="mb-10 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-brand">Real results</p>
        <h2 className="font-heading text-4xl tracking-wide text-foreground md:text-5xl">See the difference</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.src} className="overflow-hidden rounded-lg border border-border">
            <img src={item.src || "/placeholder.svg"} alt={item.alt} className="h-64 w-full object-cover" />
          </div>
        ))}
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
