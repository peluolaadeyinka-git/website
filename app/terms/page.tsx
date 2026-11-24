import type { Metadata } from 'next'
import { LegalPage } from '@/components/site/legal-page'

export const metadata: Metadata = { title: 'Terms' }

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      description="The basic terms for projects started through this site."
      sections={[
        {
          heading: 'How a project starts',
          body: 'We agree on the brief first: what is needed, who it is for, the deadline, and the price. Work begins once those details are confirmed in writing.',
        },
        {
          heading: 'Pricing and payment',
          body: 'Your quote sets out the price and payment terms for your project. Anything outside the agreed brief is quoted separately before extra work begins.',
        },
        {
          heading: 'Delivery and changes',
          body: 'Writing projects include one round of changes after delivery. The agreed format and handover date are stated in your brief.',
        },
        {
          heading: 'Ownership',
          body: 'Ownership of the final work and any limits on its use are stated in your quote. Until then, please treat drafts as working material.',
        },
        {
          heading: 'Cancellation',
          body: 'If you need to cancel, tell me in writing. Work already completed is billed according to the agreed quote.',
        },
      ]}
    />
  )
}
