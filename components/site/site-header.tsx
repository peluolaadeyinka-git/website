'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/site-config'
import { CtaLink } from './cta-link'
import { BrandMark } from './brand-mark'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

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
    <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-paper text-ink">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-18 md:px-8"
      >
        <Link href="/#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <BrandMark />
          <span className="font-display text-lg font-medium">{siteConfig.brandName}</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-rust"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <CtaLink href="/#contact" size="sm" className="hidden sm:inline-flex">
            Start a project
            <ArrowUpRight />
          </CtaLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-10 items-center justify-center transition-colors hover:text-rust lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ink/10 bg-paper px-5 pb-10 pt-4 lg:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-ink/10 py-4 font-display text-xl"
              >
                {link.label}
                <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <CtaLink href="/#contact" size="lg" className="mt-8 w-full" onClick={() => setOpen(false)}>
          Start a project
          <ArrowUpRight />
        </CtaLink>
      </div>
    </header>
  )
}
