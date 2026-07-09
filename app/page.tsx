import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { Showcase } from '@/components/showcase'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Features />
        <HowItWorks />
        <Showcase />
      </main>
      <SiteFooter />
    </div>
  )
}
