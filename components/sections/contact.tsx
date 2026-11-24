import { Suspense } from 'react'
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { contactPlaceholder, emailLink, phoneLink, siteConfig, whatsappLink } from '@/lib/site-config'
import { ContactForm } from '@/components/contact/contact-form'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'

const channels = [
  { icon: Mail, label: 'Business email', value: siteConfig.contact.email, href: emailLink() },
  { icon: Phone, label: 'Phone', value: siteConfig.contact.phone, href: phoneLink() },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: siteConfig.contact.whatsapp && `+${siteConfig.contact.whatsapp}`,
    href: whatsappLink(),
    external: true,
  },
  { icon: MapPin, label: 'Location', value: siteConfig.location, href: null },
]

export function Contact() {
  const whatsappChat = whatsappLink(`Hi ${siteConfig.ownerName}, I'd like to discuss a project.`)

  return (
    <section id="contact" className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="Hire Me"
              title="Let's work together."
              description="Tell me about your project and requirements, and I'll get back to you with a tailored quote and next steps."
            />
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-10 flex flex-col gap-3">
              {channels.map(({ icon: Icon, label, value, href, external }) => {
                const content = (
                  <>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted-foreground">{label}</span>
                      <span className={value ? 'block truncate font-medium' : 'block text-sm text-muted-foreground italic'}>
                        {value || contactPlaceholder}
                      </span>
                    </span>
                  </>
                )
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="flex items-center gap-4 rounded-2xl border bg-card p-3 transition-colors hover:border-primary/30"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border bg-card p-3">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </Reveal>

          {whatsappChat ? (
            <Reveal delay={150}>
              <a
                href={whatsappChat}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex items-center justify-between gap-4 rounded-2xl bg-emerald-600 p-5 text-white shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="size-6" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">Chat on WhatsApp</span>
                    <span className="block text-sm text-white/80">Quick questions & fast replies</span>
                  </span>
                </span>
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </Reveal>
          ) : null}

          <Reveal delay={200}>
            <div className="mt-8">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="size-4" aria-hidden="true" />
                {siteConfig.responseTime}
              </p>
              <SocialPills />
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7" delay={100}>
          <div className="rounded-3xl border bg-card p-6 shadow-xl shadow-navy/5 md:p-10">
            <h3 className="text-xl font-semibold tracking-tight">Request a quote</h3>
            <p className="mt-1 mb-8 text-sm text-muted-foreground">Fields marked * are required.</p>
            <Suspense fallback={<div className="h-[560px] animate-pulse rounded-2xl bg-muted" />}>
              <ContactForm />
            </Suspense>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function SocialPills() {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {siteConfig.socials.map((s) => (
        <li key={s.label}>
          {s.href ? (
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border bg-card px-3.5 py-1.5 text-sm transition-colors hover:border-primary/40 hover:text-primary"
            >
              {s.label}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed px-3.5 py-1.5 text-sm text-muted-foreground">
              {s.label}
              <span className="text-xs">· {contactPlaceholder}</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
