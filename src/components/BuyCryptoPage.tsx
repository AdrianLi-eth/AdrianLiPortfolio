import type { ReactNode } from 'react'

import {
  BeforeAfterCompare,
  CaseIntro,
  FinalUiGallery,
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

const IMG = '/media/buy-crypto'

const ROLE_TAGS = ['UX Researcher', 'UI / UX Designer'] as const

const UI_PREVIEW_ROWS = [
  {
    before: {
      src: `${IMG}/old-enter-amount.png`,
      alt: 'Before: enter amount screen',
    },
    after: {
      src: `${IMG}/new-enter-amount.png`,
      alt: 'After: enter amount screen',
    },
  },
  {
    before: {
      src: `${IMG}/old-payment.png`,
      alt: 'Before: select payment method screen',
    },
    after: {
      src: `${IMG}/new-payment.png`,
      alt: 'After: pay with bottom sheet',
    },
  },
] as const

function Bullet({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-1.5 text-[12px] leading-[1.6] text-paper-dim [font-family:'Noto_Sans_SC',sans-serif]">
      <span>•</span>
      <span>{children}</span>
    </div>
  )
}

const PROCESS_STEPS = [
  'Define requirement',
  'Design research',
  'Concept design & testing',
  'High-fidelity design',
  'Design QA',
  'Design validation',
]

const OLD_COLORS = ['#e8c740', '#2e384a', '#8c949e', '#babfc7', '#d9d6de', '#ebebed']
const NEW_COLORS = ['#2e384a', '#8c949e', '#ebebed']

function CompareTag({ label, variant }: { label: string; variant: 'old' | 'new' }) {
  return (
    <span
      className={`inline-flex rounded px-2.5 py-1 text-[13px] font-semibold text-white ${
        variant === 'old' ? 'bg-[#999]' : 'bg-[#f29e12]'
      }`}
    >
      {label}
    </span>
  )
}

function TypographyOld() {
  return (
    <div className="flex flex-col items-center gap-1 text-paper-dim">
      <p className="text-[29px] font-bold text-paper-ink">Head 48px</p>
      <p className="text-[11px]">Main/Subtitle 18px</p>
      <p className="text-[10px]">Sub/Subtitle 16px</p>
      <p className="text-[9px]">Sub title14px</p>
      <p className="text-[7px]">Body 12px</p>
    </div>
  )
}

function TypographyNew() {
  return (
    <div className="flex flex-col items-center gap-1 text-paper-dim">
      <p className="text-[11px]">Sub/Subtitle 16px</p>
      <p className="text-[10px]">Sub title14px</p>
      <p className="text-[9px]">Body 12px</p>
    </div>
  )
}

function ColorSwatches({ colors }: { colors: string[] }) {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <div key={color} className="size-[34px] rounded" style={{ backgroundColor: color }} />
      ))}
    </div>
  )
}

function CompetitorText({
  okxGood,
  binanceGood,
  binanceBad,
  insights,
}: {
  okxGood: string[]
  binanceGood: string[]
  binanceBad: string[]
  insights: string[]
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2.5">
      <p className="text-[14px] font-bold text-paper-ink">OKX</p>
      <p className="text-[12px] font-semibold text-paper-ink">👍 Good</p>
      {okxGood.map((item) => (
        <Bullet key={item}>{item}</Bullet>
      ))}
      <p className="text-[14px] font-bold text-paper-ink">Binance</p>
      <p className="text-[12px] font-semibold text-paper-ink">👍 Good</p>
      {binanceGood.map((item) => (
        <Bullet key={item}>{item}</Bullet>
      ))}
      <p className="text-[12px] font-semibold text-paper-ink">👎 Bad</p>
      {binanceBad.map((item) => (
        <Bullet key={item}>{item}</Bullet>
      ))}
      <p className="text-[14px] font-bold text-paper-ink">Insights</p>
      {insights.map((item) => (
        <Bullet key={item}>{item}</Bullet>
      ))}
    </div>
  )
}

