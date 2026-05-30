# 完整使用指南

## Workflow

Use this guide after the quick start works. Move through the loop one phase at a time.

---

## Core loop

```text
Plan → Command → Build → Review → Fix → Launch
```

Each loop produces:

1. Current goal
2. Executable task
3. Acceptance criteria
4. Agent command
5. Next decision

---

## Phase 1: Plan

Use:

```text
skills/first-mvp-launch/SKILL.md
commands/planning-command.md
templates/mvp-plan-template.md
```

Output:

- Tiny MVP
- Not in V1
- Success criteria
- Minimal practical stack
- 7-day plan

---

## Phase 2: Command

Use:

```text
templates/agent-task-brief-template.md
commands/coding-agent-command.md
```

Every command should include:

- Project Context Pack
- Files involved
- Do Not list
- Test or manual verification

---

## Phase 3: Build

Build one feature at a time. For beginners, use one primary agent first.

Do not use multi-agent until:

- MVP scope is frozen
- File ownership is clear
- You can review outputs

---

## Phase 4: Review

Use:

```text
commands/codex-review-command.md
checklists/acceptance-gate-checklist.md
```

Verdict must be:

```text
PASS / NEEDS FIX / FAIL
```

---

## Phase 5: Fix

Use:

```text
commands/execution-feedback-loop-command.md
commands/anti-overbuilding-command.md
```

Fix one blocker at a time. If the issue is scope creep, cut scope before coding more.

---

## Phase 6: Launch

Use:

```text
checklists/launch-readiness-checklist.md
templates/project-status-template.md
```

Launch when:

- The 3 MVP features work
- Acceptance Gates pass
- README or usage instructions are clear
- A live/demo/shareable version exists

---

## Do Not

- Do not jump from Plan directly to Launch.
- Do not run multiple agents on the same files without ownership rules.
- Do not continue after a failed Acceptance Gate.

---

## Next action

```text
Run Phase 1 with your current idea, then save the Project Context Pack.
```
