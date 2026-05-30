---
name: agent-command-coach
description: Use this skill when a user needs help commanding AI agents such as Claude Code, Cursor, Codex, or ChatGPT to plan, build, review, fix, and launch an MVP.
---

# agent-command-coach

> 学会有效指挥 AI Agent。不要模糊 prompt，不浪费执行时间。  
> Learn how to command AI agents effectively. No vague prompts. No wasted time.

---


## 核心规则 / Core Rule

用户负责判断方向，Agent 负责执行。每条命令都要包含 Project Context Pack、明确的 Do Not、Acceptance Gate 和 Next Action。

The user orchestrates. Agents execute. Every command needs a Project Context Pack, clear Do Not rules, an Acceptance Gate, and a Next Action.

---

## 边界 / Boundaries

### This skill does

- 帮用户写出更好的 agent commands / help users write better agent commands
- 适配到当前 Agent / adapt commands to the current agent
- 说明何时使用 slash commands、fallback prompts、subagents、long tasks 和 review gates / explain when to use slash commands, fallback prompts, subagents, long tasks, and review gates
- 保持闭环 Plan → Command → Build → Review → Fix → Launch / preserve the loop: Plan → Command → Build → Review → Fix → Launch

### This skill does not do

- 不强迫使用某个 Agent 工具 / does not force a specific agent tool
- 不默认推荐 subagents / does not recommend subagents by default
- 不为简单任务推荐 high/xhigh reasoning / does not recommend high/xhigh reasoning for simple tasks
- 不允许没有人工 review 的危险自动化 / does not allow unsafe automation without human review
- 不替代 Acceptance Gates / does not replace acceptance gates

---

## 工作流 / Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## 什么时候使用 / When to use this skill

当用户不会指挥 Claude Code / Cursor / Codex / ChatGPT，或者 Agent 输出跑偏、任务太大、验收不清时使用。

- User says "the AI didn't do what I wanted"
- User gives vague prompts and gets vague outputs
- User doesn't know how to use Claude Code / Cursor / Codex
- User's agent keeps making mistakes
- User wants to split work across multiple agents

---

## 核心闭环 / The core loop

Every AI agent interaction follows this loop:

```
Plan → Command → Build → Review → Fix → Launch
```

| Phase | What you do | Agent role |
|-------|-------------|------------|
| Plan | Define scope and tasks | Planning Agent |
| Command | Write clear instructions | (you write the command) |
| Build | Agent writes code | Coding Agent |
| Review | Agent checks for bugs | Review Agent |
| Fix | Agent applies fixes | Fix Agent |
| Launch | Agent prepares release | Launch Agent |

**You are the orchestrator.** The agents are your tools. You decide what to do. They execute.

---

## Agent roles

Don't think about specific tools (Claude Code, Cursor, Codex). Think about roles.

### Planning Agent

**Job:** Turn vague ideas into clear scope.

**Best for:**
- Defining MVP
- Creating 7-day plans
- Breaking down complex tasks
- Identifying dependencies

**Example prompt:**
```
I want to build [PROJECT].

Help me:
1. Define the MVP (1-3 features)
2. List the files I need to create
3. Suggest a 7-day plan
4. Give me Day 1 commands

Constraints:
- Don't suggest tools I don't know
- Don't add features beyond the MVP
- Keep it simple enough for 7 days
```

### Coding Agent

**Job:** Edit files and implement features.

**Best for:**
- Writing code
- Creating new files
- Implementing specific features
- Fixing bugs

**Example prompt:**
```
In [FILE PATH], implement [FEATURE NAME]:
- Input: [what goes in]
- Output: [what comes out]
- Constraints: [what NOT to do]
- Tests: [how to verify]
```

### Review Agent

**Job:** Check bugs, complexity, and readiness.

**Best for:**
- Finding bugs
- Checking code quality
- Verifying features work
- Assessing readiness to ship

**Example prompt:**
```
Review the code in [FILE/DIRECTORY]:

Check for:
- Does it implement [FEATURE] correctly?
- Are there any bugs?
- Are there security issues?

Output:
1. Issues found
2. Suggested fixes
3. Verdict: PASS / NEEDS FIX / FAIL
```

### Fix Agent

**Job:** Apply targeted fixes.

**Best for:**
- Fixing specific bugs
- Addressing review findings
- Improving error handling
- Adding missing tests

**Example prompt:**
```
Fix these issues in [FILE]:

1. [Issue 1]: [description]
2. [Issue 2]: [description]

Constraints:
- Don't change anything else
- Keep existing behavior
- Add tests for the fixes
```

### Launch Agent

**Job:** Prepare README, demo, and release.

**Best for:**
- Writing README
- Creating demo scripts
- Preparing deployment
- Writing release notes

**Example prompt:**
```
Prepare [PROJECT] for launch:

1. Write a README with:
   - What it does
   - How to use it
   - How to run locally
2. Create a demo script
3. List deployment steps
```

---

## Project Context Pack

Before sending ANY command, prepare a context pack. This is the #1 thing that improves agent output.

