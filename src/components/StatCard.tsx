import type { CardVariant } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'

interface StatCardProps {
  value: string
  label: string
  variant: CardVariant
  compact?: boolean
}

const variantClasses: Record<CardVariant, string> = {
  surface: 'border border-line text-ink',
  accent: 'border border-accent/30 text-accent',
  block: 'border border-line-strong text-ink',
}

export default function StatCard({
  value,
  label,
  variant,
  compact = false,
}: StatCardProps) {
  const { ref, inView } = useInView(0.4)
  const display = useCountUp(value, inView)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`hover-lift rounded-2xl transition-[transform,border-color] duration-300 hover:border-line-strong ${
        compact ? 'flex h-full min-h-[7.125rem] flex-col p-4 sm:min-h-[7.5rem] sm:p-5' : 'p-6 sm:p-8'
      } ${variantClasses[variant]}`}
    >
      <p
        className={`font-bold leading-none tracking-tight tabular-nums ${
          compact
            ? 'text-[length:var(--text-title2)] sm:text-[length:var(--text-h4)]'
            : 'text-[length:var(--text-h1)]'
        }`}
      >
        {display}
      </p>
      <p
        className={`mt-1.5 text-[length:var(--text-body2)] leading-snug text-current opacity-70 sm:mt-2 ${
          compact ? 'min-h-[2.1em] flex-1' : ''
        }`}
      >
        {label}
      </p>
    </div>
  )
}
