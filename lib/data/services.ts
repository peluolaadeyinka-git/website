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
      'Being a professional research writer, I can help you write or rewrite your HISTORY AND INTERNATIONAL RELATIONSHIP RESEARCH with ZERO PLAGIARISM.',
      'I am a professional freelance writer with lots of experience, and I have worked with clients across every primary vertical service.',
      'Successful writing needs to be well researched, structured, and formatted. Researching involves reading, and understanding the source materials and writing great content based on the sources. The structuring aspect involves organizing the introduction, body, and conclusion. Formatting involves following the rules of the writing style (Mla, Apa, etc.) one had chosen for the essay. All these makes my writing successful.',
    ],
    sections: [
      {
        id: 'topics',
        title: 'Topics covered',
        icon: BookOpen,
        items: [
          'History of any type.',
          'International relation',
          'Any Research.',
        ],
      },
      {
        id: 'approach',
        title: 'Research and writing approach',
        icon: Microscope,
        body: 'I will search out the sources and information from the internet, read and understand them well, then write in my own words. I can also make use any source you give me.',
      },
      {
        id: 'receives',
        title: 'What you receive',
        icon: Package,
        items: [
          'Plagiarism Free Research.',
          'Well researched and unique content.',
          'Quick response and delivery time.',
        ],
      },
      {
        id: 'requirements',
        title: 'Project requirements',
        icon: FileText,
        body: 'Kindly send the topic for the essay and the requirements to follow. You can also send me a file containing the prompt or requirements via email or Whatsapp',
      },
      {
        id: 'timeframe',
        title: 'Delivery timeframe',
        icon: Clock,
        body: 'Turnaround time is 2 to 7 days for essays ranging from 300 to 3,000 words.',
      },
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
