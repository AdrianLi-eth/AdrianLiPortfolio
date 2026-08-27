import { useLocale } from '../context/LocaleContext'

export default function LanguageToggle() {
  const { locale, setLocale, content } = useLocale()
  const { ui } = content

  return (
    <div
      className="inline-flex shrink-0 items-center rounded-full border border-line p-0.5"
      role="group"
      aria-label={ui.languageLabel}
    >
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
          locale === 'en'
            ? 'bg-block text-ink-inverse'
            : 'text-ink-dim hover:text-ink'
        }`}
      >
        {ui.languageEn}
      </button>
      <button
        type="button"
        onClick={() => setLocale('zh')}
        aria-pressed={locale === 'zh'}
        className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
          locale === 'zh'
            ? 'bg-block text-ink-inverse'
            : 'text-ink-dim hover:text-ink'
        }`}
      >
        {ui.languageZh}
      </button>
    </div>
  )
}
