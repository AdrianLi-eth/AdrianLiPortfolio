# 二级项目页头部摘要规范（Case Intro）

> 基于 **Buy Crypto 2.0** 页面头部优化实践整理。  
> 目标：用 **My role / Impact / 数据** 三段式结构，替代旧版三列 `HighlightCard`，统一所有 `#/project/<slug>` 详情页顶部的信息层级与视觉表达。  
> **参考实现：** `src/components/BuyCryptoPage.tsx` · **共享组件：** `src/components/project/ProjectShared.tsx`

---

## 1. 设计思路

### 1.1 为什么要改

旧版头部使用三张并排卡片（What I Did / Challenge / Result）：

| 问题 | 说明 |
|------|------|
| 信息重复 | 卡片边框与背景与正文 `Section` 视觉权重相近，头部显得「块状」过重 |
| 阅读路径分散 | 三列并列时，用户需要在列之间横向扫视，不利于快速建立认知 |
| 角色表达不清 | 标签以 pill 形式堆在卡片底部，与正文标签组件混淆 |
| 数据缺乏冲击力 | Result 以编号列表呈现，关键指标不够突出 |

新方案遵循 **「先身份 → 再价值 → 最后用数字佐证」** 的纵向阅读节奏，去掉卡片容器，依靠排版与留白组织信息。

### 1.2 三段式结构

```
H1 项目标题
│
├─ My role      → 我是谁 / 承担什么职能（一句话或短语串联）
├─ Impact       → 我做了什么、解决了什么（定性成果，2–3 条）
└─ 数据         → 可量化的业务结果（2–3 个核心指标）
│
Section（Design Process / Objective …）正文开始
```

### 1.3 与正文的关系

- **头部摘要**：回答「你是谁、做了什么、结果如何」——给招聘方 / 评审者 30 秒内建立印象
- **正文 Section**：回答「怎么做的」——过程、方法、产出物
- 头部 **不写** 完整过程细节；正文 **不重复** 头部已提炼的结论

---

## 2. 布局与间距

### 2.1 容器

```tsx
<CaseIntro>
  {/* My role */}
  {/* Impact */}
  {/* IntroMetrics */}
</CaseIntro>
```

| 属性 | 值 | 说明 |
|------|-----|------|
| 外边距 | `px-4 sm:px-0` | 与 H1、Section 对齐 |
| 段间距 | `gap-10 sm:gap-12` | My role / Impact / 数据 三大块之间 |
| 背景 / 描边 | **无** | 直接落在 `article` 的 `bg-paper` 上 |

### 2.2 位置

- 紧接 **H1 标题** 下方
- 位于第一个正文 `Section`（如 Design Process）之前
- H1 保留 `pb-4`，与头部摘要留出呼吸感

---

## 3. My role

### 3.1 内容来源

由原 `HighlightCard title="What I Did"` 底部的 **tags** 迁移而来，不再使用 pill 标签样式。

```tsx
const ROLE_TAGS = ['Product Research', 'UX Research', 'Data Driven', 'UX / UI'] as const

<div className="flex flex-col gap-2">
  <IntroHeading>My role</IntroHeading>
  <IntroRoleTags tags={[...ROLE_TAGS]} />
</div>
```

### 3.2 样式规则

| 元素 | 样式 | 说明 |
|------|------|------|
| 标题 | 同 `SectionTitle` | `26px` · `font-bold` · `uppercase` · `text-paper-ink` |
| 正文 | `IntroRoleTags` | `15px` · `font-normal` · `leading-[1.75]` · `text-paper-dim` |

### 3.3 文案规则

- 多个职能/能力用 **中点分隔**：`Product Research · UX Research · Data Driven · UX / UI`
- **不要**使用 `Tag` 胶囊组件
- **不要**写成长段落；保持 1 行或自然换行的短语串联
- 若项目角色单一，可直接写：`Product Design`

---

## 4. Impact

### 4.1 内容来源

由原 **Challenge** 与 **What I Did** 卡片内容提炼为 **2–3 条成果陈述**：

