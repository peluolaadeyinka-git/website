/** Public Jiji page these reviews were copied from. */
export const testimonialSourceUrl = 'https://jiji.ng/opinions/sDEs8ek0S0GJHKD38WLdpUZn'

/** Public Upwork share link for the review below. */
const upworkReviewUrl = 'https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiIxMTM5NTI1NzczMTI5NjYyNDY0IiwiY29udHJhY3RSaWQiOiIzMTA5NjIxOCIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiIsInJlZGlyZWN0IjoiZmxfcHJvZmlsZV9wcm9tbyJ9?network=twitter'

const upworkReviewUrls = {
  subsAndWatchTime:
    'https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiIxMTM5NTI1NzczMTI5NjYyNDY0IiwiY29udHJhY3RSaWQiOiIzMDg4OTM4MSIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiIsInJlZGlyZWN0IjoiZmxfcHJvZmlsZV9wcm9tbyJ9?network=twitter',
  youtubeChannelPromotion:
    'https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiIxMTM5NTI1NzczMTI5NjYyNDY0IiwiY29udHJhY3RSaWQiOiIyODczMjA2OCIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiIsInJlZGlyZWN0IjoiZmxfcHJvZmlsZV9wcm9tbyJ9?network=twitter',
  facebookAds:
    'https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiIxMTM5NTI1NzczMTI5NjYyNDY0IiwiY29udHJhY3RSaWQiOiIyODQ2Njg5NSIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiIsInJlZGlyZWN0IjoiZmxfcHJvZmlsZV9wcm9tbyJ9?network=twitter',
  spotifyPlaylist:
    'https://www.upwork.com/ab/g/pub/wom/prx/eyJwZXJzb25VaWQiOiIxMTM5NTI1NzczMTI5NjYyNDY0IiwiY29udHJhY3RSaWQiOiIyODMyMzUyOSIsImJhbm5lclR5cGUiOiJjb250cmFjdCIsImJhbm5lclZhcmlhbnQiOiJkZWZhdWx0Iiwid29tIjoiZmx2MiIsInJlZGlyZWN0IjoiZmxfcHJvZmlsZV9wcm9tbyJ9?network=twitter',
}

export type Testimonial = {
  name: string
  /** Date as shown on the source, or supplied by the client. */
  date: string
  review: string
  /** Optional avatar URL (local path or remote Jiji photo). */
  avatar?: string
  /** Optional star rating from 1 to 5, including halves, as shown on the source. */
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
  {
    name: 'Upwork Client',
    date: 'July 20, 2022',
    review: 'You will get 1k subs and 4k hrs watch time to make you eligi...',
    rating: 5,
    href: upworkReviewUrls.subsAndWatchTime,
    sourceLabel: 'Upwork',
    preview: '/images/upwork-review-banner-30889381.png',
  },
  {
    name: 'Upwork Client',
    date: 'November 19, 2021',
    review: 'YouTube channel promotion. Great job, thanks',
    rating: 5,
    href: upworkReviewUrls.youtubeChannelPromotion,
    sourceLabel: 'Upwork',
    preview: '/images/upwork-review-banner-28732068.png',
  },
  {
    name: 'Upwork Client',
    date: 'October 24, 2021',
    review: 'You will get a real YouTube video promotion via Facebook ads... He did a great job, will work with him again, thanks.',
    rating: 5,
    href: upworkReviewUrls.facebookAds,
    sourceLabel: 'Upwork',
    preview: '/images/upwork-review-banner-28466895.png',
  },
  {
    name: 'Upwork Client',
    date: 'October 8, 2021',
    review: 'You will get Spotify playlist placement to targeted curators...',
    rating: 4.5,
    href: upworkReviewUrls.spotifyPlaylist,
    sourceLabel: 'Upwork',
    preview: '/images/upwork-review-banner-28323529.png',
  },
]
