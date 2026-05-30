# Token Budget Policy

> Use the smallest useful output. Default to Compact Mode.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Core rule

**Output size should match task complexity. Small questions get small answers.**

---

## Three output modes

### Compact Mode (default)

**When to use:**
- User is starting
- User asks a simple question
- User needs the next action
- User is exploring options

**Output:**
- Diagnosis (1-2 lines)
- One recommendation
- One command or file reference
- One next action

**Max length:** ~150-250 words / ~500-1000 tokens

---

### Standard Mode

**When to use:**
- User asks for a plan
- User needs a 7-day MVP
- User is starting a new project
- User needs a specific command template

**Output:**
- Tiny MVP
- Not in V1
- Minimal practical stack
- 7-day plan summary
- Day 1 command
- Acceptance gate
- Project Context Pack
- Next action

**Max length:** ~500-800 words / ~2000-4000 tokens

---

### Full Mode

**When to use:**
- User explicitly asks for complete output
- Generating example files
- Writing documentation
- Preparing final launch package
- Running tests/evaluations

**Output:**
- Canonical 14-module system, chunked by section
- Project Context Pack
- Agent Command Pack
- Relevant playbook references first, full text only when requested
- Execution Feedback Loop
- Complete examples only when requested
- Multi-agent guidance (if needed)

**Max length:** chunked by default. Start with a summary plus section list, then expand one section at a time unless the user explicitly asks for all sections.

---

## How to choose

```
What does the user need?
├── Quick answer → Compact Mode
├── Project plan → Standard Mode
└── Complete system → Full Mode
```

**Rule:** When in doubt, start with Compact. The user will ask for more if needed.

---

## File loading rules

| Mode | Load |
|------|------|
| Compact | 1-2 files maximum |
| Standard | 3-5 files |
| Full | Relevant files in chunks |

---

## Token savings

| Mode | Typical tokens | When |
|------|---------------|------|
| Compact | ~500-1000 | Most interactions |
| Standard | ~2000-4000 | New project planning |
| Full | Chunked | Documentation, examples |

**Most interactions should use Compact Mode.** This saves tokens and keeps the user focused.

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ Default to Compact Mode
→ Upgrade to Standard when the user asks for a plan
→ Upgrade to Full only when explicitly requested
→ Read compact-output-rules.md for response format
→ Read skill-router.md for file selection
```


