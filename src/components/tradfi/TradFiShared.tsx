import type { ReactNode } from 'react'

const IMG = '/media/tradfi-trading-ux'

export { IMG }

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[24px] font-medium leading-[1.4] tracking-[-0.3px] text-paper-ink [font-family:'Noto_Sans_SC',sans-serif]">
      {children}
    </h2>
  )
}

export function SubTitle({ children }: { children: ReactNode }) {
  return (
    <p className="text-[20px] font-medium leading-[1.4] tracking-[-0.3px] text-paper-ink [font-family:'Noto_Sans_SC',sans-serif]">
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
      className={`leading-[1.7] text-paper-dim [font-family:'Noto_Sans_SC',sans-serif] ${
        small ? 'text-[12px]' : 'text-[15px]'
      } ${medium ? 'font-medium text-paper-ink' : 'font-normal'}`}
    >
      {children}
    </p>
  )
}

export function NumberedItem({
  index,
  children,
}: {
  index: number
  children: ReactNode
}) {
  return (
    <div className="flex gap-[22px]">
      <span className="shrink-0 text-[15px] leading-[1.7] text-paper-ink">{index}.</span>
      <div className="min-w-0 flex-1 text-[15px] leading-[1.7] text-paper-dim">{children}</div>
    </div>
  )
}

export function Hr() {
  return <hr className="border-0 border-t border-line" />
}

export function ImgRow({
  images,
  className = '',
}: {
  images: { src: string; alt: string; className?: string }[]
  className?: string
}) {
  return (
    <div className={`flex min-w-0 flex-wrap gap-3 ${className}`}>
      {images.map((img) => (
        <div
          key={img.src}
          className={`overflow-hidden bg-surface-2 ${img.className ?? 'w-[142px]'}`}
        >
          <img src={img.src} alt={img.alt} className="h-auto w-full object-cover object-top" />
        </div>
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
    <div className={`overflow-hidden bg-surface-2 ${className}`}>
      <img src={src} alt={alt} className="h-auto w-full object-contain" />
    </div>
  )
}

export function HighlightBox({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[rgba(251,191,188,0.15)] p-1">
      <p className="text-[15px] font-normal leading-[1.7] text-[#ff8a80] [font-family:'Noto_Sans_SC',sans-serif]">
        {children}
      </p>
    </div>
  )
}
