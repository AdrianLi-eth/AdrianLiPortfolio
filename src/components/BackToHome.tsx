import { useRouter } from '../context/RouterContext'

const barClass = 'border-b border-line bg-bg/80 backdrop-blur-md'

export default function BackToHome() {
  const { navigate } = useRouter()

  return (
    <>
      <div
        className={`fixed inset-x-0 z-40 ${barClass}`}
        style={{ top: 'var(--header-height)' }}
      >
        <div className="mx-auto flex max-w-[1200px] items-center px-4 py-2.5 sm:px-6">
          <button
            type="button"
            onClick={() => navigate({ page: 'home' })}
            className="inline-block text-sm text-ink-dim transition-colors hover:text-ink"
          >
            &larr; Back to Home
          </button>
        </div>
      </div>
      <div className="h-11" aria-hidden />
    </>
  )
}
