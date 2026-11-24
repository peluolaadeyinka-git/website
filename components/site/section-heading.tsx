import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      <p
        className={cn(
          'flex items-center gap-3 text-xs font-medium tracking-[0.18em] uppercase',
          tone === 'dark' ? 'text-navy-muted' : 'text-rust',
        )}
      >
        <span className="h-px w-6 bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-5 font-display text-4xl leading-[1.08] font-medium tracking-tight text-balance md:text-5xl lg:text-[3.5rem]',
          tone === 'dark' ? 'text-paper' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'measure mt-5 text-base leading-relaxed md:text-lg',
            tone === 'dark' ? 'text-navy-muted' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
