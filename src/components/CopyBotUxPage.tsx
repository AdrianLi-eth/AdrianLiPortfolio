import BackToHome from './BackToHome'

const IMG = '/media/copy-bot-ux'

function Phone({
  src,
  alt,
  label,
  className = '',
  frame = 'default',
}: {
  src: string
  alt: string
  label?: string
  className?: string
  frame?: 'default' | 'plan' | 'compact' | 'entry' | 'visual' | 'plan-large' | 'entry-plan'
}) {
  const frameClass =
    frame === 'plan'
      ? 'h-[533px]'
      : frame === 'compact'
        ? 'h-[320px]'
        : frame === 'entry'
          ? 'h-[299px]'
          : frame === 'entry-plan'
            ? 'h-[417px]'
            : frame === 'visual'
              ? 'h-[308px]'
              : frame === 'plan-large'
                ? 'h-[658px]'
                : ''

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div
        className={`overflow-hidden bg-surface-2 ${frameClass}`}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full object-cover object-top ${frameClass ? 'h-full' : 'h-auto'}`}
        />
      </div>
      {label && (
        <p className="text-[13px] font-medium leading-[1.6] text-paper-dim">{label}</p>
      )}
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[24px] font-medium leading-[1.4] tracking-[-0.3px] text-paper-ink [font-family:'Noto_Sans_SC',sans-serif]">
      {children}
    </p>
  )
}

function P({ children, medium }: { children: React.ReactNode; medium?: boolean }) {
  return (
    <p
      className={`text-[15px] leading-[1.7] text-paper-dim [font-family:'Noto_Sans_SC',sans-serif] ${medium ? 'font-medium text-paper-ink' : 'font-normal'}`}
    >
      {children}
    </p>
  )
}

function Spacer() {
  return <p className="text-[15px] leading-[1.7]">&nbsp;</p>
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[rgba(251,191,188,0.3)] p-1">
      <p className="text-[15px] font-normal leading-[1.7] text-[#bf261a] [font-family:'Noto_Sans_SC',sans-serif]">
        {children}
      </p>
    </div>
  )
}

function WideImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden bg-surface-2 ${className}`}>
      <img src={src} alt={alt} className="h-auto w-full object-contain" />
    </div>
  )
}

