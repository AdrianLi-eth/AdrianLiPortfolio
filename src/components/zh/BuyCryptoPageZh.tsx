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
} from '../project/ProjectShared'

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
      <BeforeAfterPhone label="Before" src="/media/Before.png" alt="改版前：输入金额" />
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
      <BeforeAfterPhone label="After" src="/media/After.png" alt="改版后：输入金额" />
    </div>
  )
}

function ChoosePaymentOptimized() {
  return (
    <div className="flex w-full min-w-0 flex-col gap-6 lg:flex-row lg:items-start">
      <BeforeAfterPhone
        label="Before"
        src="/media/OldPayment.png"
        alt="改版前：选择支付方式"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-4 pt-6 [font-family:'Noto_Sans_SC',sans-serif]">
        <p className="text-[14px] font-bold text-paper-ink">Optimized</p>
        <div className="flex flex-col gap-1.5">
          <p className="text-[12px] font-semibold text-paper-ink">UX:</p>
          <Bullet>老用户将 Pay with 设为可选步骤，缩短下单流程。</Bullet>
          <Bullet>每类支付最多展示 3 个选项，降低信息过载与决策成本。</Bullet>
          <Bullet>按支付类型分组，帮助用户更快做出选择。</Bullet>
          <Bullet>移除低优先级信息，页面更干净、聚焦。</Bullet>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-[12px] font-semibold text-paper-ink">UI:</p>
          <Bullet>调整选项样式，从视觉上突出单一主任务。</Bullet>
          <Bullet>减少字体样式与色彩数量，降低视觉噪音与层级。</Bullet>
        </div>
      </div>
      <BeforeAfterPhone
        label="After"
        src="/media/NewPayment.png"
        alt="改版后：底部弹层支付"
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
        <p className="text-[12px] font-semibold text-paper-ink">👍 优点</p>
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
        <p className="text-[12px] font-semibold text-paper-ink">👍 优点</p>
        {binanceGood.map((item) => (
          <Bullet key={item}>{item}</Bullet>
        ))}
        <p className="mt-1 text-[12px] font-semibold text-paper-ink">👎 不足</p>
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

export default function BuyCryptoPageZh() {
  return (
    <div className="min-h-screen bg-bg pb-28 sm:pb-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <article className="flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="px-4 pb-4 text-[36px] font-bold leading-[1.4] text-paper-ink sm:px-0">
            Binance - 买币 2.0
          </h1>

          <CaseIntro>
            <div className="flex flex-col gap-6">
              <IntroHeading>Overview</IntroHeading>
              <div className="flex flex-col gap-6">
                <IntroImpactItem title="Goal">
                  解决用户不知道如何下单、不敢下单的问题，从而提升下单转化率。
                </IntroImpactItem>
                <IntroImpactItem title="My role">
                  UX 研究员 · UI / UX 设计师
                </IntroImpactItem>
                <IntroImpactItem title="Challenge">
                  • 项目范围：20+ 个支付渠道，涉及 350+ 页面。
                  <br />
                  • 跨团队协作（产品、开发、设计系统团队、UIKit 开发）。
                </IntroImpactItem>
                <IntroMetrics
                  variant="cards"
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
            <P medium small>1. 收集用户反馈</P>
            <WideImg src={`${IMG}/user-feedback.png`} alt="用户反馈分类" />
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
            <P medium small>2. 优先级排序并归类用户痛点</P>
            <P small>
              我将这些反馈带入与产品、业务团队的讨论，按价值与影响优先级排序用户问题，
              确定下一版本要解决的问题。
            </P>
            <P medium small>3. 确定优化方向</P>
            <P small>
              最终，我们决定此次改版主要聚焦产品体验。根据用户反馈，我们集中在以下两个问题：
            </P>
            <div className="flex flex-col gap-1">
              <Bullet>用户不知道如何下单。</Bullet>
              <Bullet>用户不知道如何选择支付方式。</Bullet>
            </div>
          </Section>

          <Section title="User Journey Map">
            <P small>
              对首次购买加密货币（已身份验证）的用户在现有产品上做用户旅程图设计，找出用户在下单时候的卡点和痛点。
            </P>
            <WideImg
              src={`${IMG}/user-journey-map-en-3x.png`}
              alt="User Journey Map · Verified User Buy Crypto via Card Payment"
            />
            <P medium small>用户friction和痛点主要发生在：</P>
            <NumberedItem n={1}>
              <P small>
                页面层级与控件过多（买/卖、最小/最大、限额等），用户不知道如何下单，产生犹豫
              </P>
            </NumberedItem>
            <NumberedItem n={2}>
              <P small>页面信息堆叠，用户不敢操作和决策</P>
            </NumberedItem>
            <NumberedItem n={3}>
              <P small>
                支付方式信息过载，特别在支付选项多时，用户不知道如何选择支付方式
              </P>
            </NumberedItem>
          </Section>

          <Section title="竞品分析" className="gap-6">
            <SubTitle>Enter amount</SubTitle>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <BrandLabel>OKX</BrandLabel>
                <WideImg
                  src={`${IMG}/competitor-row1-left.png`}
                  alt="OKX 竞品分析"
                />
              </div>
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
                  'Simplify interface',
                  'Hide advanced settings',
                  'Reduce visual hierarchy',
                ]}
              />
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <BrandLabel>Binance</BrandLabel>
                <WideImg
                  src={`${IMG}/competitor-row1-right.png`}
                  alt="Binance 竞品分析"
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
                  alt="OKX 支付方式对比"
                />
              </div>
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
                  'Simplify interface',
                  'Hide advanced settings',
                  'Reduce visual hierarchy',
                ]}
              />
              <div className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <BrandLabel>Binance</BrandLabel>
                <WideImg
                  src="/media/OldPayment.png"
                  alt="Binance 支付方式对比"
                />
              </div>
            </div>
              <ChoosePaymentOptimized />
            </div>
          </Section>

          <Section title="设计验证" className="gap-6">
            <SubTitle>User survey</SubTitle>
            <P small>
              We conducted a user survey to see user&apos;s satisfaction of the new design and their
              feedbacks.
            </P>
            <div className="flex flex-col gap-6 sm:flex-row">
              <WideImg src={`${IMG}/survey-q1-left.png`} alt="问卷问题 1" className="flex-1" />
              <WideImg src={`${IMG}/survey-q1-right.png`} alt="问卷结果 1" className="flex-1" />
            </div>
            <div className="flex flex-col gap-4">
              <P small>
                研究显示，超过 80% 的用户更偏好新设计，因为页面视觉更清晰、交互更少，
                金额数字更大也更容易使用。
              </P>
              <WideImg src={`${IMG}/survey-visual.png`} alt="问卷视觉呈现" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2.5">
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
              <WideImg src={`${IMG}/survey-chart.png`} alt="问卷图表" />
            </div>
          </Section>

          <Section className="gap-6">
            <SubTitle>Data validation</SubTitle>
            <P small>
              我们还对比步骤转化率与订单成功率等用户数据：相较旧版，
              新设计步骤 1 至步骤 3 的转化率提升 48.34%，用户 CSAT 提升 3.8%，
              产品缺陷率下降 0.6%。
            </P>
            <WideImg src={`${IMG}/data-metrics.png`} alt="数据指标" />
          </Section>

          <Section title="项目挑战">
            <SubTitle>挑战</SubTitle>
            <div className="flex flex-col gap-1">
              <Bullet>项目范围：20+ 个法币买币渠道，涉及 350+ 页面。</Bullet>
              <Bullet>跨团队协作（产品、设计系统团队、UIKit 开发）。</Bullet>
            </div>
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

          <Section className="!gap-0 !px-0">
            <FinalUiGallery basePath={IMG} />
          </Section>
        </article>
      </div>
    </div>
  )
}
