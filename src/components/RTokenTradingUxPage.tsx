import BackToHome from './BackToHome'
import {
  BodyStack,
  HighlightCard,
  NumberedItem,
  P,
  Section,
  SubTitle,
  WideImg,
} from './project/ProjectShared'

const IMG = '/media/rtoken-trading-ux'

const TODO_ROWS = [
  { priority: 'P0', task: 'Remove the above-the-fold anchor navigation' },
  { priority: '', task: '[Market Highlights] Truncate each headline to a single line with ellipsis' },
  {
    priority: '',
    task: 'Add an [Opportunity Analysis] entry point on the K-line page, bridging market insights to trading',
  },
  {
    priority: '',
    task: 'Add a [Stock Trading] entry point on the [Opportunity Analysis] page',
  },
  { priority: 'P1', task: 'Restructure the [Opportunity Analysis] page layout' },
  {
    priority: '',
    task: 'Make the "tradable" signal on stock cards more prominent (e.g. a quick-buy button) to visually nudge users toward trading',
  },
  {
    priority: 'P2',
    task: 'Restyle the [Market Highlights] entry — add clear investment signals like "Rebound Play" or "Oversold Bounce", tag the asset class, and weave in emotional hooks that pull users in.',
  },
]

export default function RTokenTradingUxPage() {
  return (
    <div className="min-h-screen bg-bg py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <BackToHome />

        <article className="flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="px-4 pb-4 text-[36px] font-bold leading-[1.4] text-paper-ink sm:px-0">
            rToken Trading Funnel — UX Audit
          </h1>

          <section className="flex flex-col gap-5 px-4 sm:px-0">
            <div className="flex flex-col gap-5 lg:flex-row">
              <HighlightCard
                title="What I Did"
                tags={['UX Research', 'Product Research', 'Data Driven', 'UX / UI']}
              >
                <BodyStack>
                  <P>
                    Through user data analysis, evaluated the rationality of module distribution and
                    proportions on the homepage. Made targeted adjustments based on business objectives
                    to ensure first-screen efficiency.
                  </P>
                  <P>
                    Conducted experience map analysis for each scenario to pinpoint friction points.
                  </P>
                  <P>
                    Performed UX/UI competitive analysis on several core competitors for corresponding
                    scenarios, and proposed optimization solutions.
                  </P>
                </BodyStack>
              </HighlightCard>
              <HighlightCard title="Result">
                <BodyStack>
                  <NumberedItem n={1}>
                    <P>Page dwell time increased by 70%.</P>
                  </NumberedItem>
                  <NumberedItem n={2}>
                    <P>Stock module click rate reached 10.2%, up 75.8%.</P>
                  </NumberedItem>
                  <NumberedItem n={3}>
                    <P>Market-to-stock funnel conversion improved by 7.2%.</P>
                  </NumberedItem>
                </BodyStack>
              </HighlightCard>
            </div>
          </section>

          <Section title="1. Objective">
            <P>
              Goal: Lift the [Market Discovery] → rToken trading conversion from 0.55% to 1.1%.
            </P>
          </Section>

          <Section title="2. Core UX Issues">
            <BodyStack>
              <NumberedItem n={1}>
                <P medium>Above-the-Fold Efficiency</P>
              </NumberedItem>
              <div className="flex flex-col gap-3 pl-7">
                <NumberedItem n="1.1">
                  <P>
                    Half of the above-the-fold content sees a click rate under 3%. Meanwhile, the
                    Stocks module — tucked near the very bottom of the first screen (~1/6 from the
                    fold) — actually ranks No. 2 in clicks. That&apos;s a glaring mismatch between
                    placement and engagement.
                  </P>
                </NumberedItem>
                <NumberedItem n="1.2">
                  <P>
                    The [Stocks] module is easily pushed off the first screen entirely, losing valuable
                    exposure.
                  </P>
                </NumberedItem>
              </div>
              <NumberedItem n={2}>
                <P medium>Stock Trading Funnel Disruption</P>
              </NumberedItem>
              <div className="flex flex-col gap-3 pl-7">
                <NumberedItem n="2.1">
                  <P>
                    When users tap into a stock opportunity and land on the K-line page, there&apos;s
                    no opportunity analysis waiting for them — the momentum they had from exploring
                    opportunities just dies.
                  </P>
                </NumberedItem>
                <NumberedItem n="2.2">
                  <P>
                    The Opportunity Analysis page has no direct path to trading. Users have to back out
                    to the K-line page and hit [Trade] from there — breaking their flow and dragging
                    out the conversion path.
                  </P>
                </NumberedItem>
              </div>
            </BodyStack>
          </Section>

          <Section title="3. To Do">
            <div className="w-full overflow-x-auto rounded-lg">
              <table className="w-full min-w-[500px] border-collapse text-left text-[14px] text-paper-dim">
                <thead>
                  <tr className="bg-surface-2">
                    <th className="w-[140px] border border-line px-4 py-3 text-[13px] font-semibold text-paper-ink">
                      Priority
                    </th>
                    <th className="border border-line px-4 py-3 text-[13px] font-semibold text-paper-ink">
                      To Do
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TODO_ROWS.map((row, i) => (
                    <tr key={i}>
                      <td className="border border-line px-4 py-3 text-[14px] font-semibold leading-[1.65] text-paper-dim">
                        {row.priority}
                      </td>
                      <td className="border border-line px-4 py-3 text-[14px] leading-[1.65] text-paper-dim">
                        {row.task}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. User Data">
            <div className="flex flex-col gap-8 pt-2">
              <div className="flex flex-col gap-4">
                <SubTitle>Market Overview Module Clicks</SubTitle>
                <div className="flex flex-col gap-6 lg:flex-row">
                  <WideImg
                    src={`${IMG}/market-overview-heatmap.png`}
                    alt="Market overview click heatmap"
                    className="shrink-0 lg:w-[599px]"
                  />
                  <div className="flex min-w-0 flex-1 flex-col gap-3 lg:max-w-[449px]">
                    <P medium>Summary:</P>
                    <P small>
                      Half of the above-the-fold content sees a click rate under 3%. Meanwhile, the
                      Stocks module — tucked near the very bottom of the first screen (~1/6 from the
                      fold) — actually ranks No. 2 in clicks. That&apos;s a glaring mismatch between
                      placement and engagement.
                    </P>
                    <P medium>To Do</P>
                    <P small>• Rework above-the-fold layout to boost content exposure value</P>
                    <P small>
                      • Move the Stocks module higher on the first screen so its placement matches its
                      high click-through rate
                    </P>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>Anchor Navigation Module Clicks</SubTitle>
                <P small>
                  95% of users who tapped the anchor navigation chose either [Stocks] or [Crypto] —
                  roughly 51% vs. 49%. In other words, these are the only two modules users actually
                  care about on this page.
                </P>
                <WideImg src={`${IMG}/anchor-nav-clicks.png`} alt="Anchor navigation click distribution" />
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>User Path Conversion</SubTitle>
                <div className="flex flex-col gap-5 lg:flex-row">
                  <WideImg
                    src={`${IMG}/discovery-path-conversion.png`}
                    alt="Discovery path conversion"
                    className="lg:max-w-[525px]"
                  />
                  <WideImg
                    src={`${IMG}/stock-path-conversion.png`}
                    alt="Stock path conversion"
                    className="lg:max-w-[527px]"
                  />
                </div>
                <P small>
                  Among stock users, the Discovery path converts at just 0.55%, while the Stock Market
                  path converts at 9.34% — 20× higher. Step-level conversion on the Stock K-line page
                  is also nearly 2× better. The Stock Market path is clearly the primary trading
                  conversion route. Worth exploring: embedding [Stock Opportunities] within the stock
                  market section to lower the cost of stock discovery for users.
                </P>
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>User Experience Journey Analysis</SubTitle>
                <WideImg src={`${IMG}/ux-journey-overview.png`} alt="UX journey overview" />

                <div className="w-full overflow-x-auto rounded-lg">
                  <table className="w-full min-w-[900px] border-collapse text-left text-[14px] text-paper-dim">
                    <thead>
                      <tr className="bg-surface-2">
                        <th className="w-[29%] border border-line px-4 py-3" />
                        <th className="w-[32%] border border-line px-4 py-3 text-[13px] font-semibold text-paper-ink">
                          Issues
                        </th>
                        <th className="w-[39%] border border-line px-4 py-3 text-[13px] font-semibold text-paper-ink">
                          Optimization Solutions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-line align-top">
                          <WideImg
                            src={`${IMG}/issue-market-highlights.png`}
                            alt="Issue: market highlights"
                            className="rounded-none"
                          />
                        </td>
                        <td className="border border-line px-4 py-3 align-top text-[14px] leading-[1.65] text-paper-dim">
                          <p className="mb-0 leading-[1.65]">
                            1. [Market Highlights] doesn&apos;t plant an investment-opportunity
                            mindset — users scroll past without thinking &quot;I should trade
                            this&quot;;
                          </p>
                          <p className="mb-0 leading-[1.65]">
                            2. The first screen buries the [Stocks] module; the trading entry point
                            isn&apos;t prominent enough to catch attention;
                          </p>
                          <p className="leading-[1.65]">
                            3. Information density on the first screen is high — duplicate tab labels
                            (top Tab + chip both say &quot;Stocks&quot;) add cognitive load and make it
                            hard to find things quickly
                          </p>
                        </td>
                        <td className="border border-line px-4 py-3 align-top text-[14px] leading-[1.65] text-paper-dim">
                          <p className="mb-2 leading-[1.65]">
                            Direction 1: Restyle [Market Highlights] and rethink its interaction to
                            reduce drag on above-the-fold effectiveness; reference the stock market
                            banner for inspiration
                          </p>
                          <WideImg
                            src={`${IMG}/solution-banner-ref.png`}
                            alt="Solution: market highlights banner reference"
                            className="mb-2 rounded-none"
                          />
                          <p className="mb-0 leading-[1.65]">
                            Direction 2: Inject clear investment signals into Market Highlights —
                            labels like &quot;Rebound Play&quot; or &quot;Oversold Bounce&quot; — and
                            tag the asset class. Add emotional hooks.
                          </p>
                          <p className="mb-0 leading-[1.65]">
                            1. The chip has low visual pull (low clicks) and eats into screen real
                            estate — consider removing it. The focus should be helping users spot
                            opportunities, not showing which modules exist;
                          </p>
                          <p className="mb-0 leading-[1.65]">
                            2. Rework above-the-fold layout to boost content exposure value;
                          </p>
                          <p className="mb-2 leading-[1.65]">
                            3. Move the Stocks module higher on the first screen so its placement
                            matches its high click-through rate;
                          </p>
                          <WideImg
                            src={`${IMG}/solution-investment-signals.png`}
                            alt="Solution: investment signal labels"
                            className="rounded-none"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-line align-top">
                          <WideImg
                            src={`${IMG}/issue-stock-conversion.png`}
                            alt="Issue: stock trading conversion"
                            className="rounded-none"
                          />
                        </td>
                        <td className="border border-line px-4 py-3 align-top text-[14px] leading-[1.65] text-paper-dim">
                          <p className="mb-0 leading-[1.65]">Stock Trading Conversion Breakdown</p>
                          <p className="mb-0 leading-[1.65]">
                            1. The stock trading entry point isn&apos;t prominent enough;
                          </p>
                          <p className="leading-[1.65]">
                            2. There&apos;s a mindset gap — users go from spotting stock opportunities
                            in Market Discovery to the K-line page, but find nothing that addresses
                            their need to understand those opportunities. The K-line page just shows
                            indicators.
                          </p>
                        </td>
                        <td className="border border-line px-4 py-3 align-top text-[14px] leading-[1.65] text-paper-dim">
                          <p className="mb-2 leading-[1.65]">
                            1. For stocks with high-confidence signals (e.g. &quot;Momentum
                            Building&quot; or &quot;Earnings Pressure&quot; tags), use stronger
                            action-oriented copy instead of just presenting the news;
                          </p>
                          <div className="mb-2 flex flex-wrap gap-2">
                            <WideImg
                              src={`${IMG}/solution-action-copy-a.png`}
                              alt="Solution: action copy example a"
                              className="max-w-[175px] rounded-none"
                            />
                            <WideImg
                              src={`${IMG}/solution-action-copy-b.png`}
                              alt="Solution: action copy example b"
                              className="max-w-[161px] rounded-none"
                            />
                          </div>
                          <WideImg
                            src={`${IMG}/solution-action-copy-c.png`}
                            alt="Solution: action copy example c"
                            className="max-w-[342px] rounded-none"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-line align-top">
                          <WideImg
                            src={`${IMG}/issue-weak-signals.png`}
                            alt="Issue: weak trading signals"
                            className="rounded-none"
                          />
                        </td>
                        <td className="border border-line px-4 py-3 align-top text-[14px] leading-[1.65] text-paper-dim">
                          <p className="mb-0 leading-[1.65]">Weak Trading Signals</p>
                          <p className="mb-0 leading-[1.65]">
                            1. The storytelling across structure and content falls flat — it
                            doesn&apos;t build trading conviction. Users come away without investment
                            confidence. The [Overall Trend] module helps with decisions, but the
                            technical analysis beneath it has a steep learning curve and lacks clear
                            buy/sell signals;
                          </p>
                          <p className="leading-[1.65]">
                            2. The trading funnel breaks — there&apos;s no [Trade] entry point. When
                            users are ready to act, they have to go all the way back to the Market
                            Discovery page and click again.
                          </p>
                        </td>
                        <td className="border border-line align-top">
                          <WideImg
                            src={`${IMG}/solution-weak-signals.png`}
                            alt="Solution: weak trading signals optimization"
                            className="max-w-[361px] rounded-none"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Solution Exploration">
            <div className="flex flex-col gap-8 pt-2">
              <div className="flex flex-col gap-4">
                <SubTitle>Market Discovery</SubTitle>
                <WideImg src={`${IMG}/solution-market-discovery-1.png`} alt="Market discovery solution 1" />
                <WideImg src={`${IMG}/solution-market-discovery-2.png`} alt="Market discovery solution 2" />
                <div className="flex flex-col gap-3.5 lg:flex-row">
                  <WideImg
                    src={`${IMG}/solution-market-discovery-3.png`}
                    alt="Market discovery solution 3"
                    className="lg:max-w-[529px]"
                  />
                  <WideImg
                    src={`${IMG}/solution-market-discovery-4.png`}
                    alt="Market discovery solution 4"
                    className="lg:max-w-[529px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>K-Line Page</SubTitle>
                <WideImg src={`${IMG}/solution-kline.png`} alt="K-line page solution" />
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>Opportunity Analysis</SubTitle>
                <WideImg src={`${IMG}/solution-opportunity.png`} alt="Opportunity analysis solution" />
              </div>
            </div>
          </Section>
        </article>
      </div>
    </div>
  )
}
