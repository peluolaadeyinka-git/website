import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { Skills } from '@/components/sections/skills'
import { Contact } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Contact />
    </>
  )
}
