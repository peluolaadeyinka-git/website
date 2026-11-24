import { ArrowLeft } from 'lucide-react'
import { CtaLink } from '@/components/site/cta-link'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <CtaLink href="/" size="lg" className="mt-8">
        <ArrowLeft />
        Back to home
      </CtaLink>
    </section>
  )
}
