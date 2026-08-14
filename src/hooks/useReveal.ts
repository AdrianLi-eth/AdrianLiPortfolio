import { useEffect, useRef } from 'react'

export function useRevealSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const elements = root.querySelectorAll<HTMLElement>('[data-reveal]')

    if (reducedMotion) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    elements.forEach((el) => {
      observer.observe(el)
      const rect = el.getBoundingClientRect()
      const visibleHeight = window.innerHeight * 0.9
      if (rect.top < visibleHeight && rect.bottom > window.innerHeight * 0.1) {
        el.classList.add('is-visible')
        observer.unobserve(el)
      }
    })

    const fallback = window.setTimeout(() => {
      elements.forEach((el) => el.classList.add('is-visible'))
    }, 1200)

    return () => {
      window.clearTimeout(fallback)
      observer.disconnect()
    }
  }, [])

  return ref
}
