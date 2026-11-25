/**
 * Central place for your personal & business details.
 * Fields left as '' (empty) are shown as "coming soon" placeholders
 * on the site until you fill them in.
 */
export const siteConfig = {
  brandName: 'Yinkex_Media',
  ownerName: 'Adeyinka Peluola',
  initials: 'YN',
  role: 'Digital Services Professional',
  headline: 'Writer · Digital Marketer · Customer Support Professional',
  description:
    'Independent writer, digital marketer, and customer support professional helping individuals and businesses worldwide communicate effectively, grow online, and deliver better customer experiences.',
  /** Replace with your live domain before launching. */
  url: 'https://your-domain.com',
  location: 'Working Worldwide',
  availability: 'Available for New Projects',
  responseTimeShort: 'Replies within 24 hours',
  responseTime: 'Typically responds within 24 hours',

  hero: {
    intro: [
      "I'm a writer, digital marketer, and customer support professional helping individuals and businesses communicate effectively, strengthen their online presence, and deliver better customer experiences.",
      'From professional writing and research to digital promotion and customer support, I provide reliable digital solutions tailored to your needs.',
    ],
  },

  about: {
    title: 'A dedicated professional focused on helping you succeed.',
    bio: [
      "Hello, I'm Adeyinka Peluola — a communicator, professional writer, and digital marketing enthusiast with experience across writing, customer support, and digital marketing.",
      'My background combines strong communication skills, research, creative thinking, and a practical understanding of digital platforms. I enjoy helping individuals and businesses communicate their ideas effectively, reach their target audiences, and solve everyday business challenges through digital solutions.',
      'As a writer, I work across many forms of content, including articles, cryptocurrency whitepapers, research essays, formal business correspondence, and general content writing.',
      'In digital marketing, I focus on organic promotional strategies — helping music artists, content creators, and businesses improve the visibility and reach of their content across relevant digital and streaming platforms.',
      'I also bring customer support experience and understand the importance of professionalism, responsiveness, patience, and customer satisfaction in every client interaction.',
    ],
    approach:
      "My approach is simple: understand the client's needs, communicate clearly, pay attention to detail, and deliver quality work within the agreed timeframe. Every project deserves commitment, professionalism, and top-notch delivery.",
  },

  contact: {
    /** e.g. 'hello@yourdomain.com' */
    email: 'peluolaadeyinka@gmail.com',
    /** e.g. '+234 800 000 0000' */
    phone: '2348069416146',
    /** Digits only, including country code, e.g. '2348000000000' — used for the wa.me link. */
    whatsapp: '2348069416146',
  },

  /** Add the URL for each profile; entries with an empty href show as "coming soon". */
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adeyinka-peluola-009978102?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { label: 'X / Twitter', href: '' },
    { label: 'Instagram', href: '' },
    { label: 'Facebook', href: '' },
  ],

  /** Replace the bracketed values once confirmed. */
  stats: [
    { value: '7+', label: 'Years of Experience' },
    { value: '100+', label: 'Projects Delivered' },
    { value: '60+', label: 'Happy Clients' },
    { value: '10+', label: 'Countries Served' },
  ],

  /** Extra options shown after the service list in the inquiry dropdown. */
  extraInquiryOptions: ['Other Writing Services', 'Digital Marketing and Promotion', 'General Inquiry'],

  budgets: ['Under $100', '$100 – $250', '$250 – $500', '$500 – $1,000', '$1,000+', 'Not sure yet — request a quote'],
}

export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Me', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
]

export const contactPlaceholder = 'Coming soon'

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
