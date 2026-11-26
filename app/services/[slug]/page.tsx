import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowUpRight,
  Check,
  CircleHelp,
  Clock,
  FileText,
  Hourglass,
  Layers,
  MessageCircle,
  Sparkles,
  Wallet,
} from 'lucide-react'
import { getServiceBySlug, services, type ServiceSection } from '@/lib/data/services'
import { siteConfig, whatsappLink } from '@/lib/site-config'
import { PageHero } from '@/components/site/page-hero'
import { CtaLink } from '@/components/site/cta-link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ServiceCard } from '@/components/services/service-card'
import { ServiceReviews } from '@/components/services/service-reviews'
import { cn } from '@/lib/utils'

type Params = { params: Promise<{ slug: string }> }

const TO_BE_CONFIRMED = 'To be confirmed'

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
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)
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
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href={hireHref} size="lg">
            Hire Me for This Service
            <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </CtaLink>
          <CtaLink href="#pricing" size="lg" variant="outlineLight">
            Pricing & Packages
          </CtaLink>
        </div>
      </PageHero>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-12">
        <div className="flex flex-col gap-14 lg:col-span-8">
          <section aria-labelledby="overview">
            <SectionTitle id="overview" icon={Sparkles}>
              Service overview
            </SectionTitle>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              {service.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>

          {service.sections.map((section) => (
            <DetailSection key={section.id} section={section} />
          ))}

          <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-24">
            <SectionTitle id="pricing-title" icon={Wallet}>
              Pricing and packages
            </SectionTitle>
            {service.packages.length > 0 ? (
              <ul className="mt-6 grid gap-5 md:grid-cols-3">
                {service.packages.map((pkg) => (
                  <li
                    key={pkg.name}
                    className={cn(
                      'relative flex flex-col rounded-3xl border bg-card p-6',
                      pkg.featured && 'border-primary shadow-xl shadow-primary/10 ring-1 ring-primary',
                    )}
                  >
                    {pkg.featured ? (
                      <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        Most popular
                      </span>
                    ) : null}
                    <h3 className="font-semibold">{pkg.name}</h3>
                    <p className="mt-3 text-3xl font-semibold tracking-tight">{pkg.price}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="size-3.5" aria-hidden="true" />
                      {pkg.delivery}
                    </p>
                    <ul className="mt-6 mb-8 flex flex-col gap-2.5 text-sm">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <CtaLink href={hireHref} variant={pkg.featured ? 'primary' : 'outline'} className="mt-auto w-full">
                      Choose {pkg.name}
                    </CtaLink>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6 flex flex-col items-start gap-5 rounded-3xl border bg-gradient-to-br from-accent to-card p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
                <div>
                  <p className="font-semibold">Pricing and packages coming soon</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Every project is different. Share your requirements and I&apos;ll send you a tailored quote.
                  </p>
                </div>
                <CtaLink href={hireHref} className="shrink-0">
                  Request a Quote
                </CtaLink>
              </div>
            )}
          </section>

          <section aria-labelledby="faq">
            <SectionTitle id="faq" icon={CircleHelp}>
              Frequently asked questions
            </SectionTitle>
            {service.faqs.length > 0 ? (
              <Accordion className="mt-6 rounded-3xl border bg-card px-6">
                {service.faqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`faq-${i}`}>
                    <AccordionTrigger className="py-5 text-base hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <ComingSoon />
            )}
          </section>

          <ServiceReviews />
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-24 rounded-3xl border bg-card p-6 shadow-xl shadow-navy/5">
            <h2 className="font-semibold">Service summary</h2>
            <dl className="mt-5 flex flex-col divide-y text-sm">
              <SummaryRow icon={Wallet} label="Starting at" value={service.startingPrice ?? TO_BE_CONFIRMED} />
              <SummaryRow icon={Hourglass} label="Delivery" value={service.deliveryTime ?? TO_BE_CONFIRMED} />
              <SummaryRow icon={Layers} label="Category" value={service.category} />
            </dl>
            <CtaLink href={hireHref} size="lg" className="mt-6 w-full">
              Hire Me for This Service
            </CtaLink>
            {whatsapp ? (
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-full border text-sm font-medium transition-colors hover:border-emerald-500 hover:text-emerald-700"
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
        <section className="border-t bg-muted/60 py-16 md:py-20" aria-labelledby="related">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <h2 id="related" className="text-2xl font-semibold tracking-tight md:text-3xl">
              Other services
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {related.map((s) => (
                <li key={s.slug}>
                  <ServiceCard service={s} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  )
}

function SectionTitle({ id, icon: Icon, children }: { id: string; icon: LucideIcon; children: React.ReactNode }) {
  return (
    <h2 id={id} className="flex items-center gap-3 text-2xl font-semibold tracking-tight md:text-3xl">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      {children}
    </h2>
  )
}

function DetailSection({ section }: { section: ServiceSection }) {
  const titleId = `${section.id}-title`
  const hasItems = section.items && section.items.length > 0
  const isEmpty = !section.body && !hasItems

  return (
    <section id={section.id} aria-labelledby={titleId} className="scroll-mt-24">
      <SectionTitle id={titleId} icon={section.icon}>
        {section.title}
      </SectionTitle>
      {isEmpty ? <ComingSoon /> : null}
      {section.body ? <p className="mt-4 leading-relaxed text-muted-foreground">{section.body}</p> : null}
      {hasItems ? (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {section.items!.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl border bg-card p-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Check className="size-3.5" aria-hidden="true" />
              </span>
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}

function ComingSoon() {
  return (
    <p className="mt-5 flex items-center gap-2.5 rounded-2xl border border-dashed bg-muted/40 px-5 py-4 text-sm text-muted-foreground">
      <FileText className="size-4 shrink-0 text-primary" aria-hidden="true" />
      Details for this section are coming soon.
    </p>
  )
}

function SummaryRow({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <dt className="flex items-center gap-2 text-muted-foreground">
        <Icon className="size-4" aria-hidden="true" />
        {label}
      </dt>
      <dd className="text-right font-medium">{value}</dd>
    </div>
  )
}
