import Image from 'next/image'
import { cn } from '@/lib/utils'

/** Your brand logo. Change the src here if you rename the file in /public/images. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn('relative inline-flex size-9 shrink-0 items-center justify-center', className)}>
      <Image
        src="/images/logo.jpg"
        alt=""
        fill
        sizes="36px"
        className="object-contain"
      />
    </span>
  )
}