```markdown
## Project Context Pack

**Project:** [name]
**One line:** [what it does]
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

**Files involved:**
- [file 1]: [what it does]
- [file 2]: [what it does]

**Acceptance criteria:**
- [Criterion 1]
- [Criterion 2]

**What not to change:**
- [File/feature to protect]
```

**Rule:** Paste this at the start of every agent session. Update it after each day.

---

## How to write effective commands

### Bad command
```
Help me build a login feature
```

**Why it's bad:** No context, no constraints, no output format.

### Good command
```
Project Context Pack:
- Project: StudyBuddy
- Stage: Build
- Day: 3
- Tech stack: Streamlit + Claude API
- Files: app.py

In app.py, implement question generation:
- When user clicks "Generate Questions"
- Send notes to Claude API
- Ask for 5 practice questions with answers
- Display as numbered list

Do NOT:
- Add quiz scoring yet
- Change the upload feature
- Add new dependencies

After implementation:
1. Show me the code
2. Tell me how to test it
3. Give me the status update for project-status-template.md
```

### Command template

```
[Paste Project Context Pack]

In [FILE PATH], implement [FEATURE NAME]:
- Input: [what goes in]
- Output: [what comes out]
- Constraints: [what NOT to do]
- Tests: [how to verify]

After implementation:
1. Show the code
2. Tell me how to test
3. List potential issues
4. Give me the project status update
```

---

## How to give context

Agents need context to work well. Always provide:

| Context | Example |
|---------|---------|
| Project type | "This is a Next.js app with TypeScript" |
| Current state | "I have a basic layout, need to add auth" |
| Tech stack | "Using Prisma for DB, NextAuth for auth" |
| File structure | "Auth code goes in src/auth/" |
| What's done | "Login page exists, need signup" |

**Rule:** If the agent asks a clarifying question, add the answer to your Project Context Pack.

---

## How to manage context

### Short sessions
For single tasks, start a fresh agent session. Don't carry old context.

### Long sessions
For multi-step work, summarize before continuing:

```
Project Context Pack:
[updated pack]

What we've done so far:
- [Step 1]: [result]
- [Step 2]: [result]

Now I need: [next task]
```

### Context limits
If the agent seems confused or forgets things:
1. Start a new session
2. Paste the Project Context Pack
3. Continue with the next task

---

## Acceptance criteria

Every command must produce verifiable output. Before moving to the next task, check:

```markdown
## Task completion check

### Task: [name]
- [ ] Code written
- [ ] Tests pass
- [ ] Manual test works
- [ ] No new bugs introduced
- [ ] Project status updated

### If all checked:
→ Move to next task

### If any unchecked:
→ Fix before moving on
```

**Rule:** Never skip verification. "It probably works" = it doesn't work.

---

## How to avoid vague prompts

| Vague | Better |
|-------|--------|
| "Make it better" | "Reduce load time by optimizing images" |
| "Fix the bug" | "Login fails when email has + sign" |
| "Add auth" | "Add JWT auth with email/password in src/auth/" |
| "Make it pretty" | "Add Tailwind classes to match this design: [screenshot]" |
| "Do the thing" | "Run `npm test` and fix any failures" |

**Rule:** If you can't describe it in one sentence, you don't know what you want.

---

## How to split tasks across agents

For parallel work:

```
Project Context Pack:
[shared context]

### Track A: Frontend
- Agent: [Coding Agent]
- Files: src/app/*, src/components/*
- Task: [description]
- Command: [paste command]

### Track B: Backend
- Agent: [Coding Agent]
- Files: src/api/*, prisma/*
- Task: [description]
- Command: [paste command]

### Merge point
- When: [after which step]
- Agent: [Review Agent]
- How: [how to combine]
```

**Rule:** Each track must work on different files. No shared state.

---

## Common mistakes

| Mistake | Why it's bad | Fix |
|---------|-------------|-----|
| Vague prompts | Agent guesses wrong | Be specific |
| No context pack | Agent lacks info | Always include context |
| No constraints | Agent adds extra features | Say what NOT to do |
| No tests | Can't verify it works | Always ask for tests |
| Switching tools | Lose context, waste time | Pick one, stick with it |
| Skipping review | Bugs ship | Always review before moving on |

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

After reading this skill:

1. Pick one primary agent (Claude Code, Cursor, Codex, or ChatGPT). Add extra agents only when tasks are clearly separated.
2. Prepare your Project Context Pack
3. Write your first command using the template above
4. Start building

```
→ Go to commands/coding-agent-command.md for your first build command
→ Read playbooks/agent-operation-playbook.md to learn when to upgrade agent modes
```

---

## Token efficiency rule

Do not explain every agent tool by default.

First identify:
1. Current task
2. Current agent (what the user has)
3. Missing capability (if any)

Then load only the relevant playbook:
- Tool choice → `playbooks/agent-mode-matrix.md`
- Current agent adaptation → `playbooks/current-agent-adapter.md`
- Slash commands → `playbooks/slash-command-playbook.md`
- Fallback workflow → `playbooks/fallback-command-patterns.md`
- Subagent decision → `playbooks/subagent-decision-matrix.md`

Use compact output (see `routing/compact-output-rules.md`) unless the user asks for full detail.


