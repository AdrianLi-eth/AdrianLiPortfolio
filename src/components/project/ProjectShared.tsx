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
    <h2 className={`text-[26px] font-bold leading-[1.4] text-paper-ink ${FONT}`}>
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
