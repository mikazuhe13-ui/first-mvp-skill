# Start Here / 新手从这里开始

如果你是普通人、学生、创作者、AI 新手、vibe coder，或者只是有一个想法但不知道怎么做出来的人，从这里开始。

你不需要先成为程序员。先做出一个能运行的小版本。

If you are an ordinary user, student, creator, AI beginner, or anyone with an idea but no clear path to build it, start here.

这个文件是给第一次使用的人看的。如果你已经熟悉 AI Agent，可以直接看 `playbooks/agent-mode-matrix.md` 和 `routing/skill-router.md`。

This file is for first-time users. If you already use AI agents, jump to `playbooks/agent-mode-matrix.md` and `routing/skill-router.md`.

## 这是什么

FirstMVPSkill 是一个面向普通人、新手、学生、创作者和 AI Agent 用户的 Agent Skill Pack。

它帮你把一个模糊 AI 项目想法，变成：

- Tiny MVP
- Not in V1
- 最小工具栈
- 7 天计划
- Day 1 指令
- Acceptance Gate
- 下一步动作

## 你不需要先懂什么

- **AI Agent** = 能帮你执行任务的 AI 助手
- **Tiny MVP** = 第一个最小可运行版本，不是完整产品
- **Review** = 检查 AI 做出来的东西是否符合要求
- **Launch** = 把一个小版本真正发布或分享出去

你不需要先学完所有工具，也不需要先做完整 SaaS。

## 第一步：复制这条指令

把下面这段复制到你正在使用的 AI 工具里，比如 ChatGPT、Claude、Claude Code、Cursor 或 Codex。

```text
我想做一个 AI 小项目，但不知道怎么开始。

我的想法是：
[写下你的想法]

请用 FirstMVPSkill 帮我输出：

1. 用户水平判断
2. Tiny MVP（1-3 个功能）
3. Not in V1（第一版不做什么）
4. 最小工具栈
5. 7 天计划
6. Day 1 指令
7. Acceptance Gate（验收标准）
8. 下一步动作

要求：

不要推荐太多工具
不要做完整 SaaS
不要默认使用多 Agent
输出要简洁
先让我做出第一个可运行版本
```

## 你会得到什么

你应该得到一个很小、很清楚的启动方案：

- 你现在适合做多小的版本
- 第一版只做哪 1-3 个功能
- 第一版明确不做什么
- 用哪些最少工具
- 7 天每天做什么
- Day 1 复制哪条指令
- 做完后怎么验收
- 下一步该做什么

如果输出太长，直接回复：

```text
请改成 Compact Mode，只保留 Tiny MVP、Not in V1、Day 1 指令、Acceptance Gate 和下一步动作。
```

## Day 2-7 该看哪个文件 / Day 2-7 file router

Day 1 之后，不需要读完整个仓库。

按下面这个路线走就够了：

| Day | 你要做什么 / What to do | 看哪个文件 / Use this file |
|---|---|---|
| Day 1 | 做出最小可运行版本 | `skills/first-mvp-launch/SKILL.md` 或上面的 starter prompt |
| Day 2-4 | 每天构建一个 MVP 功能 | `commands/coding-agent-command.md` |
| Day 5 | 检查 AI 做出来的结果 | `commands/codex-review-command.md` + `checklists/acceptance-gate-checklist.md` |
| Day 6 | 修复问题，必要时砍掉多余功能 | `commands/execution-feedback-loop-command.md` + `commands/anti-overbuilding-command.md` |
| Day 7 | 发布前检查并分享出去 | `checklists/launch-readiness-checklist.md` + `templates/project-status-template.md` |

如果你在任意一天卡住：

```text
Use: commands/execution-feedback-loop-command.md
```

不要一开始就跳到所有 playbooks。只有当你需要判断工具、模式、subagent、long task 或 fallback workflow 时，再看 `playbooks/`。

## 如果你的工具不支持 skill

没关系。FirstMVPSkill 也可以当普通 prompt 用。

如果你的工具不支持 skills 或 slash commands：

1. 打开 `skills/first-mvp-launch/SKILL.md`
2. 把你的项目想法和上面的 starter prompt 一起粘贴给当前 AI 工具
3. 如果需要 slash command fallback，看 `playbooks/slash-command-playbook.md`

## 下一步

- 想知道项目整体是什么：读 [README.md](README.md)
- 想安装 skill folder：读 [docs/installation.md](docs/installation.md)
- 想看完整闭环例子：读 [examples/closed-loop-ai-study-assistant.md](examples/closed-loop-ai-study-assistant.md)
- 想直接看核心 skill：读 [skills/first-mvp-launch/SKILL.md](skills/first-mvp-launch/SKILL.md)
- 想一步步变强：读 [docs/agent-skill-ladder.md](docs/agent-skill-ladder.md)
- 不知道用哪条指令：读 [commands/README.md](commands/README.md)

现在先做一件事：复制上面的 starter prompt，填入你的想法。
