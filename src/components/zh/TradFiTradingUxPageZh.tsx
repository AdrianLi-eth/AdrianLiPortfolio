import {
  CaseIntro,
  IntroHeading,
  IntroImpactItem,
  IntroMetrics,
  IntroRoleTags,
} from '../project/ProjectShared'
import {
  BodyStack,
  IMG,
  ImgRow,
  NumberedItem,
  P,
  PhoneFrameRow,
  Section,
  SubTitle,
  WideImg,
} from '../tradfi/TradFiShared'

const ROLE_TAGS = ['产品研究', '数据驱动', 'UX / UI'] as const

const PATH_COLUMNS = [
  {
    label: '路径 1',
    entry: '底部导航 TradFi Tab → 贵金属交易页：',
    share: '32%',
    image: `${IMG}/path-1.png`,
    description: '转化率最高的入口——以最少的步骤直达交易',
  },
  {
    label: '路径 2',
    entry: '交易 Tab 切换/跳转 → 贵金属：',
    share: '占总流量 7.4%',
    image: `${IMG}/path-2.png`,
    description: '从主交易 Tab 切换过来的用户；在浏览更广阔市场时偶然发现贵金属',
  },
  {
    label: '路径 3',
    entry: '搜索入口 → 贵金属搜索结果点击：',
    share: '3.3%',
    image: `${IMG}/path-3.png`,
    description: '主动搜索 → 点击贵金属搜索结果的转化率',
  },
  {
    label: '路径 4',
    entry: '首页行情卡片模块 → 贵金属卡片点击',
    share: '1.1%',
    image: `${IMG}/path-4.png`,
    description: '首页行情模块中贵金属卡片的点击率',
  },
  {
    label: '路径 5',
    entry: '首页 TradFi 模块 → K 线页',
    share: '2.3%',
    image: `${IMG}/path-5.png`,
    description: '从首页 TradFi 模块曝光到 K 线页的点击率',
  },
  {
    label: '路径 6',
    entry: '行情页 TradFi/股票模块 → K 线页',
    share: '4.6%',
    image: `${IMG}/path-6.png`,
    description: '从行情页模块曝光到 K 线页的点击率',
  },
]

const COMPETITOR_ROWS = [
  {
    platform: 'BG',
    path: '底部导航 TradFi → 股票/商品合约交易页 → 点击交易',
    clicks: '2',
    dedicated: '是',
    marketData: '否',
    klineOrder: '否',
  },
  {
    platform: '',
    path: '合约交易 → 选择切换交易对 → 选择商品 → 交易',
    clicks: '3',
    dedicated: '',
    marketData: '',
    klineOrder: '',
  },
  {
    platform: 'Gate',
    path: 'TradFi → 永续市场 → 选择资产 → K 线 → 交易页',
    clicks: '4',
    dedicated: '是',
    marketData: '是',
    klineOrder: '是',
  },
  {
    platform: '',
    path: '首页 → 商品排行榜 → 选择资产 → K 线 → 交易页',
    clicks: '4',
    dedicated: '',
    marketData: '',
    klineOrder: '',
  },
  {
    platform: 'Binance',
    path: '行情 → TradFi → K 线 → 交易页',
    clicks: '4',
    dedicated: '否',
    marketData: '是',
    klineOrder: '是',
  },
  {
    platform: '',
    path: '合约交易 → 切换交易对 → TradFi → 交易页',
    clicks: '3',
    dedicated: '',
    marketData: '',
    klineOrder: '',
  },
  {
    platform: 'OKX',
    path: '首页 → TradFi 排行榜 → 选择资产 → K 线 → 交易页',
    clicks: '4',
    dedicated: '否',
    marketData: '是',
    klineOrder: '否',
  },
  {
    platform: '',
    path: '交易 → 切换交易对 → 选择 TradFi → 选择资产 → 交易',
    clicks: '4',
    dedicated: '',
    marketData: '',
    klineOrder: '',
  },
  {
    platform: 'Bybit',
    path: '交易 → 选择 TradFi 交易 → 选择资产 → K 线 → 下单（挂单/持仓）',
    clicks: '4',
    dedicated: '否',
    marketData: '是',
    klineOrder: '是',
  },
]

function DataTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: string[][]
}) {
  return (
    <div className="w-full overflow-x-auto rounded-lg">
      <table className="w-full min-w-[640px] border-collapse text-left text-[14px] text-paper-dim">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="border border-line bg-surface-2 px-4 py-3 text-[13px] font-semibold text-paper-ink"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="border border-line px-4 py-3 align-top leading-[1.65]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function TradFiTradingUxPageZh() {
  return (
    <div className="min-h-screen bg-bg pb-28 sm:pb-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <article className="flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="px-4 pb-4 text-[36px] font-bold leading-[1.4] text-paper-ink sm:px-0">
            TradFi 交易体验优化
          </h1>

          <CaseIntro>
            <div className="flex flex-col gap-2">
              <IntroHeading>我的角色</IntroHeading>
              <IntroRoleTags tags={[...ROLE_TAGS]} />
            </div>

            <div className="flex flex-col gap-6">
              <IntroHeading>成果</IntroHeading>
              <div className="flex flex-col gap-6">
                <IntroImpactItem title="梳理最高价值交易入口路径">
                  通过用户数据分析，识别出前 3 大交易转化入口，并对每条路径开展体验地图分析，在提出优化方案前精准定位摩擦点。
                </IntroImpactItem>
                <IntroImpactItem title="优先 MVP 范围以实现可衡量提升">
                  在股票与商品合约转化目标之间平衡改版成本，与数据分析团队协作梳理漏斗数据，通过清晰的版本管理推进小而高影响的改动。
                </IntroImpactItem>
                <IntroImpactItem title="通过竞品对标验证 UX 方向">
                  对各场景核心竞品进行 UX/UI 对标分析，在高保真设计前为优化决策提供依据。
                </IntroImpactItem>
              </div>
            </div>

            <IntroMetrics
              metrics={[
                {
                  value: '+8.3%',
                  label: 'K 线页到交易按钮点击率转化率',
                },
                {
                  value: '+28.7%',
                  label: 'TradFi 底部导航交易入口整体漏斗转化率',
                },
              ]}
            />
          </CaseIntro>

          <Section title="优化目标">
            <P>提升 TradFi 商品与股票期货交易漏斗的整体转化率。</P>
          </Section>

          <Section title="转化关键断点">
            <BodyStack>
            <NumberedItem index={1}>
              <P>
                TradFi 页面未能建立用户对可交易品类的信心，影响下单转化。底部导航 [TradFi]
                Tab 贡献了 32% 的商品/股票流量——是最大单一入口——但用户无法直接浏览全部可交易资产，必须打开交易对切换面板；若默认交易对不是目标资产，还需在面板内搜索。搜索结构学习成本较高，容易将用户引向其他资产，拖累漏斗表现。值得注意的是，约
                88% 的首次股票交易者已在平台交易过加密货币；纯股票用户（入金 → 买入股票，无其他交易）占比不足
                12%。大多数 TradFi 交易者是已有加密用户探索新品类——因此针对该群体的引导教育至关重要。
              </P>
            </NumberedItem>
            <NumberedItem index={2}>
              <P>
                K 线页是漏斗中最大的流失点。商品合约方面，K 线 → 点击交易的转化率仅
                35%。股票合约经路径 2 到达时，K 线页 10 秒跳出率高达 60%，仅 28%
                的用户继续进入交易页。用户在观望行情，却缺少行动引导。若能在 K
                线页直接闭环交易——缩短从意图到下单的路径——整体转化率有望显著提升。
              </P>
            </NumberedItem>
            <NumberedItem index={3}>
              <P>
                交易对切换页对股票与商品合约的品牌识别较弱。它是第二大入口（7.4%），但列表中缺乏一眼可辨的「这是股票/商品」信号。用户难以建立心智模型与信任，进而影响点击。首屏清晰度是真实可撬动的杠杆。
              </P>
            </NumberedItem>
            </BodyStack>
          </Section>

          <Section title="优化方向">
            <BodyStack>
            <NumberedItem index={1}>
              <P>
                在 TradFi 落地页直接展示行情数据，让用户无需额外步骤即可浏览全部可交易商品资产。降低发现
                TradFi 产品的认知成本，减少对切换面板的依赖，并改善面板内搜索——当默认交易对不符合用户意图时，减少因分流导致的流失。
              </P>
            </NumberedItem>
            <NumberedItem index={2}>
              <P>
                借鉴 Bybit：在 K 线页增加快捷下单组件。让用户留在当前上下文，缩短执行路径，降低下单前流失的概率。
              </P>
            </NumberedItem>
            <NumberedItem index={3}>
              <P>
                将交易对切换页中的商品/股票模块样式与行情数据区保持一致。统一的视觉语言有助于建立品类识别与信任，提升点击率。
              </P>
            </NumberedItem>
            </BodyStack>
          </Section>

          <Section title="商品交易转化路径">
            <BodyStack>
              <P>
                商品合约流量（贵金属、原油等）通过六个入口进入：TradFi Tab、交易 Tab、搜索、首页行情卡片、首页
                TradFi 模块、行情页 TradFi 模块。无论用户如何到达 K
                线页，都会经过同一核心漏斗：K 线 → 点击交易 → 交易页 → 下单。
              </P>
            </BodyStack>

            <div className="w-full overflow-x-auto rounded-lg">
              <table className="w-full min-w-[900px] border-collapse text-[13px] text-paper-dim">
                <thead>
                  <tr>
                    <th className="w-[110px] border border-line bg-surface-2 px-3 py-3 text-[13px] font-semibold text-paper-ink">
                      路径
                    </th>
                    {PATH_COLUMNS.map((col) => (
                      <th
                        key={col.label}
                        className="w-[164px] border border-line bg-surface-2 px-3 py-3 text-[13px] font-semibold text-paper-ink"
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-line px-3 py-3 align-top font-semibold text-paper-ink">
                      入口/路径
                    </td>
                    {PATH_COLUMNS.map((col) => (
                      <td key={col.label} className="border border-line px-3 py-3 align-top leading-[1.65]">
                        <p className="mb-2">{col.entry}</p>
                        <p className="mb-3 font-semibold text-paper-ink">{col.share}</p>
                        <div className="overflow-hidden rounded-md bg-surface-2">
                          <img src={col.image} alt={col.label} className="h-auto w-full object-cover" />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-line px-3 py-3 align-top font-semibold text-paper-ink">
                      说明
                    </td>
                    {PATH_COLUMNS.map((col) => (
                      <td key={col.label} className="border border-line px-3 py-3 align-top leading-[1.65]">
                        {col.description}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <BodyStack>
              <P>
                底部导航 [TradFi] Tab 是压倒性的主导入口，占贵金属交易页日 UV 的
                32%。其余入口均为个位数——交易 Tab 切换的 7.4% 是唯一有意义的次要来源。
              </P>
              <P>
                从 K 线页进入交易页的用户中，55% 会继续点击交易按钮——一旦完成跳转，交易意图很强。
              </P>
            </BodyStack>

            <div className="flex flex-col gap-4 rounded-xl bg-surface-2 p-5 lg:flex-row lg:items-start">
              <p className="shrink-0 text-[15px] font-semibold text-paper-ink lg:w-[110px]">
                漏斗转化
              </p>
              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <P>
                  端到端漏斗转化率：19%
                  <br />
                  路径 2、3、4 → K 线页：15%
                  <br />
                  K 线页 → 点击交易：35%
                  <br />
                  交易页 → 下单：55%
                </P>
                <ImgRow
                  images={[
                    { src: `${IMG}/funnel-1.png`, alt: '漏斗图 1', className: 'w-[244px]' },
                    { src: `${IMG}/funnel-2.png`, alt: '漏斗图 2', className: 'w-[243px]' },
                  ]}
                />
              </div>
            </div>

            <BodyStack>
              <P>
                从 UX 旅程视角审视最大流量入口（底部导航 TradFi），两个明显痛点浮现：
              </P>
              <NumberedItem index={1}>
                <P>
                  「无法一眼看到全部可交易商品资产，必须打开交易对切换器或去行情 Tab 才能浏览。」
                </P>
              </NumberedItem>
              <P>
                痛点：经 [TradFi] 进入的用户无法直接浏览可用资产——被迫进入交易对切换面板，体验不直观。
              </P>
              <NumberedItem index={2}>
                <P>
                  「无法直接点击资产查看 K 线并做技术分析，必须经交易对切换器搜索——导航混乱且步骤过多。」
                </P>
              </NumberedItem>
              <P>
                痛点：当默认交易对不符合用户意图时，需在切换面板内搜索。搜索分类体系有学习成本（分类 vs.
                关键词），过程中用户容易被其他资产分流——造成转化流失。
              </P>
            </BodyStack>
            <ImgRow
              images={[
                { src: `${IMG}/pain-1.png`, alt: '痛点截图 1', className: 'w-[243px]' },
                { src: `${IMG}/pain-2.png`, alt: '痛点截图 2', className: 'w-[245px]' },
                { src: `${IMG}/pain-3.png`, alt: '痛点截图 3', className: 'w-[246px]' },
              ]}
            />
          </Section>

          <Section title="竞品分析">
            <BodyStack>
              <NumberedItem index={1}>
                <P>导航结构；</P>
              </NumberedItem>
              <NumberedItem index={2}>
                <P>下单路径 + 页面交互；</P>
              </NumberedItem>
            </BodyStack>

            <div className="flex flex-col gap-8 pt-2">
              <div className="flex flex-col gap-4">
                <SubTitle>Gate</SubTitle>
                <BodyStack>
                  <P>
                    导航：Gate 没有独立的 [行情] Tab，以交易为核心架构。加密用户通过首页排行榜与交易对切换器查看价格。TradFi
                    拥有专属 Tab，行情数据前置展示。
                  </P>
                  <P>👍 导航清晰——用户容易建立入口心智模型。</P>
                  <P>👎 到达 TradFi 交易的路径较长——急于操作的用户体验受挫。</P>
                </BodyStack>
                <PhoneFrameRow
                  frames={[
                    { src: `${IMG}/gate-nav-1.png`, alt: 'Gate 导航 1' },
                    { src: `${IMG}/gate-nav-2.png`, alt: 'Gate 导航 2' },
                    { src: `${IMG}/gate-nav-3.png`, alt: 'Gate 导航 3' },
                    { src: `${IMG}/gate-nav-4.png`, alt: 'Gate 导航 4' },
                  ]}
                />
                <BodyStack>
                  <P>
                    商品/股票合约的 TradFi 用户路径与 BG 思路相近：
                  </P>
                  <P medium>路径 1：TradFi - 永续市场 - K 线 - 交易页</P>
                  <P>👍 满足交易前查看 TradFi 行情的需求</P>
                  <P>👎 1. 对只想快速交易的用户步骤过多。</P>
                  <NumberedItem index={2}>
                    <P>
                      交易页与 K 线页之间切换造成上下文跳跃；两页的返回按钮行为也不够明确。
                    </P>
                  </NumberedItem>
                </BodyStack>
                <WideImg src={`${IMG}/gate-path-1.png`} alt="Gate 路径 1" />
                <BodyStack>
                  <P medium>路径 2：首页 - 股票排行榜 - K 线 - 交易页</P>
                  <P>
                    👍 用户可在 K 线页直接下单——路径更短、专注度更高、流失更少。
                  </P>
                </BodyStack>
                <WideImg src={`${IMG}/gate-path-2.png`} alt="Gate 路径 2" />
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>Binance（以加密交易用户路径为主）</SubTitle>
                <BodyStack>
                  <P>
                    导航：无专属 TradFi 入口。交易模块未将 TradFi
                    单独拆出——仍是加密优先体验。TradFi 出现在行情页筛选与合约交易对切换器中，但无子分类。
                  </P>
                  <P>
                    👍 不干扰主导航与既有习惯——摩擦接近零。
                  </P>
                  <P>
                    👎 难以发现——专门寻找 TradFi 资产交易的用户成本较高。
                  </P>
                  <P medium>路径 1：行情 - TradFi - K 线 - 交易页</P>
                </BodyStack>
                <ImgRow
                  images={[
                    { src: `${IMG}/binance-path-1.png`, alt: 'Binance 路径 1', className: 'w-[247px]' },
                    { src: `${IMG}/binance-path-2.png`, alt: 'Binance 路径 2', className: 'w-[251px]' },
                    { src: `${IMG}/binance-path-3.png`, alt: 'Binance 路径 3', className: 'w-[244px]' },
                  ]}
                />
                <BodyStack>
                  <P medium>路径 2：合约交易 - 切换交易对 - TradFi - 交易页</P>
                </BodyStack>
                <ImgRow
                  images={[
                    { src: `${IMG}/binance-path2-1.png`, alt: 'Binance 路径 2 步骤 1', className: 'w-[246px]' },
                    { src: `${IMG}/binance-path2-2.png`, alt: 'Binance 路径 2 步骤 2', className: 'w-[244px]' },
                  ]}
                />
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>OKX（以加密交易用户路径为主）</SubTitle>
                <BodyStack>
                  <P>
                    导航：与 Binance 相同——无专属 TradFi 入口，加密优先架构。TradFi
                    出现在首页排行榜与交易对切换器中，无进一步子分类。
                  </P>
                  <P>👍 不干扰既有导航习惯——对用户影响最小。</P>
                  <P>👎 难以发现——专门寻找 TradFi 资产的用户摩擦较大。</P>
                  <P medium>路径 1：首页 TradFi 排行榜 - K 线 - 交易页</P>
                </BodyStack>
                <ImgRow
                  images={[
                    { src: `${IMG}/okx-path-1.png`, alt: 'OKX 路径 1', className: 'w-[245px]' },
                    { src: `${IMG}/okx-path-2.png`, alt: 'OKX 路径 2', className: 'w-[244px]' },
                    { src: `${IMG}/okx-path-3.png`, alt: 'OKX 路径 3', className: 'w-[244px]' },
                  ]}
                />
                <BodyStack>
                  <P medium>路径 2：交易 - 切换交易对 TradFi - 交易</P>
                </BodyStack>
                <ImgRow
                  images={[
                    { src: `${IMG}/okx-path-2.png`, alt: 'OKX 路径 2 步骤 1', className: 'w-[244px]' },
                    { src: `${IMG}/okx-path-3.png`, alt: 'OKX 路径 2 步骤 2', className: 'w-[247px]' },
                  ]}
                />
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>Bybit</SubTitle>
                <BodyStack>
                  <P>
                    导航：TradFi 不是独立导航项，但在统一交易模块内与现货、合约等并列展示为同级交易类型。
                  </P>
                  <NumberedItem index={1}>
                    <P>
                      👍 心智模型简单——一个入口交易一切。用户无需先决定「交易什么」再去找「去哪里交易」。
                    </P>
                  </NumberedItem>
                  <NumberedItem index={2}>
                    <P>
                      进入 TradFi 分区后即可看到资产行情——满足一眼概览的需求。
                    </P>
                  </NumberedItem>
                  <NumberedItem index={3}>
                    <P>
                      用户可在 K 线页直接下单——路径更短、专注度更高、流失更少。
                    </P>
                  </NumberedItem>
                  <P medium>
                    路径 1：交易 - TradFi 交易 - K 线 - K 线下单（挂单/持仓）
                  </P>
                </BodyStack>
                <ImgRow
                  images={[
                    { src: `${IMG}/bybit-path-1.png`, alt: 'Bybit 路径 1', className: 'w-[246px]' },
                    { src: `${IMG}/bybit-path-2.png`, alt: 'Bybit 路径 2', className: 'w-[246px]' },
                    { src: `${IMG}/bybit-path-3.png`, alt: 'Bybit 路径 3', className: 'w-[246px]' },
                  ]}
                />
              </div>
            </div>

            <DataTable
              headers={[
                '平台',
                '转化路径',
                '点击次数',
                '是否有专属 TradFi 入口',
                '入口是否有行情数据',
                'K 线是否支持下单',
              ]}
              rows={COMPETITOR_ROWS.map((row) => [
                row.platform,
                row.path,
                row.clicks,
                row.dedicated,
                row.marketData,
                row.klineOrder,
              ])}
            />
          </Section>

          <Section title="优化方向">
            <BodyStack>
              <NumberedItem index={1}>
                <P>
                  为 TradFi Tab 增加行情落地视图——让用户在下单前了解可交易品种并感知价格走势。
                </P>
              </NumberedItem>
              <NumberedItem index={2}>
                <P>在 K 线页增加快捷下单窗口？</P>
              </NumberedItem>
            </BodyStack>
            <div className="flex flex-col gap-3 pt-2">
              <PhoneFrameRow
                noBackground
                nowrap
                height="h-[533px]"
                frames={[
                  { src: `${IMG}/optimization-dir-1.png`, alt: 'TradFi 行情落地视图' },
                  { src: `${IMG}/optimization-dir-2.png`, alt: '黄金永续交易界面' },
                  { src: `${IMG}/optimization-dir-3.png`, alt: '交易偏好弹窗' },
                ]}
              />
              <PhoneFrameRow
                noBackground
                nowrap
                height="h-[533px]"
                frames={[
                  { src: `${IMG}/optimization-dir-4.png`, alt: 'K 线闪电下单' },
                  { src: `${IMG}/optimization-dir-5.png`, alt: '快捷下单窗口' },
                  { src: `${IMG}/optimization-dir-6.png`, alt: '持仓管理界面' },
                ]}
              />
            </div>
          </Section>

          <Section title="数据来源">
            <BodyStack>
              <P>贵金属与商品合约用户及转化路径分析</P>
              <P>股票用户流程路径分析</P>
            </BodyStack>
          </Section>
        </article>
      </div>
    </div>
  )
}
