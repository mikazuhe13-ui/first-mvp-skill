# Agent Capability Checklist

> Check what the current agent can and cannot do before giving commands.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Core rule

**Adapt by capability, not by tool name.**

Before giving any command, check which capabilities the user's agent supports.

---

## Capability check

For each capability, mark what the user's agent supports:

### File operations
- [ ] Can read files
- [ ] Can edit files directly
- [ ] Can create new files
- [ ] Can delete files
- [ ] Can rename/move files

### Terminal / execution
- [ ] Can run shell commands
- [ ] Can run tests
- [ ] Can install packages
- [ ] Can access git

### Commands / prompts
- [ ] Supports slash commands (`/command`)
- [ ] Supports system prompts
- [ ] Supports multi-turn conversation
- [ ] Supports context injection

### Advanced features
- [ ] Supports subagents
- [ ] Supports long-running tasks
- [ ] Supports background execution
- [ ] Supports parallel tasks
- [ ] Supports high/xhigh reasoning

### Context / memory
- [ ] Remembers previous messages in session
- [ ] Can load external context (files, URLs)
- [ ] Supports Project Context Pack injection
- [ ] Persists across sessions

### External access
- [ ] Can search the web
- [ ] Can access external APIs
- [ ] Can access external tools (git, deploy, etc.)
- [ ] Has human approval controls

---

## Common agent profiles

### Profile A: Full agent (Claude Code / Codex / OpenCode)

All capabilities supported. Use native commands.

```
File editing: ✅
Terminal: ✅
Slash commands: ✅
Subagents: ✅
Long tasks: ✅
High reasoning: ✅
Context memory: ✅
External access: ✅
```

### Profile B: IDE agent (Cursor)

Most capabilities supported. Some limitations on long tasks and subagents.

```
File editing: ✅
Terminal: ✅ (limited)
Slash commands: ❌ (uses Agent/Ask/Inline modes)
Subagents: ❌
Long tasks: ❌ (not ideal for unattended)
High reasoning: ✅
Context memory: ✅
External access: ❌
```

### Profile C: Chat agent (ChatGPT / Claude web/app)

Limited to conversation. No direct file or terminal access.

```
File editing: ❌ (output text only)
Terminal: ❌
Slash commands: ❌
Subagents: ❌
Long tasks: ❌
High reasoning: ✅
Context memory: ✅ (within session)
External access: ✅ (web search)
```

### Profile D: Automation agent (OpenClaw)

Full automation capabilities but requires approval gates.

```
File editing: ✅
Terminal: ✅
Slash commands: ✅ (skills)
Subagents: ✅
Long tasks: ✅
High reasoning: ✅
Context memory: ✅
External access: ✅ (email, calendar, files, APIs)
Human approval: Required for high-permission actions
```

---

## How to use this checklist

### Step 1: Ask the user what tool they're using

```
"What AI agent are you using right now?"
```

### Step 2: Match to a profile

Find the closest profile above.

### Step 3: Check specific capabilities

If the profile doesn't exactly match, check individual capabilities.

### Step 4: Adapt the command

Use `fallback-command-patterns.md` to rewrite commands for missing capabilities.

---

## Quick capability matrix

| Capability | Claude Code | Codex | Cursor | OpenCode | OpenClaw | ChatGPT/Claude |
|-----------|------------|-------|--------|----------|----------|---------------|
| File edit | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Terminal | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Slash cmd | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Subagent | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| Long task | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| High reason | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Context | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Web search | ❌ | ✅ | ❌ | ❌ | ✅ | ✅ |
| Approval | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |

---

## Project Context Pack

After checking capabilities, include:

```markdown
**Current tool:** [what the user has]
**Profile:** [A / B / C / D]
**Missing capabilities:** [list]
**Adaptation needed:** [yes / no]
**Adaptation path:** [native / compatible / degraded]
```

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ If all capabilities supported: Use native commands
→ If some capabilities missing: Use compatible path
→ If most capabilities missing: Use degraded path with manual steps
→ Read fallback-command-patterns.md for specific adaptations
→ Read current-agent-adapter.md for the full adaptation framework
```


