import { ArrowRight } from 'lucide-react'
import { useMemo } from 'react'
import DriftWall from './DriftWall'
import { profile, projects } from '../data/content'

const metaText = 'text-sm font-normal leading-relaxed text-ink-dim'
const nameParts = profile.name.split('.')
const namePrimary = nameParts[0] ?? profile.name
const nameSecondary = nameParts[1] ?? ''
const nameClass =
  'text-[clamp(3.5rem,13vw,9rem)] font-bold leading-[0.95] tracking-[-0.02em]'

export default function Hero() {
  const driftWallItems = useMemo(() => {
    const base = projects
      .filter((project) => project.image)
      .map((project) => ({
        image: project.image,
        title: project.title,
        href: project.slug ? `#/project/${project.slug}` : undefined,
      }))

    const items = [...base]
    while (items.length < 9) {
      items.push(...base)
    }

    return items.slice(0, 9)
  }, [])

  const scrollToWork = (event: React.MouseEvent) => {
    event.preventDefault()
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-bg/90" />
      </div>

      <div className="relative mx-auto grid min-h-[100dvh] w-full max-w-[1700px] grid-cols-1 items-center gap-10 px-6 py-28 sm:px-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-6 lg:py-0">
        <div className="min-w-0">
          <h1
            className={`anim-fade-up flex flex-wrap items-baseline ${nameClass}`}
          >
            <span className="hero-name-outline">{namePrimary}</span>
            {nameSecondary ? (
              <span className="text-ink">.{nameSecondary}</span>
            ) : null}
          </h1>

          <p
            className={`anim-fade-up mt-6 max-w-2xl ${metaText}`}
            style={{ animationDelay: '180ms' }}
          >
            {profile.tagline}
          </p>

          <a
            href="#work"
            onClick={scrollToWork}
            className="anim-fade-up group mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg bg-block px-6 py-3 text-sm font-bold text-ink-inverse transition-opacity hover:opacity-85"
            style={{ animationDelay: '320ms' }}
          >
            View Projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div
          className="anim-fade-up hidden h-[min(76vh,640px)] min-w-0 w-full lg:block"
          style={{ animationDelay: '420ms' }}
        >
          <DriftWall
            items={driftWallItems}
            columns={3}
            tileWidth={248}
            tileHeight={164}
            gap={20}
            scale={1.3}
            tilt={14}
            turn={-12}
            perspective={1200}
            depth={96}
            speed={42}
            direction="up"
            variance={0.45}
            parallax={0.6}
            lift={64}
            fade={0.55}
            dim={0.84}
            overlayOpacity={0}
            centerGlow={0.16}
            overlayColor="#0a0a0a"
            radius={14}
            roll={0}
            pauseOnHover={false}
            grayscale={false}
          />
        </div>
      </div>
    </section>
  )
}
