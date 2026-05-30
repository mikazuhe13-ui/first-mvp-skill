# Fallback Command Patterns

> When the user's agent lacks a capability, use these alternatives.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Core rule

**Never block the user. Always provide an alternative.**

If the user's agent can't do X, give them a way to accomplish the same goal with what they have.

---

## Pattern 1: No slash commands

**Original:** `/first-mvp-launch I want to build an AI study assistant`

**Fallback:**
```
I want to build an AI study assistant.

Act as a project planning agent. Follow the FirstMVPSkill framework:
- Ask about my experience level
- Define a Tiny MVP (1-3 features)
- List what's NOT in V1
- Recommend a minimal practical stack (2-4 tools)
- Create a 7-day plan
- Generate a Project Context Pack
- Give me Day 1 commands

Do not overbuild. Keep it simple.
```

---

## Pattern 2: No file editing

**Original:** Apply the changes to app.py

**Fallback:**
```
Generate the complete updated content for app.py.

Requirements:
[PASTE requirements]

Output the FULL file content, ready to copy-paste.
Do not skip any sections.
After outputting, tell me what changed.
```

**User action:** Copy the output and save it to the file manually.

---

## Pattern 3: No terminal access

**Original:** Run `npm test` to verify

**Fallback:**
```
After making changes, tell me:
1. What files changed
2. What commands I should run to test
3. What output I should expect
4. What would indicate a problem
```

**User action:** Run the commands manually and report results.

---

## Pattern 4: No subagents

**Original:** Dispatch a subagent for security review

**Fallback (sequential simulation):**
```
Now act as a Security Review Agent.

Review the following code for:
- Hardcoded API keys
- SQL injection risks
- XSS vulnerabilities
- Exposed secrets
- Insecure dependencies

Code to review:
[PASTE]

Output:
- Issue list with line numbers
- Severity (high / medium / low)
- Suggested fix for each issue
```

**Then switch back:**
```
Now act as the primary agent.
Apply the security fixes suggested above.
```

---

## Pattern 5: No long task support

**Original:** Run batch generation as a long task with checkpoints

**Fallback (split into sessions):**
```
Session 1 (20-30 min):
[PASTE task part 1]

After completing, tell me:
- What was done
- What files changed
- What's next

Then I'll start Session 2.
```

**User action:** Start a new session for each part. Paste Project Context Pack at the start of each session.

---

## Pattern 6: No high/xhigh reasoning

**Original:** Use xhigh reasoning for architecture decision

**Fallback (shrink scope + add verification):**
```
I need help with an architecture decision.

Context:
[PASTE Project Context Pack]

Decision to make:
[PASTE specific question]

Give me:
1. Two options (not more)
2. Pros and cons of each
3. Your recommendation
4. One-sentence reason

I will verify against my acceptance criteria before proceeding.
```

**Note:** With lower reasoning, add stronger acceptance criteria to compensate.

---

## Pattern 7: No review tool

**Original:** Use Codex /review

**Fallback (generic review prompt):**
```
Review the following code against the MVP scope.

## Project Context Pack
[PASTE]

## Code to review
[PASTE]

## Check these:
1. Does it match the MVP scope?
2. Are there bugs or errors?
3. Is anything overbuilt (not in MVP)?
4. Are there security issues?
5. Does it follow the tech stack?

## Output format
- Verdict: PASS / NEEDS FIX / FAIL
- Issues found: [list with line numbers]
- Suggested fixes: [specific changes]
- Next action: [what to do next]
```

---

## Pattern 8: No context memory

**Original:** Continue from previous session

**Fallback (re-inject context):**
```
## Project Context Pack
[PASTE the full Project Context Pack]

## What we've done so far
1. [Step 1]: [result]
2. [Step 2]: [result]
3. [Step 3]: [result]

## Current state
- Files: [list]
- Working: [what works]
- Broken: [what doesn't]

## Now I need
[Next task]
```

**User action:** Paste this at the start of every new session.

---

## Pattern 9: No web/search access

**Original:** Research the best API for this task

**Fallback:**
```
I need to choose an API for [task].

I'm considering:
- [Option 1]
- [Option 2]
- [Option 3]

Based on your knowledge, which is best for:
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]

If you don't know, tell me what to search for.
```

**User action:** Do the web search manually, then paste findings.

---

## Pattern 10: No external tool access

**Original:** Deploy to Vercel

**Fallback:**
```
Generate the deployment configuration for Vercel.

Output:
1. vercel.json content (if needed)
2. Environment variables needed
3. Build command
4. Step-by-step deployment instructions

I will run the deployment manually.
```

---

## Combining patterns

Sometimes you need multiple fallbacks at once.

**Example:** User has ChatGPT (no file edit, no terminal, no subagent)

```
## Fallback plan

1. ChatGPT generates the code → User copies to files manually
2. ChatGPT gives test commands → User runs manually
3. ChatGPT does review as a plain prompt → No subagent needed
4. User pastes Project Context Pack each session → No memory
```

---

## Project Context Pack

When using fallback patterns, always include:

```markdown
**Original command:** [what was recommended]
**Current tool:** [what the user has]
**Missing capabilities:** [list]
**Fallback pattern:** [which pattern(s) to use]
**Manual steps required:** [list]
```

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ Identify which capabilities are missing
→ Find the matching fallback pattern above
→ Rewrite the command using the fallback
→ Add manual steps where needed
→ Verify with acceptance-gate-checklist.md
→ Read current-agent-adapter.md for the full framework
```


