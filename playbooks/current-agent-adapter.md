# Current Agent Adapter

> 把流程适配到用户已经有的 Agent，不要因为工具不同而卡住。  
> Adapt the workflow to the agent the user already has. Never block the user.

---


## 工作流 / Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## 核心规则 / Core rule

优先推荐最合适的 Agent，但永远给出“用当前工具也能推进”的版本。反工具跳跃优先。

**Recommend the best agent, but adapt to the agent the user already has.**

Never say: "You must switch to X."
Always say: "Here's how to do this with your current agent."

---

## 三种适配路径 / Three adaptation paths

判断当前工具能力后，选择 native、compatible 或 degraded。目标不是完美工具，而是继续推进闭环。

### Path 1: Native (recommended agent available)

The user has the recommended tool. Give the original command.

```
Task: Review the feature
Recommended: Codex /review
User has: Codex
→ Use: Codex /review [as-is]
```

### Path 2: Compatible (current agent can do it differently)

The user has a different tool that can accomplish the task with adapted instructions.

```
Task: Review the feature
Recommended: Codex /review
User has: Claude Code
→ Use: codex-review-command.md as a plain prompt in Claude Code
```

### Path 3: Degraded (current agent lacks key capabilities)

The user's tool is missing something important. Split the task or add manual steps.

```
Task: Review the feature
Recommended: Codex /review
User has: ChatGPT (no file access)
→ Use: Paste the code into ChatGPT with the review prompt
→ User manually applies fixes
→ Verify with acceptance-gate-checklist
```

---

## Decision flow

```
What tool does the user have?
├── Recommended tool → Native path (use as-is)
├── Different agent tool → Compatible path (adapt commands)
└── Basic chat tool → Degraded path (manual steps + verification)
```

---

## Capability-based adaptation

Don't adapt by tool name. Adapt by **capability**.

| Capability | If supported | If not supported |
|-----------|-------------|-----------------|
| File editing | Let agent edit files directly | Ask agent to output full file content or patch |
| Terminal commands | Let agent run tests | User runs commands manually |
| Slash commands | Use slash command | Convert to plain prompt |
| Subagents | Dispatch subagent for review | Simulate roles sequentially |
| Long tasks | Allow phased execution | Split into 20-30 minute tasks |
| High/xhigh reasoning | Use for architecture, debug, review | Shrink scope, add stronger acceptance gates |
| Context memory | Continue in same session | Paste Project Context Pack each time |
| External tool access | Can automate | Require human confirmation |
| Web/search access | Can research | User provides context manually |

---

## How to adapt a command

### Step 1: Identify the original command's requirements

What does the command need?
- File editing? Terminal? Subagent? High reasoning?

### Step 2: Check the user's agent capabilities

Use `agent-capability-checklist.md` to check.

### Step 3: Rewrite the command

Replace unsupported capabilities with:
- Manual steps
- Plain prompts
- Simpler workflows
- Stronger acceptance criteria

### Step 4: Preserve the loop

No matter what tool the user has, the loop stays the same:

```
Plan → Command → Build → Review → Fix → Launch
```

---

## Example adaptations

### Example 1: Codex review → ChatGPT

**Original:** Use Codex /review

**Adapted:**
```
Review this code against the MVP scope.

## Project Context Pack
[PASTE]

## Code to review
[PASTE]

Check:
1. Does it match the MVP?
2. Are there bugs?
3. Is anything overbuilt?
4. Verdict: PASS / NEEDS FIX / FAIL
5. Next action
```

### Example 2: Claude Code subagent → Cursor

**Original:** Dispatch a subagent for security review

**Adapted:**
```
In Cursor, open the file and use Ask mode:

Review this file for security issues:
- Hardcoded API keys
- SQL injection
- XSS vulnerabilities
- Exposed secrets

Report issues with line numbers.
```

### Example 3: Long task → Short sessions

**Original:** Run batch generation as a long task

**Adapted:**
```
Session 1 (20 min): Generate examples 1-2
Session 2 (20 min): Generate examples 3-4
Session 3 (20 min): Generate example 5 + verify all

Paste Project Context Pack at the start of each session.
```

---

## If the current agent is weaker than recommended

When the user's agent lacks key capabilities, adapt with these four rules:

1. **Shrink task scope.** Break big tasks into smaller ones. One feature per session instead of three.
2. **Add stronger acceptance gates.** With less powerful agents, you need more explicit verification. Check after every step, not just at the end.
3. **Use shorter sessions.** 20-30 minutes max. Paste Project Context Pack at the start of each session.
4. **Require more manual verification.** The agent can't self-verify as well, so the user must check outputs manually.

**Example:** If the recommended tool is Claude Code with subagents, but the user has ChatGPT:
- Instead of "build 3 features in one session" → "build 1 feature, verify, then start a new session for the next"
- Instead of "dispatch a security subagent" → "ask ChatGPT to review, then user manually checks"
- Instead of "run long task with checkpoints" → "split into 3 short sessions with manual handoff"

---

## Beginner safety rule

For beginners:
- **Default:** Use whatever tool you already have
- **Don't switch tools mid-project** (anti-tool-hopping)
- **If stuck:** Check `fallback-command-patterns.md` for alternatives
- **If confused:** Simplify the task, not the tool

---

## Project Context Pack

When adapting, always include:

```markdown
**Project:** [name]
**Stage:** [current stage]
**Day:** [1-7]
**Current tool:** [what the user has]
**Recommended tool:** [what would be ideal]
**Adaptation path:** [native / compatible / degraded]
**What to preserve:** [the loop, acceptance gates, Project Context Pack]
```

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ Identify the user's current tool
→ Check capabilities with agent-capability-checklist.md
→ Choose the adaptation path (native / compatible / degraded)
→ Rewrite the command if needed using fallback-command-patterns.md
→ Preserve the loop: Plan → Command → Build → Review → Fix → Launch
```


