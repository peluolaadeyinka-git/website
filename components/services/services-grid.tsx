'use client'

import { useMemo, useState } from 'react'
import { services } from '@/lib/data/services'
import { cn } from '@/lib/utils'
import { ServiceCard } from './service-card'

const ALL = 'All Services'

export function ServicesGrid() {
  const [active, setActive] = useState<string>(ALL)

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(services.map((s) => s.category)))],
    [],
  )
  const visible = active === ALL ? services : services.filter((s) => s.category === active)

  return (
    <>
      <div
        role="group"
        aria-label="Filter services by category"
        className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={cn(
              'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all',
              active === category
                ? 'border-navy bg-navy text-white shadow-md'
                : 'bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground',
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3" aria-live="polite">
        {visible.map((service) => (
          <li key={service.slug} className="animate-in fade-in zoom-in-95 duration-500">
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    </>
  )
}
