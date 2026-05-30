# Writing Standards

> Make all files consistent, compact, execution-first, and beginner-friendly.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Required file structure

Every file in FirstMVPSkill should follow this structure (not all sections are required for every file):

1. **Title** — one line, what this file does
2. **Purpose** — why this file exists (1-2 lines)
3. **When to Use** — specific triggers
4. **Core Rule** — the one principle to remember
5. **Workflow / Content** — the main body
6. **Do Not** — what to avoid
7. **Output Format** — what the user gets
8. **Acceptance Criteria** — how to verify (when applicable)
9. **Next Action** — one concrete step

---

## Global style rules

| Rule | Why |
|------|-----|
| Clear | Beginners must understand on first read |
| Practical | Every sentence must help the user take action |
| Anti-overbuilding | Do not add features, modules, or complexity beyond what's needed |
| Beginner-friendly | Assume no prior knowledge of AI agents |
| Execution-first | Move the user forward, not just explain concepts |
| Token-efficient | Output the smallest useful answer |

---

## Global "Do Not" rules

| Do Not | Why |
|--------|-----|
| Overbuild | Ship first, iterate later |
| Recommend tool switching by default | Adapt to what the user has |
| Output long theory | Action beats explanation |
| Load all playbooks by default | Use routing to pick the right ones |
| Use advanced agent modes unless needed | Start simple, upgrade when necessary |
| Skip acceptance gates | Every step needs verification |
| Leave the user without one next action | Always end with a concrete step |
| Output Full Mode unless requested | Default to Compact |

---

## Writing quality checklist

Before publishing any file:

- [ ] Title is clear and specific
- [ ] Purpose is 1-2 lines, not a paragraph
- [ ] "When to Use" has specific triggers, not vague conditions
- [ ] Core rule is one sentence, bold
- [ ] Content uses tables, bullets, or numbered lists (not long paragraphs)
- [ ] "Do Not" section exists and is specific
- [ ] Output format is defined (what the user gets)
- [ ] Next action is one concrete step
- [ ] No jargon without explanation
- [ ] No duplicate content across files
- [ ] References other files instead of copying content

---

## Good vs bad examples

### Good: Purpose section
```
## Purpose
Use this command when you're ready to build a specific feature.
```

### Bad: Purpose section
```
## Purpose
This command is designed to help users who are in the BUILD phase of their MVP development journey and need to instruct their AI agent to implement a specific feature that was planned during the COMMAND phase of the Plan → Command → Build → Review → Fix → Launch loop.
```

---

### Good: Output format
```
## Output
- Tiny MVP (1-3 features)
- Not in V1
- Minimal practical stack (2-4 tools)
- 7-day plan
- Day 1 command
- Next action
```

### Bad: Output format
```
## Output
The system will generate a comprehensive project plan that includes feature definitions, tool recommendations, a detailed day-by-day execution schedule, copy-paste commands for each day, acceptance criteria for each feature, a Project Context Pack for agent sessions, and guidance on when to use different agent modes.
```

---

### Good: Do Not section
```
## Do Not
- Do not add user accounts (not in MVP)
- Do not switch to React (stick with Streamlit)
- Do not polish UI for 3 days (ship functional)
```

### Bad: Do Not section
```
## Things to Avoid
There are many things you should avoid when building your MVP. First, don't add features that aren't in your MVP scope. Second, don't switch tools mid-project. Third, don't spend too much time on UI polish...
```

---

### Good: Next action
```
## Next action
→ Run /first-mvp-launch with your idea
```

### Bad: Next action
```
## What to do next
Now that you've read this file, you should think about what you want to build and then consider using one of the available skills or commands to help you get started with your project.
```

---

## Token efficiency rules

| Situation | Output mode | Max length |
|-----------|-------------|------------|
| Quick question | Compact | ~200 words |
| MVP planning | Standard | ~800 words |
| Full project | Full | Chunked by section |

**Default to Compact.** The user will ask for more if needed.

---

## Cross-reference rules

Instead of copying content from other files, reference them:

```
Use: playbooks/agent-mode-matrix.md
Use: commands/coding-agent-command.md
Use: checklists/acceptance-gate-checklist.md
```

Only expand full content when the user explicitly asks. Prefer a summary plus section list first, then expand one section at a time.

---

## Next action

```
→ Use these standards when writing or editing any FirstMVPSkill file
→ Check against the writing quality checklist before publishing
→ Default to Compact Mode output
→ Reference files instead of copying them
```


