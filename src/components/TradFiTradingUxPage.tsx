import type { ReactNode } from 'react'
import BackToHome from './BackToHome'
import {
  Hr,
  IMG,
  ImgRow,
  NumberedItem,
  P,
  SectionTitle,
  SubTitle,
  WideImg,
} from './tradfi/TradFiShared'

const PATH_COLUMNS = [
  {
    label: 'Path 1',
    entry: 'Bottom Nav TradFi Tab → Precious Metals Trading Page:',
    share: '32%',
    image: `${IMG}/path-1.png`,
    description:
      'Highest-converting entry — the most direct path to trading with the fewest steps',
  },
  {
    label: 'Path 2',
    entry: 'Trading Tab Switch/Jump → Precious Metals:',
    share: '7.4% of total',
    image: `${IMG}/path-2.png`,
    description:
      'Users switching from the main Trading Tab; they stumble upon precious metals while browsing the broader market',
  },
  {
    label: 'Path 3',
    entry: 'Search Entry → Precious Metals Search Result Click:',
    share: '3.3%',
    image: `${IMG}/path-3.png`,
    description: 'Conversion rate from active search → clicking a precious metals result',
  },
  {
    label: 'Path 4',
    entry: 'Homepage Market Card Module → Precious Metals Card Click',
    share: '1.1%',
    image: `${IMG}/path-4.png`,
    description: 'Click-through rate on precious metals cards shown in the homepage market module',
  },
  {
    label: 'Path 5',
    entry: 'Homepage TradFi Module → K-line Page',
    share: '2.3%',
    image: `${IMG}/path-5.png`,
    description: 'Click-through from homepage TradFi module exposure to K-line page',
  },
  {
    label: 'Path 6',
    entry: 'Market Page TradFi/Stock Module → K-line Page',
    share: '4.6%',
    image: `${IMG}/path-6.png`,
    description: 'Click-through from market page module exposure to K-line page',
  },
]

const COMPETITOR_ROWS = [
  {
    platform: 'BG',
    path: 'Bottom Nav TradFi → Stock/Commodity Contract Trading Page → Click Trade',
    clicks: '2',
    dedicated: 'Yes',
    marketData: 'No',
    klineOrder: 'No',
  },
  {
    platform: '',
    path: 'Futures Trading → Select Switch Pair → Select Commodity → Trade',
    clicks: '3',
    dedicated: '',
    marketData: '',
    klineOrder: '',
  },
  {
    platform: 'Gate',
    path: 'TradFi → Perpetual Market → Select Asset → K-line → Trading Page',
    clicks: '4',
    dedicated: 'Yes',
    marketData: 'Yes',
    klineOrder: 'Yes',
  },
  {
    platform: '',
    path: 'Homepage → Commodity Leaderboard → Select Asset → K-line → Trading Page',
    clicks: '4',
    dedicated: '',
    marketData: '',
    klineOrder: '',
  },
  {
    platform: 'Binance',
    path: 'Market → TradFi → K-line → Trading Page',
    clicks: '4',
    dedicated: 'No',
    marketData: 'Yes',
    klineOrder: 'Yes',
  },
  {
    platform: '',
    path: 'Futures Trading → Switch Pair → TradFi → Trading Page',
    clicks: '3',
    dedicated: '',
    marketData: '',
    klineOrder: '',
  },
  {
    platform: 'OKX',
    path: 'Homepage → TradFi Leaderboard → Select Asset → K-line → Trading Page',
    clicks: '4',
    dedicated: 'No',
    marketData: 'Yes',
    klineOrder: 'No',
  },
  {
    platform: '',
    path: 'Trading → Switch Pair → Select TradFi → Select Asset → Trade',
    clicks: '4',
    dedicated: '',
    marketData: '',
    klineOrder: '',
  },
  {
    platform: 'Bybit',
    path: 'Trading → Select TradFi Trading → Select Asset → K-line → Order (Pending/Positions)',
    clicks: '4',
    dedicated: 'No',
    marketData: 'Yes',
    klineOrder: 'Yes',
  },
]

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex h-[25px] items-center rounded-full border border-line px-3 text-[12px] text-paper-dim">
      {children}
    </span>
  )
}

