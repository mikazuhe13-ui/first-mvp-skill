# 7-Day Plan Template

> Track your daily execution.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Project: [NAME]
## Start date: [DATE]
## Daily time budget: [15-30 min / 1 hour / 2+ hours]
## Token / cost budget: [Low / Medium / High / Not sure]
## Current agent/tool: [ChatGPT / Claude web / Claude Code / Cursor / Codex / OpenCode / OpenClaw / Other / Not sure]
## 7-day target: [Tiny MVP / Small MVP / Rough Product / Mid-sized Prototype]

---

## Project Context Pack

```markdown
**Project:** [name]
**One line:** [positioning statement]
**Stage:** BUILD
**Day:** [N]

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
- [Tool 3]: [purpose]

**Acceptance criteria:**
- [Criterion 1]
- [Criterion 2]
```

## 7-Day Scope Ladder / 7 天范围阶梯

Tiny MVP 是最低起点，不是最高上限。根据每天可投入时间、能力和 Agent 工具，7 天目标可以不同。

Tiny MVP is the minimum starting point, not the maximum outcome.

| Daily time / 每天时间 | 7-day target / 7 天目标 |
|---|---|
| 15-30 min/day | Tiny MVP / 最小可运行 demo |
| 1 hour/day | Small MVP / 1-3 个核心功能的小项目 |
| 2-3 hours/day | Rough Product / 粗糙但完整的可展示产品 |
| 4+ hours/day | Mid-sized Prototype / 中小型产品原型 |

**Scope rule:** More time can increase completeness, not uncontrolled scope. Extra time goes to UX, testing, review, documentation, launch readiness, and feedback.

**Do not:** Do not promise a mature commercial product in 7 days. Keep Not in V1 and Acceptance Gate.

---

## Core principle / 核心原则

Agent 用几分钟完成构建，不代表这一天结束。

“Day” 指的是用户的一轮推进周期，不是 Agent 的运行时间。

Agent time is not user time. A "Day" means a human progress cycle, not agent runtime.

---

## Daily structure / 每日结构

Every day should adapt to daily time budget, token budget, desired outcome, and agent capability.

Use this structure for each day:

```markdown
**Goal:** [one outcome for today]
**Time split:** [Plan / Build / Test / Review / Polish]
**Token mode:** [Compact / Standard / Full]
**Agent task:** [what the agent should do]
**User test task:** [what the user manually checks]
**Review task:** [what to inspect or ask the agent to review]
**Optimization task:** [small polish, bug fix, or scope reduction]
**Evidence / screenshot / notes:** [what proves progress]
**Acceptance Gate:** [pass condition]
**Human Review Gate:** [pass/fail, unsatisfying point, personal idea, time remaining]
**Move-on condition:** [when to continue to the next day]
```

Example time splits / 时间分配示例：

| Budget | Split |
|---|---|
| 30 min | 5 min goal check, 5 min agent build, 10 min user test, 5 min small fix, 5 min notes / next action |
| 1 hour | 10 min goal check, 10 min agent build, 15 min user test, 10 min review, 10 min optimization, 5 min notes / next action |
| 2+ hours | 15 min goal check, 20 min agent build, 30 min user test, 30 min review + fix, 30 min UX / copy / edge cases, 15 min screenshots / docs / launch prep |

---

## Day 1: Setup

**Goal:** Create the smallest running project.

**Time split:** 30 min = define scope + run shell; 1 hour = add visible UI; 2+ hours = review and fix setup.

**Token mode:** Low = Compact, Medium = Standard, High = Standard with one review pass.

**Agent task:** Create project shell and first runnable page or command.

**User test task:** Open the project locally.

**Review task:** Check that setup matches the chosen stack and does not add extra tools.

**Optimization task:** Remove unnecessary files or unclear setup steps.

**Evidence / screenshot / notes:** Local run command and screenshot or terminal note.

**Acceptance Gate:** The project opens locally without errors.

**Human Review Gate:** Pass/fail? What feels most wrong? What personal idea should remain? How much time remains today?

**Move-on condition:** Project runs and Day 2 feature is clear.

**Actual result:** ____

---

## Day 2: Feature 1

**Goal:** Build [Feature 1].

**Time split:** 30 min = smallest path; 1 hour = build + one manual test; 2+ hours = review, fix, and UX copy.

**Token mode:** Low = Compact, Medium = Standard, High = Standard with deeper review.

**Agent task:** Implement only [Feature 1].

**User test task:** Test with one real input.

**Review task:** Check behavior against Acceptance Gate.

**Optimization task:** Fix one blocker or polish the main user path.

**Evidence / screenshot / notes:** Working feature screenshot or notes.

**Acceptance Gate:** Feature 1 works for one real input.

**Human Review Gate:** Pass/fail? What is the most unsatisfying point? What personal idea should be added or protected? How much time remains today?

**Move-on condition:** Feature 1 passes without adding Not in V1 items.

**Actual result:** ____

---

## Day 3: Feature 2 (optional)

**Goal:** Build [Feature 2] only if it is still needed.

**Time split:** 30 min = simplify or cut; 1 hour = smallest working path; 2+ hours = build, test, and fix.

