# 二级项目详情页 — 排版与结构规范

> 基于 **TradFi Trading UX Optimization** 页面的优化实践整理。  
> 目标：统一所有 `#/project/<slug>` 详情页的字体、间距、布局与阅读节奏，提升易读性。  
> **状态：已批量执行（2026-08-14）。**

---

## 1. 适用范围

| Slug | 页面文件 | 当前状态 |
|------|----------|----------|
| `tradfi-trading-ux-optimization` | `TradFiTradingUxPage.tsx` | ✅ 已按本规范优化 |
| `buy-crypto-binance` | `BuyCryptoPage.tsx` | ✅ 已按本规范优化 |
| `rtoken-trading-ux-audit` | `RTokenTradingUxPage.tsx` | ✅ 已按本规范优化 |
| `spot-trading-first-trade-conversion` | `SpotTradingFttsPage.tsx` | ✅ 已按本规范优化 |
| `copy-bot-ux-optimization` | `CopyBotUxPage.tsx` | ✅ 已按本规范优化 |
| `bitget-onboarding-ux-audit` | `OnboardingUxAuditPage.tsx` | ✅ 已按本规范优化 |
| `simplify-design-principle` | `SimplifyDesignPrinciplePage.tsx` | ✅ 已按本规范优化 |
| `case-study/*` | `CaseStudyPage.tsx` | ✅ 已按本规范优化 |

---

## 2. 页面外壳（Page Shell）

### 2.1 外层容器

```tsx
<div className="min-h-screen bg-bg py-28 sm:py-36">
  <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
    <BackToHome />
    <article>...</article>
  </div>
</div>
```

- 最大宽度：**1200px**
- 页面背景：`bg-bg`
- 顶部留白：`py-28 sm:py-36`（为固定 Nav 留空）

### 2.2 文章容器 `<article>`

```tsx
<article className="flex w-full flex-col gap-4 border border-line bg-paper pb-20 pt-16 sm:px-16 sm:pb-20 sm:pt-16 [font-family:'Noto_Sans_SC',sans-serif]">
```

| 属性 | 值 | 说明 |
|------|-----|------|
| 纵向间距 | `gap-4` | 章节之间用 `Section` 的 `pt-12` 控制，不用 `gap-16` |
| 内边距 | `pt-16 sm:px-16 sm:pb-20` | 统一四边，避免 `pt-[72px] sm:px-20` 等异值 |
| 背景 | `bg-paper` | 内容区纸张色 |
| 外框 | `border border-line` | 仅 article 保留描边，内部卡片不加 |

### 2.3 返回首页

- 使用全局 `BackToHome` 组件（已 sticky 置顶）
- **不要**在 article 内重复实现返回入口

---

## 3. 字体体系（Typography）

统一字体：**Noto Sans SC**

| 层级 | 元素 | 字号 | 字重 | 行高 | 颜色 | Tailwind 参考 |
|------|------|------|------|------|------|---------------|
| H1 | 项目标题 | 36px | bold (700) | 1.4 | `text-paper-ink` | `text-[36px] font-bold leading-[1.4]` |
| H2 | 章节标题 | 26px | bold (700) | 1.4 | `text-paper-ink` | `text-[26px] font-bold leading-[1.4]` |
| H3 | 小节标题 | 19px | bold (700) | 1.5 | `text-paper-ink` | `text-[19px] font-bold leading-[1.5]` |
| Body | 正文 | 15px | normal (400) | 1.75 | `text-paper-dim` | `text-[15px] leading-[1.75]` |
| Body Emphasis | 强调正文 | 15px | semibold (600) | 1.75 | `text-paper-ink` | `font-semibold text-paper-ink` |
| Small | 辅助说明 | 13px | normal | 1.65 | `text-paper-dim` | `text-[13px] leading-[1.65]` |
| Tag | 标签 | 12px | normal | — | `text-paper-dim` | `text-[12px]` |

### 规则

- H1 左对齐，下方 `pb-4`（有顶部卡片时）或 `pb-8`
- **禁止**混用 `font-medium` 作为章节标题字重（统一用 `font-bold`）
- **禁止**混用 `tracking-[-0.3px]` 等个别页面的负字距
- 正文颜色只用 `text-paper-dim`，强调信息用 `medium` 变体，不用额外灰色

---

## 4. 顶部摘要卡片（Highlight Cards）

### 4.1 布局

```tsx
<section className="flex flex-col gap-5 px-4 sm:px-0">
  <div className="flex flex-col gap-5 lg:flex-row">
    <HighlightCard title="What I Did" tags={[...]}>...</HighlightCard>
    <HighlightCard title="Challenge">...</HighlightCard>
    <HighlightCard title="Result">...</HighlightCard>
  </div>
</section>
```

