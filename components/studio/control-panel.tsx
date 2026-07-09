"use client"

import Image from "next/image"
import {
  Layers,
  LayoutGrid,
  ImageIcon,
  RectangleHorizontal,
  Square,
  StretchHorizontal,
  Sparkles,
  UploadCloud,
  Cpu,
  Download,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { AI_STYLES, DIMENSIONS, type AiStyle, type Dimension } from "./styles"

type ControlPanelProps = {
  dimension: Dimension
  setDimension: (d: Dimension) => void
  style: string
  setStyle: (id: string) => void
  headline: string
  setHeadline: (v: string) => void
  sub: string
  setSub: (v: string) => void
  cta: string
  setCta: (v: string) => void
  contrast: number
  setContrast: (v: number) => void
  generating: boolean
  onGenerate: () => void
}

const DIM_ICONS: Record<Dimension, typeof RectangleHorizontal> = {
  landscape: RectangleHorizontal,
  square: Square,
  banner: StretchHorizontal,
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-body text-[12px] font-semibold uppercase tracking-[0.05em] text-brand-muted flex items-center gap-2">
      {children}
      <span className="w-1 h-1 bg-brand-border rounded-full" />
    </h3>
  )
}

export function ControlPanel(props: ControlPanelProps) {
  const {
    dimension,
    setDimension,
    style,
    setStyle,
    headline,
    setHeadline,
    sub,
    setSub,
    cta,
    setCta,
    contrast,
    setContrast,
    generating,
    onGenerate,
  } = props

  return (
    <aside className="w-80 h-full border-r border-brand-border flex flex-col bg-brand-bg z-20 shrink-0">
      {/* Brand header */}
      <div className="px-6 py-8 flex items-center gap-3">
        <span className="grid place-items-center h-8 w-8 rounded-lg bg-brand-accent text-brand-on-accent">
          <Sparkles className="h-5 w-5" />
        </span>
        <span className="font-display text-xl font-extrabold lowercase text-brand-text">
          branded
        </span>
      </div>

      {/* Global nav */}
      <nav className="px-6 flex gap-2 mb-8">
        <button
          className="p-2 bg-brand-surface-2 rounded-lg text-brand-primary border border-brand-primary/20 transition-all hover:bg-brand-surface"
          title="Layers"
        >
          <Layers className="h-5 w-5" />
        </button>
        <button
          className="p-2 rounded-lg text-brand-muted hover:text-brand-primary transition-all"
          title="Templates"
        >
          <LayoutGrid className="h-5 w-5" />
        </button>
        <button
          className="p-2 rounded-lg text-brand-muted hover:text-brand-primary transition-all"
          title="Gallery"
        >
          <ImageIcon className="h-5 w-5" />
        </button>
      </nav>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-6 flex flex-col gap-8 pb-10">
        {/* Dimensions */}
        <section>
          <SectionLabel>Dimensions</SectionLabel>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {(Object.keys(DIMENSIONS) as Dimension[]).map((key) => {
              const Icon = DIM_ICONS[key]
              const active = dimension === key
              return (
                <button
                  key={key}
                  onClick={() => setDimension(key)}
                  className={cn(
                    "flex flex-col items-center justify-center p-3 border rounded-lg transition-colors",
                    active
                      ? "border-brand-accent bg-brand-accent/10 text-brand-text"
                      : "border-brand-border text-brand-muted hover:border-brand-accent/50",
                  )}
                >
                  <Icon className="h-5 w-5 mb-1" />
                  <span className="text-[10px] font-semibold">
                    {DIMENSIONS[key].label}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        {/* AI Style */}
        <section>
          <div className="flex justify-between items-center">
            <SectionLabel>AI Style</SectionLabel>
            <Sparkles className="h-4 w-4 text-brand-primary" />
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {AI_STYLES.map((s: AiStyle) => {
              const active = style === s.id
              return (
                <button
                  key={s.id}
                  onClick={() => setStyle(s.id)}
                  className={cn(
                    "text-left cursor-pointer p-2 border rounded-lg bg-brand-surface-dim group transition-all duration-300 hover:-translate-y-0.5",
                    active
                      ? "border-brand-accent shadow-[0_0_15px_rgba(246,96,24,0.2)]"
                      : "border-brand-border hover:border-brand-accent/50",
                  )}
                >
                  <div className="aspect-video rounded overflow-hidden mb-2 bg-brand-surface">
                    <Image
                      src={s.image || "/placeholder.svg"}
                      alt={s.alt}
                      width={160}
                      height={90}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <span className="text-[11px] font-bold block text-brand-text">
                    {s.name}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        {/* Content editor */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Content Editor</SectionLabel>
          <Field label="Headline" value={headline} onChange={setHeadline} />
          <Field label="Subheadline" value={sub} onChange={setSub} />
          <Field label="CTA Label" value={cta} onChange={setCta} />
          <div className="pt-2">
            <div className="flex justify-between items-center mb-2">
              <label className="text-[10px] text-brand-subtle uppercase font-bold">
                Contrast
              </label>
              <span className="text-[10px] text-brand-primary">{contrast}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={contrast}
              onChange={(e) => setContrast(Number(e.target.value))}
              className="w-full accent-brand-accent bg-brand-surface rounded-full h-1 appearance-none cursor-pointer"
            />
          </div>
        </section>

        {/* Color & logo */}
        <section className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[10px] text-brand-subtle uppercase font-bold">
                Text Color
              </label>
              <div className="flex items-center gap-2 bg-brand-surface-dim p-2 rounded-lg border border-brand-border">
                <span className="w-4 h-4 rounded-full bg-white border border-white/20" />
                <span className="text-[10px] font-mono text-brand-muted">#FFFFFF</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[10px] text-brand-subtle uppercase font-bold">
                Accent
              </label>
              <div className="flex items-center gap-2 bg-brand-surface-dim p-2 rounded-lg border border-brand-border">
                <span className="w-4 h-4 rounded-full bg-brand-accent border border-white/20" />
                <span className="text-[10px] font-mono text-brand-muted">#F66018</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-brand-subtle uppercase font-bold">
              Logo Dropzone
            </label>
            <button className="border-2 border-dashed border-brand-border rounded-xl p-6 flex flex-col items-center justify-center gap-2 hover:border-brand-accent/40 transition-colors group cursor-pointer">
              <UploadCloud className="h-5 w-5 text-brand-subtle group-hover:text-brand-accent transition-colors" />
              <span className="text-[10px] text-brand-subtle font-bold">
                Upload SVG / PNG
              </span>
            </button>
          </div>
        </section>
      </div>

      {/* Footer actions */}
      <div className="p-6 border-t border-brand-border flex flex-col gap-3 bg-brand-surface-dim">
        <button
          onClick={onGenerate}
          disabled={generating}
          className="shimmer-btn w-full text-brand-on-accent py-3 rounded-lg font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform disabled:opacity-70 disabled:active:scale-100"
        >
          <Cpu className="h-4 w-4" />
          {generating ? "GENERATING..." : "GENERATE AI BACKGROUND"}
        </button>
        <button className="w-full bg-transparent text-brand-accent border border-brand-accent/30 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-brand-accent/5 active:scale-95 transition-transform">
          <Download className="h-4 w-4" />
          EXPORT PRODUCTION PNG
        </button>
      </div>
    </aside>
  )
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] text-brand-subtle uppercase font-bold px-1">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-brand-surface-dim border border-brand-border rounded-lg text-sm px-3 py-2 text-brand-text focus:border-brand-accent outline-none transition-all"
      />
    </div>
  )
}
