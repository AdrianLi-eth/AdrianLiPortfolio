import Nav from './components/Nav'
import Hero from './components/Hero'
import ImpactBar from './components/ImpactBar'
import Experience from './components/Experience'
import Work from './components/Work'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import CaseStudyPage from './components/CaseStudyPage'
import ScrollToTopFab from './components/ScrollToTopFab'
import PageBackground from './components/PageBackground'
import { LocaleProvider, useContent, useLocale, useUi } from './context/LocaleContext'
import { RouterProvider, useRouter } from './context/RouterContext'
import { getProjectPage } from './data/projectPages'
import { useRestoreProjectEntry } from './hooks/useRestoreProjectEntry'
import { useScrollToTopOnMount } from './hooks/useScrollToTopOnMount'

function ProjectLayout({
  slug,
  children,
}: {
  slug: string
  children: React.ReactNode
}) {
  useScrollToTopOnMount(slug)

  return (
    <>
      <main id="main" className="pt-[var(--project-top-offset)]">
        {children}
      </main>
      <ScrollToTopFab />
    </>
  )
}

function LocalizedProjectPage({ slug }: { slug: string }) {
  const { locale } = useLocale()
  const Page = getProjectPage(slug, locale)

  if (!Page) return null
  return <Page />
}

function HomePage() {
  useRestoreProjectEntry()
  const { projects } = useContent()

  return (
    <main id="main">
      <Hero />
      <ImpactBar />
      <Experience />
      <Work projectCount={projects.length} />
      <Strengths />
      <Contact />
    </main>
  )
}

function AppRoutes() {
  const { route } = useRouter()
  const { locale } = useLocale()
  const { caseStudies } = useContent()
  const ui = useUi()
  const routeKey = route.page === 'project' ? `project-${route.slug}` : 'home'

  if (route.page === 'project') {
    const Page = getProjectPage(route.slug, 'en') || getProjectPage(route.slug, 'zh')

    if (Page) {
      return (
        <>
          <Nav />
          <div key={`${routeKey}-${locale}`} className="page-enter">
            <ProjectLayout slug={route.slug}>
              <LocalizedProjectPage slug={route.slug} />
            </ProjectLayout>
          </div>
        </>
      )
    }

    const study = caseStudies[route.slug]
    if (!study) {
      return (
        <>
          <Nav />
          <div key={routeKey} className="page-enter">
            <ProjectLayout slug={route.slug}>
              <div className="flex min-h-screen items-center justify-center px-6 py-32">
                <div className="text-center">
                  <p className="text-lg text-ink">{ui.projectNotFound}</p>
                  <a href="#/" className="mt-4 inline-block text-sm text-ink-dim hover:text-ink">
                    &larr; {ui.backToHome}
                  </a>
                </div>
              </div>
            </ProjectLayout>
          </div>
        </>
      )
    }

    return (
      <>
        <Nav />
        <div key={`${routeKey}-${locale}`} className="page-enter">
          <ProjectLayout slug={route.slug}>
            <CaseStudyPage study={study} />
          </ProjectLayout>
        </div>
      </>
    )
  }

  return (
    <>
      <Nav />
      <div key={`${routeKey}-${locale}`} className="page-enter">
        <HomePage />
        <ScrollToTopFab />
      </div>
    </>
  )
}

function SkipLink() {
  const ui = useUi()
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-block focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink-inverse"
    >
      {ui.skipToContent}
    </a>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <LocaleProvider>
        <PageBackground />
        <div className="relative z-[1]">
          <SkipLink />
          <AppRoutes />
        </div>
      </LocaleProvider>
    </RouterProvider>
  )
}
