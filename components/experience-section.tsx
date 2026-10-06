import { BarChart3, Rocket, Users } from 'lucide-react'
import { experience } from '@/lib/profile'
import { SectionHeading } from '@/components/section-heading'

const icons = {
  product: Rocket,
  stakeholder: Users,
  data: BarChart3,
}

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-20">
        <SectionHeading id="experience-heading" eyebrow="What I bring" title="Experience" />
        <ul className="grid gap-6 md:grid-cols-3">
          {experience.map((item) => {
            const Icon = icons[item.id]
            return (
              <li
                key={item.id}
                className="group flex flex-col gap-5 rounded-xl border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="leading-relaxed text-pretty text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
