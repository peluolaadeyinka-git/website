import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { ServicesList } from '@/components/services/services-list'

export function Services() {
  return (
    <section id="services" className="border-y border-ink/10 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What I can take on."
            description="The two areas I work in most often. Each page explains the deliverables, timing, and what I need from you."
          />
        </Reveal>
        <ServicesList />
      </div>
    </section>
  )
}
