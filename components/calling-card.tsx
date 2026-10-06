import { ArrowUpRight, Mail } from 'lucide-react'

const EMAIL = 'Lbhutaninew@gmail.com'
const LINKEDIN_PATH = 'linkedin.com/in/laxmibhutani'

const experience = [
  {
    title: 'Product Leadership',
    description:
      '8+ years leading zero-to-one product launches, experimentation, and scaling solutions across fintech, SaaS, and logistics.',
  },
  {
    title: 'Stakeholder & Agile Delivery',
    description:
      'Partnering cross-functionally with engineering, design, legal, and business teams to drive alignment and execution.',
  },
  {
    title: 'Data-Driven Insights',
    description:
      'Leveraging customer feedback and operational data to identify opportunities and scale customer-centric outcomes.',
  },
]

export function CallingCard() {
  return (
    <article className="w-full max-w-xl overflow-hidden rounded-lg border bg-card shadow-sm">
      <header className="bg-primary px-8 py-10 text-primary-foreground sm:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
          Product · Strategy · Business Analysis
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Laxmi Bhutani
        </h1>
      </header>

      <div className="flex flex-col gap-8 px-8 py-8 sm:px-10">
        <section aria-labelledby="about-heading" className="flex flex-col gap-4">
          <h2 id="about-heading" className="sr-only">
            About
          </h2>
          <p className="leading-relaxed text-pretty text-card-foreground">
            Just finished a{' '}
            <span className="font-semibold">Master of Science in Project Management</span> at
            Northeastern University, Seattle.
          </p>
        </section>

        <section aria-labelledby="experience-heading" className="flex flex-col gap-4">
          <h2
            id="experience-heading"
            className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            Experience
          </h2>
          <ul className="flex flex-col gap-3">
            {experience.map((item) => (
              <li key={item.title} className="flex gap-3 leading-relaxed text-card-foreground">
                <span
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <p className="text-pretty">
                  <span className="font-semibold text-primary">{item.title}:</span>{' '}
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="contact-heading" className="flex flex-col gap-3 border-t pt-6">
          <h2
            id="contact-heading"
            className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            Get in touch
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Mail className="size-4" aria-hidden="true" />
              {EMAIL}
            </a>
            <a
              href={`https://${LINKEDIN_PATH}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-primary/30 px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              LinkedIn
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </section>
      </div>
    </article>
  )
}
