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
 *   format: 'MLA Style',
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
        format: 'MLA Style',
        image: 'https://drive.google.com/thumbnail?id=1_xBnHXzHKur4eqIOdpyiGVSFTQOAMDnw&sz=w1200',
        href: 'https://docs.google.com/document/d/1_xBnHXzHKur4eqIOdpyiGVSFTQOAMDnw/edit?usp=sharing&ouid=112780875442452601283&rtpof=true&sd=true',
      },
      {
        title: 'Article Sample',
        description: 'A Tech Article for a Tech company',
        format: 'Blog Article',
        image: 'https://drive.google.com/thumbnail?id=1F3beWkVLOYws2m8z4LI2FlKxHwSNFX9HVvIt-Sk7clw&sz=w1200',
        href: 'https://docs.google.com/document/d/1F3beWkVLOYws2m8z4LI2FlKxHwSNFX9HVvIt-Sk7clw/edit?usp=sharing',
      },
      {
        title: 'Essay Sample',
        description: 'An essay writing sample',
        format: 'MLA Style',
        image: 'https://drive.google.com/thumbnail?id=1tk7PnYTI2xlYMFxWPA7rlACl00BnSh52Tyrflgj5nag&sz=w1200',
        href: 'https://docs.google.com/document/d/1tk7PnYTI2xlYMFxWPA7rlACl00BnSh52Tyrflgj5nag/edit?usp=sharing',
      },
      {
        title: 'Research Essay Sample',
        description: 'A research essay sample',
        format: 'MLA Style',
        image: 'https://drive.google.com/thumbnail?id=1FIE0tj1zQg_cantNfe7T5uNprmRbpy8J-jMp0o1n0KQ&sz=w1200',
        href: 'https://docs.google.com/document/d/1FIE0tj1zQg_cantNfe7T5uNprmRbpy8J-jMp0o1n0KQ/edit?usp=sharing',
      },
      {
        title: 'Research Essay Sample',
        description: 'A research essay sample',
        format: 'MLA Style',
        image: 'https://drive.google.com/thumbnail?id=1qXynBdgoJ5eLZK6Ly0OYEutMoV7mZ-im&sz=w1200',
        href: 'https://docs.google.com/document/d/1qXynBdgoJ5eLZK6Ly0OYEutMoV7mZ-im/edit?usp=sharing&ouid=112780875442452601283&rtpof=true&sd=true',
      },
      {
        title: 'Research Essay Sample',
        description: 'A research essay sample',
        format: 'MLA Style',
        image: 'https://drive.google.com/thumbnail?id=1-8HzsUmifekqcbGvJdQ3ln58ndrZ2GJv&sz=w1200',
        href: 'https://docs.google.com/document/d/1-8HzsUmifekqcbGvJdQ3ln58ndrZ2GJv/edit?usp=sharing&ouid=112780875442452601283&rtpof=true&sd=true',
      },
      {
        title: 'Research Essay Sample',
        description: 'A research essay sample',
        format: 'MLA Style',
        image: 'https://drive.google.com/thumbnail?id=1bkgrMD8w8wmWKWghxp9noSt7zFNupEJC7RpQ8MGS9Cw&sz=w1200',
        href: 'https://docs.google.com/document/d/1bkgrMD8w8wmWKWghxp9noSt7zFNupEJC7RpQ8MGS9Cw/edit?usp=sharing',
      },
      {
        title: 'Research Essay Sample',
        description: 'A research essay sample',
        format: 'APA Style',
        image: 'https://drive.google.com/thumbnail?id=1WYSgtBU-S-dm5q5onruXeJJQGkjBA_euE4Mx-BMF54s&sz=w1200',
        href: 'https://docs.google.com/document/d/1WYSgtBU-S-dm5q5onruXeJJQGkjBA_euE4Mx-BMF54s/edit?usp=sharing',
      },
      {
        title: 'Research Essay Sample',
        description: 'A research essay sample',
        format: 'APA Style',
        image: 'https://drive.google.com/thumbnail?id=16ANnvzNuKpZjunHEksBFKIrcpe1P_ankFQOUDiCtUd4&sz=w1200',
        href: 'https://docs.google.com/document/d/16ANnvzNuKpZjunHEksBFKIrcpe1P_ankFQOUDiCtUd4/edit?usp=sharing',
      },
      {
        title: 'Research Essay Sample',
        description: 'A research essay sample',
        format: 'APA Style',
        image: 'https://drive.google.com/thumbnail?id=1bjeuAHlsuTdCcFiiVL2vKKvuTqbKw-cXns5aHDjpGTQ&sz=w1200',
        href: 'https://docs.google.com/document/d/1bjeuAHlsuTdCcFiiVL2vKKvuTqbKw-cXns5aHDjpGTQ/edit?usp=sharing',
      },
      {
        title: 'Research Essay Sample',
        description: 'A research essay sample',
        format: 'APA Style',
        image: 'https://drive.google.com/thumbnail?id=1B_v1eyubj0KPaO1RHC-sJ72rAOC2QUhM6S9SXBaCuMw&sz=w1200',
        href: 'https://docs.google.com/document/d/1B_v1eyubj0KPaO1RHC-sJ72rAOC2QUhM6S9SXBaCuMw/edit?usp=sharing',
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
