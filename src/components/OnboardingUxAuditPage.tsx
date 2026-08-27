import type { ReactNode } from 'react'

import { P, Section, SubTitle } from './project/ProjectShared'

const IMG = '/media/onboarding-ux-audit'
const FONT = "[font-family:'Noto_Sans_SC',sans-serif]"

function ProblemOverviewItem({
  title,
  problem,
  approaches,
}: {
  title: string
  problem: string
  approaches: string[]
}) {
  return (
    <li className={`text-[15px] leading-[1.75] text-paper-dim ${FONT}`}>
      <p>
        <span className="font-bold text-paper-ink">{title}</span> {problem}
      </p>
      <div className="mt-3">
        {approaches.length === 1 ? (
          <p>
            <span className="font-bold text-paper-ink">Design Approach :</span> {approaches[0]}
          </p>
        ) : (
          <>
            <p className="font-bold text-paper-ink">Design Approach :</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              {approaches.map((approach) => (
                <li key={approach}>{approach}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </li>
  )
}

const PROBLEM_OVERVIEW_ITEMS = [
  {
    title: 'Visual Consistency',
    problem:
      "The visual language across product lines isn't fully unified — this can confuse users and weaken brand perception. Our design direction: clean, flat, and efficient.",
    approaches: [
      'Remove shadows and card-style containers, reduce visual layers, eliminate noise — make pages cleaner and more efficient',
    ],
  },
  {
    title: 'Usability',
    problem:
      'Pages are overloaded with information and features. Complex layouts raise the barrier for users and increase the cost of using our product.',
    approaches: [
      'Visually prioritize core functions; categorize and rank information to avoid stacking. Spotlight primary tasks, de-emphasize secondary details — help users stay focused',
      'Minimize dense interactions on a single page. For complex tasks, use smart defaults to reduce steps and improve usability',
    ],
  },
] as const

function Quote({ children }: { children: ReactNode }) {
  return (
    <p className={`text-[15px] leading-[1.75] text-paper-dim ${FONT}`}>{children}</p>
  )
}

function Label({ children }: { children: ReactNode }) {
  return <p className={`text-[12px] leading-[1.6] text-paper-dim ${FONT}`}>{children}</p>
}

const TABLE_BODY = `space-y-1 text-[15px] leading-[1.75] text-paper-dim ${FONT} [&_p]:text-[15px] [&_p]:leading-[1.75] [&_p]:text-paper-dim`

const PHONE_FRAMES = {
  xs: 'h-[242px] w-[118px]',
  sm: 'h-[304px] w-[140px]',
  md: 'h-[376px] w-[172px]',
  lg: 'h-[480px] w-[220px]',
  xl: 'h-[560px] w-[260px]',
  app: 'h-[520px] w-[240px]',
} as const

type PhoneSize = keyof typeof PHONE_FRAMES

function ConstrainedImg({
  src,
  alt,
  className = '',
  maxH = '',
}: {
  src: string
  alt: string
  className?: string
  maxH?: string
}) {
  return (
    <div className={`max-w-full overflow-hidden rounded-lg bg-surface-2 ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`h-auto w-full object-contain object-left-top ${maxH}`}
      />
    </div>
  )
}

function DesktopImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <ConstrainedImg src={src} alt={alt} className={className} maxH="max-h-[520px]" />
  )
}

function Phone({
  src,
  alt,
  label,
  size = 'md',
  className = '',
}: {
  src: string
  alt: string
  label?: string
  size?: PhoneSize
  className?: string
}) {
  const frame = PHONE_FRAMES[size]
  return (
    <div className={`flex shrink-0 flex-col gap-1 ${frame} ${className}`}>
      <div className="h-full w-full overflow-hidden rounded-lg bg-surface-2">
        <img src={src} alt={alt} className="h-full w-full object-contain object-top" />
      </div>
      {label !== undefined && <Label>{label}</Label>}
    </div>
  )
}

function PhoneFrameRowLabeled({
  items,
  height = 'h-[480px]',
}: {
  items: { src: string; alt: string; label: string }[]
  height?: string
}) {
  return (
    <div className="flex flex-nowrap items-start gap-3 overflow-x-auto">
      {items.map((item) => (
        <div key={item.src} className="flex shrink-0 flex-col gap-1">
          <img
            src={item.src}
            alt={item.alt}
            className={`${height} w-auto shrink-0 rounded-lg bg-surface-2`}
          />
          <Label>{item.label}</Label>
        </div>
      ))}
    </div>
  )
}

function PhoneRow({ children }: { children: ReactNode }) {
  return <div className="flex w-full flex-wrap gap-3">{children}</div>
}

function AuditCell({
  title,
  children,
  className = '',
}: {
  title?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`border border-line p-4 ${className}`}>
      {title && <p className={`mb-2 text-[19px] font-bold leading-[1.5] text-paper-ink ${FONT}`}>{title}</p>}
      <div className={TABLE_BODY}>{children}</div>
    </div>
  )
}

function InsightTable({
  insights,
  suggestions,
  insightImage,
  suggestionImage,
}: {
  insights: ReactNode
  suggestions: ReactNode
  insightImage?: { src: string; alt: string }
  suggestionImage?: { src: string; alt: string }
}) {
  return (
    <div className="w-full overflow-x-auto border border-line">
      <div className={`flex min-w-[640px] border-b border-line bg-surface-2 ${FONT}`}>
        <div className="w-[406px] shrink-0 p-4 text-[15px] font-bold text-paper-ink">Insights</div>
        <div className="min-w-0 flex-1 p-4 text-[15px] font-bold text-paper-ink">Suggestions</div>
      </div>
      <div className="flex min-w-[640px] items-start">
        <div className={`w-[406px] shrink-0 space-y-2 p-4 ${TABLE_BODY}`}>
          {insights}
          {insightImage && (
            <ConstrainedImg
              src={insightImage.src}
              alt={insightImage.alt}
              className="max-w-[240px]"
              maxH="max-h-[120px]"
            />
          )}
        </div>
        <div className={`min-w-0 flex-1 space-y-2 p-4 ${TABLE_BODY}`}>
          {suggestions}
          {suggestionImage && (
            <ConstrainedImg
              src={suggestionImage.src}
              alt={suggestionImage.alt}
              className="max-w-[360px]"
              maxH="max-h-[220px]"
            />
          )}
        </div>
      </div>
    </div>
  )
}

function InsightTableEqual({
  insights,
  suggestions,
  insightImage,
}: {
  insights: ReactNode
  suggestions: ReactNode
  insightImage?: { src: string; alt: string }
}) {
  return (
    <div className="w-full overflow-x-auto border border-line">
      <div className={`flex border-b border-line bg-surface-2 ${FONT}`}>
        <div className="flex-1 p-4 text-[15px] font-bold text-paper-ink">Insights</div>
        <div className="flex-1 p-4 text-[15px] font-bold text-paper-ink">Suggestions</div>
      </div>
      <div className="flex items-start">
        <div className={`flex-1 space-y-2 p-4 ${TABLE_BODY}`}>
          {insights}
          {insightImage && (
            <ConstrainedImg
              src={insightImage.src}
              alt={insightImage.alt}
              className="max-w-[360px]"
              maxH="max-h-[220px]"
            />
          )}
        </div>
        <div className={`flex-1 space-y-2 p-4 ${TABLE_BODY}`}>{suggestions}</div>
      </div>
    </div>
  )
}

function Highlight({ children }: { children: ReactNode }) {
  return <SubTitle>{children}</SubTitle>
}

export default function OnboardingUxAuditPage() {
  return (
    <div className="min-h-screen bg-bg pb-28 sm:pb-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <article className={`flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 ${FONT}`}>
          <h1 className="px-4 pb-4 text-[36px] font-bold leading-[1.4] text-paper-ink sm:px-0">
            Registration, Login, Fiat &amp; KYC — Product Experience Audit
          </h1>

          <Section title="1. Objective">
            <P>
              Address inconsistencies in the fiat transaction experience, improve usability and
              efficiency, and ultimately drive higher conversion.
            </P>
          </Section>

          <Section title="2. Problem Overview" className="gap-5">
            <ul className={`list-disc space-y-8 pl-5 ${FONT}`}>
              {PROBLEM_OVERVIEW_ITEMS.map((item) => (
                <ProblemOverviewItem
                  key={item.title}
                  title={item.title}
                  problem={item.problem}
                  approaches={[...item.approaches]}
                />
              ))}
            </ul>
          </Section>

          <Section title="3. Q2 2024 — Product UI/UX User Feedback">
            <ConstrainedImg src={`${IMG}/q2-feedback.png`} alt="Q2 2024 user feedback" maxH="max-h-[280px]" />
          </Section>

          <Section title="4. UI Consistency Across Business Lines" className="gap-5">

            <div className="flex flex-col gap-5">
              <SubTitle>Checkout</SubTitle>
              <PhoneRow>
                <Phone size="md" src={`${IMG}/checkout-01-card-buy.png`} alt="Card buy" label="Card buy" />
                <Phone size="md" src={`${IMG}/checkout-02-quick-buy.png`} alt="Quick buy" label="Quick buy" />
                <Phone
                  size="md"
                  src={`${IMG}/checkout-03-p2p-express.png`}
                  alt="P2P express"
                  label="P2P express"
                />
                <Phone
                  size="md"
                  src={`${IMG}/checkout-04-3rd-party-buy.png`}
                  alt="3rd party buy"
                  label="3rd party buy"
                />
                <Phone
                  size="md"
                  src={`${IMG}/checkout-05-cash-conversion.png`}
                  alt="Cash convension"
                  label="Cash convension"
                />
              </PhoneRow>
              <div className="w-full overflow-x-auto border border-line">
                <div className="flex min-w-[1040px]">
                  <AuditCell title="Visual Consistency" className="w-[246px] shrink-0">
                    <p>1. Inconsistent visual styles</p>
                    <p>2. Three different primary CTA styles</p>
                    <p>3. Two different keyboard styles</p>
                    <P medium>Usability</P>
                    <p>1. Overly complex visual hierarchy with too much noise — core interactions get lost</p>
                    <p>2. Checkout page cluttered with features and info — interactions feel unintuitive</p>
                  </AuditCell>
                  <AuditCell title="Impact:" className="w-[165px] shrink-0">
                    <p>
                      Without a unified visual style, users struggle to build a clear brand
                      impression. The fragmented look makes the experience feel disconnected across
                      products.
                    </p>
                    <p className="pt-2">
                      Overly complex interactions bury core features, increase cognitive load, and
                      hurt both product efficiency and conversion.
                    </p>
                  </AuditCell>
                  <AuditCell title="Recommendations:" className="min-w-0 flex-1">
                    <p>1. Unify the visual style across all business scenarios</p>
                    <p>2. Simplify pages — reduce visual layers and noise, spotlight core features</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <Phone
                        size="xs"
                        src={`${IMG}/checkout-rec-quick-card-buy.png`}
                        alt="Quick/Card buy"
                        label="Quick/Card buy"
                      />
                      <Phone
                        size="xs"
                        src={`${IMG}/checkout-rec-express-buy.png`}
                        alt="Express buy"
                        label="Express buy"
                      />
                      <Phone
                        size="xs"
                        src={`${IMG}/checkout-rec-cash-conversion.png`}
                        alt="Cash conversion"
                        label="Cash conversion"
                      />
                    </div>
                  </AuditCell>
                  <AuditCell title="Timeline:" className="w-[216px] shrink-0">
                    <p>Aug 8 launch — Card Buy visual refresh</p>
                    <p className="pt-2">
                      Pending review — Quick Buy / P2P Express / Cash Conversion / 3rd Party Buy
                    </p>
                  </AuditCell>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <SubTitle>Payment Method Selection</SubTitle>
              <PhoneFrameRowLabeled
                items={[
                  { src: `${IMG}/payment-01-card-buy.png`, alt: 'Card buy', label: 'Card buy' },
                  {
                    src: `${IMG}/payment-02-have-card-card-buy.png`,
                    alt: 'Have card(Card buy)',
                    label: 'Have card(Card buy)',
                  },
                  { src: `${IMG}/payment-03-quick-buy.png`, alt: 'Quick buy', label: 'Quick buy' },
                  {
                    src: `${IMG}/payment-04-have-card-quick-buy.png`,
                    alt: 'Have card(Quick buy)',
                    label: 'Have card(Quick buy)',
                  },
                ]}
              />
              <div className="w-full overflow-x-auto border border-line">
                <div className="flex min-w-[1040px]">
                  <AuditCell title="Visual Consistency" className="w-[396px] shrink-0">
                    <p>1. Two different visual styles</p>
                    <p>2. Two different selection control styles</p>
                    <P medium>Usability</P>
                    <p>1. Overly complex visual hierarchy with too much noise — core interactions get buried</p>
                    <p>2. Checkout page cluttered with features and info — interactions feel unintuitive</p>
                  </AuditCell>
                  <AuditCell title="Recommendations:" className="min-w-0 flex-1">
                    <p>1. Unify the visual style</p>
                    <p>
                      2. Simplify pages — categorize info, hide secondary elements, spotlight core
                      features and content
                    </p>
                    <Phone
                      size="lg"
                      src={`${IMG}/payment-rec.png`}
                      alt="Payment recommendation"
                      className="mt-3"
                    />
                  </AuditCell>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <SubTitle>Order Confirmation</SubTitle>
              <PhoneRow>
                <Phone
                  size="lg"
                  src={`${IMG}/order-confirm-01-quick-buy.png`}
                  alt="Quick buy"
                  label="Quick buy"
                />
                <Phone
                  size="lg"
                  src={`${IMG}/order-confirm-02-card-buy.png`}
                  alt="Card buy"
                  label="Card buy"
                />
                <Phone
                  size="lg"
                  src={`${IMG}/order-confirm-03-cash-conversion.png`}
                  alt="Cash conversion"
                  label="Cash conversion"
                />
              </PhoneRow>
              <div className="w-full overflow-x-auto border border-line">
                <div className="flex min-w-[1040px]">
                  <AuditCell title="Visual Consistency" className="w-[396px] shrink-0">
                    <p>1. Inconsistent currency pair visual presentation</p>
                    <p>2. Same category of info uses different visual styles</p>
                    <p>3. Inconsistent button label conventions</p>
                    <p>4. Primary button usage not standardized</p>
                    <P medium>Usability</P>
                    <p>1. Poor readability</p>
                    <p>2. Visual hierarchy inverted — secondary info overpowers primary content</p>
                  </AuditCell>
                  <AuditCell title="Recommendations:" className="min-w-0 flex-1">
                    <p>1. Standardize the visual treatment of currency pairs</p>
                    <p>2. De-emphasize secondary elements and spotlight core features</p>
                  </AuditCell>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <SubTitle>Order Complete</SubTitle>
              <PhoneRow>
                <Phone
                  size="md"
                  src={`${IMG}/order-complete-01-card-buy.png`}
                  alt="Card buy"
                  label="Card buy"
                />
                <Phone
                  size="md"
                  src={`${IMG}/order-complete-02-quick-buy.png`}
                  alt="Quick buy"
                  label="Quick buy"
                />
                <Phone
                  size="md"
                  src={`${IMG}/order-complete-03-cash-conversion.png`}
                  alt="Cash conversion"
                  label="Cash conversion"
                />
                <Phone
                  size="md"
                  src={`${IMG}/order-complete-04-bank-deposit.png`}
                  alt="Bank deposit"
                  label="Bank deposit"
                />
              </PhoneRow>
              <div className="w-full overflow-x-auto border border-line">
                <div className="flex min-w-[1040px]">
                  <AuditCell title="Visual Consistency" className="w-[396px] shrink-0">
                    <p>1. Three different &apos;processing&apos; icons</p>
                    <p>2. Inconsistent visual styles</p>
                    <P medium>Usability</P>
                    <p>1. Poor readability</p>
                  </AuditCell>
                  <AuditCell title="Recommendations:" className="min-w-0 flex-1">
                    <p>1. Standardize the visual treatment of order statuses</p>
                    <p>2. Unify visual styles</p>
                    <p>3. Improve color contrast for better readability</p>
                  </AuditCell>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <SubTitle>Transaction History</SubTitle>
              <PhoneFrameRowLabeled
                items={[
                  {
                    src: `${IMG}/history-01-quick-buy.png`,
                    alt: 'Quick buy',
                    label: 'Quick buy',
                  },
                  { src: `${IMG}/history-02-card-buy.png`, alt: 'Card buy', label: 'Card buy' },
                  {
                    src: `${IMG}/history-03-cash-conversion.png`,
                    alt: 'Cash conversion',
                    label: 'Cash conversion',
                  },
                ]}
              />
              <div className={`border border-line p-4 ${TABLE_BODY}`}>
                <SubTitle>Recommendations:</SubTitle>
                <p>1. Simplify the page — reduce visual layers</p>
                <p>
                  2. Optimize page structure, unify the visual reading path, and lighten cognitive
                  load
                </p>
              </div>
            </div>
          </Section>

          <Section title="5. Bank Deposit">
            <PhoneRow>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <Phone
                  key={n}
                  size="sm"
                  src={`${IMG}/bank-0${n}.png`}
                  alt={`Bank deposit ${n}`}
                />
              ))}
            </PhoneRow>
            <div className="flex flex-wrap gap-4">
              <Phone size="xl" src={`${IMG}/bank-09.png`} alt="Bank deposit flow" />
              <Phone size="md" src={`${IMG}/order-complete-04-bank-deposit.png`} alt="Bank deposit" />
            </div>
          </Section>

          <Section title="6. Registration &amp; Login">
            <Quote>
              &quot;Wow, my favorite footballer Messi endorses this — feels trustworthy! And a 6,200
              USDT welcome bonus? Amazing!&quot;
            </Quote>
            <DesktopImg src={`${IMG}/reg-login-01.png`} alt="Registration landing" />
            <InsightTable
              insights={
                <>
                  <p>1. Heavy use of the brand color across the page creates visual noise, splits attention, and weakens the primary CTA&apos;s pull</p>
                  <p>2. Two primary CTAs side by side — best practice says avoid this</p>
                  <p>3. Multiple primary button styles dilute brand recognition and lower product perception</p>
                </>
              }
              suggestions={
                <>
                  <p>1. Reduce visual noise — let the product&apos;s features and purpose shine through</p>
                  <p>2. Use primary + secondary button hierarchy; avoid side-by-side buttons of the same level</p>
                  <p>3. Standardize the primary button style or define clear usage rules per context</p>
                </>
              }
              insightImage={{ src: `${IMG}/reg-login-insight-02.png`, alt: 'CTA styles' }}
              suggestionImage={{ src: `${IMG}/reg-login-suggest-03.png`, alt: 'Button hierarchy' }}
            />
            <Quote>
              &quot;The screen suddenly got bright. So much info on the sign-up page — pick email or
              phone, create a password, agree to terms, then tap create…&quot;
            </Quote>
            <DesktopImg src={`${IMG}/reg-login-02.png`} alt="Sign up page" />
            <InsightTable
              insights={
                <>
                  <p>1. Interaction flow is somewhat complex — there&apos;s a learning curve</p>
                  <p>2. The promo content on the left visually competes with the form on the right</p>
                  <p>3. The campaign module doesn&apos;t look clickable</p>
                </>
              }
              suggestions={
                <>
                  <p>1. Restructure the page to spotlight the core action — help users focus</p>
                  <p>2. Streamline the registration flow for a friendlier sign-up experience</p>
                </>
              }
              suggestionImage={{ src: `${IMG}/reg-login-suggest-05.png`, alt: 'Registration flow' }}
            />
            <Quote>&quot;Helpful password creation tips — nice touch&quot;</Quote>
            <DesktopImg src={`${IMG}/reg-login-03.png`} alt="Password tips" />
            <Quote>
              &quot;Finally registered! Now off to verify my identity… can I claim my welcome bonus
              yet?&quot;
            </Quote>
            <DesktopImg src={`${IMG}/reg-login-04.png`} alt="Post registration" />
            <Highlight>Highlight</Highlight>
            <P>
              1. After registration, guide users to identity verification. Show friendly prompts
              about permissions they&apos;ll unlock along the way
            </P>
          </Section>

          <Section title="7. KYC">
            <Quote>&quot;So much content here — let me take a closer look at what&apos;s needed&quot;</Quote>
            <DesktopImg src={`${IMG}/kyc-01.png`} alt="KYC overview" />
            <InsightTable
              insights={<p>1. Information overload creates a heavy reading burden for users</p>}
              suggestions={
                <>
                  <p>1. Visualize information to lower the learning curve</p>
                  <p>2. Categorize and prioritize both information and user tasks to improve page usability</p>
                </>
              }
              suggestionImage={{ src: `${IMG}/kyc-suggest-02.png`, alt: 'KYC visualization' }}
            />
            <Quote>&quot;Step-by-step selection — so easy!&quot;</Quote>
            <DesktopImg src={`${IMG}/kyc-02.png`} alt="KYC step selection" />
            <Quote>
              &quot;Clear step guidance — I&apos;ll just follow the instructions to fill in my
              details&quot;
            </Quote>
            <DesktopImg src={`${IMG}/kyc-03.png`} alt="KYC form" />
            <Quote>&quot;Following the prompts to upload my documents&quot;</Quote>
            <DesktopImg src={`${IMG}/kyc-04.png`} alt="Document upload" />
            <DesktopImg src={`${IMG}/kyc-05.png`} alt="KYC progress" />
            <Highlight>Highlight</Highlight>
            <P>
              1. Friendly guided flow — users clearly understand their tasks and how to complete them
            </P>
            <Quote>
              &quot;Wait, didn&apos;t I just upload my ID? Why do I need to upload it again?&quot;
            </Quote>
            <DesktopImg src={`${IMG}/kyc-06.png`} alt="Duplicate upload" />
            <InsightTable
              insights={
                <p>1. Current task is unclear; the illustration doesn&apos;t communicate well</p>
              }
              suggestions={
                <p>
                  1. Use illustrations that accurately convey meaning; add clear titles to
                  communicate the current step and task
                </p>
              }
              suggestionImage={{ src: `${IMG}/kyc-suggest-06.png`, alt: 'KYC illustration' }}
            />
            <Quote>
              &quot;All verification submitted — now I wait an hour. What can I do in the
              meantime?&quot;
            </Quote>
            <DesktopImg src={`${IMG}/kyc-07.png`} alt="Verification pending" />
            <Highlight>Recommendation</Highlight>
            <P>1. Take users to the assets page and guide them through security settings</P>
          </Section>

          <Section title="8. Buying Crypto">
            <Quote>
              &quot;Verification approved! Time to buy some crypto. Lots of options here — credit card
              sounds good, let me try that&quot;
            </Quote>
            <DesktopImg src={`${IMG}/buying-01.png`} alt="Buy crypto options" />
            <InsightTableEqual
              insights={
                <p>
                  1. Buy Crypto as a top-level entry shows 6 options at once — this can overwhelm
                  users and raise the learning curve
                </p>
              }
              suggestions={
                <p>
                  1. Simplify entry options to no more than 4. Consider user volume and conversion
                  data for prioritization. Reference: Binance 0, OKX 4, Bybit 4, Kraken 0
                </p>
              }
            />
            <Quote>
              &quot;Let me buy 100 EUR worth of USDT — that&apos;s about 102 USDT. Actually, let me
              round it to exactly 100 USDT… wait, I can&apos;t enter a crypto amount?&quot;
            </Quote>
            <DesktopImg src={`${IMG}/buying-02.png`} alt="Checkout amount" />
            <InsightTableEqual
              insights={
                <>
                  <p>1. Users can&apos;t purchase by specifying a crypto amount</p>
                  <p>2. Checkout module styles differ between light and dark mode</p>
                </>
              }
              suggestions={
                <>
                  <p>1. Add reverse input — let users enter a crypto amount</p>
                  <p>2. Unify visual styles</p>
                </>
              }
              insightImage={{ src: `${IMG}/buying-insight-03.png`, alt: 'Checkout styles' }}
            />
            <Quote>
              &quot;I need to add a card first. Oh, Google Pay and Apple Pay are options too — let me
              add a card for now&quot;
            </Quote>
            <DesktopImg src={`${IMG}/buying-03.png`} alt="Add card" />
            <InsightTableEqual
              insights={
                <>
                  <p>1. Visual style doesn&apos;t match the checkout page</p>
                  <p>2. Information sections aren&apos;t clearly separated</p>
                  <p>3. User guidance is unclear</p>
                </>
              }
              suggestions={
                <>
                  <p>1. Unify the visual style</p>
                  <p>2. Organize information into clear categories</p>
                  <p>3. Strengthen step-by-step visual guidance</p>
                </>
              }
            />
            <Quote>&quot;Filling in my card details&quot;</Quote>
            <DesktopImg src={`${IMG}/buying-04.png`} alt="Card details" />
            <Quote>
              &quot;Hmm, nothing happened… what&apos;s going on? Oh wait — now it&apos;s asking for
              my address&quot;
            </Quote>
            <DesktopImg src={`${IMG}/buying-05.png`} alt="Address step" />
            <InsightTableEqual
              insights={
                <p>
                  1. The two steps look too similar visually, creating the illusion that nothing
                  happened after tapping the button
                </p>
              }
              suggestions={
                <p>
                  1. Remove the card illustration from the address step to create visual contrast and
                  help users notice the transition
                </p>
              }
            />
            <Quote>&quot;Card added! What do I do next?&quot;</Quote>
            <DesktopImg src={`${IMG}/buying-06.png`} alt="Card added" />
            <DesktopImg src={`${IMG}/buying-07.png`} alt="Next step guidance" />
            <InsightTableEqual
              insights={<p>1. Missing a clear &apos;next step&apos; visual cue</p>}
              suggestions={
                <>
                  <p>1. Improve visual hierarchy and strengthen user guidance</p>
                  <p>2. Simplify the page — keep the focus on the task at hand</p>
                </>
              }
            />
            <Quote>
              &quot;Let me review my purchase details — looks good, placing the order now&quot;
            </Quote>
            <DesktopImg src={`${IMG}/buying-08.png`} alt="Order review" />
            <DesktopImg src={`${IMG}/buying-09.png`} alt="Order placement" />
            <InsightTableEqual
              insights={<p>​</p>}
              suggestions={
                <>
                  <p>1. Standardize text capitalization</p>
                  <p>2. Simplify the page and reduce visual noise</p>
                </>
              }
            />
          </Section>

          <Section title="9. App Home Screen" className="gap-5">
            <SubTitle>Home</SubTitle>
            <PhoneRow>
              <Phone size="app" src={`${IMG}/home-01.png`} alt="Home 1" />
              <Phone size="app" src={`${IMG}/home-02.png`} alt="Home 2" />
              <Phone size="app" src={`${IMG}/home-03.png`} alt="Home 3" />
            </PhoneRow>
            <Highlight>Highlight</Highlight>
            <P>1. Clear user guidance on the logged-out home screen; task priority is well-defined</P>
            <P>2. The 6,200 USDT welcome bonus is a compelling hook</P>
            <Highlight>Lowlight</Highlight>
            <P>
              1. The newcomer promo illustration doesn&apos;t match the theme — users can&apos;t
              quickly grasp the marketing message, which weakens the push toward registration
            </P>
            <P>
              2. As the app&apos;s home screen, the overall visual style lacks consistency and brand
              identity
            </P>
            <P>🤔</P>
            <P>
              The six shortcut icons and the carousel ad take up half the first screen. Consider
              pulling conversion data for this section — from a simplification and efficiency
              standpoint, these could be de-emphasized to keep users focused on signing up.
            </P>
            <SubTitle>UX Issues &amp; Recommendations:</SubTitle>
            <P>
              1. Improve home screen campaign illustrations so imagery and copy tell a coherent story
            </P>
            <P>
              2. Unify the visual language — the 3D illustration style clashes with the flat, minimal
              product UI (buttons, icons). Pay attention to icon consistency (line vs. filled), page
              structure, and overall brand coherence. Consider separating labels from icons
            </P>

            <SubTitle>Registration / Login</SubTitle>
            <div className="flex flex-wrap gap-4">
              <Phone size="xl" src={`${IMG}/reg-login-app-01.png`} alt="Registration app" />
              <Phone size="xl" src={`${IMG}/reg-login-app-02.png`} alt="Login app" />
            </div>
            <Highlight>Highlight</Highlight>
            <P>1. The login flow is smooth overall — no major friction points</P>
            <Highlight>Lowlight</Highlight>
            <P>
              1. During registration, the system doesn&apos;t validate whether an account already
              exists. Users can proceed to the email verification step, but existing accounts
              won&apos;t receive a code — and the &apos;Didn&apos;t receive a code?&apos; dialog
              doesn&apos;t mention this scenario
            </P>
            <P>
              2. The registration page uses more than 5 font styles (size/color/weight), making it
              look cluttered and inconsistent
            </P>
            <SubTitle>UX Issues &amp; Recommendations:</SubTitle>
            <P>
              1. Validate accounts on the registration page — if already registered, prompt users to
              log in instead
            </P>
            <P>2. Simplify the page to improve usability and efficiency</P>
          </Section>
        </article>
      </div>
    </div>
  )
}
