import type { CaseStudy } from '../data/content'

interface CaseStudyPageProps {
  study: CaseStudy
}

export default function CaseStudyPage({ study }: CaseStudyPageProps) {
  return (
    <div className="min-h-screen bg-bg pb-28 sm:pb-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <article className="flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 [font-family:'Noto_Sans_SC',sans-serif]">
          <header className="px-4 sm:px-0">
            <p className="text-[13px] leading-[1.65] text-paper-dim">
              {study.tag} — {study.year}
            </p>
            <h1 className="pb-4 pt-4 text-[36px] font-bold leading-[1.4] text-paper-ink">
              {study.title}
            </h1>
            <p className="text-[15px] text-paper-dim">{study.role}</p>
          </header>

          {study.sections.map((section) => (
            <section
              key={section.title}
              className={`flex flex-col gap-4 pt-12 ${
                section.dark
                  ? '-mx-4 rounded-2xl bg-dark-panel p-8 text-white sm:-mx-16 sm:p-12'
                  : 'px-4 sm:px-0'
              }`}
            >
              <h2
                className={`text-[26px] font-bold uppercase leading-[1.4] ${
                  section.dark ? 'text-white' : 'text-paper-ink'
                }`}
              >
                {section.title}
              </h2>
              <div className="flex flex-col gap-4">
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`text-[15px] leading-[1.75] ${
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
