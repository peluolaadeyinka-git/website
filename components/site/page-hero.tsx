import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({
  crumbs,
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  crumbs: { label: string; href?: string }[]
  eyebrow: string
  title: string
  description: string
  image?: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="absolute -top-40 left-1/3 -z-10 h-[420px] w-[700px] rounded-full bg-primary/25 blur-[120px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 pt-10 pb-12 md:px-8 md:pt-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-navy-muted">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 ? <ChevronRight className="size-3.5" aria-hidden="true" /> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white/90">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="animate-in fade-in slide-in-from-bottom-4 mt-8 max-w-3xl duration-700">
          <p className="font-mono text-xs font-medium tracking-widest text-blue-300 uppercase">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 text-base leading-relaxed text-navy-muted md:text-lg">{description}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>

        {image ? (
          <div className="animate-in fade-in slide-in-from-bottom-6 relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 duration-1000 md:aspect-[21/9]">
            <Image src={image} alt="" fill priority sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
          </div>
        ) : null}
      </div>
    </section>
  )
}
