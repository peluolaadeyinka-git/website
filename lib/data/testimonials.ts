export type Testimonial = {
  name: string
  role: string
  /** Optional path to a client photo, e.g. /images/clients/jane.jpg */
  avatar?: string
  review: string
  service: string
  /** Optional 1–5 star rating */
  rating?: number
}

/**
 * Add genuine client reviews here (with the client's permission).
 * While this list is empty, the section shows a "coming soon" message.
 *
 * Example:
 * {
 *   name: 'Client Name',
 *   role: 'Role, Company',
 *   review: 'What the client said about working with you.',
 *   service: 'Customer Service Representative',
 *   rating: 5,
 * },
 */
export const testimonials: Testimonial[] = []
