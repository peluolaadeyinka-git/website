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
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <p
        className={cn(
          'inline-flex items-center gap-2 font-mono text-xs font-medium tracking-widest uppercase',
          tone === 'dark' ? 'text-blue-300' : 'text-primary',
        )}
      >
        <span className="h-px w-6 bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl',
          tone === 'dark' ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-pretty md:text-lg',
            tone === 'dark' ? 'text-navy-muted' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
