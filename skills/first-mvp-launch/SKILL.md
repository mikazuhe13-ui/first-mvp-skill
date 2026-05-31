---
name: first-mvp-launch
description: Use this skill when a user has a vague AI project idea and needs to turn it into a tiny MVP, minimal practical stack, 7-day launch plan, and execution loop.
---

# first-mvp-launch

> 把模糊 AI 想法变成 7 天可执行 MVP。帮你选工具、选模式、选路径。
> Turn your vague AI idea into a 7-day MVP. We choose tools, modes, and paths for you.

---


## 核心规则 / Core Rule

先定义 Tiny MVP，再给最小工具栈和 Day 1 command。保持 Project Context Pack、Agent Command Pack、Acceptance Gate 和 Execution Feedback Loop 一致。

Define the Tiny MVP first, then give the minimal stack and Day 1 command. Preserve the Project Context Pack, Agent Command Pack, Acceptance Gate, and Execution Feedback Loop.

---

## 边界 / Boundaries

### This skill does

- 澄清模糊 AI 项目想法 / clarify vague AI project ideas
- 定义 Tiny MVP / define a Tiny MVP
- 创建 Not in V1 边界 / create Not in V1 boundaries
- 推荐最小工具栈 / recommend a minimal tool stack
- 生成 7-day launch plan / generate a 7-day launch plan
- 创建 Project Context Pack / create a Project Context Pack
- 路由到相关 commands、checklists 和 playbooks / route to relevant commands, checklists, and playbooks

### This skill does not do

- 不默认构建完整 SaaS / does not build a full SaaS by default
- 不添加无限功能 / does not add unlimited features
- 不默认推荐热门工具 / does not recommend trendy tools by default
- 不替代人工 review / does not replace human review
- 不跳过 Acceptance Gates / does not skip acceptance gates
- 不强迫用户切换工具 / does not force users to switch tools

---

## Do Not / 禁止项

- 不要扩大 Tiny MVP 范围 / Do not expand the Tiny MVP scope.
- 不要跳过 Acceptance Gates / Do not skip acceptance gates.
- 不要推荐用户没用过的新工具，除非能在 1 小时内学会 / Do not recommend unfamiliar tools unless learnable in 1 hour.
- 不要强迫用户切换工具 / Do not force users to switch tools.

---

## Time Budget / 时间预算

如果用户给了每天可投入时间，就按时间调整 7-day plan。如果没有说明，默认每天 60 分钟。

If the user gives daily available time, adapt the 7-day plan to that time. If not given, assume 60 minutes per day.

| Daily time / 每天时间 | Planning strategy / 计划策略 |
|---|---|
| 15-30 min/day | 只做一个小动作，不追求完整功能 / Do one small action only |
| 1 hour/day | 做一个小功能 + 一次验收 / Build one small feature and verify it |
| 2-3 hours/day | 做功能、review、fix、优化 / Build, review, fix, and polish |
| 4+ hours/day | 可以多轮优化，但不扩 scope / Run more iterations without expanding scope |

**Rule:** 时间更多，不代表功能更多。时间更多，应该用于 review、测试、UX polish、bug fixing 和 launch readiness。

**Rule:** More time does not mean more features. More time means better review, testing, UX polish, bug fixing, and launch readiness.

---

## Optimization Loop / 优化闭环

使用这个小闭环推进执行：

Use this compact loop for execution:

```text
Suggest → Choose → Build → Review → Optimize
建议 → 选择 → 构建 → 检查 → 优化
```

- Agent 先提出 2-3 个可行方案 / Agent proposes 2-3 options.
- 用户根据时间、想法和限制做选择 / User chooses based on time, personal ideas, and constraints.
- Agent 只构建被选择的小范围 / Agent builds only the chosen small scope.

---

## 工作流 / Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## 什么时候使用 / When to use this skill

当用户只有一个模糊 AI 项目想法，或者已经开始工具跳跃、范围膨胀、不知道第一步时使用。

- User says "I want to build an AI..."
- User has an idea but no plan
- User keeps switching tools
- User doesn't know where to start
- User wants to define a MVP

---

## 输出规则 / Output rule

默认使用 Compact Mode。中文解释优先，保留英文关键词；不要一次性展开全部 14 个模块，除非用户明确要求 Full Mode。

Default to **Compact Mode**. Only output the full 14-module launch system when the user explicitly asks for full detail or is generating documentation/examples. In Full Mode, chunk long answers by section instead of dumping everything at once.

### Compact Mode (default)

Output only:
1. User level
2. Tiny MVP (1-3 features)
3. Not in V1
4. Minimal practical stack (2-4 tools)
5. 7-day plan summary
6. Day 1 command
7. One next action

Reference supporting files instead of copying them:
- `commands/planning-command.md`
- `templates/project-status-template.md`
- `playbooks/agent-mode-matrix.md`

### Full Mode (when asked)

Produce the canonical 14 modules:

