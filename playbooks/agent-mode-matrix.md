# Agent Mode Matrix

> 为每个 MVP 任务选择合适的 AI Agent、mode、reasoning level 和 review gate。  
> Use this matrix to choose the right AI agent tool, mode, reasoning level, and review gate for each MVP task.

---


## 工作流 / Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## 核心规则 / Core rule

使用能完成任务的最小智能体配置。新手默认：一个主 Agent、一个任务、一个 Project Context Pack、一个 Acceptance Gate。

**Use the smallest agent setup that can finish the task.**

Default for beginners:
- one primary agent
- one task
- one Project Context Pack
- one Acceptance Gate
- human review before moving forward

Upgrade only when:
- MVP scope is clear
- file ownership is clear
- acceptance criteria are clear
- human review gate is defined

---

## 任务 x 工具 x 模式矩阵 / Task x Tool x Mode matrix

先看任务类型，再选工具和模式。不要因为工具“更高级”就升级配置。

| Task | Best tool | Mode | Reasoning | Subagent | Long task | Human review |
|------|-----------|------|-----------|----------|-----------|--------------|
| Clarify vague idea | ChatGPT / Claude | Planning | medium-high | No | No | Yes |
| Define Tiny MVP | ChatGPT / Claude / Claude Code | Planning | high | No | No | Yes |
| Choose tool stack | ChatGPT / Claude / Codex | Planning / Review | high | Optional | No | Yes |
| Small code edit | Cursor | Agent / Edit | medium | No | No | Yes |
| Build clear feature | Claude Code / Codex / OpenCode Build | Build | medium-high | No | Optional | Yes |
| Multi-file feature | Claude Code / Codex / OpenCode | Build + Review | high | Optional | Optional | Required |
| Code review | Codex / Claude Code / OpenCode Plan | Review | high | Optional review subagent | No | Required |
| Complex debug | Codex / Claude Code / Cursor | Debug / Fix | high / xhigh | Optional | Optional | Required |
| Security / auth / data | Codex / Claude Code / OpenCode | Security Review | xhigh / highest | Recommended | No | Required |
| README / documentation | Cursor / Claude / ChatGPT | Edit / Writing | low-medium | No | No | Optional |
| Batch generate examples | Claude Code / OpenCode / ChatGPT | Batch / Generate | medium | Optional | Available | Spot-check |
| Multi-agent parallel | Claude Code / Codex Cloud / Cursor Background / OpenCode | Multi-agent | high | Available | Available | Required |
| Launch readiness review | Codex / Claude Code / OpenCode | Review / Launch | high | Recommended review subagent | No | Required |
| Cross-tool automation | OpenClaw | Skill / Automation | high | Optional | Available | Required |

---

## When NOT to upgrade

Do not use advanced modes when:
- The task is a small edit
- The MVP is unclear
- No acceptance criteria exist
- Multiple agents would touch the same file
- You cannot verify the result
- The task touches private data or external actions without approval

---

## Upgrade path

```
普通对话 (ChatGPT / Claude)
  ↓ 有明确文件要改
单主 Agent (Cursor / Claude Code / Codex)
  ↓ 任务独立且隔离
subagent / review agent
  ↓ 文件边界清晰
多 Agent (2-3 max)
  ↓ 范围明确 + 验收标准 + checkpoint
长任务 / 后台任务
  ↓ 需要跨工具自动化
自动化 Agent (OpenClaw)
```

**Reasoning effort is not a separate stage.** Increase reasoning only when task complexity, risk, or ambiguity increases. You can use high/xhigh at any stage — for architecture decisions, complex debugging, security review, or launch readiness.

**Never skip steps.** Only upgrade when the previous level is not enough.

---

## Quick decision flow

```
Is this a planning task?
├── Yes → ChatGPT / Claude (medium-high reasoning)
└── No → Need to edit code?
    ├── No → ChatGPT / Claude
    └── Yes → Small edit?
        ├── Yes → Cursor (medium reasoning)
        └── No → Need repo-wide changes?
            ├── Yes → Claude Code / Codex / OpenCode
            └── No → Need automation?
                └── Yes → OpenClaw (with approval gates)
```

---

## Beginner safety rules

1. **Start with one primary agent.** Don't open multiple agents until you're comfortable.
2. **Use normal reasoning first.** Upgrade to high/xhigh only for complex tasks.
3. **Always review before moving on.** Don't let the agent run unchecked.
4. **Don't use subagents for your first project.** Learn the basics first.
5. **Don't use long tasks without checkpoints.** You'll lose control.

---

## Project Context Pack

When using any agent mode, include:

```markdown
**Project:** [name]
**Stage:** [current stage]
**Day:** [1-7]
**Tool:** [Cursor / Codex / Claude Code / OpenCode / OpenClaw]
**Mode:** [Planning / Build / Review / Debug / Multi-agent]
**Reasoning:** [normal / medium / high / xhigh]
**Subagent:** [yes / no]
**Long task:** [yes / no]
**Human review:** [required / optional / spot-check]
```

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ Find your task in the matrix above
→ Use the recommended tool, mode, and reasoning
→ Start with the smallest setup
→ Upgrade only when you hit a clear boundary
→ If you don't have the recommended tool: Read current-agent-adapter.md
→ Read tool-mode-selector.md for tool-specific mode details
→ Read tool-specific-workflows.md for step-by-step workflows
```


