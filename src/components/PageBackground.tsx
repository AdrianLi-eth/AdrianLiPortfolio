import { useEffect, useState } from 'react'
import Aurora from './Aurora'

function getAuroraOpacity(scrollY: number, viewportHeight: number) {
  const fadeStart = viewportHeight * 0.45
  const fadeEnd = viewportHeight * 0.85

  if (scrollY <= fadeStart) return 0
  if (scrollY >= fadeEnd) return 1

  return (scrollY - fadeStart) / (fadeEnd - fadeStart)
}

export default function PageBackground() {
  const [reduceMotion, setReduceMotion] = useState(false)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(motion.matches)
    apply()
    motion.addEventListener('change', apply)
    return () => motion.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (reduceMotion) return

    const update = () => {
      setOpacity(getAuroraOpacity(window.scrollY, window.innerHeight))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500 ease-out"
      style={{ opacity }}
      aria-hidden
    >
      <div className="absolute inset-0 opacity-[0.55]">
        <Aurora
          colorStops={['#7cff67', '#B497CF', '#5227FF']}
          blend={0.43}
          amplitude={1.0}
          speed={0.6}
        />
      </div>
      <div className="absolute inset-0 bg-bg/78" />
      <div className="grid-paper absolute inset-0 opacity-10" />
    </div>
  )
}
