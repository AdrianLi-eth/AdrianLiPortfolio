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
      {children}
      <ScrollToTopFab />
    </>
  )
}

function HomePage() {
  useRestoreProjectEntry()

  return (
    <main>
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
      return <ProjectLayout slug={route.slug}>{page}</ProjectLayout>
    }

    const study = caseStudies[route.slug]
    if (!study) {
      return (
        <ProjectLayout slug={route.slug}>
          <main className="flex min-h-screen items-center justify-center px-6 py-32">
            <div className="text-center">
              <p className="text-lg text-ink">Project not found.</p>
              <a href="#/" className="mt-4 inline-block text-sm text-ink-dim hover:text-ink">
                &larr; Back to Home
              </a>
            </div>
          </main>
        </ProjectLayout>
      )
    }

    return (
      <ProjectLayout slug={route.slug}>
        <CaseStudyPage study={study} />
      </ProjectLayout>
    )
  }

  return (
    <>
      <Nav />
      <HomePage />
    </>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  )
}
