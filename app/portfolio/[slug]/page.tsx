import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight, TrendingUp } from 'lucide-react'
import { getProjectBySlug, projects } from '@/lib/data/projects'
import { PageHero } from '@/components/site/page-hero'
import { CtaLink } from '@/components/site/cta-link'
import { CtaBanner } from '@/components/sections/cta-banner'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: { title: project.title, description: project.shortDescription, images: [project.thumbnail] },
  }
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Portfolio', href: '/#portfolio' }, { label: project.title }]}
        eyebrow={project.category}
        title={project.title}
        description={project.shortDescription}
        image={project.thumbnail}
      >
        {project.liveUrl ? (
          <CtaLink href={project.liveUrl} target="_blank" rel="noopener noreferrer" size="lg">
            Visit Live Project
            <ArrowUpRight />
          </CtaLink>
        ) : null}
      </PageHero>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <dl className="sticky top-24 grid grid-cols-2 gap-6 rounded-3xl border bg-card p-6 lg:grid-cols-1">
            <Meta label="Client" value={project.client} />
            <Meta label="Year" value={project.year} />
            <Meta label="Category" value={project.category} />
            <div>
              <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Services</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {project.services.map((s) => (
                  <span key={s} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Tools</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {project.tools.map((t, i) => (
                  <span key={`${t}-${i}`} className="rounded-full border px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </aside>

        <div className="flex flex-col gap-12 lg:col-span-8">
          <Block title="Overview" text={project.overview} />
          <Block title="The challenge" text={project.challenge} />
          <Block title="The solution" text={project.solution} />

          <section aria-labelledby="results">
            <h2 id="results" className="flex items-center gap-2 text-2xl font-semibold tracking-tight md:text-3xl">
              <TrendingUp className="size-6 text-primary" aria-hidden="true" />
              Results
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.results.map((r) => (
                <li key={r} className="rounded-2xl border bg-gradient-to-br from-accent to-card p-5 font-medium">
                  {r}
                </li>
              ))}
            </ul>
          </section>

          <nav aria-label="More projects" className="grid gap-4 border-t pt-10 sm:grid-cols-2">
            <Link href={`/portfolio/${prev.slug}`} className="group rounded-2xl border bg-card p-5 transition-colors hover:border-primary/30">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
                Previous project
              </span>
              <span className="mt-1 block font-semibold">{prev.title}</span>
            </Link>
            <Link href={`/portfolio/${next.slug}`} className="group rounded-2xl border bg-card p-5 text-right transition-colors hover:border-primary/30">
              <span className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
                Next project
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
              <span className="mt-1 block font-semibold">{next.title}</span>
            </Link>
          </nav>
        </div>
      </div>

      <CtaBanner title="Want results like these?" label="Hire Me" />
    </>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{label}</dt>
      <dd className="mt-1 font-medium">{value}</dd>
    </div>
  )
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
    </section>
  )
}
