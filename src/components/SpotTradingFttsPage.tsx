import BackToHome from './BackToHome'
import {
  BodyStack,
  CaseIntro,
  IntroHeading,
  IntroImpactItem,
  IntroMetrics,
  IntroRoleTags,
  NumberedItem,
  P,
  Section,
  SubTitle,
  WideImg,
} from './project/ProjectShared'

const IMG = '/media/spot-trading-ftts'

const ROLE_TAGS = ['Product Research', 'UX Research', 'Data Driven', 'UX / UI'] as const

const EXECUTION_PLAN = [
  {
    scenario: 'On-chain Deposit FTTS',
    optimization: (
      <>
        <p>1) Allow users to navigate to the billing page via deposit notification;</p>
        <p>
          2) Add popular spot trading pairs on the billing page, directing users to the spot order
          page to reduce conversion path;
        </p>
      </>
    ),
    eta: 'Nov',
  },
  {
    scenario: 'Card Purchase FTTS',
    optimization: <p>1) Add a trading entry on the success page;</p>,
    eta: 'Under product review (low priority)',
  },
  {
    scenario: 'P2P Deposit FTTS',
    optimization: (
      <>
        <p>1) Provide a fund transfer entry;</p>
        <p>2) Add a spot trading entry after transaction completion;</p>
      </>
    ),
    eta: 'Under product review (low priority)',
  },
  {
    scenario: 'Fund Transfer FTTS',
    optimization: <p>1) Add a trading entry on the success page;</p>,
    eta: 'Nov',
  },
  {
    scenario: 'Event Reward FTTS (Launchpool/PoolX)',
    optimization: (
      <>
        <p>
          1) Add asset details entry for reward tokens in the lock-up section, allowing users to
          jump directly to spot trading for that token;
        </p>
        <p>
          2) Add asset details entry for reward tokens on the PoolX transaction details page,
          allowing users to jump directly to spot trading;
        </p>
      </>
    ),
    eta: 'Nov',
  },
]

const th =
  'border border-line bg-surface-2 px-4 py-3 text-left text-[13px] font-semibold text-paper-ink'
const td = 'border border-line px-4 py-3 align-top text-[14px] leading-[1.65] text-paper-dim'

