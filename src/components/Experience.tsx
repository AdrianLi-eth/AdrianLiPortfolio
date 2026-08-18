import { Mail } from 'lucide-react'
import {
  contact,
  getCardVariant,
  profile,
  stats,
} from '../data/content'
import { useRevealSection } from '../hooks/useReveal'
import StatCard from './StatCard'

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

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
          <h2 className="text-3xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            Experience
          </h2>
          <span className="text-sm text-ink-faint">01</span>
        </div>

        <div
          data-reveal
          className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:items-stretch"
        >
          {/* Portrait card */}
          <div className="relative aspect-[4/5] min-h-[360px] overflow-hidden rounded-2xl border border-line bg-white/[0.02] lg:aspect-auto lg:min-h-full">
            <img
              src="/media/portrait.png"
              alt={profile.name}
              className="pointer-events-none absolute bottom-0 left-0 h-7/8 w-full max-w-none object-contain object-left-bottom grayscale"
            />
          </div>

          {/* Statement + stats */}
          <div className="flex min-h-0 flex-col gap-5">
            <div className="flex flex-1 flex-col justify-center rounded-2xl border border-line bg-white/[0.03] p-8 sm:p-10 lg:p-12">
              <p className="text-[length:var(--text-title2)] font-bold leading-snug tracking-tight text-ink sm:text-[length:var(--text-h4)]">
                {profile.statement}
              </p>
              <p className="mt-6 text-[length:var(--text-body1)] leading-relaxed text-ink-dim">
                {profile.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink"
                >
                  <WhatsAppIcon size={16} />
                  {contact.whatsapp}
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

            <div className="grid shrink-0 grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {stats.map((stat, i) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  variant={getCardVariant(i)}
                  compact
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
