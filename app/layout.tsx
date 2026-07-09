import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Hanken_Grotesk, Geist, Source_Serif_4 } from 'next/font/google'
import './globals.css'

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-hanken',
})

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-geist',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400'],
  variable: '--font-source-serif',
})

export const metadata: Metadata = {
  title: 'branded | Pixel-Perfect Ad Graphics',
  description:
    'Generate beautiful, pixel-perfect ad graphics instantly. Harness Flux AI and HTML5 canvas precision to create production-ready marketing assets.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [{ color: '#1d100b' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${geist.variable} ${sourceSerif.variable} bg-brand-bg`}
    >
      <body className="font-body antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
