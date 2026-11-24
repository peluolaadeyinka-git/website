import { ArrowLeft } from 'lucide-react'
import { CtaLink } from '@/components/site/cta-link'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-xs font-medium tracking-[0.18em] text-rust uppercase">404</p>
      <h1 className="mt-4 font-display text-4xl font-medium tracking-tight md:text-5xl">Page not found</h1>
      <p className="measure mt-4 text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <CtaLink href="/" size="lg" className="mt-8">
        <ArrowLeft />
        Back to home
      </CtaLink>
    </section>
  )
}
