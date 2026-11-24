import type { Metadata } from 'next'
import { LegalPage } from '@/components/site/legal-page'

export const metadata: Metadata = { title: 'Privacy Policy' }

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        { heading: 'Information I collect', body: '[Placeholder] Describe the information collected through the contact form (name, email, phone, project details).' },
        { heading: 'How information is used', body: '[Placeholder] Explain that information is used only to respond to inquiries and deliver services.' },
        { heading: 'Data sharing', body: '[Placeholder] State whether data is shared with third parties (e.g. email or analytics providers).' },
        { heading: 'Your rights', body: '[Placeholder] Explain how visitors can request access to or deletion of their data.' },
        { heading: 'Contact', body: '[Placeholder] Provide a contact email for privacy questions.' },
      ]}
    />
  )
}
