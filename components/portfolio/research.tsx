import { Section, SectionHeader, Figure, Stat, Tag } from './primitives'
import { Target, Gauge, Clock } from 'lucide-react'

const challenges = [
  {
    icon: Clock,
    title: 'Temporal resolution gap',
    body: 'Commercial thermostats (e.g. Google Nest) log data at coarse intervals — typically minutes apart — and aggregate readings. That hides the fast transients that define real HVAC cycling behavior.',
  },
  {
    icon: Gauge,
    title: 'Why ~5-second sampling',
    body: 'We targeted ~5 s sampling to reconstruct the true dynamic response of the system.',
  },
  {
    icon: Target,
    title: 'Research-grade instrumentation',
    body: 'The platform had to deliver calibrated temperature, humidity, and electrical-load measurements that researchers could trust for energy modeling and controls work.',
  },
]

export function Research() {
  return (
    <Section id="research">
      <SectionHeader
        index="01"
        eyebrow="Purdue University · Ray W. Herrick Laboratories"
        title="High-Resolution HVAC Monitoring Platform"
        subtitle="As a Research Intern at one of the leading HVAC and acoustics research labs in the world, I designed and built an instrumentation platform to monitor residential HVAC systems at a temporal resolution far beyond what commercial hardware provides."
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold tracking-tight">
              Project objective
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Develop a low-cost, high-resolution monitoring system capable of
              continuously logging HVAC thermal and electrical behavior in real
              homes — providing the lab with a faithful, high-frequency data
              source for energy analysis, fault detection, and advanced control
              research.
            </p>
          </div>

          <div className="space-y-4">
            {challenges.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-4 rounded-lg border border-border bg-card p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-accent">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h4 className="font-medium tracking-tight">{title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Stat value="~5s" label="Sampling interval" />
            <Stat value="3" label="Sensing modalities" />
            <Stat value="24/7" label="Continuous logging" />
          </div>
        </div>

        <div className="space-y-4">
          <Figure
            label="Herrick Laboratories"
            caption="Fig. 1 — Herrick Laboratories - Purdue University"
            aspect="aspect-[16/10]"
            src="/images/herricks.JPG"
            alt="Herrick Laboratories"
            loading="eager"
          />
          <div className="grid grid-cols-2 gap-4">
            <Figure
              label="Google Nest (reference)"
              caption="Fig. 2 — Google Nest - Commercial baseline"
              aspect="aspect-[16/10]"
              src="/images/nets.JPG"
              alt="Google Nest"
              loading="eager"

            />
            <Figure
              label="Propotional build"
              caption="Fig. 3 — Propotional build"
              aspect="aspect-square"
              containerClassName="max-h-40"
              src="/images/prototipofinal.jpg"
              alt="Propotional build"
              loading="eager"
            />
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <Tag>HVAC instrumentation</Tag>
            <Tag>Data acquisition</Tag>
            <Tag>Energy research</Tag>
            <Tag>Calibration</Tag>
          </div>
        </div>
      </div>
    </Section>
  )
}
