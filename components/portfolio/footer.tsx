import { Mail, Briefcase, Code2, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-secondary/40 px-6 py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-md bg-primary font-mono text-xs font-bold text-primary-foreground">
                MA
              </span>
              <span className="font-mono text-sm font-medium">
                Mahir Arcangel Arcia Acosta
              </span>
            </div>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Systems Engineer building real systems from concept to validation
              — hardware, firmware, software, and data. Open to technical roles
              in IoT, telematics, and connected hardware.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-accent" />
              Panama
            </p>
          </div>

          <div className="md:justify-self-end">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Get in touch
            </h3>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href="mailto:arcangel.dev@outlook.com"
                className="inline-flex items-center gap-2.5 text-sm text-foreground transition-colors hover:text-accent"
              >
                <Mail className="size-4" />
                arcangel.dev@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/in/mahir-arcia/"
                className="inline-flex items-center gap-2.5 text-sm text-foreground transition-colors hover:text-accent"
              >
                <Briefcase className="size-4" />
                LinkedIn
              </a>

            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p className="font-mono">
            Technical portfolio ·
          </p>
          <p className="font-mono">
            © {new Date().getFullYear()} Mahir Arcia Acosta
          </p>
        </div>
      </div>
    </footer>
  )
}