export default function BuyCryptoPage() {
  return (
    <div className="min-h-screen bg-bg pb-28 sm:pb-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <article className="flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="px-4 pb-4 text-[36px] font-bold leading-[1.4] text-paper-ink sm:px-0">
            Binance - Buy Crypto 2.0
          </h1>

          <CaseIntro>
            <div className="flex flex-col gap-6">
              <IntroHeading>Overview</IntroHeading>
              <div className="flex flex-col gap-6">
                <IntroImpactItem title="Goal">
                  Resolve issues where users don&apos;t know how to place orders or are hesitant to
                  do so, thereby improving order conversion rate.
                </IntroImpactItem>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[15px] font-bold leading-[1.6] text-paper-ink [font-family:'Noto_Sans_SC',sans-serif]">
                    My role
                  </p>
                  <IntroRoleTags tags={[...ROLE_TAGS]} />
                </div>
                <div className="flex flex-col gap-1.5 [font-family:'Noto_Sans_SC',sans-serif]">
                  <p className="text-[15px] font-bold leading-[1.6] text-paper-ink">Challenges</p>
                  <div className="flex flex-col gap-1">
                    <NumberedItem n={1}>
                      <p className="text-[15px] font-normal leading-[1.75] text-paper-dim">
                        Project scope. 20+ payment channels, involves 350+ pages.
                      </p>
                    </NumberedItem>
                    <NumberedItem n={2}>
                      <p className="text-[15px] font-normal leading-[1.75] text-paper-dim">
                        Cross team collaboration (Product, Developer, DS team, UIKit developer).
                      </p>
                    </NumberedItem>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <p className="text-[15px] font-bold leading-[1.6] text-paper-ink [font-family:'Noto_Sans_SC',sans-serif]">
                    Impact
                  </p>
                  <IntroMetrics
                    metrics={[
                      {
                        value: '+48.34%',
                        label: 'Step1 -> 3 conversion rate increases',
                      },
                      {
                        value: '+3.8%',
                        label: 'User CSAT increases',
                      },
                      {
                        value: '−0.6%',
                        label: 'Product design defect rate reduction',
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </CaseIntro>

          <Section className="min-w-0 gap-5">
            <div className="flex min-w-0 flex-col gap-5">
              <h2 className="text-[32px] font-bold leading-[1.3] text-paper-ink">UI</h2>
              <p className="text-[12px] font-normal leading-[1.6] text-paper-dim">
                There are more final delivered UI pages design at the end, here only display major
                changes UI.
              </p>
              <BeforeAfterCompare rows={[...UI_PREVIEW_ROWS]} />
            </div>
          </Section>

          <Section title="Design Process">
            <div className="flex flex-wrap items-center gap-2">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="flex h-20 w-[140px] items-center justify-center rounded-lg border border-line bg-surface-2 p-4 text-center text-[12px] font-semibold text-paper-ink">
                    {step}
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <span className="text-[18px] text-paper-dim">→</span>
                  )}
                </div>
              ))}
            </div>
            <P medium small>
              Define requirement
            </P>
            <P small>
              We collect user feedbacks from social media (TG/Twitter/App store/Google store) and CS
              ticket pool to know what are the user issues and pain point using current product.
              User feedbacks mainly talked about trading fees, unsuccessful transactions. I
              catogrized user feedback into different categories
            </P>
            <div className="flex flex-col gap-1">
              <Bullet>Complain(Fees, transaction time, KYC etc.)</Bullet>
              <Bullet>Product experience</Bullet>
              <Bullet>New features</Bullet>
              <Bullet>Trading issues</Bullet>
            </div>
            <P small>
              I toke these feedbacks into discussion with product and business team to prioritise
              user issue to determine what are we going to solve in next release based on the
              value and impacts. Ultimately, we decided this redesign would primarily focus on
              product experience. Based on user feedback, we centered on two issues: not knowing
              how to place orders and being hesitant to place orders.
            </P>
            <WideImg src={`${IMG}/user-feedback.png`} alt="User feedback categories" />
          </Section>

          <Section>
            <SubTitle>Design research</SubTitle>
            <P small>
              Conducted competitor research to analyze OKX, Bybit, Coinbase and Karken buy crypto
              UIUX, find out what they did good and bad. And drawn a user journey map to identify
              user frictions during flow and search for product opportunities and improvements.
              Discuss on the find out and vote for the top3 features and improvements to take to
              the concept design.
            </P>
            <P small>The three improvements are:</P>
            <NumberedItem n={1}>
              <P small>Remove low interactive features from page</P>
            </NumberedItem>
            <NumberedItem n={2}>
              <P small>Reduce UI hierarchy of the page</P>
            </NumberedItem>
            <NumberedItem n={3}>
              <P small>Combine enter amount step and choose payment step into one</P>
            </NumberedItem>
          </Section>

          <Section>
            <SubTitle>Concept design and testing</SubTitle>
            <P small>
              Based on the research we designed few proposals, we run the early stage design testing
              internally for other designers and PMs, collect their feedbacks and polish the design.
            </P>
            <SubTitle>Design documents</SubTitle>
            <P small>
              Delivered high fidelity design(design delivery standards), UX document to ensure PM and
              devs understand the design.
            </P>
            <SubTitle>Design quality assure</SubTitle>
            <P small>
              We test the pre-launch product in every UX scenarios and UI, close the gap between
              product and design.
            </P>
            <SubTitle>Design validation</SubTitle>
            <P small>
              We send out user survey, look at the product data(order SR, step CR and CSAT) after
              launch, keep tracking on user feedbacks and iterate the product.
            </P>
          </Section>

          <Section title="Project Challenges">
            <SubTitle>Challenges</SubTitle>
            <NumberedItem n={1}>
              <P small>Project scope. 20+ fiat buy crypto channels, involves 350+ pages.</P>
            </NumberedItem>
            <NumberedItem n={2}>
              <P small>Cross team collaboration (Product, DS team, UIKit developer).</P>
            </NumberedItem>
            <SubTitle>What I did</SubTitle>
            <NumberedItem n={1}>
              <P small>Version control</P>
            </NumberedItem>
            <div className="pl-6">
              <Bullet>PhaseI - MVP, core flow and pages</Bullet>
              <Bullet>PhaseII - Channel update</Bullet>
              <Bullet>PhaseIII - Others</Bullet>
            </div>
            <P small>
              Define MVP scope with product team, then work with DS and UIKit developer on the
              required UI components. We decided take enter amount, choose payment, confirm orders
              and result page as our first launch, as it has the most impact to current product
              without taking too much resources from each team.
            </P>
            <NumberedItem n={2}>
              <P small>Project work procedure</P>
            </NumberedItem>
            <P small>
              Arranged a kickoff meeting, give introduction to the project and support we need and
              confirm the POC of each team, set project timeline and the delivery. Schedule a
              regular catch up meeting for teams, update progress and status, track on potential
              risks.
            </P>
          </Section>

          <Section title="Research Details">
            <SubTitle>Internally, we looked at</SubTitle>
            <NumberedItem n={1}>
              <P small>
                Product user data. That includes order successful rate, conversion rate of each step,
                time spend on each page etc.
              </P>
            </NumberedItem>
            <NumberedItem n={2}>
              <P small>User journey map to find user pain point and potential improvement.</P>
            </NumberedItem>
            <NumberedItem n={3}>
              <P small>How user interact with product on each step.</P>
            </NumberedItem>
            <SubTitle>Externally, we looked at</SubTitle>
            <NumberedItem n={1}>
              <P small>
                Top5 exchange buy crypto product UIUX in the industry, typically OKX. Generate
                product UIUX report and share with product team to determine product improvement plan.
              </P>
            </NumberedItem>
            <NumberedItem n={2}>
              <P small>
                User feedback. We analysis user feedback from user feedback system which collects user
                comments, suggestions from internal user survey and social media(Twitter, Telegram,
                App store, GooglePlay etc.)
              </P>
            </NumberedItem>
          </Section>

          <Section title="Competitor Analysis(basis)" className="gap-6">
            <div className="flex flex-col gap-6 lg:flex-row">
              <WideImg
                src={`${IMG}/competitor-row1-left.png`}
                alt="OKX competitor analysis"
                className="min-w-0 flex-1"
              />
              <CompetitorText
                okxGood={[
                  'OKX provides clean visual and simple feature UI.',
                  'One CTA and big number makes user concentrate on the tasks,',
                  'high colour contrast makes interactive item standouts.',
                ]}
                binanceGood={['More configurable settings, fits more types of user']}
                binanceBad={[
                  "Many CTAs, don't know the core task",
                  'Many font size and types, heavy UI hierarchy, poor usability',
                ]}
                insights={[
                  'Remove low value and interactive features',
                  'Reduce number of CTA',
                  'Use less font styles',
                ]}
              />
              <WideImg
                src={`${IMG}/competitor-row1-right.png`}
                alt="Binance competitor analysis"
                className="min-w-0 flex-1"
              />
            </div>
            <P small>
              Although Binance provides the quotation which may help user to make decision. OKX has
              simpler reading path, from top to bottom. Binance is more left-right oriented, a bit
              hard in terms of readability.
            </P>
            <P small>
              Insights: Simplify the eye movement and make core information more visible.
            </P>
            <div className="flex flex-col gap-6 lg:flex-row">
              <WideImg
                src={`${IMG}/competitor-row2-left.png`}
                alt="OKX payment comparison"
                className="min-w-0 flex-1"
              />
              <CompetitorText
                okxGood={[
                  'Linear reading path, good page readability',
                  'Clear call to action experience',
                ]}
                binanceGood={[
                  'Quotation for payment method, may help user make decision',
                ]}
                binanceBad={[
                  'Would be mess if there were more options',
                  'Not so good usability, high cost of understanding',
                  'Many font size and types, heavy UI hierarchy',
                ]}
                insights={[
                  'Categories payment into types',
                  'Remove low value and interactive features',
                  'Less page information and improve the payout design',
                  'Use less font styles',
                ]}
              />
              <WideImg
                src={`${IMG}/competitor-row2-right.png`}
                alt="Binance payment comparison"
                className="min-w-0 flex-1"
              />
            </div>
          </Section>

          <Section className="gap-6">
            <div className="flex flex-col gap-6 lg:flex-row">
              <WideImg
                src={`${IMG}/user-behaviour-left.png`}
                alt="User behaviour heatmap"
                className="min-w-0 flex-1"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <SubTitle>User Behaviour</SubTitle>
                <P small>
                  Additionally we analyse the user behaviour of each page, take enter amount UI as
                  example
                </P>
                <P small>
                  We collected number of clicks of the page and calculated click rate out of it,
                  and generate a heat-map to visualize the user behaviour.
                </P>
                <P small>
                  Event we give quite visual guidance to &quot;One-time Purchase&quot;, the click
                  rate is low compare to others(&gt;15%), on the other hand, user more like to click
                  on &quot;Min&quot; purchase when they get on the page.
                </P>
                <P small medium>Potential improvement:</P>
                <P small>
                  Simplify the page features based on user clicks, highlight the most used/core
                  feature let user focus on those content, hide or replace low clicks features and
                  decrease user time of making decision.
                </P>
                <P small>
                  Reduce page visual hierarchy, reduce font types and colours used in the page,
                  increase product efficiency.
                </P>
              </div>
              <WideImg
                src={`${IMG}/user-behaviour-right.png`}
                alt="User behaviour clicks"
                className="min-w-0 flex-1"
              />
            </div>
          </Section>

          <Section title="Design Upgrade Direction" className="gap-6">
            <P small>After analysing, we narrowed down to few key points:</P>
            <Bullet>Reduce page UI hierarchy, let user focus on core feature and content.</Bullet>
            <Bullet>Remove low relative features.</Bullet>
            <Bullet>Reduce placing order steps, increase product efficiency.</Bullet>

            {/* Compare row 1 - Enter amount */}
            <div className="flex flex-col gap-6 pt-6 lg:flex-row">
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <CompareTag label="Old" variant="old" />
                <WideImg src={`${IMG}/old-enter-amount.png`} alt="Old enter amount" />
                <TypographyOld />
                <ColorSwatches colors={OLD_COLORS} />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-4 pt-10">
                <div>
                  <p className="text-[14px] font-semibold text-paper-ink">UI</p>
                  <NumberedItem n={1}>
                    <P small>Reduce UI hierarchy by reducing colour, font types.</P>
                  </NumberedItem>
                  <NumberedItem n={2}>
                    <P small>Highlight the amount number to make visual focused.</P>
                  </NumberedItem>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-paper-ink">UX</p>
                  <NumberedItem n={1}>
                    <P small>Move the CTA to the position that is easier to reach.</P>
                  </NumberedItem>
                  <NumberedItem n={2}>
                    <P small>Reduce recurring entrance of same feature.</P>
                  </NumberedItem>
                  <NumberedItem n={3}>
                    <P small>Remove Max feature which has low usage rate.</P>
                  </NumberedItem>
                  <NumberedItem n={4}>
                    <P small>Combine buy/sell switch interaction to be more intuitive.</P>
                  </NumberedItem>
                  <NumberedItem n={5}>
                    <P small>Combine steps to increase order placing efficiency.</P>
                  </NumberedItem>
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <CompareTag label="New" variant="new" />
                <WideImg src={`${IMG}/new-enter-amount.png`} alt="New enter amount" />
                <TypographyNew />
                <ColorSwatches colors={NEW_COLORS} />
              </div>
            </div>

            {/* Compare row 2 - Payment */}
            <div className="flex flex-col gap-6 pt-12 lg:flex-row">
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <CompareTag label="Old" variant="old" />
                <WideImg src={`${IMG}/old-payment.png`} alt="Old payment" />
                <TypographyOld />
                <ColorSwatches colors={OLD_COLORS} />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-4 pt-10">
                <div>
                  <p className="text-[14px] font-semibold text-paper-ink">UI</p>
                  <NumberedItem n={1}>
                    <P small>Reduce visual noise, keep payment method list clean and scannable.</P>
                  </NumberedItem>
                  <NumberedItem n={2}>
                    <P small>Use clear iconography to speed up recognition.</P>
                  </NumberedItem>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-paper-ink">UX</p>
                  <NumberedItem n={1}>
                    <P small>Highlight recommended/default payment method for new users.</P>
                  </NumberedItem>
                  <NumberedItem n={2}>
                    <P small>Reduce steps required to switch payment method.</P>
                  </NumberedItem>
                  <NumberedItem n={3}>
                    <P small>Surface payment method limits and fees earlier in the flow.</P>
                  </NumberedItem>
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <CompareTag label="New" variant="new" />
                <WideImg src={`${IMG}/new-payment.png`} alt="New payment" />
                <TypographyNew />
                <ColorSwatches colors={NEW_COLORS} />
              </div>
            </div>
          </Section>

          <Section title="Simplified User Flow">
            <div className="flex flex-wrap items-center gap-4">
              {[
                { label: 'Enter amount' },
                { label: 'Select Payment Method', sub: '(New user)', dashed: true },
                { label: 'Confirm Order' },
                { label: 'Trading Complete' },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center gap-4">
                  <div
                    className={`flex h-[70px] w-40 flex-col items-center justify-center rounded-lg border border-line px-2 text-center text-[12px] leading-[1.6] text-paper-dim ${
                      step.dashed ? 'border-dashed' : ''
                    }`}
                  >
                    <p>{step.label}</p>
                    {step.sub && <p>{step.sub}</p>}
                  </div>
                  {i < arr.length - 1 && <span className="text-[18px] text-paper-dim">→</span>}
                </div>
              ))}
            </div>
          </Section>

          <Section title="Design Validation" className="gap-6">
            <P small>
              We conducted a user survey to see user&apos;s satisfaction of the new design and their
              feedbacks.
            </P>
            <div className="flex flex-col gap-6 sm:flex-row">
              <WideImg src={`${IMG}/survey-q1-left.png`} alt="Survey question 1" className="flex-1" />
              <WideImg src={`${IMG}/survey-q1-right.png`} alt="Survey results 1" className="flex-1" />
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
              <WideImg src={`${IMG}/survey-visual.png`} alt="Survey visual" className="flex-1" />
              <div className="w-full max-w-[300px] shrink-0">
                <P small>
                  The research shows more than 80% of user are prefer the new design, because the
                  page presented a better visuals and less interactions. And the number is bigger
                  it&apos;s more easy to use.
                </P>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
              <WideImg src={`${IMG}/survey-chart.png`} alt="Survey chart" className="flex-1" />
              <div className="flex w-full max-w-[300px] shrink-0 flex-col gap-2.5">
                <P small>
                  Some user indicate that the payment method put forward makes the product easy to
                  use.
                </P>
                <P small>
                  For user who prefer old version saying that they are get use to the old look and
                  feel, including min and max features.
                </P>
                <P small>
                  For user who doesn&apos;t have preference, saying that they want a feature of
                  switching between crypto and fiat currencies and more.
                </P>
              </div>
            </div>
          </Section>

          <Section>
            <P small>
              We also looked at user data from step CR and order SR rate, compare to the old design,
              the new design step1 to step3 CR increased by 48.34%. The user CSAT increased 3.8%,
              product defect rate drop by 0.6%.
            </P>
            <WideImg src={`${IMG}/data-metrics.png`} alt="Data metrics" />
          </Section>

          <Section className="!gap-0 !px-0">
            <FinalUiGallery basePath={IMG} />
          </Section>
        </article>
      </div>
    </div>
  )
}
