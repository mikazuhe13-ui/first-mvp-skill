# execution-feedback-loop-command

> Reset when stuck. Get back on track.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Purpose

Use this command when you're stuck, off track, or don't know what to do next. It diagnoses the problem and gives you a clear next action.

---

## When to use

- You've been building for days and feel lost
- You don't know what to do next
- Your project scope has crept
- You're stuck on a bug
- You feel like giving up

---

## Copy-paste command

### Reset command

```
## Project Context Pack

**Project:** [PROJECT NAME]
**Stage:** [current stage]
**Day:** [N] of 7

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

---

## Reset

Current status:
- What I've done: [list completed work]
- What I'm stuck on: [describe the blocker]
- Days elapsed: [N] of 7

Diagnose my situation:
1. Am I on track? (Yes/No)
2. What's blocking me? (Technical / Scope / Motivation / Direction)
3. What should I do RIGHT NOW? (one specific action)
4. Give me a copy-paste command to do it
5. Tell me exactly how to update my project status after I do it

Constraints:
- Give me ONE action, not five
- Make it something I can do in the next 30 minutes
- Don't suggest starting over
- Don't add or replace tools
- After the action, stop for Human Review Gate
```

### Scope creep reset

```
## Project Context Pack

**Project:** [PROJECT NAME]
**Stage:** [current stage]
**Day:** [N]

**Original MVP:**
1. [Feature 1]
2. [Feature 2] (optional)
3. [Feature 3] (optional)

**What I've actually been building:**
1. [Feature 1] ✅
2. [Feature 2] (optional) ✅
3. [Feature 3] (optional) 🔄
4. [Extra feature 1] 🔄 (not in MVP)
5. [Extra feature 2] ❌ (not in MVP)

---

## Scope Reset

I've lost focus. Help me:
1. Identify what's in my original MVP
2. List what I should STOP building
3. Give me ONE task to finish the MVP
4. Give me a copy-paste command for it
```

### Bug fix reset

```
## Project Context Pack

**Project:** [PROJECT NAME]
**Stage:** FIX
**Day:** [N]
**Tech stack:** [tools]

---

## Bug Fix

What's happening: [describe the bug]
What I expected: [expected behavior]
What actually happens: [actual behavior]
What I've tried: [list attempts]
Error message: [paste if available]

Help me:
1. Diagnose the root cause
2. Give me a specific fix
3. Give me a command to implement it
4. Tell me how to verify it works
```

### Motivation reset

```
## Project Context Pack

**Project:** [PROJECT NAME]
**Stage:** [current stage]
**Day:** [N]

**MVP scope:**
1. [Feature 1]
2. [Feature 2] (optional)
3. [Feature 3] (optional)

---

## Motivation Reset

What I've done so far: [list]
What's left: [list]
Why I'm stuck: [honest reason]

Help me:
1. Is this project still worth finishing? (Yes/No)
2. What's the minimum I need to do to ship?
3. Give me ONE small task I can do in 20 minutes
4. Make it feel achievable
```

---

## Required inputs

| Input | Example |
|-------|---------|
| Project name | "StudyBuddy" |
| MVP features | "Question gen, Answer display, Progress" |
| Current status | "2 features done, stuck on 3rd" |
| Blocker | "Can't get API to work" |
| Days elapsed | "5 of 7" |

---

## Expected output

```markdown
## Diagnosis

### Status: ON TRACK / OFF TRACK / BLOCKED

### Blocker type: TECHNICAL / SCOPE / MOTIVATION / DIRECTION

### What's wrong
[Clear description of the problem]

### What to do RIGHT NOW
[One specific action]

### Command
[Copy-paste ready]

### Status update
After doing the action, update `templates/project-status-template.md`:
- Current phase: [PLAN / COMMAND / BUILD / REVIEW / FIX / LAUNCH]
- Blocker status: [resolved / still blocked]
- Next action: [one sentence]

### After this action
[What to do next]

### Human Review Gate
Stop after the action. Do not ask "Continue to Day 2?" Ask:
1. Pass / fail?
2. What is the most unsatisfying point?
3. What is one personal idea you want to add?
4. How much time remains today?

If work completed too quickly, do not expand scope by default. Run a micro-optimization loop:
1. Test one real input
2. Identify one friction point
3. Propose 2-3 small improvements
4. User chooses one
5. Apply only that improvement
6. Update notes
```

---

## Acceptance criteria

- [ ] Project Context Pack is included
- [ ] Problem is clearly diagnosed
- [ ] ONE specific action is given (not multiple)
- [ ] Action has a copy-paste command
- [ ] Action is doable in 30 minutes or less
- [ ] You know what to do after the action
- [ ] Project status update is specified
- [ ] Human Review Gate is included
- [ ] You feel like you can continue

---

## Common mistakes to avoid

| Mistake | Why it's bad | Fix |
|---------|-------------|-----|
| Trying to fix everything at once | Overwhelming | Fix ONE thing |
| Starting over | Wastes all progress | Salvage what you can |
| Ignoring the blocker | It won't go away | Address it directly |
| Adding more features | Distracts from shipping | Cut scope |
| Working longer hours | Burnout | Take a break, then try ONE task |

---

## The 30-minute rule

When stuck, commit to just 30 minutes:

1. Pick ONE small task
2. Set a timer for 30 minutes
3. Work on just that task
4. When the timer ends, evaluate

Most of the time, starting is the hard part. Once you start, you'll keep going.

---

## Loop decisions

After the reset, make ONE decision:

| Situation | Decision | Action |
|-----------|----------|--------|
| Bug is fixed | **Continue** | Move to next feature |
| Bug persists | **Simplify** | Cut the feature |
| Scope is too big | **Simplify** | Remove features |
| All features done | **Launch** | Move to deploy |
| Project not viable | **Stop** | Document learnings and intentionally end the current idea |

**Never stay in limbo. Always make a decision. Always move forward.**

**Note:** "Stop" does not mean rage-quit. It means document learnings and intentionally end the current idea. This is a valid outcome, not a failure.

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

After the reset:

```
→ Do the ONE action given
→ Update templates/project-status-template.md
→ After completing it, use commands/codex-review-command.md to verify
→ Continue with your 7-day plan
```


