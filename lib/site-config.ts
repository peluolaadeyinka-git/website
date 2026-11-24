/**
 * One place for the site's real details. Empty fields are hidden on the site
 * rather than shown as "coming soon" placeholders.
 */
export const siteConfig = {
  brandName: 'Adeyinka Peluola',
  ownerName: 'Adeyinka Peluola',
  initials: 'AP',
  role: 'Writer & digital services',
  headline: 'Writing · Research · Organic promotion · Customer support',
  description:
    'I write researched essays and business documents, help artists and small businesses get found online, and handle written customer support. Based in Nigeria, working with clients worldwide.',
  url: 'https://your-domain.com',
  location: 'Nigeria · Working worldwide',
  availability: 'Available for new projects',
  responseTimeShort: 'Replies within 24 hours',
  responseTime: 'Typically replies within 24 hours',

  hero: {
    intro: [
      'I help with work that needs care: researched essays and whitepapers, clear business writing, and steady written support for customers.',
      'I also promote music and creative work organically. One brief, clear expectations, and work you can actually use.',
    ],
  },

  about: {
    title: 'A writer who pays attention to the small things.',
    bio: [
      "I'm Adeyinka Peluola. Most of my work is writing: history and international relations essays, research pieces, cryptocurrency whitepapers, and formal business correspondence. I research first, then write for the person who will actually read it.",
      'Alongside writing, I help artists and small businesses get more eyes on their work through organic promotion, and I support customers by email and chat with patience and clear answers.',
      "I work from Nigeria with clients worldwide. I keep projects manageable: agree on the brief, check in when it matters, and hand over work that's ready to use.",
    ],
    approach:
      "Good work is mostly good questions. I ask what the piece is for, who will read it, and what 'done' looks like before I start.",
  },

  contact: {
    email: '',
    phone: '',
    whatsapp: '',
  },

  socials: [
    { label: 'LinkedIn', href: '' },
    { label: 'X / Twitter', href: '' },
    { label: 'Instagram', href: '' },
    { label: 'Facebook', href: '' },
  ],

  extraInquiryOptions: ['Other Writing Services', 'Digital Marketing and Promotion', 'General Inquiry'],

  budgets: ['Under $100', '$100 – $250', '$250 – $500', '$500 – $1,000', '$1,000+', 'Not sure yet — request a quote'],
}

export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
]

export const contactPlaceholder = 'Not added yet'

export function whatsappLink(message?: string) {
  if (!siteConfig.contact.whatsapp) return null
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function emailLink(subject?: string, body?: string) {
  if (!siteConfig.contact.email) return null
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString().replace(/\+/g, '%20')
  return `mailto:${siteConfig.contact.email}${query ? `?${query}` : ''}`
}

export function phoneLink() {
  return siteConfig.contact.phone ? `tel:${siteConfig.contact.phone.replace(/\s/g, '')}` : null
}
