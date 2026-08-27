import { useEffect, useState } from 'react'
import LanguageToggle from './LanguageToggle'
import { useRouter } from '../context/RouterContext'
import { useContent } from '../context/LocaleContext'

const navItemClass =
  'nav-link whitespace-nowrap rounded-sm py-1 text-sm font-normal text-ink-dim transition-colors hover:text-ink'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { route, navigate } = useRouter()
  const { ui, navLinks } = useContent()
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

  const isProject = route.page === 'project'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isProject
          ? 'border-b border-line bg-bg/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1700px] items-center justify-between gap-4 px-6 py-4 sm:px-10 sm:py-5">
        <a
          href="#top"
          onClick={goHome}
          className="shrink-0 rounded-sm text-sm font-normal text-ink transition-opacity hover:opacity-80"
        >
          {ui.portfolio} {year}
        </a>

        <nav
          aria-label="Primary"
          className="flex min-w-0 items-center justify-end gap-3 overflow-x-auto sm:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={scrollTo(link.id)}
              className={navItemClass}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={scrollTo('contact')}
            className={navItemClass}
          >
            {ui.contact}
          </a>
          <LanguageToggle />
        </nav>
      </div>

      {isProject ? (
        <div className="border-t border-line">
          <div className="mx-auto flex max-w-[1200px] items-center px-4 py-2.5 sm:px-6">
            <button
              type="button"
              onClick={() => navigate({ page: 'home' })}
              className="inline-block text-sm text-ink-dim transition-colors hover:text-ink"
            >
              &larr; {ui.backToHome}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
