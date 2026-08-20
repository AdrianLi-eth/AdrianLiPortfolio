import { useEffect, useState } from 'react'
import Aurora from './Aurora'

export default function PageBackground() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(motion.matches)
    apply()
    motion.addEventListener('change', apply)
    return () => motion.removeEventListener('change', apply)
  }, [])

  if (reduceMotion) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
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
