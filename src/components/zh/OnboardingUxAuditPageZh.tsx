import type { ReactNode } from 'react'

import { P, Section, SubTitle } from '../project/ProjectShared'

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
            <span className="font-bold text-paper-ink">设计思路：</span> {approaches[0]}
          </p>
        ) : (
          <>
            <p className="font-bold text-paper-ink">设计思路：</p>
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
    title: '视觉一致性',
    problem:
      '各产品线视觉语言尚未完全统一——这容易让用户困惑，也会削弱品牌感知。我们的设计方向：简洁、扁平、高效。',
    approaches: [
      '去除阴影与卡片式容器，减少视觉层级，消除干扰——让页面更干净、更高效',
    ],
  },
  {
    title: '可用性',
    problem:
      '页面信息量和功能过多，复杂布局提高了用户使用门槛，也增加了产品使用成本。',
    approaches: [
      '在视觉上优先突出核心功能；对信息进行分类与排序，避免堆叠。聚焦主要任务，弱化次要细节——帮助用户保持专注',
      '尽量减少单页密集交互。对于复杂任务，使用智能默认值减少步骤，提升可用性',
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
        <div className="w-[406px] shrink-0 p-4 text-[15px] font-bold text-paper-ink">洞察</div>
        <div className="min-w-0 flex-1 p-4 text-[15px] font-bold text-paper-ink">建议</div>
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
        <div className="flex-1 p-4 text-[15px] font-bold text-paper-ink">洞察</div>
        <div className="flex-1 p-4 text-[15px] font-bold text-paper-ink">建议</div>
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

export default function OnboardingUxAuditPageZh() {
  return (
    <div className="min-h-screen bg-bg pb-28 sm:pb-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <article className={`flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 ${FONT}`}>
          <h1 className="px-4 pb-4 text-[36px] font-bold leading-[1.4] text-paper-ink sm:px-0">
            注册、登录、法币与 KYC — 产品体验审计
          </h1>

          <Section title="1. 目标">
            <P>
              解决法币交易体验不一致的问题，提升可用性与效率，最终提升转化率。
            </P>
          </Section>

          <Section title="2. 问题概览" className="gap-5">
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

          <Section title="3. 2024 Q2 — 产品 UI/UX 用户反馈">
            <ConstrainedImg src={`${IMG}/q2-feedback.png`} alt="2024 Q2 用户反馈" maxH="max-h-[280px]" />
          </Section>

          <Section title="4. 各业务线 UI 一致性" className="gap-5">

            <div className="flex flex-col gap-5">
              <SubTitle>结账</SubTitle>
              <PhoneRow>
                <Phone size="md" src={`${IMG}/checkout-01-card-buy.png`} alt="银行卡购买" label="银行卡购买" />
                <Phone size="md" src={`${IMG}/checkout-02-quick-buy.png`} alt="快捷购买" label="快捷购买" />
                <Phone
                  size="md"
                  src={`${IMG}/checkout-03-p2p-express.png`}
                  alt="P2P 快捷"
                  label="P2P 快捷"
                />
                <Phone
                  size="md"
                  src={`${IMG}/checkout-04-3rd-party-buy.png`}
                  alt="第三方购买"
                  label="第三方购买"
                />
                <Phone
                  size="md"
                  src={`${IMG}/checkout-05-cash-conversion.png`}
                  alt="现金兑换"
                  label="现金兑换"
                />
              </PhoneRow>
              <div className="w-full overflow-x-auto border border-line">
                <div className="flex min-w-[1040px]">
                  <AuditCell title="视觉一致性" className="w-[246px] shrink-0">
                    <p>1. 视觉风格不一致</p>
                    <p>2. 三种不同的主按钮样式</p>
                    <p>3. 两种不同的键盘样式</p>
                    <P medium>可用性</P>
                    <p>1. 视觉层级过于复杂、干扰过多——核心交互被淹没</p>
                    <p>2. 结账页功能与信息堆叠——交互不够直观</p>
                  </AuditCell>
                  <AuditCell title="影响：" className="w-[165px] shrink-0">
                    <p>
                      缺乏统一的视觉风格，用户难以建立清晰的品牌印象。碎片化的外观让各产品之间的体验显得割裂。
                    </p>
                    <p className="pt-2">
                      过于复杂的交互会掩盖核心功能，增加认知负担，损害产品效率与转化率。
                    </p>
                  </AuditCell>
                  <AuditCell title="建议：" className="min-w-0 flex-1">
                    <p>1. 统一各业务场景的视觉风格</p>
                    <p>2. 简化页面——减少视觉层级与干扰，突出核心功能</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <Phone
                        size="xs"
                        src={`${IMG}/checkout-rec-quick-card-buy.png`}
                        alt="快捷/银行卡购买"
                        label="快捷/银行卡购买"
                      />
                      <Phone
                        size="xs"
                        src={`${IMG}/checkout-rec-express-buy.png`}
                        alt="快捷购买"
                        label="快捷购买"
                      />
                      <Phone
                        size="xs"
                        src={`${IMG}/checkout-rec-cash-conversion.png`}
                        alt="现金兑换"
                        label="现金兑换"
                      />
                    </div>
                  </AuditCell>
                  <AuditCell title="时间线：" className="w-[216px] shrink-0">
                    <p>8 月 8 日上线 — 银行卡购买视觉焕新</p>
                    <p className="pt-2">
                      待评审 — 快捷购买 / P2P 快捷 / 现金兑换 / 第三方购买
                    </p>
                  </AuditCell>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <SubTitle>支付方式选择</SubTitle>
              <PhoneFrameRowLabeled
                items={[
                  { src: `${IMG}/payment-01-card-buy.png`, alt: '银行卡购买', label: '银行卡购买' },
                  {
                    src: `${IMG}/payment-02-have-card-card-buy.png`,
                    alt: '已有银行卡（银行卡购买）',
                    label: '已有银行卡（银行卡购买）',
                  },
                  { src: `${IMG}/payment-03-quick-buy.png`, alt: '快捷购买', label: '快捷购买' },
                  {
                    src: `${IMG}/payment-04-have-card-quick-buy.png`,
                    alt: '已有银行卡（快捷购买）',
                    label: '已有银行卡（快捷购买）',
                  },
                ]}
              />
              <div className="w-full overflow-x-auto border border-line">
                <div className="flex min-w-[1040px]">
                  <AuditCell title="视觉一致性" className="w-[396px] shrink-0">
                    <p>1. 两种不同的视觉风格</p>
                    <p>2. 两种不同的选择控件样式</p>
                    <P medium>可用性</P>
                    <p>1. 视觉层级过于复杂、干扰过多——核心交互被掩盖</p>
                    <p>2. 结账页功能与信息堆叠——交互不够直观</p>
                  </AuditCell>
                  <AuditCell title="建议：" className="min-w-0 flex-1">
                    <p>1. 统一视觉风格</p>
                    <p>
                      2. 简化页面——对信息进行分类，隐藏次要元素，突出核心功能与内容
                    </p>
                    <Phone
                      size="lg"
                      src={`${IMG}/payment-rec.png`}
                      alt="支付方式优化建议"
                      className="mt-3"
                    />
                  </AuditCell>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <SubTitle>订单确认</SubTitle>
              <PhoneRow>
                <Phone
                  size="lg"
                  src={`${IMG}/order-confirm-01-quick-buy.png`}
                  alt="快捷购买"
                  label="快捷购买"
                />
                <Phone
                  size="lg"
                  src={`${IMG}/order-confirm-02-card-buy.png`}
                  alt="银行卡购买"
                  label="银行卡购买"
                />
                <Phone
                  size="lg"
                  src={`${IMG}/order-confirm-03-cash-conversion.png`}
                  alt="现金兑换"
                  label="现金兑换"
                />
              </PhoneRow>
              <div className="w-full overflow-x-auto border border-line">
                <div className="flex min-w-[1040px]">
                  <AuditCell title="视觉一致性" className="w-[396px] shrink-0">
                    <p>1. 币对视觉呈现不一致</p>
                    <p>2. 同类信息使用不同视觉样式</p>
                    <p>3. 按钮文案规范不一致</p>
                    <p>4. 主按钮使用未标准化</p>
                    <P medium>可用性</P>
                    <p>1. 可读性较差</p>
                    <p>2. 视觉层级倒置——次要信息压过主要内容</p>
                  </AuditCell>
                  <AuditCell title="建议：" className="min-w-0 flex-1">
                    <p>1. 标准化币对的视觉呈现</p>
                    <p>2. 弱化次要元素，突出核心功能</p>
                  </AuditCell>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <SubTitle>订单完成</SubTitle>
              <PhoneRow>
                <Phone
                  size="md"
                  src={`${IMG}/order-complete-01-card-buy.png`}
                  alt="银行卡购买"
                  label="银行卡购买"
                />
                <Phone
                  size="md"
                  src={`${IMG}/order-complete-02-quick-buy.png`}
                  alt="快捷购买"
                  label="快捷购买"
                />
                <Phone
                  size="md"
                  src={`${IMG}/order-complete-03-cash-conversion.png`}
                  alt="现金兑换"
                  label="现金兑换"
                />
                <Phone
                  size="md"
                  src={`${IMG}/order-complete-04-bank-deposit.png`}
                  alt="银行充值"
                  label="银行充值"
                />
              </PhoneRow>
              <div className="w-full overflow-x-auto border border-line">
                <div className="flex min-w-[1040px]">
                  <AuditCell title="视觉一致性" className="w-[396px] shrink-0">
                    <p>1. 三种不同的「处理中」图标</p>
                    <p>2. 视觉风格不一致</p>
                    <P medium>可用性</P>
                    <p>1. 可读性较差</p>
                  </AuditCell>
                  <AuditCell title="建议：" className="min-w-0 flex-1">
                    <p>1. 标准化订单状态的视觉呈现</p>
                    <p>2. 统一视觉风格</p>
                    <p>3. 提升色彩对比度，改善可读性</p>
                  </AuditCell>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <SubTitle>交易历史</SubTitle>
              <PhoneFrameRowLabeled
                items={[
                  {
                    src: `${IMG}/history-01-quick-buy.png`,
                    alt: '快捷购买',
                    label: '快捷购买',
                  },
                  { src: `${IMG}/history-02-card-buy.png`, alt: '银行卡购买', label: '银行卡购买' },
                  {
                    src: `${IMG}/history-03-cash-conversion.png`,
                    alt: '现金兑换',
                    label: '现金兑换',
                  },
                ]}
              />
              <div className={`border border-line p-4 ${TABLE_BODY}`}>
                <SubTitle>建议：</SubTitle>
                <p>1. 简化页面——减少视觉层级</p>
                <p>
                  2. 优化页面结构，统一视觉阅读路径，减轻认知负担
                </p>
              </div>
            </div>
          </Section>

          <Section title="5. 银行充值">
            <PhoneRow>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <Phone
                  key={n}
                  size="sm"
                  src={`${IMG}/bank-0${n}.png`}
                  alt={`银行充值 ${n}`}
                />
              ))}
            </PhoneRow>
            <div className="flex flex-wrap gap-4">
              <Phone size="xl" src={`${IMG}/bank-09.png`} alt="银行充值流程" />
              <Phone size="md" src={`${IMG}/order-complete-04-bank-deposit.png`} alt="银行充值" />
            </div>
          </Section>

          <Section title="6. 注册与登录">
            <Quote>
              「哇，我最喜欢的球星梅西代言了——感觉很可信！还有 6,200 USDT 迎新奖励？太棒了！」
            </Quote>
            <DesktopImg src={`${IMG}/reg-login-01.png`} alt="注册落地页" />
            <InsightTable
              insights={
                <>
                  <p>1. 页面大量使用品牌色造成视觉干扰，分散注意力，削弱主按钮的吸引力</p>
                  <p>2. 两个主按钮并排——最佳实践建议避免这种情况</p>
                  <p>3. 多种主按钮样式稀释品牌识别度，降低产品感知</p>
                </>
              }
              suggestions={
                <>
                  <p>1. 减少视觉干扰——让产品功能与用途清晰呈现</p>
                  <p>2. 使用主按钮 + 次按钮层级；避免同级按钮并排</p>
                  <p>3. 标准化主按钮样式，或按场景定义清晰的使用规则</p>
                </>
              }
              insightImage={{ src: `${IMG}/reg-login-insight-02.png`, alt: 'CTA 样式' }}
              suggestionImage={{ src: `${IMG}/reg-login-suggest-03.png`, alt: '按钮层级' }}
            />
            <Quote>
              「屏幕突然变亮了。注册页信息好多——选邮箱或手机、创建密码、同意条款，然后点创建……」
            </Quote>
            <DesktopImg src={`${IMG}/reg-login-02.png`} alt="注册页" />
            <InsightTable
              insights={
                <>
                  <p>1. 交互流程略显复杂——存在一定学习成本</p>
                  <p>2. 左侧促销内容与右侧表单在视觉上相互竞争</p>
                  <p>3. 活动模块看起来不可点击</p>
                </>
              }
              suggestions={
                <>
                  <p>1. 重构页面结构，突出核心操作——帮助用户聚焦</p>
                  <p>2. 精简注册流程，提供更友好的注册体验</p>
                </>
              }
              suggestionImage={{ src: `${IMG}/reg-login-suggest-05.png`, alt: '注册流程' }}
            />
            <Quote>「密码创建提示很有帮助——细节不错」</Quote>
            <DesktopImg src={`${IMG}/reg-login-03.png`} alt="密码提示" />
            <Quote>
              「终于注册好了！接下来去验证身份……迎新奖励现在能领吗？」
            </Quote>
            <DesktopImg src={`${IMG}/reg-login-04.png`} alt="注册完成后" />
            <Highlight>亮点</Highlight>
            <P>
              1. 注册完成后引导用户进行身份验证，并友好提示沿途将解锁的权限
            </P>
          </Section>

          <Section title="7. KYC">
            <Quote>「内容好多——仔细看看都需要什么」</Quote>
            <DesktopImg src={`${IMG}/kyc-01.png`} alt="KYC 概览" />
            <InsightTable
              insights={<p>1. 信息过载给用户带来沉重的阅读负担</p>}
              suggestions={
                <>
                  <p>1. 可视化信息，降低学习成本</p>
                  <p>2. 对信息与用户任务进行分类与优先级排序，提升页面可用性</p>
                </>
              }
              suggestionImage={{ src: `${IMG}/kyc-suggest-02.png`, alt: 'KYC 可视化' }}
            />
            <Quote>「一步步选择——太简单了！」</Quote>
            <DesktopImg src={`${IMG}/kyc-02.png`} alt="KYC 步骤选择" />
            <Quote>
              「步骤指引很清晰——按说明填写信息就好」
            </Quote>
            <DesktopImg src={`${IMG}/kyc-03.png`} alt="KYC 表单" />
            <Quote>「按提示上传证件」</Quote>
            <DesktopImg src={`${IMG}/kyc-04.png`} alt="证件上传" />
            <DesktopImg src={`${IMG}/kyc-05.png`} alt="KYC 进度" />
            <Highlight>亮点</Highlight>
            <P>
              1. 友好的引导流程——用户清楚知道要做什么、如何完成
            </P>
            <Quote>
              「等等，我不是刚上传过身份证吗？为什么还要再传一次？」
            </Quote>
            <DesktopImg src={`${IMG}/kyc-06.png`} alt="重复上传" />
            <InsightTable
              insights={
                <p>1. 当前任务不清晰；插图传达效果不佳</p>
              }
              suggestions={
                <p>
                  1. 使用能准确传达含义的插图；添加清晰标题，说明当前步骤与任务
                </p>
              }
              suggestionImage={{ src: `${IMG}/kyc-suggest-06.png`, alt: 'KYC 插图' }}
            />
            <Quote>
              「验证都提交了——现在要等一小时。这段时间能做什么？」
            </Quote>
            <DesktopImg src={`${IMG}/kyc-07.png`} alt="验证审核中" />
            <Highlight>建议</Highlight>
            <P>1. 引导用户前往资产页，并完成安全设置</P>
          </Section>

          <Section title="8. 购买加密货币">
            <Quote>
              「验证通过了！该买币了。选项好多——信用卡听起来不错，试试这个」
            </Quote>
            <DesktopImg src={`${IMG}/buying-01.png`} alt="购买加密货币选项" />
            <InsightTableEqual
              insights={
                <p>
                  1. 买币作为一级入口同时展示 6 个选项——容易让用户不知所措，提高学习成本
                </p>
              }
              suggestions={
                <p>
                  1. 简化入口选项至不超过 4 个。结合用户量与转化数据排优先级。参考：Binance 0、OKX 4、Bybit 4、Kraken 0
                </p>
              }
            />
            <Quote>
              「买 100 欧元 USDT——大约 102 USDT。其实想正好买 100 USDT……等等，不能输入加密货币数量？」
            </Quote>
            <DesktopImg src={`${IMG}/buying-02.png`} alt="结账金额" />
            <InsightTableEqual
              insights={
                <>
                  <p>1. 用户无法通过指定加密货币数量购买</p>
                  <p>2. 结账模块在浅色与深色模式下样式不一致</p>
                </>
              }
              suggestions={
                <>
                  <p>1. 增加反向输入——允许用户输入加密货币数量</p>
                  <p>2. 统一视觉风格</p>
                </>
              }
              insightImage={{ src: `${IMG}/buying-insight-03.png`, alt: '结账样式' }}
            />
            <Quote>
              「得先添加银行卡。哦，还有 Google Pay 和 Apple Pay——先添加银行卡吧」
            </Quote>
            <DesktopImg src={`${IMG}/buying-03.png`} alt="添加银行卡" />
            <InsightTableEqual
              insights={
                <>
                  <p>1. 视觉风格与结账页不一致</p>
                  <p>2. 信息区块划分不清晰</p>
                  <p>3. 用户引导不够明确</p>
                </>
              }
              suggestions={
                <>
                  <p>1. 统一视觉风格</p>
                  <p>2. 将信息组织为清晰分类</p>
                  <p>3. 加强分步视觉引导</p>
                </>
              }
            />
            <Quote>「填写银行卡信息」</Quote>
            <DesktopImg src={`${IMG}/buying-04.png`} alt="银行卡详情" />
            <Quote>
              「嗯，没反应……怎么回事？哦——现在在问地址了」
            </Quote>
            <DesktopImg src={`${IMG}/buying-05.png`} alt="地址步骤" />
            <InsightTableEqual
              insights={
                <p>
                  1. 两个步骤视觉上过于相似，点击按钮后用户感觉「什么都没发生」
                </p>
              }
              suggestions={
                <p>
                  1. 在地址步骤移除银行卡插图，形成视觉对比，帮助用户感知步骤切换
                </p>
              }
            />
            <Quote>「银行卡添加成功！接下来做什么？」</Quote>
            <DesktopImg src={`${IMG}/buying-06.png`} alt="银行卡已添加" />
            <DesktopImg src={`${IMG}/buying-07.png`} alt="下一步引导" />
            <InsightTableEqual
              insights={<p>1. 缺少清晰的「下一步」视觉提示</p>}
              suggestions={
                <>
                  <p>1. 改善视觉层级，加强用户引导</p>
                  <p>2. 简化页面——聚焦当前任务</p>
                </>
              }
            />
            <Quote>
              「核对购买详情——看起来没问题，下单了」
            </Quote>
            <DesktopImg src={`${IMG}/buying-08.png`} alt="订单核对" />
            <DesktopImg src={`${IMG}/buying-09.png`} alt="下单" />
            <InsightTableEqual
              insights={<p>​</p>}
              suggestions={
                <>
                  <p>1. 标准化文本大小写规范</p>
                  <p>2. 简化页面，减少视觉干扰</p>
                </>
              }
            />
          </Section>

          <Section title="9. App 首页" className="gap-5">
            <SubTitle>首页</SubTitle>
            <PhoneRow>
              <Phone size="app" src={`${IMG}/home-01.png`} alt="首页 1" />
              <Phone size="app" src={`${IMG}/home-02.png`} alt="首页 2" />
              <Phone size="app" src={`${IMG}/home-03.png`} alt="首页 3" />
            </PhoneRow>
            <Highlight>亮点</Highlight>
            <P>1. 未登录首页用户引导清晰，任务优先级明确</P>
            <P>2. 6,200 USDT 迎新奖励是很有吸引力的钩子</P>
            <Highlight>不足</Highlight>
            <P>
              1. 新人活动插图与主题不匹配——用户难以快速理解营销信息，削弱注册转化推力
            </P>
            <P>
              2. 作为 App 首页，整体视觉风格缺乏一致性与品牌识别
            </P>
            <P>🤔</P>
            <P>
              六个快捷图标与轮播广告占去首屏一半。建议拉取该区块的转化数据——从简化与效率角度，
              这些内容可以弱化，让用户更聚焦注册。
            </P>
            <SubTitle>UX 问题与建议：</SubTitle>
            <P>
              1. 优化首页活动插图，让图像与文案讲述连贯故事
            </P>
            <P>
              2. 统一视觉语言——3D 插图风格与扁平极简的产品 UI（按钮、图标）冲突。注意图标一致性（线性与填充）、
              页面结构与整体品牌协调。可考虑将标签与图标分离
            </P>

            <SubTitle>注册 / 登录</SubTitle>
            <div className="flex flex-wrap gap-4">
              <Phone size="xl" src={`${IMG}/reg-login-app-01.png`} alt="App 注册" />
              <Phone size="xl" src={`${IMG}/reg-login-app-02.png`} alt="App 登录" />
            </div>
            <Highlight>亮点</Highlight>
            <P>1. 登录流程整体顺畅——无明显摩擦点</P>
            <Highlight>不足</Highlight>
            <P>
              1. 注册时系统未校验账号是否已存在。用户可进入邮箱验证步骤，但已有账号不会收到验证码——
              而「没收到验证码？」弹窗未说明这种情况
            </P>
            <P>
              2. 注册页使用超过 5 种字体样式（字号/颜色/字重），显得杂乱且不统一
            </P>
            <SubTitle>UX 问题与建议：</SubTitle>
            <P>
              1. 在注册页校验账号——若已注册，提示用户登录
            </P>
            <P>2. 简化页面，提升可用性与效率</P>
          </Section>
        </article>
      </div>
    </div>
  )
}