1. Project input clarification
2. User level diagnosis
3. Project positioning
4. Target user and core pain
5. Tiny MVP
6. Not in V1
7. Success criteria
8. Minimal practical stack
9. 7-day launch plan
10. Project Context Pack
11. Agent Command Pack
12. Multi-agent task split
13. Validation, anti-overbuilding warning, and next action
14. Execution Feedback Loop

If key information is missing, make reasonable assumptions and label them as `[ASSUMPTION]`.

Only ask one clarifying question when the missing information blocks MVP definition. Never ask more than one question at a time.

**Do not stop the flow. Do not wait for perfect input. Push forward.**

---

## 1. Project input clarification

Assess whether the user's input is clear enough to proceed.

**Clear enough (proceed immediately):**
> "I want to build an AI study assistant that generates quiz questions from notes."

**Not clear enough (ask one question):**
> "I want to build something with AI."

If unclear, ask ONE question:

```
One question at a time:
- What do you want to build? (one sentence)
- Who is it for?
- What's the core action?
- What tools do you already know?
```

If the user gives partial info, fill gaps with assumptions:

```
You said: "I want to build an AI study assistant."
Assumption: Target user = college students.
Assumption: Core action = generate practice questions from notes.
Assumption: Tools = Streamlit + Claude API (common beginner stack).
```

---

## 2. User level diagnosis

Based on their answers, diagnose their level:

| Level | Signal | Response |
|-------|--------|----------|
| Beginner | "I don't know any tools" | Recommend Streamlit or simple HTML |
| Intermediate | "I know React/Python" | Recommend their familiar stack |
| Advanced | "I've built things before" | Focus on MVP scope, not tools |

**Do not** recommend tools they don't know. **Do not** suggest learning new frameworks.

---

## 3. Project positioning

Output a one-line positioning statement:

```
[Project Name] helps [Target User] solve [Core Problem] by [Core Action].
```

Example:
```
StudyBuddy helps college students prepare for exams by generating practice questions from their notes.
```

---

## 4. Target user and core pain

Define clearly:

```markdown
## Target user
- Who: [specific user type]
- Pain: [what frustrates them]
- Current solution: [what they do now]
- Why it's bad: [why current solution fails]
```

---

## 5. Tiny MVP

Define 1 to 3 core features. Prefer fewer features when possible.

**Never exceed 3 features in V1.**

```markdown
## Tiny MVP

### Feature 1: [Name]
- What it does: [one sentence]
- User action: [what the user does]
- Output: [what they get]

### Feature 2: [Name]
- What it does: [one sentence]
- User action: [what the user does]
- Output: [what they get]

### Feature 3: [Name] (optional)
- What it does: [one sentence]
- User action: [what the user does]
- Output: [what they get]
```

**1-2 features is fine.** Don't pad to 3. If the product works with 1 feature, ship it.

**Anti-overbuilding warning:**
> If you can't describe each feature in one sentence, it's too complex. Simplify.

---

## 6. Not in V1

Explicitly list what you're NOT building:

```markdown
## Not in V1

- ❌ [Feature A] — [reason]
- ❌ [Feature B] — [reason]
- ❌ [Feature C] — [reason]

These are good ideas. But they're not for V1. Ship first, add later.
```

---

## 7. Success criteria

Define what "done" looks like:

```markdown
## Success criteria

Day 7, the user can:
1. [Action 1]
2. [Action 2]
3. [Action 3]

That's it. If they can do these 3 things, you shipped.
```

---

## 8. Minimal practical stack

Recommend 2-4 tools, each with a clear job. No optional tools.

| Tool | Purpose | Why this one |
|------|---------|--------------|
| [Tool 1] | [purpose] | [reason] |
| [Tool 2] | [purpose] | [reason] |
| [Tool 3] | [purpose] | [reason] |
| [Tool 4] | [purpose] | [reason] (optional) |

**Rules:**
- Each tool must have a clear, specific job
- No "nice to have" tools
- No tools the user hasn't used (unless learnable in 1 hour)

**Anti-tool-hopping warning:**
> Don't switch tools mid-project. Pick your stack on Day 1 and stick with it.

---

## 9. 7-day launch plan

Generate a day-by-day plan adapted to the user's daily time budget. Each day must show the goal, time-band actions, Acceptance Gate, and one next action.

