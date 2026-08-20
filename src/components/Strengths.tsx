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
            Core Competencies &amp; Skills
          </h2>
          <span className="text-sm tabular-nums text-ink-dim">
            {String(strengths.length).padStart(2, '0')}
          </span>
        </div>

        <div data-reveal className="flex flex-col gap-10">
          {strengths.map((group) => (
            <div key={group.title}>
              <h3 className="text-[length:var(--text-title3)] font-bold tracking-tight text-ink">
                {group.title}
              </h3>
              <p className="mt-2 text-[length:var(--text-body1)] leading-relaxed text-ink-dim">
                {group.skills.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
