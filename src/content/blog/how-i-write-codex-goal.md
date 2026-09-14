---
title: "我是怎么写 Codex 的 /goal （新）"
description: "说清目标和边界，维护任务记忆，在推进和验证中逐步明确目标。"
pubDate: 2026-09-14T13:41:00.261Z
gallery:
  - src: /images/codex-goal/01-cover.png
    title: "封面"
    alt: "说清目标和边界，记录状态和进展，让 Codex 持续推进，人可以随时反馈和调整。"
  - src: /images/codex-goal/02-origin.png
    title: "长任务真正难在哪里"
    alt: "围绕目标跨多轮工作，以共读的任务记忆连接执行、验证与人的反馈。"
  - src: /images/codex-goal/03-goal-role.png
    title: "/goal 写什么，细节放哪里"
    alt: "目标、完成标准和边界写入 goal；背景、计划和尝试记录保存在任务三件套。"
  - src: /images/codex-goal/04-task-state.png
    title: "任务文档里，记什么"
    alt: "task_plan.md 维护详细要求与当前计划，findings.md 保存证据与取舍，progress.md 记录进展与验证。"
  - src: /images/codex-goal/05-goal-setup.png
    title: "先把关键问题讨论清楚"
    alt: "说明需求，使用 grill-me 或 Plan mode 讨论澄清，更新任务三件套，再定义 goal。"
  - src: /images/codex-goal/06-hitl.png
    title: "何时继续，何时交给人"
    alt: "查阅、推进、检查和更新；方法在约定范围内调整，目标或授权变化时与人讨论。"
  - src: /images/codex-goal/07-goal-skeleton.png
    title: "我现在这样写 /goal"
    alt: "包含目标、质量要求、验收方式、完成标准、边界与任务三件套的 goal 写作骨架。"
  - src: /images/codex-goal/08-reflection.png
    title: "长程任务：在 loop 中逐步明确目标"
    alt: "在实际使用、验证和讨论中澄清目标，人在回路中参与判断和调整。"
relatedPosts:
  - title: "Loop engineering：我是怎么写 Codex 的 /goal"
    href: /blog/codex-goal-loop-engineering/
---

