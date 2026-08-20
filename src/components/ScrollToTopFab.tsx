import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { scrollWindowToTop } from '../lib/router'

function getScrollTop() {
  return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
}

export default function ScrollToTopFab() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(getScrollTop() > window.innerHeight)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => scrollWindowToTop()}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-paper-ink shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-[transform,opacity,box-shadow] duration-300 hover:-translate-y-1 hover:opacity-95 hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)]"
    >
      <ArrowUp size={18} />
    </button>
  )
}
