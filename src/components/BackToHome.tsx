import { useRouter } from '../context/RouterContext'

export default function BackToHome() {
  const { navigate } = useRouter()

  return (
    <div className="sticky top-[4.75rem] z-40 -mx-4 mb-6 border-b border-line bg-bg/90 px-4 py-3 backdrop-blur-sm sm:-mx-6 sm:px-6">
      <button
        type="button"
        onClick={() => navigate({ page: 'home' })}
        className="inline-block text-sm text-ink-dim transition-colors hover:text-ink"
      >
        &larr; Back to Home
      </button>
    </div>
  )
}