- 位于 H1 正下方
- 桌面端横向排列（`lg:flex-row`），移动端纵向堆叠
- 卡片之间间距：`gap-5`

### 4.2 卡片样式（重点）

```tsx
// ✅ 推荐（TradFi 已落地）
<div className="flex min-w-0 flex-1 flex-col gap-3.5 rounded-2xl bg-surface-2 px-6 py-6 sm:px-8 sm:py-7">

// ❌ 淘汰
<div className="... border border-line ...">          // 有描边
<div className="... border-[1.5px] border-line ...">  // 有描边
```

| 属性 | 值 |
|------|-----|
| 圆角 | `rounded-2xl` |
| 背景 | `bg-surface-2` |
| 描边 | **无** |
| 内边距 | `px-6 py-6 sm:px-8 sm:py-7` |
| 标题字号 | `text-[20px] sm:text-[22px] font-bold` |
| 内容区间距 | `gap-3` |

### 4.3 标签 Tag

```tsx
<span className="inline-flex h-[25px] items-center rounded-full bg-paper px-3 text-[12px] text-paper-dim">
```

- 圆角胶囊，**无描边**
- 背景 `bg-paper`，与卡片 `bg-surface-2` 形成轻微对比

---

## 5. 章节结构（Section）

### 5.1 Section 组件

```tsx
<Section title="Optimization Objective">
  <P>...</P>
</Section>
```

```tsx
function Section({ title, children, className = '' }) {
  return (
    <section className={`flex flex-col gap-4 px-4 pt-12 sm:px-0 ${className}`}>
      {title ? <SectionTitle>{title}</SectionTitle> : null}
      {children}
    </section>
  )
}
```

| 属性 | 值 | 说明 |
|------|-----|------|
| 章节上间距 | `pt-12` | 统一阅读节奏，首章节亦用 `pt-12` |
| 章节内间距 | `gap-4` | 标题与第一段之间 |
| 移动端边距 | `px-4 sm:px-0` | article 已有 `sm:px-16` |

### 5.2 章节内子分组

竞品分析、多方案对比等长内容，在 `Section` 内再包一层：

```tsx
<div className="flex flex-col gap-8 pt-2">
  <div className="flex flex-col gap-4">
    <SubTitle>Gate</SubTitle>
    <BodyStack>...</BodyStack>
    <ImgRow ... />
  </div>
  <div className="flex flex-col gap-4">
    <SubTitle>Binance</SubTitle>
    ...
  </div>
</div>
```

- 子分组间距：`gap-8`
- 子分组内（标题 + 正文 + 图）：`gap-4`

---

## 6. 段落与阅读节奏（BodyStack）

### 6.1 段落栈

连续正文、列表、编号项应包在 `BodyStack` 内：

```tsx
function BodyStack({ children }) {
  return <div className="flex flex-col gap-3">{children}</div>
}
```

- 段落间距：**12px**（`gap-3`）
- **不要**用 `<Spacer />` / `&nbsp;` 空段落撑间距
- **不要**用 `<Hr />` 分割相邻章节（用 `Section` 的 `pt-12` 代替）

### 6.2 编号列表 NumberedItem

```tsx
<div className="flex gap-2">
  <span className="w-5 shrink-0 text-[15px] font-semibold leading-[1.75] text-paper-ink">1.</span>
  <div className="min-w-0 flex-1">{children}</div>
</div>
```

- 序号与正文顶部对齐
- 序号宽度固定 `w-5`，避免 `1.` / `10.` 错位
- 子内容使用 `<P>` 组件，字号 15px

### 6.3 路径 / 引语标注

路径名、用户原话等短标签用 `<P medium>`：

```tsx
<P medium>Path 1: TradFi - Perpetual Market - K-line - Trading Page</P>
```

---

## 7. 图片（Images）

### 7.1 通用规则

- 图片容器：**不加 border**
- 容器背景：`bg-surface-2`
- 容器圆角：`rounded-lg`
- 通栏宽图：`object-contain`
- 手机截图：按场景选用下方 **PhoneFrameRow** / **ImgRow** / **Phone** 规则

### 7.2 WideImg（通栏图）

```tsx
<div className="overflow-hidden rounded-lg bg-surface-2">
  <img className="h-auto w-full object-contain" />
</div>
```

### 7.3 PhoneFrameRow（多图单行 · 视觉等高 · 完整显示）

**适用场景：** 多张手机截图需排在**同一行**、**视觉高度一致**、**完整显示不裁切**（如竞品导航结构对比、Gate 四屏横排）。

**参考实现：** `TradFiShared.tsx` → `PhoneFrameRow`；Figma 节点示例：`52:1701`。

