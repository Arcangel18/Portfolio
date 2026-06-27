import { Section, SectionHeader, Figure, Tag } from './primitives'
import { Cloud, Workflow, Brain } from 'lucide-react'

export function DataEngineering() {
  return (
    <Section id="data" className="bg-secondary/40">
      <SectionHeader
        index="06"
        eyebrow="Data Engineering & Machine Learning"
        title="Data Engineering & ML Projects"
        subtitle="Beyond hardware, I work across the modern data stack — designing pipelines that turn raw operational data into models and decisions."
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 font-mono text-xs text-primary-foreground">
              <Cloud className="size-3.5 text-accent" />
              AWS
            </span>
            <span className="font-mono text-muted-foreground">×</span>
            <span className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 font-mono text-xs text-primary-foreground">
              <Workflow className="size-3.5 text-accent" />
              Databricks
            </span>
            <span className="font-mono text-muted-foreground">×</span>
            <span className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 font-mono text-xs text-primary-foreground">
              Copa Airlines
            </span>
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight">
            AWS × Databricks × Copa Airlines Hackathon
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Working with real airline operational data, my team designed and
            built an end-to-end data pipeline on AWS and Databricks — ingesting
            and transforming raw data, engineering features, and applying
            machine learning to surface operational insights. The project
            spanned data ingestion, transformation, modeling, and presentation
            under hackathon time constraints.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Cloud, label: 'Ingestion', detail: 'Raw data into the lake' },
              { icon: Workflow, label: 'Transformation', detail: 'ETL & feature pipelines' },
              { icon: Brain, label: 'Modeling', detail: 'ML for insights' },
            ].map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="rounded-md border border-border bg-background p-4"
              >
                <Icon className="size-5 text-accent" />
                <div className="mt-2 text-sm font-medium">{label}</div>
                <div className="font-mono text-[10px] text-muted-foreground">
                  {detail}
                </div>
              </div>
            ))}
          </div>

          <Figure
            label="Team"
            caption="Fig. 22 — The team"
            aspect="aspect-[12/10]"
            src="/images/groupcopa.png"
            fit="cover"
            className="mt-6"
          />

          <div className="mt-6 flex flex-wrap gap-2">
            <Tag>AWS</Tag>
            <Tag>Databricks</Tag>
            <Tag>Spark</Tag>
            <Tag>ETL</Tag>
            <Tag>Machine Learning</Tag>
          </div>
        </div>

        <div className="grid content-center gap-4">
          <Figure
            label="Hackathon"
            caption="Fig. 21 — On site"
            aspect="aspect-[3/4]"
            src="/images/hackathon.png"
            fit="cover"
          />
        </div>
      </div>
    </Section>
  )
}
