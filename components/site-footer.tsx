import Link from 'next/link'
import { Wand2 } from 'lucide-react'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Studio', href: '/studio' },
      { label: 'Templates', href: '/studio/templates' },
      { label: 'Gallery', href: '/studio/gallery' },
      { label: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Docs', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Integrations', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="mt-24 w-full border-t border-brand-border bg-brand-surface-dim py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-10">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Wand2 className="size-6 text-brand-primary" aria-hidden="true" />
            <span className="font-display text-2xl font-extrabold text-brand-primary">
              branded
            </span>
          </div>
          <p className="pr-8 text-brand-muted">
            High-performance graphics for modern engineering and marketing
            teams.
          </p>
          <p className="text-xs uppercase tracking-widest text-brand-subtle">
            {'\u00A9'} 2026 branded. All rights reserved.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="space-y-4">
            <h5 className="font-bold text-brand-text">{column.title}</h5>
            <ul className="space-y-2 text-brand-muted">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-brand-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
