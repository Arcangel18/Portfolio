import { Section, SectionHeader, Figure, Tag } from './primitives'
import { Cpu, Thermometer, Droplets, Zap, Wifi, Battery } from 'lucide-react'

const peripherals = [
  { icon: Thermometer, label: 'NTC Thermistor', detail: 'Temperature · ADC' },
  { icon: Droplets, label: 'Humidity Sensor', detail: 'RH · digital bus' },
  { icon: Battery, label: 'Power Stage', detail: 'AC/DC · regulation' },
]

export function Hardware() {
  return (
    <Section id="hardware">
      <SectionHeader
        index="03"
        eyebrow="Embedded Hardware Architecture"
        title="Hardware Design"
        subtitle="The platform is built around the ESP32 — chosen for its dual-core processing, integrated Wi-Fi, and rich analog/digital peripheral set. I designed the full signal chain from raw sensors through conditioning to the microcontroller, then carried it from breadboard to a fabricated, hand-soldered PCB."
      />

      {/* Architecture diagram */}
      <div className="mb-12 overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-5 py-3">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            System architecture
          </span>
          <span className="font-mono text-[11px] text-accent">ESP32-based</span>
        </div>

        <div className="grid items-stretch gap-6 p-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:p-8">
          {/* Sensors / inputs */}
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Sensing &amp; power
            </p>
            {peripherals.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-md border border-border bg-background p-3"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-secondary text-accent">
                  <Icon className="size-4" />
                </span>
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">{label}</div>
                  <div className="truncate font-mono text-[10px] text-muted-foreground">
                    {detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Connector />

          {/* MCU */}
          <div className="flex flex-col justify-center">
            <div className="relative rounded-lg border-2 border-primary bg-primary p-5 text-primary-foreground">
              <div className="blueprint-grid absolute inset-0 rounded-lg text-primary-foreground opacity-20" />
              <div className="relative">
                <Cpu className="size-6 text-accent" />
                <div className="mt-3 text-lg font-semibold tracking-tight">
                  ESP32
                </div>
                <div className="font-mono text-[11px] text-primary-foreground/70">
                  Dual-core MCU
                </div>
                <ul className="mt-3 space-y-1 font-mono text-[10px] text-primary-foreground/70">
                  <li>· ADC signal acquisition</li>
                  <li>· Sensor sampling @ ~5s</li>
                  <li>· Firmware control loop</li>
                </ul>
              </div>
            </div>
          </div>

          <Connector />

          {/* Output / connectivity */}
          <div className="flex flex-col justify-center">
            <div className="rounded-lg border border-border bg-background p-5">
              <Wifi className="size-6 text-accent" />
              <div className="mt-3 text-base font-semibold tracking-tight">
                Wi-Fi · MQTT
              </div>
              <div className="font-mono text-[11px] text-muted-foreground">
                Wireless telemetry uplink
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Conditioned, time-stamped readings are published to the backend
                for storage and analysis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* From breadboard to PCB */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold tracking-tight">
            From breadboard to fabricated PCB
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            After validating the design on a protoboard, I laid out a custom PCB
            to consolidate the sensing front-ends, power stage, and ESP32 into a
            compact, deployable board. The board was fabricated, hand-soldered,
            and bench-tested before field deployment.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Tag>ESP32</Tag>
            <Tag>Signal conditioning</Tag>
            <Tag>PCB layout</Tag>
            <Tag>Soldering</Tag>
            <Tag>Bench testing</Tag>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-3">
          <Figure label="Protoboard build" caption="Fig. 9 Initial circuit" src="/images/circuit-inital.jpg" fit="cover" scale={1} />
          <Figure label="Circuit under test" caption="Fig. 10 Calibration setup" src="/images/circuitunder.jpg" fit="cover" scale={1} />
          <Figure label="PCB design (CAD)" caption="Fig. 11 PCB design" src="/images/kikad.png" fit="cover" scale={1}  />
          <Figure label="Fabricated PCB" caption="Fig. 12 Fabricated PCB" src="/images/fabricpcb.jpg" fit="cover" scale={1} imgClassName="object-[center_65%]" />
          <Figure label="Soldering the PCB" caption="Fig. 13 Soldering the PCB" src="/images/soldering.png" scale={1} imgClassName="object-[center_75%]" />
          <Figure label="Final PCB" caption="Fig. 14 Final PCB" src="/images/finalpcb.jpg" fit="cover" scale={1} />
        </div>
      </div>
    </Section>
  )
}

function Connector() {
  return (
    <div
      className="flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Horizontal on desktop, vertical on mobile */}
      <div className="hidden h-px w-full min-w-8 bg-gradient-to-r from-border via-accent/60 to-border md:block" />
      <div className="h-8 w-px bg-gradient-to-b from-border via-accent/60 to-border md:hidden" />
    </div>
  )
}
