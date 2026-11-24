import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { emailLink, navLinks, phoneLink, siteConfig, whatsappLink } from '@/lib/site-config'
import { services } from '@/lib/data/services'
import { BrandMark } from './brand-mark'

const contactItems = [
  { label: 'Email', href: emailLink() },
  { label: 'Phone', href: phoneLink() },
  { label: 'WhatsApp', href: whatsappLink(), external: true },
].filter((item): item is { label: string; href: string; external?: boolean } => Boolean(item.href))

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-navy-muted">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/#home" className="inline-flex items-center gap-3 text-paper">
              <BrandMark />
              <span className="font-display text-lg font-medium">{siteConfig.brandName}</span>
            </Link>
            <p className="measure mt-5 text-sm leading-relaxed">{siteConfig.description}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm">
              <MapPin className="size-4" aria-hidden="true" />
              {siteConfig.location}
            </p>
          </div>

          <FooterColumn title="Navigate" className="lg:col-span-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Services" className="lg:col-span-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="transition-colors hover:text-paper">
                  {service.title}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact" className="lg:col-span-2">
            {contactItems.map(({ label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="transition-colors hover:text-paper"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/#contact" className="transition-colors hover:text-paper">
                Send a brief
              </Link>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/15 pt-8 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {siteConfig.brandName}.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-paper">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-paper">
                Terms
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
      <h3 className="text-xs font-medium tracking-[0.18em] text-paper uppercase">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3 text-sm">{children}</ul>
    </div>
  )
}
