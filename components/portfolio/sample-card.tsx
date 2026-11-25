import Image from 'next/image'
import { ArrowUpRight, FileText } from 'lucide-react'
import type { PortfolioSample } from '@/lib/data/portfolio'

export function SampleCard({ sample }: { sample: PortfolioSample }) {
  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted">
        {sample.format ? (
          <span className="absolute top-4 left-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-navy backdrop-blur">
            {sample.format}
          </span>
        ) : null}
        {sample.image ? (
          <Image
            src={sample.image}
            alt={`${sample.title} sample`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-gradient-to-br from-muted to-accent/10">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-card text-primary shadow-sm">
              <FileText className="size-6" aria-hidden="true" />
            </span>
          </div>
        )}
        {sample.href ? (
          <span
            className="absolute right-4 bottom-4 flex size-11 translate-y-2 items-center justify-center rounded-full bg-white text-navy opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            aria-hidden="true"
          >
            <ArrowUpRight className="size-5" />
          </span>
        ) : null}
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-lg font-semibold tracking-tight">{sample.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{sample.description}</p>
        {sample.href ? (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
            View sample
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </span>
        ) : null}
      </div>
    </>
  )

  return (
    <article className="group relative flex h-full flex-col">
      {sample.href ? (
        <a
          href={sample.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${sample.title}`}
          className="after:absolute after:inset-0 focus-visible:outline-none"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  )
}
