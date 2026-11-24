import { PageHero } from './page-hero'

export function LegalPage({ title, sections }: { title: string; sections: { heading: string; body: string }[] }) {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: title }]}
        eyebrow="Legal"
        title={title}
        description="[Placeholder] This page contains template content. Replace it with your own legal text before publishing."
      />
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        {sections.map((s) => (
          <section key={s.heading} className="mb-10">
            <h2 className="text-xl font-semibold tracking-tight">{s.heading}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
          </section>
        ))}
      </article>
    </>
  )
}
