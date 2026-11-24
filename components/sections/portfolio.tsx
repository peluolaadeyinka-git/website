import { FolderOpen } from 'lucide-react'
import { projects } from '@/lib/data/projects'
import { ProjectCard } from '@/components/portfolio/project-card'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'

export function Portfolio() {
  const hasProjects = projects.length > 0

  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work & case studies."
            description="Examples of projects that show how I approach problems and deliver results."
          />
        </Reveal>

        {hasProjects ? (
          <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal as="li" key={project.slug} delay={(i % 3) * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal delay={100}>
            <div className="relative mt-12">
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <li key={i} className={i > 0 ? 'hidden sm:block' : undefined}>
                    <div className="aspect-[4/3] rounded-3xl border border-dashed bg-muted/50" />
                    <div className="mt-5 h-4 w-2/3 rounded-full bg-muted" />
                    <div className="mt-3 h-3 w-full rounded-full bg-muted/70" />
                  </li>
                ))}
              </ul>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="flex max-w-md flex-col items-center rounded-3xl border bg-card/95 px-6 py-8 text-center shadow-xl shadow-navy/5 backdrop-blur">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                    <FolderOpen className="size-6" aria-hidden="true" />
                  </span>
                  <p className="mt-5 font-semibold">Portfolio projects coming soon</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    Check back to see examples of my work.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
