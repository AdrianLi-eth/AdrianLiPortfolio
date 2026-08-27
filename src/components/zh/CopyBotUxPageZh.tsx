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
} from '../project/ProjectShared'

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

export default function CopyBotUxPageZh() {
  return (
    <div className="min-h-screen bg-bg pb-28 sm:pb-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <article className="flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="px-4 pb-4 text-[36px] font-bold leading-[1.4] text-paper-ink sm:px-0">
            Copy+Bot 用户体验优化
          </h1>

          <Section title="目标">
            <P>
              降低用户对跟单交易策略的理解成本，减轻一级入口的认知负担，提升策略转化路径的完成率。
            </P>
          </Section>

          <Section title="优化维度">
            <BodyStack>
              <P>1. 结构层 - 导航 / 业务模块 / 展示顺序 / 交互路径</P>
              <P>2. 模块信息</P>
            </BodyStack>
          </Section>

          <Section title="结构方案">
            <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start">
              <div className="grid w-full shrink-0 grid-cols-2 gap-4 sm:max-w-[520px]">
                <Phone src={`${IMG}/img45.png`} alt="现状" frame="plan" />
                <Phone src={`${IMG}/img46.png`} alt="方案 1" label="方案 1" frame="plan" />
                <Phone src={`${IMG}/plan2.png`} alt="方案 2" label="方案 2" frame="plan" />
                <Phone src={`${IMG}/plan3.png`} alt="方案 3" label="方案 3" frame="plan" />
              </div>

              <BodyStack>
                <P medium>用户痛点：</P>
                <P>1. 不知道该做什么、该看什么</P>
                <P>2. 全是文字和模块，学习与理解成本高</P>
                <P medium>方案 1（推荐）</P>
                <P>
                  用户默认进入交易广场。该页面作为新用户的核心转化场景，同时保留原有的跟单和交易机器人入口作为独立业务入口。
                </P>
                <P>产品入口：</P>
                <P>
                  页面展示高流量产品入口，例如：跟单推荐交易员、现货网格与马丁格尔策略等。
                </P>
                <P>设计理念：</P>
                <P>
                  1. 作为新用户的核心转化场景，需尽可能精简展示信息与产品入口，突出核心转化业务/产品入口，弱化次要信息与功能以避免干扰
                </P>
                <P>2. 简化导航，降低用户的思考与决策成本</P>
                <P>3. 减少选项，降低用户决策成本</P>
                <P medium>方案 2</P>
                <P>
                  相较方案 1，融入交易机器人结构，可提升屏幕效率，但相对增加用户学习与操作成本
                </P>
                <P medium>方案 3</P>
                <P>
                  简化二级导航，将交易机器人与跟单归入同一 Tab，降低产品结构复杂度，从而降低用户学习成本。
                </P>
                <P>用户分层：</P>
                <P>
                  热门 - 主要建立新用户的整体产品认知，同时承载用户首次转化任务
                </P>
                <P>
                  跟单与交易机器人作为独立业务入口，为老用户或希望深入了解业务的用户提供入口
                </P>
                <P>总资产：</P>
                <P>
                  为用户提供快速查看资产与订单的统一入口，整合跟单、策略与交易机器人，实现订单与资产的统一管理，避免业务入口分散难找，同时降低产品复杂度
                </P>
              </BodyStack>
            </div>
          </Section>

          <Section title="详细方案">
            <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="flex flex-col gap-3">
                <P medium>策略维度</P>
                <Phone src={`${IMG}/strategy-dimension.png`} alt="策略维度" frame="plan" />
              </div>
              <div className="flex flex-col gap-3">
                <P medium>币种维度</P>
                <Phone src={`${IMG}/currency-a.png`} alt="币种维度 A" frame="plan" />
              </div>
              <div className="flex flex-col gap-3">
                <P medium>币种维度</P>
                <Phone src={`${IMG}/currency-b.png`} alt="币种维度 B" frame="plan" />
              </div>
              <div className="flex flex-col gap-3">
                <P medium>投资类型</P>
                <Phone src={`${IMG}/investment-type.png`} alt="投资类型" frame="plan" />
              </div>
            </div>
          </Section>

          <Section title="一级入口分析（用户到达的首个业务页）">
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
              <P medium>用户痛点：</P>
              <P>1. 不知道该做什么、该看什么</P>
              <P>2. 全是文字和模块，学习与理解成本高</P>
              <P>OKX/BN/Bybit 均在首屏设有主按钮引导，</P>
              <P>OKX：引导用户创建 AI 策略</P>
              <P>BN：引导用户跟单</P>
              <P>Bybit：活动参与 + 盘前交易</P>
              <P medium>页面优化要点：</P>
              <P>
                突出页面核心产品功能，弱化次要功能与信息，减少用户干扰；
              </P>
              <P medium>待办：</P>
              <P>
                分析线上新用户主要转化路径，在首屏突出入口；
              </P>
            </TextImageSplit>

            <div className="flex flex-col gap-8 pt-4">
              <SubTitle>结构方案</SubTitle>
              <TextImageSplit
                media={
                  <div className="flex flex-wrap gap-3">
                    <Phone src={`${IMG}/img45.png`} alt="BG 基线" className="w-[192px]" frame="entry-plan" />
                    <Phone src={`${IMG}/img46.png`} alt="方案 1" label="方案 1" className="w-[192px]" frame="entry-plan" />
                    <Phone src={`${IMG}/plan3.png`} alt="方案 2" label="方案 2" className="w-[192px]" frame="entry-plan" />
                  </div>
                }
              >
                <P medium>方案 1（推荐）</P>
                <P>
                  用户默认进入交易广场。该页面作为新用户的核心转化场景，同时保留原有的跟单和交易机器人入口作为独立业务入口。
                </P>
                <P>产品入口：</P>
                <P>
                  页面展示高流量产品入口，例如：跟单推荐交易员、现货网格与马丁格尔策略等。
                </P>
                <P>设计理念：</P>
                <P>
                  1. 作为新用户的核心转化场景，需尽可能精简展示信息与产品入口，突出核心转化业务/产品入口，弱化次要信息与功能以避免干扰
                </P>
                <P>2. 简化导航，降低用户的思考与决策成本</P>
                <P>3. 减少选项，降低用户决策成本</P>
                <HighlightBox>字段：</HighlightBox>
                <HighlightBox>策略：回测收益率、用户数</HighlightBox>
                <HighlightBox>跟单：收益率、跟单人数</HighlightBox>
                <P medium>方案 2</P>
                <P>
                  相较方案 1，融入交易机器人结构，可提升屏幕效率，但相对增加用户学习与操作成本
                </P>
              </TextImageSplit>

              <TextImageSplit
                media={
                  <div className="flex flex-wrap gap-3">
                    <Phone src={`${IMG}/plan3.png`} alt="方案 3" className="w-[295px]" frame="plan" />
                    <Phone src={`${IMG}/structure-diagram.png`} alt="结构示意图" className="w-[295px]" frame="plan" />
                  </div>
                }
              >
                <P medium>其他方案：</P>
                <P>
                  简化二级导航，将交易机器人与跟单归入同一 Tab，降低产品结构复杂度，从而降低用户学习成本。
                </P>
                <P>用户分层：</P>
                <P>
                  热门 - 主要建立新用户的整体产品认知，同时承载用户首次转化任务
                </P>
                <P>
                  跟单与交易机器人作为独立业务入口，为老用户或希望深入了解业务的用户提供入口
                </P>
                <P>总资产：</P>
                <P>
                  为用户提供快速查看资产与订单的统一入口，整合跟单、策略与交易机器人，实现订单与资产的统一管理，避免业务入口分散难找，同时降低产品复杂度
                </P>
              </TextImageSplit>
            </div>
          </Section>

          <Section title="视觉层级 + 动线">
            <TextImageSplit
              media={
                <ImgRow
                  images={[
                    { src: `${IMG}/visual-01.png`, alt: '视觉层级 1', className: 'w-[142px]' },
                    { src: `${IMG}/visual-02.png`, alt: '视觉层级 2', className: 'w-[142px]' },
                    { src: `${IMG}/visual-03.png`, alt: '视觉层级 3', className: 'w-[142px]' },
                    { src: `${IMG}/visual-04.png`, alt: '视觉层级 4', className: 'w-[142px]' },
                  ]}
                />
              }
            >
              <P medium>分析：</P>
              <P>1. 视觉层级数量比例（BG/OKX/BN/Bybit）- 5:3:2:3</P>
              <P>
                2. OKX/BN/Bybit 在页面结构与视觉动线上相对一致，BG 略复杂，页面易用性低于竞品
              </P>
              <P medium>页面优化要点：</P>
              <P>1. 简化视觉层级；</P>
              <P>2. 简化页面结构，提升易用性；</P>
            </TextImageSplit>

            <div className="flex flex-col gap-8 pt-4">
              <TextImageSplit
                media={
                  <div className="flex flex-wrap gap-3">
                    <Phone src={`${IMG}/img46.png`} alt="方案 1 纵向" className="w-[304px]" frame="plan-large" />
                    <Phone src={`${IMG}/plan-horizontal.png`} alt="方案 2 横向" className="w-[304px]" frame="plan-large" />
                  </div>
                }
              >
                <SubTitle>方案</SubTitle>
                <P>方案 1：纵向</P>
                <P>方案 2：横向</P>
                <P>简化视觉层级：模块分级、字体样式、颜色</P>
              </TextImageSplit>

              <TextImageSplit
                media={
                  <div className="flex flex-wrap gap-3">
                    <Phone src={`${IMG}/img46.png`} alt="方案 1 纵向" className="w-[304px]" frame="plan-large" />
                    <Phone src={`${IMG}/plan-horizontal.png`} alt="方案 2 横向" className="w-[304px]" frame="plan-large" />
                  </div>
                }
              >
                <SubTitle>方案</SubTitle>
                <P>方案 1：纵向</P>
                <P>方案 2：横向</P>
                <P>简化视觉层级：模块分级、字体样式、颜色</P>
              </TextImageSplit>
            </div>
          </Section>

          <Section title="用户理解成本与学习成本 = 用户决策成本 = 用户转化">
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
              <P medium>BG：</P>
              <P>无明显转化入口</P>
              <P medium>OKX：</P>
              <P>转化入口 + 用户决策信息展示</P>
              <P>亮点：新手用户可理解</P>
              <P medium>BN：</P>
              <P>模块 + 用户决策信息展示 + 引导</P>
              <P>存在一定学习成本</P>
              <P medium>Bybit：</P>
              <P>模块 + 用户决策信息展示 + 引导</P>
              <P>存在一定学习成本</P>
            </TextImageSplit>
          </Section>

          <Section title="用户 AI 策略转化路径分析">
            <div className="flex flex-col gap-8">
              <div className="min-w-0">
                <div className="overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
                  <PhoneFrameRow
                    frames={[
                      { src: `${IMG}/path-okx-step-1.png`, alt: 'OKX 转化步骤 1' },
                      { src: `${IMG}/path-okx-step-2.png`, alt: 'OKX 转化步骤 2' },
                      { src: `${IMG}/path-okx-step-3.png`, alt: 'OKX 转化步骤 3' },
                    ]}
                  />
                </div>
                <Caption>OKX</Caption>
              </div>

              <BodyStack>
                <P medium>OKX：3 步</P>
                <P medium>BN：2 步</P>
                <P medium>BG：4 步</P>
                <P medium>分析：</P>
                <P>
                  相较其他平台，BG 首屏下单转化路径较长，学习与操作成本高，对新用户不友好。相比之下，OKX 在新用户教育与引导方面相对更友好。
                </P>
                <P medium>待办：</P>
                <P>1. 优化首屏内容，简化页面交互，提升业务字段有效性。</P>
                <P>2. 缩短用户下单转化路径。</P>
              </BodyStack>

              <div className="flex flex-col gap-3">
                <WideImg src={`${IMG}/path-bn.png`} alt="BN 转化路径" className="max-w-[435px]" />
                <Caption>BN</Caption>
              </div>

              <div className="flex flex-col gap-3">
                <WideImg src={`${IMG}/path-bg.png`} alt="BG 转化路径" className="max-w-[600px]" />
                <Caption>BG</Caption>
              </div>
            </div>
          </Section>
        </article>
      </div>
    </div>
  )
}
