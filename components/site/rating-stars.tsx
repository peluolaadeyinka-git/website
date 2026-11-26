import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function RatingStars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div
      className={cn('flex gap-0.5 text-amber-400', className)}
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, idx) => {
        const filled = rating >= idx + 1
        const half = !filled && rating > idx
        return (
          <span key={idx} className="relative inline-flex size-4">
            <Star className="absolute inset-0 size-4 text-muted" aria-hidden="true" />
            {filled ? (
              <Star className="absolute inset-0 size-4 fill-current" aria-hidden="true" />
            ) : half ? (
              <Star
                className="absolute inset-0 size-4 fill-current"
                style={{ clipPath: 'inset(0 50% 0 0)' }}
                aria-hidden="true"
              />
            ) : null}
          </span>
        )
      })}
    </div>
  )
}
