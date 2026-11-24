import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { ServicesGrid } from '@/components/services/services-grid'

export function Services() {
  return (
    <section id="services" className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="My Services"
            title="Professional digital services tailored to your needs."
            description="Explore my range of professional services designed to help individuals and businesses communicate better, grow their digital presence, and achieve their goals."
          />
        </Reveal>
        <ServicesGrid />
      </div>
    </section>
  )
}
