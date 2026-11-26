import Image from 'next/image'
import { ArrowUpRight, MessageSquareQuote } from 'lucide-react'
import { testimonials, type Testimonial } from '@/lib/data/testimonials'
import { RatingStars } from '@/components/site/rating-stars'
import { Reveal } from '@/components/site/reveal'

function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function ServiceReviews() {
  if (testimonials.length === 0) return null

  const rated = testimonials.filter((t): t is Testimonial & { rating: number } => typeof t.rating === 'number')
  const average = rated.length > 0 ? rated.reduce((sum, t) => sum + t.rating, 0) / rated.length : 0

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="scroll-mt-24 border-t pt-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="reviews-title" className="flex items-center gap-3 text-2xl font-semibold tracking-tight md:text-3xl">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <MessageSquareQuote className="size-5" aria-hidden="true" />
            </span>
            Reviews
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {average.toFixed(1)} ({testimonials.length} {testimonials.length === 1 ? 'review' : 'reviews'})
          </p>
        </div>
        {rated.length > 0 ? <RatingStars rating={average} /> : null}
      </div>

      <ul className="mt-8 space-y-6">
        {testimonials.map((t, i) => (
          <Reveal
            as="li"
            key={`${t.name}-${t.date}-${i}`}
            delay={(i % 3) * 100}
            className="border-b pb-6 last:border-b-0 last:pb-0"
          >
            <div className="flex gap-4">
              {t.avatar ? (
                <Image src={t.avatar} alt="" width={44} height={44} className="size-11 shrink-0 rounded-full object-cover" />
              ) : (
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-sm font-semibold text-accent-foreground"
                  aria-hidden="true"
                >
                  {initialsOf(t.name)}
                </span>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="font-semibold">{t.name}</p>
                  {typeof t.rating === 'number' ? (
                    <span className="text-sm font-medium text-muted-foreground">{t.rating.toFixed(2)}</span>
                  ) : null}
                  <span className="text-sm text-muted-foreground">{t.date}</span>
                </div>
                {t.serviceTitle ? <p className="mt-2 text-sm font-medium">{t.serviceTitle}</p> : null}
                {t.review ? (
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.review}</p>
                ) : null}
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${t.name}'s review on ${t.sourceLabel}`}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                  View on {t.sourceLabel}
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
