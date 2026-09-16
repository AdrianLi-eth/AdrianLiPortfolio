import type { ReactNode } from 'react'

import {
  BeforeAfterPhone,
  CaseIntro,
  FinalUiGallery,
  IntroHeading,
  IntroImpactItem,
  IntroMetrics,
  NumberedItem,
  P,
  Section,
  SubTitle,
  WideImg,
} from './project/ProjectShared'

const IMG = '/media/buy-crypto'

function Bullet({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-1.5 text-[12px] leading-[1.6] text-paper-dim [font-family:'Noto_Sans_SC',sans-serif]">
      <span>•</span>
      <span>{children}</span>
    </div>
  )
}

function BrandLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-paper-dim">
      {children}
    </span>
  )
}

function EnterAmountOptimized() {
  return (
    <div className="flex w-full min-w-0 flex-col gap-6 lg:flex-row lg:items-start">
      <BeforeAfterPhone label="Before" src="/media/Before.png" alt="Before: enter amount" />
      <div className="flex min-w-0 flex-1 flex-col gap-4 pt-6 [font-family:'Noto_Sans_SC',sans-serif]">
        <p className="text-[14px] font-bold text-paper-ink">Optimized</p>
        <div className="flex flex-col gap-1.5">
          <p className="text-[12px] font-semibold text-paper-ink">Simplify interface:</p>
          <Bullet>Reduce UI hierarchy by reducing colour, font types.</Bullet>
          <Bullet>Highlight the amount number to make visual focused.</Bullet>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-[12px] font-semibold text-paper-ink">UX optimization:</p>
          <Bullet>Move the CTA to the position that is easier to reach.</Bullet>
          <Bullet>Reduce recurring entrance of same feature.</Bullet>
          <Bullet>Remove Max feature which has low usage rate.</Bullet>
          <Bullet>Combine buy/sell switch interaction to be more intuitive.</Bullet>
          <Bullet>Combine steps to increase order placing efficiency.</Bullet>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-[12px] font-semibold text-paper-ink">Reduce UI hierarchy:</p>
          <Bullet>Font size 5 -&gt; 3</Bullet>
          <Bullet>Font color 6 -&gt; 3</Bullet>
        </div>
      </div>
      <BeforeAfterPhone label="After" src="/media/After.png" alt="After: enter amount" />
    </div>
  )
}

