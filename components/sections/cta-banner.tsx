import { ArrowUpRight } from 'lucide-react'
import { CtaLink } from '@/components/site/cta-link'

export function CtaBanner({
  title = 'Have a project in mind?',
  description = "Send a short brief and I'll reply with next steps.",
  href = '/#contact',
  label = 'Send a brief',
}: {
  title?: string
  description?: string
  href?: string
  label?: string
}) {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-y border-ink/15 py-12 md:flex-row md:items-end md:justify-between md:py-14">
        <div>
          <h2 className="max-w-2xl font-display text-3xl leading-tight font-medium tracking-tight text-balance md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">{description}</p>
        </div>
        <CtaLink href={href} size="lg">
          {label}
          <ArrowUpRight />
        </CtaLink>
      </div>
    </section>
  )
}
