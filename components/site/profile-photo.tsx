import Image from 'next/image'
import { Camera } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

/**
 * Set `src` (e.g. "/images/profile.jpg") once you add your photo to /public/images.
 * Until then a clearly-labelled placeholder is shown.
 */
const PROFILE_PHOTO_SRC: string | null = null

export function ProfilePhoto({
  className,
  priority,
  src = PROFILE_PHOTO_SRC,
  sizes = '(min-width: 1024px) 420px, 80vw',
}: {
  className?: string
  priority?: boolean
  src?: string | null
  sizes?: string
}) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {src ? (
        <Image
          src={src}
          alt={`Portrait of ${siteConfig.ownerName}`}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label="Profile photo placeholder"
          className="flex size-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[oklch(0.3_0.09_272)] via-[oklch(0.24_0.07_268)] to-[oklch(0.2_0.05_262)] text-white"
        >
          <span className="flex size-24 items-center justify-center rounded-full border border-white/20 bg-white/10 font-mono text-3xl font-semibold backdrop-blur md:size-28">
            {siteConfig.initials}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] tracking-wider text-white/70 uppercase">
            <Camera className="size-3" aria-hidden="true" />
            Your photo here
          </span>
        </div>
      )}
    </div>
  )
}
