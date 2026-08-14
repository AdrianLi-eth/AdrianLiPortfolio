import { Mail, Phone, Play } from 'lucide-react'
import {
  contact,
  getCardVariant,
  profile,
  stats,
} from '../data/content'
import { useRevealSection } from '../hooks/useReveal'
import StatCard from './StatCard'

export default function Experience() {
  const sectionRef = useRevealSection()

  return (
    <section
      id="experience"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-28 sm:py-36"
    >
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10">
        <div
          data-reveal
          className="mb-20 flex items-end justify-between"
        >
          <h2 className="text-3xl tracking-tight text-ink sm:text-5xl">
            Experience
          </h2>
          <span className="text-sm text-ink-faint">01</span>
        </div>

        <div
          data-reveal
          className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr]"
        >
          {/* Media panel */}
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-surface">
            <div className="grid-paper absolute inset-0 opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-2" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-block text-ink-inverse">
                <Play size={24} fill="currentColor" />
              </div>
            </div>
            <span className="absolute bottom-6 left-6 text-sm font-medium text-ink">
              {profile.name}
            </span>
          </div>

          {/* Text card */}
          <div className="flex flex-col justify-center rounded-3xl bg-surface p-8 sm:p-12">
            <p className="text-[length:var(--text-title2)] font-bold leading-snug tracking-tight text-ink">
              {profile.statement}
            </p>
            <p className="mt-6 text-[length:var(--text-body1)] leading-relaxed text-ink-dim">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="group flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink"
              >
                <Phone size={16} />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink"
              >
                <Mail size={16} />
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        <div
          data-reveal
          className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8"
        >
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              variant={getCardVariant(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
