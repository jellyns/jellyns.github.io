---
title: "Loop engineering：我是怎么写 Codex 的 /goal"
description: "围绕目标、任务文档、验证与人的反馈，组织可以持续推进的长任务。"
pubDate: 2026-09-14T13:37:44.2625361+00:00
relatedPosts:
  - title: "我是怎么写 Codex 的 /goal （新）"
    href: /blog/how-i-write-codex-goal/
---

在我看来，Loop engineering 是提示词工程、skills 与任务自动化逐渐结合起来的一种工作方式。OpenClaw 作者 Peter Steinberger 在 X 上分享了一个想法：不要只是一轮轮 prompt coding agents，而要设计能够 prompt agents 的 loops。

Ralph loop 项目已经展示过一种朴素但有效的外层循环：用脚本反复启动 Agent，让它读取计划文件、执行任务、跑测试、根据失败继续调整，并把进展写回文件。现在 Codex 的 `/goal`，则把这类“目标 + 状态 + 验证 + 回写”的模式做得更产品化。

这条线索也让我想到 Jiayi Weng 在《Learning Beyond Gradients》里讨论的 Heuristic Learning：当一个系统有明确反馈、日志、测试、回放和可维护的状态时，Agent 就不只是生成一次答案，而是在持续维护一个可以被迭代改进的软件系统。他把这一愿景概括为：“凡是可以被持续迭代的，都开始能被解决。”我觉得，这也有助于理解 loop 任务的特点和目标。

这也让我开始思考：`/goal` 应该怎么写，才能让 Codex 围绕目标持续迭代，而不只是执行“继续做”“继续优化”这样的模糊指令？

如果把 `/goal` 写成这样：

```text
/goal 继续优化这个项目，把功能完善一下，顺便把文档和测试也补好。
```

这句话只有一个大致方向。先把计划讨论清楚，更有助于后续执行。完整计划可以放在任务文档中，`/goal` 则写清当前目标、完成判据和暂停条件。

我认为 loop 的价值不在于少点几次“继续”，而在于它能围绕一个可验证的目标持续迭代，并且在需要人判断时停下来。

所以我把 `/goal` 理解为：**一个可以由人调整方向、持续推进任务的工作循环。**

## 一个 `/goal` 背后的上下文

长任务不要只靠一个 prompt 扛住全部上下文。

一个 `/goal` 背后通常有几类上下文在支撑：

- 长期规则：AGENTS / skills，告诉 Codex 这个项目长期怎么工作。
- 任务文档：更完整的任务计划和过程记录，包括目标、阶段计划、当前做到哪里、遇到的问题、做过的决策和踩过的坑。
- `/goal`：写清楚当前目标、完成判据和暂停条件，但不复述完整计划；它告诉 Codex 这一轮围绕什么目标推进，怎么验收，什么时候停。
- 最新反馈：用户补充、工具输出、测试结果、截图、最终回复，都会影响下一轮怎么调整方向。

`/goal` 适合围绕明确目标持续探索的任务：反复尝试、验证结果、发现问题，再调整后续行动。

`/goal` 要写得准确，详细计划和背景资料可以放在任务文档中。

如果把 backlog、教程、背景资料、详细计划全塞进 `/goal`，看起来信息很多，实际会干扰 Agent 判断：它不知道哪些是当前状态，哪些是长期背景，哪些才是这一轮真正该执行的约束。

## Human-in-the-loop

Codex 的 `/goal` 不是无人驾驶。它的价值反而在于把人放到更合适的位置。

在 Codex 里，goal 运行时可以暂停、恢复、编辑或清除。中途发现方向不对时，人就可以介入并作出调整。

我通常把人为介入分成三种：计划变了，就改任务文档。完成判据、边界或暂停条件变了，就暂停后调整 `/goal`。目标本身还没想清楚，就停下来重新讨论，再改任务文档和 `/goal`。

所以 `/goal` 的重点不是让 Agent 无限自治，而是形成一个更灵活的 human-in-the-loop：Agent 负责持续推进和验证，人负责改目标、改计划、改边界。

## `/goal` 示例

写 `/goal`，主要写清三件事：目标是什么，下一轮如何选择行动，以及完成与暂停的条件。

它不需要替代任务文档，但必须能把任务文档接入 loop；它不需要写完所有步骤，但必须让 Codex 知道下一轮怎样判断和行动。

一个更实用的骨架是：

```text
/goal 持续推进 [最终目标]。
开始前读取 [任务文档/规范入口/用户反馈]，以此作为当前状态。
每轮只处理一个最重要的问题，优先处理阻碍目标达成的真实问题。
用 [证据] 判断完成；证据不足不得宣称完成。
只改 [允许范围]；遇到 [暂停条件] 停下来问人。
每轮结束回写 [状态文件]；关键里程碑通过门禁后，再按项目 git 规则决定是否提交。
```

详细计划和执行记录仍需由任务文档保存。

## 任务文档三件套

长任务一定要有任务文档。否则 `/goal` 很容易被迫承担所有上下文，最后越写越长，这本身也是一种提示词噪声。

我目前最推荐 `planning-with-files` 的做法：用三个 Markdown 文件维护项目状态。这能为长任务保留一组可以持续读取和更新的记录。每一轮都能重新读取当前计划、记录新发现，保存验证结果和失败经验。

| 文件 | 负责什么 |
| --- | --- |
| `task_plan.md` | 目标、阶段计划、任务队列、当前做到哪里、关键决策 |
| `findings.md` | 研究发现、问题、约束、踩坑、外部证据 |
| `progress.md` | 本轮日志、验证结果、交接记录 |

这三个文件可以看作 Agent 在当前任务中的“磁盘记忆”。它们不是只把聊天内容存下来，而是把当前计划、发现、进展和判断过程整理成一组可继续使用的任务笔记。

这和单纯拉长对话上下文不一样。写任务文档的过程，也是在复盘、筛选和提炼信息。这与上下文过长时的自动压缩并不冲突，两者可以配合使用。

## 怎样判断 `/goal` 是否写清楚了

我判断一个 `/goal` 是否写清楚，会看 Codex 在下一轮能否依据当前目标、任务状态和验证结果继续推进。

它需要知道：目标是什么，状态从哪里读，这一轮先做什么，拿什么验收，结果写回哪里，什么时候停下来问人。

当规则、任务文档、目标和反馈各自有位置之后，Agent 才更像是在稳定推进项目，而不是一轮轮重新猜我的意图。

## 参考来源

- [OpenAI Codex Prompting / Goal mode](https://developers.openai.com/codex/prompting)
- [Peter Steinberger on X](https://x.com/steipete/status/2063697162748260627)
- [Learning Beyond Gradients](https://trinkle23897.github.io/learning-beyond-gradients/)
- [Ralph Wiggum Technique](https://github.com/ghuntley/how-to-ralph-wiggum)
- [planning-with-files](https://github.com/OthmanAdi/planning-with-files)
- [qiaomu-goal-meta-skill](https://github.com/joeseesun/qiaomu-goal-meta-skill)
- [GitHub Next Goal Agentic Workflow](https://github.com/githubnext/goal)
- [GitHub Next Autoloop](https://github.com/githubnext/autoloop)
- [loop-engineering](https://github.com/cobusgreyling/loop-engineering)
