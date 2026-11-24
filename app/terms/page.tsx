import type { Metadata } from 'next'
import { LegalPage } from '@/components/site/legal-page'

export const metadata: Metadata = { title: 'Terms of Service' }

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      sections={[
        { heading: 'Services', body: '[Placeholder] Describe the scope of services and how projects are agreed upon.' },
        { heading: 'Payments', body: '[Placeholder] Outline payment terms, deposits, and accepted payment methods.' },
        { heading: 'Revisions & delivery', body: '[Placeholder] Explain revision policies and delivery timelines.' },
        { heading: 'Cancellations & refunds', body: '[Placeholder] State your cancellation and refund policy.' },
        { heading: 'Intellectual property', body: '[Placeholder] Clarify ownership of delivered work.' },
      ]}
    />
  )
}
