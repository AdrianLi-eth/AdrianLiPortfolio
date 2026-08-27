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

export interface NavLink {
  id: string
  label: string
}

export interface UiStrings {
  portfolio: string
  contact: string
  backToHome: string
  backToTop: string
  skipToContent: string
  viewSelectedWork: string
  about: string
  selectedWork: string
  whatIBring: string
  experience: string
  portraitAlt: string
  projectNotFound: string
  contactHeadlineLine1: string
  contactHeadlineLine2: string
  openToOpportunities: string
  languageLabel: string
  languageEn: string
  languageZh: string
}

export interface SiteContent {
  profile: Profile
  contact: Contact
  stats: Stat[]
  experience: ExperienceItem[]
  projects: Project[]
  strengths: Strength[]
  caseStudies: Record<string, CaseStudy>
  navLinks: NavLink[]
  ui: UiStrings
}
