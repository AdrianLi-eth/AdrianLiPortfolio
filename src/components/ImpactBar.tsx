import { useContent } from '../context/LocaleContext'
import { getCardVariant } from '../data/content'
import { useRevealSection } from '../hooks/useReveal'
import StatCard from './StatCard'

export default function ImpactBar() {
  const sectionRef = useRevealSection()
  const { stats } = useContent()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="border-y border-line py-10 sm:py-12"
      aria-label="Impact metrics"
    >
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10">
        <div
          data-reveal-stagger
          className="grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal-item
              className="h-full"
              style={{ '--reveal-i': i } as React.CSSProperties}
            >
              <StatCard
                value={stat.value}
                label={stat.label}
                variant={getCardVariant(i)}
                compact
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
