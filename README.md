# FirstMVPSkill

> 别再折腾工具，用智能体做出你的第一个 AI MVP。  
> Stop tool-hopping. Ship your first AI MVP with agents.

<p align="center">
  <img src="assets/first-mvp-skill-hero.png" alt="FirstMVPSkill banner" width="100%">
</p>

第一次使用？先看：[Start Here / 新手从这里开始](START_HERE.md)

FirstMVPSkill 新手优先，但不只服务新手。  
Easy for beginners, useful for agent power users.

欢迎 star、issue、PR，尤其欢迎贡献中文 AI MVP 新手案例。

## How it works / 工作流

FirstMVPSkill 把一个模糊想法压缩成可执行、可检查、可发布的小项目闭环。

FirstMVPSkill turns a vague idea into a small executable, reviewable, and shippable loop.

```mermaid
flowchart LR
    A[Idea<br/>模糊想法] --> B[Tiny MVP<br/>最小可运行版本]
    B --> C[Command<br/>给 Agent 下指令]
    C --> D[Build<br/>构建]
    D --> E[Review<br/>检查]
    E --> F[Fix<br/>修复]
    F --> G[Launch<br/>发布]
```

## Choose your path / 选择入口

| You are... / 你的情况 | Start here / 从这里开始 |
|---|---|
| First-time user / 第一次使用 | [START_HERE.md](START_HERE.md) |
| Have an idea but no plan / 有想法但没计划 | [skills/first-mvp-launch/SKILL.md](skills/first-mvp-launch/SKILL.md) |
| Need agent commands / 需要写 Agent 指令 | [commands/planning-command.md](commands/planning-command.md) |
| Choosing tool/mode / 不知道用哪个工具或模式 | [playbooks/agent-mode-matrix.md](playbooks/agent-mode-matrix.md) |
| Current agent lacks features / 当前工具能力不够 | [playbooks/current-agent-adapter.md](playbooks/current-agent-adapter.md) |
| Want token-efficient routing / 想减少 token 消耗 | [routing/skill-router.md](routing/skill-router.md) |

## What this is / 这是什么

很多 AI 新手最后什么都没做出来，不是因为没有想法，而是因为缺少一套真正能落地的使用手册：不知道怎么定义 Tiny MVP、怎么给 AI Agent 下指令、怎么做 Review、怎么进入 Fix 和 Launch。

FirstMVPSkill 不是通用 Prompt 集合。它是一个新手优先、但不只服务新手的强约束 AI MVP 启动系统。

FirstMVPSkill is not a generic prompt collection. It is a beginner-first, but not beginner-only, AI MVP launch system.

它也适合已经在使用 AI Agent、但需要更清楚判断 tool choice、modes、reasoning effort、subagents、long tasks、review gates 和 Compact Mode 的用户。

## 30 秒 Demo / 30-second demo

输入一个想法：

```text
I want to build an AI study assistant that helps students review notes.
```

FirstMVPSkill 会把它压缩成：

```text
Tiny MVP:
1. Upload notes
2. Generate practice questions
3. Take quiz and see score

Not in V1:
- Login
- Payment
- Mobile app
- Flashcards

Day 1 command:
Create a basic Streamlit app with a title, note uploader, and text preview.
Do not add AI yet.

Acceptance Gate:
The app runs locally and displays uploaded text.

Next action:
Paste the Day 1 command into your current AI agent.
```

这就是最小可用路径：一个想法，一个下一步动作，一个能运行的小结果。

That is the smallest useful path: one idea, one next action, one working result.

## Quick start / 快速开始

1. 克隆或下载这个仓库。  
   Clone or download this repository.

   ```bash
   git clone https://github.com/mikazuhe13-ui/first-mvp-skill.git
   cd first-mvp-skill
   ```

2. 如果你的 Agent 支持 skills，复制完整 skill folder，不要只复制 `SKILL.md`。  
   If your agent supports skills, copy the full skill folder.

   ```text
   skills/first-mvp-launch/
   skills/agent-command-coach/
   ```

3. 如果不支持 skills 或 slash commands，把 [START_HERE.md](START_HERE.md) 里的 starter prompt 当普通 prompt 使用。  
   If skills or slash commands are not supported, use the starter prompt in [START_HERE.md](START_HERE.md).

完整安装说明见 [docs/installation.md](docs/installation.md)，完整快速开始见 [docs/quick-start.md](docs/quick-start.md)。

## What's included / 包含什么

| Folder | Purpose |
|---|---|
| `skills/` | Core skills: launch a Tiny MVP and coach Agent commands |
| `commands/` | Copy-paste Agent Command Pack for planning, coding, review, fix, and feedback |
| `templates/` | Project Context Pack, status, MVP plan, and task brief templates |
| `checklists/` | Acceptance Gate, launch readiness, scope, and command checks |
| `examples/` | Real beginner-friendly AI MVP examples |
| `playbooks/` | Advanced decisions: Agent Mode Matrix, subagents, long tasks, fallback workflows |
| `routing/` | Skill routing and token-efficient Compact / Standard / Full Mode rules |
| `docs/` | Full installation, guide, troubleshooting, FAQ, and contribution docs |

详细文件说明见 [docs/guide.md](docs/guide.md) 和 [docs/api-reference.md](docs/api-reference.md)。

## Docs / 文档

| Need | Read |
|---|---|
| Installation / 安装 | [docs/installation.md](docs/installation.md) |
| Quick Start / 快速开始 | [docs/quick-start.md](docs/quick-start.md) |
| Complete Guide / 完整指南 | [docs/guide.md](docs/guide.md) |
| Troubleshooting / 报错处理 | [docs/troubleshooting.md](docs/troubleshooting.md) |
| FAQ / 常见问题 | [docs/faq.md](docs/faq.md) |
| Token modes / Token 模式 | [routing/token-budget-policy.md](routing/token-budget-policy.md) |
| Contributing / 参与贡献 | [docs/contributing.md](docs/contributing.md) |

## Why this exists / 为什么做这个

FirstMVPSkill 希望帮助更多人第一次真正体验到：AI 不只是聊天工具，而是可以帮助自己一步一步完成项目的执行伙伴。

你不需要一开始就精通所有工具。你只需要一个想法、一个下一步动作、一个能运行的小结果，然后不断形成 Plan → Build → Review → Fix → Launch 的闭环。

Most users do not need every tool on Day 1. They need one idea, one next action, one working result, and a loop they can repeat.

## Contributing / 参与贡献

欢迎提交 issue 和 PR，尤其欢迎贡献中文 AI MVP 新手案例、改进 commands、补充 checklists、优化 playbooks 或让 docs 更清楚。

请保持：简洁、可复制、中文优先、新手友好、不增加不必要复杂度。

提交 PR 前，请先阅读 [docs/contributing.md](docs/contributing.md)。提交格式见 [docs/commit-convention.md](docs/commit-convention.md)。

## License

[MIT](LICENSE)
