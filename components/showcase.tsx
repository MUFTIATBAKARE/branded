import Link from 'next/link'
import Image from 'next/image'
import { Wand2 } from 'lucide-react'

function HoverOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
      <span className="rounded bg-white px-4 py-2 text-sm font-bold text-black shadow-xl">
        Click to customize
      </span>
    </div>
  )
}

export function Showcase() {
  return (
    <section
      id="showcase"
      className="mx-auto max-w-7xl space-y-16 px-4 py-24 md:px-10"
    >
      <div className="space-y-4 text-center">
        <h2 className="font-display text-4xl font-bold text-brand-text">
          Built with <span className="text-brand-accent">branded</span>
        </h2>
        <p className="text-brand-muted">
          Studio-quality results generated in seconds, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Banner 1: Geometric Mesh */}
        <Link
          href="/studio/templates"
          className="group relative block aspect-video overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-[#121214]">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-40 mix-blend-overlay"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, #f66018 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="relative z-10 p-8 text-center">
              <h3 className="mb-4 font-display text-2xl font-extrabold tracking-tighter text-white">
                DEPLOY IN SECONDS
              </h3>
              <div className="mb-6 flex items-center justify-center gap-2">
                <Wand2 className="size-4 text-brand-accent" aria-hidden="true" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-accent">
                  branded
                </span>
              </div>
              <span className="rounded-full bg-brand-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-on-accent">
                Read Docs
              </span>
            </div>
          </div>
          <HoverOverlay />
        </Link>

        {/* Banner 2: Terracotta Texture */}
        <Link
          href="/studio/templates"
          className="group relative block aspect-square overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-surface-2 p-10 text-center">
            <Image
              src="/images/terracotta-texture.png"
              alt=""
              fill
              className="object-cover opacity-25"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="relative z-10">
              <p className="mb-2 font-accent italic text-brand-primary">
                Exclusive Release
              </p>
              <h3 className="font-accent text-3xl uppercase leading-tight tracking-[0.2em] text-brand-text md:text-4xl">
                The Autumn Collection
              </h3>
            </div>
          </div>
          <HoverOverlay />
        </Link>

        {/* Banner 3: Espresso Backdrop */}
        <Link
          href="/studio/templates"
          className="group relative block aspect-video overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 flex items-center overflow-hidden bg-[#0a0604] px-8">
            <div className="absolute right-0 top-0 h-full w-2/3 -skew-x-12 translate-x-1/4 bg-gradient-to-l from-brand-accent/20 to-transparent" />
            <div className="relative z-10 max-w-[70%]">
              <h3 className="mb-2 font-display text-2xl font-bold leading-tight text-brand-text">
                BUILDING THE FUTURE OF FINTECH
              </h3>
              <div className="h-1 w-12 bg-brand-accent" />
            </div>
          </div>
          <HoverOverlay />
        </Link>
      </div>
    </section>
  )
}
