export type Project = {
  slug: string
  title: string
  category: string
  client: string
  year: string
  /** Image path in /public, e.g. /images/projects/my-project.png */
  thumbnail: string
  shortDescription: string
  overview: string
  challenge: string
  solution: string
  results: string[]
  services: string[]
  tools: string[]
  liveUrl?: string
}

/**
 * Add your real projects here. Each entry gets a card in the
 * Portfolio section and its own page at /portfolio/[slug].
 * While this list is empty, the section shows a "coming soon" message.
 *
 * Example:
 * {
 *   slug: 'crypto-whitepaper',
 *   title: 'Cryptocurrency Whitepaper',
 *   category: 'Writing and Research',
 *   client: 'Client name',
 *   year: '2026',
 *   thumbnail: '/images/projects/crypto-whitepaper.png',
 *   shortDescription: 'One-line summary of the project.',
 *   overview: '...',
 *   challenge: '...',
 *   solution: '...',
 *   results: ['...'],
 *   services: ['Whitepaper Writing'],
 *   tools: ['Google Docs'],
 * },
 */
export const projects: Project[] = []

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}
