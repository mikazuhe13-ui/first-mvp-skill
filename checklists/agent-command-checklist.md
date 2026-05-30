# Agent Command Checklist

> Check your command before sending to an AI agent.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Project Context Pack check

Before sending any command, verify:

- [ ] Project Context Pack is included
- [ ] Project name is clear
- [ ] Current stage is specified (PLAN / COMMAND / BUILD / REVIEW / FIX / LAUNCH)
- [ ] Current day is specified
- [ ] MVP scope is listed (1-3 features)
- [ ] Tech stack is listed (2-4 tools)
- [ ] Files involved are listed
- [ ] Acceptance criteria are specified

---

## Command quality check

### 1. Goal clarity
- [ ] I said WHAT to build (not "help me with this")
- [ ] I said WHERE to build it (file path)
- [ ] I said what SUCCESS looks like

### 2. Context
- [ ] I mentioned the project type
- [ ] I mentioned the tech stack
- [ ] I mentioned what already exists

### 3. Constraints
- [ ] I said what NOT to do
- [ ] I said what NOT to change
- [ ] I said what NOT to add

### 4. Output format
- [ ] I said I want changes applied to files (not just shown)
- [ ] I said I want a summary of what changed
- [ ] I said how to test it
- [ ] I said I want a project status update

---

## Bad vs good

### Bad
```
Build me a login feature
```

### Good
```
## Project Context Pack

**Project:** StudyBuddy
**Stage:** BUILD
**Day:** 3
**Tech stack:** Streamlit + Claude API

---

## Task

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
1. Apply the changes to app.py
2. Summarize what changed
3. Tell me how to test it
4. Give me the project status update
```

---

## Quick checklist

Before sending, ask yourself:

1. Does the agent know WHAT to build?
2. Does the agent know WHERE to build it?
3. Does the agent know what NOT to do?
4. Does the agent know how to VERIFY it?
5. Is the Project Context Pack included?

5 × Yes = Send it. Any No = Fix it first.

---

## Common mistakes

| Mistake | Fix |
|---------|-----|
| "Build a login" | Specify file, inputs, outputs |
| No file path | Always include path |
| No constraints | Say what NOT to do |
| No verification | Ask for test instructions |
| Multiple features | One feature per command |
| No Project Context Pack | Always include it |

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ If checklist passes: Send the command
→ If checklist fails: Use templates/agent-task-brief-template.md to rewrite
```


