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

const IMG = '/media/spot-trading-ftts'

const ROLE_TAGS = ['产品研究', '用户体验研究', '数据驱动', '用户体验 / 界面设计'] as const

const EXECUTION_PLAN = [
  {
    scenario: '链上充值 FTTS',
    optimization: (
      <>
        <p>1）允许用户通过充值通知跳转至账单页；</p>
        <p>
          2）在账单页增加热门现货交易对，引导用户跳转现货下单页，缩短转化路径；
        </p>
      </>
    ),
    eta: '11 月',
  },
  {
    scenario: '银行卡购买 FTTS',
    optimization: <p>1）在成功页增加交易入口；</p>,
    eta: '产品评审中（低优先级）',
  },
  {
    scenario: 'P2P 充值 FTTS',
    optimization: (
      <>
        <p>1）提供资金划转入口；</p>
        <p>2）交易完成后增加现货交易入口；</p>
      </>
    ),
    eta: '产品评审中（低优先级）',
  },
  {
    scenario: '资金划转 FTTS',
    optimization: <p>1）在成功页增加交易入口；</p>,
    eta: '11 月',
  },
  {
    scenario: '活动奖励 FTTS（Launchpool/PoolX）',
    optimization: (
      <>
        <p>
          1）在锁仓区域为奖励代币增加资产详情入口，允许用户直接跳转该代币的现货交易；
        </p>
        <p>
          2）在 PoolX 交易详情页为奖励代币增加资产详情入口，允许用户直接跳转现货交易；
        </p>
      </>
    ),
    eta: '11 月',
  },
]

const th =
  'border border-line bg-surface-2 px-4 py-3 text-left text-[13px] font-semibold text-paper-ink'
const td = 'border border-line px-4 py-3 align-top text-[14px] leading-[1.65] text-paper-dim'

