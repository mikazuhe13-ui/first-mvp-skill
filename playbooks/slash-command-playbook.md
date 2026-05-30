# Slash Command Playbook

> 有 slash commands 就用；没有就转换成普通 prompt。  
> Use slash commands when available. Convert to plain prompts when not.

---


## 工作流 / Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## 核心规则 / Core rule

Slash commands 只是快捷入口，不是必需品。工具不支持时，保留 Project Context Pack、任务、Do Not、Acceptance Gate 和 Next Action，改写成普通 prompt。

**Slash commands are shortcuts. If your agent supports them, use them. If not, the same result can be achieved with a plain prompt.**

---

## FirstMVPSkill slash 风格入口 / FirstMVPSkill slash-style entry points

These are slash-style entry points for FirstMVPSkill. They work directly only in tools that support skill or custom command invocation. If unavailable, use the fallback prompts below.

| Command | What it does | File |
|---------|-------------|------|
| `/first-mvp-launch` | Turn a vague idea into a Tiny MVP, minimal practical stack, and 7-day plan | `skills/first-mvp-launch/SKILL.md` |
| `/agent-command-coach` | Learn how to command AI agents effectively | `skills/agent-command-coach/SKILL.md` |

---

## Tool support varies — always check first

Slash and custom command support depends on tool version, environment, and configuration. Don't assume.

| Tool | Slash/custom command support | How to use |
|------|------------------------------|------------|
| Claude Code | Tool-native in supported versions | Type `/` to inspect available commands |
| Codex | Tool-native in supported environments | Type `/` to inspect available commands |
| Cursor | Supports custom/reusable command workflows in supported versions | Use tool-specific command setup or plain prompt fallback |
| OpenCode | Supports configurable commands/agents in supported setups | Use configured commands or plain prompt fallback |
| OpenClaw | Skill/command-style invocation depends on setup | Invoke configured skills or plain prompt fallback |
| ChatGPT / Claude | Chat UI may not expose slash commands | Use plain prompt fallback |

**Rule:** Type `/` first to inspect what's available. If the command doesn't exist, use the plain prompt fallback below.

---

## Common slash commands by category

### Project lifecycle

| Command | When to use | Maps to loop |
|---------|-------------|-------------|
| `/init` | Start a new project, set up structure | PLAN |
| `/first-mvp-launch` | Define Tiny MVP from a vague idea | PLAN |
| `/plan` | Create or update project plan | PLAN |
| `/agent-command-coach` | Write better agent commands | COMMAND |

### Building

| Command | When to use | Maps to loop |
|---------|-------------|-------------|
| `/build` or coding prompt | Implement a feature | BUILD |
| `/agents` | List, create, or manage subagents | BUILD |
| custom commands | Project-specific workflows | BUILD |

### Review and fix

| Command | When to use | Maps to loop |
|---------|-------------|-------------|
| `/review` | Review current changes | REVIEW |
| `/diff` | Show what changed | REVIEW |
| `/code-review` | Full code review workflow | REVIEW |
| `/fix` | Fix identified issues | FIX |

### Session management

| Command | When to use | Why |
|---------|-------------|-----|
| `/compact` | Context is getting long, compress it | Free up context window |
| `/clear` | Start fresh, clear all context | Reset after major direction change |
| `/status` | Check current project state | Stay oriented |

### Long tasks and background

| Command | When to use | Why |
|---------|-------------|-----|
| `/batch` | Run multiple independent tasks | Parallelize work |
| background session | Long-running task needs to persist | Don't block the user |
| `/resume` | Continue a previous session | Pick up where you left off |

---

## How to inspect available commands

Before using any slash command, type `/` and see what's available.

```
Type: /
Wait: agent shows available commands
Pick: the one that matches your current need
```

If the command doesn't exist, use the fallback prompt below.

---

## When NOT to use slash commands

- When you don't know what the command does
- When the command doesn't match your current loop phase
- When you need more control than the command provides
- When your tool doesn't support slash commands (use fallback)

---

## Fallback: no slash command support

If the user's tool does not support slash commands, convert to a plain prompt.

### `/first-mvp-launch` fallback

```
I want to build [your idea].

Act as a project planning agent. Follow the FirstMVPSkill framework:

1. Ask about my experience level (beginner / intermediate / advanced)
2. Define a Tiny MVP with 1-3 features (never more than 3)
3. List what's NOT in V1
4. Recommend a minimal practical stack (2-4 tools, each with a clear job)
5. Create a 7-day launch plan with daily deliverables
6. Generate a Project Context Pack with:
   - Project name
   - One-line description
   - Stage, Day, MVP scope
   - Not in V1
   - Tech stack
   - Files involved
   - Acceptance criteria
7. Give me Day 1 commands ready to copy-paste
8. Give me one next action

Rules:
- Do not overbuild
- Keep it simple
- Use tools I already know
- If unclear, assume and label [ASSUMPTION]
- Only ask ONE question if needed
```

