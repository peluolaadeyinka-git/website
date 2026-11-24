import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { CtaLink } from '@/components/site/cta-link'
import { ProfilePhoto } from '@/components/site/profile-photo'

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy text-white">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28 lg:grid-cols-12 lg:gap-10">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {siteConfig.availability}
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            Hi, I&apos;m {siteConfig.ownerName}.{' '}
            <span className="bg-gradient-to-r from-violet-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              Your Digital Partner
            </span>{' '}
            for Growth.
          </h1>

          <p className="mt-5 font-mono text-xs tracking-widest text-blue-300 uppercase">{siteConfig.headline}</p>

          <div className="mt-5 max-w-xl space-y-3 text-base leading-relaxed text-navy-muted md:text-lg">
            {siteConfig.hero.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="/#services" size="lg">
              Explore My Services
              <ArrowRight className="group-hover:translate-x-0.5" />
            </CtaLink>
            <CtaLink href="/#contact" size="lg" variant="outlineLight">
              Hire Me
              <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </CtaLink>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{stat.value}</dd>
                <dd className="mt-1 text-xs text-navy-muted md:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-6 relative mx-auto w-full max-w-md duration-1000 lg:col-span-5 lg:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/40 to-blue-500/20 blur-2xl" aria-hidden="true" />
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-2.5 backdrop-blur">
            <ProfilePhoto priority className="aspect-[4/5] rounded-[1.6rem]" />
          </div>

          <div className="absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-navy/80 p-3.5 shadow-2xl backdrop-blur-xl sm:flex sm:items-center sm:gap-3 md:-left-10">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary/20 text-violet-300">
              <Sparkles className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium">{siteConfig.role}</p>
              <p className="text-xs text-navy-muted">{siteConfig.location}</p>
            </div>
          </div>

          <div className="absolute -right-3 bottom-10 hidden rounded-2xl border border-white/10 bg-navy/80 p-3.5 shadow-2xl backdrop-blur-xl sm:block md:-right-8">
            <p className="text-sm font-medium">{siteConfig.ownerName}</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-navy-muted">
              <ShieldCheck className="size-3.5 text-emerald-300" aria-hidden="true" />
              {siteConfig.responseTimeShort}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
