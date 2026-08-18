import { ArrowRight } from 'lucide-react'
import { profile } from '../data/content'

const metaText = 'text-sm font-normal leading-relaxed text-ink/65'
const nameParts = profile.name.split('.')
const namePrimary = nameParts[0] ?? profile.name
const nameSecondary = nameParts[1] ?? ''
const nameClass =
  'text-[clamp(3.5rem,13vw,9rem)] font-bold leading-[0.95] tracking-[-0.02em]'

export default function Hero() {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-10"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="grid-paper absolute inset-0 opacity-15" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-bg" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1700px] px-6 sm:px-10">
        <p
          className={`anim-fade-up mb-4 ${metaText}`}
          style={{ animationDelay: '150ms' }}
        >
          {profile.headline}
        </p>

        <h1
          className={`anim-fade-up flex flex-wrap items-baseline ${nameClass}`}
          style={{ animationDelay: '300ms' }}
        >
          <span className="hero-name-outline">{namePrimary}</span>
          {nameSecondary ? (
            <span className="text-ink">.{nameSecondary}</span>
          ) : null}
        </h1>

        <p
          className={`anim-fade-up mt-6 max-w-2xl ${metaText}`}
          style={{ animationDelay: '480ms' }}
        >
          {profile.tagline}
        </p>

        <a
          href="#work"
          onClick={scrollToWork}
          className="anim-fade-up group mt-8 inline-flex items-center gap-2 rounded-lg bg-block px-6 py-3 text-sm font-bold text-ink-inverse transition-opacity hover:opacity-85"
          style={{ animationDelay: '620ms' }}
        >
          View Projects
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  )
}
