import { ArrowRight, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { strengths } from '@/lib/data/skills'
import { CtaLink } from '@/components/site/cta-link'
import { ProfilePhoto } from '@/components/site/profile-photo'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-last lg:sticky lg:top-28 lg:order-first">
            <ProfilePhoto src="/images/about-me.jpg" className="aspect-[4/5] w-full max-w-lg rounded-3xl shadow-2xl shadow-navy/20" />
            <div className="absolute -right-2 -bottom-6 flex items-center gap-3 rounded-2xl border bg-card p-4 shadow-xl sm:right-6 lg:-right-8">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Clock className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold">{siteConfig.location}</p>
                <p className="text-sm text-muted-foreground">{siteConfig.responseTime}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading eyebrow="About Me" title={siteConfig.about.title} />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                {siteConfig.about.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <blockquote className="mt-8 border-l-2 border-primary pl-5 leading-relaxed text-foreground">
                {siteConfig.about.approach}
              </blockquote>
            </Reveal>

            <Reveal delay={200}>
              <CtaLink href="/#contact" size="lg" className="mt-10">
                Let&apos;s Work Together
                <ArrowRight className="group-hover:translate-x-0.5" />
              </CtaLink>
            </Reveal>
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <h3 className="font-mono text-xs font-medium tracking-widest text-primary uppercase">Professional Strengths</h3>
          </Reveal>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ title, icon: Icon }, i) => (
              <Reveal as="li" key={title} delay={(i % 4) * 80}>
                <div className="group flex h-full flex-col gap-4 rounded-2xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="font-medium leading-snug">{title}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
