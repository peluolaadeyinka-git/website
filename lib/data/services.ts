import type { LucideIcon } from 'lucide-react'
import { Headset, ScrollText } from 'lucide-react'

export type ServicePackage = {
  name: string
  price: string
  delivery: string
  features: string[]
  featured?: boolean
}

export type ServiceSection = {
  id: string
  title: string
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
  overview: string[]
  startingPrice?: string
  deliveryTime?: string
  sections: ServiceSection[]
  packages: ServicePackage[]
  faqs: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    slug: 'history-international-relations-essay-writing',
    title: 'History and International Relations Writing',
    inquiryLabel: 'History and International Relations Essay Writing',
    category: 'Writing and Research',
    icon: ScrollText,
    image: '/images/services/history-international-relations-essay.png',
    shortDescription:
      'Well-researched essays and papers on history, international relations, and related subjects, written for the reader in mind.',
    overview: [
      'I write history and international relations essays from the question outwards: what is being asked, what the sources say, and what argument the piece needs to make.',
      'You get a structured draft in your preferred format, with references and one round of changes after your feedback.',
    ],
    sections: [
      {
        id: 'topics',
        title: 'Topics covered',
        body: 'History, international relations, political history, and research essays. Send the question or reading list and I will confirm the scope before starting.',
      },
      {
        id: 'approach',
        title: 'Research and writing approach',
        body: 'I start with the question and the sources, build an argument, then edit for structure and plain language. Citations follow whichever style your institution asks for.',
      },
      {
        id: 'receives',
        title: 'What you receive',
        items: [
          'A finished essay or research paper in your requested format',
          'A source list or references',
          'One revision round after your feedback',
        ],
      },
      {
        id: 'requirements',
        title: 'What I need from you',
        items: [
          'The topic or question',
          'Word count and deadline',
          'Writing style or citation guide',
          'Any required sources or reading',
        ],
      },
      {
        id: 'timeframe',
        title: 'Delivery timeframe',
        body: 'Short pieces can usually be turned around in a few days. Longer research work depends on source availability, and I will give you a date before we start.',
      },
    ],
    packages: [],
    faqs: [],
  },
  {
    slug: 'expert-customer-service-representative',
    title: 'Customer Support Representative',
    inquiryLabel: 'Customer Service Representative',
    category: 'Customer Support',
    icon: Headset,
    image: '/images/services/customer-support.png',
    shortDescription:
      'Written customer support handled with patience and clear answers, so customers feel heard and issues get closed properly.',
    overview: [
      'I handle customer emails and chats on behalf of small teams: answering questions, logging issues, and following up until they are resolved.',
      'You get documented replies and a simple record of what came in, what was answered, and what still needs attention.',
    ],
    sections: [
      {
        id: 'responsibilities',
        title: 'What I handle',
        items: [
          'Answering customer emails and chats',
          'Logging issues and following up',
          'Escalating cases when a specialist is needed',
        ],
      },
      {
        id: 'channels',
        title: 'Channels',
        body: 'Primarily written support by email and chat. Tell me which tools your team uses and I will work within them.',
      },
      {
        id: 'deliverables',
        title: 'What you receive',
        items: [
          'Clear, documented replies',
          'A simple log of open and resolved cases',
          'A weekly summary if you need one',
        ],
      },
      {
        id: 'arrangements',
        title: 'Working arrangements',
        body: 'Remote, part-time, or project-based. We agree on hours, response expectations, and how work is handed over before the first day.',
      },
    ],
    packages: [],
    faqs: [],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
