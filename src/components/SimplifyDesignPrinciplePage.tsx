import BackToHome from './BackToHome'

const IMG = '/media/simplify-design-principle'

interface TableRowProps {
  title: string
  description: React.ReactNode
  images: React.ReactNode
}

function TableRow({ title, description, images }: TableRowProps) {
  return (
    <div className="grid w-full grid-cols-1 items-start border border-line lg:grid-cols-[18%_32%_1fr]">
      <div className="min-w-0 p-4">
        <p className="text-[16px] font-bold leading-6 text-paper-ink [font-family:'Noto_Sans_SC',sans-serif]">
          {title}
        </p>
      </div>
      <div className="min-w-0 p-4">
        <div className="text-[14px] font-normal leading-6 text-paper-dim [font-family:'Noto_Sans_SC',sans-serif]">
          {description}
        </div>
      </div>
      <div className="min-w-0 overflow-hidden p-4">{images}</div>
    </div>
  )
}

function DescParagraph({ children }: { children: React.ReactNode }) {
  return <p className="mb-0 leading-6 last:mb-0">{children}</p>
}

function ImageGroup({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex min-w-0 flex-wrap items-start gap-1 ${className}`}>
      {children}
    </div>
  )
}

function RowImage({
  src,
  alt,
  maxHeight,
  basis,
}: {
  src: string
  alt: string
  maxHeight: number
  basis: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-auto min-w-0 object-contain"
      style={{ maxHeight, flexBasis: basis, maxWidth: basis }}
    />
  )
}

export default function SimplifyDesignPrinciplePage() {
  return (
    <div className="min-h-screen bg-bg py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <BackToHome />

        <article className="flex w-full flex-col gap-12 border border-line bg-paper p-8 sm:gap-[48px] sm:p-16 [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="w-full text-[36px] font-bold leading-[48px] text-paper-ink">
            Simplify Design Principle
          </h1>

          <div className="flex w-full flex-col gap-6">
            <p className="text-[20px] font-bold leading-8 text-paper-ink">
              2024 Q1-2 Key User Feedback on Product Experience
            </p>
            <div className="relative w-full">
              <img
                src={`${IMG}/feedback-overview.png`}
                alt="User feedback overview word cloud"
                className="h-auto w-full object-contain"
              />
            </div>
            <p className="text-[15px] font-bold leading-6 text-paper-ink">
              Top 3 User Feedback Themes:
            </p>
            <div className="flex flex-col gap-2 text-[14px] font-normal leading-6 text-paper-dim">
              <p>
                1. Complex page layout, unclear information display, inconvenient
                chart and menu design, etc.
              </p>
              <p>
                2. Excessive content density affecting readability; not
                beginner-friendly; users want clearer, simpler, and more intuitive
                interfaces
              </p>
              <p>
                3. Users suggest improving colors and visual effects to enhance
                contrast, readability, and comfort
              </p>
            </div>
            <p className="text-[18px] font-bold leading-7 text-paper-ink">
              Optimization Direction: Simplicity, Intuitiveness, and Efficiency
            </p>
          </div>

          <p className="w-full text-[28px] font-bold leading-10 text-paper-ink">
            Where Can We Start
          </p>

          <div className="w-full">
            <div className="flex w-full flex-col border border-line">
              <TableRow
                title="Simplify Interface & Visual Content"
                description={
                  <>
                    <DescParagraph>
                      Remove all unnecessary visual decorative elements from the
                      page to ensure the design is clear and direct. Every element
                      should serve a clear purpose, avoiding redundant decoration
                      and complexity.
                    </DescParagraph>
                    <DescParagraph>Examples:</DescParagraph>
                    <DescParagraph>
                      1. Remove container card shadows and crypto switcher shadow
                      effects to reduce visual layers and make the interface
                      flatter
                    </DescParagraph>
                    <DescParagraph>
                      2. De-emphasize video tutorial visual guidance, streamline
                      core feature area interactions
                    </DescParagraph>
                  </>
                }
                images={
                  <ImageGroup>
                    <RowImage
                      src={`${IMG}/row1-01.png`}
                      alt="Before: interface with decorative elements"
                      maxHeight={588}
                      basis="48%"
                    />
                    <RowImage
                      src={`${IMG}/row1-02.png`}
                      alt="After: simplified flat interface"
                      maxHeight={588}
                      basis="48%"
                    />
                  </ImageGroup>
                }
              />

              <TableRow
                title="Identify Core User Needs"
                description={
                  <>
                    <DescParagraph>
                      Determine which parts of the page are core features/content
                      and which are supportive or secondary. Visually highlight key
                      elements while de-emphasizing supportive or secondary
                      features/content.
                    </DescParagraph>
                    <DescParagraph>Examples:</DescParagraph>
                    <DescParagraph>
                      Prioritize page features/content: Payment Method Selection
                      &gt; Payment Info &gt; Quote Comparison &gt; Top-up/Card
                      Change
                    </DescParagraph>
                    <DescParagraph>
                      1. The core feature is payment method selection — visually
                      emphasize each payment method name while strengthening visual
                      cues for payment method interactions
                    </DescParagraph>
                    <DescParagraph>
                      2. To help users compare quotes, clean up the right-side
                      information for more intuitive comparison
                    </DescParagraph>
                    <DescParagraph>
                      3. Remove the View More feature; show thumbnails when
                      unselected, auto-expand upon selection to reduce page
                      features
                    </DescParagraph>
                  </>
                }
                images={
                  <ImageGroup>
                    <RowImage
                      src={`${IMG}/row2-01.png`}
                      alt="Before: payment method selection"
                      maxHeight={588}
                      basis="48%"
                    />
                    <RowImage
                      src={`${IMG}/row2-02.png`}
                      alt="After: emphasized core payment methods"
                      maxHeight={588}
                      basis="48%"
                    />
                  </ImageGroup>
                }
              />

              <TableRow
                title="Hide Advanced Features"
                description={
                  <>
                    <DescParagraph>
                      For infrequently used features, hide them in sub-menus or
                      settings, displaying them only when needed. This preserves
                      functionality without adding interface complexity.
                    </DescParagraph>
                    <DescParagraph>Examples:</DescParagraph>
                    <DescParagraph>
                      1. Hide secondary features of unselected payment methods,
                      such as card payment&apos;s card change/management, balance
                      purchase&apos;s top-up feature, P2P payment channels, etc.
                    </DescParagraph>
                  </>
                }
                images={
                  <ImageGroup className="gap-[2px]">
                    <RowImage
                      src={`${IMG}/row2-01.png`}
                      alt="Payment method step 1"
                      maxHeight={307}
                      basis="24%"
                    />
                    <RowImage
                      src={`${IMG}/row3-02.png`}
                      alt="Payment method step 2"
                      maxHeight={307}
                      basis="24%"
                    />
                    <RowImage
                      src={`${IMG}/row3-03.png`}
                      alt="Payment method step 3"
                      maxHeight={307}
                      basis="24%"
                    />
                    <RowImage
                      src={`${IMG}/row3-04.png`}
                      alt="Payment method step 4"
                      maxHeight={307}
                      basis="24%"
                    />
                  </ImageGroup>
                }
              />

              <TableRow
                title="Reduce Visual Hierarchy Layers"
                description={
                  <>
                    <DescParagraph>
                      Reducing visual hierarchy layers can improve interface
                      simplicity and usability, helping users access needed
                      information more easily.
                    </DescParagraph>
                    <DescParagraph>Examples:</DescParagraph>
                    <DescParagraph>
                      1. Simplified from 8 font styles to 4 font styles
                    </DescParagraph>
                    <DescParagraph>
                      2. Remove label colors, use monochrome icons, de-emphasize
                      the add card button, remove payment option background colors
                    </DescParagraph>
                    <DescParagraph>
                      3. Simplified from 6 visual hierarchy layers to 2 visual
                      hierarchy layers
                    </DescParagraph>
                    <DescParagraph>
                      4. Reduce nested or multi-layered content presentation so
                      users can quickly access important information. Prioritize
                      key information; secondary information can be presented
                      through collapsible sections or tabs.
                    </DescParagraph>
                  </>
                }
                images={
                  <ImageGroup>
                    <RowImage
                      src={`${IMG}/row2-01.png`}
                      alt="Before: complex visual hierarchy"
                      maxHeight={588}
                      basis="48%"
                    />
                    <RowImage
                      src={`${IMG}/row4-02.png`}
                      alt="After: reduced visual hierarchy"
                      maxHeight={588}
                      basis="48%"
                    />
                  </ImageGroup>
                }
              />

              <TableRow
                title="Automation & Intelligence"
                description={
                  <>
                    <DescParagraph>
                      Automate user operations as much as possible, reducing manual
                      input and tedious steps. For example, use smart autofill,
                      suggestion features, etc. to help users complete tasks
                      faster.
                    </DescParagraph>
                    <DescParagraph>Examples:</DescParagraph>
                    <DescParagraph>
                      1. Remove the Email/Mobile registration method toggle —
                      automatically detect registration method based on user input
                      format, reducing user tasks and clicks
                    </DescParagraph>
                  </>
                }
                images={
                  <ImageGroup>
                    <RowImage
                      src={`${IMG}/row5-01.png`}
                      alt="Registration flow before"
                      maxHeight={246}
                      basis="58%"
                    />
                    <RowImage
                      src={`${IMG}/row5-02.png`}
                      alt="Registration flow after"
                      maxHeight={246}
                      basis="38%"
                    />
                  </ImageGroup>
                }
              />

              <TableRow
                title="Prioritize User Experience"
                description={
                  <>
                    <DescParagraph>
                      Design should revolve around users. Understand their habits
                      and pain points through user research and testing to ensure
                      the design is simple and easy to use. Reduce clicks and
                      operation steps, optimize workflows.
                    </DescParagraph>
                    <DescParagraph>
                      Research found that in card-based crypto purchases, fewer
                      than 15% of users use third-party card payment methods — the
                      vast majority pay directly with credit cards.
                    </DescParagraph>
                    <DescParagraph>Examples:</DescParagraph>
                    <DescParagraph>
                      1. Removed the payment method selection step from the card
                      purchase flow; as a non-essential step, it is displayed as
                      payment info on the order page, shortening the ordering
                      process
                    </DescParagraph>
                    <DescParagraph>
                      2. De-emphasize the add card feature; the add card entry is
                      not always displayed
                    </DescParagraph>
                  </>
                }
                images={
                  <ImageGroup className="gap-[10px]">
                    <RowImage
                      src={`${IMG}/row6-01.png`}
                      alt="Purchase flow step 1"
                      maxHeight={248}
                      basis="23%"
                    />
                    <RowImage
                      src={`${IMG}/row6-02.png`}
                      alt="Purchase flow step 2"
                      maxHeight={248}
                      basis="23%"
                    />
                    <RowImage
                      src={`${IMG}/row6-03.png`}
                      alt="Purchase flow step 3"
                      maxHeight={248}
                      basis="23%"
                    />
                    <RowImage
                      src={`${IMG}/row6-04.png`}
                      alt="Purchase flow step 4"
                      maxHeight={248}
                      basis="23%"
                    />
                  </ImageGroup>
                }
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
