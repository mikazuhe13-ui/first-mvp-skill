# Context Management Checklist

> Give your AI agent enough context to work well.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Project Context Pack check

Before sending any command, verify your Project Context Pack includes:

- [ ] Project name
- [ ] One-line description
- [ ] Current stage (PLAN / COMMAND / BUILD / REVIEW / FIX / LAUNCH)
- [ ] Current day (1-7)
- [ ] MVP scope (1-3 features)
- [ ] Not in V1 list
- [ ] Tech stack (2-4 tools)
- [ ] Files involved
- [ ] Acceptance criteria
- [ ] What not to change

---

## Project context

- [ ] I told the agent what type of project this is
- [ ] I told the agent the tech stack
- [ ] I told the agent the project structure

## Current state

- [ ] I told the agent what's already built
- [ ] I told the agent what files exist
- [ ] I told the agent what's working and what's not

## Task context

- [ ] I told the agent the specific task
- [ ] I told the agent where to put the code
- [ ] I told the agent what the expected output is

## Constraints

- [ ] I told the agent what NOT to do
- [ ] I told the agent what NOT to change
- [ ] I told the agent what tools to use (and not use)

---

## Context template

Use this when starting a new task:

```
## Project Context Pack

**Project:** [name]
**One line:** [positioning statement]
**Stage:** [PLAN / COMMAND / BUILD / REVIEW / FIX / LAUNCH]
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

**Acceptance criteria:**
- [Criterion 1]
- [Criterion 2]

**What not to change:**
- [File/feature to protect]

---

## Task

[What to build]
```

---

## Signs of insufficient context

| Sign | Missing context | Fix |
|------|-----------------|-----|
| Agent asks "what project?" | Project info | Add project description |
| Agent uses wrong tech | Tech stack | Specify stack |
| Agent puts code in wrong place | File path | Specify path |
| Agent adds unwanted features | Constraints | Say what NOT to do |
| Agent repeats mistakes | History | Share what was tried |

---

## Long sessions

For multi-step work, summarize before continuing:

```
## Project Context Pack

[updated pack]

**What we've done:**
1. [Step 1]: [result]
2. [Step 2]: [result]
3. [Step 3]: [result]

**Now I need:** [next task]
```

---

## Context limits

If the agent seems confused:
1. Start a new session
2. Paste the Project Context Pack
3. Continue with the next task

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ If context is sufficient: Send the command
→ If context is missing: Add it using the template above
```


