# Portfolio Project Guide

Xiwei Li 个人作品集网站 — 项目说明与维护指南。

---

## 项目概览

| 项目 | 说明 |
| --- | --- |
| 定位 | Visual / AI / Brand Designer 个人作品集 |
| 技术栈 | React 19 + Vite 6 |
| 样式方案 | 纯 CSS，组件级样式文件 + 全局设计 token |
| 语言 | 全站英文 |
| 适配 | PC 端优先，版心 1700px |

设计风格：暗色系、编辑式网格、克制留白。不使用模板化卡片堆叠，通过排版节奏与不对称布局建立视觉层次。

---

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发（默认 http://localhost:5173）
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

---

## 页面结构

| 区块 | 组件 | 锚点 | 说明 |
| --- | --- | --- | --- |
| 导航 | `Nav.jsx` | — | 固定顶栏，滚动后背景模糊 |
| Hero | `Hero.jsx` | `#index` | 全屏首屏，视频背景 + 大标题 |
| Profile | `Profile.jsx` | `#profile` | 头像、个人介绍、联系方式、职业时间线、数据指标 |
| Work | `Work.jsx` | `#work` | 精选项目，12 列不对称大卡片 |
| Craft | `Craft.jsx` | `#craft` | 核心能力，四列连体卡片 |
| Contact | `Contact.jsx` | `#contact` | 整屏收尾联系页 |

---

## 目录结构

```
AdrianLiPortfolio/
├── public/
│   └── media/              # 静态资源（图片、视频）
│       ├── hero.mp4        # Hero 背景视频（待替换）
│       ├── portrait.svg    # 头像占位图
│       └── work-0*.svg     # 项目占位图
├── src/
│   ├── components/         # 页面组件
│   ├── data/
│   │   └── content.js      # ★ 所有文案与数据集中在此
│   ├── hooks/
│   │   └── useReveal.js    # 滚动入场动画
│   ├── App.jsx
│   ├── index.css           # 全局设计 token 与布局
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 内容修改

**所有可编辑文案集中在 `src/data/content.js`，无需改动组件文件。**

### 个人信息 `profile`

```js
export const profile = {
  name: 'Xiwei Li',
  roles: ['Visual Designer', 'AI Designer', 'Brand Designer'],
  based: 'Singapore',
  email: 'hello@xiweili.design',       // ← 替换为真实邮箱
  linkedin: 'https://linkedin.com/in/xiweili',  // ← 替换为真实链接
  intro: '...',   // 主介绍
  note: '...',    // 补充说明
}
```

### 数据指标 `metrics`

```js
{ value: '10', suffix: '+', label: 'Years of practice' }
```

支持 `prefix`（如 `$`）和 `suffix`（如 `%`、`M+`）。

### 职业经历 `timeline`

```js
{ year: '2024 —', role: 'Design Expert, Core Trading', company: 'Bitget' }
```

### 精选项目 `work`

```js
{
  id: '01',
  title: 'Copy & Bot Trading',
  client: 'Bitget',
  year: '2025',
  discipline: 'Product System · Visual Language',
  result: '+8.5% DAU',
  image: '/media/work-01.svg',  // ← 替换为真实截图路径
}
```

### 核心能力 `craft`

```js
{ id: '01', title: 'Visual Design', body: '...' }
```

---

## 素材替换清单

| 文件 | 路径 | 建议规格 |
| --- | --- | --- |
| Hero 背景视频 | `public/media/hero.mp4` | 1920×1080，无音频，10–30s 循环 |
| 头像 | `public/media/portrait.svg` → `.jpg` | 4:5 比例，更新 `Profile.jsx` 中的 `src` |
| 项目截图 01–04 | `public/media/work-0*.svg` → `.jpg` | 16:10 或 4:5，更新 `content.js` 中的 `image` 字段 |

> 没有 Hero 视频时，页面会自动显示渐变动画 fallback，不会留白。

---

## 设计系统

全局 token 定义在 `src/index.css`：

| Token | 值 | 用途 |
| --- | --- | --- |
| `--shell` | `1700px` | 版心宽度 |
| `--gutter` | `64px` | 左右内边距 |
| `--bg` | `#09090A` | 背景色 |
| `--ink` | `#EFEDE9` | 主文字色（暖白） |
| `--display` | Inter Tight | 标题与正文 |
| `--mono` | JetBrains Mono | 标签、元信息、序号 |

各区块以 `(01)`–`(04)` 编号，发丝线分隔。页面背景有 6 列竖向参考线，保持网格感可见。

---

## 待优化事项

- [ ] 替换 Hero 背景视频 `public/media/hero.mp4`
- [ ] 替换头像为真实人物照片
- [ ] 替换 4 张项目截图为真实作品图
- [ ] 更新 `content.js` 中的邮箱与 LinkedIn 链接
- [ ] 根据参考网站调整字体大小、间距与动效节奏
- [ ] 添加项目详情页或外链（当前卡片为占位链接）

---

## 部署

构建产物输出至 `dist/`，可部署到任意静态托管服务：

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

```bash
npm run build
# 将 dist/ 目录上传或连接 CI 自动部署
```
