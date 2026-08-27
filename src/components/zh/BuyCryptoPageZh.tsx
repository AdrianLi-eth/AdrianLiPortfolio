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
} from '../project/ProjectShared'

const IMG = '/media/buy-crypto'

const ROLE_TAGS = ['产品研究', '用户体验研究', '数据驱动', '用户体验 / 界面设计'] as const

const UI_PREVIEW_ROWS = [
  {
    before: {
      src: `${IMG}/old-enter-amount.png`,
      alt: '改版前：输入金额页面',
    },
    after: {
      src: `${IMG}/new-enter-amount.png`,
      alt: '改版后：输入金额页面',
    },
  },
  {
    before: {
      src: `${IMG}/old-payment.png`,
      alt: '改版前：选择支付方式页面',
    },
    after: {
      src: `${IMG}/new-payment.png`,
      alt: '改版后：底部弹层支付页面',
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
  '明确需求',
  '设计研究',
  '概念设计与测试',
  '高保真设计',
  '设计质量保障',
  '设计验证',
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
      <p className="text-[29px] font-bold text-paper-ink">标题 48px</p>
      <p className="text-[11px]">主标题/副标题 18px</p>
      <p className="text-[10px]">副标题 16px</p>
      <p className="text-[9px]">小标题 14px</p>
      <p className="text-[7px]">正文 12px</p>
    </div>
  )
}

function TypographyNew() {
  return (
    <div className="flex flex-col items-center gap-1 text-paper-dim">
      <p className="text-[11px]">副标题 16px</p>
      <p className="text-[10px]">小标题 14px</p>
      <p className="text-[9px]">正文 12px</p>
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
      <p className="text-[12px] font-semibold text-paper-ink">👍 优点</p>
      {okxGood.map((item) => (
        <Bullet key={item}>{item}</Bullet>
      ))}
      <p className="text-[14px] font-bold text-paper-ink">Binance</p>
      <p className="text-[12px] font-semibold text-paper-ink">👍 优点</p>
      {binanceGood.map((item) => (
        <Bullet key={item}>{item}</Bullet>
      ))}
      <p className="text-[12px] font-semibold text-paper-ink">👎 不足</p>
      {binanceBad.map((item) => (
        <Bullet key={item}>{item}</Bullet>
      ))}
      <p className="text-[14px] font-bold text-paper-ink">洞察</p>
      {insights.map((item) => (
        <Bullet key={item}>{item}</Bullet>
      ))}
    </div>
  )
}

export default function BuyCryptoPageZh() {
  return (
    <div className="min-h-screen bg-bg pb-28 sm:pb-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <article className="flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="px-4 pb-4 text-[36px] font-bold leading-[1.4] text-paper-ink sm:px-0">
            Binance - 买币 2.0
          </h1>

          <CaseIntro>
            <div className="flex flex-col gap-2">
              <IntroHeading>我的角色</IntroHeading>
              <IntroRoleTags tags={[...ROLE_TAGS]} />
            </div>

            <div className="flex flex-col gap-6">
              <IntroHeading>成果</IntroHeading>
              <div className="flex flex-col gap-6">
                <IntroImpactItem title="重新定义项目范围">
                  在 20+ 个法币买币渠道、350+ 页面中优先落地 MVP，通过清晰的版本管控 SOP，
                  对齐产品、设计系统与 UIKit 团队。
                </IntroImpactItem>
                <IntroImpactItem title="厘清核心任务流程">
                  去除过重的视觉层级、冗余 CTA 与不统一的字体规范，降低用户完成买币流程的摩擦。
                </IntroImpactItem>
                <IntroImpactItem title="以数据验证设计决策">
                  收集用户反馈，开展竞品对标（OKX、Binance、Bybit、Coinbase、Kraken），
                  并分析输入金额页热力图，指导高保真设计与 QA。
                </IntroImpactItem>
              </div>
            </div>

            <IntroMetrics
              metrics={[
                {
                  value: '+48.34%',
                  label: '相较旧版，步骤 1→3 转化率提升',
                },
                {
                  value: '+3.8%',
                  label: '上线后用户满意度（CSAT）提升',
                },
                {
                  value: '−0.6%',
                  label: '产品缺陷率下降',
                },
              ]}
            />
          </CaseIntro>

          <Section className="min-w-0 gap-5">
            <div className="flex min-w-0 flex-col gap-5">
              <h2 className="text-[32px] font-bold leading-[1.3] text-paper-ink">界面设计</h2>
              <p className="text-[12px] font-normal leading-[1.6] text-paper-dim">
                文末展示更多最终交付界面，此处仅呈现主要改动的 UI。
              </p>
              <BeforeAfterCompare rows={[...UI_PREVIEW_ROWS]} />
            </div>
          </Section>

          <Section title="设计流程">
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
              明确需求
            </P>
            <P small>
              我们从社交媒体（Telegram / Twitter / App Store / Google Play）及客服工单池收集用户反馈，
              了解当前产品使用中的问题与痛点。反馈主要集中在交易手续费、交易失败等方面。
              我将用户反馈按不同类别进行归纳整理。
            </P>
            <div className="flex flex-col gap-1">
              <Bullet>投诉（手续费、交易时长、KYC 等）</Bullet>
              <Bullet>产品体验</Bullet>
              <Bullet>新功能需求</Bullet>
              <Bullet>交易问题</Bullet>
            </div>
            <P small>
              我将这些反馈带入与产品、业务团队的讨论，按价值与影响优先级排序用户问题，
              确定下一版本要解决的问题。
            </P>
            <WideImg src={`${IMG}/user-feedback.png`} alt="用户反馈分类" />
          </Section>

          <Section>
            <SubTitle>设计研究</SubTitle>
            <P small>
              开展竞品研究，分析 OKX、Bybit、Coinbase 与 Kraken 的买币 UI/UX，
              梳理其优劣。绘制用户旅程地图，识别流程中的摩擦点，寻找产品机会与改进方向。
              基于研究发现进行讨论，投票选出前三项功能与改进方向，进入概念设计阶段。
            </P>
            <P small>三项核心改进为：</P>
            <NumberedItem n={1}>
              <P small>移除页面中低交互价值的功能</P>
            </NumberedItem>
            <NumberedItem n={2}>
              <P small>降低页面 UI 层级</P>
            </NumberedItem>
            <NumberedItem n={3}>
              <P small>将输入金额步骤与选择支付方式步骤合并为一步</P>
            </NumberedItem>
          </Section>

          <Section>
            <SubTitle>概念设计与测试</SubTitle>
            <P small>
              基于研究结果设计多版方案，在内部对其他设计师与 PM 进行早期设计测试，
              收集反馈并持续打磨设计。
            </P>
            <SubTitle>设计文档</SubTitle>
            <P small>
              交付符合设计交付标准的高保真设计稿与 UX 文档，确保 PM 与开发准确理解设计意图。
            </P>
            <SubTitle>设计质量保障</SubTitle>
            <P small>
              在上线前于各类 UX 场景与 UI 状态下测试产品，缩小设计与实际产品之间的差距。
            </P>
            <SubTitle>设计验证</SubTitle>
            <P small>
              上线后发放用户问卷，跟踪产品数据（订单成功率、步骤转化率与 CSAT），
              持续关注用户反馈并迭代产品。
            </P>
          </Section>

          <Section title="项目挑战">
            <SubTitle>挑战</SubTitle>
            <NumberedItem n={1}>
              <P small>项目范围：20+ 个法币买币渠道，涉及 350+ 页面。</P>
            </NumberedItem>
            <NumberedItem n={2}>
              <P small>跨团队协作（产品、设计系统团队、UIKit 开发）。</P>
            </NumberedItem>
            <SubTitle>我的做法</SubTitle>
            <NumberedItem n={1}>
              <P small>版本管控</P>
            </NumberedItem>
            <div className="pl-6">
              <Bullet>Phase I — MVP：核心流程与页面</Bullet>
              <Bullet>Phase II — 渠道更新</Bullet>
              <Bullet>Phase III — 其他</Bullet>
            </div>
            <P small>
              与产品团队定义 MVP 范围，再与设计系统及 UIKit 开发协作推进所需 UI 组件。
              我们决定首批上线输入金额、选择支付方式、确认订单与结果页，
              因其对现有产品影响最大，且不会过度占用各团队资源。
            </P>
            <NumberedItem n={2}>
              <P small>项目协作机制</P>
            </NumberedItem>
            <P small>
              组织启动会议，介绍项目背景与所需支持，确认各团队对接人，
              制定项目时间线与交付计划。定期召开跨团队同步会议，更新进度与状态，跟踪潜在风险。
            </P>
          </Section>

          <Section title="研究详情">
            <SubTitle>内部研究</SubTitle>
            <NumberedItem n={1}>
              <P small>
                产品用户数据，包括订单成功率、各步骤转化率、页面停留时长等。
              </P>
            </NumberedItem>
            <NumberedItem n={2}>
              <P small>用户旅程地图，定位用户痛点与潜在改进方向。</P>
            </NumberedItem>
            <NumberedItem n={3}>
              <P small>各步骤中用户与产品的交互行为。</P>
            </NumberedItem>
            <SubTitle>外部研究</SubTitle>
            <NumberedItem n={1}>
              <P small>
                行业前五交易所买币产品 UI/UX，以 OKX 为代表。
                输出产品 UI/UX 报告，与产品团队共同制定改进计划。
              </P>
            </NumberedItem>
            <NumberedItem n={2}>
              <P small>
                用户反馈分析。通过用户反馈系统汇总内部问卷与社交媒体
                （Twitter、Telegram、App Store、Google Play 等）的用户评论与建议。
              </P>
            </NumberedItem>
          </Section>

          <Section title="竞品分析（基础）" className="gap-6">
            <div className="flex flex-col gap-6 lg:flex-row">
              <WideImg
                src={`${IMG}/competitor-row1-left.png`}
                alt="OKX 竞品分析"
                className="min-w-0 flex-1"
              />
              <CompetitorText
                okxGood={[
                  'OKX 视觉简洁，功能界面清晰。',
                  '单一 CTA 与大字号数字帮助用户聚焦任务，',
                  '高对比度色彩使可交互元素更突出。',
                ]}
                binanceGood={['配置项更丰富，适配更多用户类型']}
                binanceBad={[
                  'CTA 过多，核心任务不清晰',
                  '字号与字体类型过多，UI 层级过重，可用性较差',
                ]}
                insights={[
                  '移除低价值、低交互功能',
                  '减少 CTA 数量',
                  '减少字体样式种类',
                ]}
              />
              <WideImg
                src={`${IMG}/competitor-row1-right.png`}
                alt="Binance 竞品分析"
                className="min-w-0 flex-1"
              />
            </div>
            <P small>
              尽管 Binance 提供报价信息，可能有助于用户决策，OKX 的阅读路径更简洁，自上而下。
              Binance 更偏左右布局，可读性略逊。
            </P>
            <P small>
              洞察：简化视觉动线，让核心信息更醒目。
            </P>
            <div className="flex flex-col gap-6 lg:flex-row">
              <WideImg
                src={`${IMG}/competitor-row2-left.png`}
                alt="OKX 支付方式对比"
                className="min-w-0 flex-1"
              />
              <CompetitorText
                okxGood={[
                  '线性阅读路径，页面可读性佳',
                  '行动号召（CTA）体验清晰',
                ]}
                binanceGood={[
                  '支付方式附带报价，可能帮助用户决策',
                ]}
                binanceBad={[
                  '选项增多时界面易显杂乱',
                  '可用性一般，理解成本较高',
                  '字号与字体类型过多，UI 层级过重',
                ]}
                insights={[
                  '按类型归类支付方式',
                  '移除低价值、低交互功能',
                  '减少页面信息量，优化到账设计',
                  '减少字体样式种类',
                ]}
              />
              <WideImg
                src={`${IMG}/competitor-row2-right.png`}
                alt="Binance 支付方式对比"
                className="min-w-0 flex-1"
              />
            </div>
          </Section>

          <Section className="gap-6">
            <div className="flex flex-col gap-6 lg:flex-row">
              <WideImg
                src={`${IMG}/user-behaviour-left.png`}
                alt="用户行为热力图"
                className="min-w-0 flex-1"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <SubTitle>用户行为</SubTitle>
                <P small>
                  此外，我们分析各页面的用户行为，以输入金额 UI 为例。
                </P>
                <P small>
                  统计页面点击次数并计算点击率，生成热力图以可视化用户行为。
                </P>
                <P small>
                  尽管我们为「单次购买」提供了较明显的视觉引导，其点击率仍低于其他选项（&gt;15%）；
                  相比之下，用户进入页面后更倾向点击「最小」购买量。
                </P>
                <P small medium>潜在改进方向：</P>
                <P small>
                  基于点击数据简化页面功能，突出最常用/核心功能，让用户聚焦关键内容；
                  隐藏或替换低点击功能，缩短用户决策时间。
                </P>
                <P small>
                  降低页面视觉层级，减少字体类型与色彩使用，提升产品效率。
                </P>
              </div>
              <WideImg
                src={`${IMG}/user-behaviour-right.png`}
                alt="用户行为点击分布"
                className="min-w-0 flex-1"
              />
            </div>
          </Section>

          <Section title="设计升级方向" className="gap-6">
            <P small>分析完成后，我们收敛至以下关键方向：</P>
            <Bullet>降低页面 UI 层级，让用户聚焦核心功能与内容。</Bullet>
            <Bullet>移除相关性较低的功能。</Bullet>
            <Bullet>减少下单步骤，提升产品效率。</Bullet>

            {/* Compare row 1 - Enter amount */}
            <div className="flex flex-col gap-6 pt-6 lg:flex-row">
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <CompareTag label="旧版" variant="old" />
                <WideImg src={`${IMG}/old-enter-amount.png`} alt="旧版输入金额" />
                <TypographyOld />
                <ColorSwatches colors={OLD_COLORS} />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-4 pt-10">
                <div>
                  <p className="text-[14px] font-semibold text-paper-ink">UI</p>
                  <NumberedItem n={1}>
                    <P small>通过减少色彩与字体类型，降低 UI 层级。</P>
                  </NumberedItem>
                  <NumberedItem n={2}>
                    <P small>突出金额数字，引导视觉焦点。</P>
                  </NumberedItem>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-paper-ink">UX</p>
                  <NumberedItem n={1}>
                    <P small>将 CTA 移至更易触达的位置。</P>
                  </NumberedItem>
                  <NumberedItem n={2}>
                    <P small>减少同一功能的重复入口。</P>
                  </NumberedItem>
                  <NumberedItem n={3}>
                    <P small>移除使用率较低的「最大」功能。</P>
                  </NumberedItem>
                  <NumberedItem n={4}>
                    <P small>优化买/卖切换交互，使其更直观。</P>
                  </NumberedItem>
                  <NumberedItem n={5}>
                    <P small>合并步骤，提升下单效率。</P>
                  </NumberedItem>
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <CompareTag label="新版" variant="new" />
                <WideImg src={`${IMG}/new-enter-amount.png`} alt="新版输入金额" />
                <TypographyNew />
                <ColorSwatches colors={NEW_COLORS} />
              </div>
            </div>

            {/* Compare row 2 - Payment */}
            <div className="flex flex-col gap-6 pt-12 lg:flex-row">
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <CompareTag label="旧版" variant="old" />
                <WideImg src={`${IMG}/old-payment.png`} alt="旧版支付方式" />
                <TypographyOld />
                <ColorSwatches colors={OLD_COLORS} />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-4 pt-10">
                <div>
                  <p className="text-[14px] font-semibold text-paper-ink">UI</p>
                  <NumberedItem n={1}>
                    <P small>降低视觉噪音，保持支付方式列表简洁、易扫读。</P>
                  </NumberedItem>
                  <NumberedItem n={2}>
                    <P small>使用清晰的图标，加快识别速度。</P>
                  </NumberedItem>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-paper-ink">UX</p>
                  <NumberedItem n={1}>
                    <P small>为新用户突出推荐/默认支付方式。</P>
                  </NumberedItem>
                  <NumberedItem n={2}>
                    <P small>减少切换支付方式所需步骤。</P>
                  </NumberedItem>
                  <NumberedItem n={3}>
                    <P small>在流程更早阶段展示支付方式限额与手续费。</P>
                  </NumberedItem>
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <CompareTag label="新版" variant="new" />
                <WideImg src={`${IMG}/new-payment.png`} alt="新版支付方式" />
                <TypographyNew />
                <ColorSwatches colors={NEW_COLORS} />
              </div>
            </div>
          </Section>

          <Section title="简化用户流程">
            <div className="flex flex-wrap items-center gap-4">
              {[
                { label: '输入金额' },
                { label: '选择支付方式', sub: '（新用户）', dashed: true },
                { label: '确认订单' },
                { label: '交易完成' },
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

          <Section title="设计验证" className="gap-6">
            <P small>
              我们开展用户问卷，了解用户对新设计的满意度与反馈。
            </P>
            <div className="flex flex-col gap-6 sm:flex-row">
              <WideImg src={`${IMG}/survey-q1-left.png`} alt="问卷问题 1" className="flex-1" />
              <WideImg src={`${IMG}/survey-q1-right.png`} alt="问卷结果 1" className="flex-1" />
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
              <WideImg src={`${IMG}/survey-visual.png`} alt="问卷视觉呈现" className="flex-1" />
              <div className="w-full max-w-[300px] shrink-0">
                <P small>
                  研究显示，超过 80% 的用户更偏好新设计，因为页面视觉更清晰、交互更少，
                  金额数字更大也更容易使用。
                </P>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
              <WideImg src={`${IMG}/survey-chart.png`} alt="问卷图表" className="flex-1" />
              <div className="flex w-full max-w-[300px] shrink-0 flex-col gap-2.5">
                <P small>
                  部分用户表示，支付方式前置让产品更易使用。
                </P>
                <P small>
                  偏好旧版的用户表示，已习惯旧版的外观与交互，包括最小/最大等功能。
                </P>
                <P small>
                  无偏好的用户则希望增加加密货币与法币切换等功能。
                </P>
              </div>
            </div>
          </Section>

          <Section>
            <P small>
              我们还对比步骤转化率与订单成功率等用户数据：相较旧版，
              新设计步骤 1 至步骤 3 的转化率提升 48.34%，用户 CSAT 提升 3.8%，
              产品缺陷率下降 0.6%。
            </P>
            <WideImg src={`${IMG}/data-metrics.png`} alt="数据指标" />
          </Section>

          <Section className="!gap-0 !px-0">
            <FinalUiGallery basePath={IMG} />
          </Section>
        </article>
      </div>
    </div>
  )
}
