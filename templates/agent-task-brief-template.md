# Agent Task Brief Template

> Use this when giving tasks to AI agents.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Task: [NAME]
## Date: [DATE]
## Agent role: [Planning / Coding / Review / Fix / Launch]

---

## Project Context Pack

```markdown
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
```

---

## Goal

What you want to build:

> Implement [FEATURE] that lets users [ACTION] and get [OUTPUT].

---

## Requirements

### Must have
1. [Requirement 1]
2. [Requirement 2]
3. [Requirement 3]

### Must NOT have
1. Don't add [feature]
2. Don't change [existing code]
3. Don't use [tool/library]

---

## Output format

What you expect to receive:

```markdown
1. Apply the changes to the correct files
2. Summarize what changed
3. Tell me how to test it
4. List any potential issues
5. Give me the project status update for templates/project-status-template.md
```

---

## Verification

How to check if it works:

```bash
[test command]
```

Expected result:
- [What should happen]
- [What should NOT happen]

---

## Common mistakes to avoid

When giving this task, don't:
- Be vague about file locations
- Skip the "must NOT have" section
- Forget to specify the tech stack
- Ask for multiple features at once
- Skip the Project Context Pack

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

After the agent completes:

```
→ Use commands/codex-review-command.md to review
→ Use checklists/acceptance-gate-checklist.md to verify
→ Update templates/project-status-template.md
```


