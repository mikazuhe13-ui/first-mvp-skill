# anti-overbuilding-command

> Stop adding features. Ship what you have.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Purpose

Use this command when you're tempted to add more features, switch tools, or make things "more complete." It forces you back to your MVP scope.

---

## When to use

- You want to add a 4th feature
- You're thinking "what if we also..."
- You're switching tools mid-project
- You feel your MVP "isn't ready"
- You've been building for 3+ days and haven't shipped

---

## Copy-paste command

### Self-check prompt

```
## Project Context Pack

**Project:** [PROJECT NAME]
**Stage:** [current stage]
**Day:** [N]

**MVP scope:**
1. [Feature 1]
2. [Feature 2] (optional)
3. [Feature 3] (optional)

**Not in V1:**
- [Excluded 1]
- [Excluded 2]

---

## Overbuilding Check

I'm tempted to add: [FEATURE YOU WANT TO ADD]

Answer these questions:
1. Is this feature in my original MVP? (Yes/No)
2. Can I ship without it? (Yes/No)
3. Will it take more than 1 day to build? (Yes/No)
4. Am I adding this because it's needed, or because I'm avoiding shipping? (Needed/Avoiding)

If the answer to #1 is No and #2 is Yes: DON'T BUILD IT.
```

### Agent prompt to prevent bloat

```
## Project Context Pack

**Project:** [PROJECT NAME]
**Stage:** [current stage]
**Day:** [N]
**Tech stack:** [tools]

**MVP scope:**
- Feature 1: [description]
- Feature 2: [description]
- Feature 3: [description]

**NOT in V1:**
- [Excluded feature 1]
- [Excluded feature 2]
- [Excluded feature 3]

---

When I ask you to build something, check:
1. Is it in the MVP scope?
2. Is it necessary for the features?
3. Am I overbuilding?

If I'm overbuilding, tell me:
"You're overbuilding. [FEATURE] is not in your MVP. Ship what you have."
```

---

## Required inputs

| Input | Example |
|-------|---------|
| Project name | "StudyBuddy" |
| Your MVP features | "Question generation, answer display, progress tracking" |
| Feature you want to add | "User accounts with profiles" |

---

## Expected output

```markdown
## Overbuilding Check

### Feature you want to add: [name]
### In original MVP: YES / NO
### Can ship without: YES / NO
### Time to build: [estimate]
### Verdict: BUILD / DON'T BUILD

### Reasoning
[Why you should or shouldn't build this]

### What to do instead
[Focus on shipping the MVP, add this in V2]

### Project status update
- Decision: [built / not built]
- Current phase: [BUILD / FIX]
- Next action: [what to do next]
```

---

## Acceptance criteria

- [ ] Project Context Pack is included
- [ ] You've honestly assessed if the feature is in your MVP
- [ ] You've estimated the time cost
- [ ] You've decided to BUILD or DON'T BUILD
- [ ] If DON'T BUILD, you've moved on to shipping
- [ ] Project status update is included

---

## Common mistakes to avoid

| Mistake | Why it's bad | Fix |
|---------|-------------|-----|
| "Just one more feature" | Never ends | Ship first, add later |
| "It'll only take 10 minutes" | It won't | Time it honestly |
| "Users will need this" | You don't know yet | Ship, then ask users |
| "The code isn't clean enough" | Perfect is the enemy of done | Ship it |
| "I'll ship after this one feature" | Infinite loop | Ship now |

---

## The 3-feature rule

Your MVP has 1-3 features. Not 4. Not 5.

Why 1-3?
- 1 feature = enough if it solves the core problem
- 2 features = good balance
- 3 features = maximum for V1
- 4+ features = you're overbuilding

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

After the overbuilding check:

```
→ If DON'T BUILD: Go back to commands/coding-agent-command.md and finish your MVP
→ If BUILD: Update your MVP plan in templates/mvp-plan-template.md first
```


