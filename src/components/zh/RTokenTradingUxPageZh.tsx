import {
  BodyStack,
  CaseIntro,
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

const IMG = '/media/rtoken-trading-ux'

const ROLE_TAGS = ['用户体验研究', '产品研究', '数据驱动', 'UX / UI'] as const

const TODO_ROWS = [
  { priority: 'P0', task: '移除首屏锚点导航' },
  { priority: '', task: '[市场要闻] 标题单行显示，超出以省略号截断' },
  {
    priority: '',
    task: '在 K 线页增加 [机会分析] 入口，打通市场洞察与交易',
  },
  {
    priority: '',
    task: '在 [机会分析] 页增加 [股票交易] 入口',
  },
  { priority: 'P1', task: '重构 [机会分析] 页面布局' },
  {
    priority: '',
    task: '强化股票卡片「可交易」信号（如增加快捷买入按钮），视觉引导用户完成交易',
  },
  {
    priority: 'P2',
    task: '重做 [市场要闻] 入口样式，增加「反弹博弈」「超跌反弹」等明确投资信号，标注资产类型，并融入情感化钩子吸引用户。',
  },
]

export default function RTokenTradingUxPageZh() {
  return (
    <div className="min-h-screen bg-bg pb-28 sm:pb-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <article className="flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="px-4 pb-4 text-[36px] font-bold leading-[1.4] text-paper-ink sm:px-0">
            rToken 交易漏斗 — 用户体验审计
          </h1>

          <CaseIntro>
            <div className="flex flex-col gap-2">
              <IntroHeading>我的角色</IntroHeading>
              <IntroRoleTags tags={[...ROLE_TAGS]} />
            </div>

            <div className="flex flex-col gap-6">
              <IntroHeading>成果</IntroHeading>
              <div className="flex flex-col gap-6">
                <IntroImpactItem title="审计首页模块分布，优化首屏效率">
                  通过用户数据分析，评估首页模块分布与占比，并结合业务目标进行针对性调整，保障首屏效率。
                </IntroImpactItem>
                <IntroImpactItem title="梳理关键交易路径中的体验断点">
                  针对各场景开展体验地图分析，定位用户在 rToken 交易漏斗中的流失环节。
                </IntroImpactItem>
                <IntroImpactItem title="基于竞品对标提出可落地的优化建议">
                  对各场景核心竞品进行 UX/UI 对标分析，在设计执行前提出优化方案。
                </IntroImpactItem>
              </div>
            </div>

            <IntroMetrics
              metrics={[
                { value: '+70%', label: '页面停留时长提升' },
                { value: '+75.8%', label: '股票模块点击率提升' },
                { value: '+7.2%', label: '市场到股票漏斗转化率提升' },
              ]}
            />
          </CaseIntro>

          <Section title="1. 目标">
            <P>
              目标：将 [市场发现] → rToken 交易转化率从 0.55% 提升至 1.1%。
            </P>
          </Section>

          <Section title="2. 核心体验问题">
            <BodyStack>
              <NumberedItem n={1}>
                <P medium>首屏效率</P>
              </NumberedItem>
              <div className="flex flex-col gap-3 pl-7">
                <NumberedItem n="1.1">
                  <P>
                    首屏一半内容的点击率低于 3%。与此同时，[股票] 模块被挤在首屏最底部附近（距折叠线约
                    1/6），实际点击率却排名第二。位置与参与度严重不匹配。
                  </P>
                </NumberedItem>
                <NumberedItem n="1.2">
                  <P>
                    [股票] 模块容易被完全推出首屏，白白损失曝光机会。
                  </P>
                </NumberedItem>
              </div>
              <NumberedItem n={2}>
                <P medium>股票交易漏斗断裂</P>
              </NumberedItem>
              <div className="flex flex-col gap-3 pl-7">
                <NumberedItem n="2.1">
                  <P>
                    用户点击股票机会进入 K 线页后，没有对应的机会分析——探索机会时积累的动能就此中断。
                  </P>
                </NumberedItem>
                <NumberedItem n="2.2">
                  <P>
                    机会分析页没有直达交易的路径。用户必须退回 K 线页再点 [交易]——打断操作流，拉长转化路径。
                  </P>
                </NumberedItem>
              </div>
            </BodyStack>
          </Section>

          <Section title="3. 待办">
            <div className="w-full overflow-x-auto rounded-lg">
              <table className="w-full min-w-[500px] border-collapse text-left text-[14px] text-paper-dim">
                <thead>
                  <tr className="bg-surface-2">
                    <th className="w-[140px] border border-line px-4 py-3 text-[13px] font-semibold text-paper-ink">
                      优先级
                    </th>
                    <th className="border border-line px-4 py-3 text-[13px] font-semibold text-paper-ink">
                      待办
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TODO_ROWS.map((row, i) => (
                    <tr key={i}>
                      <td className="border border-line px-4 py-3 text-[14px] font-semibold leading-[1.65] text-paper-dim">
                        {row.priority}
                      </td>
                      <td className="border border-line px-4 py-3 text-[14px] leading-[1.65] text-paper-dim">
                        {row.task}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. 用户数据">
            <div className="flex flex-col gap-8 pt-2">
              <div className="flex flex-col gap-4">
                <SubTitle>市场概览模块点击</SubTitle>
                <div className="flex flex-col gap-6 lg:flex-row">
                  <WideImg
                    src={`${IMG}/market-overview-heatmap.png`}
                    alt="市场概览点击热力图"
                    className="shrink-0 lg:w-[599px]"
                  />
                  <div className="flex min-w-0 flex-1 flex-col gap-3 lg:max-w-[449px]">
                    <P medium>总结：</P>
                    <P small>
                      首屏一半内容的点击率低于 3%。与此同时，[股票] 模块被挤在首屏最底部附近（距折叠线约
                      1/6），实际点击率却排名第二。位置与参与度严重不匹配。
                    </P>
                    <P medium>待办</P>
                    <P small>• 重构首屏布局，提升内容曝光价值</P>
                    <P small>
                      • 将股票模块上移至首屏更高位置，使其位置与高点击率相匹配
                    </P>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>锚点导航模块点击</SubTitle>
                <P small>
                  95% 点击锚点导航的用户选择了 [股票] 或 [加密货币]——约 51% 对 49%。换言之，用户在此页真正关心的只有这两个模块。
                </P>
                <WideImg src={`${IMG}/anchor-nav-clicks.png`} alt="锚点导航点击分布" />
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>用户路径转化</SubTitle>
                <div className="flex flex-col gap-5 lg:flex-row">
                  <WideImg
                    src={`${IMG}/discovery-path-conversion.png`}
                    alt="发现路径转化"
                    className="lg:max-w-[525px]"
                  />
                  <WideImg
                    src={`${IMG}/stock-path-conversion.png`}
                    alt="股票路径转化"
                    className="lg:max-w-[527px]"
                  />
                </div>
                <P small>
                  股票用户中，发现路径转化率仅 0.55%，而股票市场路径转化率达 9.34%——高出 20 倍。股票市场 K
                  线页的环节转化也近乎 2 倍更好。股票市场路径显然是主要交易转化通道。可探索：在股票市场板块内嵌入
                  [股票机会]，降低用户的股票发现成本。
                </P>
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>用户体验旅程分析</SubTitle>
                <WideImg src={`${IMG}/ux-journey-overview.png`} alt="用户体验旅程总览" />

                <div className="w-full overflow-x-auto rounded-lg">
                  <table className="w-full min-w-[900px] border-collapse text-left text-[14px] text-paper-dim">
                    <thead>
                      <tr className="bg-surface-2">
                        <th className="w-[29%] border border-line px-4 py-3" />
                        <th className="w-[32%] border border-line px-4 py-3 text-[13px] font-semibold text-paper-ink">
                          问题
                        </th>
                        <th className="w-[39%] border border-line px-4 py-3 text-[13px] font-semibold text-paper-ink">
                          优化方案
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-line align-top">
                          <WideImg
                            src={`${IMG}/issue-market-highlights.png`}
                            alt="问题：市场要闻"
                            className="rounded-none"
                          />
                        </td>
                        <td className="border border-line px-4 py-3 align-top text-[14px] leading-[1.65] text-paper-dim">
                          <p className="mb-0 leading-[1.65]">
                            1. [市场要闻] 未建立投资机会心智——用户滑过而不会想到「我要交易」；
                          </p>
                          <p className="mb-0 leading-[1.65]">
                            2. 首屏 [股票] 模块位置过深，交易入口不够显眼，难以吸引注意；
                          </p>
                          <p className="leading-[1.65]">
                            3. 首屏信息密度高——顶部 Tab 与 Chip 标签重复显示「股票」，增加认知负担，降低查找效率
                          </p>
                        </td>
                        <td className="border border-line px-4 py-3 align-top text-[14px] leading-[1.65] text-paper-dim">
                          <p className="mb-2 leading-[1.65]">
                            方向一：重做 [市场要闻] 样式与交互，减轻对首屏效率的拖累；可参考股票市场 Banner
                          </p>
                          <WideImg
                            src={`${IMG}/solution-banner-ref.png`}
                            alt="方案：市场要闻 Banner 参考"
                            className="mb-2 rounded-none"
                          />
                          <p className="mb-0 leading-[1.65]">
                            方向二：在市场要闻中注入明确投资信号——如「反弹博弈」「超跌反弹」等标签，并标注资产类型，增加情感钩子。
                          </p>
                          <p className="mb-0 leading-[1.65]">
                            1. Chip 视觉吸引力弱（点击低）且占用屏幕空间——可考虑移除。重点应帮助用户发现机会，而非展示有哪些模块；
                          </p>
                          <p className="mb-0 leading-[1.65]">
                            2. 重构首屏布局，提升内容曝光价值；
                          </p>
                          <p className="mb-2 leading-[1.65]">
                            3. 将股票模块上移至首屏更高位置，使其位置与高点击率相匹配；
                          </p>
                          <WideImg
                            src={`${IMG}/solution-investment-signals.png`}
                            alt="方案：投资信号标签"
                            className="rounded-none"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-line align-top">
                          <WideImg
                            src={`${IMG}/issue-stock-conversion.png`}
                            alt="问题：股票交易转化"
                            className="rounded-none"
                          />
                        </td>
                        <td className="border border-line px-4 py-3 align-top text-[14px] leading-[1.65] text-paper-dim">
                          <p className="mb-0 leading-[1.65]">股票交易转化断裂</p>
                          <p className="mb-0 leading-[1.65]">
                            1. 股票交易入口不够显眼；
                          </p>
                          <p className="leading-[1.65]">
                            2. 存在心智断层——用户从市场发现中看到股票机会后进入 K 线页，却找不到满足「理解机会」需求的内容，页面只展示指标。
                          </p>
                        </td>
                        <td className="border border-line px-4 py-3 align-top text-[14px] leading-[1.65] text-paper-dim">
                          <p className="mb-2 leading-[1.65]">
                            1. 对高置信度信号的股票（如「动能积聚」「业绩承压」等标签），使用更具行动导向的文案，而非仅呈现新闻；
                          </p>
                          <div className="mb-2 flex flex-wrap gap-2">
                            <WideImg
                              src={`${IMG}/solution-action-copy-a.png`}
                              alt="方案：行动文案示例 a"
                              className="max-w-[175px] rounded-none"
                            />
                            <WideImg
                              src={`${IMG}/solution-action-copy-b.png`}
                              alt="方案：行动文案示例 b"
                              className="max-w-[161px] rounded-none"
                            />
                          </div>
                          <WideImg
                            src={`${IMG}/solution-action-copy-c.png`}
                            alt="方案：行动文案示例 c"
                            className="max-w-[342px] rounded-none"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-line align-top">
                          <WideImg
                            src={`${IMG}/issue-weak-signals.png`}
                            alt="问题：交易信号薄弱"
                            className="rounded-none"
                          />
                        </td>
                        <td className="border border-line px-4 py-3 align-top text-[14px] leading-[1.65] text-paper-dim">
                          <p className="mb-0 leading-[1.65]">交易信号薄弱</p>
                          <p className="mb-0 leading-[1.65]">
                            1. 结构与内容叙事乏力——无法建立交易信心。用户看完后缺乏投资把握。[整体趋势] 模块有助于决策，但下方技术分析学习曲线陡峭，缺乏明确的买卖信号；
                          </p>
                          <p className="leading-[1.65]">
                            2. 交易漏斗断裂——没有 [交易] 入口。用户准备行动时，必须退回市场发现页再次点击。
                          </p>
                        </td>
                        <td className="border border-line px-4 py-3 align-top">
                          <WideImg
                            src={`${IMG}/solution-weak-signals.png`}
                            alt="方案：薄弱交易信号优化"
                            className="max-w-[361px] rounded-none"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Section>

          <Section title="方案探索">
            <div className="flex flex-col gap-8 pt-2">
              <div className="flex flex-col gap-4">
                <SubTitle>市场发现</SubTitle>
                <WideImg src={`${IMG}/solution-market-discovery-1.png`} alt="市场发现方案 1" />
                <WideImg src={`${IMG}/solution-market-discovery-2.png`} alt="市场发现方案 2" />
                <div className="flex flex-col gap-3.5 lg:flex-row">
                  <WideImg
                    src={`${IMG}/solution-market-discovery-3.png`}
                    alt="市场发现方案 3"
                    className="lg:max-w-[529px]"
                  />
                  <WideImg
                    src={`${IMG}/solution-market-discovery-4.png`}
                    alt="市场发现方案 4"
                    className="lg:max-w-[529px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>K 线页</SubTitle>
                <WideImg src={`${IMG}/solution-kline.png`} alt="K 线页方案" />
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>机会分析</SubTitle>
                <WideImg src={`${IMG}/solution-opportunity.png`} alt="机会分析方案" />
              </div>
            </div>
          </Section>
        </article>
      </div>
    </div>
  )
}
