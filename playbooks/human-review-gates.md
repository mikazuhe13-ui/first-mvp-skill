# Human Review Gates

> Stop and review manually before making high-risk changes.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Core rule

**Some decisions require human judgment. Let the agent suggest, but the human decides.**

---

## When to stop and review

| Situation | Why | What to review |
|-----------|-----|----------------|
| Changing architecture | Hard to reverse | Is this the right structure? |
| Adding dependencies | Adds maintenance cost | Do we really need this? |
| Modifying auth | Security risk | Is this secure? |
| Modifying payments | Financial risk | Is this correct? |
| Modifying data storage | Data risk | Is this safe? |
| Modifying deployment | Availability risk | Will this break production? |
| Deleting files | May lose work | Is this really unused? |
| Launching publicly | Reputation risk | Is this ready? |
| Adding a feature not in MVP | Scope creep | Should this be in V1? |
| Changing tool stack | High switching cost | Is this worth it? |

---

## Review checklist

Before approving a high-risk change:

- [ ] I understand what the agent wants to change
- [ ] I understand why the agent wants to change it
- [ ] I understand the risk if this goes wrong
- [ ] I have a way to undo this if needed
- [ ] This aligns with the MVP scope
- [ ] This doesn't break existing features

---

## How to review

### Step 1: Read the agent's summary
The agent should explain:
- What it wants to change
- Why
- What files are affected
- What could go wrong

### Step 2: Check against Project Context Pack
- Is this in the MVP scope?
- Is this in the "Not in V1" list?
- Does this match the tech stack?

### Step 3: Make a decision
- **Approve:** Let the agent proceed
- **Reject:** Tell the agent why and suggest an alternative
- **Modify:** Ask the agent to adjust the approach

---

## What agents should do

When an agent encounters a review gate, it should:

1. **Stop** (don't proceed automatically)
2. **Summarize** (what it wants to do and why)
3. **List risks** (what could go wrong)
4. **Ask for approval** (wait for human response)

Example:
```
Review gate: Adding a new dependency

I want to add: requests library
Why: Need to call external API
Risk: Adds a dependency to the project
Alternative: Use urllib (built-in, no dependency needed)

Should I proceed? [Yes / No / Use alternative]
```

---

## Beginner safety rule

For beginners:
- **Default:** Review everything the first time
- **After 3+ successful reviews:** Trust the agent for low-risk tasks
- **Always review:** Auth, payments, data, deployment, deletion

---

## Project Context Pack

When hitting a review gate, include:

```markdown
**Review gate:** [type]
**What:** [what the agent wants to do]
**Why:** [reason]
**Risk:** [what could go wrong]
**Alternative:** [other options if any]
```

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ If risk is low: Let the agent proceed
→ If risk is high: Review manually
→ If unsure: Review manually (better safe than sorry)
→ Read agent-operation-playbook.md for the full picture
```


