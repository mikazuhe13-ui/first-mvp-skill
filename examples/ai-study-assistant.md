# Example: AI Study Assistant

> "I want to build an AI that helps me study."

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## The vague idea

User says:
> "I want to build an AI study assistant. Maybe it can make flashcards, and quizzes, and track my progress, and recommend what to study next, and support multiple subjects, and..."

---

## Common wrong approach

**What beginners do:**
1. Spend 1 week choosing between React, Vue, Svelte
2. Spend 3 days designing a database schema
3. Start building user accounts before any features
4. Add "AI-powered recommendations" on Day 2
5. Never finish

**Result:** After 7 days, they have a login page and a database schema. No working features.

---

## User level diagnosis

```
User: College student
Tech level: Beginner
Tools known: Basic HTML, some Python
Time available: 7 days (2-3 hours/day)
```

**Diagnosis:** Should use Streamlit (simple, Python-based, fast to deploy).

---

## Project positioning

```
StudyBuddy helps college students prepare for exams by generating practice questions from their notes.
```

---

## Target user and core pain

```markdown
## Target user
- Who: College students preparing for exams
- Pain: Reading notes is passive, doesn't help retention
- Current solution: Re-read notes, make flashcards manually
- Why it's bad: Time-consuming, not interactive
```

---

## Tiny MVP

### Feature 1: Upload notes
- What: User uploads a text file of their notes
- User action: Click upload, select file
- Output: Notes are stored for processing

### Feature 2: Generate questions
- What: AI generates 5 practice questions from the notes
- User action: Click "Generate Questions"
- Output: 5 questions with answers

### Feature 3: Take quiz
- What: User answers the questions and gets scored
- User action: Answer questions, submit
- Output: Score and correct answers

---

## Not in V1

- ❌ Multiple subjects — One subject is enough for V1
- ❌ Progress tracking — V2 feature
- ❌ Flashcard mode — Quiz is enough for V1
- ❌ AI recommendations — V2 feature
- ❌ User accounts — Local storage is fine for V1

---

## Success criteria

Day 7, the user can:
1. Upload a text file of notes
2. Get 5 practice questions generated from those notes
3. Take a quiz and see their score

That's it. If they can do these 3 things, you shipped.

---

## Minimal practical stack

| Tool | Purpose | Why |
|------|---------|-----|
| Streamlit | UI | Python-based, fast to build, free to deploy |
| Claude API | AI | Generates questions from notes |
| Local file storage | Data | No database needed for V1 |

**Total:** 3 tools. All Python-based. No new frameworks to learn.

---

## 7-day plan

| Day | Task | Deliverable |
|-----|------|-------------|
| 1 | Setup Streamlit project | App runs locally |
| 2 | Build file upload | Can upload and read .txt files |
| 3 | Build question generation | AI generates 5 questions from notes |
| 4 | Build quiz UI | Can answer questions and see score |
| 5 | Integration + fix bugs | Full flow works |
| 6 | Deploy to Streamlit Cloud | Live URL |
| 7 | Write README, share | Published |

---

## Project Context Pack

```markdown
## Project Context Pack

**Project:** StudyBuddy
**One line:** StudyBuddy helps college students prepare for exams by generating practice questions from their notes.
**Stage:** BUILD
**Day:** 1

**MVP scope:**
1. Upload notes (.txt)
2. Generate 5 practice questions
3. Take quiz and see score

**Not in V1:**
- Multiple subjects
- Progress tracking
- Flashcard mode
- AI recommendations
- User accounts

**Tech stack:**
- Streamlit: UI
- Claude API: AI
- Local file storage: Data

**Files involved:**
- app.py: Main application

**Acceptance criteria:**
- Can upload .txt files
- Can generate questions from notes
- Can take quiz and see score

**What not to change:**
- Core upload functionality
```

---

## Copy-paste agent commands

### Day 1 command

```
## Project Context Pack

**Project:** StudyBuddy
**Stage:** BUILD
**Day:** 1
**Tech stack:** Streamlit + Claude API

**MVP scope:**
1. Upload notes (.txt)
2. Generate 5 practice questions
3. Take quiz and see score

---

## Task

Create a basic Streamlit app:
1. Title: "StudyBuddy"
2. Subtitle: "Upload your notes, get practice questions"
3. File uploader that accepts .txt files
4. Display the uploaded file content

File: app.py
Framework: Streamlit
Language: Python

Do NOT add any AI features yet. Just the basic UI.
```

### Day 2 command

```
## Project Context Pack

**Project:** StudyBuddy
**Stage:** BUILD
**Day:** 2
**Tech stack:** Streamlit + Claude API

**Files involved:**
- app.py: Main application (exists)

---

## Task

I'm building StudyBuddy. Here's what exists:
- app.py with basic Streamlit UI
- File uploader works

Now add:
1. Read the uploaded .txt file content
2. Store it in a session variable
3. Show a "Generate Questions" button (doesn't work yet, just the button)

File: app.py
Do NOT add AI logic yet. Just the button.
```

### Day 3 command

```
## Project Context Pack

**Project:** StudyBuddy
**Stage:** BUILD
**Day:** 3
**Tech stack:** Streamlit + Claude API

**Files involved:**
- app.py: Main application (exists)
- File content is stored in session

---

## Task

I'm building StudyBuddy. Here's what exists:
- app.py with file upload and "Generate Questions" button
- File content is stored in session

Now implement question generation:
1. When user clicks "Generate Questions"
2. Send the notes to Claude API
3. Ask for 5 practice questions with answers
4. Display the questions

API: Use anthropic library
Model: your chosen AI model (example: Claude Sonnet)
Output format: JSON with question and answer fields

Do NOT add quiz functionality yet. Just generate and display.
```

---

## Multi-agent task split

If parallelizing:

### Agent A: Frontend (Streamlit UI)
- Files: app.py (UI parts)
- Focus: Upload, display, quiz UI
- Command: [Day 1 + Day 4 commands]

### Agent B: Backend (AI logic)
- Files: app.py (API parts), questions.py
- Focus: Question generation, scoring
- Command: [Day 3 command]

### Merge point
- After Day 4
- Combine UI and AI logic
- Test full flow

---

## Validation method

After each day, verify:
- Day 1: `streamlit run app.py` opens the page
- Day 2: Can upload a .txt file and see its content
- Day 3: Click "Generate Questions" and see 5 questions
- Day 4: Can answer questions and see score
- Day 5: Full flow works without errors
- Day 6: URL works in browser
- Day 7: Someone else can use it

---

## Anti-overbuilding warning

> You will be tempted to:
> - Add user accounts
> - Add progress tracking
> - Add multiple subjects
> - Add flashcard mode
> - Add AI recommendations
>
> Don't. Ship the quiz. Add features after people use it.

---

## Next immediate action

Copy the Day 1 command above. Paste it into Claude Code or ChatGPT. Start building.

```
→ commands/coding-agent-command.md for more build commands
→ commands/codex-review-command.md after building
```

## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---

---

## Next action

```text
Use this file for its intended step, then update the Project Context Pack or project status before moving on.
```


