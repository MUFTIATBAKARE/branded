import { Ratio, Sparkles, Download } from 'lucide-react'

const features = [
  {
    icon: Ratio,
    title: 'Multi-resolution outputs',
    description:
      'Automatically generate high-fidelity variations for Instagram, LinkedIn, and Meta Ads in a single click.',
  },
  {
    icon: Sparkles,
    title: 'Text-less AI backgrounds',
    description:
      'Leverage clean background generation that preserves space for your typography and brand assets.',
  },
  {
    icon: Download,
    title: 'PNG exports',
    description:
      'Instant lossless exports with alpha transparency support for seamless integration into your design workflow.',
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-24 md:px-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group flex flex-col gap-4 rounded-xl border border-brand-border/60 bg-brand-surface p-8 transition-all duration-300 hover:border-brand-accent/40 hover:shadow-[0_0_40px_rgba(246,96,24,0.12)]"
          >
            <div className="flex size-12 items-center justify-center rounded-lg bg-brand-surface-2 text-brand-accent">
              <feature.icon className="size-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-text">
              {feature.title}
            </h3>
            <p className="leading-relaxed text-brand-muted">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
