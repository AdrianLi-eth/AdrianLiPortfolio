import type { SiteContent } from '../content.types'

export const zhContent: SiteContent = {
  profile: {
    name: 'XIWEI.LI',
    shortName: 'XW',
    roles: ['产品设计负责人', '支付', '资金流转与数字资产'],
    headline: '产品设计负责人',
    domain: '支付 · 资金流转 · 数字资产',
    tagline:
      '拥有 12+ 年支付、资金流转与数字资产经验的产品设计负责人——为复杂金融系统设计值得信赖的体验。',
    summary: '5+ 年专注全球市场的资金流转与支付体验设计。',
    focus: '目前关注下一代稳定币支付与金融基础设施。',
    statement: '为复杂金融系统设计清晰、值得信赖的体验。',
    about: [
      '我是一名产品设计负责人，拥有 12+ 年复杂金融产品经验，覆盖支付、资金流转、数字资产与交易场景。',
      '过去 5+ 年，我专注于法币出入金、支付网关、充提、P2P 与跨境金融流程，并主导复杂加密交易产品设计，跨多个业务线指导 40+ 名设计师。',
      '我擅长将复杂金融系统转化为清晰、可信、可扩展的产品体验——连接用户需求、业务目标、运营约束与合规要求。',
      '当前，我特别关注稳定币支付、全球资金流转与金融基础设施。',
    ],
    location: '新加坡',
  },
  contact: {
    email: 'lixiwei3110@gmail.com',
    whatsapp: '+65 8515 8675',
    linkedin: 'https://www.linkedin.com/in/adrian-li-a9b39576',
    linkedinHandle: 'xiweili',
    website: 'xiweili.design',
  },
  stats: [
    { value: '12+', label: '年产品设计经验' },
    { value: '7+', label: '年数字资产经验' },
    { value: '5+', label: '年支付 / 资金流转经验' },
    { value: '95%+', label: 'OKR 完成率' },
    { value: '40+', label: '指导设计师' },
    { value: '30+', label: '交付项目' },
  ],
  experience: [
    {
      role: '设计专家 · 跟单与机器人交易',
      company: 'Bitget',
      period: '2024 — 至今',
      location: '新加坡',
    },
    {
      role: '设计负责人（法币）',
      company: 'Binance',
      period: '2019 — 2024',
      location: '新加坡',
    },
    {
      role: '高级 UX 设计师',
      company: 'LexisNexis',
      period: '2017 — 2019',
      location: '中国上海',
    },
    {
      role: 'UX / UI 设计师',
      company: 'The Active Network',
      period: '2014 — 2016',
      location: '中国成都',
    },
  ],
  projects: [
    {
      index: '01',
      slug: 'buy-crypto-binance',
      title: 'Binance 买币体验改版',
      role: '全球资金流转 · 法币出入金',
      tag: '支付',
      year: '2023',
      image: '/media/buy-crypto/cover.png',
    },
    {
      index: '02',
      slug: 'copy-bot-ux-optimization',
      title: '跟单 + 机器人交易体验优化',
      role: '信任与决策 · 金融市场',
      tag: '金融科技',
      year: '2025',
      image: '/media/copy-bot-ux/cover.png',
    },
    {
      index: '03',
      slug: 'bitget-onboarding-ux-audit',
      title: 'Bitget App+Web 用户引导体验审计',
      role: '金融运营 · 引导与合规',
      tag: '体验审计',
      year: '2024',
      image: '/media/onboarding-ux-audit/cover.png',
    },
    {
      index: '04',
      slug: 'spot-trading-first-trade-conversion',
      title: 'Bitget 现货交易体验优化',
      role: '数字资产交易 · 现货',
      tag: '金融科技',
      year: '2024',
      image: '/media/spot-trading-ftts/cover.png',
    },
    {
      index: '05',
      slug: 'tradfi-trading-ux-optimization',
      title: 'Bitget TradFi 交易体验优化',
      role: '数字资产交易 · TradFi',
      tag: '金融科技',
      year: '2025',
      image: '/media/tradfi-trading-ux/cover.png',
    },
    {
      index: '06',
      slug: 'rtoken-trading-ux-audit',
      title: 'Bitget 市场页设计',
      role: '数字资产交易 · rToken',
      tag: '金融科技',
      year: '2025',
      image: '/media/rtoken-trading-ux/cover.png',
    },
    {
      index: '07',
      slug: 'simplify-design-principle',
      title: '简化设计原则',
      role: '设计策略 · 产品原则',
      tag: '体验策略',
      year: '2024',
      image: '/media/simplify-design-principle/cover.png',
    },
  ],
  strengths: [
    {
      title: '金融产品专长',
      description: '12+ 年复杂金融产品设计与交付经验。',
    },
    {
      title: '支付与资金流转',
      description: '5+ 年法币出入金、充提、P2P 与支付网关经验。',
    },
    {
      title: '数字资产',
      description: '7+ 年加密交易所与交易产品设计经验。',
    },
    {
      title: '设计领导力',
      description: '跨多个业务线带队并指导 40+ 名设计师。',
    },
    {
      title: '系统思维',
      description: '产品架构 · 复杂流程 · 决策设计 · 设计系统',
    },
    {
      title: 'AI 赋能设计流程',
      description:
        '运用 Figma AI、Cursor 与快速原型提升设计效率——作为能力而非标签。',
    },
  ],
  caseStudies: {
    'fiat-on-off-ramp': {
      title: '法币出入金',
      role: '设计负责人',
      year: '2023',
      tag: '支付',
      sections: [
        {
          title: '设计流程',
          content: [
            '我们重新设计了 Web、iOS 与 Android 端到端法币支付体验，将碎片化的区域流程统一为连贯系统。',
          ],
        },
        {
          title: '挑战',
          content: [
            '各地区支付方式、合规要求与用户预期不同——设计系统需要在灵活性与一致性之间取得平衡。',
          ],
        },
        {
          title: '研究',
          content: [
            '跨市场可用性测试（40 名参与者）识别出 KYC 与支付确认环节的关键流失点。',
          ],
        },
        {
          title: '最终界面',
          dark: true,
          content: [
            '统一支付流程推动 MAU 增长 17%+，并通过标准化错误状态与确认模式减少客服工单。',
          ],
        },
      ],
    },
    'merchant-risk-console': {
      title: '商户与风控控制台',
      role: '高级产品设计师',
      year: '2022',
      tag: 'B2B SAAS',
      sections: [
        {
          title: '设计流程',
          content: [
            '从零重构商户运营与风控管理仪表盘，将 12 个遗留工具整合为单一控制台。',
          ],
        },
        {
          title: '挑战',
          content: [
            '合规与商户运营团队的心智模型存在冲突——界面需同时服务双方而不妥协。',
          ],
        },
        {
          title: '最终界面',
          dark: true,
          content: [
            '整合后的控制台通过更清晰的风险信号可视化与审批流程，年均可减少 15,000+ 工单。',
          ],
        },
      ],
    },
  },
  navLinks: [
    { id: 'experience', label: '关于' },
    { id: 'work', label: '作品' },
    { id: 'strength', label: '专长' },
  ],
  ui: {
    portfolio: '作品集',
    contact: '联系',
    backToHome: '返回首页',
    backToTop: '回到顶部',
    skipToContent: '跳至主要内容',
    viewSelectedWork: '查看精选作品',
    about: '关于',
    selectedWork: '精选作品',
    whatIBring: '我的优势',
    experience: '工作经历',
    portraitAlt: '李曦伟肖像照',
    projectNotFound: '未找到该项目。',
    contactHeadlineLine1: '一起创造',
    contactHeadlineLine2: '有价值的产品。',
    openToOpportunities: '开放新的合作机会',
    languageLabel: '语言',
    languageEn: 'EN',
    languageZh: '中文',
  },
}
