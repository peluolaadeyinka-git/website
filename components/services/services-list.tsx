import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/data/services'
import { Reveal } from '@/components/site/reveal'

export function ServicesList() {
  return (
    <ol className="mt-12">
      {services.map((service, i) => (
        <Reveal as="li" key={service.slug} delay={i * 80}>
          <article className="grid gap-6 border-t border-ink/15 py-9 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="text-xs font-medium tracking-[0.18em] text-rust uppercase">
                {String(i + 1).padStart(2, '0')} · {service.category}
              </p>
              <h3 className="mt-4 font-display text-2xl leading-snug font-medium tracking-tight md:text-3xl">
                <Link href={`/services/${service.slug}`} className="hover:text-rust">
                  {service.title}
                </Link>
              </h3>
              <p className="measure mt-3 text-base leading-relaxed text-muted-foreground">{service.shortDescription}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-rust hover:text-ink"
              >
                Read the details
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <dl className="grid gap-4 self-start border-t border-ink/10 pt-5 text-sm md:col-span-5 md:border-t-0 md:pt-0">
              <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                <dt className="text-muted-foreground">Starting price</dt>
                <dd className="text-right font-medium">{service.startingPrice ?? 'By quote'}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                <dt className="text-muted-foreground">Typical turnaround</dt>
                <dd className="text-right font-medium">{service.deliveryTime ?? 'Depends on scope'}</dd>
              </div>
            </dl>
          </article>
        </Reveal>
      ))}
    </ol>
  )
}
