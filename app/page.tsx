import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ExperienceSection } from '@/components/experience-section'
import { CompetenciesSection } from '@/components/competencies-section'
import { ConnectFooter } from '@/components/connect-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ExperienceSection />
        <CompetenciesSection />
      </main>
      <ConnectFooter />
    </>
  )
}
