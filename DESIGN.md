---
name: "乙辛Zmod31 · blog"
description: "文章主导的中文刊物：近白纸面、宋体标题、墨色正文与朱红标记。"
colors:
  paper: "#faf9f6"
  ink: "#242526"
  prose-ink: "#343536"
  muted: "#6b6863"
  line: "#d8d3cc"
  accent: "#a13c32"
  accent-dark: "#863228"
  accent-soft: "#f0e3dd"
  code-surface: "#efede7"
typography:
  display:
    fontFamily: '"Editorial Song", "Songti SC", "Noto Serif CJK SC", "Source Han Serif SC", SimSun, Georgia, serif'
    fontSize: "clamp(2.1rem, 3.65vw, 3.3rem)"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.025em"
  headline:
    fontFamily: '"Editorial Song", "Songti SC", "Noto Serif CJK SC", "Source Han Serif SC", SimSun, Georgia, serif'
    fontSize: "clamp(2rem, 3.4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.02em"
  title:
    fontFamily: '"Editorial Song", "Songti SC", "Noto Serif CJK SC", "Source Han Serif SC", SimSun, Georgia, serif'
    fontSize: "clamp(1.4rem, 2.1vw, 1.85rem)"
    fontWeight: 600
    lineHeight: 1.6
  body:
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.9
  code:
    fontFamily: 'ui-monospace, SFMono-Regular, Consolas, monospace'
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.75
spacing:
  page-gutter: "clamp(1.25rem, 4.5vw, 4.5rem)"
  paragraph: "1.4em"
components:
  post-entry:
    textColor: "{colors.ink}"
    padding: "1.65rem 0 1.9rem"
  article-prose:
    textColor: "{colors.prose-ink}"
    typography: "{typography.body}"
    width: "42rem"
  gallery-button:
    backgroundColor: "transparent"
    textColor: "{colors.accent-dark}"
    padding: "0.5rem 0.75rem"
---

# Design System: 乙辛Zmod31 · blog

## Overview

**Creative North Star: "乙辛Zmod31 · blog"**

文章标题与摘要构成版面的主要内容，作者身份与站点入口形成可复用的左侧窄栏。宋体标题与无衬线正文形成分工，连续长文保持稳定；导航、目录和图文版承担辅助阅读。

动效表现页面之间的连续性和操作反馈。文章选择使用局部纸色与细线反馈，不在条目之间移动大面积背景；正文不逐段隐藏或飞入。系统要求减少动态时停止非必要动画。

**Key Characteristics:**

- 近白纸面、墨色文字、朱红标记。
- 宋体标题、无衬线正文、开放版面与细线。
- 首行缩进、连续长文、按需展开的图文版。
- 页面导航由 Astro ClientRouter 接管，使用同文档标题过渡；图片放大使用独立的原生视图过渡。

核对日期：2026-10-23。以当前组件和样式源码为依据；发布沿用 main 分支的 GitHub Pages 工作流，部署结果以 GitHub Actions 记录为准。

## Colors

### Primary

朱红用于当前位置、焦点、文章入口与交互反馈；深朱红用于阅读入口和正文链接。浅朱红用于选区、引用和按钮悬停背景。

### Neutral

纸面为页面与查看器底色；墨色用于标题，正文墨色用于长文。暖灰用于日期、摘要、辅助导航。细分隔线建立版面关系，代码底色承托代码和表头。

**The Accent Rule.** 强调色用来指示位置与动作，不取代正文的墨色。

## Typography

标题使用本地 Noto Serif SC 子集，CSS 家族名为 Editorial Song。两份 TTF 分别提供 500、600 字重，带 SIL OFL 许可证；通过 unicode-range 限定当前文章标题与章节所需字符，其他字符回退至系统宋体。不是全量中文字体。

正文使用系统无衬线字体。代码使用 ui-monospace、SFMono-Regular、Consolas。正文小屏为 1.0625rem，行高仍为 1.9；二级标题宽屏 1.65rem、小屏 1.4rem。

段落首行缩进 2em；列表内段落和引用不缩进。文章主标题使用均衡断行；标题中的中文词组在构建时按词分段，避免把“折腾”等词拆在两行，原题文字不变。版本标记“（新）”缩小显示并与 /goal 绑定，最小 12px，保留原题文字，避免孤行。表格内代码词元不拆行，较宽表格仅在自身区域横向滚动。

**The Measure Rule.** 正文最大宽度 42rem，段后留白与章节间距分别管理，不靠大面积空白分割普通段落。

## Layout

站点最大宽度 75rem。首页左侧使用作者栏，右侧为文章目录；最新文章跨两列，后续文章并排。宽屏使用与博文页相同的三轨基线，目录占右侧两轨；76rem 以下作者列为 11rem，60rem 以下文章转为单列，44rem 以下作者说明与链接置于顶端。首页不放博文专属图解。

文章索引按实际发布日期的年份分组：宽屏年份置于左轨，右侧按月日与标题构成紧凑行，沿用首页基线；小屏年份置于列表上方。索引省去重复摘要，首页仍保留摘要。40rem 以下刊头高度由 104px 调为 80px。