| 旧卡片 | 迁移方向 |
|--------|----------|
| Challenge（问题 + 策略） | 转化为「我如何重新定义范围 / 解决核心矛盾」 |
| What I Did（动作列表） | 转化为「我如何用方法验证并落地」 |
| 避免 | 直接复制 bullet list 或编号列表 |

### 4.2 结构

每条 Impact 由 **粗体标题 + 描述段落** 组成：

```tsx
<IntroImpactItem title="Redirected the project scope">
  Prioritized MVP across 20+ fiat buy-crypto channels spanning 350+ pages,
  aligning Product, Design System, and UIKit teams through a clear version-control SOP.
</IntroImpactItem>
```

### 4.3 样式规则

| 元素 | 样式 |
|------|------|
| 区块标题 | `IntroHeading`（同 SectionTitle） |
| 条目标题 | `15px` · `font-bold` · `text-paper-ink` |
| 描述正文 | `15px` · `font-normal` · `leading-[1.75]` · `text-paper-dim` |
| 条间距 | `gap-6` |
| Emoji | **不使用** |

### 4.4 写作原则

1. **标题** = 成果导向的短句（动词开头），如 *Redirected…* / *Clarified…* / *Validated…*
2. **描述** = 1–3 句，交代范围、方法或业务语境
3. 每条聚焦 **一个** 核心贡献，不堆砌多个无关动作
4. 优先写 **决策与影响**，少写纯执行动作（执行细节放正文 Section）

---

## 5. 数据（Metrics）

### 5.1 内容来源

由原 `HighlightCard title="Result"` 迁移，但须满足：

- 指标必须来自 **该项目真实数据**（正文、报告、上线结果）
- **禁止**复用其他项目的数字（如 rToken 的 dwell time、stock module 等）
- 优先选 **2–3 个** 最能体现业务价值的指标

Buy Crypto 示例（摘自正文数据段）：

| 数值 | 标签 |
|------|------|
| `+48.34%` | Step 1→3 conversion lift vs. old design |
| `+3.8%` | User CSAT increase post-launch |
| `−0.6%` | Product defect rate reduction |

### 5.2 组件用法

```tsx
<IntroMetrics
  metrics={[
    { value: '+48.34%', label: 'Step 1→3 conversion lift vs. old design' },
    { value: '+3.8%', label: 'User CSAT increase post-launch' },
    { value: '−0.6%', label: 'Product defect rate reduction' },
  ]}
/>
```

### 5.3 样式规则

| 元素 | 样式 | 说明 |
|------|------|------|
| 布局 | 桌面三列横排，移动端纵向堆叠 | `flex-col sm:flex-row` |
| 分隔 | 细竖线 `border-line` | 桌面列间；移动为顶部分隔线 |
| 数值 | `40px sm:44px` · `font-bold` | 渐变文字，见下 |
| 标签 | `14px` · `text-paper-dim` | `max-w-[220px]`，左对齐 |

### 5.4 数值渐变（主题色）

使用站点主题黄 `--color-accent`（`#d7ff3f`）与 **邻近色青绿** 做渐变，避免黄→白（对比过弱、缺乏层次）：

```tsx
className="bg-gradient-to-r from-accent to-[#6ecfc8] bg-clip-text text-transparent"
```

色彩原理简述：

- 主题黄（黄绿）与青绿为色轮 **邻近色**，对比柔和、适合深色背景上的长时阅读
- 避免黄→白：在 `bg-paper` 深色底上白端几乎不可见
- 避免黄→纯蓝：与站点主色体系不一致

正负增长可用 `+` / `−` 前缀表达，无需额外颜色区分。

---

## 6. 共享组件 API

均位于 `src/components/project/ProjectShared.tsx`：

| 组件 | 用途 |
|------|------|
| `CaseIntro` | 头部三段式外层容器 |
| `IntroHeading` | My role / Impact 标题（内部复用 `SectionTitle`） |
| `IntroRoleTags` | My role 正文（tags 数组 → 中点串联） |
| `IntroImpactItem` | 单条 Impact（`title` + children 描述） |
| `IntroMetrics` | 数据三列（`metrics: { value, label }[]`） |

### 完整示例

