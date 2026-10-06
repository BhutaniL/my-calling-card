import { profile } from '@/lib/profile'

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#competencies', label: 'Competencies' },
  { href: '#connect', label: 'Connect' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-primary-foreground/10 bg-primary/95 text-primary-foreground backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-6">
        <a
          href="#top"
          className="whitespace-nowrap font-serif text-base font-semibold tracking-tight sm:text-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-foreground"
        >
          {profile.name}
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2">
            {links.map((link) => (
              <li key={link.href} className={link.href === '#connect' ? undefined : 'hidden sm:block'}>
                <a
                  href={link.href}
                  className="rounded-md px-2 py-1.5 text-sm text-primary-foreground/75 sm:px-3 transition-colors hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-primary-foreground sm:px-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
