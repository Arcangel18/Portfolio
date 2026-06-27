import { Section, SectionHeader } from './primitives'
import {
  Code2,
  CircuitBoard,
  Wifi,
  Cloud,
  Database,
  Workflow,
  Brain,
  Server,
  GitBranch,
  Compass,
} from 'lucide-react'

const matrix = [
  {
    icon: Code2,
    category: 'Programming Languages',
    items: ['Python', 'C / C++', 'JavaScript / TypeScript'],
  },
  {
    icon: CircuitBoard,
    category: 'Embedded Systems',
    items: ['ESP32', 'Microcontrollers', 'Firmware', 'PCB Design', 'Soldering','Arduino','Electronics'],
  },
  {
    icon: Wifi,
    category: 'IoT',
    items: ['MQTT', 'Sensor integration', 'Telemetry', 'Edge devices'],
  },
  {
    icon: Cloud,
    category: 'Cloud',
    items: ['GCP', 'Cloud backends', 'Deployment','Containers'],
  },
  {
    icon: Workflow,
    category: 'Data Engineering',
    items: ['Databricks', 'Spark', 'ETL pipelines', 'Time-series'],
  },
  {
    icon: Brain,
    category: 'Machine Learning',
    items: ['Model training', 'Applied ML'],
  },
  {
    icon: Server,
    category: 'Backend Development',
    items: ['REST APIs', 'Services', 'Real-time ingestion','Microservices','Event-driven architecture','WebSockets'],
  },
  {
    icon: Database,
    category: 'Databases',
    items: ['TimescaleDB', 'PostgreSQL', 'SQL design','NoSQL'],
  },
  {
    icon: GitBranch,
    category: 'DevOps',
    items: ['Git', 'Docker'],
  },
]

const futureInterests = [
  'Vehicular telematics & fleet management',
  'RF systems & asset tracking',
  'Low-power embedded design',
  'Edge AI & on-device inference',
  'Scalable IoT data platforms',
  'Hardware/software product development',
]

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        index="08"
        eyebrow="Capabilities"
        title="Technical Skills"
        subtitle="A cross-disciplinary stack spanning hardware, firmware, software, and data — the full path from a physical signal to an actionable insight."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {matrix.map(({ icon: Icon, category, items }) => (
          <div
            key={category}
            className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/50"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-md bg-secondary text-accent">
                <Icon className="size-4" />
              </span>
              <h3 className="text-sm font-semibold tracking-tight">
                {category}
              </h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Future interests */}
      <div className="mt-12 rounded-xl border border-border bg-primary p-6 text-primary-foreground md:p-8">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/10 text-accent">
            <Compass className="size-5" />
          </span>
          <h3 className="text-xl font-semibold tracking-tight">
            Future Interests
          </h3>
        </div>
        <p className="mt-3 max-w-2xl leading-relaxed text-primary-foreground/70">
          The directions I&apos;m most excited to grow into — deliberately
          aligned with building advanced IoT, telematics, and connected hardware
          products.
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {futureInterests.map((interest) => (
            <span
              key={interest}
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/15 bg-primary-foreground/[0.04] px-3 py-1.5 text-sm text-primary-foreground/85"
            >
              <span className="size-1.5 rounded-full bg-accent" />
              {interest}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
