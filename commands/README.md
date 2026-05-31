# Commands / 指令选择器

这个文件帮你选择当前该复制哪条 Agent command。

This file helps you choose the right agent command for the current step.

## Command selector / 指令选择

| Situation / 当前情况 | Use this command |
|---|---|
| 有想法但没计划 | `planning-command.md` |
| 要构建一个明确功能 | `coding-agent-command.md` |
| 要检查 AI 做出来的结果 | `codex-review-command.md` |
| 功能太多、范围变大 | `anti-overbuilding-command.md` |
| 任务能安全拆分给多个 Agent | `multi-agent-dispatch-command.md` |
| 卡住、跑偏、需要重置闭环 | `execution-feedback-loop-command.md` |

## Good agent command checklist / 好指令检查

- One task / 一个任务
- Project Context Pack / 项目上下文包
- File boundaries / 文件边界
- What not to change / 不要改什么
- Acceptance Gate / 验收标准
- Do Not / 禁止项
- One next action / 一个下一步动作

## Bad vs Good / 坏例子与好例子

Bad:

```text
帮我做一个 AI 学习助手。
```

Good:

```text
Project Context Pack:
- Project: AI study assistant
- Stage: Day 1 setup
- MVP scope: upload notes, generate practice questions
- Not in V1: login, payment, mobile app
- File boundary: only create app.py

Task:
Create a minimal Streamlit app with a title, note uploader, and text preview.

Do Not:
- Do not add AI yet
- Do not add login
- Do not add extra dependencies unless required

Acceptance Gate:
The app runs locally and displays uploaded text.

Next action:
Tell me how to run it locally.
```

## Slash Commands / 斜杠命令

Slash commands 是 workflow shortcuts，不是魔法。

Slash commands are workflow shortcuts, not magic.

先输入 `/` 查看当前工具支持哪些命令。不同工具的命令可能不同。

Type `/` first to inspect available commands. Tool-specific commands may differ.

Useful patterns:

- `/first-mvp-launch [idea]` if skill invocation is supported
- `/review` if available
- `/compact` if context is too long
- `/clear` for a new task after saving Project Context Pack
- `/agents` if supported and boundaries are clear

Fallback / 替代方案：

如果 slash commands 不可用，直接使用对应 command file 里的 plain prompt。

If slash commands are unavailable, use the plain prompt from the command file.

## Do Not

- Do not use all commands at once.
- Do not use slash commands just because they look advanced.
- Do not use `/clear` before saving Project Context Pack.
- Do not use `/agents` before MVP scope and file boundaries are clear.
- Do not skip review.