```tsx
<PhoneFrameRow
  height="h-[533px]"  // 可选，默认 h-[533px]
  frames={[
    { src: `${IMG}/gate-nav-1.png`, alt: 'Gate navigation 1' },
    { src: `${IMG}/gate-nav-2.png`, alt: 'Gate navigation 2' },
    { src: `${IMG}/gate-nav-3.png`, alt: 'Gate navigation 3' },
    { src: `${IMG}/gate-nav-4.png`, alt: 'Gate navigation 4' },
  ]}
/>
```

```tsx
function PhoneFrameRow({ frames, className = '', height = 'h-[533px]' }) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      {frames.map((frame) => (
        <img
          key={frame.src}
          src={frame.src}
          alt={frame.alt}
          className={`${height} w-auto shrink-0 rounded-lg bg-surface-2`}
        />
      ))}
    </div>
  )
}
```

| 属性 | 值 | 说明 |
|------|-----|------|
| 排列 | `flex items-start gap-3` | 单行横排，**不折行** |
| 统一高度 | `h-[533px]`（默认） | 所有图片视觉高度一致；可按 Figma 调整 |
| 宽度 | `w-auto` | 随比例自动计算，**禁止**固定宽度撑变形 |
| 缩放 | 以高度为基准等比缩放 | 保证截图完整可见 |
| 间距 | `gap-3`（12px） | 与 Figma `gap-[12px]` 对齐 |

**Figma 对齐参考（TradFi Gate 导航，node `52:1701`）：**

| 图 | Figma 帧尺寸 | 说明 |
|----|-------------|------|
| gate-nav-1 | 244 × 530px | 资源以 Figma 导出为准 |
| gate-nav-2 | 243 × 528px | |
| gate-nav-3 | 244 × 530px | |
| gate-nav-4 | 244 × 533px | 取最高 533px 作为统一行高 |

> 实现时**不**为每张图单独设固定宽高容器，而是统一 `height` + `w-auto`，避免各图比例不同导致视觉高度不齐。

### 7.4 ImgRow（多图横排 · 可折行）

**适用场景：** 多张截图可换行、或单张宽度固定（如痛点截图、路径步骤图）。

```tsx
// 默认：可折行 + 固定宽度
<ImgRow
  images={[
    { src: `${IMG}/pain-1.png`, alt: '...', className: 'w-[243px]' },
    { src: `${IMG}/pain-2.png`, alt: '...', className: 'w-[245px]' },
  ]}
/>

// nowrap：单行等分（较少用，优先 PhoneFrameRow）
<ImgRow nowrap rowHeight="h-[500px]" images={[...]} />
```

| 模式 | 布局 | 图片样式 |
|------|------|----------|
| 默认 `flex-wrap` | 可折行 | 容器固定宽（如 `w-[244px]`），`h-auto w-full` |
| `nowrap` | 单行 `flex-nowrap` | 容器 `flex-1` + 统一 `rowHeight`，`object-contain` |

- 图片间距：`gap-3`
- 手机截图需限制宽度（如 `w-[244px]`），避免 `w-full` 撑满内容区

### 7.5 手机截图 Phone（单张 / 网格内）

- 必须有明确 `width` 或 `max-width` preset
- 禁止无约束 `w-full` 导致截图拉伸至 1000px+
- 网格或双栏布局中可配合 `frame` 预设高度（如 `h-[533px]`）

### 7.6 图片缩放 — 选型与反模式

| 需求 | 推荐方案 | 避免 |
|------|----------|------|
| 单行多图、视觉等高、完整显示 | `PhoneFrameRow`：`h-[533px] w-auto` | 固定容器 + `object-contain`（易产生上下留白，视觉高度不齐） |
| 单行多图、可裁切顶部 | 固定高容器 + `object-cover object-top` | 用于需填满框且可接受裁边的场景 |
| 需完整显示但被裁左右 | — | `object-cover` 会裁切两侧，**不要**用于竞品对比截图 |
| 多图可换行 | `ImgRow` + 各图 `className: w-[244px]` | — |
| 从 Figma 更新资源 | 重新导出 PNG → `public/media/<slug>/` | 不要长期使用 Figma MCP 临时 URL（约 7 天过期） |

**原则摘要：**

1. **视觉等高** → 统一 `height`，宽度 `w-auto` 等比缩放  
2. **完整显示** → 不用 `object-cover`；不用「固定宽高框 + `object-contain`」代替等高（框比例与图不一致时会留白）  
3. **单行不折行** → `PhoneFrameRow` 或 `ImgRow nowrap`  
4. **尺寸以 Figma 为准** → 行高取设计稿最高帧（如 533px），资源重新抓取后覆盖本地文件

