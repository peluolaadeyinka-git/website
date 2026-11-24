import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

/** Plain monogram. Works on both paper and dark backgrounds via currentColor. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-8 items-center justify-center border border-current font-display text-sm font-semibold',
        className,
      )}
    >
      {siteConfig.initials}
    </span>
  )
}
