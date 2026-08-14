import type { CardVariant } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'

interface StatCardProps {
  value: string
  label: string
  variant: CardVariant
}

const variantClasses: Record<CardVariant, string> = {
  surface: 'bg-surface text-ink',
  accent: 'bg-accent text-ink-inverse',
  block: 'bg-block text-ink-inverse',
}

export default function StatCard({ value, label, variant }: StatCardProps) {
  const { ref, inView } = useInView(0.4)
  const display = useCountUp(value, inView)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${variantClasses[variant]}`}
    >
      <p className="text-[length:var(--text-h1)] font-bold leading-none tracking-tight">
        {display}
      </p>
      <p className="mt-3 text-[length:var(--text-body2)] text-current opacity-70">
        {label}
      </p>
    </div>
  )
}
