import type { ComponentType } from 'react'
import type { Locale } from '../context/LocaleContext'
import BuyCryptoPage from '../components/BuyCryptoPage'
import CopyBotUxPage from '../components/CopyBotUxPage'
import OnboardingUxAuditPage from '../components/OnboardingUxAuditPage'
import RTokenTradingUxPage from '../components/RTokenTradingUxPage'
import SimplifyDesignPrinciplePage from '../components/SimplifyDesignPrinciplePage'
import SpotTradingFttsPage from '../components/SpotTradingFttsPage'
import TradFiTradingUxPage from '../components/TradFiTradingUxPage'
import BuyCryptoPageZh from '../components/zh/BuyCryptoPageZh'
import CopyBotUxPageZh from '../components/zh/CopyBotUxPageZh'
import OnboardingUxAuditPageZh from '../components/zh/OnboardingUxAuditPageZh'
import RTokenTradingUxPageZh from '../components/zh/RTokenTradingUxPageZh'
import SimplifyDesignPrinciplePageZh from '../components/zh/SimplifyDesignPrinciplePageZh'
import SpotTradingFttsPageZh from '../components/zh/SpotTradingFttsPageZh'
import TradFiTradingUxPageZh from '../components/zh/TradFiTradingUxPageZh'

type ProjectPageMap = Record<string, Partial<Record<Locale, ComponentType>>>

export const projectPages: ProjectPageMap = {
  'copy-bot-ux-optimization': {
    en: CopyBotUxPage,
    zh: CopyBotUxPageZh,
  },
  'buy-crypto-binance': {
    en: BuyCryptoPage,
    zh: BuyCryptoPageZh,
  },
  'buy-crypto': {
    en: BuyCryptoPage,
    zh: BuyCryptoPageZh,
  },
  'simplify-design-principle': {
    en: SimplifyDesignPrinciplePage,
    zh: SimplifyDesignPrinciplePageZh,
  },
  'tradfi-trading-ux-optimization': {
    en: TradFiTradingUxPage,
    zh: TradFiTradingUxPageZh,
  },
  'rtoken-trading-ux-audit': {
    en: RTokenTradingUxPage,
    zh: RTokenTradingUxPageZh,
  },
  'spot-trading-first-trade-conversion': {
    en: SpotTradingFttsPage,
    zh: SpotTradingFttsPageZh,
  },
  'bitget-onboarding-ux-audit': {
    en: OnboardingUxAuditPage,
    zh: OnboardingUxAuditPageZh,
  },
}

export function getProjectPage(slug: string, locale: Locale): ComponentType | null {
  const entry = projectPages[slug]
  if (!entry) return null
  return entry[locale] ?? entry.en ?? null
}
