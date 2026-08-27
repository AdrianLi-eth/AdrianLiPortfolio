import {
  BodyStack,
  P,
  Section,
  SubTitle,
  WideImg,
} from '../project/ProjectShared'

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
        <div className="text-[14px] font-normal leading-[1.65] text-paper-dim [font-family:'Noto_Sans_SC',sans-serif]">
          {description}
        </div>
      </div>
      <div className="min-w-0 overflow-hidden p-4">{images}</div>
    </div>
  )
}

function DescParagraph({ children }: { children: React.ReactNode }) {
  return <p className="mb-0 leading-[1.65] last:mb-0">{children}</p>
}

function ImageGroup({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex min-w-0 flex-wrap items-start gap-3 ${className}`}>
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
    <div
      className="overflow-hidden rounded-lg bg-surface-2"
      style={{ flexBasis: basis, maxWidth: basis }}
    >
      <img
        src={src}
        alt={alt}
        className="h-auto w-full object-contain"
        style={{ maxHeight }}
      />
    </div>
  )
}

export default function SimplifyDesignPrinciplePageZh() {
  return (
    <div className="min-h-screen bg-bg pb-28 sm:pb-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <article className="flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="px-4 pb-4 text-[36px] font-bold leading-[1.4] text-paper-ink sm:px-0">
            简化设计原则
          </h1>

          <Section>
            <SubTitle>2024 Q1-2 产品体验关键用户反馈</SubTitle>
            <WideImg
              src={`${IMG}/feedback-overview.png`}
              alt="用户反馈概览词云"
            />
            <P medium>用户反馈三大主题：</P>
            <BodyStack>
              <P>
                1. 页面布局复杂，信息展示不清晰，图表与菜单设计不便等。
              </P>
              <P>
                2. 内容密度过高影响可读性；对新手不友好；用户希望界面更清晰、简洁、直观
              </P>
              <P>
                3. 用户建议改进配色与视觉效果，提升对比度、可读性与舒适度
              </P>
            </BodyStack>
            <P medium>优化方向：简洁、直观与高效</P>
          </Section>

          <Section title="我们可以从哪开始">
            <div className="flex w-full flex-col border border-line">
              <TableRow
                title="简化界面与视觉内容"
                description={
                  <>
                    <DescParagraph>
                      移除页面中所有不必要的视觉装饰元素，确保设计清晰直接。每个元素都应有明确目的，避免冗余装饰与复杂性。
                    </DescParagraph>
                    <DescParagraph>示例：</DescParagraph>
                    <DescParagraph>
                      1. 移除容器卡片阴影与加密货币切换器阴影效果，减少视觉层级，使界面更扁平
                    </DescParagraph>
                    <DescParagraph>
                      2. 弱化视频教程视觉引导，精简核心功能区域交互
                    </DescParagraph>
                  </>
                }
                images={
                  <ImageGroup>
                    <RowImage
                      src={`${IMG}/row1-01.png`}
                      alt="优化前：带装饰元素的界面"
                      maxHeight={588}
                      basis="48%"
                    />
                    <RowImage
                      src={`${IMG}/row1-02.png`}
                      alt="优化后：简化的扁平界面"
                      maxHeight={588}
                      basis="48%"
                    />
                  </ImageGroup>
                }
              />

              <TableRow
                title="识别核心用户需求"
                description={
                  <>
                    <DescParagraph>
                      确定页面哪些部分是核心功能/内容，哪些是辅助或次要内容。视觉上突出关键元素，弱化辅助或次要功能/内容。
                    </DescParagraph>
                    <DescParagraph>示例：</DescParagraph>
                    <DescParagraph>
                      页面功能/内容优先级：支付方式选择 &gt; 支付信息 &gt; 报价对比
                      &gt; 充值/换卡
                    </DescParagraph>
                    <DescParagraph>
                      1. 核心功能是支付方式选择——视觉上强调各支付方式名称，并加强支付方式交互的视觉提示
                    </DescParagraph>
                    <DescParagraph>
                      2. 为帮助用户对比报价，整理右侧信息以便更直观地对比
                    </DescParagraph>
                    <DescParagraph>
                      3. 移除「查看更多」功能；未选中时显示缩略图，选中后自动展开，减少页面功能
                    </DescParagraph>
                  </>
                }
                images={
                  <ImageGroup>
                    <RowImage
                      src={`${IMG}/row2-01.png`}
                      alt="优化前：支付方式选择"
                      maxHeight={588}
                      basis="48%"
                    />
                    <RowImage
                      src={`${IMG}/row2-02.png`}
                      alt="优化后：突出核心支付方式"
                      maxHeight={588}
                      basis="48%"
                    />
                  </ImageGroup>
                }
              />

              <TableRow
                title="隐藏高级功能"
                description={
                  <>
                    <DescParagraph>
                      对于不常用的功能，将其隐藏在子菜单或设置中，仅在需要时展示。这样既能保留功能，又不会增加界面复杂度。
                    </DescParagraph>
                    <DescParagraph>示例：</DescParagraph>
                    <DescParagraph>
                      1. 隐藏未选中支付方式的次要功能，如卡支付的换卡/管理、余额购买的充值功能、P2P
                      支付渠道等。
                    </DescParagraph>
                  </>
                }
                images={
                  <ImageGroup>
                    <RowImage
                      src={`${IMG}/row2-01.png`}
                      alt="支付方式步骤 1"
                      maxHeight={307}
                      basis="24%"
                    />
                    <RowImage
                      src={`${IMG}/row3-02.png`}
                      alt="支付方式步骤 2"
                      maxHeight={307}
                      basis="24%"
                    />
                    <RowImage
                      src={`${IMG}/row3-03.png`}
                      alt="支付方式步骤 3"
                      maxHeight={307}
                      basis="24%"
                    />
                    <RowImage
                      src={`${IMG}/row3-04.png`}
                      alt="支付方式步骤 4"
                      maxHeight={307}
                      basis="24%"
                    />
                  </ImageGroup>
                }
              />

              <TableRow
                title="减少视觉层级"
                description={
                  <>
                    <DescParagraph>
                      减少视觉层级可以提升界面的简洁度与易用性，帮助用户更轻松地获取所需信息。
                    </DescParagraph>
                    <DescParagraph>示例：</DescParagraph>
                    <DescParagraph>
                      1. 从 8 种字体样式简化为 4 种
                    </DescParagraph>
                    <DescParagraph>
                      2. 移除标签颜色，使用单色图标，弱化添加卡片按钮，移除支付选项背景色
                    </DescParagraph>
                    <DescParagraph>
                      3. 从 6 层视觉层级简化为 2 层
                    </DescParagraph>
                    <DescParagraph>
                      4. 减少嵌套或多层内容呈现，让用户快速获取重要信息。优先展示关键信息；次要信息可通过折叠区域或标签页呈现。
                    </DescParagraph>
                  </>
                }
                images={
                  <ImageGroup>
                    <RowImage
                      src={`${IMG}/row2-01.png`}
                      alt="优化前：复杂视觉层级"
                      maxHeight={588}
                      basis="48%"
                    />
                    <RowImage
                      src={`${IMG}/row4-02.png`}
                      alt="优化后：减少视觉层级"
                      maxHeight={588}
                      basis="48%"
                    />
                  </ImageGroup>
                }
              />

              <TableRow
                title="自动化与智能化"
                description={
                  <>
                    <DescParagraph>
                      尽可能自动化用户操作，减少手动输入与繁琐步骤。例如使用智能自动填充、建议功能等，帮助用户更快地完成任务。
                    </DescParagraph>
                    <DescParagraph>示例：</DescParagraph>
                    <DescParagraph>
                      1. 移除邮箱/手机注册方式切换——根据用户输入格式自动识别注册方式，减少用户操作与点击次数
                    </DescParagraph>
                  </>
                }
                images={
                  <ImageGroup>
                    <RowImage
                      src={`${IMG}/row5-01.png`}
                      alt="注册流程优化前"
                      maxHeight={246}
                      basis="58%"
                    />
                    <RowImage
                      src={`${IMG}/row5-02.png`}
                      alt="注册流程优化后"
                      maxHeight={246}
                      basis="38%"
                    />
                  </ImageGroup>
                }
              />

              <TableRow
                title="优先用户体验"
                description={
                  <>
                    <DescParagraph>
                      设计应围绕用户展开。通过用户研究与测试了解其习惯与痛点，确保设计简洁易用。减少点击与操作步骤，优化工作流。
                    </DescParagraph>
                    <DescParagraph>
                      研究发现，在卡购买加密货币场景中，少于 15%
                      的用户使用第三方卡支付方式——绝大多数用户直接使用信用卡支付。
                    </DescParagraph>
                    <DescParagraph>示例：</DescParagraph>
                    <DescParagraph>
                      1. 从卡购买流程中移除支付方式选择步骤；作为非必要步骤，在订单页以支付信息形式展示，缩短下单流程
                    </DescParagraph>
                    <DescParagraph>
                      2. 弱化添加卡片功能；添加卡片入口不再始终展示
                    </DescParagraph>
                  </>
                }
                images={
                  <ImageGroup>
                    <RowImage
                      src={`${IMG}/row6-01.png`}
                      alt="购买流程步骤 1"
                      maxHeight={248}
                      basis="23%"
                    />
                    <RowImage
                      src={`${IMG}/row6-02.png`}
                      alt="购买流程步骤 2"
                      maxHeight={248}
                      basis="23%"
                    />
                    <RowImage
                      src={`${IMG}/row6-03.png`}
                      alt="购买流程步骤 3"
                      maxHeight={248}
                      basis="23%"
                    />
                    <RowImage
                      src={`${IMG}/row6-04.png`}
                      alt="购买流程步骤 4"
                      maxHeight={248}
                      basis="23%"
                    />
                  </ImageGroup>
                }
              />
            </div>
          </Section>
        </article>
      </div>
    </div>
  )
}