export default function SpotTradingFttsPageZh() {
  return (
    <div className="min-h-screen bg-bg pb-28 sm:pb-36">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <article className="flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 [font-family:'Noto_Sans_SC',sans-serif]">
          <h1 className="px-4 pb-4 text-[36px] font-bold leading-[1.4] text-paper-ink sm:px-0">
            如何提升首次现货交易（FTTS）转化率
          </h1>

          <CaseIntro>
            <div className="flex flex-col gap-2">
              <IntroHeading>我的角色</IntroHeading>
              <IntroRoleTags tags={[...ROLE_TAGS]} />
            </div>

            <div className="flex flex-col gap-6">
              <IntroHeading>成果</IntroHeading>
              <div className="flex flex-col gap-6">
                <IntroImpactItem title="分析 FTTS 交易量趋势与增长驱动因素">
                  梳理首次现货交易量趋势，识别增长驱动因素及转化漏斗中的流失节点。
                </IntroImpactItem>
                <IntroImpactItem title="梳理三大核心转化场景">
                  梳理三大核心 FTTS 场景下的用户路径，定位体验摩擦点并提出针对性优化建议。
                </IntroImpactItem>
                <IntroImpactItem title="制定优先级明确的执行计划">
                  对标竞品，将研究发现转化为分阶段的执行计划，明确充值、划转与奖励等流程的设计与产品优先级。
                </IntroImpactItem>
              </div>
            </div>

            <IntroMetrics
              metrics={[
                { value: '+7.2%', label: '现货交易 UV 提升' },
                { value: '+3.8%', label: 'FTTS 转化率提升' },
              ]}
            />
          </CaseIntro>

          <Section title="目标">
            <P>
              提升首次现货交易转化率是当前阶段的核心业务目标。通过分析关键场景与用户路径，优化用户体验、
              降低转化漏斗中的摩擦点，最终提升转化率。
            </P>
          </Section>

          <Section title="影响首次现货交易的因素">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="flex w-full max-w-[259px] flex-col gap-2">
                <P small>8 月 26 日 FTTS 交易量显著增长</P>
                <WideImg src={`${IMG}/ftts-spike.png`} alt="FTTS 交易量激增" />
              </div>
              <div className="min-w-0 flex-1 flex-col gap-2">
                <P small>8 月 26 日 P2P 交易量激增</P>
                <WideImg src={`${IMG}/p2p-surge.png`} alt="P2P 交易量激增" />
              </div>
            </div>
            <P>
              从代币维度看，新币 Dogs 带动了 26 日整体 FTTS 转化
            </P>
            <WideImg src={`${IMG}/token-chart.png`} alt="代币 FTTS 图表" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <WideImg src={`${IMG}/chart-a.png`} alt="FTTS 图表 A" />
              <WideImg src={`${IMG}/chart-b.png`} alt="FTTS 图表 B" />
            </div>
          </Section>

          <Section title="影响首次现货交易的因素">
            <P>
              当新币上线、Launchpad 活动及站外推广活动发生时，首次现货交易量会出现显著增长。此外，
              活动结束后数日，用户卖出奖励代币会进一步带动 FTTS 转化提升。
            </P>
          </Section>

          <Section title="核心 FTTS 转化场景">
            <BodyStack>
              <NumberedItem n={1}>
                <P>
                  {`充值后转现货交易（链上充值 > P2P 资金划转 > 银行卡购买）；`}
                </P>
              </NumberedItem>
              <NumberedItem n={2}>
                <P>活动奖励资产转现货交易（LaunchPool - PoolX）；</P>
              </NumberedItem>
              <NumberedItem n={3}>
                <P>
                  站外获客转现货交易（涉及活动策划，难以用设计量化）；
                </P>
              </NumberedItem>
            </BodyStack>
          </Section>

          <Section title="执行计划">
            <p className="text-[15px] text-[#2666e5] underline">设计方案 👉</p>
            <div className="w-full overflow-x-auto rounded-lg">
              <table className="w-full min-w-[930px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className={`${th} w-[160px]`}>场景</th>
                    <th className={`${th} w-[100px] text-center`}>数量</th>
                    <th className={`${th} min-w-[460px]`}>优化方案</th>
                    <th className={`${th} w-[210px]`}>上线时间</th>
                  </tr>
                </thead>
                <tbody>
                  {EXECUTION_PLAN.map((row, index) => (
                    <tr key={row.scenario}>
                      <td className={td}>{row.scenario}</td>
                      {index === 0 ? (
                        <td
                          rowSpan={EXECUTION_PLAN.length}
                          className={`${td} text-center align-middle font-bold text-paper-ink`}
                        >
                          8
                        </td>
                      ) : null}
                      <td className={td}>{row.optimization}</td>
                      <td className={td}>{row.eta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="各场景 FTTS 转化节点">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <SubTitle>充值后转现货交易</SubTitle>
                <P small>P2P 充值 --&gt; 资金划转 --&gt; 交易新币 --&gt; 卖出新币</P>
                <P small>银行卡购买 --&gt; 交易新币 --&gt; 卖出新币</P>
                <P small>加密货币充值 --&gt; 交易新币 --&gt; 卖出新币</P>
                <P>用户主要通过 P2P 与银行卡渠道充值</P>
                <WideImg
                  src={`${IMG}/deposit-pie.png`}
                  alt="充值渠道分布"
                  className="max-w-[531px]"
                />

                <div className="w-full overflow-x-auto rounded-lg">
                  <table className="w-full min-w-[1000px] border-collapse text-left">
                    <thead>
                      <tr>
                        <th className={`${th} w-20`}>场景</th>
                        <th className={`${th} w-80`}>痛点与优化</th>
                        <th className={`${th} w-48`}>Bitget</th>
                        <th className={`${th} w-48`}>OKX</th>
                        <th className={`${th} w-48`}>Binance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={td}>P2P 充值</td>
                        <td className={td}>
                          <p className="mb-1 text-[13px] font-medium text-paper-ink">痛点：</p>
                          <p className="mb-2 text-[13px]">
                            充值完成后，用户需手动前往现货交易购买新币（资金划转后），容易流失；
                          </p>
                          <p className="mb-1">优化方案：</p>
                          <p>
                            1）提供资金划转入口；2）交易完成后增加现货交易入口；
                          </p>
                          <div className="mt-3 grid grid-cols-2 gap-1.5">
                            <WideImg src={`${IMG}/p2p-design-1.png`} alt="P2P 设计方案 1" />
                            <WideImg src={`${IMG}/p2p-design-2.png`} alt="P2P 设计方案 2" />
                          </div>
                        </td>
                        <td className={td}>
                          <WideImg src={`${IMG}/p2p-bitget.png`} alt="P2P Bitget" />
                        </td>
                        <td className={td}>
                          <div className="flex flex-col gap-4">
                            <WideImg src={`${IMG}/p2p-okx-1.png`} alt="P2P OKX 1" />
                            <WideImg src={`${IMG}/p2p-okx-2.png`} alt="P2P OKX 2" />
                          </div>
                        </td>
                        <td className={td}>
                          <WideImg src={`${IMG}/p2p-binance.png`} alt="P2P Binance" />
                        </td>
                      </tr>
                      <tr>
                        <td className={td}>资金划转</td>
                        <td className={td}>
                          <p>1. 增加成功页与交易入口；</p>
                          <p>划转至现货账户：现货交易</p>
                          <p>划转至合约账户：合约交易</p>
                          <p>划转至资金账户：P2P 交易</p>
                          <div className="mt-3">
                            <WideImg src={`${IMG}/fund-transfer-design.png`} alt="资金划转设计方案" />
                          </div>
                        </td>
                        <td className={td}>
                          <WideImg src={`${IMG}/fund-transfer-bitget.png`} alt="资金划转 Bitget" />
                        </td>
                        <td className={td}>无引导</td>
                        <td className={td}>
                          <WideImg
                            src={`${IMG}/fund-transfer-binance.png`}
                            alt="资金划转 Binance"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className={td}>银行卡购买</td>
                        <td className={td}>
                          <p>1. 在成功页增加交易入口；</p>
                          <div className="mt-3">
                            <WideImg src={`${IMG}/card-pain.png`} alt="银行卡购买设计方案" />
                          </div>
                        </td>
                        <td className={td}>
                          <WideImg src={`${IMG}/card-bitget.png`} alt="银行卡 Bitget" />
                        </td>
                        <td className={td}>暂无案例</td>
                        <td className={td}>
                          <WideImg src={`${IMG}/card-binance.png`} alt="银行卡 Binance" />
                        </td>
                      </tr>
                      <tr>
                        <td className={td}>链上充值</td>
                        <td className={td}>
                          <p className="mb-2">充值通知 --&gt; 查看资产</p>
                          <p className="mb-1 text-[13px] font-medium text-paper-ink">痛点：</p>
                          <p className="mb-2 text-[13px]">
                            1）用户需手动前往资产页查看充值状态；2）在账单页，用户需手动前往现货市场进行交易；
                          </p>
                          <p className="mb-1 text-[13px] font-medium text-paper-ink">优化方案：</p>
                          <p className="text-[13px]">
                            1）允许用户通过充值通知跳转至账单页；2）在账单页增加热门现货交易对，
                            引导用户跳转现货下单页，缩短转化路径；
                          </p>
                          <div className="mt-3">
                            <WideImg
                              src={`${IMG}/deposit-binance-design.png`}
                              alt="充值设计方案"
                            />
                          </div>
                        </td>
                        <td className={td}>
                          <div className="grid grid-cols-2 gap-1.5">
                            <WideImg src={`${IMG}/deposit-bitget-1.png`} alt="充值 Bitget 1" />
                            <WideImg src={`${IMG}/deposit-bitget-2.png`} alt="充值 Bitget 2" />
                          </div>
                        </td>
                        <td className={td}>
                          <div className="grid grid-cols-2 gap-4">
                            <WideImg src={`${IMG}/deposit-okx-1.png`} alt="充值 OKX 1" />
                            <WideImg src={`${IMG}/deposit-okx-2.png`} alt="充值 OKX 2" />
                          </div>
                        </td>
                        <td className={td}>
                          <WideImg
                            src={`${IMG}/deposit-binance-design.png`}
                            alt="充值 Binance"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>活动奖励资产转现货交易</SubTitle>
                <P small>充值 --&gt; PoolX 质押 --&gt; 查看理财资产 --&gt; 卖出新币</P>
                <div className="w-full overflow-x-auto rounded-lg">
                  <table className="w-full min-w-[1000px] border-collapse text-left">
                    <thead>
                      <tr>
                        <th className={`${th} w-20`}>场景</th>
                        <th className={`${th} w-80`}>痛点与优化</th>
                        <th className={`${th} w-48`}>Bitget</th>
                        <th className={`${th} w-48`}>OKX</th>
                        <th className={`${th} w-48`}>Binance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={td}>PoolX 质押</td>
                        <td className={td}>
                          <div className="flex gap-1 text-[12px] leading-[1.5]">
                            <span className="shrink-0 font-medium text-paper-ink">痛点：1）</span>
                            <span>
                              质押成功后，用户无法从锁仓区域直接交易奖励代币，需手动前往现货钱包的代币详情页才能进入现货交易；
                            </span>
                          </div>
                          <div className="mt-2 flex gap-1 text-[12px] leading-[1.5]">
                            <span className="shrink-0 font-medium text-paper-ink">2）</span>
                            <span>
                              查看理财钱包中的 PoolX 进行中交易详情时，用户无法看到奖励代币信息，
                              需手动前往现货钱包查看并交易；
                            </span>
                          </div>
                          <div className="mt-2 flex gap-1 text-[12px] leading-[1.5]">
                            <span className="shrink-0 font-medium text-paper-ink">优化方案：</span>
                            <span>
                              1）在锁仓区域增加奖励代币资产详情入口，允许用户直接跳转现货交易；
                              2）在 PoolX 交易详情页增加奖励代币资产详情入口，允许用户直接跳转现货交易；
                            </span>
                          </div>
                        </td>
                        <td className={td}>
                          <div className="grid grid-cols-2 gap-0.5">
                            <WideImg src={`${IMG}/poolx-bitget-1.png`} alt="PoolX Bitget 1" />
                            <WideImg src={`${IMG}/poolx-bitget-2.png`} alt="PoolX Bitget 2" />
                          </div>
                        </td>
                        <td className={td}>无引导</td>
                        <td className={td}>无引导</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <SubTitle>界面设计</SubTitle>
                <WideImg
                  src={`${IMG}/ui-design-1.png`}
                  alt="界面设计流程 1"
                  className="max-w-[493px]"
                />
                <WideImg src={`${IMG}/ui-design-2.png`} alt="界面设计流程 2" />
              </div>
            </div>
          </Section>
        </article>
      </div>
    </div>
  )
}
