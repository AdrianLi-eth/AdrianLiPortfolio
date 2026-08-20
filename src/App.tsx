import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Work from './components/Work'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import CaseStudyPage from './components/CaseStudyPage'
import SimplifyDesignPrinciplePage from './components/SimplifyDesignPrinciplePage'
import CopyBotUxPage from './components/CopyBotUxPage'
import TradFiTradingUxPage from './components/TradFiTradingUxPage'
import RTokenTradingUxPage from './components/RTokenTradingUxPage'
import BuyCryptoPage from './components/BuyCryptoPage'
import SpotTradingFttsPage from './components/SpotTradingFttsPage'
import OnboardingUxAuditPage from './components/OnboardingUxAuditPage'
import ScrollToTopFab from './components/ScrollToTopFab'
import PageBackground from './components/PageBackground'
import { RouterProvider, useRouter } from './context/RouterContext'
import { caseStudies, projects } from './data/content'
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
      <Nav />
      <main id="main">{children}</main>
      <ScrollToTopFab />
    </>
  )
}

function HomePage() {
  useRestoreProjectEntry()

  return (
    <main id="main">
      <Hero />
      <Experience />
      <Work projectCount={projects.length} />
      <Strengths />
      <Contact />
    </main>
  )
}

function AppRoutes() {
  const { route } = useRouter()
  const routeKey = route.page === 'project' ? `project-${route.slug}` : 'home'

  if (route.page === 'project') {
    const projectPages: Record<string, React.ReactNode> = {
      'copy-bot-ux-optimization': <CopyBotUxPage />,
      'buy-crypto-binance': <BuyCryptoPage />,
      'buy-crypto': <BuyCryptoPage />,
      'simplify-design-principle': <SimplifyDesignPrinciplePage />,
      'tradfi-trading-ux-optimization': <TradFiTradingUxPage />,
      'rtoken-trading-ux-audit': <RTokenTradingUxPage />,
      'spot-trading-first-trade-conversion': <SpotTradingFttsPage />,
      'bitget-onboarding-ux-audit': <OnboardingUxAuditPage />,
    }

    const page = projectPages[route.slug]
    if (page) {
      return (
        <div key={routeKey} className="page-enter">
          <ProjectLayout slug={route.slug}>{page}</ProjectLayout>
        </div>
      )
    }

    const study = caseStudies[route.slug]
    if (!study) {
      return (
        <div key={routeKey} className="page-enter">
          <ProjectLayout slug={route.slug}>
            <div className="flex min-h-screen items-center justify-center px-6 py-32">
              <div className="text-center">
                <p className="text-lg text-ink">Project not found.</p>
                <a href="#/" className="mt-4 inline-block text-sm text-ink-dim hover:text-ink">
                  &larr; Back to Home
                </a>
              </div>
            </div>
          </ProjectLayout>
        </div>
      )
    }

    return (
      <div key={routeKey} className="page-enter">
        <ProjectLayout slug={route.slug}>
          <CaseStudyPage study={study} />
        </ProjectLayout>
      </div>
    )
  }

  return (
    <div key={routeKey} className="page-enter">
      <Nav />
      <HomePage />
      <ScrollToTopFab />
    </div>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <PageBackground />
      <div className="relative z-[1]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-block focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink-inverse"
        >
          Skip to content
        </a>
        <AppRoutes />
      </div>
    </RouterProvider>
  )
}
