import type { ReactNode } from 'react'
import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

/* ------------------------------------------------------------------ */
/* Section shell                                                       */
/* ------------------------------------------------------------------ */

export function Section({
  id,
  children,
  className,
  dark = false,
}: {
  id: string
  children: ReactNode
  className?: string
  dark?: boolean
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-20 px-6 py-20 md:py-28',
        dark ? 'bg-primary text-primary-foreground' : 'bg-background',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Section header                                                      */
/* ------------------------------------------------------------------ */

export function SectionHeader({
  index,
  eyebrow,
  title,
  subtitle,
  dark = false,
}: {
  index: string
  eyebrow: string
  title: string
  subtitle?: string
  dark?: boolean
}) {
  return (
    <header className="mb-12 max-w-3xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-sm font-medium text-accent">
          {index}
        </span>
        <span
          className={cn(
            'h-px w-8',
            dark ? 'bg-primary-foreground/30' : 'bg-border',
          )}
        />
        <span
          className={cn(
            'font-mono text-xs uppercase tracking-[0.18em]',
            dark ? 'text-primary-foreground/70' : 'text-muted-foreground',
          )}
        >
          {eyebrow}
        </span>
      </div>
      <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'mt-4 text-pretty text-base leading-relaxed md:text-lg',
            dark ? 'text-primary-foreground/75' : 'text-muted-foreground',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  )
}

/* ------------------------------------------------------------------ */
/* Tag / chip                                                          */
/* ------------------------------------------------------------------ */

export function Tag({
  children,
  dark = false,
}: {
  children: ReactNode
  dark?: boolean
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs',
        dark
          ? 'border-primary-foreground/20 text-primary-foreground/80'
          : 'border-border bg-secondary text-secondary-foreground',
      )}
    >
      {children}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Image placeholder ("figure")                                        */
/* ------------------------------------------------------------------ */

export function Figure({
  label,
  caption,
  className,
  containerClassName,
  aspect = 'aspect-[4/3]',
  src,
  alt,
  fit = 'cover',
  imgClassName,
  scale,
  loading = 'lazy',
  priority = false,
}: {
  label: string
  caption?: string
  className?: string
  containerClassName?: string
  aspect?: string
  src?: string
  alt?: string
  fit?: 'cover' | 'contain'
  imgClassName?: string
  scale?: number
  loading?: 'eager' | 'lazy'
  priority?: boolean
}) {
  return (
    <figure className={cn('group', className)}>
      <div
        className={cn(
          'relative flex w-full items-center justify-center overflow-hidden rounded-lg border border-dashed border-border bg-card text-muted-foreground transition-colors group-hover:border-accent/50',
          aspect,
          containerClassName,
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={alt ?? label}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(
              fit === 'contain' ? 'object-contain p-2' : 'object-cover',
              imgClassName,
            )}
            style={scale ? { transform: `scale(${scale})` } : undefined}
            priority={priority}
            loading={priority ? undefined : loading}
          />
        ) : (
          <>
            <div className="dot-grid absolute inset-0 text-foreground opacity-40" />
        <div className="relative flex flex-col items-center gap-2 px-4 text-center">
          <span className="flex size-9 items-center justify-center rounded-md border border-border bg-background">
            <ImageIcon className="size-4" aria-hidden="true" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {label}
          </span>
        </div>
          </>
  )}
      </div> 
      {caption ? (
        <figcaption className="mt-2 font-mono text-[11px] text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

/* ------------------------------------------------------------------ */
/* Stat                                                                */
/* ------------------------------------------------------------------ */

export function Stat({
  value,
  label,
  dark = false,
}: {
  value: string
  label: string
  dark?: boolean
}) {
  return (
    <div
      className={cn(
        'rounded-lg border p-5',
        dark
          ? 'border-primary-foreground/15 bg-primary-foreground/5'
          : 'border-border bg-card',
      )}
    >
      <div className="text-2xl font-semibold tracking-tight text-accent md:text-3xl">
        {value}
      </div>
      <div
        className={cn(
          'mt-1 text-sm leading-snug',
          dark ? 'text-primary-foreground/70' : 'text-muted-foreground',
        )}
      >
        {label}
      </div>
    </div>
  )
}
