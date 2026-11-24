import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const ctaVariants = cva(
  'group inline-flex items-center justify-center gap-2 rounded-sm border font-medium whitespace-nowrap transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-rust/50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'border-ink bg-ink text-paper hover:border-rust hover:bg-rust',
        light: 'border-paper bg-paper text-ink hover:border-navy-muted hover:bg-navy-muted',
        outlineLight: 'border-paper/40 text-paper hover:border-paper hover:bg-paper/10',
        outline: 'border-ink/30 text-ink hover:border-ink',
        ghost: 'border-transparent text-rust underline underline-offset-4 hover:text-ink',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

type CtaLinkProps = React.ComponentProps<typeof Link> & VariantProps<typeof ctaVariants>

export function CtaLink({ className, variant, size, ...props }: CtaLinkProps) {
  return <Link className={cn(ctaVariants({ variant, size }), className)} {...props} />
}
