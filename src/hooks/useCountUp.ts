import { useEffect, useState } from 'react'

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function parseValue(value: string) {
  const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/)
  if (!match) return null
  const [, prefix, numStr, suffix] = match
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
  return {
    prefix: prefix ?? '',
    target: parseFloat(numStr),
    suffix: suffix ?? '',
    decimals,
  }
}

export function useCountUp(value: string, active: boolean) {
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!active) return

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reducedMotion) {
      setDisplay(value)
      return
    }

    const parsed = parseValue(value)
    if (!parsed) {
      setDisplay(value)
      return
    }

    const { prefix, target, suffix, decimals } = parsed
    const duration = 1200
    let start: number | null = null
    let frame: number

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const current = easeOutCubic(progress) * target
      setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`)
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setDisplay(value)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value, active])

  return display
}
