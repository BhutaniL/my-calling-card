import { GraduationCap } from 'lucide-react'
import { profile } from '@/lib/profile'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-20 text-center sm:py-28 md:flex-row md:items-center md:gap-14 md:text-left">
        <div
          role="img"
          aria-label={`Profile picture placeholder for ${profile.name}`}
          className="flex size-40 shrink-0 items-center justify-center rounded-full border-4 border-primary-foreground/20 bg-primary-foreground/10 ring-8 ring-primary-foreground/5 sm:size-48"
        >
          <span className="font-serif text-5xl font-semibold tracking-tight text-primary-foreground/90 sm:text-6xl">
            {profile.initials}
          </span>
        </div>

        <div className="flex flex-col items-center gap-5 md:items-start">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/70">
            {profile.title}
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-5xl font-semibold tracking-tight text-balance sm:text-6xl"
          >
            {profile.name}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-pretty text-primary-foreground/85">
            8+ years of experience in product, strategy, and business analysis across logistics,
            fintech, and SaaS.
          </p>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground/90">
            <GraduationCap className="size-4 shrink-0" aria-hidden="true" />
            <span>
              Master of Science in Project Management, Northeastern University, Seattle (GPA - 3.8,
              June 2026)
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
