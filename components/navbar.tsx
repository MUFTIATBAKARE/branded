import Link from 'next/link'
import { Wand2 } from 'lucide-react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Showcase', href: '#showcase' },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-brand-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Wand2 className="size-6 text-brand-accent" aria-hidden="true" />
          <span className="font-display text-2xl font-extrabold text-brand-primary">
            branded
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Link
          href="/auth"
          className="rounded-lg bg-brand-accent px-6 py-2 text-sm font-bold text-brand-on-accent transition-transform duration-200 hover:scale-95"
        >
          Launch Studio
        </Link>
      </div>
    </nav>
  )
}
