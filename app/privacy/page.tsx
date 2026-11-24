import type { Metadata } from 'next'
import { LegalPage } from '@/components/site/legal-page'

export const metadata: Metadata = { title: 'Privacy' }

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      description="A short note on what happens to the details you send through this site."
      sections={[
        {
          heading: 'What you send',
          body: 'The inquiry form asks for your name, email, and the details of your project. Phone number and budget are optional. Only send information I need to reply to your brief.',
        },
        {
          heading: 'How it is handled',
          body: 'Online form delivery is not connected yet. The form prepares your answers so you can send them by email or WhatsApp; nothing is submitted to a server from the form itself.',
        },
        {
          heading: 'Analytics',
          body: 'This site uses Vercel Analytics in production to see which pages are visited. It does not collect the contents of your inquiry.',
        },
        {
          heading: 'Sharing',
          body: 'I do not sell or pass on the details you send me. They are used only to reply to your inquiry and deliver any service we agree on.',
        },
        {
          heading: 'Access and deletion',
          body: 'If you want to know what you sent or ask for it to be deleted, send the request through the contact form and I will respond.',
        },
      ]}
    />
  )
}