function ChoosePaymentOptimized() {
  return (
    <div className="flex w-full min-w-0 flex-col gap-6 lg:flex-row lg:items-start">
      <BeforeAfterPhone
        label="Before"
        src="/media/OldPayment.png"
        alt="Before: select payment method"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-4 pt-6 [font-family:'Noto_Sans_SC',sans-serif]">
        <p className="text-[14px] font-bold text-paper-ink">Optimized</p>
        <div className="flex flex-col gap-1.5">
          <p className="text-[12px] font-semibold text-paper-ink">UX:</p>
          <Bullet>Make Pay with optional for returning users to shorten the order flow.</Bullet>
          <Bullet>Limit to 3 options per payment type to reduce clutter and choice overload.</Bullet>
          <Bullet>Group options by payment type to help users decide faster.</Bullet>
          <Bullet>Remove low-priority information for a cleaner, more focused page.</Bullet>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-[12px] font-semibold text-paper-ink">UI:</p>
          <Bullet>Restyle selection items so one primary task stands out visually.</Bullet>
          <Bullet>Reduce font styles and colors to lower visual noise and hierarchy.</Bullet>
        </div>
      </div>
      <BeforeAfterPhone
        label="After"
        src="/media/NewPayment.png"
        alt="After: pay with bottom sheet"
      />
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
    <div className="flex min-w-0 flex-1 flex-col gap-10">
      <div className="flex flex-col gap-2">
        <img
          src="/media/OKX.png"
          alt="OKX"
          className="h-6 w-6 self-start object-contain"
        />
        <p className="text-[12px] font-semibold text-paper-ink">👍 Good</p>
        {okxGood.map((item) => (
          <Bullet key={item}>{item}</Bullet>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <img
          src="/media/BN.png"
          alt="Binance"
          className="h-6 w-6 self-start object-contain"
        />
        <p className="text-[12px] font-semibold text-paper-ink">👍 Good</p>
        {binanceGood.map((item) => (
          <Bullet key={item}>{item}</Bullet>
        ))}
        <p className="mt-1 text-[12px] font-semibold text-paper-ink">👎 Bad</p>
        {binanceBad.map((item) => (
          <Bullet key={item}>{item}</Bullet>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[14px] font-bold text-paper-ink">To be improve</p>
        {insights.map((item) => (
          <Bullet key={item}>{item}</Bullet>
        ))}
      </div>
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
                <IntroImpactItem title="My role">
                  UX Researcher · UI / UX Designer
                </IntroImpactItem>
                <IntroImpactItem title="Challenge">
                  • Project scope. 20+ payment channels, involves 350+ pages.
                  <br />
                  • Cross team collaboration (Product, Developer, DS team, UIKit developer).
                </IntroImpactItem>
                <IntroMetrics
                  className="mt-8"
                  metrics={[
                    {
                      value: '+48.34%',
                      label: 'Step1 convertion rate',
                    },
                    {
                      value: '+3.8%',
                      label: 'CAST',
                    },
                    {
                      value: '−0.6%',
                      label: 'UX defect rate',
                    },
                  ]}
                />
              </div>
            </div>
          </CaseIntro>

          <Section title="Define Requirement">
            <P medium small>1. Collect user feedbacks</P>
            <WideImg src={`${IMG}/user-feedback.png`} alt="User feedback categories" />
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
            <P medium small>2. Prioritise and categorise the user painpoint</P>
            <P small>
              I toke these feedbacks into discussion with product and business team to prioritise
              user issue to determine what are we going to solve in next release based on the
              value and impacts.
            </P>
            <P medium small>3. Determine optimise direction</P>
            <P small>
              Ultimately, we decided this redesign would primarily focus on product experience.
              Based on user feedback, we centred on two issues:
            </P>
            <div className="flex flex-col gap-1">
              <Bullet>User don&apos;t know how to place order.</Bullet>
              <Bullet>User don&apos;t know how to choose payment method.</Bullet>
            </div>
          </Section>

          <Section title="User Journey Map">
            <P small>
              Mapped the journey of first-time crypto buyers (already verified) on the existing
              product to identify friction and pain points when placing an order.
            </P>
            <WideImg
              src={`${IMG}/user-journey-map-en-3x.png`}
              alt="User Journey Map · Verified User Buy Crypto via Card Payment"
            />
            <P medium small>User friction and pain points mainly occur in:</P>
            <NumberedItem n={1}>
              <P small>
                Too many page layers and controls (Buy/Sell, Min/Max, limits, etc.) — users
                don&apos;t know how to place an order and hesitate.
              </P>
            </NumberedItem>
            <NumberedItem n={2}>
              <P small>Stacked page information makes users afraid to act and decide.</P>
            </NumberedItem>
            <NumberedItem n={3}>
              <P small>
                Payment method information overload — especially with many options, users
                don&apos;t know how to choose a payment method.
              </P>
            </NumberedItem>
          </Section>

          <Section title="Competitor Analysis" className="gap-6">
            <SubTitle>Enter amount</SubTitle>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <BrandLabel>OKX</BrandLabel>
                <WideImg
                  src={`${IMG}/competitor-row1-left.png`}
                  alt="OKX competitor analysis"
                />
              </div>
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
                  'Simplify interface',
                  'Hide advanced settings',
                  'Reduce visual hierarchy',
                ]}
              />
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <BrandLabel>Binance</BrandLabel>
                <WideImg
                  src={`${IMG}/competitor-row1-right.png`}
                  alt="Binance competitor analysis"
                />
              </div>
            </div>
            <EnterAmountOptimized />
            <div className="flex flex-col gap-6 pt-10">
              <SubTitle>Choose payment</SubTitle>
              <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <BrandLabel>OKX</BrandLabel>
                <WideImg
                  src={`${IMG}/competitor-row2-left.png`}
                  alt="OKX payment comparison"
                />
              </div>
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
                  'Simplify interface',
                  'Hide advanced settings',
                  'Reduce visual hierarchy',
                ]}
              />
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <BrandLabel>Binance</BrandLabel>
                <WideImg
                  src="/media/OldPayment.png"
                  alt="Binance payment comparison"
                />
              </div>
            </div>
              <ChoosePaymentOptimized />
            </div>
          </Section>

          <Section title="Design Validation" className="gap-6">
            <SubTitle>User survey</SubTitle>
            <P small>
              We conducted a user survey to see user&apos;s satisfaction of the new design and their
              feedbacks.
            </P>
            <div className="flex flex-col gap-6 sm:flex-row">
              <WideImg src={`${IMG}/survey-q1-left.png`} alt="Survey question 1" className="flex-1" />
              <WideImg src={`${IMG}/survey-q1-right.png`} alt="Survey results 1" className="flex-1" />
            </div>
            <div className="flex flex-col gap-4">
              <P small>
                The research shows more than 80% of user are prefer the new design, because the
                page presented a better visuals and less interactions. And the number is bigger
                it&apos;s more easy to use.
              </P>
              <WideImg src={`${IMG}/survey-visual.png`} alt="Survey visual" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2.5">
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
              <WideImg src={`${IMG}/survey-chart.png`} alt="Survey chart" />
            </div>
          </Section>

          <Section className="gap-6">
            <SubTitle>Data validation</SubTitle>
            <P small>
              We also looked at user data from step CR and order SR rate, compare to the old design,
              the new design step1 to step3 CR increased by 48.34%. The user CSAT increased 3.8%,
              product defect rate drop by 0.6%.
            </P>
            <WideImg src={`${IMG}/data-metrics.png`} alt="Data metrics" />
          </Section>

          <Section title="Project Challenges">
            <SubTitle>Challenges</SubTitle>
            <div className="flex flex-col gap-1">
              <Bullet>Project scope. 20+ fiat buy crypto channels, involves 350+ pages.</Bullet>
              <Bullet>Cross team collaboration (Product, DS team, UIKit developer).</Bullet>
            </div>
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

          <Section className="!gap-0 !px-0">
            <FinalUiGallery basePath={IMG} />
          </Section>
        </article>
      </div>
    </div>
  )
}
