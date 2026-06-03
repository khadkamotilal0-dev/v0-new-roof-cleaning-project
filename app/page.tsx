import { Hero } from "@/components/hero"
import { AssessmentForm } from "@/components/assessment-form"
import { StatsStrip, HowItWorks, Transformations, Reviews, WhyUs, SiteFooter } from "@/components/sections"

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Hero />
      <StatsStrip />
      <Transformations />
      <Reviews />
      <HowItWorks />
      <AssessmentForm />
      <WhyUs />
      <SiteFooter />
    </main>
  )
}
