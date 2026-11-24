import { skillCategories } from '@/lib/data/skills'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Grouped by the work, not by buzzwords."
            description="A plain list of what I actually do across writing, promotion, and support."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {skillCategories.map(({ title, description, skills }, i) => (
            <Reveal as="section" key={title} delay={i * 80}>
              <div className="border-t border-ink/20 pt-5">
                <h3 className="font-display text-xl font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {skills.map((skill) => (
                    <li key={skill} className="flex gap-2.5">
                      <span className="text-rust" aria-hidden="true">
                        —
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
