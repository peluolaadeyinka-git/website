export type PortfolioSample = {
  title: string
  description: string
  /** Optional writing format shown on the card, e.g. MLA, APA, Chicago. */
  format?: string
  /** Optional image path in /public or a Google Drive thumbnail URL. */
  image?: string
  /** Optional link to the sample: a Google Doc share link or external URL. */
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
 * Example writing sample — `href` is the Google Doc share link and `image` is
 * generated from that Doc's Google Drive thumbnail:
 * {
 *   title: 'History essay sample',
 *   description: 'A 1,500-word research essay on a modern history topic.',
 *   format: 'MLA',
 *   image: 'https://drive.google.com/thumbnail?id=YOUR_DOC_ID&sz=w1200',
 *   href: 'https://docs.google.com/document/d/YOUR_DOC_ID/edit?usp=sharing',
 * },
 */
export const portfolioGroups: PortfolioGroup[] = [
  {
    category: 'Writing and Research',
    title: 'Writing and Research',
    description: 'Essays, research write-ups, and other writing samples.',
    samples: [
      {
        title: 'History Essay Sample',
        description: 'A research essay sample',
        format: 'MLA',
        image: 'https://drive.google.com/thumbnail?id=1_xBnHXzHKur4eqIOdpyiGVSFTQOAMDnw&sz=w1200',
        href: 'https://docs.google.com/document/d/1_xBnHXzHKur4eqIOdpyiGVSFTQOAMDnw/edit?usp=sharing&ouid=112780875442452601283&rtpof=true&sd=true',
      },
    ],
  },
  {
    category: 'Customer Support',
    title: 'Customer Support',
    description: 'Support workflows, response examples, and related documents.',
    samples: [],
  },
]
