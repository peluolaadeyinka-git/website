import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MessageSquareText, Star } from 'lucide-react'
import type { Service } from '@/lib/data/services'
import { getTestimonialSummary } from '@/lib/data/testimonials'

const reviewSummary = getTestimonialSummary()

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative aspect-[16/9] overflow-hidden bg-navy">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 flex size-11 items-center justify-center rounded-xl border border-white/20 bg-navy/60 text-white backdrop-blur-md">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        {reviewSummary.count > 0 ? (
          <span
            aria-label={`Rated ${reviewSummary.average.toFixed(1)} from ${reviewSummary.count} reviews`}
            className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full border border-white/20 bg-navy/60 px-2.5 py-1.5 text-xs font-medium text-white backdrop-blur-md"
          >
            <Star className="size-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
            {reviewSummary.average.toFixed(1)} ({reviewSummary.count})
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] font-medium tracking-widest text-primary uppercase">{service.category}</p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {service.title}
          </Link>
        </h3>
        <p className="mt-2 mb-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>

        <div className="mt-auto flex items-end justify-between gap-4 border-t pt-5">
          <div>
            {service.startingPrice ? (
              <>
                <p className="text-xs text-muted-foreground">Starting at</p>
                <p className="text-lg font-semibold">{service.startingPrice}</p>
              </>
            ) : (
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MessageSquareText className="size-3.5" aria-hidden="true" />
                Request a quote
              </p>
            )}
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3.5 py-2 text-sm font-medium text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            View Service Details
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  )
}
