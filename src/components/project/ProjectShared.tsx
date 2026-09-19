import type { ReactNode } from 'react'

const FONT = "[font-family:'Noto_Sans_SC',sans-serif]"

export function Section({
  title,
  children,
  className = '',
}: {
  title?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`flex flex-col gap-4 px-4 pt-12 sm:px-0 ${className}`}>
      {title ? <SectionTitle>{title}</SectionTitle> : null}
      {children}
    </section>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className={`text-[26px] font-bold uppercase leading-[1.4] text-paper-ink ${FONT}`}>
      {children}
    </h2>
  )
}

export function SubTitle({ children }: { children: ReactNode }) {
  return (
    <p className={`text-[19px] font-bold leading-[1.5] text-paper-ink ${FONT}`}>
      {children}
    </p>
  )
}

export function P({
  children,
  medium,
  small,
}: {
  children: ReactNode
  medium?: boolean
  small?: boolean
}) {
  return (
    <p
      className={`leading-[1.75] text-paper-dim ${FONT} ${
        small ? 'text-[13px] leading-[1.65]' : 'text-[15px]'
      } ${medium ? 'font-semibold text-paper-ink' : 'font-normal'}`}
    >
      {children}
    </p>
  )
}

export function BodyStack({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-3">{children}</div>
}

export function ImgRow({
  images,
  className = '',
  nowrap = false,
  rowHeight = 'h-[500px]',
}: {
  images: { src: string; alt: string; className?: string }[]
  className?: string
  nowrap?: boolean
  rowHeight?: string
}) {
  return (
    <div
      className={`flex min-w-0 gap-3 ${nowrap ? 'flex-nowrap items-stretch' : 'flex-wrap'} ${className}`}
    >
      {images.map((img) => (
        <div
          key={img.src}
          className={`overflow-hidden rounded-lg bg-surface-2 ${
            nowrap
              ? `flex min-w-0 flex-1 items-center justify-center ${rowHeight}`
              : (img.className ?? 'w-[142px]')
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className={
              nowrap
                ? 'max-h-full max-w-full object-contain'
                : 'h-auto w-full object-cover object-top'
            }
          />
        </div>
      ))}
    </div>
  )
}

export function PhoneFrameRow({
  frames,
  className = '',
  height = 'h-[533px]',
}: {
  frames: { src: string; alt: string }[]
  className?: string
  height?: string
}) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      {frames.map((frame) => (
        <img
          key={frame.src}
          src={frame.src}
          alt={frame.alt}
          className={`${height} w-auto shrink-0 rounded-lg bg-surface-2`}
        />
      ))}
    </div>
  )
}

export function WideImg({
  src,
  alt,
  className = '',
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={`overflow-hidden rounded-lg bg-surface-2 ${className}`}>
      <img src={src} alt={alt} className="h-auto w-full object-contain" />
    </div>
  )
}

export function HighlightBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg bg-[rgba(251,191,188,0.15)] px-3 py-2">
      <p className={`text-[15px] font-normal leading-[1.75] text-[#ff8a80] ${FONT}`}>
        {children}
      </p>
    </div>
  )
}

export function Caption({ children }: { children: ReactNode }) {
  return (
    <p className={`text-center text-[15px] font-semibold text-paper-ink ${FONT}`}>
      {children}
    </p>
  )
}

export function Tag({ children }: { children: string }) {
  return (
    <span className={`inline-flex h-[25px] items-center rounded-full bg-paper px-3 text-[12px] text-paper-dim ${FONT}`}>
      {children}
    </span>
  )
}

function FinalUiPhoneRow({
  frames,
}: {
  frames: { src: string; alt: string }[]
}) {
  return (
    <div className="flex w-full min-w-0 items-start gap-5">
      {frames.map((frame) => (
        <img
          key={frame.src}
          src={frame.src}
          alt={frame.alt}
          className="h-auto min-w-0 flex-1 object-contain"
        />
      ))}
    </div>
  )
}

export function FinalUiGallery({
  basePath,
  title = 'Final UI',
  darkLabel = 'Dark',
  lightLabel = 'Light',
  screenAlts = {
    enterAmount: 'enter amount',
    currencyList: 'currency list',
    payWith: 'pay with',
    addCard: 'add card',
    confirmOrder: 'confirm order',
    success: 'success',
  },
}: {
  basePath: string
  title?: string
  darkLabel?: string
  lightLabel?: string
  screenAlts?: {
    enterAmount: string
    currencyList: string
    payWith: string
    addCard: string
    confirmOrder: string
    success: string
  }
}) {
  const finalUiPath = `${basePath}/final-ui`

  const darkRow1 = [
    { src: '/media/After.png', alt: `${darkLabel} — ${screenAlts.enterAmount}` },
    { src: `${finalUiPath}/dark-currency-list.png`, alt: `${darkLabel} — ${screenAlts.currencyList}` },
    { src: '/media/NewPayment.png', alt: `${darkLabel} — ${screenAlts.payWith}` },
  ]

  const darkRow2 = [
    { src: `${finalUiPath}/dark-add-card.png`, alt: `${darkLabel} — ${screenAlts.addCard}` },
    { src: `${finalUiPath}/dark-confirm-order.png`, alt: `${darkLabel} — ${screenAlts.confirmOrder}` },
    { src: `${finalUiPath}/dark-success.png`, alt: `${darkLabel} — ${screenAlts.success}` },
  ]

  const lightRow1 = [
    { src: '/media/EnterAmount_L.png', alt: `${lightLabel} — ${screenAlts.enterAmount}` },
    { src: `${finalUiPath}/light-currency-list.png`, alt: `${lightLabel} — ${screenAlts.currencyList}` },
    { src: '/media/Payment_L.png', alt: `${lightLabel} — ${screenAlts.payWith}` },
  ]

  const lightRow2 = [
    { src: `${finalUiPath}/light-add-card.png`, alt: `${lightLabel} — ${screenAlts.addCard}` },
    { src: `${finalUiPath}/light-confirm-order.png`, alt: `${lightLabel} — ${screenAlts.confirmOrder}` },
    { src: `${finalUiPath}/light-success.png`, alt: `${lightLabel} — ${screenAlts.success}` },
  ]

  return (
    <div className={`flex min-w-0 flex-col gap-12 ${FONT}`}>
      <div className="flex flex-col gap-5">
        <SectionTitle>{title}</SectionTitle>
        <p className="text-[16px] font-bold leading-[1.55] text-paper-ink">{darkLabel}</p>
        <div className="flex flex-col gap-8">
          <FinalUiPhoneRow frames={darkRow1} />
          <FinalUiPhoneRow frames={darkRow2} />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <p className="text-[16px] font-bold leading-[1.55] text-paper-ink">{lightLabel}</p>
        <div className="flex flex-col gap-8">
          <FinalUiPhoneRow frames={lightRow1} />
          <FinalUiPhoneRow frames={lightRow2} />
        </div>
      </div>
    </div>
  )
}

export function BeforeAfterPhone({
  label,
  src,
  alt,
}: {
  label: string
  src: string
  alt: string
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2.5">
      <p className={`text-[14px] font-bold leading-[1.6] text-paper-ink opacity-50 ${FONT}`}>
        {label}
      </p>
      <img src={src} alt={alt} className="h-auto w-full object-contain" />
    </div>
  )
}

export function BeforeAfterCompare({
  rows,
}: {
  rows: { before: { src: string; alt: string }; after: { src: string; alt: string } }[]
}) {
  const phones = rows.flatMap((row) => [
    { label: 'Before' as const, ...row.before },
    { label: 'After' as const, ...row.after },
  ])

  return (
    <div className={`flex w-full min-w-0 items-end gap-5 ${FONT}`}>
      {phones.map((phone) => (
        <BeforeAfterPhone
          key={phone.src}
          label={phone.label}
          src={phone.src}
          alt={phone.alt}
        />
      ))}
    </div>
  )
}

export function CaseIntro({ children }: { children: ReactNode }) {
  return (
    <section className={`flex flex-col gap-10 px-4 sm:gap-12 sm:px-0 ${FONT}`}>
      {children}
    </section>
  )
}

export function IntroHeading({ children }: { children: ReactNode }) {
  return <SectionTitle>{children}</SectionTitle>
}

export function IntroRoleTags({ tags }: { tags: string[] }) {
  return (
    <p className={`text-[15px] font-normal leading-[1.75] text-paper-dim ${FONT}`}>
      {tags.join(' · ')}
    </p>
  )
}

export function IntroImpactItem({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${FONT}`}>
      <p className="text-[15px] font-bold leading-[1.6] text-paper-ink">{title}</p>
      <p className="text-[15px] font-normal leading-[1.75] text-paper-dim">{children}</p>
    </div>
  )
}

export function IntroMetrics({
  metrics,
  variant = 'default',
  className = '',
}: {
  metrics: { value: string; label: string }[]
  variant?: 'default' | 'cards'
  className?: string
}) {
  if (variant === 'cards') {
    return (
      <div
        className={`rounded-xl border border-line px-5 py-5 sm:px-7 sm:py-7 ${FONT} ${className}`}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`flex flex-col gap-2 ${
                i > 0
                  ? 'border-t border-line pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8'
                  : 'sm:pr-8'
              }`}
            >
              <p className="bg-gradient-to-r from-accent to-[#6ecfc8] bg-clip-text text-[34px] font-bold leading-[1.1] text-transparent sm:text-[40px]">
                {metric.value}
              </p>
              <p className="text-[13px] font-normal leading-[1.55] text-paper-dim sm:text-[15px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col gap-8 sm:flex-row sm:gap-0 ${FONT} ${className}`}>
      {metrics.map((metric, i) => (
        <div
          key={metric.label}
          className={`flex flex-1 flex-col gap-2 ${
            i > 0
              ? 'border-t border-line pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-10'
              : 'sm:pr-10'
          }`}
        >
          <p className="bg-gradient-to-r from-accent to-[#6ecfc8] bg-clip-text text-[40px] font-bold leading-[1.1] text-transparent sm:text-[44px]">
            {metric.value}
          </p>
          <p className="max-w-[220px] text-[14px] font-normal leading-[1.6] text-paper-dim">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  )
}

export function HighlightCard({
  title,
  children,
  tags,
}: {
  title: string
  children: ReactNode
  tags?: string[]
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3.5 rounded-2xl bg-surface-2 px-6 py-6 sm:px-8 sm:py-7">
      <p className={`text-[20px] font-bold leading-[1.4] text-paper-ink sm:text-[22px] ${FONT}`}>
        {title}
      </p>
      <div className={`flex flex-col gap-3 text-[15px] leading-[1.75] text-paper-dim ${FONT}`}>
        {children}
      </div>
      {tags && (
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
    </div>
  )
}

export function NumberedItem({
  n,
  children,
}: {
  n: number | string
  children: ReactNode
}) {
  return (
    <div className="flex gap-2">
      <span className={`w-5 shrink-0 text-[15px] font-semibold leading-[1.75] text-paper-ink ${FONT}`}>
        {n}.
      </span>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}
