import { PageHero } from './page-hero'

export function LegalPage({
  title,
  description,
  sections,
}: {
  title: string
  description: string
  sections: { heading: string; body: string }[]
}) {
  return (
    <>
      <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: title }]} eyebrow="Site notes" title={title} description={description} />
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        {sections.map((s) => (
          <section key={s.heading} className="mb-10 border-t border-ink/15 pt-5">
            <h2 className="font-display text-xl font-medium">{s.heading}</h2>
            <p className="measure mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
          </section>
        ))}
      </article>
    </>
  )
}
