import BackToHome from './BackToHome'
import {
  CaseIntro,
  IntroHeading,
  IntroImpactItem,
  IntroMetrics,
  IntroRoleTags,
} from './project/ProjectShared'
import {
  BodyStack,
  IMG,
  ImgRow,
  NumberedItem,
  P,
  PhoneFrameRow,
  Section,
  SubTitle,
  WideImg,
} from './tradfi/TradFiShared'

const ROLE_TAGS = ['Product Research', 'Data Driven', 'UX / UI'] as const

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

function DataTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: string[][]
}) {
  return (
    <div className="w-full overflow-x-auto rounded-lg">
      <table className="w-full min-w-[640px] border-collapse text-left text-[14px] text-paper-dim">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="border border-line bg-surface-2 px-4 py-3 text-[13px] font-semibold text-paper-ink"
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
                <td key={j} className="border border-line px-4 py-3 align-top leading-[1.65]">
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

        <article className="flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="px-4 pb-4 text-[36px] font-bold leading-[1.4] text-paper-ink sm:px-0">
            TradFi Trading UX Optimization
          </h1>

          <CaseIntro>
            <div className="flex flex-col gap-2">
              <IntroHeading>My role</IntroHeading>
              <IntroRoleTags tags={[...ROLE_TAGS]} />
            </div>

            <div className="flex flex-col gap-6">
              <IntroHeading>Impact</IntroHeading>
              <div className="flex flex-col gap-6">
                <IntroImpactItem title="Mapped the highest-value trading entry paths">
                  Through user data analysis, identified the top 3 transaction conversion entry
                  points and ran experience map analysis on each journey to pinpoint friction
                  before proposing optimizations.
                </IntroImpactItem>
                <IntroImpactItem title="Prioritized MVP scope for measurable lift">
                  Balanced redesign cost against stock and commodity contract conversion goals by
                  partnering with analytics on funnel data and sequencing small, high-impact changes
                  through clear version control.
                </IntroImpactItem>
                <IntroImpactItem title="Validated UX direction through competitive benchmarking">
                  Performed UX/UI competitive analysis on core rivals for each scenario to ground
                  optimization decisions before high-fidelity design.
                </IntroImpactItem>
              </div>
            </div>

            <IntroMetrics
              metrics={[
                {
                  value: '+8.3%',
                  label: 'K-line page to trade button click-through conversion rate',
                },
                {
                  value: '+28.7%',
                  label: 'TradFi bottom nav trade entry overall funnel conversion rate',
                },
              ]}
            />
          </CaseIntro>

          <Section title="Optimization Objective">
            <P>Boost conversion across the TradFi commodity and stock futures trading funnels.</P>
          </Section>

          <Section title="Key Breakpoint from Conversion">
            <BodyStack>
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
            </BodyStack>
          </Section>

          <Section title="Optimization Direction">
            <BodyStack>
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
            </BodyStack>
          </Section>

          <Section title="Commodity Trade Conversion Paths">
            <BodyStack>
              <P>
                Commodity contract traffic (precious metals, crude oil, etc.) flows in through six
                entry points: TradFi Tab, Trading Tab, Search, Homepage Market Cards, Homepage TradFi
                Module, and Market Page TradFi Module. Regardless of how users arrive at the K-line
                page, they all pass through the same core funnel: K-line → Click Trade → Trading Page
                → Place Order.
              </P>
            </BodyStack>

            <div className="w-full overflow-x-auto rounded-lg">
              <table className="w-full min-w-[900px] border-collapse text-[13px] text-paper-dim">
                <thead>
                  <tr>
                    <th className="w-[110px] border border-line bg-surface-2 px-3 py-3 text-[13px] font-semibold text-paper-ink">
                      Path
                    </th>
                    {PATH_COLUMNS.map((col) => (
                      <th
                        key={col.label}
                        className="w-[164px] border border-line bg-surface-2 px-3 py-3 text-[13px] font-semibold text-paper-ink"
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-line px-3 py-3 align-top font-semibold text-paper-ink">
                      Entry/Path
                    </td>
                    {PATH_COLUMNS.map((col) => (
                      <td key={col.label} className="border border-line px-3 py-3 align-top leading-[1.65]">
                        <p className="mb-2">{col.entry}</p>
                        <p className="mb-3 font-semibold text-paper-ink">{col.share}</p>
                        <div className="overflow-hidden rounded-md bg-surface-2">
                          <img src={col.image} alt={col.label} className="h-auto w-full object-cover" />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-line px-3 py-3 align-top font-semibold text-paper-ink">
                      Description
                    </td>
                    {PATH_COLUMNS.map((col) => (
                      <td key={col.label} className="border border-line px-3 py-3 align-top leading-[1.65]">
                        {col.description}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <BodyStack>
              <P>
                The bottom nav [TradFi] Tab is by far the dominant entry, accounting for 32% of daily
                UV to the precious metals trading page. All other entries sit in single digits —
                Trading Tab switching at 7.4% is the only meaningful secondary source.
              </P>
              <P>
                Of users who reach the trading page from the K-line, 55% go on to click the trade
                button — strong intent once they make the jump.
              </P>
            </BodyStack>

            <div className="flex flex-col gap-4 rounded-xl bg-surface-2 p-5 lg:flex-row lg:items-start">
              <p className="shrink-0 text-[15px] font-semibold text-paper-ink lg:w-[110px]">
                Funnel Conversion
              </p>
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

            <BodyStack>
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
            </BodyStack>
            <ImgRow
              images={[
                { src: `${IMG}/pain-1.png`, alt: 'Pain point screenshot 1', className: 'w-[243px]' },
                { src: `${IMG}/pain-2.png`, alt: 'Pain point screenshot 2', className: 'w-[245px]' },
                { src: `${IMG}/pain-3.png`, alt: 'Pain point screenshot 3', className: 'w-[246px]' },
              ]}
            />
          </Section>

          <Section title="Competitor Analysis">
            <BodyStack>
              <NumberedItem index={1}>
                <P>Navigation structure;</P>
              </NumberedItem>
              <NumberedItem index={2}>
                <P>Order path + page interaction;</P>
              </NumberedItem>
            </BodyStack>

            <div className="flex flex-col gap-8 pt-2">
              <div className="flex flex-col gap-4">
                <SubTitle>Gate</SubTitle>
                <BodyStack>
                  <P>
                    Navigation: Gate has no standalone [Market] tab — it&apos;s built around trading.
                    Crypto users check prices via the homepage leaderboard and pair switcher. TradFi gets
                    its own dedicated tab with market data front and center.
                  </P>
                  <P>👍 Clean navigation — easy for users to build a mental model of the entry point.</P>
                  <P>👎 Long path to TradFi trading — frustrating for users who want to act fast.</P>
                </BodyStack>
                <PhoneFrameRow
                  frames={[
                    { src: `${IMG}/gate-nav-1.png`, alt: 'Gate navigation 1' },
                    { src: `${IMG}/gate-nav-2.png`, alt: 'Gate navigation 2' },
                    { src: `${IMG}/gate-nav-3.png`, alt: 'Gate navigation 3' },
                    { src: `${IMG}/gate-nav-4.png`, alt: 'Gate navigation 4' },
                  ]}
                />
                <BodyStack>
                  <P>
                    The TradFi user path for commodity/stock contracts mirrors BG&apos;s approach:
                  </P>
                  <P medium>Path 1: TradFi - Perpetual Market - K-line - Trading Page</P>
                  <P>👍 Addresses the need to review TradFi market data before trading</P>
                  <P>👎 1. Too many steps for users who just want to trade quickly.</P>
                  <NumberedItem index={2}>
                    <P>
                      Switching between trading and K-line creates context-jumping; the back button
                      behavior on both pages is ambiguous.
                    </P>
                  </NumberedItem>
                </BodyStack>
                <WideImg src={`${IMG}/gate-path-1.png`} alt="Gate path 1" />
                <BodyStack>
                  <P medium>Path 2: Homepage - Stock Leaderboard - K-line - Trading Page</P>
                  <P>
                    👍 Users can order directly on the K-line page — shorter path, higher focus, less
                    drop-off.
                  </P>
                </BodyStack>
                <WideImg src={`${IMG}/gate-path-2.png`} alt="Gate path 2" />
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>Binance (primarily crypto trading user path)</SubTitle>
                <BodyStack>
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
                  <P medium>Path 1: Market - TradFi - K-line - Trading Page</P>
                </BodyStack>
                <ImgRow
                  images={[
                    { src: `${IMG}/binance-path-1.png`, alt: 'Binance path 1', className: 'w-[247px]' },
                    { src: `${IMG}/binance-path-2.png`, alt: 'Binance path 2', className: 'w-[251px]' },
                    { src: `${IMG}/binance-path-3.png`, alt: 'Binance path 3', className: 'w-[244px]' },
                  ]}
                />
                <BodyStack>
                  <P medium>Path 2: Futures Trading - Switch Pair - TradFi - Trading Page</P>
                </BodyStack>
                <ImgRow
                  images={[
                    { src: `${IMG}/binance-path2-1.png`, alt: 'Binance path 2 step 1', className: 'w-[246px]' },
                    { src: `${IMG}/binance-path2-2.png`, alt: 'Binance path 2 step 2', className: 'w-[244px]' },
                  ]}
                />
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>OKX (primarily crypto trading user path)</SubTitle>
                <BodyStack>
                  <P>
                    Navigation: Same as Binance — no dedicated TradFi entry, crypto-first architecture.
                    TradFi appears in the homepage leaderboard and the trading pair switcher, without
                    further sub-categorization.
                  </P>
                  <P>👍 No disruption to existing navigation habits — minimal user impact.</P>
                  <P>👎 Hard to discover — friction for users specifically seeking TradFi assets.</P>
                  <P medium>Path 1: Homepage TradFi Leaderboard - K-line - Trading Page</P>
                </BodyStack>
                <ImgRow
                  images={[
                    { src: `${IMG}/okx-path-1.png`, alt: 'OKX path 1', className: 'w-[245px]' },
                    { src: `${IMG}/okx-path-2.png`, alt: 'OKX path 2', className: 'w-[244px]' },
                    { src: `${IMG}/okx-path-3.png`, alt: 'OKX path 3', className: 'w-[244px]' },
                  ]}
                />
                <BodyStack>
                  <P medium>Path 2: Trading - Switch Pair TradFi - Trading</P>
                </BodyStack>
                <ImgRow
                  images={[
                    { src: `${IMG}/okx-path-2.png`, alt: 'OKX path 2 step 1', className: 'w-[244px]' },
                    { src: `${IMG}/okx-path-3.png`, alt: 'OKX path 2 step 2', className: 'w-[247px]' },
                  ]}
                />
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>Bybit</SubTitle>
                <BodyStack>
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
                  <P medium>
                    Path 1: Trading - TradFi Trading - K-line - K-line Order (Pending Orders/Positions)
                  </P>
                </BodyStack>
                <ImgRow
                  images={[
                    { src: `${IMG}/bybit-path-1.png`, alt: 'Bybit path 1', className: 'w-[246px]' },
                    { src: `${IMG}/bybit-path-2.png`, alt: 'Bybit path 2', className: 'w-[246px]' },
                    { src: `${IMG}/bybit-path-3.png`, alt: 'Bybit path 3', className: 'w-[246px]' },
                  ]}
                />
              </div>
            </div>

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
          </Section>

          <Section title="Optimization Direction">
            <BodyStack>
              <NumberedItem index={1}>
                <P>
                  Add a market-data landing view to the TradFi tab — let users see what&apos;s
                  available and get a feel for price action before they commit to a trade.
                </P>
              </NumberedItem>
              <NumberedItem index={2}>
                <P>Add a quick order window on the K-line page?</P>
              </NumberedItem>
            </BodyStack>
            <div className="flex flex-col gap-3 pt-2">
              <PhoneFrameRow
                noBackground
                nowrap
                height="h-[533px]"
                frames={[
                  { src: `${IMG}/optimization-dir-1.png`, alt: 'TradFi market landing view' },
                  { src: `${IMG}/optimization-dir-2.png`, alt: 'Gold perpetual trading screen' },
                  { src: `${IMG}/optimization-dir-3.png`, alt: 'Trading preferences modal' },
                ]}
              />
              <PhoneFrameRow
                noBackground
                nowrap
                height="h-[533px]"
                frames={[
                  { src: `${IMG}/optimization-dir-4.png`, alt: 'Lightning order on K-line' },
                  { src: `${IMG}/optimization-dir-5.png`, alt: 'Quick order window' },
                  { src: `${IMG}/optimization-dir-6.png`, alt: 'Position management screen' },
                ]}
              />
            </div>
          </Section>

          <Section title="Data Sources">
            <BodyStack>
              <P>Precious Metals &amp; Commodity Contract User and Conversion Path Analysis</P>
              <P>Stock User Flow Path Analysis</P>
            </BodyStack>
          </Section>
        </article>
      </div>
    </div>
  )
}
