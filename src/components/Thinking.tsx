import { useContent } from '../context/LocaleContext'
import { useRevealSection } from '../hooks/useReveal'

export default function Thinking() {
  const sectionRef = useRevealSection()
  const { thinking, ui } = useContent()

  return (
    <section
      id="thinking"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="scroll-mt-24 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10">
        <div
          data-reveal
          className="mb-16 flex flex-wrap items-end justify-between gap-3 sm:mb-20"
        >
          <h2 className="text-3xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            {ui.thinking}
          </h2>
          <span className="text-sm tabular-nums text-ink-dim">
            {String(thinking.length).padStart(2, '0')}
          </span>
        </div>

        <div data-reveal-stagger className="flex flex-col gap-0">
          {thinking.map((item, i) => (
            <article
              key={item.title}
              data-reveal-item
              className="group border-b border-line py-8 transition-colors duration-300 first:pt-0 last:border-b-0 hover:border-line-strong"
              style={{ '--reveal-i': i } as React.CSSProperties}
            >
              <h3 className="text-lg font-semibold tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 max-w-3xl text-[length:var(--text-body1)] leading-relaxed text-ink-dim">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