export default function SpotTradingFttsPage() {
  return (
    <div className="min-h-screen bg-bg py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <BackToHome />

        <article className="flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="px-4 pb-4 text-[36px] font-bold leading-[1.4] text-paper-ink sm:px-0">
            How to Improve First-Time Trade Spot (FTTS) Conversion
          </h1>

          <CaseIntro>
            <div className="flex flex-col gap-2">
              <IntroHeading>My role</IntroHeading>
              <IntroRoleTags tags={[...ROLE_TAGS]} />
            </div>

            <div className="flex flex-col gap-6">
              <IntroHeading>Impact</IntroHeading>
              <div className="flex flex-col gap-6">
                <IntroImpactItem title="Analyzed FTTS volume trends and growth drivers">
                  Reviewed first-time spot trade volume trends to identify what was driving growth and
                  where users were dropping off in the conversion funnel.
                </IntroImpactItem>
                <IntroImpactItem title="Mapped three core conversion scenarios">
                  Mapped user paths across three core FTTS scenarios to isolate friction before
                  recommending targeted experience changes.
                </IntroImpactItem>
                <IntroImpactItem title="Designed a prioritized execution plan">
                  Benchmarked competitors and translated findings into a sequenced execution plan with
                  clear design and product priorities across deposit, transfer, and reward flows.
                </IntroImpactItem>
              </div>
            </div>

            <IntroMetrics
              metrics={[
                { value: '+7.2%', label: 'Spot trading UV increase' },
                { value: '+3.8%', label: 'FTTS conversion rate increase' },
              ]}
            />
          </CaseIntro>

          <Section title="Objective">
            <P>
              The conversion of first-time spot trades is the core business objective at this stage.
              Through analysis of key scenarios and user paths, we aim to optimize user experience,
              reduce friction points in the conversion funnel, and ultimately boost conversion rates.
            </P>
          </Section>

          <Section title="Factors Affecting First-Time Spot Trades">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="flex w-full max-w-[259px] flex-col gap-2">
                <P small>Significant increase in FTTS volume on Aug 26</P>
                <WideImg src={`${IMG}/ftts-spike.png`} alt="FTTS volume spike" />
              </div>
              <div className="min-w-0 flex-1 flex-col gap-2">
                <P small>P2P volume surged on Aug 26</P>
                <WideImg src={`${IMG}/p2p-surge.png`} alt="P2P volume surge" />
              </div>
            </div>
            <P>
              From a token perspective, the new coin Dogs drove overall FTTS conversion on the 26th
            </P>
            <WideImg src={`${IMG}/token-chart.png`} alt="Token FTTS chart" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <WideImg src={`${IMG}/chart-a.png`} alt="FTTS chart A" />
              <WideImg src={`${IMG}/chart-b.png`} alt="FTTS chart B" />
            </div>
          </Section>

          <Section title="Factors Affecting First-Time Spot Trades">
            <P>
              When new token listings, launchpad events, and off-platform promotional campaigns
              occur, our first-time spot trade volume sees significant growth. Additionally, a few
              days after these events, FTTS conversion is further boosted (selling reward tokens).
            </P>
          </Section>

          <Section title="Key FTTS Conversion Scenarios">
            <BodyStack>
              <NumberedItem n={1}>
                <P>
                  {`Post-deposit to spot trade (On-chain deposit > P2P with fund transfer > Card purchase);`}
                </P>
              </NumberedItem>
              <NumberedItem n={2}>
                <P>Event reward assets to spot trade (LaunchPool - PoolX);</P>
              </NumberedItem>
              <NumberedItem n={3}>
                <P>
                  Off-platform acquisition to spot trade (involves campaign planning, not
                  design-quantifiable);
                </P>
              </NumberedItem>
            </BodyStack>
          </Section>

          <Section title="Execution Plan">
            <p className="text-[15px] text-[#2666e5] underline">Design Solution 👉</p>
            <div className="w-full overflow-x-auto rounded-lg">
              <table className="w-full min-w-[930px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className={`${th} w-[160px]`}>Scenario</th>
                    <th className={`${th} w-[100px] text-center`}>Quantity</th>
                    <th className={`${th} min-w-[460px]`}>Optimization</th>
                    <th className={`${th} w-[210px]`}>Launch ETA</th>
                  </tr>
                </thead>
                <tbody>
                  {EXECUTION_PLAN.map((row, index) => (
                    <tr key={row.scenario}>
                      <td className={td}>{row.scenario}</td>
                      {index === 0 ? (
                        <td
                          rowSpan={EXECUTION_PLAN.length}
                          className={`${td} text-center align-middle font-bold text-paper-ink`}
                        >
                          8
                        </td>
                      ) : null}
                      <td className={td}>{row.optimization}</td>
                      <td className={td}>{row.eta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="FTTS Conversion Nodes in Scenarios">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <SubTitle>Post-Deposit to Spot Trade</SubTitle>
                <P small>P2P Deposit --&gt; Fund Transfer --&gt; Trade New Coin --&gt; Sell New Coin</P>
                <P small>Card Purchase --&gt; Trade New Coin --&gt; Sell New Coin</P>
                <P small>Crypto Deposit --&gt; Trade New Coin --&gt; Sell New Coin</P>
                <P>Users primarily deposit via P2P and card channels</P>
                <WideImg
                  src={`${IMG}/deposit-pie.png`}
                  alt="Deposit channel distribution"
                  className="max-w-[531px]"
                />

                <div className="w-full overflow-x-auto rounded-lg">
                  <table className="w-full min-w-[1000px] border-collapse text-left">
                    <thead>
                      <tr>
                        <th className={`${th} w-20`}>Scenario</th>
                        <th className={`${th} w-80`}>Pain Points &amp; Optimization</th>
                        <th className={`${th} w-48`}>Bitget</th>
                        <th className={`${th} w-48`}>OKX</th>
                        <th className={`${th} w-48`}>Binance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={td}>P2P Deposit</td>
                        <td className={td}>
                          <p className="mb-1 text-[13px] font-medium text-paper-ink">Pain point:</p>
                          <p className="mb-2 text-[13px]">
                            After completing deposit, users need to manually navigate to spot trading to
                            buy new coins (after fund transfer), easily losing them;
                          </p>
                          <p className="mb-1">Optimization:</p>
                          <p>
                            1) Provide fund transfer entry; 2) Add spot trading entry after transaction
                            completion;
                          </p>
                          <div className="mt-3 grid grid-cols-2 gap-1.5">
                            <WideImg src={`${IMG}/p2p-design-1.png`} alt="P2P design 1" />
                            <WideImg src={`${IMG}/p2p-design-2.png`} alt="P2P design 2" />
                          </div>
                        </td>
                        <td className={td}>
                          <WideImg src={`${IMG}/p2p-bitget.png`} alt="P2P Bitget" />
                        </td>
                        <td className={td}>
                          <div className="flex flex-col gap-4">
                            <WideImg src={`${IMG}/p2p-okx-1.png`} alt="P2P OKX 1" />
                            <WideImg src={`${IMG}/p2p-okx-2.png`} alt="P2P OKX 2" />
                          </div>
                        </td>
                        <td className={td}>
                          <WideImg src={`${IMG}/p2p-binance.png`} alt="P2P Binance" />
                        </td>
                      </tr>
                      <tr>
                        <td className={td}>Fund Transfer</td>
                        <td className={td}>
                          <p>1. Add success page and trading entry;</p>
                          <p>Transfer to spot account: Spot trading</p>
                          <p>Transfer to futures account: Futures trading</p>
                          <p>Transfer to funding account: P2P trading</p>
                          <div className="mt-3">
                            <WideImg src={`${IMG}/fund-transfer-design.png`} alt="Fund transfer design" />
                          </div>
                        </td>
                        <td className={td}>
                          <WideImg src={`${IMG}/fund-transfer-bitget.png`} alt="Fund transfer Bitget" />
                        </td>
                        <td className={td}>No guidance</td>
                        <td className={td}>
                          <WideImg
                            src={`${IMG}/fund-transfer-binance.png`}
                            alt="Fund transfer Binance"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className={td}>Card Purchase</td>
                        <td className={td}>
                          <p>1. Add a trading entry on the success page;</p>
                          <div className="mt-3">
                            <WideImg src={`${IMG}/card-pain.png`} alt="Card purchase design" />
                          </div>
                        </td>
                        <td className={td}>
                          <WideImg src={`${IMG}/card-bitget.png`} alt="Card Bitget" />
                        </td>
                        <td className={td}>No case available</td>
                        <td className={td}>
                          <WideImg src={`${IMG}/card-binance.png`} alt="Card Binance" />
                        </td>
                      </tr>
                      <tr>
                        <td className={td}>On-chain Deposit</td>
                        <td className={td}>
                          <p className="mb-2">Deposit notification --&gt; View assets</p>
                          <p className="mb-1 text-[13px] font-medium text-paper-ink">Pain point:</p>
                          <p className="mb-2 text-[13px]">
                            1) Users need to manually navigate to the assets page to check deposit
                            status; 2) On the billing page, users need to manually navigate to the spot
                            market to trade;
                          </p>
                          <p className="mb-1 text-[13px] font-medium text-paper-ink">Optimization:</p>
                          <p className="text-[13px]">
                            1) Allow users to navigate to billing page via deposit notification; 2) Add
                            popular spot trading pairs on billing page, directing users to spot order page
                            to reduce conversion path;
                          </p>
                          <div className="mt-3">
                            <WideImg
                              src={`${IMG}/deposit-binance-design.png`}
                              alt="Deposit design"
                            />
                          </div>
                        </td>
                        <td className={td}>
                          <div className="grid grid-cols-2 gap-1.5">
                            <WideImg src={`${IMG}/deposit-bitget-1.png`} alt="Deposit Bitget 1" />
                            <WideImg src={`${IMG}/deposit-bitget-2.png`} alt="Deposit Bitget 2" />
                          </div>
                        </td>
                        <td className={td}>
                          <div className="grid grid-cols-2 gap-4">
                            <WideImg src={`${IMG}/deposit-okx-1.png`} alt="Deposit OKX 1" />
                            <WideImg src={`${IMG}/deposit-okx-2.png`} alt="Deposit OKX 2" />
                          </div>
                        </td>
                        <td className={td}>
                          <WideImg
                            src={`${IMG}/deposit-binance-design.png`}
                            alt="Deposit Binance"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>Event Reward Assets to Spot Trade</SubTitle>
                <P small>Deposit --&gt; PoolX Staking --&gt; View Earn Assets --&gt; Sell New Coin</P>
                <div className="w-full overflow-x-auto rounded-lg">
                  <table className="w-full min-w-[1000px] border-collapse text-left">
                    <thead>
                      <tr>
                        <th className={`${th} w-20`}>Scenario</th>
                        <th className={`${th} w-80`}>Pain Points &amp; Optimization</th>
                        <th className={`${th} w-48`}>Bitget</th>
                        <th className={`${th} w-48`}>OKX</th>
                        <th className={`${th} w-48`}>Binance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={td}>PoolX Staking</td>
                        <td className={td}>
                          <div className="flex gap-1 text-[12px] leading-[1.5]">
                            <span className="shrink-0 font-medium text-paper-ink">Pain point: 1)</span>
                            <span>
                              After successful staking, users cannot directly trade reward tokens from
                              the lock-up section. They need to manually navigate to the spot
                              wallet&apos;s token details to access spot trading;
                            </span>
                          </div>
                          <div className="mt-2 flex gap-1 text-[12px] leading-[1.5]">
                            <span className="shrink-0 font-medium text-paper-ink">2)</span>
                            <span>
                              When viewing the earn wallet&apos;s ongoing PoolX transaction details,
                              users cannot see reward token info and need to manually navigate to spot
                              wallet to view and trade;
                            </span>
                          </div>
                          <div className="mt-2 flex gap-1 text-[12px] leading-[1.5]">
                            <span className="shrink-0 font-medium text-paper-ink">Optimization:</span>
                            <span>
                              1) Add reward token asset details entry in the lock-up section, allowing
                              users to jump directly to spot trading; 2) Add reward token asset details
                              entry on PoolX transaction details page, allowing users to jump directly
                              to spot trading;
                            </span>
                          </div>
                        </td>
                        <td className={td}>
                          <div className="grid grid-cols-2 gap-0.5">
                            <WideImg src={`${IMG}/poolx-bitget-1.png`} alt="PoolX Bitget 1" />
                            <WideImg src={`${IMG}/poolx-bitget-2.png`} alt="PoolX Bitget 2" />
                          </div>
                        </td>
                        <td className={td}>No guidance</td>
                        <td className={td}>No guidance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>UI Design</SubTitle>
                <WideImg
                  src={`${IMG}/ui-design-1.png`}
                  alt="UI design flow 1"
                  className="max-w-[493px]"
                />
                <WideImg src={`${IMG}/ui-design-2.png`} alt="UI design flow 2" />
              </div>
            </div>
          </Section>
        </article>
      </div>
    </div>
  )
}
