'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { CtaLink } from './cta-link'
import { BrandMark } from './brand-mark'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled || open
          ? 'border-b border-white/10 bg-navy/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-navy',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-18 md:px-8"
      >
        <Link href="/#home" className="flex items-center gap-2.5 text-white" onClick={() => setOpen(false)}>
          <BrandMark />
          <span className="font-semibold tracking-tight">{siteConfig.brandName}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-navy-muted transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <CtaLink href="/#contact" size="sm" className="hidden sm:inline-flex">
            Hire Me
            <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </CtaLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-navy px-5 pb-10 pt-4 lg:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-4 text-lg font-medium text-white"
              >
                {link.label}
                <ArrowUpRight className="size-4 text-navy-muted" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <CtaLink href="/#contact" size="lg" className="mt-8 w-full" onClick={() => setOpen(false)}>
          Hire Me
          <ArrowUpRight />
        </CtaLink>
      </div>
    </header>
  )
}
