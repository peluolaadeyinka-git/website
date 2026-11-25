export type PortfolioSample = {
  title: string
  description: string
  /** Optional image path in /public, e.g. /images/portfolio/history-essay.png */
  image?: string
  /** Optional link to the sample: a PDF in /public or an external URL. */
  href?: string
}

export type PortfolioGroup = {
  /** Must match a `category` in lib/data/services.ts. */
  category: string
  title: string
  description?: string
  samples: PortfolioSample[]
}

/**
 * Portfolio samples grouped by service category.
 *
 * To add a sample, paste a new object into the `samples` array under the
 * matching category. If you add a new service category in lib/data/services.ts,
 * add a matching group here too.
 *
 * Example sample:
 * {
 *   title: 'History essay sample',
 *   description: 'A 1,500-word research essay on a modern history topic.',
 *   image: '/images/portfolio/history-essay.png',
 *   href: '/samples/history-essay.pdf',
 * },
 */
export const portfolioGroups: PortfolioGroup[] = [
  {
    category: 'Writing and Research',
    title: 'Writing and Research',
    description: 'Essays, research write-ups, and other writing samples.',
    samples: [],
  },
  {
    category: 'Customer Support',
    title: 'Customer Support',
    description: 'Support workflows, response examples, and related documents.',
    samples: [],
  },
]
