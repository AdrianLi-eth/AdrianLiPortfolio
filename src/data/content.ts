export interface Profile {
  name: string
  shortName: string
  roles: string[]
  headline: string
  statement: string
  summary: string
  location: string
}

export interface Contact {
  email: string
  phone: string
  linkedin: string
  linkedinHandle: string
  website: string
}

export interface Stat {
  value: string
  label: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
}

export interface Project {
  index: string
  slug: string | null
  title: string
  role: string
  tag: string
  year: string
  image: string
}

export interface Strength {
  title: string
  skills: string[]
}

export interface DocSection {
  title: string
  content: string[]
  dark?: boolean
}

export interface CaseStudy {
  title: string
  role: string
  year: string
  tag: string
  sections: DocSection[]
}

export const profile: Profile = {
  name: 'AdrainLi',
  shortName: 'XW',
  roles: ['Visual Designer', 'AI Designer', 'Brand Designer'],
  headline:
    'Building visual order for global payments and financial infrastructure.',
  statement:
    'A decade of design practice translating dense financial logic into a language that is clear, restrained and built to scale.',
  summary:
    'I work through an AI-assisted design process — from first concept to shipped interface, held to a single standard of judgement. My work spans global payments, fintech and on-chain trading systems.',
  location: 'Singapore',
}

export const contact: Contact = {
  email: 'hello@xiweili.design',
  phone: '+65 8123 4567',
  linkedin: 'https://linkedin.com/in/xiweili',
  linkedinHandle: 'xiweili',
  website: 'xiweili.design',
}

export const stats: Stat[] = [
  { value: '10+', label: 'Years of practice' },
  { value: '$120M+', label: 'Revenue influenced' },
  { value: '17%+', label: 'MAU growth delivered' },
  { value: '45+', label: 'Designers benchmarked' },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Design Expert, Core Trading',
    company: 'Bitget',
    period: '2024 —',
    location: 'Singapore',
  },
  {
    role: 'Design Lead, Fiat',
    company: 'Binance',
    period: '2019 — 24',
    location: 'Singapore',
  },
  {
    role: 'Senior UX Designer',
    company: 'LexisNexis',
    period: '2017 — 19',
    location: 'Singapore',
  },
  {
    role: 'UX / UI Designer',
    company: 'The Active Network',
    period: '2014 — 16',
    location: 'Singapore',
  },
]

export const projects: Project[] = [
  {
    index: '01',
    slug: 'copy-bot-ux-optimization',
    title: 'Copy+Bot UX Optimization',
    role: 'Product Experience · Copy Trading & Bots',
    tag: 'FINTECH',
    year: '2025',
    image: '/media/copy-bot-ux/cover.png',
  },
  {
    index: '02',
    slug: 'buy-crypto-binance',
    title: 'Buy Crypto - Binance',
    role: 'Design Lead · Global Payments',
    tag: 'PAYMENTS',
    year: '2023',
    image: '/media/buy-crypto/cover.png',
  },
  {
    index: '03',
    slug: 'rtoken-trading-ux-audit',
    title: 'rToken Trading UX Audit',
    role: 'Product Experience · rToken Trading Flow',
    tag: 'FINTECH',
    year: '2025',
    image: '/media/rtoken-trading-ux/cover.png',
  },
  {
    index: '04',
    slug: 'tradfi-trading-ux-optimization',
    title: 'TradFi Trading UX Optimization',
    role: 'Product Experience · TradFi Trading',
    tag: 'FINTECH',
    year: '2025',
    image: '/media/tradfi-trading-ux/cover.png',
  },
  {
    index: '05',
    slug: 'simplify-design-principle',
    title: 'Simplify Design Principle',
    role: 'Product Experience · Design Principles',
    tag: 'UX STRATEGY',
    year: '2024',
    image: '/media/simplify-design-principle/feedback-overview.png',
  },
  {
    index: '06',
    slug: 'spot-trading-first-trade-conversion',
    title: 'Spot Trading First Trade Convertion',
    role: 'Product Experience · Spot Trading',
    tag: 'FINTECH',
    year: '2024',
    image: '/media/spot-trading-ftts/cover.png',
  },
  {
    index: '07',
    slug: 'bitget-onboarding-ux-audit',
    title: 'Bitget App+Web User Onboarding UX audit',
    role: 'Product Experience · Fiat Onboarding',
    tag: 'UX AUDIT',
    year: '2024',
    image: '/media/onboarding-ux-audit/cover.png',
  },
]

export const strengths: Strength[] = [
  {
    title: 'Visual Design',
    skills: [
      'Typography',
      'Hierarchy',
      'Layout systems',
      'Iconography',
      'Design tokens',
      'Responsive UI',
    ],
  },
  {
    title: 'AI Design',
    skills: [
      'Cursor',
      'Figma AI',
      'Generative workflows',
      'Prompt engineering',
      'AI-assisted prototyping',
    ],
  },
  {
    title: 'Brand Systems',
    skills: [
      'Brand identity',
      'Visual language',
      'Design guidelines',
      'Cross-platform consistency',
    ],
  },
  {
    title: 'Design Leadership',
    skills: [
      'Team leadership',
      'Design reviews',
      'Stakeholder alignment',
      'Design ops',
      'Mentorship',
    ],
  },
]

export const caseStudies: Record<string, CaseStudy> = {
  'fiat-on-off-ramp': {
    title: 'Fiat On / Off-Ramp',
    role: 'Design Lead',
    year: '2023',
    tag: 'PAYMENTS',
    sections: [
      {
        title: 'Design Process',
        content: [
          'We redesigned the end-to-end fiat payment experience across web, iOS and Android, unifying fragmented regional flows into a single coherent system.',
        ],
      },
      {
        title: 'Challenges',
        content: [
          'Each region had different payment methods, compliance requirements, and user expectations — the design system needed to flex without breaking.',
        ],
      },
      {
        title: 'Research',
        content: [
          'Cross-market usability testing with 40 participants identified key drop-off points in KYC and payment confirmation steps.',
        ],
      },
      {
        title: 'Final UI',
        dark: true,
        content: [
          'The unified payment flow contributed to +17% MAU growth and reduced support tickets by standardizing error states and confirmation patterns.',
        ],
      },
    ],
  },
  'merchant-risk-console': {
    title: 'Merchant & Risk Console',
    role: 'Senior Product Designer',
    year: '2022',
    tag: 'B2B SAAS',
    sections: [
      {
        title: 'Design Process',
        content: [
          'A ground-up redesign of the merchant operations and risk management dashboard, consolidating 12 legacy tools into a single console.',
        ],
      },
      {
        title: 'Challenges',
        content: [
          'Compliance officers and merchant ops teams had conflicting mental models — the interface needed to serve both without compromise.',
        ],
      },
      {
        title: 'Final UI',
        dark: true,
        content: [
          'The consolidated console reduced ticket volume by 15,000+ annually through clearer risk signal visualization and streamlined approval workflows.',
        ],
      },
    ],
  },
}

export const navLinks = [
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'strength', label: 'Skills' },
]

export type CardVariant = 'surface' | 'accent' | 'block'

export function getCardVariant(index: number): CardVariant {
  const variants: CardVariant[] = ['surface', 'accent', 'surface', 'block']
  return variants[index % 4]
}
