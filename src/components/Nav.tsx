import { useEffect, useState } from 'react'
import { useRouter } from '../context/RouterContext'
import { navLinks } from '../data/content'

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

  const isProject = route.page === 'project'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isProject
          ? 'border-b border-line bg-bg/80 backdrop-blur-md'
          : 'bg-transparent'
      } ${isProject ? 'border-b-0' : ''}`}
    >
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          onClick={goHome}
          className="text-sm font-normal text-ink"
        >
          PORTFOLIO {year}
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={scrollTo(link.id)}
              className="text-sm font-normal text-ink/65 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={scrollTo('contact')}
          className="text-sm font-normal text-ink/65 transition-colors hover:text-ink"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
