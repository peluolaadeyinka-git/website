import Image from 'next/image'
import { ArrowUpRight, MessageSquareQuote } from 'lucide-react'
import { testimonials } from '@/lib/data/testimonials'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { RatingStars } from '@/components/site/rating-stars'

function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function Testimonials() {
  const hasTestimonials = testimonials.length > 0

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Testimonials"
            title="What clients say about working with me."
          />
        </Reveal>

        {hasTestimonials ? (
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={`${t.name}-${i}`} delay={i * 100}>
                <figure className="relative flex h-full flex-col rounded-3xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                  <figcaption className="flex items-center gap-3 border-b pb-5">
                    {t.avatar ? (
                      <Image src={t.avatar} alt="" width={44} height={44} className="size-11 rounded-full object-cover" />
                    ) : (
                      <span className="flex size-11 items-center justify-center rounded-full bg-accent font-mono text-sm font-semibold text-accent-foreground" aria-hidden="true">
                        {initialsOf(t.name)}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.date}</p>
                      <span className="group/preview relative mt-1 inline-flex">
                        <a
                          href={t.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${t.name}'s review on ${t.sourceLabel}`}
                          className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                        >
                          View on {t.sourceLabel}
                          <ArrowUpRight className="size-3" aria-hidden="true" />
                        </a>
                        {t.preview ? (
                          <span className="pointer-events-none absolute top-full left-0 z-30 mt-2 w-64 origin-top-left scale-95 opacity-0 shadow-xl transition duration-200 group-focus-within/preview:scale-100 group-focus-within/preview:opacity-100 group-hover/preview:scale-100 group-hover/preview:opacity-100 sm:w-72">
                            <Image
                              src={t.preview}
                              alt={`${t.sourceLabel} review preview`}
                              width={1200}
                              height={628}
                              className="h-auto w-full rounded-xl border bg-card object-cover"
                            />
                          </span>
                        ) : null}
                      </span>
                    </div>
                  </figcaption>
                  {t.rating ? (
                    <div className="mt-5 flex items-center gap-2">
                      <RatingStars rating={t.rating} />
                      <span className="text-sm font-medium text-muted-foreground">{t.rating.toFixed(1)}</span>
                    </div>
                  ) : null}
                  {t.review ? (
                    <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/85">{t.review}</blockquote>
                  ) : (
                    <div className="mt-4 flex-1" aria-hidden="true" />
                  )}
                </figure>
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal delay={100}>
            <div className="mx-auto mt-12 flex max-w-xl flex-col items-center rounded-3xl border border-dashed bg-muted/40 px-6 py-12 text-center">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <MessageSquareQuote className="size-6" aria-hidden="true" />
              </span>
              <p className="mt-5 font-semibold">Client testimonials coming soon</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Feedback from clients I&apos;ve worked with will be shared here shortly.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