**Token mode:** Low = Compact, Medium = Standard, High = Standard with alternatives only if needed.

**Agent task:** Implement [Feature 2] within current file boundaries.

**User test task:** Confirm Feature 1 still works.

**Review task:** Check for scope creep.

**Optimization task:** Cut or simplify if it slows launch.

**Evidence / screenshot / notes:** Before/after note or test result.

**Acceptance Gate:** Feature 2 does not break Feature 1.

**Human Review Gate:** Pass/fail? What is still confusing? What personal idea should guide the next fix? How much time remains today?

**Move-on condition:** Feature 2 passes or is moved to Not in V1.

**Actual result:** ____

---

## Day 4: Feature 3 (optional)

**Goal:** Build [Feature 3] only if it is essential.

**Time split:** 30 min = decide cut/keep; 1 hour = one narrow path; 2+ hours = test edge cases and polish.

**Token mode:** Low = Compact, Medium = Standard, High = Standard with review gate.

**Agent task:** Build only the essential part of [Feature 3].

**User test task:** Run the full path with Features 1-3.

**Review task:** Confirm MVP still has 1-3 features.

**Optimization task:** Remove optional sub-features.

**Evidence / screenshot / notes:** Full path note or screenshot.

**Acceptance Gate:** MVP still has 1-3 features.

**Human Review Gate:** Pass/fail? Is this still within scope? What feels least satisfying? How much time remains today?

**Move-on condition:** Feature 3 passes or is removed from V1.

**Actual result:** ____

---

## Day 5: Integration

**Goal:** Make the full user flow work.

**Time split:** 30 min = test main path; 1 hour = fix top bug; 2+ hours = review, fix, and simplify.

**Token mode:** Low = Compact review, Medium = Standard review, High = deeper review and more tests.

**Agent task:** Connect features and fix integration blockers.

**User test task:** Complete the core flow as a real user.

**Review task:** Run `commands/codex-review-command.md` or equivalent.

**Optimization task:** Reduce confusing steps or unstable behavior.

**Evidence / screenshot / notes:** Test notes, error list, or screen recording.

**Acceptance Gate:** A user can complete the core flow.

**Human Review Gate:** Pass/fail? What broke or felt awkward? What personal idea should survive simplification? How much time remains today?

**Move-on condition:** Core flow works or blockers are documented for Day 6.

**Actual result:** ____

---

## Day 6: Deploy

**Goal:** Create a live URL or shareable demo.

**Time split:** 30 min = deploy checklist; 1 hour = deploy + link test; 2+ hours = fix deploy issues and README.

**Token mode:** Low = Compact deploy steps, Medium = Standard troubleshooting, High = deeper deploy review.

**Agent task:** Help deploy or prepare a shareable demo.

**User test task:** Open the link outside the dev environment.

**Review task:** Check env vars, links, and launch blockers.

**Optimization task:** Improve README or first-use instructions.

**Evidence / screenshot / notes:** Demo URL, screenshot, or deploy log.

**Acceptance Gate:** The link opens outside your machine.

**Human Review Gate:** Pass/fail? Can someone else open it? What launch detail feels weak? How much time remains today?

**Move-on condition:** Demo is shareable or fallback sharing path is ready.

**Actual result:** ____

---

## Day 7: Ship

**Goal:** Share the MVP with at least one real person.

**Time split:** 30 min = share link; 1 hour = collect feedback; 2+ hours = fix launch blockers and polish docs.

**Token mode:** Low = Compact launch checklist, Medium = Standard feedback summary, High = deeper feedback review.

**Agent task:** Help write launch message and summarize feedback.

**User test task:** Ask one real person to try it.

**Review task:** Decide continue, fix, or stop based on evidence.

**Optimization task:** Fix one critical launch issue only.

**Evidence / screenshot / notes:** Shared link, feedback note, or launch checklist.

**Acceptance Gate:** One real person can try it.

**Human Review Gate:** Pass/fail? What feedback matters most? What one improvement is worth doing next? How much time remains today?

**Move-on condition:** Launch evidence exists and next decision is written.

**Actual result:** ____

---

## Progress tracker

| Day | Task | Status | Acceptance Gate | Notes |
|-----|------|--------|-----------------|-------|
| 1 | Setup | ⬜ | — | |
| 2 | Feature 1 | ⬜ | PASS / NEEDS FIX / FAIL | |
| 3 | Feature 2 (optional) | ⬜ | PASS / NEEDS FIX / FAIL | |
| 4 | Feature 3 (optional) | ⬜ | PASS / NEEDS FIX / FAIL | |
| 5 | Integration | ⬜ | PASS / NEEDS FIX / FAIL | |
| 6 | Deploy | ⬜ | — | |
| 7 | Ship | ⬜ | PASS / NOT READY | |

Status: ⬜ Not started | 🔄 In progress | ✅ Done | ❌ Blocked

---

## Daily loop

After each day, update `templates/project-status-template.md` with:
- Current day
- Current phase
- Feature status
- Blockers
- Acceptance gate result
- Next action

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ Start Day 1 with commands/coding-agent-command.md
→ Use commands/execution-feedback-loop-command.md if stuck
→ Use checklists/acceptance-gate-checklist.md after each feature
```