export default function CopyBotUxPage() {
  return (
    <div className="min-h-screen bg-bg py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <BackToHome />

        <article className="flex w-full flex-col gap-16 border border-line bg-paper pb-20 pt-[72px] sm:gap-16 sm:px-20 sm:pb-20 sm:pt-[72px] [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="text-[36px] font-medium leading-[1.4] tracking-[-0.5px] text-paper-ink">
            Copy+Bot UX Optimization
          </h1>

          {/* Objective */}
          <div className="flex w-full flex-col gap-6">
            <SectionTitle>Objective</SectionTitle>
            <P>
              Reduce users&apos; comprehension cost for copy trading strategies, lower the
              cognitive burden of the primary entry point, and improve the completion rate of
              strategy conversion paths.
            </P>
          </div>

          {/* Optimization Dimensions */}
          <div className="flex w-full flex-col gap-6">
            <SectionTitle>Optimization Dimensions:</SectionTitle>
            <div className="flex flex-col gap-1">
              <P>1. Structural Layer - Navigation / Business Modules / Display Order / Interaction Paths</P>
              <P>2. Module Information</P>
            </div>
          </div>

          {/* Structural Plan */}
          <div className="flex w-full flex-col gap-6">
            <SectionTitle>Structural Plan:</SectionTitle>
            <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start">
              <div className="grid w-full shrink-0 grid-cols-2 gap-4 sm:max-w-[520px]">
                <Phone src={`${IMG}/img45.png`} alt="Current state" frame="plan" />
                <Phone
                  src={`${IMG}/img46.png`}
                  alt="Plan 1"
                  label="Plan 1"
                  frame="plan"
                />
                <Phone src={`${IMG}/plan2.png`} alt="Plan 2" label="Plan 2" frame="plan" />
                <Phone src={`${IMG}/plan3.png`} alt="Plan 3" label="Plan 3" frame="plan" />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <P medium>User Pain Points:</P>
                <P>1. Don&apos;t know what to do or what to look at</P>
                <P>2. All text and modules, high learning and comprehension cost</P>
                <Spacer />
                <P medium>Plan 1 (Recommended)</P>
                <P>
                  Users land on the Trading Plaza by default. This page serves as the core
                  conversion scenario for new users, while retaining the original copy trading
                  and trading bot entries as independent business entries.
                </P>
                <Spacer />
                <P>Product Entry:</P>
                <P>
                  The page features high-volume product entries, such as: recommended traders for
                  copy trading, spot grid and Martingale strategies, etc.
                </P>
                <Spacer />
                <P>Design Philosophy:</P>
                <P>
                  1. As the core conversion scenario for new users, we need to refine and simplify
                  the displayed information and product entries as much as possible, highlight our
                  core conversion business/product entries, and de-emphasize secondary information
                  and features to avoid distractions
                </P>
                <P>2. Simplify navigation, reduce user thinking and decision-making costs</P>
                <P>3. Reduce options, lower user decision-making costs</P>
                <Spacer />
                <P medium>Plan 2</P>
                <P>
                  Compared to Plan 1, integrates the Trading Bot structure, which can improve screen
                  efficiency, but relatively increases user learning + operational costs
                </P>
                <Spacer />
                <P medium>Plan 3</P>
                <P>
                  Simplify secondary navigation by placing trading bot and copy trading under one
                  tab, reducing product structural complexity and thereby lowering user learning
                  costs.
                </P>
                <Spacer />
                <P>User Segmentation:</P>
                <P>
                  Popular - Primarily establishes new users&apos; overall product awareness, while
                  also carrying users&apos; first conversion task
                </P>
                <Spacer />
                <P>
                  Copy trading and trading bot as independent business entries, providing entry
                  points for existing users or those who want to explore the business in depth
                </P>
                <Spacer />
                <P>Total Assets:</P>
                <P>
                  A single entry point for users to quickly track assets and orders, integrating
                  copy trading + strategies + trading bot, providing unified management of orders
                  and assets, avoiding scattered business entries that are hard to find while
                  increasing product complexity
                </P>
              </div>
            </div>
          </div>

          {/* Detailed Plans */}
          <div className="flex w-full flex-col gap-6">
            <SectionTitle>Detailed Plans:</SectionTitle>
            <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="flex flex-col gap-1.5">
                <P medium>Strategy Dimension</P>
                <Phone src={`${IMG}/strategy-dimension.png`} alt="Strategy Dimension" frame="plan" />
              </div>
              <div className="flex flex-col gap-1.5">
                <P medium>Currency Dimension</P>
                <Phone src={`${IMG}/currency-a.png`} alt="Currency Dimension A" frame="plan" />
              </div>
              <div className="flex flex-col gap-1.5">
                <P medium>Currency Dimension</P>
                <Phone src={`${IMG}/currency-b.png`} alt="Currency Dimension B" frame="plan" />
              </div>
              <div className="flex flex-col gap-1.5">
                <P medium>Investment Type</P>
                <Phone src={`${IMG}/investment-type.png`} alt="Investment Type" frame="plan" />
              </div>
            </div>
          </div>

          {/* Level 1 Entry Analysis */}
          <div className="flex w-full flex-col gap-6">
            <SectionTitle>
              Level 1 Entry Analysis (The first business page users reach)
            </SectionTitle>
            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <div className="flex flex-wrap gap-4">
                <Phone src={`${IMG}/img45.png`} alt="BG" label="BG" className="w-[138px]" frame="entry" />
                <Phone src={`${IMG}/okx.png`} alt="OKX" label="OKX" className="w-[138px]" frame="entry" />
                <Phone src={`${IMG}/bn.png`} alt="BN" label="BN" className="w-[138px]" frame="entry" />
                <Phone src={`${IMG}/bybit.png`} alt="Bybit" label="Bybit" className="w-[138px]" frame="entry" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <P medium>User Pain Points:</P>
                <P>1. Don&apos;t know what to do or what to look at</P>
                <P>2. All text and modules, high learning and comprehension cost</P>
                <Spacer />
                <P>OKX/BN/Bybit all have primary button guidance in the first screen,</P>
                <P>OKX: Guides users to create AI strategies</P>
                <P>BN: Guides users to copy trading</P>
                <P>Bybit: Event participation + pre-market trading</P>
                <Spacer />
                <P medium>Page Optimization Points:</P>
                <P>
                  Highlight the page&apos;s core product features, de-emphasize secondary features
                  and information, reduce user distractions;
                </P>
                <Spacer />
                <P medium>To do:</P>
                <P>
                  Analyze online new users&apos; main conversion paths, highlight entries in the
                  first screen;
                </P>
              </div>
            </div>

            <P medium>Structural Plan</P>
            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <div className="flex flex-wrap gap-4">
                <Phone src={`${IMG}/img45.png`} alt="BG baseline" className="w-[192px]" frame="entry-plan" />
                <Phone src={`${IMG}/img46.png`} alt="Plan 1" label="Plan 1" className="w-[192px]" frame="entry-plan" />
                <Phone src={`${IMG}/plan3.png`} alt="Plan 2" label="Plan 2" className="w-[192px]" frame="entry-plan" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <P medium>Plan 1 (Recommended)</P>
                <P>
                  Users land on the Trading Plaza by default. This page serves as the core
                  conversion scenario for new users, while retaining the original copy trading
                  and trading bot entries as independent business entries.
                </P>
                <Spacer />
                <P>Product Entry:</P>
                <P>
                  The page features high-volume product entries, such as: recommended traders for
                  copy trading, spot grid and Martingale strategies, etc.
                </P>
                <Spacer />
                <P>Design Philosophy:</P>
                <P>
                  1. As the core conversion scenario for new users, we need to refine and simplify
                  the displayed information and product entries as much as possible, highlight our
                  core conversion business/product entries, and de-emphasize secondary information
                  and features to avoid distractions
                </P>
                <P>2. Simplify navigation, reduce user thinking and decision-making costs</P>
                <P>3. Reduce options, lower user decision-making costs</P>
                <Spacer />
                <Highlight>Fields:</Highlight>
                <Highlight>Strategy: Backtest ROI, Number of users</Highlight>
                <Highlight>Copy Trading: ROI, Number of followers</Highlight>
                <Spacer />
                <P medium>Plan 2</P>
                <P>
                  Compared to Plan 1, integrates the Trading Bot structure, which can improve
                  screen efficiency, but relatively increases user learning + operational costs
                </P>
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <div className="flex flex-wrap gap-4">
                <Phone src={`${IMG}/plan3.png`} alt="Plan 3" className="w-[295px]" frame="plan" />
                <Phone src={`${IMG}/structure-diagram.png`} alt="Structure diagram" className="w-[295px]" frame="plan" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <P medium>Other Plans:</P>
                <P>
                  Simplify secondary navigation by placing trading bot and copy trading under one
                  tab, reducing product structural complexity and thereby lowering user learning
                  costs.
                </P>
                <Spacer />
                <P>User Segmentation:</P>
                <P>
                  Popular - Primarily establishes new users&apos; overall product awareness, while
                  also carrying users&apos; first conversion task
                </P>
                <Spacer />
                <P>
                  Copy trading and trading bot as independent business entries, providing entry
                  points for existing users or those who want to explore the business in depth
                </P>
                <Spacer />
                <P>Total Assets:</P>
                <P>
                  A single entry point for users to quickly track assets and orders, integrating
                  copy trading + strategies + trading bot, providing unified management of orders
                  and assets, avoiding scattered business entries that are hard to find while
                  increasing product complexity
                </P>
              </div>
            </div>
          </div>

          {/* Visual Hierarchy + Flow */}
          <div className="flex w-full flex-col gap-6">
            <SectionTitle>Visual Hierarchy + Flow</SectionTitle>
            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <div className="flex flex-wrap gap-4">
                <Phone src={`${IMG}/visual-01.png`} alt="Visual hierarchy 1" className="w-[142px]" frame="visual" />
                <Phone src={`${IMG}/visual-02.png`} alt="Visual hierarchy 2" className="w-[142px]" frame="visual" />
                <Phone src={`${IMG}/visual-03.png`} alt="Visual hierarchy 3" className="w-[142px]" frame="visual" />
                <Phone src={`${IMG}/visual-04.png`} alt="Visual hierarchy 4" className="w-[142px]" frame="visual" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <P medium>Analysis:</P>
                <P>1. Visual hierarchy quantity ratio (BG/OKX/BN/Bybit) - 5:3:2:3</P>
                <P>
                  2. OKX/BN/Bybit achieved relative consistency in page structure and visual flow,
                  BG is slightly more complex with lower page usability than competitors
                </P>
                <Spacer />
                <P medium>Page Optimization Points:</P>
                <P>1. Simplify visual hierarchy;</P>
                <P>2. Simplify page structure, improve usability;</P>
              </div>
            </div>

            <P medium>Plan</P>
            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <div className="flex flex-wrap gap-4">
                <Phone src={`${IMG}/img46.png`} alt="Plan 1 Vertical" className="w-[304px]" frame="plan-large" />
                <Phone src={`${IMG}/plan-horizontal.png`} alt="Plan 2 Horizontal" className="w-[304px]" frame="plan-large" />
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <P>Plan 1:</P>
                <P>Vertical</P>
                <Spacer />
                <P>Plan 2:</P>
                <P>Horizontal</P>
                <Spacer />
                <P>Simplify Visual Hierarchy:</P>
                <P>Module grading, font styles, colors</P>
              </div>
            </div>

            <P medium>Plan</P>
            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <div className="flex flex-wrap gap-4">
                <Phone src={`${IMG}/img46.png`} alt="Plan 1 Vertical b" className="w-[304px]" frame="plan-large" />
                <Phone src={`${IMG}/plan-horizontal.png`} alt="Plan 2 Horizontal b" className="w-[304px]" frame="plan-large" />
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <P>Plan 1:</P>
                <P>Vertical</P>
                <Spacer />
                <P>Plan 2:</P>
                <P>Horizontal</P>
                <Spacer />
                <P>Simplify Visual Hierarchy:</P>
                <P>Module grading, font styles, colors</P>
              </div>
            </div>
          </div>

          {/* User comprehension */}
          <div className="flex w-full flex-col gap-6">
            <SectionTitle>
              User comprehension &amp; learning cost = User decision cost = User conversion
            </SectionTitle>
            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <div className="flex flex-wrap gap-2">
                <Phone src={`${IMG}/img45.png`} alt="BG" label="BG" className="w-[148px]" frame="compact" />
                <Phone src={`${IMG}/okx.png`} alt="OKX" label="OKX" className="w-[148px]" frame="compact" />
                <Phone src={`${IMG}/bn.png`} alt="BN" label="BN" className="w-[148px]" frame="compact" />
                <Phone src={`${IMG}/bybit.png`} alt="Bybit" label="Bybit" className="w-[148px]" frame="compact" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <P medium>BG:</P>
                <P>No obvious conversion entry</P>
                <Spacer />
                <P medium>OKX:</P>
                <P>Conversion entry + User decision information display</P>
                <P>Highlight: Beginner users can understand</P>
                <Spacer />
                <P medium>BN:</P>
                <P>Modules + User decision information display + Guidance</P>
                <P>Has some learning cost</P>
                <Spacer />
                <P medium>Bybit:</P>
                <P>Modules + User decision information display + Guidance</P>
                <P>Has some learning cost</P>
              </div>
            </div>
          </div>

          {/* Conversion Path Analysis */}
          <div className="flex w-full flex-col gap-6">
            <SectionTitle>User AI Strategy Conversion Path Analysis</SectionTitle>
            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <div className="flex min-w-0 flex-col gap-1.5">
                <WideImg src={`${IMG}/path-okx.png`} alt="OKX conversion path" />
                <p className="text-center text-[16px] font-semibold text-paper-ink">OKX</p>
              </div>
              <div className="flex min-w-0 flex-col gap-1.5 lg:max-w-[340px]">
                <P medium>OKX: 3 steps</P>
                <P medium>BN: 2 steps</P>
                <P medium>BG: 4 steps</P>
                <Spacer />
                <P medium>Analysis:</P>
                <P>
                  Compared to other platforms, BG&apos;s first-screen order conversion path is long
                  with high learning and operational costs, making it difficult for new users. In
                  comparison, OKX is relatively friendlier in new user education and guidance.
                </P>
                <Spacer />
                <P medium>To do:</P>
                <P>
                  1. Optimize first-screen content, simplify page interactions, improve business
                  field effectiveness.
                </P>
                <P>2. Shorten the user&apos;s order conversion path.</P>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <WideImg src={`${IMG}/path-bn.png`} alt="BN conversion path" className="max-w-[600px]" />
              <p className="max-w-[600px] text-center text-[16px] font-semibold text-paper-ink">BN</p>
            </div>
            <div className="flex flex-col gap-4">
              <WideImg src={`${IMG}/path-bg.png`} alt="BG conversion path" className="max-w-[600px]" />
              <p className="max-w-[600px] text-center text-[16px] font-semibold text-paper-ink">BG</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
