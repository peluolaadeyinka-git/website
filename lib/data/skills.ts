import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck,
  Gem,
  Headset,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  MessagesSquare,
  PenLine,
  ScanSearch,
  Search,
  TrendingUp,
} from 'lucide-react'

export type SkillCategory = { title: string; description: string; icon: LucideIcon; skills: string[] }

/** Skills grouped by category — shown in the Skills & Expertise section. */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Writing & Communication',
    description: 'Clear, well-researched writing for every purpose and audience.',
    icon: PenLine,
    skills: [
      'Article Writing',
      'Research Writing',
      'Essay Writing',
      'Cryptocurrency Whitepaper Writing',
      'Formal Letter Writing',
      'General Content Writing',
      'Editing and Proofreading',
    ],
  },
  {
    title: 'Digital Marketing',
    description: 'Organic strategies that grow visibility, reach, and engagement.',
    icon: Megaphone,
    skills: [
      'Organic Digital Promotion',
      'Music and Video Promotion',
      'Social Media Marketing',
      'Online Content Promotion',
      'Digital Audience Engagement',
    ],
  },
  {
    title: 'Customer Support',
    description: 'Professional, patient support that keeps customers satisfied.',
    icon: Headset,
    skills: [
      'Customer Service',
      'Client Communication',
      'Customer Relationship Management',
      'Problem Resolution',
      'Written Customer Support',
    ],
  },
]

export type Strength = { title: string; icon: LucideIcon }

/** Professional strengths — shown as cards in the About section. */
export const strengths: Strength[] = [
  { title: 'Strong Written and Verbal Communication', icon: MessagesSquare },
  { title: 'Research and Analytical Writing', icon: Search },
  { title: 'Creative Content Development', icon: Lightbulb },
  { title: 'Digital Marketing and Organic Promotion', icon: TrendingUp },
  { title: 'Customer Relationship Management', icon: HeartHandshake },
  { title: 'Professionalism and Reliability', icon: BadgeCheck },
  { title: 'Attention to Detail', icon: ScanSearch },
  { title: 'Commitment to Quality Delivery', icon: Gem },
]
