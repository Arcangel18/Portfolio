import { Section, SectionHeader, Figure, Tag } from './primitives'
import { CircuitBoard, Smartphone, Gauge } from 'lucide-react'

export function PersonalProject() {
  return (
    <Section id="projects">
      <SectionHeader
        index="05"
        eyebrow="Personal IoT Project"
        title="Smart Air Conditioning Monitoring & Control Platform"
        subtitle="A self-driven product built end to end: a connected device that monitors and controls air conditioning units, paired with a mobile app and a web dashboard. It applies the same engineering discipline from my research to a consumer-grade IoT product."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6">
          <span className="flex size-10 items-center justify-center rounded-md bg-secondary text-accent">
            <CircuitBoard className="size-5" />
          </span>
          <h3 className="mt-4 font-semibold tracking-tight">Hardware</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            A custom IoT device built around a microcontroller with integrated
            connectivity, environmental sensing, and an IR/control interface to
            command the AC unit directly.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag>Microcontroller</Tag>
            <Tag>Sensors</Tag>
            <Tag>IR control</Tag>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <span className="flex size-10 items-center justify-center rounded-md bg-secondary text-accent">
            <Smartphone className="size-5" />
          </span>
          <h3 className="mt-4 font-semibold tracking-tight">Software</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            A mobile app for real-time control and a web dashboard for
            monitoring trends. Both connect to a cloud backend that ingests
            telemetry and relays commands back to the device.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag>Mobile app</Tag>
            <Tag>Web dashboard</Tag>
            <Tag>Cloud backend</Tag>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <span className="flex size-10 items-center justify-center rounded-md bg-secondary text-accent">
            <Gauge className="size-5" />
          </span>
          <h3 className="mt-4 font-semibold tracking-tight">Outcome</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Users can monitor temperature and usage remotely, automate setpoints,
            and reduce energy consumption — a complete loop from physical device
            to actionable insight.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag>Remote control</Tag>
            <Tag>Automation</Tag>
            <Tag>Energy savings</Tag>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Figure label="IoT device" caption="Fig. 18 — IoT device" src="/images/iotpanama.png" imgClassName="object-[center_60%]" scale={1} />
        <Figure label="Mobile app" caption="Fig. 19 — Mobile app" src="/images/apppanama.png" fit="contain" />
        <Figure label="Dashboard" caption="Fig. 20 — Dashboard" src="/images/iotdashboard.png" imgClassName="object-[center_65%]" scale={1} />
      </div>
    </Section>
  )
}
