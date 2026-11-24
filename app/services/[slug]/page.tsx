import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react'
import { getServiceBySlug, services, type ServiceSection } from '@/lib/data/services'
import { siteConfig, whatsappLink } from '@/lib/site-config'
import { PageHero } from '@/components/site/page-hero'
import { CtaLink } from '@/components/site/cta-link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: { title: service.title, description: service.shortDescription, images: [service.image] },
  }
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const hireHref = `/?service=${service.slug}#contact`
  const related = services.filter((s) => s.slug !== service.slug)
  const whatsapp = whatsappLink(`Hi ${siteConfig.ownerName}, I'm interested in your "${service.title}" service.`)

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/#services' }, { label: service.title }]}
        eyebrow={service.category}
        title={service.title}
        description={service.shortDescription}
        image={service.image}
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink href={hireHref} size="lg">
            Send a brief for this service
            <ArrowUpRight />
          </CtaLink>
          <CtaLink href="#pricing" size="lg" variant="outline">
            See pricing
          </CtaLink>
        </div>
      </PageHero>

      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-12">
        <div className="flex flex-col gap-14 lg:col-span-8">
          <section aria-labelledby="overview">
            <SectionTitle id="overview">Service overview</SectionTitle>
            <div className="measure mt-5 space-y-4 leading-relaxed text-muted-foreground">
              {service.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>

          {service.sections.map((section) => (
            <DetailSection key={section.id} section={section} />
          ))}

          <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-24">
            <SectionTitle id="pricing-title">Pricing</SectionTitle>
            {service.packages.length > 0 ? (
              <ul className="mt-6 grid gap-5 md:grid-cols-3">
                {service.packages.map((pkg) => (
                  <li
                    key={pkg.name}
                    className={cn('border border-ink/15 bg-card p-6', pkg.featured && 'border-rust')}
                  >
                    {pkg.featured ? (
                      <p className="text-xs font-medium tracking-[0.16em] text-rust uppercase">Most requested</p>
                    ) : null}
                    <h3 className="mt-2 font-display text-xl font-medium">{pkg.name}</h3>
                    <p className="mt-4 font-display text-3xl">{pkg.price}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{pkg.delivery}</p>
                    <ul className="mt-6 mb-8 space-y-2 text-sm">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-rust" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <CtaLink href={hireHref} variant={pkg.featured ? 'primary' : 'outline'} className="w-full">
                      Choose {pkg.name}
                    </CtaLink>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6 border-l-2 border-rust bg-muted/40 p-6 md:p-8">
                <p className="font-display text-xl">Priced per project.</p>
                <p className="measure mt-2 text-sm leading-relaxed text-muted-foreground">
                  Every brief is different. Share your requirements and I&apos;ll reply with a quote and a date.
                </p>
                <CtaLink href={hireHref} className="mt-5">
                  Request a quote
                </CtaLink>
              </div>
            )}
          </section>

          <section aria-labelledby="faq">
            <SectionTitle id="faq">Questions</SectionTitle>
            {service.faqs.length > 0 ? (
              <Accordion className="mt-6 border border-ink/15 bg-card px-6">
                {service.faqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`faq-${i}`}>
                    <AccordionTrigger className="py-5 text-base hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="measure mt-5 text-base leading-relaxed text-muted-foreground">
                If you have a question before getting in touch, include it in your brief and I&apos;ll answer it with your quote.
              </p>
            )}
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="border border-ink/15 bg-card p-6 lg:sticky lg:top-24">
            <h2 className="font-display text-xl font-medium">Service summary</h2>
            <dl className="mt-5 flex flex-col divide-y text-sm">
              <SummaryRow label="Starting at" value={service.startingPrice ?? 'By quote'} />
              <SummaryRow label="Delivery" value={service.deliveryTime ?? 'Depends on scope'} />
              <SummaryRow label="Category" value={service.category} />
            </dl>
            <CtaLink href={hireHref} size="lg" className="mt-6 w-full">
              Send a brief
            </CtaLink>
            {whatsapp ? (
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex h-12 w-full items-center justify-center gap-2 border border-ink/20 text-sm font-medium transition-colors hover:border-rust hover:text-rust"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Ask on WhatsApp
              </a>
            ) : null}
            <p className="mt-4 text-center text-xs text-muted-foreground">{siteConfig.responseTime}</p>
          </div>
        </aside>
      </div>

      {related.length > 0 ? (
        <section className="border-t border-ink/10 bg-secondary/40 py-16 md:py-20" aria-labelledby="related">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <h2 id="related" className="font-display text-2xl font-medium md:text-3xl">
              Other services
            </h2>
            <ul className="mt-8">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-center justify-between gap-4 border-b border-ink/10 py-6 font-display text-lg transition-colors hover:text-rust"
                  >
                    {s.title}
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  )
}

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="font-display text-2xl leading-snug font-medium tracking-tight md:text-3xl">
      {children}
    </h2>
  )
}

function DetailSection({ section }: { section: ServiceSection }) {
  const titleId = `${section.id}-title`
  const hasItems = Boolean(section.items?.length)

  return (
    <section id={section.id} aria-labelledby={titleId} className="scroll-mt-24">
      <SectionTitle id={titleId}>{section.title}</SectionTitle>
      {section.body ? <p className="measure mt-4 leading-relaxed text-muted-foreground">{section.body}</p> : null}
      {hasItems ? (
        <ul className="mt-5 space-y-2.5 text-sm">
          {section.items!.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-rust" aria-hidden="true">
                —
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium">{value}</dd>
    </div>
  )
}
