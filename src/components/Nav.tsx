import { useEffect, useState } from 'react'
import { useRouter } from '../context/RouterContext'
import { navLinks, profile } from '../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { route, navigate } = useRouter()
  const year = new Date().getFullYear()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()

    if (route.page === 'project') {
      navigate({ page: 'home' }, { scrollToId: id })
      return
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault()
    if (route.page === 'project') {
      navigate({ page: 'home' })
      return
    }
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-bg/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          onClick={goHome}
          className="flex flex-col leading-tight"
        >
          <span className="font-bold tracking-tight text-ink">{profile.name}</span>
          <span className="text-xs uppercase tracking-[0.2em] text-ink-faint">
            Portfolio {year}
          </span>
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={scrollTo(link.id)}
              className="text-sm text-ink-dim transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={scrollTo('contact')}
          className="rounded-lg bg-surface-2 px-4 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-85"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
