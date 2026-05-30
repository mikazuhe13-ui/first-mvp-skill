# Long Task Protocol

> Use long tasks only when scope, files, and acceptance criteria are clear.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Core rule

**A long task needs boundaries. Without boundaries, the agent will drift.**

Before starting a long task, you must define:
1. Task boundary (what to do)
2. Files allowed to edit
3. Files forbidden to edit
4. Acceptance criteria
5. Checkpoints
6. Stop condition

---

## When to use long tasks

| Scenario | Use long task? | Why |
|----------|---------------|-----|
| Batch generate examples | Yes | Clear scope, repeatable |
| Batch check file consistency | Yes | Clear scope, verifiable |
| Large refactor | Yes, with plan | Needs checkpoints |
| Build a complete feature | Yes, with plan | Multi-step work |
| No acceptance criteria | No | No way to verify |
| No file boundaries | No | Agent may edit wrong files |
| No checkpoint plan | No | No way to track progress |
| Exploring an idea | No | Scope is unclear |

---

## Long task structure

Every long task must include:

```markdown
## Long Task

**Goal:** [one sentence]
**Files allowed:** [list]
**Files forbidden:** [list]
**Acceptance criteria:** [list]
**Checkpoints:** [list]
**Stop condition:** [when to stop]
```

---

## Checkpoint rules

After each major step:
1. Summarize what was done
2. List files changed
3. Verify against acceptance criteria
4. Report blockers
5. Ask: Continue / Fix / Stop?

Example checkpoint:
```
Checkpoint 2 of 5:
- Done: Generated examples 3-4
- Files changed: examples/ai-content-tool.md, examples/student-competition-demo.md
- Acceptance: Both have Project Context Pack, 1-3 features, (optional) placeholders
- Blockers: None
- Next: Generate example 5
```

---

## Stop conditions

The agent MUST stop when:
- All acceptance criteria are met
- A blocker cannot be resolved
- The scope has drifted from the original plan
- The agent has been running for more than 30 minutes without a checkpoint
- The user interrupts

---

## Common mistakes

| Mistake | Fix |
|---------|-----|
| "Refactor everything" | Define specific files and scope |
| "Make it better" | Define what "better" means |
| "Keep going until done" | Define checkpoints and stop condition |
| No file boundaries | List allowed and forbidden files |
| No acceptance criteria | Define what "done" looks like |

---

## Project Context Pack

When starting a long task, include:

```markdown
**Task:** [what to do]
**Files allowed:** [list]
**Files forbidden:** [list]
**Acceptance criteria:** [list]
**Checkpoints:** [list]
**Stop condition:** [when to stop]
```

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ If scope is clear and checkpoints exist: Use long-task protocol
→ If scope is unclear: Define scope first with Planning Agent
→ If no checkpoints: Add checkpoints before starting
→ Read agent-operation-playbook.md for the full picture
```


