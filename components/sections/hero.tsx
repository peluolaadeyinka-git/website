import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { CtaLink } from '@/components/site/cta-link'

const atAGlance = [
  { no: '01', title: 'Writing & research', detail: 'Essays, whitepapers, and business correspondence.' },
  { no: '02', title: 'Organic promotion', detail: 'Visibility for music, creators, and small businesses.' },
  { no: '03', title: 'Customer support', detail: 'Patient, written replies by email and chat.' },
]

export function Hero() {
  return (
    <section id="home" className="border-b border-ink/10 bg-paper">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="flex items-center gap-2.5 text-xs font-medium tracking-[0.16em] text-rust uppercase">
            <span className="size-1.5 rounded-full bg-rust" aria-hidden="true" />
            {siteConfig.availability}
          </p>

          <h1 className="mt-7 font-display text-5xl leading-[1.04] font-medium tracking-tight text-balance md:text-6xl lg:text-7xl">
            Careful writing, clear promotion, and steady support.
          </h1>

          <p className="mt-6 font-display text-xl italic text-muted-foreground">
            I&apos;m {siteConfig.ownerName} — {siteConfig.role.toLowerCase()}.
          </p>

          <div className="measure mt-7 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {siteConfig.hero.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <CtaLink href="/#contact" size="lg">
              Send a brief
              <ArrowUpRight />
            </CtaLink>
            <CtaLink href="/#services" variant="ghost" size="lg">
              See what I do
              <ArrowUpRight />
            </CtaLink>
          </div>
        </div>

        <aside className="lg:col-span-5 lg:pt-4" aria-label="At a glance">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">At a glance</p>
          <dl className="mt-5">
            {atAGlance.map((item) => (
              <div key={item.no} className="grid grid-cols-8 gap-4 border-t border-ink/15 py-5">
                <dt className="col-span-1 font-display text-sm text-rust">{item.no}</dt>
                <div className="col-span-7">
                  <p className="font-display text-xl font-medium">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </dl>
          <p className="mt-1 border-t border-ink/15 pt-5 text-sm text-muted-foreground">
            {siteConfig.location} · {siteConfig.responseTimeShort.toLowerCase()}
          </p>
        </aside>
      </div>
    </section>
  )
}
