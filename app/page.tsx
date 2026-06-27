import { SiteNav } from '@/components/portfolio/site-nav'
import { Hero } from '@/components/portfolio/hero'
import { Research } from '@/components/portfolio/research'
import { Journey } from '@/components/portfolio/journey'
import { Hardware } from '@/components/portfolio/hardware'
import { Software } from '@/components/portfolio/software'
import { PersonalProject } from '@/components/portfolio/personal-project'
import { DataEngineering } from '@/components/portfolio/data-engineering'
import { Awards } from '@/components/portfolio/awards'
import { Skills } from '@/components/portfolio/skills'
import { Footer } from '@/components/portfolio/footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Research />
        <Journey />
        <Hardware />
        <Software />
        <PersonalProject />
        <DataEngineering />
        <Awards />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
