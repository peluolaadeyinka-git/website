import { FolderOpen } from 'lucide-react'
import { portfolioGroups } from '@/lib/data/portfolio'
import { SampleCard } from '@/components/portfolio/sample-card'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work & samples."
            description="Writing samples and support work, grouped by the service they belong to."
          />
        </Reveal>

        <div className="mt-16 space-y-16">
          {portfolioGroups.map((group) => (
            <div key={group.category}>
              <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-4 border-b pb-5">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{group.title}</h3>
                    {group.description ? (
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                        {group.description}
                      </p>
                    ) : null}
                  </div>
                  <span className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                    {group.samples.length} {group.samples.length === 1 ? 'sample' : 'samples'}
                  </span>
                </div>
              </Reveal>

              {group.samples.length > 0 ? (
                <ul className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                  {group.samples.map((sample, i) => (
                    <Reveal as="li" key={`${sample.title}-${i}`} delay={(i % 3) * 100}>
                      <SampleCard sample={sample} />
                    </Reveal>
                  ))}
                </ul>
              ) : (
                <Reveal delay={100}>
                  <div className="mt-8 rounded-3xl border border-dashed bg-muted/40 px-6 py-10 text-center">
                    <span className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                      <FolderOpen className="size-5" aria-hidden="true" />
                    </span>
                    <p className="mt-4 font-medium">Samples coming soon</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Add samples to the “{group.title}” group in lib/data/portfolio.ts.
                    </p>
                  </div>
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
