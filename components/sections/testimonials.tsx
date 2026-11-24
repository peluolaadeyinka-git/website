import Image from 'next/image'
import { MessageSquareQuote, Quote, Star } from 'lucide-react'
import { testimonials } from '@/lib/data/testimonials'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'

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
                  <Quote className="size-8 text-primary/25" aria-hidden="true" />
                  {t.rating ? (
                    <div className="mt-4 flex gap-0.5 text-amber-400" aria-label={`Rated ${t.rating} out of 5`}>
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={idx < (t.rating ?? 0) ? 'size-4 fill-current' : 'size-4 text-muted'}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  ) : null}
                  <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/85">{t.review}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                    {t.avatar ? (
                      <Image src={t.avatar} alt="" width={44} height={44} className="size-11 rounded-full object-cover" />
                    ) : (
                      <span className="flex size-11 items-center justify-center rounded-full bg-accent font-mono text-sm font-semibold text-accent-foreground" aria-hidden="true">
                        {initialsOf(t.name)}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p className="font-semibold">{t.name}</p>
                      <p className="truncate text-sm text-muted-foreground">
                        {t.role} · {t.service}
                      </p>
                    </div>
                  </figcaption>
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
