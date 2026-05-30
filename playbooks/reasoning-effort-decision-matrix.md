# Reasoning Effort Decision Matrix

> Pick the right reasoning level for the task. Don't waste resources.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Core rule

**xhigh is not for everyday use. Only when error cost is high, context is complex, or judgment is needed.**

Use the lowest reasoning level that can complete the task well.

---

## Decision table

| Task | Suggested reasoning | Why |
|------|-------------------|-----|
| Fix typo | Low / normal | No judgment needed |
| Rewrite README section | Normal | Simple writing task |
| Generate command template | Normal / medium | Follows a pattern |
| Write a simple feature | Medium | Some decisions needed |
| Define MVP scope | High | Requires judgment |
| Choose tool stack | High | Affects entire project |
| Debug unclear error | High | Needs analysis |
| Multi-file refactor | High / xhigh | High error cost |
| Design architecture | High / xhigh | Long-term impact |
| Security review | xhigh / highest available | Safety critical |
| Launch readiness review | High | Final quality gate |
| Decide continue/fix/simplify/launch/stop | High | Strategic decision |

---

## What each level does

### Normal
- Follows instructions directly
- Good for: templates, formatting, simple edits
- Use when: the task is clear and low-risk

### Medium
- Follows instructions with some analysis
- Good for: simple features, clear requirements
- Use when: the task has a few decisions but is mostly straightforward

### High
- Analyzes before acting
- Good for: architecture, debugging, scope decisions
- Use when: the task affects multiple files or has high error cost

### xhigh / highest available
- Deep analysis, multiple approaches considered
- Good for: security, production risk, complex debugging
- Use when: a mistake would be costly or hard to reverse

---

## Common mistakes

| Mistake | Reality |
|---------|---------|
| "Always use xhigh" | Wastes resources on simple tasks |
| "Never use xhigh" | Leaves complex tasks under-analyzed |
| "Use high for everything" | Overkill for templates and formatting |
| "Use normal for debugging" | Under-analyzes complex bugs |

---

## Quick check

Before choosing a level, ask:

1. **Can a mistake here break the project?**
   - Yes → High or xhigh
   - No → Normal or medium

2. **Does this span multiple files?**
   - Yes → High
   - No → Normal or medium

3. **Is this a one-way door (hard to reverse)?**
   - Yes → xhigh
   - No → High or lower

---

## Project Context Pack

When requesting high or xhigh reasoning, explain why:

```markdown
**Task:** [what to do]
**Reasoning level:** [normal / medium / high / xhigh]
**Why this level:** [brief reason]
```

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ If task is simple: Use normal reasoning
→ If task is complex: Use high reasoning
→ If task is critical: Use xhigh reasoning
→ Read agent-operation-playbook.md for the full picture
```