function HighlightCard({
  title,
  children,
  tags,
}: {
  title: string
  children: ReactNode
  tags?: string[]
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4 border border-line bg-surface-2 p-8">
      <p className="text-[20px] font-medium leading-[1.4] text-paper-ink">{title}</p>
      <div className="text-[15px] leading-[1.7] text-paper-dim">{children}</div>
      {tags && (
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
    </div>
  )
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: string[][]
}) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left text-[13px] text-paper-dim">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="border border-line bg-surface-2 px-3 py-2.5 font-medium text-paper-ink"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="border border-line px-3 py-2.5 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function TradFiTradingUxPage() {
  return (
    <div className="min-h-screen bg-bg py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <BackToHome />

        <article className="flex w-full flex-col gap-16 border border-line bg-paper pb-20 pt-[72px] sm:px-20 sm:pb-20 sm:pt-[72px] [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="px-4 text-[36px] font-medium leading-[1.4] tracking-[-0.5px] text-paper-ink sm:px-0">
            TradFi Trading UX Optimization
          </h1>

          {/* Highlight Cards */}
          <div className="flex w-full flex-col gap-6 px-4 sm:px-0">
            <div className="flex flex-col gap-6 lg:flex-row">
              <HighlightCard
                title="What I Did"
                tags={['Product Research', 'Data Driven', 'UX / UI']}
              >
                <P>
                  Through user data analysis, identified the top 3 transaction conversion entry
                  points and user journey scenarios. Conducted experience map analysis for each
                  scenario to pinpoint friction points. Performed UX/UI competitive analysis on
                  several core competitors for corresponding scenarios, and proposed optimization
                  solutions.
                </P>
              </HighlightCard>
              <HighlightCard title="Challenge">
                <P>
                  1. Understand existing users&apos; trading habits on the platform (Crypto and
                  TradFi)
                </P>
                <P>
                  2. Balance redesign costs with improving business metrics (stock and commodity
                  contract trading conversion)
                </P>
                <P medium>Strategies:</P>
                <P>
                  1. Through data platform event tracking analysis and collaboration with the data
                  analytics department, obtain key trading entry traffic contribution and funnel
                  conversion data across different entry points to analyze user behavior and order
                  placement experience.
                </P>
                <P>
                  2. Prioritize + version control — start with MVP (small changes, high-impact
                  action items)
                </P>
              </HighlightCard>
              <HighlightCard title="Result">
                <P>
                  K-line page to trade button click-through conversion increased by 8.3%. TradFi
                  bottom navigation trade entry overall funnel conversion increased by 28.7%.
                </P>
              </HighlightCard>
            </div>
          </div>

          {/* Optimization Objective */}
          <div className="flex w-full flex-col gap-6 px-4 sm:px-0">
            <SectionTitle>Optimization Objective</SectionTitle>
            <P>
              Boost conversion across the TradFi commodity and stock futures trading funnels.
            </P>
            <Hr />
          </div>

          {/* Conversion Pain Points */}
          <div className="flex w-full flex-col gap-6 px-4 sm:px-0">
            <SectionTitle>Conversion Pain Points</SectionTitle>
            <NumberedItem index={1}>
              <P>
                The TradFi page doesn&apos;t build user confidence in the available trading
                categories, which hurts order conversion. The bottom nav [TradFi] tab drives 32% of
                commodity/stock traffic — the single largest entry — yet users can&apos;t browse all
                tradable assets directly. They have to open the pair-switching panel, and if the
                default pair isn&apos;t what they&apos;re looking for, they need to search within it.
                The search structure is non-trivial to learn and easily diverts users toward other
                assets, dragging down funnel performance. Notably, ~88% of first-time stock traders
                had already traded crypto on the platform. Pure stock-only users (deposit → buy
                stocks, no other trades) make up less than 12%. Most TradFi traders are existing
                crypto users exploring a new category — which makes onboarding education for this
                segment critical.
              </P>
            </NumberedItem>
            <NumberedItem index={2}>
              <P>
                The K-line page is the single biggest leak in the funnel. For commodity contracts,
                K-line → click trade converts at just 35%. For stock contracts via Path 2, the
                10-second bounce rate on the K-line page hits 60%, and only 28% continue to the
                trading page. Users are watching the market but not being nudged to act. If we can
                close the trading loop right on the K-line page — shortening the path from intent
                to order — overall conversion should improve significantly.
              </P>
            </NumberedItem>
            <NumberedItem index={3}>
              <P>
                The pair-switching page has weak brand recognition for stock and commodity contracts.
                It&apos;s the second-largest entry (7.4%), yet nothing on the list signals
                &apos;this is stocks/commodities&apos; at a glance. Users don&apos;t build the mental
                model or trust needed to click. First-impression clarity here is a real lever.
              </P>
            </NumberedItem>
          </div>

          {/* Optimization Direction (1) */}
          <div className="flex w-full flex-col gap-6 px-4 sm:px-0">
            <SectionTitle>Optimization Direction</SectionTitle>
            <NumberedItem index={1}>
              <P>
                Surface market data directly on the TradFi landing page so users can browse all
                tradable commodity assets without extra steps. This lowers the cognitive cost of
                discovering TradFi products, reduces reliance on the switching panel, and improves
                in-panel search — cutting diversion-driven drop-off when the default pair isn&apos;t
                what the user came for.
              </P>
            </NumberedItem>
            <NumberedItem index={2}>
              <P>
                Take a page from Bybit: add a quick-order widget on the K-line page. This keeps users
                in context, shortens the path to execution, and reduces the chance they bail before
                placing a trade.
              </P>
            </NumberedItem>
            <NumberedItem index={3}>
              <P>
                Align the commodity/stock modules in the pair-switching page with the styling already
                used in the market data section. A consistent visual language builds category
                recognition and trust, lifting click-through rates.
              </P>
            </NumberedItem>
            <Hr />
          </div>

          {/* Commodity Contract Conversion Paths */}
          <div className="flex w-full flex-col gap-6 px-4 sm:px-0">
            <SectionTitle>Commodity Contract Conversion Paths</SectionTitle>
            <P>
              Commodity contract traffic (precious metals, crude oil, etc.) flows in through six
              entry points: TradFi Tab, Trading Tab, Search, Homepage Market Cards, Homepage TradFi
              Module, and Market Page TradFi Module. Regardless of how users arrive at the K-line
              page, they all pass through the same core funnel: K-line → Click Trade → Trading Page
              → Place Order.
            </P>

            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-[12px] text-paper-dim">
                <thead>
                  <tr>
                    <th className="w-[110px] border border-line bg-surface-2 px-2.5 py-2.5 font-medium text-paper-ink">
                      Path
                    </th>
                    {PATH_COLUMNS.map((col) => (
                      <th
                        key={col.label}
                        className="w-[164px] border border-line bg-surface-2 px-2.5 py-2.5 font-medium text-paper-ink"
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-line px-2.5 py-2.5 align-top font-medium text-paper-ink">
                      Entry/Path
                    </td>
                    {PATH_COLUMNS.map((col) => (
                      <td key={col.label} className="border border-line px-2.5 py-2.5 align-top">
                        <p className="mb-1">{col.entry}</p>
                        <p className="mb-2 font-medium text-paper-ink">{col.share}</p>
                        <div className="overflow-hidden bg-surface-2">
                          <img src={col.image} alt={col.label} className="h-auto w-full object-cover" />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-line px-2.5 py-2.5 align-top font-medium text-paper-ink">
                      Description
                    </td>
                    {PATH_COLUMNS.map((col) => (
                      <td key={col.label} className="border border-line px-2.5 py-2.5 align-top">
                        {col.description}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <P>
              The bottom nav [TradFi] Tab is by far the dominant entry, accounting for 32% of daily
              UV to the precious metals trading page. All other entries sit in single digits —
              Trading Tab switching at 7.4% is the only meaningful secondary source.
            </P>
            <P>
              Of users who reach the trading page from the K-line, 55% go on to click the trade
              button — strong intent once they make the jump.
            </P>

            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="flex min-w-0 flex-col gap-2 lg:w-[110px]">
                <p className="text-[13px] font-medium text-paper-ink">Funnel Conversion</p>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <P>
                  End-to-end funnel conversion: 19%
                  <br />
                  Paths 2, 3, 4 → K-line page: 15%
                  <br />
                  K-line page → Click trade: 35%
                  <br />
                  Trading page → Place order: 55%
                </P>
                <ImgRow
                  images={[
                    { src: `${IMG}/funnel-1.png`, alt: 'Funnel chart 1', className: 'w-[244px]' },
                    { src: `${IMG}/funnel-2.png`, alt: 'Funnel chart 2', className: 'w-[243px]' },
                  ]}
                />
              </div>
            </div>

            <P>
              Looking at the top traffic entry (bottom nav TradFi) through a UX journey lens, two
              clear pain points emerge:
            </P>
            <NumberedItem index={1}>
              <P>
                &quot;I can&apos;t see all the tradable commodity assets at a glance. I have to open
                the pair switcher or go to the Market tab just to browse what&apos;s
                available.&quot;
              </P>
            </NumberedItem>
            <P>
              Pain point: Users landing via [TradFi] can&apos;t browse available assets directly —
              they&apos;re forced into the pair-switching panel, which feels unintuitive.
            </P>
            <NumberedItem index={2}>
              <P>
                &quot;I can&apos;t just tap an asset to check its chart and do TA. I have to go
                through the pair switcher and search — the navigation is confusing and it takes too
                many steps.&quot;
              </P>
            </NumberedItem>
            <P>
              Pain point: When the default pair isn&apos;t what users want, they have to search
              inside the switching panel. The search taxonomy has a learning curve (categories vs.
              keywords), and along the way users get sidetracked by other assets — causing conversion
              leakage.
            </P>
            <ImgRow
              images={[
                { src: `${IMG}/pain-1.png`, alt: 'Pain point screenshot 1', className: 'w-[243px]' },
                { src: `${IMG}/pain-2.png`, alt: 'Pain point screenshot 2', className: 'w-[245px]' },
                { src: `${IMG}/pain-3.png`, alt: 'Pain point screenshot 3', className: 'w-[246px]' },
              ]}
            />
          </div>

          {/* Competitor Analysis */}
          <div className="flex w-full flex-col gap-6 px-4 sm:px-0">
            <SectionTitle>Competitor Analysis</SectionTitle>
            <NumberedItem index={1}>
              <P>Navigation structure;</P>
            </NumberedItem>
            <NumberedItem index={2}>
              <P>Order path + page interaction;</P>
            </NumberedItem>

            <SubTitle>Gate</SubTitle>
            <P>
              Navigation: Gate has no standalone [Market] tab — it&apos;s built around trading.
              Crypto users check prices via the homepage leaderboard and pair switcher. TradFi gets
              its own dedicated tab with market data front and center.
            </P>
            <P>👍 Clean navigation — easy for users to build a mental model of the entry point.</P>
            <P>👎 Long path to TradFi trading — frustrating for users who want to act fast.</P>
            <ImgRow
              images={[
                { src: `${IMG}/gate-nav-1.png`, alt: 'Gate navigation 1', className: 'w-[251px]' },
                { src: `${IMG}/gate-nav-2.png`, alt: 'Gate navigation 2', className: 'w-[269px]' },
                { src: `${IMG}/gate-nav-3.png`, alt: 'Gate navigation 3', className: 'w-[271px]' },
                { src: `${IMG}/gate-nav-4.png`, alt: 'Gate navigation 4', className: 'w-[278px]' },
              ]}
            />
            <P>
              The TradFi user path for commodity/stock contracts mirrors BG&apos;s approach:
            </P>
            <P>Path 1: TradFi - Perpetual Market - K-line - Trading Page</P>
            <P>👍 Addresses the need to review TradFi market data before trading</P>
            <P>👎 1. Too many steps for users who just want to trade quickly.</P>
            <NumberedItem index={2}>
              <P>
                Switching between trading and K-line creates context-jumping; the back button
                behavior on both pages is ambiguous.
              </P>
            </NumberedItem>
            <WideImg src={`${IMG}/gate-path-1.png`} alt="Gate path 1" />
            <P>Path 2: Homepage - Stock Leaderboard - K-line - Trading Page</P>
            <WideImg src={`${IMG}/gate-path-2.png`} alt="Gate path 2" />
            <P>
              👍 Users can order directly on the K-line page — shorter path, higher focus, less
              drop-off.
            </P>

            <SubTitle>Binance (primarily crypto trading user path)</SubTitle>
            <P>
              Navigation: No dedicated TradFi entry. The trading module doesn&apos;t break out TradFi
              as its own category — it&apos;s still a crypto-first experience. TradFi shows up as a
              filter on the Market page and in the futures pair switcher, but without
              sub-categories.
            </P>
            <P>
              👍 No disruption to primary navigation or existing user habits — near-zero friction.
            </P>
            <P>
              👎 Hard to discover — high cost for users specifically looking to trade TradFi assets.
            </P>
            <P>Path 1: Market - TradFi - K-line - Trading Page</P>
            <ImgRow
              images={[
                { src: `${IMG}/binance-path-1.png`, alt: 'Binance path 1', className: 'w-[247px]' },
                { src: `${IMG}/binance-path-2.png`, alt: 'Binance path 2', className: 'w-[251px]' },
                { src: `${IMG}/binance-path-3.png`, alt: 'Binance path 3', className: 'w-[244px]' },
              ]}
            />
            <P>Path 2: Futures Trading - Switch Pair - TradFi - Trading Page</P>
            <ImgRow
              images={[
                { src: `${IMG}/binance-path2-1.png`, alt: 'Binance path 2 step 1', className: 'w-[246px]' },
                { src: `${IMG}/binance-path2-2.png`, alt: 'Binance path 2 step 2', className: 'w-[244px]' },
              ]}
            />

            <SubTitle>OKX (primarily crypto trading user path)</SubTitle>
            <P>
              Navigation: Same as Binance — no dedicated TradFi entry, crypto-first architecture.
              TradFi appears in the homepage leaderboard and the trading pair switcher, without
              further sub-categorization.
            </P>
            <P>👍 No disruption to existing navigation habits — minimal user impact.</P>
            <P>👎 Hard to discover — friction for users specifically seeking TradFi assets.</P>
            <P>Path 1: Homepage TradFi Leaderboard - K-line - Trading Page</P>
            <ImgRow
              images={[
                { src: `${IMG}/okx-path-1.png`, alt: 'OKX path 1', className: 'w-[245px]' },
                { src: `${IMG}/okx-path-2.png`, alt: 'OKX path 2', className: 'w-[244px]' },
                { src: `${IMG}/okx-path-3.png`, alt: 'OKX path 3', className: 'w-[244px]' },
              ]}
            />
            <P>Path 2: Trading - Switch Pair TradFi - Trading</P>
            <ImgRow
              images={[
                { src: `${IMG}/okx-path-2.png`, alt: 'OKX path 2 step 1', className: 'w-[244px]' },
                { src: `${IMG}/okx-path-3.png`, alt: 'OKX path 2 step 2', className: 'w-[247px]' },
              ]}
            />

            <SubTitle>Bybit</SubTitle>
            <P>
              Navigation: TradFi isn&apos;t a standalone nav item, but it appears as a peer-level
              trading type (alongside Spot, Futures, etc.) within the unified trading module.
            </P>
            <NumberedItem index={1}>
              <P>
                👍 Simple mental model — one place to trade everything. Users don&apos;t need to
                decide *what* to trade before figuring out *where* to go.
              </P>
            </NumberedItem>
            <NumberedItem index={2}>
              <P>
                Once inside the TradFi section, users immediately see asset market data —
                satisfying the need for an at-a-glance overview.
              </P>
            </NumberedItem>
            <NumberedItem index={3}>
              <P>
                Users can place orders directly on the K-line page — shorter path, higher focus, less
                drop-off.
              </P>
            </NumberedItem>
            <P>
              Path 1: Trading - TradFi Trading - K-line - K-line Order (Pending Orders/Positions)
            </P>
            <ImgRow
              images={[
                { src: `${IMG}/bybit-path-1.png`, alt: 'Bybit path 1', className: 'w-[246px]' },
                { src: `${IMG}/bybit-path-2.png`, alt: 'Bybit path 2', className: 'w-[246px]' },
                { src: `${IMG}/bybit-path-3.png`, alt: 'Bybit path 3', className: 'w-[246px]' },
              ]}
            />

            <DataTable
              headers={[
                'Platform',
                'Conversion Path',
                'Clicks',
                'Has Dedicated TradFi Entry',
                'Entry Has Market Data',
                'K-line Supports Ordering',
              ]}
              rows={COMPETITOR_ROWS.map((row) => [
                row.platform,
                row.path,
                row.clicks,
                row.dedicated,
                row.marketData,
                row.klineOrder,
              ])}
            />
          </div>

          {/* Optimization Direction (2) */}
          <div className="flex w-full flex-col gap-6 px-4 sm:px-0">
            <SectionTitle>Optimization Direction:</SectionTitle>
            <NumberedItem index={1}>
              <P>
                Add a market-data landing view to the TradFi tab — let users see what&apos;s
                available and get a feel for price action before they commit to a trade.
              </P>
            </NumberedItem>
            <NumberedItem index={2}>
              <P>Add a quick order window on the K-line page?</P>
            </NumberedItem>
            <Hr />
            <WideImg src={`${IMG}/optimization-onboarding.png`} alt="TradFi onboarding optimization" />
            <WideImg src={`${IMG}/optimization-final.png`} alt="TradFi trading optimization screens" />
          </div>

          {/* Data Sources */}
          <div className="flex w-full flex-col gap-6 px-4 sm:px-0">
            <SectionTitle>Data Sources</SectionTitle>
            <P>Precious Metals &amp; Commodity Contract User and Conversion Path Analysis</P>
            <P>Stock User Flow Path Analysis</P>
          </div>
        </article>
      </div>
    </div>
  )
}
