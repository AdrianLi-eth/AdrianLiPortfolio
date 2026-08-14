import BackToHome from './BackToHome'
import type { CaseStudy } from '../data/content'

interface CaseStudyPageProps {
  study: CaseStudy
}

export default function CaseStudyPage({ study }: CaseStudyPageProps) {
  return (
    <div className="min-h-screen bg-bg py-28 sm:py-36">
      <div className="mx-auto max-w-[900px] px-6 sm:px-10">
        <BackToHome />

        <article className="rounded-3xl border border-line bg-paper p-8 sm:p-16">
          <header className="mb-12 border-b border-paper-line pb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-paper-dim">
              {study.tag} — {study.year}
            </p>
            <h1 className="mt-4 text-[length:var(--text-h4)] font-bold tracking-tight text-paper-ink">
              {study.title}
            </h1>
            <p className="mt-2 text-[length:var(--text-body2)] text-paper-dim">
              {study.role}
            </p>
          </header>

          {study.sections.map((section) => (
            <section
              key={section.title}
              className={`mb-12 last:mb-0 ${
                section.dark
                  ? '-mx-8 rounded-2xl bg-dark-panel p-8 text-white sm:-mx-16 sm:p-12'
                  : ''
              }`}
            >
              <h2
                className={`text-[length:var(--text-h4)] font-bold tracking-tight ${
                  section.dark ? 'text-white' : 'text-paper-ink'
                }`}
              >
                {section.title}
              </h2>
              <div className="mt-5 flex flex-col gap-5">
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`text-[length:var(--text-body1)] leading-relaxed ${
                      section.dark ? 'text-white/80' : 'text-paper-dim'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </article>
      </div>
    </div>
  )
}
