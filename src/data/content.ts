export interface Profile {
  name: string
  shortName: string
  roles: string[]
  headline: string
  domain: string
  tagline: string
  summary: string
  focus: string
  statement: string
  about: string[]
  location: string
}

export interface Contact {
  email: string
  whatsapp: string
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
  description: string
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
  name: 'XIWEI.LI',
  shortName: 'XW',
  roles: [
    'Product Design Lead',
    'Payments',
    'Money Movement & Digital Assets',
  ],
  headline: 'Product Design Lead',
  domain: 'Payments · Money Movement · Digital Assets',
  tagline:
    'Product Design Lead with 12+ years in payments, money movement, and digital assets—designing trustworthy experiences for complex financial systems.',
  summary:
    '5+ years designing money movement and payment experiences across global financial markets.',
  focus:
    'Currently focused on the next generation of stablecoin payments and financial infrastructure.',
  statement:
    'Designing clear, trustworthy experiences for complex financial systems.',
  about: [
    "I'm a Product Design Lead with 12+ years of experience designing complex financial products across payments, money movement, digital assets and trading.",
    "Over the past 5+ years, I've focused on fiat on/off-ramp, payment gateways, deposit and withdrawal, P2P and cross-border financial workflows. I've also led design for complex crypto trading products and mentored 40+ designers across multiple business units.",
    'My strength is turning complex financial systems into clear, trustworthy and scalable product experiences — connecting user needs, business goals, operational constraints and regulatory requirements.',
    "Today, I'm particularly interested in stablecoin payments, global money movement and financial infrastructure.",
  ],
  location: 'Singapore',
}

export const contact: Contact = {
  email: 'lixiwei3110@gmail.com',
  whatsapp: '+65 8515 8675',
  linkedin: 'https://www.linkedin.com/in/adrian-li-a9b39576',
  linkedinHandle: 'xiweili',
  website: 'xiweili.design',
}

export const stats: Stat[] = [
  { value: '12+', label: 'Years Product Design' },
  { value: '7+', label: 'Years Digital Assets' },
  { value: '5+', label: 'Years Payments / Money Movement' },
  { value: '95%+', label: 'OKR completion rates' },
  { value: '40+', label: 'Designer mentored' },
  { value: '30+', label: 'Projects shipped' },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Design Expert, Copy Trading & Bot Trading',
    company: 'Bitget',
    period: '2024 — Present',
    location: 'Singapore',
  },
  {
    role: 'Design Lead (Fiat)',
    company: 'Binance',
    period: '2019 — 2024',
    location: 'Singapore',
  },
  {
    role: 'Senior UX Designer',
    company: 'LexisNexis',
    period: '2017 — 2019',
    location: 'Shanghai, China',
  },
  {
    role: 'UX / UI Designer',
    company: 'The Active Network',
    period: '2014 — 2016',
    location: 'Chengdu, China',
  },
]

export const projects: Project[] = [
  {
    index: '01',
    slug: 'buy-crypto-binance',
    title: 'Binance-OCBS Redesign',
    role: 'Global Money Movement · Fiat On/Off-Ramp',
    tag: 'PAYMENTS',
    year: '2023',
    image: '/media/buy-crypto/cover.png',
  },
  {
    index: '02',
    slug: 'copy-bot-ux-optimization',
    title: 'Copy+Bot UX Optimization',
    role: 'Trust & Decision Making · Financial Marketplace',
    tag: 'FINTECH',
    year: '2025',
    image: '/media/copy-bot-ux/cover.png',
  },
  {
    index: '03',
    slug: 'bitget-onboarding-ux-audit',
    title: 'Bitget App+Web User Onboarding UX audit',
    role: 'Financial Operations · Onboarding & Compliance',
    tag: 'UX AUDIT',
    year: '2024',
    image: '/media/onboarding-ux-audit/cover.png',
  },
  {
    index: '04',
    slug: 'spot-trading-first-trade-conversion',
    title: 'Bitget Spot Trade UX Optimization',
    role: 'Digital Asset Trading · Spot',
    tag: 'FINTECH',
    year: '2024',
    image: '/media/spot-trading-ftts/cover.png',
  },
  {
    index: '05',
    slug: 'tradfi-trading-ux-optimization',
    title: 'Bitget TradFi UX Optimization',
    role: 'Digital Asset Trading · TradFi',
    tag: 'FINTECH',
    year: '2025',
    image: '/media/tradfi-trading-ux/cover.png',
  },
  {
    index: '06',
    slug: 'rtoken-trading-ux-audit',
    title: 'Bitget Market Design',
    role: 'Digital Asset Trading · rToken',
    tag: 'FINTECH',
    year: '2025',
    image: '/media/rtoken-trading-ux/cover.png',
  },
  {
    index: '07',
    slug: 'simplify-design-principle',
    title: 'Simplify Design Principle',
    role: 'Design Strategy · Product Principles',
    tag: 'UX STRATEGY',
    year: '2024',
    image: '/media/simplify-design-principle/cover.png',
  },
]

export const strengths: Strength[] = [
  {
    title: 'Financial Product Expertise',
    description: '12+ years across complex financial products.',
  },
  {
    title: 'Payments & Money Movement',
    description:
      '5+ years across fiat on/off-ramp, deposit/withdrawal, P2P and payment gateways.',
  },
  {
    title: 'Digital Assets',
    description: '7+ years across crypto exchange and trading products.',
  },
  {
    title: 'Design Leadership',
    description:
      'Led teams and mentored 40+ designers across multiple business units.',
  },
  {
    title: 'Systems Thinking',
    description:
      'Product architecture · Complex workflows · Decision-making · Design systems',
  },
  {
    title: 'AI-enabled Design Workflows',
    description:
      'Figma AI, Cursor, and rapid prototyping to increase design leverage — not as identity, but as capability.',
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
  { id: 'experience', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'strength', label: 'Expertise' },
]

export const resumeUrl = '/media/Adrian_CV.jpg'

export type CardVariant = 'surface' | 'accent' | 'block'

export function getCardVariant(index: number): CardVariant {
  const variants: CardVariant[] = ['surface', 'accent', 'surface', 'block', 'surface']
  return variants[index % variants.length]
}
