import { Section, SectionHeader, Figure, Tag } from './primitives'
import {
  Cpu,
  Radio,
  Server,
  Database,
  LineChart,
  ChevronRight,
} from 'lucide-react'

const pipeline = [
  {
    icon: Cpu,
    name: 'ESP32',
    role: 'Edge device',
    detail: 'Samples sensors at ~5s and packages telemetry',
  },
  {
    icon: Radio,
    name: 'MQTT',
    role: 'Transport',
    detail: 'Lightweight pub/sub messaging over Wi-Fi',
  },
  {
    icon: Server,
    name: 'Backend',
    role: 'Ingestion',
    detail: 'Subscribes, validates and routes incoming streams',
  },
  {
    icon: Database,
    name: 'TimescaleDB',
    role: 'Time-series store',
    detail: 'Hypertables optimized for high-frequency data',
  },
  {
    icon: LineChart,
    name: 'Analytics',
    role: 'Insight',
    detail: 'Dashboards, queries and HVAC behavior analysis',
  },
]

export function Software() {
  return (
    <Section id="software" dark>
      <SectionHeader
        index="04"
        eyebrow="Software & Data Architecture"
        title="Real-Time Telemetry Platform"
        subtitle="The firmware streams measurements wirelessly into a purpose-built data pipeline. I designed an end-to-end architecture optimized for high-frequency time-series data — from the edge device all the way to analytics-ready storage."
        dark
      />

      {/* Pipeline */}
      <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.04] p-6 md:p-8">
        <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
          {pipeline.map(({ icon: Icon, name, role, detail }, i) => (
            <div key={name} className="flex items-center gap-3 lg:flex-1">
              <div className="flex-1 rounded-lg border border-primary-foreground/15 bg-primary p-4">
                <Icon className="size-5 text-accent" />
                <div className="mt-2 text-sm font-semibold tracking-tight">
                  {name}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-accent/90">
                  {role}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-primary-foreground/65">
                  {detail}
                </p>
              </div>
              {i < pipeline.length - 1 ? (
                <ChevronRight
                  className="hidden size-5 shrink-0 text-accent lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <div className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/[0.04] p-6">
            <h3 className="text-lg font-semibold tracking-tight">
              Design decisions
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
              <li className="flex gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  <span className="font-medium text-primary-foreground">
                    MQTT
                  </span>{' '}
                  for low-overhead, reliable delivery from constrained devices.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  <span className="font-medium text-primary-foreground">
                    TimescaleDB
                  </span>{' '}
                  to handle dense ~5s-interval data with fast time-range
                  queries.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  A decoupled{' '}
                  <span className="font-medium text-primary-foreground">
                    backend
                  </span>{' '}
                  so ingestion, storage, and visualization scale independently.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            <Tag dark>MQTT</Tag>
            <Tag dark>TimescaleDB</Tag>
            <Tag dark>Time-series</Tag>
            <Tag dark>REST API</Tag>
            <Tag dark>Dashboards</Tag>
          </div>
        </div>

      </div>
    </Section>
  )
}