文章页在视口大于 76rem 时使用三栏：两侧等宽轨道、中央正文 42rem、栏距 2.5rem，正文轴线保持居中。左侧为署名、既有简介、文章目录、GitHub 与 RSS 入口；右侧为文章目录、正文位置与页内跳转。两侧粘附于距顶部 3rem 的位置，过长时独立滚动。76rem 及以下隐藏作者栏，署名收进日期行，正文仍居中；目录位于标题之后、正文之前，默认折叠；向下阅读后吸附顶部，用单行显示当前章节和细进度线。展开列表覆盖在正文之上，不推移正文，选择章节或点击外部后收起，Escape 收起并返回目录控件。与图文版相邻时共用连续分隔线。目录包含开篇和真实二级标题。

代码和表格只在自身区域横向滚动。图文版沿用正文宽度，手机放大查看器占满视口。

## Elevation & Depth

版面不使用投影，层次来自字号、留白、细线与浅色衬底。图片查看器使用原生 dialog，深色遮罩表达前后关系。

**The Flat Rule.** 文章条目保持平整，悬停改变局部纸色、标题颜色和顶端细线，不将条目变成抬升卡片。

## Shapes

版面以直线和开放边界为主。目录当前位置使用 1px 朱红线；行内代码圆角为 3px。全局键盘焦点为 2px 朱红轮廓、5px 外偏移；图片链接使用向内焦点，避免裁切。

## Components

### 刊头与文章入口

署名旁保留 blog，右侧为文章与 RSS，导航与署名首页入口的点击高度至少 44px。浏览器标签图标保留“乙”字，使用朱红底、纸白字，与站点配色一致。刊头使用独立共享过渡，页面切换时保持稳定；页面预留滚动条空间，避免宽度跳变。导航下划线在 240ms 内展开。文章标题及其版面直接链接全文，不再重复“阅读全文”。文章入口、作者导航与页尾不放装饰箭头；真正的翻页、折叠控件使用统一的细线 chevron。首页标题与正文共用左侧基线。

### 文章标题

Astro ClientRouter 负责同文档导航，以规避嵌入式浏览器中跨文档过渡的 Page already revealed 中止。加载目标页面后、截取旧页之前，仅给当前匹配且处于视口内的标题分配 post-{slug} 名称。标题移动与缩放为 460ms，缓动为 cubic-bezier(.16,1,.3,1)；刊头和作者栏保持稳定，其他内容以 360ms 淡入并落下 6px。动画完成后清除临时名称，避免随后图片放大再次捕获标题。旧页监听器、帧请求与 ResizeObserver 在交换前清理；新页在 astro:page-load 初始化。不支持原生 View Transition 时直接交换页面，无 JS 时仍为完整静态链接。RSS 明确使用整页导航。

### 文章目录选择

首页、索引和文末入口共用 ds-entry-surface 反馈。每个条目使用自己的浅纸色：240ms 内淡入；顶端 1px 朱红线在 360ms 内展开。内容不平移，标题在 180ms 内变色；键盘焦点获得同等反馈。触摸按下也有反馈。CSS 完成全部效果，不再维护鼠标选择脚本或共享大背景。减少动态偏好下直接切换状态。

### 长文与目录

正文始终可见。目录标记在进入开篇或章节时才显示，随滚动定位；长目录将当前位置保留在可视范围。正文位置使用细线和百分比显示滚动位置，不代表实际阅读完成。图册展开及正文尺寸变化会重新计算。小屏使用原生 details 吸顶导航，展开时将当前项置于列表可视范围；列表按屏幕剩余高度收束，底部至少预留 12px，内部独立滚动。展开使用 180ms 淡入与 4px 位移，减少动态时禁用。小屏目录字号 14px，所有目录项高度至少 44px，键盘焦点向内描边，避免被滚动容器裁切。焦点移出小屏目录时收起；选择章节后焦点移到对应标题，滚动留出吸顶栏空间。图文版默认收起，展开时用短暂透明度、裁切与位移说明状态变化。

文末「接着读」展示另外的真实已发布文章，保留显式相关版本标签；1.2rem 宋体标题与原摘要构成入口。桌面并排，小屏单列。

### 图册与放大查看器

保留页码、图注、前后按钮、键盘方向键、触摸滚动、放大和原图链接。缩略图与放大图支持共享元素过渡；Esc 或关闭按钮退出后焦点返回当前图片。收起图册时保留索引，隐藏轨道不参与页码计算。

所有按钮最小目标约 44px。减少动态时关闭平滑滚动、CSS 动效与脚本动画；静态内容仍完整可读。

## Do's and Don'ts

### Do:

- **Do** 用真实文章标题、摘要和日期构建层级。
- **Do** 保留正文阅读尺度、首行缩进及列表和引用的例外。
- **Do** 检查键盘焦点、手机布局、无脚本阅读与减少动态偏好。
- **Do** 让页面动态响应文章选择，保留键盘和减少动态支持。

### Don't:

- **Don't** 默认展开图文版挤走正文。
- **Don't** 让动画等待阻挡文章阅读。
- **Don't** 用某篇博文的内容动画代替全站交互设计。
- **Don't** 补造主题名称、文章、统计数字或空栏目。
