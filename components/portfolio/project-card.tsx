import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted">
        <Image
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-navy backdrop-blur">
          {project.category}
        </span>
        <span
          className="absolute right-4 bottom-4 flex size-11 translate-y-2 items-center justify-center rounded-full bg-white text-navy opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          aria-hidden="true"
        >
          <ArrowUpRight className="size-5" />
        </span>
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-lg font-semibold tracking-tight">
          <Link href={`/portfolio/${project.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {project.title}
          </Link>
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{project.shortDescription}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
          View Project
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </div>
    </article>
  )
}
