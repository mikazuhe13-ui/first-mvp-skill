# codex-review-command

> 审查 AI Agent 刚做完的内容，在发布前抓出问题。  
> Review what the AI agent built. Catch bugs before they ship.

---


## 工作流 / Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## 用途 / Purpose

当 Agent 完成一个功能后，用它做 Acceptance Gate：确认是否符合 Tiny MVP、有没有 bug、是否需要 Fix。

Use this command after the agent builds something. It checks for bugs, verifies the feature works, and catches issues before they become problems.

---

## 什么时候使用 / When to use

- After the agent finishes building a feature
- Before moving to the next feature
- Before deploying
- When something "feels off" about the code

---

## 复制指令 / Copy-paste command

Quick review 适合日常推进；Deep review 只在上线前、复杂改动、安全/数据相关任务时使用。

### Quick review

```
## Project Context Pack

**Project:** [PROJECT NAME]
**Stage:** REVIEW
**Day:** [N]
**Tech stack:** [tools]

**MVP scope:**
1. [Feature 1]
2. [Feature 2] (optional)
3. [Feature 3] (optional)

**Files involved:**
- [file 1]: [what it does]
- [file 2]: [what it does]

---

## Review

Review the code I just built.

File(s): [list the files]

Check for:
1. Does it implement [FEATURE NAME] correctly?
2. Are there any obvious bugs?
3. Are there security issues?
4. Is it consistent with the rest of the project?

Output format:
- Issues found: [list or "None"]
- Suggested fixes: [list or "None"]
- Verdict: PASS or FAIL
- If FAIL: what needs to be fixed
- Status update for templates/project-status-template.md
```

### Deep review

```
## Project Context Pack

**Project:** [PROJECT NAME]
**Stage:** REVIEW
**Day:** [N]
**Tech stack:** [tools]

**MVP scope:**
1. [Feature 1]
2. [Feature 2] (optional)
3. [Feature 3] (optional)

**Acceptance criteria:**
- [Criterion 1]
- [Criterion 2]

---

## Deep Review

Do a thorough code review of [FILE/DIRECTORY].

Check for:
1. Correctness - does it do what it's supposed to?
2. Edge cases - what happens with empty input, null, errors?
3. Security - any injection, XSS, auth issues?
4. Performance - any obvious bottlenecks?
5. Consistency - matches project style?
6. Tests - are there tests? Do they cover edge cases?

Output format:
### Issues (sorted by severity)
1. [CRITICAL/HIGH/MEDIUM/LOW]: [description]
2. ...

### Suggested fixes
1. [fix for issue 1]
2. ...

### Verdict: PASS / NEEDS FIX / FAIL

### Status update for templates/project-status-template.md
```

---

## Required inputs

| Input | Example |
|-------|---------|
| File(s) to review | "src/auth/login.ts, src/auth/login.test.ts" |
| Feature name | "User login" |
| Review depth | "quick" or "deep" |

---

## Expected output

```markdown
## Review Results

### Feature: [name]
### Files: [list]

### Issues Found
1. [SEVERITY]: [description]
   - File: [path]
   - Line: [number]
   - Fix: [suggested fix]

### Suggested Fixes
1. [fix description]
2. [fix description]

### Verdict: PASS / NEEDS FIX / FAIL

### What to do next
- If PASS: → Move to next feature
- If NEEDS FIX: → Fix the issues, then review again
- If FAIL: → Rebuild the feature

### Project status update
- Feature status: [done / needs fix / blocked]
- Current phase: [REVIEW / FIX]
- Next action: [what to do next]
```

---

## Acceptance criteria

- [ ] Project Context Pack is included
- [ ] All issues are listed with severity
- [ ] Each issue has a suggested fix
- [ ] Verdict is clear (PASS/NEEDS FIX/FAIL)
- [ ] You know exactly what to do next
- [ ] Project status update is included
- [ ] No critical issues remain

---

## Common mistakes to avoid

| Mistake | Why it's bad | Fix |
|---------|-------------|-----|
| Skipping review | Bugs ship | Always review |
| Accepting "looks good" | Agent may miss issues | Ask for specific checks |
| Not fixing before moving on | Bugs compound | Fix immediately |
| Reviewing too many files at once | Agent loses focus | Review per feature |
| No Project Context Pack | Agent lacks context | Always include it |

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

After review:

- PASS → `commands/coding-agent-command.md` for next feature
- NEEDS FIX → Fix issues, then review again
- FAIL → Rebuild with `commands/coding-agent-command.md`

```
→ Use checklists/acceptance-gate-checklist.md for detailed verification
```


