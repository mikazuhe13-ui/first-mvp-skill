# Default Mode

## Workflow

Load this file before generating FirstMVPSkill output. Use it as the default behavior unless the user explicitly asks for a different mode.

---

## Purpose

Make FirstMVPSkill produce useful results immediately after installation.

---

## Default settings

| Setting | Default |
|---------|---------|
| Output mode | Compact |
| MVP features | 1-3 |
| Minimal practical stack | 2-4 tools |
| Timeline | 7 days |
| Agent setup | One primary agent first |
| Multi-agent | Off by default |
| Advanced playbooks | Off by default |
| Full output | Chunked by section |

---

## Standard output

Use this when the user gives an MVP idea:

```text
1. Tiny MVP
2. Not in V1
3. Minimal practical stack
4. 7-day plan
5. Project Context Pack
6. Day 1 command
7. Acceptance Gate
8. Next action
```

---

## Do Not

- Do not show all advanced playbooks on first use.
- Do not recommend switching tools by default.
- Do not exceed 3 MVP features.
- Do not exceed 4 tools in the minimal practical stack.
- Do not skip Acceptance Gates.
- Do not leave the user without one next action.

---

## Next action

```text
Use this default mode for the first response after installation.
```
