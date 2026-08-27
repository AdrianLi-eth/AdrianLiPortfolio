import { ArrowUpRight } from 'lucide-react'
import { useContent, useLocale } from '../context/LocaleContext'
import { useRevealSection } from '../hooks/useReveal'

export default function Contact() {
  const sectionRef = useRevealSection()
  const { locale } = useLocale()
  const { contact, profile, ui } = useContent()
  const year = new Date().getFullYear()

  const links = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    {
      label: 'LinkedIn',
      value: contact.linkedinHandle,
      href: contact.linkedin,
    },
    {
      label: locale === 'zh' ? '作品集' : 'Portfolio',
      value: contact.website,
      href: `https://${contact.website}`,
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="flex min-h-[100dvh] scroll-mt-24 flex-col justify-center py-28 sm:py-36"
    >
      <div className="mx-auto w-full max-w-[1700px] px-6 sm:px-10">
        <h2
          data-reveal
          className="font-display text-[clamp(2.75rem,11vw,6rem)] font-bold leading-[0.95] tracking-tight text-ink"
        >
          {ui.contactHeadlineLine1}
          <br />
          {ui.contactHeadlineLine2}
        </h2>

        <div data-reveal className="mt-8 flex items-center gap-3">
          <span className="status-dot h-2 w-2 rounded-full bg-accent" />
          <span className="text-sm text-ink-dim">
            {ui.openToOpportunities}
          </span>
        </div>

        <div data-reveal className="mt-16 flex flex-col gap-0">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="link-row group flex min-h-14 items-center justify-between border-b border-line py-4 transition-colors hover:border-line-strong"
            >
              <span className="text-sm uppercase tracking-[0.2em] text-ink-dim transition-colors duration-300 group-hover:text-ink">
                {link.label}
              </span>
              <span className="flex items-center gap-2 text-[length:var(--text-title3)] text-ink transition-[transform,opacity] duration-300 group-hover:opacity-80">
                {link.value}
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          ))}
        </div>

        <footer
          data-reveal
          className="mt-24 flex items-center justify-between text-sm text-ink-dim"
        >
          <span>
            &copy; {year} {profile.name}
          </span>
          <span>{profile.location}</span>
        </footer>
      </div>
    </section>
  )
}
