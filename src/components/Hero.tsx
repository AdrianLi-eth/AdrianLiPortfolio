import { ArrowRight } from 'lucide-react'
import { profile } from '../data/content'

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
        <div className="grid-paper absolute inset-0 opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-bg" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1700px] px-6 sm:px-10">
        <p
          className="anim-fade-up mb-6 text-xs uppercase tracking-[0.25em] text-ink-faint"
          style={{ animationDelay: '150ms' }}
        >
          {profile.roles.join(' / ').toUpperCase()}
        </p>

        <h1
          className="anim-fade-up font-display text-[13vw] font-bold leading-[0.95] tracking-tight text-ink sm:text-[9rem]"
          style={{ animationDelay: '300ms' }}
        >
          {profile.name}
        </h1>

        <p
          className="anim-fade-up mt-8 max-w-xl text-lg text-ink-dim sm:text-xl"
          style={{ animationDelay: '480ms' }}
        >
          {profile.headline}
        </p>

        <a
          href="#work"
          onClick={scrollToWork}
          className="anim-fade-up group mt-10 inline-flex items-center gap-2 rounded-lg bg-block px-6 py-3 text-sm font-bold text-ink-inverse transition-opacity hover:opacity-85"
          style={{ animationDelay: '620ms' }}
        >
          View Projects
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>

      {/* Scroll hint */}
      <div
        className="anim-fade-up absolute bottom-10 left-6 flex items-center gap-4 sm:left-10"
        style={{ animationDelay: '900ms' }}
      >
        <span className="text-xs uppercase tracking-[0.25em] text-ink-faint">
          Scroll
        </span>
        <span
          className="anim-line-grow h-px w-16 bg-line-strong"
          style={{ animationDelay: '1200ms' }}
        />
      </div>
    </section>
  )
}
