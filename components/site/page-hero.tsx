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
    <section className="border-b border-ink/10 bg-paper">
      <div className="mx-auto max-w-7xl px-5 pt-10 pb-12 md:px-8 md:pt-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 ? <ChevronRight className="size-3.5" aria-hidden="true" /> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-rust">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ink">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-8 max-w-3xl">
          <p className="text-xs font-medium tracking-[0.18em] text-rust uppercase">{eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] font-medium tracking-tight text-balance md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="measure mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>

        {image ? (
          <div className="relative mt-12 aspect-[16/9] overflow-hidden border border-ink/15 md:aspect-[21/9]">
            <Image src={image} alt="" fill priority sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
          </div>
        ) : null}
      </div>
    </section>
  )
}
