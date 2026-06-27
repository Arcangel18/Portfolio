import { Section, SectionHeader, Figure, Tag } from './primitives'
import { Trophy, Award, Sparkles } from 'lucide-react'

export function Awards() {
  return (
    <Section id="awards" dark>
      <SectionHeader
        index="07"
        eyebrow="Awards & Recognition"
        title="Awards & Achievements"
        subtitle="Recognition for turning technical ideas into working, creative solutions under real constraints."
        dark
      />

      <div className="overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.04]">
        <div className="p-6 md:p-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
              <Trophy className="size-3.5" />
              Best Creative Project Award
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight">
              Industry 4.0 Hackathon
            </h3>

            <div className="mt-4 flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/[0.08] p-4 text-left">
              <Award className="size-6 shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-primary-foreground/85">
                This award was sponsored and granted by{' '}
                <span className="font-semibold text-accent">Geometris LP</span>,
                recognizing our project as the most creative solution of the
                competition.
              </p>
            </div>

            <p className="mt-5 leading-relaxed text-primary-foreground/75">
              In an Industry 4.0 challenge, my team designed and prototyped a
              technology solution addressing a real industrial problem. We took
              the concept from idea to a working prototype within the event,
              and our approach earned the Best Creative Project Award from
              Geometris LP .
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Tag dark>Industry 4.0</Tag>
              <Tag dark>Rapid prototyping</Tag>
              <Tag dark>IoT</Tag>
              <Tag dark>Innovation</Tag>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Figure
              label="The award"
              caption="Fig. 27 — Awarded by Geometris LP"
              src="/images/mencion.png"
              aspect="aspect-[10/8]"
              fit="cover"
            />
            <Figure
              label="The Team"
              caption="Fig. 28 — The team"
              src="/images/equipo.jpg"
              aspect="aspect-[10/8]"
              loading="eager"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-primary-foreground/15 bg-primary-foreground/[0.03] px-6 py-4 md:px-8">
          <Sparkles className="size-4 text-accent" />
          <p className="text-sm text-primary-foreground/70">
            A direct connection to Geometris LP&apos;s mission of building
            creative, real-world technology products.
          </p>
        </div>
      </div>
    </Section>
  )
}
