import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 py-24 text-center">
      {/* radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, rgba(246,96,24,0.18) 0%, rgba(29,16,11,0) 70%)',
        }}
      />

      <div className="relative mx-auto max-w-4xl space-y-8">
        <h1 className="text-balance font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-brand-text md:text-6xl lg:text-7xl">
          Generate Beautiful, Pixel-Perfect{' '}
          <span className="text-brand-accent">Ad Graphics</span> Instantly
        </h1>

        <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-brand-muted">
          Harness the power of Flux AI and HTML5 canvas precision. Create
          stunning, production-ready marketing assets without the text-rendering
          artifacts of traditional generative AI.
        </p>

        <div className="flex flex-col items-center justify-center gap-6 pt-4 sm:flex-row">
          <Link
            href="/auth"
            className="shimmer-btn group flex items-center gap-3 rounded-xl px-10 py-4 text-lg font-bold text-white"
          >
            Enter Studio
            <ArrowRight
              className="size-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          <a
            href="#showcase"
            className="border-b border-brand-border font-semibold text-brand-text transition-colors hover:text-brand-accent"
          >
            View Sample Templates
          </a>
        </div>
      </div>
    </section>
  )
}
