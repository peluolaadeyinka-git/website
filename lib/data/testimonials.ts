/** Public Jiji page these reviews were copied from. */
export const testimonialSourceUrl = 'https://jiji.ng/opinions/sDEs8ek0S0GJHKD38WLdpUZn'

/** Public Upwork share link for the review below. */
const upworkReviewUrl = 'https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiIxMTM5NTI1NzczMTI5NjYyNDY0IiwiY29udHJhY3RSaWQiOiIzMTA5NjIxOCIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiIsInJlZGlyZWN0IjoiZmxfcHJvZmlsZV9wcm9tbyJ9?network=twitter'

export type Testimonial = {
  name: string
  /** Date as shown on the source, or supplied by the client. */
  date: string
  review: string
  /** Optional avatar URL (local path or remote Jiji photo). */
  avatar?: string
  /** Optional 1–5 star rating as shown on the source. */
  rating?: number
  /** Source page for the review. */
  href: string
  /** Label used for the source link, e.g. Jiji or Upwork. */
  sourceLabel: string
  /** Optional preview image shown when hovering/focusing the source link. */
  preview?: string
}

/**
 * Genuine client reviews from the linked sources.
 * Wording and names are kept exactly as shown there.
 */
export const testimonials: Testimonial[] = [
  {
    name: 'Nnamdi Nwankwere',
    date: '30/03/22',
    avatar: 'https://pictures-nigeria.jijistatic.net/4563094__200x200.jpg',
    review: "Didn't know it'll work. Within a couple of days, everything got set up, on my way to monetization now. Thanks adeyinka",
    rating: 4,
    href: testimonialSourceUrl,
    sourceLabel: 'Jiji',
  },
  {
    name: 'Boma',
    date: '22/11/22',
    avatar: 'https://pictures-nigeria.jijistatic.net/48482710__96x96.jpg',
    review: 'Smooth business process and accurate service delivered',
    rating: 5,
    href: testimonialSourceUrl,
    sourceLabel: 'Jiji',
  },
  {
    name: 'Mohammed Tatari Ali',
    date: '07/08/22',
    review: 'Honestly you’re the best client I’ve worked with on jiji',
    rating: 5,
    href: testimonialSourceUrl,
    sourceLabel: 'Jiji',
  },
  {
    name: 'MUSA MUSTAPHA',
    date: '01/05/22',
    review: 'It’s great',
    rating: 5,
    href: testimonialSourceUrl,
    sourceLabel: 'Jiji',
  },
  {
    name: 'George',
    date: '26/03/24',
    review: "doesn't fail",
    rating: 5,
    href: testimonialSourceUrl,
    sourceLabel: 'Jiji',
  },
  {
    name: 'Femi Saxman',
    date: '02/01/22',
    avatar: 'https://pictures-nigeria.jijistatic.net/83903313_OTYtOTYtNGZlYjk4MGYxYQ.jpg',
    review: 'Great job, fantastic work, I will make more orders',
    rating: 5,
    href: testimonialSourceUrl,
    sourceLabel: 'Jiji',
  },
  {
    name: 'D22 products',
    date: '26/09/21',
    avatar: 'https://pictures-nigeria.jijistatic.net/193162628_MjAwLTIwMC03NjhjNmJmMzM1.jpg',
    review: 'Good service',
    rating: 5,
    href: testimonialSourceUrl,
    sourceLabel: 'Jiji',
  },
  {
    name: 'Upwork Client',
    date: 'August 12, 2022',
    review: 'Peluola did a wonderful job and got me real monthly listeners and new plays on my songs, I am so happy with my order! The marketing went really well!',
    rating: 5,
    href: upworkReviewUrl,
    sourceLabel: 'Upwork',
    preview: '/images/upwork-review-banner.png',
  },
]
