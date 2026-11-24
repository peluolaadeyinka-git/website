import { Check } from 'lucide-react'
import { skillCategories } from '@/lib/data/skills'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'

export function Skills() {
  return (
    <section id="skills" className="relative isolate overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" aria-hidden="true" />
      <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-primary/25 blur-[120px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Skills & Expertise"
            title="The skills behind every project."
            description="A practical blend of writing, digital marketing, and customer support expertise."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {skillCategories.map(({ title, description, icon: Icon, skills }, i) => (
            <Reveal as="li" key={title} delay={i * 100}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-white/[0.06] md:p-8">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-500 shadow-lg shadow-primary/30">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-muted">{description}</p>
                <ul className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2.5 text-sm text-white/90">
                      <Check className="mt-0.5 size-4 shrink-0 text-blue-300" aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
