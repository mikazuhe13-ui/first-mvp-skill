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


