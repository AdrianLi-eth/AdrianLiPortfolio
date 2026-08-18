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
  surface: 'border border-line bg-white/[0.03] text-ink',
  accent: 'border border-accent/30 bg-accent/[0.1] text-accent',
  block: 'border border-line-strong bg-white/[0.06] text-ink',
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
      className={`rounded-2xl transition-colors duration-300 hover:border-line-strong ${
        compact ? 'p-5 sm:p-6' : 'p-6 sm:p-8'
      } ${variantClasses[variant]}`}
    >
      <p
        className={`font-bold leading-none tracking-tight ${
          compact
            ? 'text-[length:var(--text-title2)] sm:text-[length:var(--text-h4)]'
            : 'text-[length:var(--text-h1)]'
        }`}
      >
        {display}
      </p>
      <p className="mt-2 text-[length:var(--text-body2)] text-current opacity-70 sm:mt-3">
        {label}
      </p>
    </div>
  )
}