```tsx
import {
  CaseIntro,
  IntroHeading,
  IntroImpactItem,
  IntroMetrics,
  IntroRoleTags,
  Section,
} from './project/ProjectShared'

const ROLE_TAGS = ['Product Research', 'UX Research', 'Data Driven', 'UX / UI'] as const

// 在 article 内、H1 下方：
<CaseIntro>
  <div className="flex flex-col gap-2">
    <IntroHeading>My role</IntroHeading>
    <IntroRoleTags tags={[...ROLE_TAGS]} />
  </div>

  <div className="flex flex-col gap-6">
    <IntroHeading>Impact</IntroHeading>
    <div className="flex flex-col gap-6">
      <IntroImpactItem title="…">…</IntroImpactItem>
      <IntroImpactItem title="…">…</IntroImpactItem>
      <IntroImpactItem title="…">…</IntroImpactItem>
    </div>
  </div>

  <IntroMetrics metrics={[…]} />
</CaseIntro>

<Section title="Design Process">…</Section>
```

---

## 7. 从 HighlightCard 迁移指南

### 7.1 内容映射表

| 旧 HighlightCard | 新结构 | 操作 |
|------------------|--------|------|
| What I Did · tags | **My role** | tags → `IntroRoleTags`，去掉 pill |
| What I Did · body | **Impact**（部分） | 提炼为 1 条「方法 / 验证」类 Impact |
| Challenge | **Impact**（部分） | 问题 + 策略 → 「范围 / 流程」类 Impact |
| Result · 列表 | **IntroMetrics** | 改为 2–3 个数字 + 短标签；核对数据真实性 |

### 7.2 建议执行步骤

1. 列出原三张卡片的 tags、bullet、Result 数字
2. 写 My role 一行（tags 串联）
3. 将 Challenge + What I Did 归纳为 **2–3 条** Impact（成果导向标题）
4. 从正文或报告确认 **2–3 个** 核心指标，填入 `IntroMetrics`
5. 删除 `HighlightCard` 相关 import 与 JSX
6. 目视检查：H1 → CaseIntro → 第一个 Section 的阅读节奏

### 7.3 待迁移页面

| Slug | 文件 | 头部状态 |
|------|------|----------|
| `buy-crypto-binance` | `BuyCryptoPage.tsx` | ✅ 已迁移 |
| `tradfi-trading-ux-optimization` | `TradFiTradingUxPage.tsx` | ⬜ HighlightCard |
| `rtoken-trading-ux-audit` | `RTokenTradingUxPage.tsx` | ⬜ HighlightCard |
| `spot-trading-first-trade-conversion` | `SpotTradingFttsPage.tsx` | ⬜ HighlightCard |
| `copy-bot-ux-optimization` | `CopyBotUxPage.tsx` | ⬜ 待确认 |
| `bitget-onboarding-ux-audit` | `OnboardingUxAuditPage.tsx` | ⬜ 待确认 |
| `simplify-design-principle` | `SimplifyDesignPrinciplePage.tsx` | ⬜ 无顶部卡片，按需补充 |

---

## 8. 检查清单

每迁移一个页面，逐项确认：

- [ ] 已移除顶部 `HighlightCard` 三列布局
- [ ] My role 使用正文样式，**无** Tag pill
- [ ] My role / Impact 标题使用 `IntroHeading`（与 Design Process 等 Section 标题一致）
- [ ] Impact **无** emoji，每条为「粗体标题 + 描述」
- [ ] Impact 2–3 条，成果导向，非原始 bullet 粘贴
- [ ] 数据指标来自 **本项目** 真实结果
- [ ] 数据数值使用 `from-accent to-[#6ecfc8]` 渐变
- [ ] 数据区无卡片边框 / 背景块
- [ ] `npm run build` 通过
- [ ] 在 `http://127.0.0.1:5173/#/project/<slug>` 目视检查

---

## 9. 与现有文档的关系

- **页面外壳、正文章节、图片、表格：** 仍遵循 [`project-detail-page-style-guide.md`](./project-detail-page-style-guide.md)
- **头部摘要：** 以本文档为准；该文档 §4 HighlightCard 为 **旧版方案**，新页面请使用 **Case Intro**

---

*文档版本：2026-08-16 · 基于 Buy Crypto 头部优化*
