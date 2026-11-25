import Link from 'next/link'
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { contactPlaceholder, emailLink, navLinks, phoneLink, siteConfig, whatsappLink } from '@/lib/site-config'
import { services } from '@/lib/data/services'
import { BrandMark } from './brand-mark'

const contactItems = [
  { icon: Mail, label: siteConfig.contact.email || `Email · ${contactPlaceholder}`, href: emailLink() },
  { icon: Phone, label: siteConfig.contact.phone || `Phone · ${contactPlaceholder}`, href: phoneLink() },
  {
    icon: MessageCircle,
    label: siteConfig.contact.whatsapp ? 'WhatsApp' : `WhatsApp · ${contactPlaceholder}`,
    href: whatsappLink(),
    external: true,
  },
  { icon: MapPin, label: siteConfig.location, href: null },
  { icon: Clock, label: siteConfig.responseTime, href: null },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-navy-muted">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/#home" className="inline-flex items-center gap-2.5 text-white">
              <BrandMark />
              <span className="font-semibold tracking-tight">{siteConfig.brandName}</span>
            </Link>
            <p className="mt-2 text-xs text-white/70">Founded by {siteConfig.ownerName}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">{siteConfig.description}</p>
            <p className="mt-3 text-xs text-white/70">{siteConfig.headline}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {siteConfig.socials.filter((social) => social.href).map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/80 transition-colors hover:border-white/30 hover:text-white"
                  >
                    {social.label}
                    <ArrowUpRight className="size-3" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Navigate" className="lg:col-span-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Services" className="lg:col-span-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="transition-colors hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact" className="lg:col-span-3">
            {contactItems.map(({ icon: Icon, label, href, external }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {label}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <Icon className="size-4" aria-hidden="true" />
                    {label}
                  </span>
                )}
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {siteConfig.brandName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  className,
  children,
}: {
  title: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className}>
      <h3 className="font-mono text-xs font-medium tracking-widest text-white uppercase">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3 text-sm">{children}</ul>
    </div>
  )
}
