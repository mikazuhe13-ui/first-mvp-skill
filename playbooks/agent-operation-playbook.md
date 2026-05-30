# Agent Operation Playbook

> Use this playbook to decide how to run AI agents during an MVP project.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Core rule

**Use the smallest agent setup that can finish the task.**

Default:
- 1 primary agent
- normal reasoning
- one task at a time

Upgrade only when needed.

---

## Decision matrix

| Situation | Use |
|-----------|-----|
| Vague idea | Planning Agent |
| Clear feature | Coding Agent |
| Feature complete | Review Agent |
| Bugs found | Fix Agent |
| Ready to publish | Launch Agent |
| Complex decision | high / xhigh reasoning |
| Independent research | subagent |
| Separate file tracks | multi-agent |
| Long multi-step work | long-task protocol |

---

## When to use higher reasoning

Use high or xhigh reasoning when:
- The task affects architecture
- The task spans multiple files
- The task has high error cost
- The task requires debugging
- The task decides whether to continue, fix, simplify, launch, or stop

Do not use high reasoning for:
- Simple formatting
- Rewriting short text
- Filling templates
- Small isolated edits

---

## When to use subagents

Use subagents for:
- Isolated research
- Code review
- Security review
- Documentation review
- Test generation
- Example generation

Do not use subagents when:
- The MVP is unclear
- Two agents would edit the same file
- The user cannot verify the output

---

## When to use multi-agent

Use multi-agent when:
- File ownership is clear (frontend vs backend)
- Each agent has a separate track
- A merge plan exists
- The user can verify each agent's output

Do not use multi-agent when:
- The MVP is not frozen
- Files overlap
- The user is a beginner (max 2 agents)

---

## When to use long tasks

Use long tasks only when:
- The scope is clear
- Files are listed
- Acceptance criteria are defined
- Checkpoints are required
- The agent knows when to stop

Do not use long tasks when:
- No acceptance criteria exist
- No file boundaries defined
- No checkpoint plan

---

## Human review gates

Stop and review manually before:
- Changing architecture
- Adding dependencies
- Modifying auth, payments, data, or deployment
- Deleting files
- Launching publicly

---

## Upgrade path

```
1 primary agent (default)
  ↓ when task is isolated and independent
subagent
  ↓ when tracks are clearly separated
multi-agent (2-3 max)
  ↓ when scope is clear and checkpoints exist
long-task protocol
```

**Never skip steps.** Only upgrade when the previous level is not enough.

---

## Project Context Pack

When using any agent mode, always include:

```markdown
**Project:** [name]
**Stage:** [current stage]
**Day:** [1-7]
**Agent mode:** [primary / subagent / multi-agent / long-task]
**Reasoning:** [normal / high / xhigh]
```

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ Start with 1 primary agent and normal reasoning
→ Upgrade only when you hit a clear boundary
→ Read agent-mode-matrix.md for the full task x tool x mode matrix
→ Read tool-mode-selector.md for tool-specific mode details
→ Read agent-tool-playbook.md to choose the right tool
→ Read reasoning-effort-decision-matrix.md for reasoning levels
→ Read subagent-decision-matrix.md for subagent rules
→ Read long-task-protocol.md for long task rules
→ Read human-review-gates.md for review gates
```


