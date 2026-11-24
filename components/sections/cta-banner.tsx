import { ArrowUpRight } from 'lucide-react'
import { CtaLink } from '@/components/site/cta-link'

export function CtaBanner({
  title = 'Have a project in mind?',
  description = "Let's talk about your goals and how I can help you reach them.",
  href = '/#contact',
  label = 'Start a Project',
}: {
  title?: string
  description?: string
  href?: string
  label?: string
}) {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center text-white md:px-16 md:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.54_0.22_277/0.45),transparent_65%)]" aria-hidden="true" />
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-navy-muted md:text-lg">{description}</p>
        <CtaLink href={href} size="lg" variant="light" className="mt-8">
          {label}
          <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </CtaLink>
      </div>
    </section>
  )
}
