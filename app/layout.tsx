import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import './globals.css'

const bodyFont = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const displayFont = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })

const title = `${siteConfig.ownerName} — ${siteConfig.role}`

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: title, template: `%s | ${siteConfig.brandName}` },
  description: siteConfig.description,
  keywords: [
    'essay writing',
    'history and international relations',
    'cryptocurrency whitepaper writing',
    'organic digital promotion',
    'customer support',
    'virtual assistant',
  ],
  openGraph: {
    type: 'website',
    title,
    description: siteConfig.description,
    siteName: siteConfig.brandName,
    url: siteConfig.url,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f4ec',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
