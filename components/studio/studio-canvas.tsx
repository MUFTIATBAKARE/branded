"use client"

import Image from "next/image"
import {
  History,
  ZoomIn,
  ZoomOut,
  Mouse,
  Move,
  Loader2,
  Sparkles,
} from "lucide-react"
import { AI_STYLES, DIMENSIONS, type Dimension } from "./styles"

type StudioCanvasProps = {
  dimension: Dimension
  style: string
  headline: string
  sub: string
  cta: string
  contrast: number
  generating: boolean
}

export function StudioCanvas({
  dimension,
  style,
  headline,
  sub,
  cta,
  contrast,
  generating,
}: StudioCanvasProps) {
  const dim = DIMENSIONS[dimension]
  const activeStyle =
    AI_STYLES.find((s) => s.id === style) ?? AI_STYLES[0]

  return (
    <main className="flex-1 h-full flex flex-col bg-[#0b0e14] relative overflow-hidden">
      {/* Toolbar */}
      <header className="h-16 flex items-center justify-between px-8 z-10 glass-panel shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-brand-surface px-3 py-1.5 rounded-full border border-brand-border">
            <span
              className={
                generating
                  ? "w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(246,96,24,0.6)]"
                  : "w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
              }
            />
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text">
              {generating ? "Calling Flux Engine..." : "System Ready"}
            </span>
          </div>
          <div className="h-4 w-px bg-brand-border" />
          <span className="text-[11px] text-brand-muted font-mono">
            {dim.pixels} (300 DPI)
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-brand-muted hover:text-brand-primary transition-colors">
            <History className="h-4 w-4" />
            <span className="text-[11px] font-bold uppercase">Versions</span>
          </button>
          <div className="flex bg-brand-surface rounded-lg p-1 border border-brand-border">
            <button className="p-1.5 rounded text-brand-primary bg-brand-surface-2">
              <ZoomIn className="h-4 w-4" />
            </button>
            <button className="p-1.5 rounded text-brand-muted">
              <ZoomOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Canvas body */}
      <div className="flex-1 canvas-grid flex items-center justify-center p-12 overflow-auto relative">
        {generating && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 animate-bounce">
            <div className="bg-brand-accent text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-3">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Calling Flux Engine...
              </span>
            </div>
          </div>
        )}

        {/* Resizing container */}
        <div
          className="relative shadow-[0_0_100px_rgba(0,0,0,0.8)] transition-all duration-500"
          style={{
            width: dim.width,
            aspectRatio: dim.aspect,
            transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          {/* Layer 1: background image */}
          <div className="absolute inset-0 bg-brand-surface overflow-hidden rounded-sm">
            {generating && (
              <div className="absolute inset-0 canvas-shimmer z-20" />
            )}
            <Image
              src={activeStyle.image || "/placeholder.svg"}
              alt={activeStyle.alt}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Layer 2: gradient mask (contrast-driven) */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-black via-black/30 to-transparent"
            style={{ opacity: contrast / 100 }}
          />

          {/* Layer 3: content nodes */}
          <div className="absolute inset-0 p-12 flex flex-col justify-end">
            <div className="flex flex-col gap-4 max-w-lg">
              <h2 className="font-display text-[48px] font-extrabold text-white leading-tight drop-shadow-lg tracking-tight uppercase text-balance">
                {headline}
              </h2>
              <p className="font-body text-lg text-white/80 max-w-sm font-light text-pretty">
                {sub}
              </p>
              <div className="pt-4">
                <span className="inline-block px-8 py-3 bg-brand-accent text-white font-extrabold text-sm rounded-full shadow-lg border-t border-white/20 uppercase tracking-widest">
                  {cta}
                </span>
              </div>
            </div>
          </div>

          {/* Layer 4: brand stamp */}
          <div className="absolute top-8 right-8 flex items-center gap-2 opacity-60 mix-blend-screen">
            <Sparkles className="h-5 w-5 text-white" />
            <span className="font-display text-lg font-extrabold text-white lowercase">
              branded
            </span>
          </div>

          {/* Layer 5: precision corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />
        </div>

        {/* Atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-accent/10 blur-[150px] -z-10 rounded-full" />
      </div>

      {/* Footer hints */}
      <footer className="h-12 border-t border-brand-border flex items-center justify-center px-6 gap-8 bg-brand-surface-dim/50 shrink-0">
        <div className="flex items-center gap-2 text-[10px] font-bold text-brand-subtle uppercase tracking-widest">
          <Mouse className="h-4 w-4" /> Left Click to Select Layer
        </div>
        <div className="h-3 w-px bg-brand-border/30" />
        <div className="flex items-center gap-2 text-[10px] font-bold text-brand-subtle uppercase tracking-widest">
          <Move className="h-4 w-4" /> Drag to Reposition
        </div>
      </footer>
    </main>
  )
}
