import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { services } from '@/lib/data/services'
import { projects } from '@/lib/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, priority: 0.8 })),
    ...projects.map((p) => ({ url: `${base}/portfolio/${p.slug}`, priority: 0.6 })),
    { url: `${base}/privacy`, priority: 0.2 },
    { url: `${base}/terms`, priority: 0.2 },
  ]
}
