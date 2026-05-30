# Acceptance Gate Checklist

> Verify before moving on. Don't ship bugs.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Project Context Pack

Before running this checklist, prepare:

```markdown
**Project:** [name]
**Stage:** REVIEW
**Day:** [N]
**MVP scope:** [1-3 features]
**Acceptance criteria:** [list]
```

---

## Feature verification

For each feature in your MVP scope, check:

### Feature 1: [name]
- [ ] Code is written
- [ ] Code runs without errors
- [ ] Feature works as specified
- [ ] Edge cases handled (empty input, errors)
- [ ] No obvious bugs

### Feature 2: [name] (optional)
- [ ] Code is written
- [ ] Code runs without errors
- [ ] Feature works as specified
- [ ] Edge cases handled
- [ ] No obvious bugs

### Feature 3: [name] (optional)
- [ ] Code is written
- [ ] Code runs without errors
- [ ] Feature works as specified
- [ ] Edge cases handled
- [ ] No obvious bugs

---

## Integration check

- [ ] All features work together
- [ ] Full flow tested end-to-end
- [ ] No features break each other
- [ ] Error messages are friendly

---

## Code quality

- [ ] No console.log / print statements left
- [ ] No commented-out code
- [ ] No hardcoded secrets
- [ ] No TODO comments (or they're documented)

---

## Scope check

- [ ] Only MVP features are implemented
- [ ] No extra features added
- [ ] "Not in V1" list is respected
- [ ] No feature creep

---

## Verification methods

### Manual test
```
1. Open the app
2. [Action 1]
3. [Action 2]
4. [Action 3]
5. Verify: [expected result]
```

### Automated test (if exists)
```bash
[test command]
```

---

## Scoring

- All checks pass → **PASS** → Move to next feature
- 1-3 checks fail → **NEEDS FIX** → Fix, then re-verify
- 4+ checks fail → **FAIL** → Rebuild the feature

Do not move to the next phase until the gate result is written into `templates/project-status-template.md`.

```markdown
## Acceptance gate result

Feature or phase: [name]
Result: PASS / NEEDS FIX / FAIL
Failed checks: [list or None]
Evidence: [what proved it works]
Next action: [one sentence]
```

---

## Common issues

| Issue | Severity | Fix |
|-------|----------|-----|
| Feature doesn't work | Critical | Rebuild |
| Edge case not handled | High | Add handling |
| Error message unclear | Medium | Improve message |
| Console.log left | Low | Remove it |

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ PASS: Move to next feature or deploy
→ NEEDS FIX: Fix issues, then re-verify
→ FAIL: Use commands/coding-agent-command.md to rebuild
→ Always update templates/project-status-template.md
```


