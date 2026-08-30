---
name: "乙辛Zmod31 · blog"
description: "记录研究、工具与生活的个人博客设计系统。"
colors:
  paper: "#f8faf9"
  paper-strong: "#ffffff"
  ink: "#152c35"
  prose-ink: "#253c44"
  muted: "#5d7075"
  line: "#cdd8d7"
  accent: "#137d78"
  accent-dark: "#0d625e"
  accent-soft: "#dceeed"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, sans-serif"
    fontSize: "clamp(3.7rem, 7.2vw, 5.5rem)"
    fontWeight: 740
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, sans-serif"
    fontSize: "clamp(2.35rem, 6vw, 4.25rem)"
    fontWeight: 730
    lineHeight: 1.16
    letterSpacing: "-0.04em"
  title:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, sans-serif"
    fontSize: "clamp(1.45rem, 3vw, 2rem)"
    fontWeight: 680
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, sans-serif"
    fontSize: "1.075rem"
    fontWeight: 400
    lineHeight: 1.92
    letterSpacing: "0.005em"
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 680
    lineHeight: 1.75
    letterSpacing: "0.02em"
rounded:
  code: "0.2rem"
  pre: "0.75rem"
spacing:
  page-gutter: "clamp(1.25rem, 5vw, 4rem)"
  section-large: "clamp(4.5rem, 10vw, 7.5rem)"
  paragraph: "1.55em"
components:
  site-navigation:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "5.5rem"
    width: "min(70rem, calc(100% - 2 * clamp(1.25rem, 5vw, 4rem)))"
  latest-entry:
    textColor: "{colors.ink}"
    padding: "1.9rem 0 2rem"
  archive-entry:
    textColor: "{colors.ink}"
    padding: "2.15rem 0 2.3rem"
  article-prose:
    textColor: "{colors.prose-ink}"
    typography: "{typography.body}"
    width: "43.5rem"
---

# Design System: 乙辛Zmod31 · blog

## Overview

**Creative North Star: "乙辛Zmod31 · blog"**

这不是一个需要额外命名的主题，而是乙辛Zmod31 的公开写作空间。界面让作者身份与真实文章先出现，装饰退到背景；整体保持冷静、清楚，但不做成刻板的学术门户。

首页用分栏开场连接最近文章，目录以连续时间索引承接全部正式博文，文章页把注意力交还给中文长文。知识管理、AI 协作、CFD、AI for Science 与个人随笔拥有同等位置，不通过卡片或强制分类制造层级。

**Key Characteristics:**

- 冷白纸面、墨蓝正文与少量蓝绿色强调。
- 无阴影、细分隔线、开放留白和左对齐阅读节奏。
- 作者 → 最近文章 → 时间目录 → 正文的直接路径。
- 桌面端保持宽松，移动端压缩布局而不压缩身份与内容。

## Colors

色彩接近冷白纸张与墨色文字，蓝绿色只承担链接、当前状态和索引等需要识别的部分。

### Primary

