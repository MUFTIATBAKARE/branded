import Image from 'next/image'
import { PenLine, Cpu, FileDown } from 'lucide-react'

const steps = [
  {
    icon: PenLine,
    title: 'Copy & Logo',
    description:
      'Input your primary call-to-action and upload SVG brand assets. Our system preserves vector integrity.',
  },
  {
    icon: Cpu,
    title: 'Mood Presets',
    description:
      'Select from curated stylistic algorithms or define custom lighting and depth parameters for Flux AI.',
  },
  {
    icon: FileDown,
    title: 'Composite & Export',
    description:
      'Watch as the canvas layers your brand elements over AI-generated imagery for the perfect final composite.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-surface-dim/50 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 md:px-10 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Workflow
            </span>
            <h2 className="text-balance font-display text-4xl font-bold leading-tight text-brand-text md:text-5xl">
              Precision-Engineered Creative Suite
            </h2>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="group flex gap-6">
                <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full border border-brand-accent font-bold text-brand-accent transition-all group-hover:bg-brand-accent group-hover:text-brand-on-accent">
                  {index + 1}
                </div>
                <div>
                  <h4 className="mb-1 flex items-center gap-2 font-display text-xl font-bold text-brand-text">
                    <step.icon
                      className="size-5 text-brand-accent"
                      aria-hidden="true"
                    />
                    {step.title}
                  </h4>
                  <p className="text-brand-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-brand-border shadow-2xl">
          <Image
            src="/images/studio-preview.png"
            alt="branded studio interface showing an ad graphic being composited on a canvas"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-text">
            <span className="size-2 animate-pulse rounded-full bg-green-500" />
            Render engine ready
          </div>
        </div>
      </div>
    </section>
  )
}
