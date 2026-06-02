# Agent Compatibility / 智能体兼容性

FirstMVPSkill 不依赖特定的 AI 智能体。它适配你已有的工具。

FirstMVPSkill does not require a specific AI agent. It adapts to the tool you already have.

## Core idea / 核心思路

如果你的工具支持 skill folder 或 slash commands，原生使用。

If your tool supports skill folders or slash commands, use it natively.

如果不支持，把文件当普通 prompt 和工作流指南使用。

If not, use the files as plain prompts and workflow guides.

不需要换工具。先检查你当前工具的能力。

You do not need to switch tools. Check your current tool's capabilities first.

## Compatibility table / 兼容性表

| Agent capability / 智能体能力 | How to use FirstMVPSkill / 使用方式 |
|---|---|
| Supports skill folders / 支持 skill folder | 复制完整的 `skills/first-mvp-launch/` 和 `skills/agent-command-coach/` 文件夹 |
| Supports slash commands / 支持斜杠命令 | 使用 `/first-mvp-launch [idea]`（如果已配置） |
| Can read repository files / 能读取仓库文件 | 让它读取对应的 `.md` 文件 |
| Can edit files and run terminal / 能改文件和运行命令 | 使用 `commands/coding-agent-command.md` + review gates |
| Chat-only agent / 只能聊天 | 复制 `START_HERE.md` 里的 starter prompt |
| Short context agent / 上下文很短 | 使用 Compact Mode 和 `routing/compact-output-rules.md` |
| Tool lacks a feature / 工具能力不足 | 使用 `playbooks/current-agent-adapter.md` 和 `playbooks/fallback-command-patterns.md` |

## Agent-aware onboarding / 智能体适配式导航

安装或克隆后，先确认你正在使用哪个 Agent 或工具。不要默认所有工具都支持相同的 skill、slash command 或文件读取能力。

After install or clone, first identify your current agent/tool. Do not assume every tool supports the same skills, slash commands, or file access.

| Agent / Tool | Start here / 推荐入口 |
|---|---|
| Claude Code | `START_HERE.md` → `commands/README.md` → `commands/coding-agent-command.md` → `commands/codex-review-command.md` |
| Cursor | `START_HERE.md` → `commands/README.md` → `commands/coding-agent-command.md` → `playbooks/current-agent-adapter.md` |
| Codex | `START_HERE.md` → `commands/coding-agent-command.md` → `commands/codex-review-command.md` → `checklists/acceptance-gate-checklist.md` |
| ChatGPT / Claude web | 复制 `START_HERE.md` 的 starter prompt，再把生成的 Day 1 command 交给编码工具 |
| OpenCode / OpenClaw | `START_HERE.md` → `docs/agent-compatibility.md` → `playbooks/agent-capability-checklist.md` → `playbooks/fallback-command-patterns.md` |
| Other / Not sure | `docs/agent-compatibility.md` → `START_HERE.md` → `routing/skill-router.md` |

第一条输入 / Starter input:

```text
我想做一个 AI 小项目：____。我每天能投入 __ 分钟。请按 FirstMVPSkill 帮我生成 Tiny MVP、Not in V1、7 天计划、Day 1 指令和 Acceptance Gate。
```

如果你的工具支持 slash command，可以尝试 `/first-mvp-launch [你的想法]`。如果不支持，直接使用普通 prompt。

If your tool supports slash commands, try `/first-mvp-launch [your idea]`. If not, use the plain prompt.

## Recommended path by user type / 按用户类型推荐路径

| User type / 用户类型 | Recommended path / 推荐路径 |
|---|---|
| First-time user / 第一次使用 | `START_HERE.md` |
| Ordinary person with an idea / 有想法的普通人 | `skills/first-mvp-launch/SKILL.md` |
| Coding agent user / 编码智能体用户 | `commands/README.md` → `commands/coding-agent-command.md` |
| Agent power user / 熟练用户 | `playbooks/agent-mode-matrix.md` |
| Unsure about tool capability / 不确定工具能力 | `playbooks/agent-capability-checklist.md` |

## Do Not / 禁止项

- 不要假设所有工具都支持相同的 slash commands / Do not assume every tool supports the same slash commands.
- 不要在检查当前工具能力之前强迫用户换工具 / Do not force users to switch tools before checking current capabilities.
- 不要在 MVP 范围和文件边界明确之前使用 subagent 或 long task / Do not use subagents or long tasks before MVP scope and file boundaries are clear.
- 不要跳过 Acceptance Gates / Do not skip Acceptance Gates.
- 不要默认加载所有 playbooks / Do not load every playbook by default.

## Next action / 下一步

如果不确定从哪里开始：读 `START_HERE.md`。

If unsure where to start: read `START_HERE.md`.

如果已经在使用智能体：先用 `playbooks/agent-capability-checklist.md` 检查它的能力。

If already using an agent: check its capabilities first with `playbooks/agent-capability-checklist.md`.
