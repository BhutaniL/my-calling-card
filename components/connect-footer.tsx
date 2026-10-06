import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '@/lib/profile'

export function ConnectFooter() {
  return (
    <footer
      id="connect"
      aria-labelledby="connect-heading"
      className="scroll-mt-16 bg-primary text-primary-foreground"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-20 text-center">
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/70">
            Get in touch
          </p>
          <h2
            id="connect-heading"
            className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Connect with Me
          </h2>
        </div>

        <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-foreground"
          >
            LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-foreground"
          >
            <Mail className="size-4" aria-hidden="true" />
            Email
          </a>
        </div>

        <p className="text-sm text-primary-foreground/70">
          {profile.email} · {profile.linkedinLabel}
        </p>

        <p className="border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50">
          {`© ${new Date().getFullYear()} ${profile.name}`}
        </p>
      </div>
    </footer>
  )
}
