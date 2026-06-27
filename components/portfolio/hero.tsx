import {
  Cpu,
  Radio,
  Database,
  CircuitBoard,
  MapPin,
  GraduationCap,
  Code2,
} from 'lucide-react'
import { Figure, Tag } from './primitives'

const focusAreas = [
  { icon: CircuitBoard, label: 'Embedded Hardware' },
  { icon: Cpu, label: 'IoT Systems' },
  { icon: Code2, label: 'Software Engineering' },
  { icon: Database, label: 'Data Engineering' },
]

export function Hero() {
  return (
    <section
      id="profile"
      className="relative scroll-mt-20 overflow-hidden bg-primary px-6 pb-20 pt-28 text-primary-foreground md:pb-28 md:pt-36"
    >
      <div className="blueprint-grid absolute inset-0 text-primary-foreground opacity-[0.18]" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 font-mono text-xs">
            <span className="size-1.5 rounded-full bg-accent" />
            Available for technical roles · IoT &amp; Embedded
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Mahir Arcangel
            <br />
            Arcia Acosta
          </h1>

          <p className="mt-5 text-pretty text-lg font-medium text-primary-foreground/85 md:text-xl">
            Systems And Computer Engineer{' '}
            <span className="text-accent">/</span> IoT &amp; Embedded Systems{' '}
           
          </p>

          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-primary-foreground/70">
            I build real systems end to end — from sensor selection and circuit
            design to firmware, telemetry pipelines, and analytics. My focus is
            connecting hardware, software, and data to solve measurable,
            real-world problems.
          </p>

          <div className="mt-7 flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-2 text-primary-foreground/80">
              <GraduationCap className="size-4 text-accent" />
              B.Sc. Systems &amp; Computer Engineering — UTP, Panama
            </span>
            <span className="inline-flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="size-4 text-accent" />
              Research Intern — Purdue University, USA
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#research"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Explore the work
            </a>
            <a
              href="#skills"
              className="rounded-md border border-primary-foreground/25 px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Technical stack
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {focusAreas.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1.5 font-mono text-xs text-primary-foreground/80"
              >
                <Icon className="size-3.5 text-accent" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:justify-self-end">
          <div className="w-full max-w-xs rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.04] p-3">
            <Figure
              label="Professional photo (optional)"
              aspect="aspect-[4/5]"
              src="/images/porttada.png"
              imgClassName="object-[center_75%]"
              scale={3.2}
              priority
            />
            <div className="mt-3 grid grid-cols-3 gap-2 px-1 pb-1 text-center">
              <div>
                <div className="text-lg font-semibold text-accent ">3+</div>
                <div className="font-mono text-[10px] text-primary-foreground/60">
                  hackathons
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-accent">1</div>
                <div className="font-mono text-[10px] text-primary-foreground/60">
                  intl. research
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-end gap-2">
            <Tag dark>ESP32</Tag>
            <Tag dark>MQTT</Tag>
            <Tag dark>Software</Tag>
            <Tag dark>PCB Design</Tag>
          </div>
        </div>
      </div>
    </section>
  )
}
