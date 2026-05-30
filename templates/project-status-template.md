# Project Status Template

> Track your project through the loop.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Project

| Field | Value |
|-------|-------|
| Name | [NAME] |
| Updated | [DATE/TIME] |
| Current day | [1-7] |
| Current phase | [PLAN / COMMAND / BUILD / REVIEW / FIX / LAUNCH] |
| Chosen agent | [Claude Code / Cursor / Codex / ChatGPT] |
| Tool stack | [2-4 tools, each with a clear job] |

---

## Project Context Pack

Copy this into every agent session:

```markdown
**Project:** [NAME]
**One line:** [what it does]
**Stage:** [PLAN / COMMAND / BUILD / REVIEW / FIX / LAUNCH]
**Day:** [1-7]

**MVP scope:**
1. [Feature 1]
2. [Feature 2] (optional)
3. [Feature 3] (optional)

**Not in V1:**
- [Excluded 1]
- [Excluded 2]

**Tech stack:**
- [Tool 1]: [purpose]
- [Tool 2]: [purpose]

**Files involved:**
- [file 1]: [what it does]
- [file 2]: [what it does]

**Current goal:** [one sentence]

**Acceptance criteria:**
- [Criterion 1]
- [Criterion 2]

**What not to change:**
- [file/feature]
```

---

## Current goal

**Goal for this session:** [one sentence]
**Why this matters:** [how it moves the MVP forward]

---

## MVP scope

### In V1

1. [Feature 1]
2. [Feature 2] (optional)
3. [Feature 3] (optional)

### Not in V1

- [Excluded feature 1]
- [Excluded feature 2]
- [Excluded feature 3]

---

## Loop status

```
PLAN → COMMAND → BUILD → REVIEW → FIX → LAUNCH
 ✅      ✅       🔄       ⬜       ⬜      ⬜
```

**Current phase:** [PHASE]
**Overall progress:** [0-100%]

Rule: update this file after every Build, Review, Fix, and Launch step.

---

## Feature status

| Feature | Status | Day | Evidence | Notes |
|---------|--------|-----|----------|-------|
| Feature 1: [name] | ✅ | 2 | [screenshot/test/manual check] | |
| Feature 2: [name] | 🔄 | 3 | [missing evidence] | Stuck on API |
| Feature 3: [name] | ⬜ | 4 | [not started] | |

---

## Daily log

### Day 1: Setup
- **Planned:** Create project
- **Actual:** Done
- **Issues:** None
- **Status:** ✅

### Day 2: Feature 1
- **Planned:** Implement [feature]
- **Actual:** Done
- **Issues:** None
- **Status:** ✅

### Day 3: Feature 2
- **Planned:** Implement [feature]
- **Actual:** In progress
- **Issues:** API timeout
- **Status:** 🔄

### Day 4-7
- ⬜ Not started

---

## Blockers

| Blocker | Impact | Solution | Status |
|---------|--------|----------|--------|
| [Problem] | [What's blocked] | [How to fix] | Pending |

If a blocker survives more than one work session, run `commands/execution-feedback-loop-command.md`.

---

## Acceptance gates

| Gate | Result | Evidence | Next action |
|------|--------|----------|-------------|
| Feature 1 | PASS / NEEDS FIX / FAIL | [what proved it] | [what happens next] |
| Feature 2 | PASS / NEEDS FIX / FAIL | [what proved it] | [what happens next] |
| Feature 3 | PASS / NEEDS FIX / FAIL | [what proved it] | [what happens next] |
| Launch | PASS / NEEDS FIX / FAIL | [live URL / test result] | [what happens next] |

---

## Review results

| Date | Reviewed item | Verdict | Issues | Fix command |
|------|---------------|---------|--------|-------------|
| [date] | [feature/file] | PASS / NEEDS FIX / FAIL | [summary] | [copy-paste command] |

---

## Decisions made

| Decision | Why | Date |
|----------|-----|------|
| Used Streamlit instead of React | User knows Python | Day 1 |
| Dropped feature X | Out of MVP scope | Day 2 |

---

## Anti-overbuilding log

| Temptation | Decision | Date |
|------------|----------|------|
| "Add user accounts" | Rejected - not in MVP | Day 2 |
| "Switch to React" | Rejected - stick with Streamlit | Day 3 |

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

**Most important thing right now:** [one sentence]
**Command:** [copy-paste command]
**Expected evidence:** [what proves this action worked]

```
→ Use commands/execution-feedback-loop-command.md if stuck
→ Use commands/codex-review-command.md after completing a feature
→ Use checklists/acceptance-gate-checklist.md before moving phases
```


