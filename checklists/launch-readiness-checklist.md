# Launch Readiness Checklist

> Final check before shipping.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Project Context Pack

Before running this checklist, prepare:

```markdown
**Project:** [name]
**Stage:** LAUNCH
**Day:** [7]
**MVP scope:** [1-3 features]
**Live URL:** [url]
```

---

## Feature check

- [ ] Feature 1 works
- [ ] Feature 2 works (optional)
- [ ] Feature 3 works (optional)
- [ ] Full flow works end-to-end
- [ ] No blocking bugs

---

## Deploy check

- [ ] Code is deployed
- [ ] URL works
- [ ] Environment variables set
- [ ] No deployment errors

---

## Documentation check

- [ ] README exists
- [ ] README explains what the product does
- [ ] README has "How to use" section
- [ ] README has "How to run locally" section
- [ ] Known limitations are listed
- [ ] Not in V1 is clearly documented
- [ ] Users know what this MVP does not do

---

## Security check

- [ ] No hardcoded API keys
- [ ] No secrets in code
- [ ] User input is validated
- [ ] Error messages don't leak info

---

## Code check

- [ ] No debug code (console.log, print)
- [ ] No commented-out code
- [ ] Code is committed to git
- [ ] .gitignore is set up

---

## User check

- [ ] Tested by at least 1 other person
- [ ] Feedback collected
- [ ] Critical feedback addressed

---

## Launch steps

### Step 1: Final test
```
1. Open [URL]
2. Test Feature 1
3. Test Feature 2 (if exists)
4. Test Feature 3 (if exists)
5. Test full flow
```

### Step 2: Share
- [ ] Shared with person 1: ____
- [ ] Shared with person 2: ____
- [ ] Shared with person 3: ____

### Step 3: Monitor
- [ ] Check for errors in first 24 hours
- [ ] Respond to feedback
- [ ] Fix critical bugs immediately

---

## Sign-off

- **Project:** ____
- **Launch date:** ____
- **Launched by:** ____
- **Status:** READY / NOT READY

---

## Project status update

After launch, update `templates/project-status-template.md`:

```markdown
Current day: 7
Current phase: LAUNCH
Launch gate: PASS / FAIL
Evidence: [live URL / test result]
Next decision: [collect feedback / fix bugs / start V2]
```

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ If READY: Ship it! Share the link.
→ If NOT READY: Fix the unchecked items, then re-check.
→ Always update templates/project-status-template.md
```