---

## 8. 表格（Tables）

```tsx
<div className="w-full overflow-x-auto rounded-lg">
  <table className="w-full min-w-[640px] border-collapse text-left text-[14px] text-paper-dim">
    <th className="border border-line bg-surface-2 px-4 py-3 text-[13px] font-semibold text-paper-ink" />
    <td className="border border-line px-4 py-3 align-top leading-[1.65]" />
  </table>
</div>
```

- 表头：`13px font-semibold text-paper-ink`
- 单元格：`14px leading-[1.65]`
- 表格外层容器：`rounded-lg` + `overflow-x-auto`
- 表格保留 border（与图片规则不同）

---

## 9. 信息强调块（可选）

用于痛点、洞察等高亮：

```tsx
<div className="rounded-lg bg-[rgba(251,191,188,0.15)] px-3 py-2">
  <p className="text-[15px] leading-[1.75] text-[#ff8a80]">...</p>
</div>
```

数据摘要（如漏斗转化率）可用浅色圆角底：

```tsx
<div className="flex flex-col gap-4 rounded-xl bg-surface-2 p-5 lg:flex-row lg:items-start">
```

---

## 10. 对齐方式

| 场景 | 对齐 |
|------|------|
| 标题、正文 | 左对齐 |
| H1 | 左对齐（`sm:px-0`，移动端 `px-4`） |
| 图片组 | 左对齐起始，允许 `flex-wrap` |
| 表格 | 左对齐，`align-top` |
| 双栏（文 + 图） | 桌面左文右图或左图右文，移动端纵向堆叠 |

---

## 11. 推荐组件抽取方案

为避免 7 个页面各自维护重复组件，建议新建：

```
src/components/project/
  ProjectPageShell.tsx    // 外壳 + article + BackToHome
  ProjectTypography.tsx   // Section, SectionTitle, SubTitle, P, BodyStack, NumberedItem
  ProjectMedia.tsx        // WideImg, ImgRow, PhoneFrameRow, Phone
  HighlightCard.tsx       // 顶部圆角卡片 + Tag
  DataTable.tsx           // 表格
```

各项目页只保留：**内容数据 + 页面特有布局**（如 CopyBot 的 Structural Plan 双栏）。

---

## 12. 单页迁移检查清单

每迁移一个页面，逐项确认：

- [ ] 外层容器 `max-w-[1200px]` + `py-28 sm:py-36`
- [ ] `<article>` 使用统一 padding / `gap-4`
- [ ] H1：`36px bold`，左对齐
- [ ] 顶部 HighlightCard：`rounded-2xl`，**无 border**
- [ ] Tag：胶囊形，**无 border**
- [ ] 章节改用 `<Section title="...">`
- [ ] 连续段落包在 `<BodyStack>`
- [ ] 移除 `<Spacer />`、多余 `<Hr />`
- [ ] SectionTitle：`26px bold`；SubTitle：`19px bold`
- [ ] 正文：`15px / leading-1.75 / text-paper-dim`
- [ ] 图片容器：`rounded-lg bg-surface-2`，**无 border**
- [ ] 单行多图且需视觉等高：`PhoneFrameRow`（`h-[533px] w-auto`）
- [ ] 可折行多图：`ImgRow` + 固定宽度
- [ ] 手机截图有宽度限制，禁止无约束 `w-full`
- [ ] 表格字号 / 内边距符合规范
- [ ] `npm run build` 通过
- [ ] 在 `http://127.0.0.1:5173/#/project/<slug>` 目视检查阅读节奏

---

## 13. 建议执行顺序

1. 抽取共享组件（`src/components/project/`）
2. **Buy Crypto**、**rToken** — 已有较接近结构，改顶部卡片 + Section 即可
3. **Spot Trading FTTS**、**Onboarding UX Audit** — 间距与卡片统一
4. **Copy Bot UX** — 字号体系统一，保留特有双栏布局
5. **Simplify Design Principle**、**CaseStudyPage** — 最后处理特殊布局

---

## 14. 参考实现

- 共享组件：`src/components/project/ProjectShared.tsx`（`Section`, `P`, `BodyStack`, `HighlightCard`, `Tag`, `NumberedItem`, `WideImg`, `ImgRow`, `PhoneFrameRow`）
- TradFi 页面：`src/components/TradFiTradingUxPage.tsx`（仍使用 `tradfi/TradFiShared.tsx`，可后续合并）
- Copy Bot 页面：`src/components/CopyBotUxPage.tsx`

---

*文档版本：2026-08-14 · 含 PhoneFrameRow 图片尺寸规则 · 全部页面已迁移*
