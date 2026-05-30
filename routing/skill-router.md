# Skill Router

> Use this router to select the smallest set of files needed for the user's current situation.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Core rule

**Load only what's relevant. Do not dump everything.**

---

## Routing table

| User situation | Load these files | Do not load by default | Output mode |
|----------------|------------------|----------------------|-------------|
| "I have a vague idea" | `skills/first-mvp-launch/SKILL.md`, `commands/planning-command.md` | playbooks, examples | Compact |
| "I need a full MVP plan" | `skills/first-mvp-launch/SKILL.md`, `templates/mvp-plan-template.md`, `templates/seven-day-plan-template.md` | playbooks, examples | Standard |
| "I need agent command help" | `skills/agent-command-coach/SKILL.md`, `commands/coding-agent-command.md` | examples | Standard |
| "Which tool should I use?" | `playbooks/agent-mode-matrix.md`, `playbooks/tool-mode-selector.md` | all commands | Compact |
| "I don't have the recommended agent" | `playbooks/current-agent-adapter.md`, `playbooks/fallback-command-patterns.md` | tool-specific workflows | Compact |
| "My tool doesn't have slash commands" | `playbooks/slash-command-playbook.md` | all other playbooks | Compact |
| "I'm stuck / off track" | `commands/execution-feedback-loop-command.md`, `templates/project-status-template.md` | examples | Compact |
| "I need to review my code" | `commands/codex-review-command.md`, `checklists/acceptance-gate-checklist.md` | launch checklist | Compact |
| "I'm adding too many features" | `commands/anti-overbuilding-command.md`, `checklists/mvp-scope-checklist.md` | playbooks | Compact |
| "Ready to ship" | `checklists/launch-readiness-checklist.md`, `templates/project-status-template.md` | planning files | Compact |
| "Show me a full example" | `examples/closed-loop-ai-study-assistant.md` | all other examples | Full |
| "I want to use multiple agents" | `commands/multi-agent-dispatch-command.md`, `playbooks/subagent-decision-matrix.md` | examples | Standard |

---

## How to use

1. Identify the user's current situation from the table above
2. Load only the files in the "Load" column
3. Do NOT load files in the "Do not load" column unless the user asks
4. If unsure, start with the smallest set and expand on request

---

## Quick decision

```
What does the user need?
├── Plan → first-mvp-launch + planning-command
├── Build → coding-agent-command
├── Review → codex-review-command + acceptance-gate
├── Fix → execution-feedback-loop + project-status
├── Launch → launch-readiness-checklist
├── Tool choice → agent-mode-matrix + tool-mode-selector
├── Adapt → current-agent-adapter + fallback-patterns
└── Full example → closed-loop-ai-study-assistant
```

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ Identify the user's situation
→ Load only the relevant files
→ Use Compact Mode output (see compact-output-rules.md)
→ Expand only when the user asks
```


