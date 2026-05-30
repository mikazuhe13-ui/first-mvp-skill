# Agent Tool Playbook

> Use this playbook to choose the right AI agent tool for each MVP task.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Core rule

**Use the smallest tool setup that can finish the task.**

Start with:
- one primary agent
- one clear task
- one Project Context Pack
- one Acceptance Gate

Upgrade only when:
- scope is clear
- file ownership is clear
- acceptance criteria are clear
- human review gate is defined

---

## Tool positioning matrix

| Tool | Best for | Not for |
|------|----------|---------|
| **ChatGPT / Claude** | Planning, strategy, project clarification, prompt drafting | File editing, repo-wide changes |
| **Cursor** | IDE-based edits, UI/component work, small bug fixes, close human-in-the-loop coding | Long unattended tasks, vague planning |
| **Codex** | Terminal/cloud coding, review, sandboxed execution, long-running threads, background/parallel work | Vague ideas without MVP scope |
| **Claude Code** | Repo-level coding, skills, subagents, batch workflows, review, complex codebase tasks | Unclear tasks without acceptance criteria |
| **OpenCode** | Configurable agents, Plan/Build separation, subagents, open-source agent workflows | Unmanaged multi-agent edits on shared files |
| **OpenClaw** | Personal assistant automation, cross-tool workflows, skill-based recurring tasks | High-permission automation without human approval |

---

## Decision table: what tool for what task

| Task | Recommended tool | Why |
|------|-----------------|-----|
| Define MVP scope | ChatGPT / Claude / first-mvp-launch | Need reasoning, not code editing |
| Write a README | ChatGPT / Claude / Claude Code | Writing task, not complex code |
| Fix a small bug | Cursor | Quick edit, see result immediately |
| Implement a feature | Claude Code / Codex / OpenCode Build | Need file editing with context |
| Review code | Codex / Claude Code / OpenCode Plan | Need independent analysis |
| Run a long task | Codex Cloud / Cursor Background / Claude Code batch | Need unattended execution |
| Run parallel tasks | Codex Cloud / Claude Code multi-agent | Need isolation |
| Automate cross-tool workflows | OpenClaw | Need skill-based automation |
| Daily personal assistant | OpenClaw | Need recurring automation |

---

## Decision flow

```
Do you need to edit code files?
├── No → ChatGPT / Claude
└── Yes →
    ├── Is it a small, focused edit?
    │   └── Yes → Cursor
    ├── Is it a repo-wide task?
    │   └── Yes → Claude Code / Codex / OpenCode
    ├── Is it a long-running task?
    │   └── Yes → Codex Cloud / Cursor Background / Claude Code batch
    └── Is it an automation workflow?
        └── Yes → OpenClaw
```

---

## Tool upgrade path

```
ChatGPT / Claude (planning)
  ↓ when you need to edit files
Cursor (small edits)
  ↓ when you need repo-wide changes
Claude Code / Codex / OpenCode (full agent)
  ↓ when you need parallel execution
Multi-agent / Cloud tasks
```

---

## Beginner recommendation

If you are new to AI agents:

1. **Start with ChatGPT or Claude** for planning
2. **Use Cursor** for your first code edits
3. **Try Claude Code or Codex** when you need repo-wide changes
4. **Explore OpenCode or OpenClaw** after you're comfortable with one tool

**Rule:** Master one tool before adding another.

---

## Safety rules by tool

| Tool | Safety rule |
|------|-------------|
| ChatGPT / Claude | Verify file paths before copying code |
| Cursor | Review each edit before accepting |
| Codex | Set allowed directories, review before merge |
| Claude Code | Use Project Context Pack, set file boundaries |
| OpenCode | Separate Plan and Build agents |
| OpenClaw | Require human approval for high-permission actions |

---

## Project Context Pack

When starting any tool session, include:

```markdown
**Project:** [name]
**Stage:** [current stage]
**Day:** [1-7]
**Tool:** [Cursor / Codex / Claude Code / OpenCode / OpenClaw]
**Task:** [what to do]
```

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ If planning: Use ChatGPT / Claude
→ If small edits: Use Cursor
→ If repo-wide work: Use Claude Code / Codex / OpenCode
→ If automation: Use OpenClaw
→ Read tool-specific-workflows.md for detailed workflows
→ Read reasoning-effort-decision-matrix.md for reasoning levels
```