```markdown
## 7-day plan

### Day 1: Project setup
- Goal: Code runs locally
- If you have 30 min: Define Tiny MVP and create the simplest project shell
- If you have 1 hour: Add the first visible UI or command flow
- If you have 2+ hours: Run one review and fix obvious issues
- Acceptance Gate: The project opens locally without errors
- Next action: Start Day 2 with one feature only

### Day 2: Feature 1
- Goal: Implement [Feature 1]
- If you have 30 min: Build the smallest usable version
- If you have 1 hour: Build and manually test once
- If you have 2+ hours: Review, fix, and polish the UX copy
- Acceptance Gate: Feature 1 works for one real input
- Next action: Update Project Context Pack

### Day 3: Feature 2
- Goal: Implement [Feature 2] only if still needed
- If you have 30 min: Cut or simplify the feature
- If you have 1 hour: Build the smallest version
- If you have 2+ hours: Build, test, and fix issues
- Acceptance Gate: Feature 2 does not break Feature 1
- Next action: Continue or simplify

### Day 4: Feature 3
- Goal: Implement [Feature 3] only if it is essential
- If you have 30 min: Decide whether to cut it
- If you have 1 hour: Build one narrow path
- If you have 2+ hours: Test edge cases and polish
- Acceptance Gate: MVP still has 1-3 features
- Next action: Prepare integration

### Day 5: Integration
- Goal: Full flow works
- If you have 30 min: Test the main path once
- If you have 1 hour: Fix the most obvious bug
- If you have 2+ hours: Run review, fix, and simplify
- Acceptance Gate: A user can complete the core flow
- Next action: Prepare deploy

### Day 6: Deploy
- Goal: Live URL or shareable demo
- If you have 30 min: Prepare deploy checklist
- If you have 1 hour: Deploy and test the link
- If you have 2+ hours: Fix deploy issues and update README
- Acceptance Gate: Link opens outside your machine
- Next action: Prepare launch

### Day 7: Ship
- Goal: Share the MVP
- If you have 30 min: Share with one person
- If you have 1 hour: Collect feedback and note one fix
- If you have 2+ hours: Fix launch blockers and polish docs
- Acceptance Gate: One real person can try it
- Next action: Decide continue, fix, or stop
```

---

## 10. Project Context Pack

Before sending any command to an agent, prepare a context pack. This is the most important thing you can do to get good results from AI agents.

```markdown
## Project Context Pack

**Project:** [name]
**One line:** [positioning statement]
**Stage:** [plan / build / review / fix / launch]
**Day:** [1-7]

**MVP scope:**
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]

**Not in V1:**
- [Excluded 1]
- [Excluded 2]

**Tech stack:**
- [Tool 1]: [purpose]
- [Tool 2]: [purpose]
- [Tool 3]: [purpose]

**Files involved:**
- [file 1]: [what it does]
- [file 2]: [what it does]

**Acceptance criteria:**
- [Criterion 1]
- [Criterion 2]

**What not to change:**
- [File/feature to protect]
```

**Rule:** Paste this context at the start of every agent session. Update it after each day.

---

## 11. Agent Command Pack

Give the user the exact commands they'll need:

```markdown
## Agent commands

### Day 1 command
[Paste to Claude Code / Cursor / ChatGPT]

### Day 2 command
[Paste to Claude Code / Cursor / ChatGPT]

### Day 3-7 commands
[Refer to commands/ directory]
```

Every command must include the Project Context Pack above it.

---

## 12. Multi-agent task split

If the user wants to parallelize:

```markdown
## Multi-agent split

### Agent A: [task]
- Focus: [what]
- Files: [which files]
- Command: [paste command]

### Agent B: [task]
- Focus: [what]
- Files: [which files]
- Command: [paste command]

### Merge point
- When: [after which step]
- How: [how to combine]
```

---

## 13. Validation, anti-overbuilding warning, and next action

Before moving to execution, validate:

```markdown
## Validation check

- [ ] MVP has 1-3 features (not more)
- [ ] Each feature is one sentence
- [ ] Tool stack is 2-4 tools, each with a clear job
- [ ] 7-day plan is realistic
- [ ] Success criteria are specific
- [ ] "Not in V1" is explicit
- [ ] Project Context Pack is ready
```

**If any check fails, go back and simplify.**

Before the user starts building, warn them:

```markdown
## Warning: Don't overbuild

You will be tempted to:
- Add another feature
- Switch to a "better" tool
- Make it "more complete"
- Add user accounts
- Add a database

Don't.

Ship the MVP. Deploy. Share. Then iterate.
```

End this module with one immediate next action:

```markdown
## Next action
Copy the Day 1 command into your chosen agent now. Do not research tools today.
```

---

## 14. Execution Feedback Loop

After Day 1, check progress daily:

```markdown
## Daily check-in

### Today is Day [N]

**What I planned:** [from 7-day plan]
**What I actually did:** [honest answer]
**Blockers:** [what's stopping me]
**Tomorrow:** [next day's task]
```

Every daily check-in must update `templates/project-status-template.md` with:

- Current phase
- Feature status
- Blockers
- Anti-overbuilding decisions
- One next action

### Loop decisions

After each check-in, make ONE decision:

| Situation | Decision | Action |
|-----------|----------|--------|
| Feature works | **Continue** | Move to next feature |
| Feature has bugs | **Fix** | Use `codex-review-command` then fix |
| Feature is too complex | **Simplify** | Cut scope, remove sub-features |
| All features done | **Launch** | Move to deploy and ship |
| Project is not viable | **Stop** | Document learnings, start new idea |

**Never stay in limbo. Always make a decision. Always move forward.**

---

## Next action

After completing this skill, the user should:

1. Have a written MVP definition
2. Have a Project Context Pack
3. Have a 7-day plan
4. Have Day 1 commands ready
5. Start building with `coding-agent-command`

```
→ Go to commands/planning-command.md to formalize your plan
→ Read playbooks/agent-operation-playbook.md to learn how to run agents
```


