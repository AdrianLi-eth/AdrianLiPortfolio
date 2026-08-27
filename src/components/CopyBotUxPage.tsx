import type { ReactNode } from 'react'

import {
  BodyStack,
  Caption,
  HighlightBox,
  ImgRow,
  P,
  PhoneFrameRow,
  Section,
  SubTitle,
  WideImg,
} from './project/ProjectShared'

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
      <div className={`overflow-hidden rounded-lg bg-surface-2 ${frameClass}`}>
        <img
          src={src}
          alt={alt}
          className={`w-full object-cover object-top ${frameClass ? 'h-full' : 'h-auto'}`}
        />
      </div>
      {label && (
        <p className="text-[13px] font-medium leading-[1.6] text-paper-dim [font-family:'Noto_Sans_SC',sans-serif]">
          {label}
        </p>
      )}
    </div>
  )
}

function TextImageSplit({
  media,
  children,
}: {
  media: ReactNode
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      <div className="shrink-0">{media}</div>
      <div className="min-w-0 flex-1">
        <BodyStack>{children}</BodyStack>
      </div>
    </div>
  )
}

export default function CopyBotUxPage() {
  return (
    <div className="min-h-screen bg-bg pb-28 sm:pb-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <article className="flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="px-4 pb-4 text-[36px] font-bold leading-[1.4] text-paper-ink sm:px-0">
            Copy+Bot UX Optimization
          </h1>

          <Section title="Objective">
            <P>
              Reduce users&apos; comprehension cost for copy trading strategies, lower the
              cognitive burden of the primary entry point, and improve the completion rate of
              strategy conversion paths.
            </P>
          </Section>

          <Section title="Optimization Dimensions">
            <BodyStack>
              <P>1. Structural Layer - Navigation / Business Modules / Display Order / Interaction Paths</P>
              <P>2. Module Information</P>
            </BodyStack>
          </Section>

          <Section title="Structural Plan">
            <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start">
              <div className="grid w-full shrink-0 grid-cols-2 gap-4 sm:max-w-[520px]">
                <Phone src={`${IMG}/img45.png`} alt="Current state" frame="plan" />
                <Phone src={`${IMG}/img46.png`} alt="Plan 1" label="Plan 1" frame="plan" />
                <Phone src={`${IMG}/plan2.png`} alt="Plan 2" label="Plan 2" frame="plan" />
                <Phone src={`${IMG}/plan3.png`} alt="Plan 3" label="Plan 3" frame="plan" />
              </div>

              <BodyStack>
                <P medium>User Pain Points:</P>
                <P>1. Don&apos;t know what to do or what to look at</P>
                <P>2. All text and modules, high learning and comprehension cost</P>
                <P medium>Plan 1 (Recommended)</P>
                <P>
                  Users land on the Trading Plaza by default. This page serves as the core
                  conversion scenario for new users, while retaining the original copy trading
                  and trading bot entries as independent business entries.
                </P>
                <P>Product Entry:</P>
                <P>
                  The page features high-volume product entries, such as: recommended traders for
                  copy trading, spot grid and Martingale strategies, etc.
                </P>
                <P>Design Philosophy:</P>
                <P>
                  1. As the core conversion scenario for new users, we need to refine and simplify
                  the displayed information and product entries as much as possible, highlight our
                  core conversion business/product entries, and de-emphasize secondary information
                  and features to avoid distractions
                </P>
                <P>2. Simplify navigation, reduce user thinking and decision-making costs</P>
                <P>3. Reduce options, lower user decision-making costs</P>
                <P medium>Plan 2</P>
                <P>
                  Compared to Plan 1, integrates the Trading Bot structure, which can improve screen
                  efficiency, but relatively increases user learning + operational costs
                </P>
                <P medium>Plan 3</P>
                <P>
                  Simplify secondary navigation by placing trading bot and copy trading under one
                  tab, reducing product structural complexity and thereby lowering user learning
                  costs.
                </P>
                <P>User Segmentation:</P>
                <P>
                  Popular - Primarily establishes new users&apos; overall product awareness, while
                  also carrying users&apos; first conversion task
                </P>
                <P>
                  Copy trading and trading bot as independent business entries, providing entry
                  points for existing users or those who want to explore the business in depth
                </P>
                <P>Total Assets:</P>
                <P>
                  A single entry point for users to quickly track assets and orders, integrating
                  copy trading + strategies + trading bot, providing unified management of orders
                  and assets, avoiding scattered business entries that are hard to find while
                  increasing product complexity
                </P>
              </BodyStack>
            </div>
          </Section>

          <Section title="Detailed Plans">
            <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="flex flex-col gap-3">
                <P medium>Strategy Dimension</P>
                <Phone src={`${IMG}/strategy-dimension.png`} alt="Strategy Dimension" frame="plan" />
              </div>
              <div className="flex flex-col gap-3">
                <P medium>Currency Dimension</P>
                <Phone src={`${IMG}/currency-a.png`} alt="Currency Dimension A" frame="plan" />
              </div>
              <div className="flex flex-col gap-3">
                <P medium>Currency Dimension</P>
                <Phone src={`${IMG}/currency-b.png`} alt="Currency Dimension B" frame="plan" />
              </div>
              <div className="flex flex-col gap-3">
                <P medium>Investment Type</P>
                <Phone src={`${IMG}/investment-type.png`} alt="Investment Type" frame="plan" />
              </div>
            </div>
          </Section>

          <Section title="Level 1 Entry Analysis (The first business page users reach)">
            <TextImageSplit
              media={
                <ImgRow
                  images={[
                    { src: `${IMG}/img45.png`, alt: 'BG', className: 'w-[138px]' },
                    { src: `${IMG}/okx.png`, alt: 'OKX', className: 'w-[138px]' },
                    { src: `${IMG}/bn.png`, alt: 'BN', className: 'w-[138px]' },
                    { src: `${IMG}/bybit.png`, alt: 'Bybit', className: 'w-[138px]' },
                  ]}
                />
              }
            >
              <P medium>User Pain Points:</P>
              <P>1. Don&apos;t know what to do or what to look at</P>
              <P>2. All text and modules, high learning and comprehension cost</P>
              <P>OKX/BN/Bybit all have primary button guidance in the first screen,</P>
              <P>OKX: Guides users to create AI strategies</P>
              <P>BN: Guides users to copy trading</P>
              <P>Bybit: Event participation + pre-market trading</P>
              <P medium>Page Optimization Points:</P>
              <P>
                Highlight the page&apos;s core product features, de-emphasize secondary features
                and information, reduce user distractions;
              </P>
              <P medium>To do:</P>
              <P>
                Analyze online new users&apos; main conversion paths, highlight entries in the
                first screen;
              </P>
            </TextImageSplit>

            <div className="flex flex-col gap-8 pt-4">
              <SubTitle>Structural Plan</SubTitle>
              <TextImageSplit
                media={
                  <div className="flex flex-wrap gap-3">
                    <Phone src={`${IMG}/img45.png`} alt="BG baseline" className="w-[192px]" frame="entry-plan" />
                    <Phone src={`${IMG}/img46.png`} alt="Plan 1" label="Plan 1" className="w-[192px]" frame="entry-plan" />
                    <Phone src={`${IMG}/plan3.png`} alt="Plan 2" label="Plan 2" className="w-[192px]" frame="entry-plan" />
                  </div>
                }
              >
                <P medium>Plan 1 (Recommended)</P>
                <P>
                  Users land on the Trading Plaza by default. This page serves as the core
                  conversion scenario for new users, while retaining the original copy trading
                  and trading bot entries as independent business entries.
                </P>
                <P>Product Entry:</P>
                <P>
                  The page features high-volume product entries, such as: recommended traders for
                  copy trading, spot grid and Martingale strategies, etc.
                </P>
                <P>Design Philosophy:</P>
                <P>
                  1. As the core conversion scenario for new users, we need to refine and simplify
                  the displayed information and product entries as much as possible, highlight our
                  core conversion business/product entries, and de-emphasize secondary information
                  and features to avoid distractions
                </P>
                <P>2. Simplify navigation, reduce user thinking and decision-making costs</P>
                <P>3. Reduce options, lower user decision-making costs</P>
                <HighlightBox>Fields:</HighlightBox>
                <HighlightBox>Strategy: Backtest ROI, Number of users</HighlightBox>
                <HighlightBox>Copy Trading: ROI, Number of followers</HighlightBox>
                <P medium>Plan 2</P>
                <P>
                  Compared to Plan 1, integrates the Trading Bot structure, which can improve
                  screen efficiency, but relatively increases user learning + operational costs
                </P>
              </TextImageSplit>

              <TextImageSplit
                media={
                  <div className="flex flex-wrap gap-3">
                    <Phone src={`${IMG}/plan3.png`} alt="Plan 3" className="w-[295px]" frame="plan" />
                    <Phone src={`${IMG}/structure-diagram.png`} alt="Structure diagram" className="w-[295px]" frame="plan" />
                  </div>
                }
              >
                <P medium>Other Plans:</P>
                <P>
                  Simplify secondary navigation by placing trading bot and copy trading under one
                  tab, reducing product structural complexity and thereby lowering user learning
                  costs.
                </P>
                <P>User Segmentation:</P>
                <P>
                  Popular - Primarily establishes new users&apos; overall product awareness, while
                  also carrying users&apos; first conversion task
                </P>
                <P>
                  Copy trading and trading bot as independent business entries, providing entry
                  points for existing users or those who want to explore the business in depth
                </P>
                <P>Total Assets:</P>
                <P>
                  A single entry point for users to quickly track assets and orders, integrating
                  copy trading + strategies + trading bot, providing unified management of orders
                  and assets, avoiding scattered business entries that are hard to find while
                  increasing product complexity
                </P>
              </TextImageSplit>
            </div>
          </Section>

          <Section title="Visual Hierarchy + Flow">
            <TextImageSplit
              media={
                <ImgRow
                  images={[
                    { src: `${IMG}/visual-01.png`, alt: 'Visual hierarchy 1', className: 'w-[142px]' },
                    { src: `${IMG}/visual-02.png`, alt: 'Visual hierarchy 2', className: 'w-[142px]' },
                    { src: `${IMG}/visual-03.png`, alt: 'Visual hierarchy 3', className: 'w-[142px]' },
                    { src: `${IMG}/visual-04.png`, alt: 'Visual hierarchy 4', className: 'w-[142px]' },
                  ]}
                />
              }
            >
              <P medium>Analysis:</P>
              <P>1. Visual hierarchy quantity ratio (BG/OKX/BN/Bybit) - 5:3:2:3</P>
              <P>
                2. OKX/BN/Bybit achieved relative consistency in page structure and visual flow,
                BG is slightly more complex with lower page usability than competitors
              </P>
              <P medium>Page Optimization Points:</P>
              <P>1. Simplify visual hierarchy;</P>
              <P>2. Simplify page structure, improve usability;</P>
            </TextImageSplit>

            <div className="flex flex-col gap-8 pt-4">
              <TextImageSplit
                media={
                  <div className="flex flex-wrap gap-3">
                    <Phone src={`${IMG}/img46.png`} alt="Plan 1 Vertical" className="w-[304px]" frame="plan-large" />
                    <Phone src={`${IMG}/plan-horizontal.png`} alt="Plan 2 Horizontal" className="w-[304px]" frame="plan-large" />
                  </div>
                }
              >
                <SubTitle>Plan</SubTitle>
                <P>Plan 1: Vertical</P>
                <P>Plan 2: Horizontal</P>
                <P>Simplify Visual Hierarchy: Module grading, font styles, colors</P>
              </TextImageSplit>

              <TextImageSplit
                media={
                  <div className="flex flex-wrap gap-3">
                    <Phone src={`${IMG}/img46.png`} alt="Plan 1 Vertical b" className="w-[304px]" frame="plan-large" />
                    <Phone src={`${IMG}/plan-horizontal.png`} alt="Plan 2 Horizontal b" className="w-[304px]" frame="plan-large" />
                  </div>
                }
              >
                <SubTitle>Plan</SubTitle>
                <P>Plan 1: Vertical</P>
                <P>Plan 2: Horizontal</P>
                <P>Simplify Visual Hierarchy: Module grading, font styles, colors</P>
              </TextImageSplit>
            </div>
          </Section>

          <Section title="User comprehension & learning cost = User decision cost = User conversion">
            <TextImageSplit
              media={
                <ImgRow
                  images={[
                    { src: `${IMG}/img45.png`, alt: 'BG', className: 'w-[148px]' },
                    { src: `${IMG}/okx.png`, alt: 'OKX', className: 'w-[148px]' },
                    { src: `${IMG}/bn.png`, alt: 'BN', className: 'w-[148px]' },
                    { src: `${IMG}/bybit.png`, alt: 'Bybit', className: 'w-[148px]' },
                  ]}
                />
              }
            >
              <P medium>BG:</P>
              <P>No obvious conversion entry</P>
              <P medium>OKX:</P>
              <P>Conversion entry + User decision information display</P>
              <P>Highlight: Beginner users can understand</P>
              <P medium>BN:</P>
              <P>Modules + User decision information display + Guidance</P>
              <P>Has some learning cost</P>
              <P medium>Bybit:</P>
              <P>Modules + User decision information display + Guidance</P>
              <P>Has some learning cost</P>
            </TextImageSplit>
          </Section>

          <Section title="User AI Strategy Conversion Path Analysis">
            <div className="flex flex-col gap-8">
              <div className="min-w-0">
                <div className="overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
                  <PhoneFrameRow
                    frames={[
                      { src: `${IMG}/path-okx-step-1.png`, alt: 'OKX conversion step 1' },
                      { src: `${IMG}/path-okx-step-2.png`, alt: 'OKX conversion step 2' },
                      { src: `${IMG}/path-okx-step-3.png`, alt: 'OKX conversion step 3' },
                    ]}
                  />
                </div>
                <Caption>OKX</Caption>
              </div>

              <BodyStack>
                <P medium>OKX: 3 steps</P>
                <P medium>BN: 2 steps</P>
                <P medium>BG: 4 steps</P>
                <P medium>Analysis:</P>
                <P>
                  Compared to other platforms, BG&apos;s first-screen order conversion path is long
                  with high learning and operational costs, making it difficult for new users. In
                  comparison, OKX is relatively friendlier in new user education and guidance.
                </P>
                <P medium>To do:</P>
                <P>
                  1. Optimize first-screen content, simplify page interactions, improve business
                  field effectiveness.
                </P>
                <P>2. Shorten the user&apos;s order conversion path.</P>
              </BodyStack>

              <div className="flex flex-col gap-3">
                <WideImg src={`${IMG}/path-bn.png`} alt="BN conversion path" className="max-w-[435px]" />
                <Caption>BN</Caption>
              </div>

              <div className="flex flex-col gap-3">
                <WideImg src={`${IMG}/path-bg.png`} alt="BG conversion path" className="max-w-[600px]" />
                <Caption>BG</Caption>
              </div>
            </div>
          </Section>
        </article>
      </div>
    </div>
  )
}
