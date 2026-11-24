import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

/** Placeholder logo — swap for your own <Image src="/logo.svg" /> when ready. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-blue-500 font-mono text-xs font-bold text-white shadow-lg shadow-primary/30',
        className,
      )}
    >
      {siteConfig.initials}
    </span>
  )
}
