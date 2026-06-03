# coding-agent-command

> 用 AI Agent 构建具体功能。可直接复制使用。  
> Build features with AI agents. Copy-paste ready.

---


## 工作流 / Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## 用途 / Purpose

当你已经有 MVP 计划，并准备让 Agent 实现某个具体功能、修 bug 或小范围重构时使用。

Use this command when you're ready to build a specific feature. Gives your AI agent clear instructions so it builds exactly what you need.

---

## 什么时候使用 / When to use

- You have a plan and need to build a feature
- You're on Day 2-5 of your 7-day plan
- You need to tell an agent what to code
- You want to avoid vague outputs

---

## 复制指令 / Copy-paste command

保留英文命令主体以提升模型执行稳定性。每次只让 Agent 做一个明确任务，并保持 Not in V1 和 Acceptance Gate 可见。

构建前先让 Agent 给 2-3 个实现方案，推荐最小方案。如果选择会改变 MVP scope，先确认再执行。

Before building, ask the agent to propose 2-3 implementation options and recommend the smallest one. If the choice changes MVP scope, confirm before implementation.

**Time rule:** 时间更多，不代表功能更多。时间更多，应该用于更好的 review、更清晰的 UX、更少的 bug 和更稳定的 launch。

**Time rule:** More time does not mean more features. More time means better review, cleaner UX, fewer bugs, and clearer launch.

### For building a new feature

```
## Project Context Pack

**Project:** [PROJECT NAME]
**One line:** [what it does]
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

**Files involved:**
- [file 1]: [what it does]
- [file 2]: [what it does]

**What not to change:**
- [File/feature to protect]

---

## Options before building

Before implementation:
1. Propose 2-3 implementation options
2. Recommend the smallest option
3. Explain tradeoffs briefly
4. Ask for confirmation if the choice changes MVP scope
5. Build only the selected option

---

## Task

In [FILE PATH], implement [FEATURE NAME]:

Requirements:
1. [Requirement 1 - be specific]
2. [Requirement 2 - be specific]
3. [Requirement 3 - be specific]

Do NOT:
- Add features not listed above
- Change existing code that works
- Add new dependencies I didn't ask for
- Over-engineer the solution
- Add comments unless I ask

After implementation:
1. Apply the changes to the correct files
2. Summarize what changed
3. Tell me how to test it
4. List any potential issues
5. Give me the status update for templates/project-status-template.md
6. Stop for Human Review Gate. Do not ask "Continue to Day 2?"

Human Review Gate:
- What was built:
- How to test it:
- Acceptance Gate:
- What the user should inspect:
- Ask the user:
  1. Pass / fail?
  2. What is the most unsatisfying point?
  3. What is one personal idea you want to add?
  4. How much time remains today?

If the work completed too quickly:
- Do not expand scope by default
- Test one real input
- Identify one friction point
- Propose 2-3 small improvements
- Wait for the user to choose one
- Apply only that improvement
- Update notes
```

### For fixing a bug

```
## Project Context Pack

**Project:** [PROJECT NAME]
**Stage:** FIX
**Day:** [N]
**Tech stack:** [tools]

---

## Bug

File: [file path]
Expected behavior: [what should happen]
Actual behavior: [what actually happens]
Error message: [paste the error if you have one]

Fix the bug. After fixing:
1. Explain what was wrong
2. Show the fix
3. Tell me how to verify it works
4. Give me the status update for templates/project-status-template.md
```

### For refactoring

```
## Project Context Pack

**Project:** [PROJECT NAME]
**Stage:** FIX
**Day:** [N]
**Tech stack:** [tools]

---

## Refactor

I need to refactor [FILE/COMPONENT].

Current code: [paste or describe it]
Goal: [what you want to achieve]

Constraints:
- Don't change the public API
- Don't add new features
- Keep existing tests passing

After refactoring:
1. Show the new code
2. Explain what changed
3. Verify tests still pass
4. Give me the status update for templates/project-status-template.md
```

---

## Required inputs

| Input | Example |
|-------|---------|
| Project name | "StudyBuddy" |
| Tech stack | "Next.js + TypeScript + Tailwind" |
| Feature name | "User login" |
| Requirements | "Email/password auth with JWT" |
| File location | "src/auth/login.ts" |

---

## Expected output

```markdown
## Implementation

### File: [path]
[The actual code]

### How to test
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Potential issues
- [Issue 1]
- [Issue 2]

### Project status update
- Feature status: [done / needs review / blocked]
- Current phase: REVIEW
- Next action: Run `commands/codex-review-command.md`

### Human Review Gate
1. Pass / fail?
2. What is the most unsatisfying point?
3. What is one personal idea you want to add?
4. How much time remains today?
```

---

## Acceptance criteria

- [ ] Project Context Pack is included
- [ ] Code implements the feature as specified
- [ ] Code is in the correct file location
- [ ] No extra features were added
- [ ] No new dependencies (unless requested)
- [ ] Testing instructions are clear
- [ ] Project status update is included
- [ ] Human Review Gate is included
- [ ] Agent stops after implementation and does not auto-continue to the next day
- [ ] You can run the code and it works

---

## Common mistakes to avoid

| Mistake | Why it's bad | Fix |
|---------|-------------|-----|
| No Project Context Pack | Agent lacks context | Always include it |
| "Build a login feature" | Too vague | Specify file, inputs, outputs |
| No file location | Agent puts code in wrong place | Always specify path |
| No constraints | Agent over-engineers | Say what NOT to do |
| No testing step | Can't verify it works | Ask for test instructions |
| Multiple features at once | Confuses the agent | One feature per command |

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

After the agent builds the feature:

```
→ Use commands/codex-review-command.md to review what was built
→ Use checklists/acceptance-gate-checklist.md to verify
```


