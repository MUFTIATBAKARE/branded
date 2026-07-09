"use client"

import { useState } from "react"
import { ControlPanel } from "@/components/studio/control-panel"
import { StudioCanvas } from "@/components/studio/studio-canvas"
import type { Dimension } from "@/components/studio/styles"

export default function StudioPage() {
  const [dimension, setDimension] = useState<Dimension>("landscape")
  const [style, setStyle] = useState("tech")
  const [headline, setHeadline] = useState("PRECISION STUDIO")
  const [sub, setSub] = useState("Engineering the future of visual identity.")
  const [cta, setCta] = useState("LAUNCH STUDIO")
  const [contrast, setContrast] = useState(85)
  const [generating, setGenerating] = useState(false)

  function handleGenerate() {
    if (generating) return
    setGenerating(true)
    setTimeout(() => setGenerating(false), 3000)
  }

  return (
    <div className="h-screen flex overflow-hidden text-brand-text">
      <ControlPanel
        dimension={dimension}
        setDimension={setDimension}
        style={style}
        setStyle={setStyle}
        headline={headline}
        setHeadline={setHeadline}
        sub={sub}
        setSub={setSub}
        cta={cta}
        setCta={setCta}
        contrast={contrast}
        setContrast={setContrast}
        generating={generating}
        onGenerate={handleGenerate}
      />
      <StudioCanvas
        dimension={dimension}
        style={style}
        headline={headline.toUpperCase()}
        sub={sub}
        cta={cta.toUpperCase()}
        contrast={contrast}
        generating={generating}
      />
    </div>
  )
}
