export type Dimension = "landscape" | "square" | "banner"

export const DIMENSIONS: Record<
  Dimension,
  { label: string; width: number; aspect: string; pixels: string }
> = {
  landscape: { label: "16:9", width: 800, aspect: "16 / 9", pixels: "1920 x 1080" },
  square: { label: "1:1", width: 550, aspect: "1 / 1", pixels: "1080 x 1080" },
  banner: { label: "Banner", width: 1000, aspect: "21 / 9", pixels: "1500 x 640" },
}

export type AiStyle = {
  id: string
  name: string
  image: string
  alt: string
}

export const AI_STYLES: AiStyle[] = [
  {
    id: "tech",
    name: "Tech Minimalist",
    image: "/images/studio/style-tech.png",
    alt: "Tech minimalist background with clean lines and soft amber glows",
  },
  {
    id: "retro",
    name: "Retro Vintage",
    image: "/images/studio/style-retro.png",
    alt: "Retro vintage studio aesthetic with grainy film texture and warm ochre tones",
  },
  {
    id: "corporate",
    name: "Corporate Ochre",
    image: "/images/studio/style-corporate.png",
    alt: "Corporate ochre depth with layered glass panels and burnt orange glows",
  },
  {
    id: "cyber",
    name: "Cyber Amber",
    image: "/images/studio/style-cyber.png",
    alt: "Cyberpunk amber scene with glowing industrial orange neons",
  },
]
