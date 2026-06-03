import { Hero } from "@/components/hero"
import { AssessmentForm } from "@/components/assessment-form"
import { StatsStrip, HowItWorks, Transformations, WhyUs, SiteFooter } from "@/components/sections"
import { Logo } from "@/components/logo"

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <header className="bg-navy px-4 py-3 text-navy-foreground">
        <div className="mx-auto flex max-w-5xl items-center justify-center md:justify-start">
          <Logo />
        </div>
      </header>
      <Hero />
      <StatsStrip />
      <HowItWorks />
      <Transformations />
      <AssessmentForm />
      <WhyUs />
      <SiteFooter />
    </main>
  )
}
