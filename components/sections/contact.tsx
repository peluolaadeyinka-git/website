import { Suspense } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { ContactForm } from '@/components/contact/contact-form'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/section-heading'

const socialLinks = siteConfig.socials.filter((social) => social.href)

export function Contact() {
  return (
    <section id="contact" className="border-t border-ink/10 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Send a short brief."
              description="Tell me what you need, who it's for, and when you need it. I'll reply with next steps and a quote."
            />
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-8 border-t border-ink/15 pt-5 text-sm text-muted-foreground">
              {siteConfig.location} · {siteConfig.responseTime}
            </p>
            {socialLinks.length ? (
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-rust hover:text-ink"
                    >
                      {social.label}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7" delay={100}>
          <div className="border border-ink/15 bg-card p-6 md:p-9">
            <h3 className="font-display text-2xl font-medium">Project inquiry</h3>
            <p className="mt-1 mb-8 text-sm text-muted-foreground">Fields marked * are required.</p>
            <Suspense fallback={<div className="h-[560px] animate-pulse bg-muted" />}>
              <ContactForm />
            </Suspense>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
