# Subagent Decision Matrix

> Use subagents for isolated tasks. Don't use them when the MVP is unclear.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Core rule

**Subagents are for independent research, review, and generation — not for tasks that touch the same files as the main agent.**

---

## When to use a subagent

| Scenario | Use subagent? | Why |
|----------|--------------|-----|
| Search code structure | Yes | Isolated research |
| Security review | Yes | Independent analysis |
| Check README quality | Yes | Isolated review |
| Write an isolated example | Yes | No file conflicts |
| Generate test cases | Yes | Isolated output |
| Review a PR | Yes | Independent judgment |
| Fix a bug in the main file | No | Same file conflict |
| Define MVP scope | No | Needs user input first |
| Edit the same file as main agent | No | Will cause conflicts |
| User cannot verify output | No | No feedback loop |

---

## Subagent vs main agent

| Aspect | Main agent | Subagent |
|--------|-----------|----------|
| Role | Primary worker | Specialist helper |
| Scope | Broad, project-wide | Narrow, task-specific |
| File access | All project files | Limited to assigned files |
| Communication | Talks to user | Reports to main agent |
| Decision-making | Strategic | Tactical |

---

## What subagents are good for

- **Research:** Find files, search patterns, understand structure
- **Review:** Check quality, find bugs, verify completeness
- **Generation:** Write examples, tests, documentation
- **Analysis:** Security audit, performance check, dependency review

## What subagents are NOT good for

- **Core feature development:** Main agent should own this
- **Architecture decisions:** Need user input
- **Files shared with main agent:** Will cause conflicts
- **Anything that needs user interaction:** Subagents don't talk to users

---

## Beginner safety rule

For beginners:
- **Default:** Do not use subagents
- **Use subagents only when:** The task is clearly isolated and the user can verify the output
- **Max subagents at once:** 1 (start small)

---

## How to assign a subagent

Give the subagent:
1. **Clear task:** What exactly to do
2. **File boundaries:** Which files to read/write
3. **Output format:** What to return
4. **Acceptance criteria:** What "done" looks like

Example:
```
Review the README.md file for:
- Clarity (beginner can understand in 30 seconds)
- Completeness (install, usage, examples)
- Consistency (matches project terminology)

Output: List of issues with line numbers and suggested fixes.
```

---

## Project Context Pack

When assigning a subagent, include:

```markdown
**Task:** [what the subagent should do]
**Files:** [which files to read/write]
**Output:** [what to return]
**Acceptance criteria:** [what "done" means]
```

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ If task is isolated: Use a subagent
→ If task touches shared files: Use main agent instead
→ If unsure: Start with main agent, upgrade later
→ Read agent-operation-playbook.md for the full picture
```


