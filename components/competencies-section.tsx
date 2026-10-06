import { Check } from 'lucide-react'
import { competencies } from '@/lib/profile'
import { SectionHeading } from '@/components/section-heading'

export function CompetenciesSection() {
  return (
    <section
      id="competencies"
      aria-labelledby="competencies-heading"
      className="scroll-mt-16 border-y bg-card"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-20">
        <SectionHeading id="competencies-heading" eyebrow="Skills" title="Core Competencies" />
        <ul className="flex flex-wrap gap-3">
          {competencies.map((skill) => (
            <li
              key={skill}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-5 py-2.5 text-sm font-medium text-primary sm:text-base"
            >
              <Check className="size-4" aria-hidden="true" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