- **Teal Accent** (#137d78): 用于序号、箭头、焦点轮廓和交互状态。
- **Deep Teal** (#0d625e): 用于正文链接和低调的小标题，确保浅底上的可读性。
- **Soft Teal** (#dceeed): 用于文本选区与行内代码的轻量背景。

### Neutral

- **Cool Paper** (#f8faf9): 全站页面底色。
- **White Surface** (#ffffff): 保留给需要更亮层次的表面，不作为默认卡片底色。
- **Ink Navy** (#152c35): 标题与主要界面文字。
- **Prose Ink** (#253c44): 长文正文，较主墨色略柔和。
- **Muted Slate** (#5d7075): 日期、说明和次要导航。
- **Fine Line** (#cdd8d7): 页眉、目录和段落结构的分隔线。

**The Accent Rarity Rule.** 蓝绿色只用于方向、状态和链接；一屏内不以大面积色块争夺正文注意力。

## Typography

**Display Font:** 系统无衬线中文字体栈，以 system-ui、Segoe UI、苹方、微软雅黑与 Noto Sans CJK SC 依次回退。
**Body Font:** 与 Display 共用系统无衬线字体栈。
**Label/Mono Font:** 标签沿用系统无衬线；代码使用 ui-monospace、SFMono-Regular、Consolas 回退。

**Character:** 单一字体体系减少外部依赖，并让中英文、术语与数字保持稳定。层级依靠字号、字重、行距和留白，而不是多套字体或装饰性大小写。

### Hierarchy

- **Display** (740, clamp(3.7rem, 7.2vw, 5.5rem), 0.98): 仅用于桌面首页作者身份；移动端缩至 clamp(2.45rem, 12vw, 3.35rem) 并保持单行。
- **Headline** (730, clamp(2.35rem, 6vw, 4.25rem), 1.16): 文章标题；移动端使用 clamp(1.95rem, 9vw, 2.55rem)。
- **Title** (680, clamp(1.45rem, 3vw, 2rem), 1.3): 最新文章和目录文章标题。
- **Body** (400, 1.075rem, 1.92): 中文长文正文，最大阅读宽度 43.5rem；移动端为 1.02rem / 1.88。
- **Label** (680, 0.78rem, 0.02em): 关注方向标题、日期和辅助信息。

**The Reading Measure Rule.** 正文保持 43.5rem 的阅读宽度；技术图片可扩展至 56rem，但文字不随图片一起变宽。

## Layout

全站内容容器最大宽度为 70rem，左右页边距使用 `clamp(1.25rem, 5vw, 4rem)`。首页首屏采用约 1.7:0.7 的不对称分栏，左侧身份、右侧关注方向，下方直接衔接最近文章。目录用序号、日期、标题、箭头构成连续表格式索引，但不绘制卡片边界。

文章页正文最大宽度 43.5rem，页眉、正文与文末返回链接共享同一左边线。媒体可在保持居中的前提下扩展到 56rem。`44rem` 以下，主页改为单列，目录的序号与日期组成首行，文章条目标题占满下一行；导航在 `40rem` 以下降低高度与间距。

## Elevation & Depth

系统不使用阴影。层次由冷白底色、细线、字号差异和垂直留白建立；交互只改变文字颜色、下划线或箭头位置，不让内容突然浮起成为卡片。

**The Flat-by-Default Rule.** 表面始终保持平整；除非未来出现真正需要遮挡关系的浮层，否则不引入投影。

## Shapes

主体布局以直线和开放边界为主，不使用圆角容器。圆角只存在于行内代码的 `0.2rem` 与代码块的 `0.75rem`，用于区分文本介质；焦点状态使用 2px 蓝绿色轮廓和 4px 外偏移。

## Components

### Navigation

- **Structure:** 70rem 容器内左右分布作者身份与 `blog` / `RSS`，桌面高度 5.5rem，移动端高度 4.5rem。
- **States:** 默认链接为次要灰色；hover 与当前页面转为墨蓝，并从左向右展开 1px 蓝绿色下划线。
- **Accessibility:** 提供“跳到正文”链接与清晰的 `:focus-visible` 轮廓。

### Homepage Opening

- **Structure:** 作者身份、单句说明与“现在关注”构成唯一首屏介绍，不添加头像、口号或主题名。
- **Motion:** 支持动态时进行一次 640ms 的轻微落位；系统要求减少动态时关闭动画。

### Latest Entry

- **Structure:** 桌面按日期、标题与摘要、方向箭头排列；移动端改为纵向并隐藏箭头。
- **States:** hover 只将标题转为深蓝绿色，并让箭头向右上移动 0.2rem。

### Archive Ledger Entry

- **Structure:** 桌面使用 4.5rem 序号列、8.5rem 日期列和弹性标题列；每篇文章之间仅有 1px 分隔线。
- **Mobile:** 序号与日期位于同一行，标题和摘要占据下一行；不把每篇文章包进卡片。

### Article Header and Prose

- **Header:** 左对齐显示返回 blog、文章标题、日期、阅读时间与可选更新时间。
- **Prose:** 段落间距 1.55em；二级标题在 3.2em 后出现；引用使用 1px 蓝绿色左边线；代码、表格和技术图片各自允许必要的横向空间。

## Do's and Don'ts

### Do:

- **Do** 让作者身份、真实文章标题和发布日期成为页面的主要证据。
- **Do** 用细线和留白组织内容，并维持主页、目录和文章页一致的左边线。
- **Do** 在移动端保留“乙辛Zmod31”单行展示，并检查页面没有横向溢出。
- **Do** 让技术图片适度超出正文宽度，同时保持文字的阅读尺度。

### Don't:

- **Don't** 为博客创造额外的主题名、隐喻口号或虚构栏目。
- **Don't** 用卡片网格、渐变、阴影和大面积强调色替代内容层级。
- **Don't** 在没有真实内容需求前加入搜索、分页、标签或强制分类。
- **Don't** 为视觉完整感伪造文章、统计数字、推荐语或交互入口。