### `/agent-command-coach` fallback

```
I need help writing an agent command for this task:

[PASTE your task description]

Act as an agent command coach. Help me write a clear, copy-paste command.

Ask me:
1. What is the project? (name, description)
2. What stage am I in? (PLAN / COMMAND / BUILD / REVIEW / FIX / LAUNCH)
3. What specific task do I need done?
4. What files are involved?
5. What should the output look like?
6. What should the agent NOT do?

Then give me:
1. A complete agent command with Project Context Pack
2. Acceptance criteria
3. A project status update template
4. One next action
```

### Codex `/review` fallback

```
Review the current changes in my project.

Check:
1. Do the changes match the MVP scope?
2. Are there bugs or errors?
3. Is anything overbuilt (not in MVP)?
4. Are there security issues?
5. Does it follow the tech stack?

Output:
- Verdict: PASS / NEEDS FIX / FAIL
- Issues: [list with line numbers]
- Fixes: [specific changes]
- Next action: [what to do]
```

### Codex `/diff` fallback

```
Show me what files have changed and what the changes are.

For each changed file:
1. File path
2. What changed (added / modified / deleted)
3. Why it changed (which feature or fix)
```

### Codex `/status` fallback

```
Give me a project status update:

1. Current phase (PLAN / COMMAND / BUILD / REVIEW / FIX / LAUNCH)
2. Current day (1-7)
3. Features completed
4. Features in progress
5. Blockers
6. Next action
```

### `/init` fallback

```
Set up a new project for me.

Project name: [name]
Description: [one line]
Tech stack: [tools]

Create:
1. Project folder structure
2. README.md with project description
3. .gitignore
4. Basic config files
5. Project Context Pack

Do not add features yet. Just set up the skeleton.
```

### `/plan` fallback

```
Create or update my project plan.

## Project Context Pack
[PASTE]

## What I need
- A 7-day plan with daily deliverables
- Each day has one clear task
- Each task has acceptance criteria
- Day 5 is reserved for fixes
- Day 6-7 is for deploy and launch

## Rules
- 1-3 features maximum
- 2-4 tools maximum
- No overbuilding
```

### `/compact` fallback

```
Summarize our conversation so far.

Include:
1. Project Context Pack (current state)
2. What we've built so far
3. What's working
4. What's broken
5. What's next

Keep it concise. I need enough context to continue in a new session.
```

### `/clear` fallback

```
I'm starting fresh. Forget everything from this session.

Here's what I need you to know going forward:
## Project Context Pack
[PASTE the current Project Context Pack]

Now let's continue with: [next task]
```

### `/agents` fallback (subagent management)

```
I need help with a specific sub-task.

Act as a [reviewer / researcher / security auditor]:
- Task: [what to do]
- Files: [which files to look at]
- Output: [what to return]
- Acceptance criteria: [what "done" means]

After completing, report back with:
1. What you found
2. Issues with line numbers
3. Suggested fixes
4. Verdict: PASS / NEEDS FIX / FAIL
```

---

## Before running any command

- [ ] I know the current phase (PLAN / COMMAND / BUILD / REVIEW / FIX / LAUNCH)
- [ ] I have a Project Context Pack
- [ ] I know which files may be changed
- [ ] I know what must not be changed
- [ ] I have acceptance criteria
- [ ] I know whether human review is required

## After running any command

- [ ] I reviewed what changed
- [ ] I checked against acceptance criteria
- [ ] I updated project-status-template.md
- [ ] I decided: continue / fix / simplify / launch / stop
- [ ] I know the next action

---

## How to convert any slash command

### Step 1: Identify what the command does

Read the skill file or command documentation.

### Step 2: Extract the core instructions

What does the command ask the agent to do?

### Step 3: Write as a plain prompt

Include:
- Context (Project Context Pack)
- Task description
- Output format
- Acceptance criteria
- Rules and constraints

### Step 4: Add verification

Since slash commands often include built-in verification, add explicit checks:
- What to verify
- How to verify
- What "done" looks like

---

## Quick conversion template

Any slash command can be converted to:

```
## Context
[Paste Project Context Pack]

## Task
[What to do]

## Output format
[What the result should look like]

## Rules
- [Constraint 1]
- [Constraint 2]
- [What NOT to do]

## Verification
- [How to check if it worked]
- [Acceptance criteria]


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action
[What to do after]
```

---

## Project Context Pack

When using slash commands or fallback prompts, always include:

```markdown
**Project:** [name]
**Stage:** [current stage]
**Day:** [1-7]
**Command:** [slash command name or "plain prompt"]
**Tool:** [what the user has]
```

---

## Next action

```
→ If your tool supports slash commands: Use them directly
→ If not: Use the fallback prompts above
→ Read current-agent-adapter.md for full adaptation framework
→ Read fallback-command-patterns.md for more conversion patterns
```


