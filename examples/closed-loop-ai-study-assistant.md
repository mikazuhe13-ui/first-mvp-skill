# Example: Closed-Loop AI Study Assistant

> Full Plan → Command → Build → Review → Fix → Launch loop with Agent Operation Playbooks.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## The complete loop

This example shows every phase of FirstMVPSkill, including how to choose tools, adapt commands, and use the playbooks layer.

---

## Phase 1: PLAN

### User's vague idea

> "I want to build an AI study assistant."

### Step 1: Choose the right tool for planning

Using `agent-mode-matrix.md`:

| Task | Best tool | Mode | Reasoning |
|------|-----------|------|-----------|
| Clarify vague idea | ChatGPT / Claude | Planning | medium-high |

**User has:** ChatGPT
**Decision:** Use ChatGPT for planning. Native for planning, fallback for slash command invocation.

### Step 2: Use slash command or fallback

Using `slash-command-playbook.md`:

ChatGPT doesn't support `/first-mvp-launch` as a slash command. Use the fallback prompt:

```
I want to build an AI study assistant.

Act as a project planning agent. Follow the FirstMVPSkill framework:

1. Ask about my experience level
2. Define a Tiny MVP with 1-3 features (never more than 3)
3. List what's NOT in V1
4. Recommend a minimal practical stack (2-4 tools)
5. Create a 7-day launch plan
6. Generate a Project Context Pack
7. Give me Day 1 commands
8. Give me one next action

Rules:
- Do not overbuild
- Keep it simple
- Use tools I already know
```

### Step 3: Agent produces Tiny MVP

```
Project: StudyBuddy
One line: Generate practice questions from your notes.

Features:
1. Upload notes (.txt)
2. Generate 5 practice questions
3. Take quiz and see score

Not in V1:
- ❌ Multiple subjects
- ❌ Progress tracking
- ❌ Flashcards
- ❌ User accounts
- ❌ Mobile app

Tools:
- Streamlit (UI) — you know Python
- Claude API (AI generation)
- GitHub (version control)
- Streamlit Cloud (deployment)

Success criteria:
Day 7, user can upload notes, get questions, take quiz.
```

### Step 4: Project Context Pack

```markdown
## Project Context Pack

**Project:** StudyBuddy
**One line:** Generate practice questions from your notes.
**Stage:** PLAN
**Day:** 1

**MVP scope:**
1. Upload notes (.txt)
2. Generate 5 practice questions
3. Take quiz and see score

**Not in V1:**
- Multiple subjects
- Progress tracking
- Flashcards
- User accounts

**Tech stack:**
- Streamlit: UI
- Claude API: AI generation
- GitHub: version control
- Streamlit Cloud: deployment

**Files involved:**
- app.py: Main application

**Acceptance criteria:**
- Can upload .txt files
- Can generate questions from notes
- Can take quiz and see score

**What not to change:**
- Core upload functionality
```

### Step 5: 7-day plan

| Day | Task | Deliverable |
|-----|------|-------------|
| 1 | Setup Streamlit | App runs |
| 2 | File upload | Can upload .txt |
| 3 | Question generation | AI generates questions |
| 4 | Quiz UI | Can answer and score |
| 5 | Integration + fix | Full flow works |
| 6 | Deploy | Live URL |
| 7 | Ship | Published |

### Project status update after PLAN

```markdown
Current day: 1
Current phase: COMMAND
Goal: create the smallest working StudyBuddy shell
MVP scope: upload notes, generate 5 questions, take quiz
Not in V1: accounts, payments, mobile, progress tracking
Next action: choose the right tool for Day 1 build
```

---

## Phase 2: COMMAND

### Step 1: Choose the right tool for building

Using `agent-mode-matrix.md`:

| Task | Best tool | Mode | Reasoning |
|------|-----------|------|-----------|
| Build clear feature | Claude Code / Codex / OpenCode Build | Build | medium-high |

**User has:** Cursor
**Decision:** Cursor can do this (Compatible path)

