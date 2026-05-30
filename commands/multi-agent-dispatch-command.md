# multi-agent-dispatch-command

> Split work across multiple AI agents. Build faster.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Purpose

Use this command when you want to parallelize work across multiple AI agents. Splits your project into independent tracks that can be built simultaneously.

---

## When to use

- You have frontend and backend work to do
- You want to build multiple features in parallel
- You have access to multiple AI agents
- Your project has clearly separable parts

**Beginner safety rule:** For beginners, use multi-agent dispatch only after the MVP scope is frozen and file ownership is clear. Start with 2 agents maximum.

---

## Copy-paste command

### Setup command

```
## Project Context Pack

**Project:** [PROJECT NAME]
**One line:** [what it does]
**Stage:** BUILD
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

---

## Multi-Agent Split

I want to split work across [2/3] agents.

For each track, give me:
1. Track name
2. What to build
3. Which files to create/modify
4. A copy-paste command for the agent
5. How to verify it works

Rules:
- Tracks must work on DIFFERENT files (no conflicts)
- Each track must be independently testable
- Give me a merge plan at the end
```

### Per-track command

```
## Project Context Pack

**Project:** [PROJECT NAME]
**Stage:** BUILD
**Day:** [N]
**Tech stack:** [tools]

**MVP scope:**
1. [Feature 1]
2. [Feature 2] (optional)
3. [Feature 3] (optional)

---

## Track: [TRACK NAME]

You are Agent [A/B/C] building [PROJECT NAME].

Your focus: [what you build]

Files you own:
- [file 1]
- [file 2]
- [file 3]

DO NOT touch:
- [files owned by other agents]

Task:
1. [Specific task 1]
2. [Specific task 2]
3. [Specific task 3]

After completion:
1. Run [test command]
2. Show me the results
3. List any issues
4. Give me the status update for templates/project-status-template.md
```

### Merge command

```
## Project Context Pack

**Project:** [PROJECT NAME]
**Stage:** REVIEW
**Day:** [N]
**Tech stack:** [tools]

---

## Merge

I've built [PROJECT NAME] with multiple agents.

Track A produced: [list files]
Track B produced: [list files]

Now merge them:
1. Combine the outputs
2. Resolve any conflicts
3. Verify everything works together
4. Run the full test suite

After merging, give me:
1. Any conflicts found and how you resolved them
2. Verification results
3. Status update for templates/project-status-template.md
```

---

## Required inputs

| Input | Example |
|-------|---------|
| Project name | "StudyBuddy" |
| Features | "Auth, Quiz, Dashboard" |
| Tech stack | "Next.js + Prisma" |
| Number of tracks | "2 (frontend + backend)" |

---

## Expected output

```markdown
## Work Split

### Track A: Frontend
- Focus: UI components and pages
- Files: src/app/*, src/components/*
- Command: [paste-ready]
- Verification: `npm run dev` and check pages

### Track B: Backend
- Focus: API routes and database
- Files: src/api/*, prisma/*
- Command: [paste-ready]
- Verification: `curl` API endpoints

### Merge Plan
1. After both tracks complete
2. Run `npm run build`
3. Test full flow end-to-end
4. Fix any integration issues

### Project status update
- Current phase: BUILD
- Track A status: [not started / in progress / done]
- Track B status: [not started / in progress / done]
- Next action: [what to do next]
```

---

## Acceptance criteria

- [ ] Project Context Pack is included
- [ ] Tracks work on different files
- [ ] Each track is independently testable
- [ ] Each track has a copy-paste command
- [ ] Merge plan is clear
- [ ] You know how to verify each track
- [ ] No shared state between tracks
- [ ] Project status update is included

---

## Common mistakes to avoid

| Mistake | Why it's bad | Fix |
|---------|-------------|-----|
| Tracks share files | Merge conflicts | Assign files explicitly |
| No verification step | Can't check if it works | Include test commands |
| Too many tracks | Coordination overhead | Max 3 tracks |
| No merge plan | Can't combine results | Define merge steps |
| Vague track boundaries | Agents overlap work | Be specific about files |
| No Project Context Pack | Agent lacks context | Always include it |

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

After all tracks complete:

```
→ Use the merge command to combine results
→ Use commands/codex-review-command.md to review the merged code
→ Read playbooks/agent-operation-playbook.md for when to use multi-agent
```


