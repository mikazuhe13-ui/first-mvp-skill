# Expected Output Checklist

> Check if Skill Pack outputs are high quality.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Format check

- [ ] Has clear title
- [ ] A new visitor can understand the value in 30 seconds
- [ ] Includes a Before / After or concrete example when useful
- [ ] Has structured sections
- [ ] Has bullet points or tables
- [ ] Has copy-paste commands
- [ ] Has acceptance criteria
- [ ] Has next action

---

## Content check

- [ ] Uses simple language
- [ ] No unnecessary jargon
- [ ] Every sentence is useful
- [ ] No fluff or filler
- [ ] No vague advice
- [ ] Concrete and specific

---

## Actionability check

- [ ] Commands are copy-paste ready
- [ ] Commands have placeholders (not vague)
- [ ] Commands say what NOT to do
- [ ] Commands include verification steps
- [ ] Commands include expected evidence
- [ ] Commands include a project status update when part of the loop
- [ ] User knows exactly what to do next

---

## Anti-overbuilding check

- [ ] Warns against feature creep
- [ ] Keeps MVP to 1-3 features (never more than 3)
- [ ] Recommends familiar tools only (2-4 tools, each with a clear job)
- [ ] Includes "Not in V1" list
- [ ] Reminds about shipping

---

## Project Context Pack check

- [ ] Commands include Project Context Pack
- [ ] Project Context Pack has: project name, stage, day, MVP scope, tech stack, files, acceptance criteria
- [ ] Project Context Pack is updated after each phase

---

## Loop check

- [ ] Each loop gives a current goal
- [ ] Each loop gives one executable task
- [ ] Has acceptance criteria
- [ ] Has verification method
- [ ] Has evidence of completion
- [ ] Has an agent command
- [ ] Has next action
- [ ] Has next decision (continue, fix, simplify, launch, stop)
- [ ] Supports Plan → Command → Build → Review → Fix → Launch
- [ ] Can recover from being stuck

---

## FirstMVPSkill required output check

These are the canonical 14 modules FirstMVPSkill must produce in Full Mode. Every complete output should include all applicable items:

- [ ] Project input clarification
- [ ] User level diagnosis
- [ ] Project positioning
- [ ] Target user and core pain
- [ ] Tiny MVP
- [ ] Not in V1
- [ ] Success criteria
- [ ] Minimal practical stack
- [ ] 7-day launch plan
- [ ] Project Context Pack
- [ ] Agent Command Pack
- [ ] Multi-agent task split (if needed)
- [ ] Validation and anti-overbuilding warning
- [ ] Execution Feedback Loop

---

## Scoring

Rate each section:
- Format: ____ / 8
- Content: ____ / 6
- Actionability: ____ / 7
- Anti-overbuilding: ____ / 5
- Project Context Pack: ____ / 3
- Loop support: ____ / 10
- FirstMVPSkill required output: ____ / 14

**Total: ____ / 53**

---

## Quality levels

| Score | Level | Action |
|-------|-------|--------|
| 45-53 | Excellent | Ship it |
| 35-44 | Good | Minor improvements |
| 25-34 | Needs work | Significant revisions |
| <25 | Poor | Rewrite |

---

## Common issues

| Issue | Example | Fix |
|-------|---------|-----|
| Too vague | "Build a good UI" | "Add Tailwind classes: ..." |
| No next action | "That's it" | "→ Use commands/..." |
| No constraints | "Build login" | "Don't add OAuth" |
| Too long | 500-word explanation | Cut to 50 words |
| Too abstract | "Consider best practices" | "Use try/except around API call" |
| No Project Context Pack | Missing context | Add Project Context Pack |

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ If score ≥ 45: Ship the Skill Pack
→ If score 35-44: Fix the weak sections
→ If score < 35: Rewrite the weak files
```


