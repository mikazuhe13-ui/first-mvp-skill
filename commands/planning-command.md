# planning-command

> 把一个想法变成可执行的 MVP 计划。  
> Turn your idea into a written MVP plan.

---


## 工作流 / Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## 用途 / Purpose

当你有一个模糊 AI 项目想法，需要先变成 Tiny MVP、Not in V1、最小工具栈和 7 天计划时使用。

Use this command when you have a vague AI project idea and need to turn it into a clear, written plan with a Tiny MVP, minimal practical stack, and 7-day timeline.

---

## 什么时候使用 / When to use

- You have an idea but no plan
- You don't know where to start
- You want to define your MVP before building
- You need a 7-day timeline

---

## 复制指令 / Copy-paste command

下面的 prompt 保持英文，方便 Claude Code、Cursor、Codex 或 ChatGPT 稳定执行。把方括号里的内容替换成你的项目情况即可。

Paste this to Claude Code, Cursor, Codex, or ChatGPT:

```
I want to build: [YOUR PROJECT IDEA IN ONE SENTENCE]

Before planning, check these inputs:
- Daily available time: [15-30 min / 1 hour / 2-3 hours / 4+ hours / Not sure]
- Token / cost budget: [Low / Medium / High / Not sure]
- Current agent/tool: [ChatGPT / Claude web / Claude Code / Cursor / Codex / OpenCode / OpenClaw / Other / Not sure]
- Desired 7-day outcome: [Tiny MVP / Small project / Rough product prototype / Mid-sized prototype / Not sure]
- Personal idea or preference: [what must feel like my own idea]
- Must-have: [what must be included]
- Must-not-have: [what must not be added]

If any input is missing, either ask one brief question or apply these defaults:
- Daily time: 60 minutes
- Token budget: Low
- Current agent: current tool
- Desired outcome: Tiny MVP first
- Personal preference: ask after Day 1 review

Help me plan this as a 7-day MVP.

Requirements:
1. Define the Tiny MVP (1-3 features max, each in one sentence)
2. List what's NOT in V1 (explicit exclusions)
3. Define success criteria (what "done" looks like on Day 7)
4. Recommend a minimal practical stack (2-4 tools, each with a clear job, only tools I already know)
5. Create a day-by-day plan (Day 1 to Day 7)
6. Give me the exact command for Day 1
7. Recommend the command and mode to use next
8. Give me a Project Context Pack for my agent
9. Give me the first project status update for templates/project-status-template.md
10. Include a Human Review Gate after Day 1

Constraints:
- Do NOT suggest tools I haven't mentioned I know
- Do NOT add features beyond the MVP
- Do NOT suggest learning new frameworks
- Do NOT make it more complex than necessary
- Keep everything simple enough to ship in 7 days
- Higher time or token budget should improve completeness, testing, review, and polish; not uncontrolled feature growth

My tech level: [BEGINNER / INTERMEDIATE / ADVANCED]
Tools I know: [LIST THEM]
```

Every output must include:

1. Current goal
2. Executable task
3. Acceptance criteria
4. Agent command
5. Next decision

---

## Required inputs

| Input | Example |
|-------|---------|
| Project idea | "An AI study assistant for college students" |
| Tech level | "Beginner - I know basic HTML" |
| Known tools | "HTML, CSS, basic JavaScript" |
| Daily time | "1 hour/day" |
| Token budget | "Low" |
| Current agent | "Cursor" |
| Desired outcome | "Small project" |
| Personal preference | "I want it to feel calm and visual" |
| Must-have | "Local demo works" |
| Must-not-have | "No login" |

---

## Expected output

```markdown
## Tiny MVP

### Feature 1: [Name]
- What: [one sentence]
- User action: [what they do]
- Output: [what they get]

### Feature 2: [Name] (optional)
- What: [one sentence]
- User action: [what they do]
- Output: [what they get]

### Feature 3: [Name] (optional)
- What: [one sentence]
- User action: [what they do]
- Output: [what they get]

## Not in V1
- ❌ [Feature A]
- ❌ [Feature B]
- ❌ [Feature C]

## Success criteria
Day 7, the user can:
1. [Action 1]
2. [Action 2]
3. [Action 3]

## Minimal practical stack
- [Tool 1]: [purpose]
- [Tool 2]: [purpose]
- [Tool 3]: [purpose]

## 7-day plan
| Day | Task | Deliverable |
|-----|------|-------------|
| 1 | Setup | Code runs |
| 2 | Feature 1 | Works |
| 3 | Feature 2 | Works |
| 4 | Feature 3 | Works |
| 5 | Integration | Full flow |
| 6 | Deploy | Live URL |
| 7 | Ship | Published |

## Project Context Pack
- Project: [name]
- One line: [positioning statement]
- Stage: PLAN
- Day: 1
- MVP scope: [list]
- Not in V1: [list]
- Tech stack: [list]
- Files: [list]
- Acceptance criteria: [list]
- What not to change: [list]

## Day 1 command
[Paste-ready command]

## Project status update
- Current day: 1
- Current phase: COMMAND
- Goal for this session: [one sentence]
- Next action: paste the Day 1 command into your chosen agent
- Expected evidence: local app runs / first file exists / setup completes
```

---

## Acceptance criteria

- [ ] MVP has 1-3 features (not more)
- [ ] Each feature is one sentence
- [ ] Tool stack is 2-4 tools, each with a clear job
- [ ] All tools are ones you already know
- [ ] 7-day plan has daily deliverables
- [ ] Day 1 command is copy-paste ready
- [ ] Project Context Pack is included
- [ ] First project status update is included
- [ ] "Not in V1" is explicit

---

## Common mistakes to avoid

| Mistake | Why it's bad | Fix |
|---------|-------------|-----|
| Defining 5+ features | Too complex for 7 days | Cut to 1-3 |
| Choosing new tools | Learning curve kills momentum | Use what you know |
| Vague success criteria | Can't measure "done" | Be specific |
| No "Not in V1" | Feature creep | List exclusions |
| Skipping Day 1 command | Planning without action | Always include it |
| No Project Context Pack | Agent lacks context | Always include it |

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

After getting your plan:

```
→ Use commands/coding-agent-command.md to start building
→ Use templates/seven-day-plan-template.md to track progress
```


