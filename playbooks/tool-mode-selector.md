# Tool Mode Selector

> Decide which mode to use in each AI agent tool.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Cursor

Use for small, visible, human-in-the-loop edits.

### Recommended modes

| Mode | When to use |
|------|-------------|
| Agent mode | Small feature edits, component work, quick changes |
| Ask mode | Code explanation, understanding existing code |
| Inline edit | Local changes, fixing typos, small refactors |

### Avoid
- Large unattended tasks
- Unclear architecture decisions
- Multi-agent work without file boundaries

### Best practice
```
Cursor = close driving. See every change. Approve every edit.
```

---

## Codex

Use for terminal/cloud coding, review, and sandboxed execution.

### Recommended modes

| Mode | When to use |
|------|-------------|
| CLI | Local repo changes, feature implementation |
| `/review` | Code review of working tree |
| `/diff` | Check current changes |
| `/status` | Show session state |
| Cloud / background | Long independent tasks, parallel work |
| Sandbox + approval | Risky operations, high-stakes code |

### Avoid
- Vague product planning without MVP scope
- High-permission actions without approval policy

### Best practice
```
Codex = autonomous driver. Set the destination. Review the route.
```

---

## Claude Code

Use for repo-level changes, skills, subagents, and batch workflows.

### Recommended modes

| Mode | When to use |
|------|-------------|
| Skills | Reusable workflows (`/first-mvp-launch`, `/agent-command-coach`) |
| Subagents | Isolated research, review, generation |
| Batch | Multiple independent tasks in sequence |
| Plan before editing | Major changes, architecture decisions |
| `/code-review` | Code review workflow |
| Background session | Long-running tasks |

### Avoid
- Large edits without acceptance criteria
- Tasks without file boundaries

### Best practice
```
Claude Code = repo architect. Big scope. Clear boundaries. Structured output.
```

---

## OpenCode

Use for Plan/Build separation and configurable agents.

### Recommended modes

| Mode | When to use |
|------|-------------|
| Plan agent | Analysis, suggestions, architecture (does not modify code) |
| Build agent | Code execution, file editing (full tool permissions) |
| Explore / Scout subagent | Search, research, codebase understanding |
| Review agent | Code review, quality checks |

### Avoid
- Shared-file multi-agent edits
- Unmanaged parallel modifications

### Best practice
```
OpenCode = configurable fleet. Plan first. Then build with clear ownership.
```

---

## OpenClaw

Use for personal assistant and cross-tool automation.

### Recommended modes

| Mode | When to use |
|------|-------------|
| Skill automation | Recurring tasks, cross-tool workflows |
| Chat-based assistant | Ad-hoc requests via messaging channels |
| Gateway / channels | Long-term assistant across platforms |

### High-permission actions requiring human approval
- Sending emails
- Deleting files
- Spending money
- Changing accounts
- Accessing private documents
- Running unknown third-party skills

### Avoid
- High-permission actions without human review
- Untrusted third-party skills
- Deleting, sending, purchasing without approval

### Best practice
```
OpenClaw = personal assistant. Useful but powerful. Always set approval gates.
```

---

## ChatGPT / Claude (web/app)

Use for planning, strategy, and non-file-editing reasoning.

### Recommended uses

| Use | When |
|-----|------|
| Planning | Define MVP, choose tools, create 7-day plan |
| Strategy | Decide architecture, scope, priorities |
| Prompt drafting | Write agent commands, templates |
| Learning | Understand concepts, explore options |

### Avoid
- Direct file editing
- Repo-wide changes
- Long-running code tasks

### Best practice
```
ChatGPT / Claude = thinking partner. Plan here. Execute elsewhere.
```

---

## Quick reference

| Tool | Best mode for MVP work | Avoid |
|------|----------------------|-------|
| Cursor | Agent mode for small edits | Long unattended tasks |
| Codex | CLI + `/review` for implementation | Vague planning |
| Claude Code | Skills + subagents for repo work | No-boundary edits |
| OpenCode | Plan then Build | Shared-file conflicts |
| OpenClaw | Skill automation | Unapproved high-permission |
| ChatGPT / Claude | Planning and strategy | File editing |

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ Pick your tool based on the task
→ Use the recommended mode from the table above
→ Start with the simplest mode
→ Upgrade only when needed
→ Read agent-mode-matrix.md for the full decision matrix
→ Read tool-specific-workflows.md for step-by-step workflows
```


