import type { LucideIcon } from 'lucide-react'
import {
  BookOpen,
  CalendarClock,
  ClipboardList,
  Clock,
  FileText,
  Headset,
  ListChecks,
  MessagesSquare,
  Microscope,
  Package,
  ScrollText,
} from 'lucide-react'

export type ServicePackage = {
  name: string
  price: string
  delivery: string
  features: string[]
  featured?: boolean
}

/**
 * A content block on the service detail page.
 * Provide `body` (paragraph) and/or `items` (bullet list).
 * Leave both empty and the section shows a "details coming soon" placeholder.
 */
export type ServiceSection = {
  id: string
  title: string
  icon: LucideIcon
  body?: string
  items?: string[]
}

export type Service = {
  slug: string
  title: string
  /** Label used in the contact form's "Service of interest" dropdown. */
  inquiryLabel: string
  category: string
  icon: LucideIcon
  image: string
  shortDescription: string
  /** Service overview paragraphs. */
  overview: string[]
  /** e.g. '$50' — leave undefined until confirmed. */
  startingPrice?: string
  /** e.g. '3–5 days' — leave undefined until confirmed. */
  deliveryTime?: string
  sections: ServiceSection[]
  /** Leave empty until pricing is confirmed. */
  packages: ServicePackage[]
  /** Leave empty until FAQs are written. */
  faqs: { question: string; answer: string }[]
}

/**
 * Add, remove, or edit gigs here. Each entry automatically gets
 * a card in "My Services", an option in the contact form, and
 * its own page at /services/[slug].
 */
export const services: Service[] = [
  {
    slug: 'history-international-relations-essay-writing',
    title: 'Professional Essay Writing on History and International Relations',
    inquiryLabel: 'History and International Relations Essay Writing',
    category: 'Writing and Research',
    icon: ScrollText,
    image: '/images/services/history-international-relations-essay.png',
    shortDescription:
      'Get a well-researched, clearly structured, and professionally written essay on history, international relations, and related subjects.',
    overview: [
      'Get a well-researched, clearly structured, and professionally written essay on history, international relations, and related subjects.',
      'Each essay is built on careful research, sound analysis, and clear, engaging writing — tailored to your topic, audience, and requirements.',
    ],
    sections: [
      { id: 'topics', title: 'Topics covered', icon: BookOpen },
      { id: 'approach', title: 'Research and writing approach', icon: Microscope },
      { id: 'receives', title: 'What you receive', icon: Package },
      { id: 'requirements', title: 'Project requirements', icon: FileText },
      { id: 'timeframe', title: 'Delivery timeframe', icon: Clock },
    ],
    packages: [],
    faqs: [],
  },
  {
    slug: 'expert-customer-service-representative',
    title: 'Expert Customer Service Representative',
    inquiryLabel: 'Customer Service Representative',
    category: 'Customer Support',
    icon: Headset,
    image: '/images/services/customer-support.png',
    shortDescription:
      'Get reliable and professional customer support services focused on effective communication, customer satisfaction, and positive customer experiences.',
    overview: [
      'Get reliable and professional customer support services focused on effective communication, customer satisfaction, and positive customer experiences.',
      'I represent your business with professionalism, patience, and responsiveness — helping your customers feel heard and supported.',
    ],
    sections: [
      { id: 'responsibilities', title: 'Customer support responsibilities', icon: ClipboardList },
      { id: 'channels', title: 'Communication channels supported', icon: MessagesSquare },
      { id: 'deliverables', title: 'Tasks and deliverables', icon: ListChecks },
      { id: 'arrangements', title: 'Working arrangements', icon: CalendarClock },
    ],
    packages: [],
    faqs: [],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
