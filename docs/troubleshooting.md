# 错误处理

## Workflow

Find the symptom, apply the smallest fix, then retry the same step. Do not switch tools as the first response to an error.

---

## npm install 报错

### `npm.ps1 cannot be loaded`

On Windows PowerShell, use:

```bash
npm.cmd install -g first-mvp-skill
```

Or use Command Prompt / terminal instead of PowerShell.

### npm cache permission error

Use a local cache:

```bash
npm.cmd --cache ./.npm-cache install -g first-mvp-skill
```

### Package not published yet

If you are testing from the repository before npm publish:

```bash
npm install -g .
first-mvp-skill install
```

---

## install 报错

### Permission denied / EPERM

Install to a folder you can write:

```bash
first-mvp-skill install --target ./first-mvp-skill-local
```

Then copy the folder into your agent manually if needed.

### Installed files are missing

Run:

```bash
first-mvp-skill install --target ./first-mvp-skill-local
```

Check:

```text
config/default-mode.md
skills/first-mvp-launch/SKILL.md
commands/planning-command.md
```

---

## Agent 输出不对

### 输出太长

Say:

```text
Use FirstMVPSkill Compact Mode. Give only diagnosis, recommendation, one command, and next action.
```

### Agent 加了太多功能

Say:

```text
Apply the anti-overbuilding rule. Keep only 1-3 MVP features and list Not in V1.
```

### Agent 要你换工具

Say:

```text
Adapt to my current agent. Do not recommend switching tools unless this tool cannot complete the task.
```

### Slash command 不可用

Use the plain prompt fallback:

```text
Use FirstMVPSkill default mode.
My idea: [your idea]
Return Tiny MVP, Not in V1, minimal practical stack, 7-day plan, Day 1 command, Acceptance Gate, and Next action.
```

---

## Build 阶段报错

### API key missing

Ask the agent for a friendly setup check:

```text
Add a startup check for the required API key. If missing, show a clear message telling me where to set it.
```

### App runs locally but feature fails

Use:

```text
commands/codex-review-command.md
checklists/acceptance-gate-checklist.md
```

Verdict must be:

```text
PASS / NEEDS FIX / FAIL
```

---

## Do Not

- Do not start over before diagnosing the blocker.
- Do not switch frameworks to fix a small error.
- Do not continue to the next feature after a failed Acceptance Gate.

---

## Next action

```text
Find your symptom above, apply the smallest fix, then retry the same command.
```
