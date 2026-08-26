import { strengths } from '../data/content'
import { useRevealSection } from '../hooks/useReveal'

export default function Strengths() {
  const sectionRef = useRevealSection()

  return (
    <section
      id="strength"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="scroll-mt-24 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10">
        <div
          data-reveal
          className="mb-16 flex flex-wrap items-end justify-between gap-3 sm:mb-20"
        >
          <h2 className="text-3xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            What I Bring
          </h2>
          <span className="text-sm tabular-nums text-ink-dim">
            {String(strengths.length).padStart(2, '0')}
          </span>
        </div>

        <div data-reveal-stagger className="flex flex-col gap-10">
          {strengths.map((group, i) => (
            <div
              key={group.title}
              data-reveal-item
              className="group border-b border-line pb-10 transition-colors duration-300 last:border-b-0 last:pb-0 hover:border-line-strong"
              style={{ '--reveal-i': i } as React.CSSProperties}
            >
              <h3 className="text-[length:var(--text-title3)] font-bold tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1">
                {group.title}
              </h3>
              <p className="mt-2 text-[length:var(--text-body1)] leading-relaxed text-ink-dim transition-colors duration-300 group-hover:text-ink-faint">
                {group.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
