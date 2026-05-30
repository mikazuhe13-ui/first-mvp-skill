# Tool-Specific Workflows

> How to use each AI agent tool for the right task.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Cursor

### Use Cursor for
- Small code edits
- UI changes
- Component work
- Quick bug fixes
- Seeing code and AI suggestions side by side

### Do not use Cursor for
- Vague project planning
- Long unattended tasks
- Multi-agent orchestration without clear file boundaries

### Workflow
1. Open the file in Cursor
2. Select the code to change
3. Ask the AI to edit
4. Review the diff
5. Accept or reject

### Best practice
```
Cursor = close driving. You see every change. You approve every edit.
```

---

## Codex

### Use Codex for
- Terminal coding tasks
- Code review
- Sandboxed execution
- Long-running threads
- Cloud/background tasks
- Parallel tasks

### Do not use Codex for
- Vague ideas without MVP scope
- High-risk changes without approval policy

### Workflow
1. Define the task with Project Context Pack
2. Set file boundaries (allowed / forbidden)
3. Set acceptance criteria
4. Let Codex execute in sandbox
5. Review the diff
6. Merge or reject

### Commands
- `/review` — review working tree
- `/diff` — show current changes
- `/status` — show session status

### Best practice
```
Codex = autonomous driver. Set the destination, review the route.
```

---

## Claude Code

### Use Claude Code for
- Repo-wide file edits
- Skills and commands
- Subagents
- Batch workflows
- Code review and debugging
- Complex codebase tasks

### Do not use Claude Code for
- Unclear tasks without acceptance criteria
- Tasks without file boundaries

### Workflow
1. Start with Project Context Pack
2. Define the task clearly
3. Set file boundaries
4. Let Claude Code execute
5. Review changes
6. Verify with acceptance criteria

### Key features
- Skills: `/first-mvp-launch`, `/agent-command-coach`
- Subagents: isolated research, review, generation
- Batch: multiple tasks in sequence
- Commands: copy-paste templates from `commands/`

### Best practice
```
Claude Code = repo architect. Big scope, clear boundaries, structured output.
```

---

## OpenCode

### Use OpenCode for
- Configurable primary agents
- Plan/Build separation
- Subagent workflows
- Open-source agent setups

### Do not use OpenCode for
- Unmanaged multi-agent edits on shared files

### Workflow
1. Use Plan agent for analysis and suggestions
2. Use Build agent for code execution
3. Use subagents for isolated tasks
4. Review changes before committing

### Agent types
- **Plan agent:** Analyzes, suggests, does not modify code
- **Build agent:** Full tool permissions, modifies code
- **Subagent:** Specialized helper called by primary agent

### Best practice
```
OpenCode = configurable fleet. Plan first, then build with clear ownership.
```

---

## OpenClaw

### Use OpenClaw for
- Personal assistant workflows
- Cross-tool automation
- Skill-based automation
- Recurring tasks

### Do not use OpenClaw for
- High-permission automation without human approval
- Untrusted third-party skills
- Deleting, sending, purchasing, or exposing private data without review

### Workflow
1. Define the automation task
2. Check skill dependencies and permissions
3. Set human approval gates
4. Execute with monitoring
5. Review results

### Safety rules
OpenClaw must require human approval before:
- Sending emails
- Deleting files
- Spending money
- Changing accounts
- Accessing private documents
- Running unknown third-party skills

### Best practice
```
OpenClaw = personal assistant. Useful but powerful. Always set approval gates.
```

---

## ChatGPT / Claude (web/app)

### Use for
- Planning and strategy
- Project clarification
- Prompt drafting
- Non-file-editing reasoning
- Learning and exploration

### Do not use for
- Direct file editing
- Repo-wide changes
- Long-running code tasks

### Workflow
1. Describe your idea
2. Get a plan or analysis
3. Copy the output into your agent tool
4. Execute with Cursor / Codex / Claude Code

### Best practice
```
ChatGPT / Claude = thinking partner. Plan here, execute elsewhere.
```

---

## Quick reference

| Tool | Mode | Best task |
|------|------|-----------|
| ChatGPT / Claude | Web/App | Plan, think, draft |
| Cursor | IDE | Small edits, UI, quick fixes |
| Codex | CLI/Cloud | Review, sandbox, long tasks |
| Claude Code | CLI | Repo-wide, skills, subagents |
| OpenCode | CLI | Configurable agents, Plan/Build |
| OpenClaw | Local/Cloud | Automation, personal assistant |

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ Pick ONE tool to start with
→ Read the workflow section for that tool
→ Use it for your next task
→ Add another tool only when you're comfortable
→ Read agent-tool-playbook.md for the full decision matrix
```


