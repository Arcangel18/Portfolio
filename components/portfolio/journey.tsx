import { Section, SectionHeader, Figure, Tag } from './primitives'

type PhaseFigure = {
  label: string
  caption: string
  src?: string
  alt?: string
  fit?: 'cover' | 'contain'
  imgClassName?: string
  scale?: number
}

type Phase = {
  phase: string
  title: string
  body: string
  findings: string[]
  figures: PhaseFigure[]
  tags: string[]
}

const phases: Phase[] = [
  {
    phase: 'Phase 1',
    title: 'Electrical-load sensing evaluation',
    body: 'I began by characterizing how to measure HVAC electrical consumption non-invasively. I evaluated current clamps (CT sensors) to detect compressor and blower activity directly from the supply line, assessing accuracy, noise floor, and how reliably the signal could be used to infer on/off cycling.',
    findings: [
      'Validated current-clamp output against known loads',
      'Mapped electrical signatures to compressor cycling',
      'Identified noise and saturation limitations',
    ],
    figures: [
      {
        label: 'Current clamp (CT sensor)',
        caption: 'Fig. 4 — Non-invasive current sensing',
        src: '/images/clamp.JPG',
        alt: 'Current clamp (CT sensor) used for non-invasive current sensing',
      },
    ],
    tags: ['Current transformer', 'Load sensing', 'Signal analysis'],
  },
  {
    phase: 'Phase 2',
    title: 'Alternative measurement methods',
    body: 'To improve robustness and powering of the sensing electronics, I evaluated alternative approaches — including AC/DC conversion strategies to safely derive low-voltage rails and to explore voltage-based sensing paths. This phase compared trade-offs in safety, isolation, cost, and measurement fidelity.',
    findings: [
      'Prototyped AC/DC conversion for stable DC rails',
      'Compared isolation and safety considerations',
      'Selected the most reliable sensing topology',
    ],
    figures: [
      { label: 'AC/DC converter', caption: 'Fig. 5 — Power conversion stage' ,src: '/images/ac:dc.jpg', fit: 'contain'},
    ],
    tags: ['AC/DC conversion', 'Power electronics', 'Isolation'],
  },
  {
    phase: 'Phase 3',
    title: 'Temperature & humidity sensing',
    body: 'I then developed the thermal sensing chain. This included calibrating NTC thermistors for accurate temperature readings and integrating a dedicated humidity sensor. Each sensor was characterized and calibrated against references to guarantee research-grade accuracy at the targeted sampling rate.',
    findings: [
      'Calibrated NTC thermistors against references',
      'Integrated and validated a humidity sensor',
      'Verified stability at ~5 s sampling',
    ],
    figures: [
      { label: 'Sensor calibration', caption: 'Fig. 6 — Calibration setup', src: '/images/calibration2.jpg', imgClassName: 'object-[center_75%]' },
      { label: 'NTC thermistor', caption: 'Fig. 7 — Temperature sensor', src: '/images/NTC.png' ,fit: 'contain'},
      { label: 'Humidity sensor', caption: 'Fig. 8 — RH sensing', src: '/images/humidity.jpg', imgClassName: 'object-[center_20%]' ,scale: 1.8},
    ],
    tags: ['NTC thermistor', 'Humidity', 'Calibration'],
  },
]

export function Journey() {
  return (
    <Section id="process" className="bg-secondary/40">
      <SectionHeader
        index="02"
        eyebrow="Engineering Development Journey"
        title="System Development Process"
        subtitle="The platform was built iteratively, validating one subsystem at a time before integration. Each phase resolved a specific engineering question — from how to sense electrical load, to how to power the electronics, to how to measure the environment accurately."
      />

      <ol className="space-y-6">
        {phases.map((p, i) => (
          <li
            key={p.phase}
            className="relative grid gap-8 rounded-xl border border-border bg-card p-6 md:grid-cols-[1.2fr_1fr] md:p-8"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-md bg-primary font-mono text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {p.phase}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {p.body}
              </p>

              <ul className="mt-5 space-y-2">
                {p.findings.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>

            <div
              className={
                p.figures.length > 2
                  ? 'grid grid-cols-2 gap-3 self-start'
                  : 'grid gap-3 self-start'
              }
            >
              {p.figures.map((fig) => (
                <Figure
                  key={fig.label}
                  label={fig.label}
                  caption={fig.caption}
                  aspect="aspect-[4/3]"
                  src={fig.src}
                  alt={fig.alt}
                  fit={fig.fit}
                  imgClassName={fig.imgClassName}
                  scale={fig.scale}
                />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