Using `current-agent-adapter.md`:
- Cursor supports file editing ✅
- Cursor supports Agent mode ✅
- Cursor does not have slash commands → use plain prompt

### Step 2: Before running any command

Using `slash-command-playbook.md` checklist:

- [x] I know the current phase: BUILD
- [x] I have a Project Context Pack ✅
- [x] I know which files may be changed: app.py
- [x] I know what must not be changed: core upload
- [x] I have acceptance criteria ✅
- [x] I know whether human review is required: yes

### Step 3: Day 1 command (adapted for Cursor)

```
## Project Context Pack

**Project:** StudyBuddy
**Stage:** BUILD
**Day:** 1
**Tech stack:** Streamlit + Claude API + GitHub + Streamlit Cloud

**MVP scope:**
1. Upload notes (.txt)
2. Generate 5 practice questions
3. Take quiz and see score

---

## Task

Create a basic Streamlit app:
1. Title: "StudyBuddy"
2. Subtitle: "Upload notes, get practice questions"
3. File uploader for .txt files
4. Display uploaded file content

File: app.py
Framework: Streamlit
Language: Python

Do NOT add AI features yet.

After implementation:
1. Apply the changes to app.py
2. Summarize what changed
3. Tell me how to test it
```

---

## Phase 3: BUILD

### Day 1 execution

User pastes Day 1 command into Cursor Agent mode.

Agent creates app.py:
```python
import streamlit as st

st.title("StudyBuddy")
st.subheader("Upload notes, get practice questions")

uploaded_file = st.file_uploader("Upload your notes", type=["txt"])

if uploaded_file:
    content = uploaded_file.read().decode("utf-8")
    st.write(content)
```

User runs: `streamlit run app.py`
Result: App opens, can upload files, content displays.

**Day 1 deliverable: ✅ Code runs locally**

### Day 2-3: Build features one by one

Each day, user:
1. Pastes the command from the 7-day plan
2. Agent builds the feature in Cursor
3. User tests manually
4. Checks off the deliverable

**Day 2 deliverable: ✅ Upload and button work**
**Day 3 deliverable: ✅ Questions generate**

---

## Phase 4: REVIEW

### Step 1: Choose the right tool for review

Using `agent-mode-matrix.md`:

| Task | Best tool | Mode | Reasoning | Subagent |
|------|-----------|------|-----------|----------|
| Code review | Codex / Claude Code / OpenCode Plan | Review | high | Optional review subagent |

**User has:** Cursor
**Decision:** Cursor can review in Ask mode (Compatible path)

Using `current-agent-adapter.md`:
- Cursor has Ask mode for code review ✅
- No subagent support → simulate roles sequentially

### Step 2: Review command (adapted for Cursor)

```
## Project Context Pack

**Project:** StudyBuddy
**Stage:** REVIEW
**Day:** 3
**Tech stack:** Streamlit + Claude API + GitHub + Streamlit Cloud

**MVP scope:**
1. Upload notes (.txt) ✅
2. Generate 5 practice questions ✅
3. Take quiz and see score

**Acceptance criteria:**
- Can upload .txt files
- Can generate questions from notes

---

## Review

Review my StudyBuddy app (app.py).

Check for:
1. Does question generation work correctly?
2. Are there any bugs?
3. Is anything overbuilt (not in MVP)?
4. Any security issues?

Output format:
- Issues found: [list or "None"]
- Suggested fixes: [list or "None"]
- Verdict: PASS / NEEDS FIX / FAIL
- Next action
```

### Step 3: After running the review command

Using `slash-command-playbook.md` checklist:

- [x] I reviewed what changed
- [x] I checked against acceptance criteria
- [x] I updated project-status-template.md
- [x] I decided: FIX
- [x] I know the next action: fix error handling

### Review result

```
Issues found:
1. MEDIUM: No error handling for API failures
2. LOW: No loading indicator during generation

Verdict: NEEDS FIX

Next action: add error handling and loading indicator
```

---