翁家翌在[《Learning Beyond Gradients》](https://trinkle23897.github.io/learning-beyond-gradients/)中讨论了一个值得关注的方向：把尝试、失败原因、测试与回放显式保留下来，让 coding agent 根据反馈持续改进系统。

OpenAI 的[实验性上下文管理方案](https://learn.chatgpt.com/docs/models#experimental-context-management)，也让 Astra 通过笔记跨上下文窗口保存信息，并按需检索同一任务中较早的消息和工具结果。

这两条线索让我更重视长任务中的记忆：已经获得的认识，要能在后续工作中被查阅、检验和修正。

## 长任务真正难在哪里

[`/goal`](https://learn.chatgpt.com/use-cases/follow-goals) 是 Codex 的目标模式，让 Agent 围绕目标跨多轮持续工作。Loop engineering 关注执行、验证、记忆与人的反馈如何衔接。

[Peter Steinberger](https://x.com/steipete/status/2063697162748260627) 关于设计能够驱动 Agent 持续工作的 loop 的想法，以及 [Ralph loop](https://github.com/ghuntley/how-to-ralph-wiggum) 从文件恢复状态、执行、测试、再把进展写回的做法，也给了我启发。

我用任务三件套维护详细计划、依据与进展，作为我和 Agent 共用的任务记忆。我能随时查阅、核对判断的依据、调整方案，Agent 则根据更新后的记录继续推进。

## `/goal` 写什么，细节放哪里

目标、完成标准和关键边界，要在 `/goal` 里写清。背景资料、阶段安排和尝试记录放进三件套，按当前问题查阅。

临时方案和过时记录混进目标，容易分不清哪些要求必须满足、哪些做法可以调整。

| 内容 | 主要职责 |
| --- | --- |
| `/goal`：目标约定 | 目标与完成标准、关键质量要求、范围与授权边界 |
| 任务三件套：详细计划与任务记忆 | 详细要求与当前计划、证据与方案取舍、经验与进展、验证结果 |

方案随新发现调整，完成与否仍按确认过的目标和标准判断。

## 任务文档里，记什么

我用 [planning-with-files](https://github.com/OthmanAdi/planning-with-files) 维护三件套。详细要求和当前方案写在这里，工作中获得的证据、验证结果和失败经验也保存在这里。

| 文件 | 主要职责 |
| --- | --- |
| `task_plan.md` | 详细要求、完成标准与当前计划 |
| `findings.md` | 关键证据、方案取舍与失败经验 |
| `progress.md` | 已完成工作、验证结果与当前问题 |

记录要让人看出：为什么选这个方案，结果说明了什么，哪些问题仍没有答案。新证据改变了判断，就更新相关计划，并留下原因。

查阅时围绕当前问题取用相关内容；及时更新过时结论，避免与新的判断混在一起。

## 先把关键问题讨论清楚

动手前，我会用 `grill-me` 或 Plan mode，和 Codex 把目标、范围、完成标准与关键取舍讨论清楚。

AGENTS / skills 提供项目规则与方法。从想法到开始推进，我通常按下面的顺序组织：

1. **说明需求**：要解决什么问题。
2. **讨论与澄清**：目标是做什么、做到什么程度，以及范围、完成标准与关键取舍。
3. **更新任务三件套**：保存详细计划与已有依据，记录计划、发现和进展。
4. **定义 `/goal`**：写清目标与完成约定，包括完成标准、边界与暂停条件。

把完整要求和背景、当前方案和未决问题写进三件套，再提炼成 `/goal`。必要时，用 [define-goal](https://github.com/openai/skills/blob/main/skills/.curated/define-goal/SKILL.md) 复核。

## 何时继续，何时交给人

Codex 围绕目标推进，按当前问题查阅三件套，用测试、实验或实际操作检查结果。新的结果如果改变了判断，就更新相关记录和计划，继续处理尚未解决的问题。

执行过程中，先查阅三件套，推进当前重点，再按完成标准检查结果。尚未完成，就更新三件套后继续；达到完成标准，则结束任务。

| 变化 | 处理方式 |
| --- | --- |
| 调整方案 | 更新后继续 |
| 改变约定 | 先讨论再调整 |
| 需要新授权 | 交给人决定 |

实现方法可以在约定范围内调整。涉及目标、完成标准或授权边界的变化，再重新讨论。人也可以随时补充反馈，修正具体判断。

## 我现在这样写 `/goal`

```text
/goal [做什么，做到什么程度]。

成果须满足 [关键质量要求]，
通过 [验收方式] 确认达到 [完成标准]。

遵守 [工作范围与关键边界]。
结合任务三件套中的详细要求、
当前方案和已有发现推进，
及时更新计划、进展与验证结果。
```

需要人作出特定决定的任务，再补一句：

> 涉及 [具体事项] 时，先与我讨论。

骨架提供写作顺序。实际写时，可以把相近的要求合并成自然的段落；关键是目标、质量要求和边界足够清楚，完成与否有据可查。

## 长程任务：在 loop 中逐步明确目标

把更完整、更有难度的长程任务交给 Agent，也要让人了解进展、参与判断，随时调整方向和细节。

最终形态还不清楚时，可以先明确当前阶段要解决什么、如何验证，再用 `/goal` 跑通主要流程。在实际使用、验证和讨论中，看清哪些设想可行、哪些要求需要调整，再据此修订目标。

**这个 loop 也在帮助我们形成对目标更完整的认识。**

目标保持清楚，支撑执行的上下文也能不断完善。

你们用 `/goal` 推进长任务时，通常怎样维护任务记忆、调整目标？
