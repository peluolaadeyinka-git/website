import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { CtaLink } from '@/components/site/cta-link'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'

const steps = [
  {
    no: '01',
    title: 'Agree the brief',
    detail: 'Topic, audience, format, deadline, and what a finished piece needs to do.',
  },
  {
    no: '02',
    title: 'Research and draft',
    detail: 'Sources checked, structure set, and the writing kept in plain language.',
  },
  {
    no: '03',
    title: 'Deliver and refine',
    detail: 'A ready-to-use file, then one round of changes based on your feedback.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="About" title={siteConfig.about.title} />
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <div className="measure space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                {siteConfig.about.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <blockquote className="mt-9 border-l-2 border-rust pl-6 font-display text-xl leading-relaxed italic">
                {siteConfig.about.approach}
              </blockquote>
            </Reveal>

            <Reveal delay={180}>
              <CtaLink href="/#contact" variant="ghost" size="lg" className="mt-8">
                Work with me
                <ArrowUpRight />
              </CtaLink>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 border-t border-ink/15 pt-10">
          <h3 className="text-xs font-medium tracking-[0.18em] text-rust uppercase">How I work</h3>
          <ol className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
            {steps.map((step) => (
              <li key={step.no} className="border-t border-ink/15 pt-5">
                <span className="font-display text-sm text-rust">{step.no}</span>
                <p className="mt-3 font-display text-xl font-medium">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
