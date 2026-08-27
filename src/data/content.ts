export type {
  CaseStudy,
  Contact,
  DocSection,
  ExperienceItem,
  NavLink,
  Profile,
  Project,
  SiteContent,
  Stat,
  Strength,
  UiStrings,
} from './content.types'

export { enContent } from './locales/en'
export { zhContent } from './locales/zh'

export const resumeUrl = '/media/Adrian_CV.jpg'

export type CardVariant = 'surface' | 'accent' | 'block'

export function getCardVariant(index: number): CardVariant {
  const variants: CardVariant[] = ['surface', 'accent', 'surface', 'block', 'surface']
  return variants[index % variants.length]
}

// English defaults for legacy imports.
import { enContent } from './locales/en'

export const profile = enContent.profile
export const contact = enContent.contact
export const stats = enContent.stats
export const experience = enContent.experience
export const projects = enContent.projects
export const strengths = enContent.strengths
export const caseStudies = enContent.caseStudies
export const navLinks = enContent.navLinks
