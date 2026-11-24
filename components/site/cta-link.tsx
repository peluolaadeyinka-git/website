import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const ctaVariants = cva(
  'group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 outline-none focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30',
        light: 'bg-white text-navy hover:-translate-y-0.5 hover:bg-white/90',
        outlineLight:
          'border border-white/20 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10',
        outline: 'border border-border bg-card text-foreground hover:border-primary/40 hover:text-primary',
        ghost: 'text-primary hover:text-primary/80',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-7 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

type CtaLinkProps = React.ComponentProps<typeof Link> & VariantProps<typeof ctaVariants>

export function CtaLink({ className, variant, size, ...props }: CtaLinkProps) {
  return <Link className={cn(ctaVariants({ variant, size }), className)} {...props} />
}
