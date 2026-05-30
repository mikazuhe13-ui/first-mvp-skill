# Example: Personal Knowledge Base

> "I want to search my notes with AI."

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## The vague idea

User says:
> "I want to build a personal knowledge base where I can search my notes with AI. Maybe it should support tags, and folders, and markdown, and image search, and..."

---

## Common wrong approach

**What beginners do:**
1. Spend 1 week building a rich text editor
2. Design a complex folder/tag system
3. Add user authentication
4. Implement vector database for semantic search
5. Never finish

**Result:** After 7 days, they have a login page and a folder system. No AI search.

---

## User level diagnosis

```
User: Graduate researcher
Tech level: Intermediate
Tools known: Python, basic web development
Time available: 7 days (2 hours/day)
```

**Diagnosis:** Should use Streamlit + Claude API (familiar Python ecosystem).

---

## Project positioning

```
NoteSearch helps researchers find information in their notes by asking questions in natural language.
```

---

## Target user and core pain

```markdown
## Target user
- Who: Researchers, students, anyone with lots of notes
- Pain: Can't find specific information in hundreds of notes
- Current solution: Ctrl+F, manual search, re-reading
- Why it's bad: Slow, doesn't understand context
```

---

## Tiny MVP

### Feature 1: Upload notes
- What: Upload multiple .txt files
- User action: Select files, click upload
- Output: Files stored and indexed

### Feature 2: Ask questions
- What: Ask a question in natural language
- User action: Type question, click search
- Output: AI answers based on your notes

### Feature 3: Show sources
- What: See which notes the answer came from
- User action: View answer
- Output: Answer + source file names

---

## Not in V1

- ❌ Markdown support — Plain text is enough for V1
- ❌ Tags and folders — V2 feature
- ❌ Image search — Text only for V1
- ❌ Multiple users — Single user for V1
- ❌ Real-time sync — Manual upload for V1

---

## Success criteria

Day 7, the user can:
1. Upload 5+ text files
2. Ask a question about their notes
3. Get an answer with source citations

---

## Minimal practical stack

| Tool | Purpose | Why |
|------|---------|-----|
| Streamlit | UI | Python-based, fast to build |
| Claude API | AI | Understands natural language questions |
| Local storage | Data | No database needed |

---

## 7-day plan

| Day | Task | Deliverable |
|-----|------|-------------|
| 1 | Setup Streamlit project | App runs |
| 2 | Build file upload | Can upload multiple files |
| 3 | Build question input | Can type and submit questions |
| 4 | Implement AI search | AI answers questions from notes |
| 5 | Add source display | Shows which files were used |
| 6 | Deploy | Live URL |
| 7 | Ship | Published |

---

## Copy-paste agent commands

### Day 1 command
```
I'm building NoteSearch with Streamlit.

Create a basic Streamlit app:
1. Title: "NoteSearch"
2. Subtitle: "Ask questions about your notes"
3. File uploader accepting multiple .txt files
4. Display list of uploaded file names

File: app.py
Framework: Streamlit
Language: Python

Do NOT add search or AI yet.
```

### Day 3 command
```
I'm building NoteSearch. Here's what exists:
- app.py with file upload
- Multiple files can be uploaded
- File names are displayed

Now add:
1. Text input for questions
2. "Search" button
3. Display area for answers

File: app.py
Do NOT connect to AI yet. Just the UI.
```

### Day 4 command
```
I'm building NoteSearch. Here's what exists:
- app.py with upload and question input
- Files are stored in session

Now implement AI search:
1. When user clicks "Search"
2. Combine all uploaded file content
3. Send to Claude API with the question
4. Ask it to answer based on the notes
5. Display the answer

API: Use anthropic library
Model: your chosen AI model (example: Claude Sonnet)

Do NOT add source citations yet. Just the answer.
```

---

## Validation method

- Day 1: App opens, can upload files
- Day 2: Multiple files upload successfully
- Day 3: Can type questions and click search
- Day 4: AI answers questions based on notes
- Day 5: Sources are displayed
- Day 6: Works online
- Day 7: Someone else can use it

---

## Anti-overbuilding warning

> You will want to:
> - Add a rich text editor
> - Add folder organization
> - Add user accounts
> - Add vector database
> - Add markdown rendering
>
> Don't. Ship the basic search. Add features after you use it for a week.

---

## Next immediate action

Copy the Day 1 command. Paste it into your AI agent. Start building.

```
→ commands/planning-command.md if you need to plan first
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