## Phase 5: FIX

### Fix command

```
## Project Context Pack

**Project:** StudyBuddy
**Stage:** FIX
**Day:** 3
**Tech stack:** Streamlit + Claude API + GitHub + Streamlit Cloud

**Files involved:**
- app.py

---

## Fix

Fix these issues in app.py:

1. Add try/except around the Claude API call
   - On error: show "Something went wrong. Try again."
2. Add st.spinner("Generating questions...") during API call

Keep everything else the same.

After fixing:
1. Apply the changes to app.py
2. Summarize what changed
3. Tell me how to test it
```

### Fix result

Agent adds error handling and spinner.

User runs: `streamlit run app.py`
Result: Works with loading indicator, errors handled gracefully.

### Acceptance gate

```markdown
Feature: Question generation
Result: PASS
Evidence: 5 questions generate, loading state appears, API errors show friendly message
Next action: deploy
```

---

## Phase 6: LAUNCH

### Step 1: Launch readiness review

Using `agent-mode-matrix.md`:

| Task | Best tool | Mode | Reasoning | Human review |
|------|-----------|------|-----------|--------------|
| Launch readiness review | Codex / Claude Code / OpenCode | Review / Launch | high | Required |

**User has:** Cursor
**Decision:** Use Cursor Ask mode for final review (Compatible path)

### Step 2: Launch checklist

```markdown
## Launch Checklist

### Features
- [x] Upload notes works
- [x] Question generation works
- [x] Quiz scoring works
- [x] Error handling works

### Deploy
- [x] Deployed to Streamlit Cloud
- [x] URL works
- [x] API key configured

### Documentation
- [x] README written
- [x] Known limitations listed
- [x] Not in V1 documented

### Ship
- [x] Shared with 3 people
- [x] Collected feedback
- [x] Fixed critical bugs

Status: SHIPPED ✅
```

### Final project status update

```markdown
Current day: 7
Current phase: LAUNCH
Launch gate: PASS
Evidence: live URL works and 3 people tested it
Next decision: collect feedback for V2, do not add features before reviewing feedback
```

---

## The complete loop with playbooks

```
PLAN    → Used ChatGPT (Agent Mode Matrix) + fallback prompt (Slash Command Playbook)
COMMAND → Used Cursor (Current Agent Adapter, Compatible path) + plain prompt
BUILD   → Built features day by day in Cursor Agent mode
REVIEW  → Used Cursor Ask mode (no subagent, sequential simulation)
FIX     → Fixed issues, passed acceptance gate
LAUNCH  → Deployed and shipped

Playbooks used:
- agent-mode-matrix.md → chose tool for each phase
- current-agent-adapter.md → adapted from Codex to Cursor
- slash-command-playbook.md → converted /commands to plain prompts
- agent-capability-checklist.md → checked Cursor's capabilities

Total time: 7 days
Result: Working AI study assistant
```

---

## Key lessons from this example

1. **Choose the right tool for each task** — Use Agent Mode Matrix to decide
2. **Adapt, don't block** — User had Cursor, not Codex. We adapted, not forced a switch
3. **Slash commands are optional** — Plain prompts work just as well
4. **Review doesn't need subagents** — Sequential simulation works for beginners
5. **Before/after checklists keep you honest** — Check before and after every command
6. **The loop is the same regardless of tool** — Plan → Command → Build → Review → Fix → Launch

---

## What NOT to do

| Don't | Why |
|-------|-----|
| Force user to switch to Codex | Current Agent Adapter says adapt, don't block |
| Use xhigh for simple edits | Reasoning Effort Matrix says use normal/medium |
| Open 5 subagents on first project | Beginner safety rule: start with one agent |
| Skip the before/after checklists | They catch mistakes early |
| Add features not in MVP | Anti-overbuilding: ship first, iterate later |

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

Start your own project:

```
/first-mvp-launch [your idea here]
```

Or if your tool doesn't support slash commands, use the fallback prompt in `playbooks/slash-command-playbook.md`.


