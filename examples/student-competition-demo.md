# Example: Student Competition Demo

> "I need a demo for a competition."

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## The vague idea

User says:
> "I have an AI competition next week. I need to build something impressive. Maybe a chatbot, or a data analysis tool, or an image classifier, or..."

---

## Common wrong approach

**What beginners do:**
1. Pick the most complex idea possible
2. Spend 3 days on architecture
3. Try to learn machine learning from scratch
4. Build a fancy UI before core features
5. Present a broken demo

**Result:** They show slides instead of a working product.

---

## User level diagnosis

```
User: Undergraduate student
Tech level: Beginner-Intermediate
Tools known: Python, some HTML
Time available: 7 days (4 hours/day, competition deadline)
```

**Diagnosis:** Should use Streamlit (fastest path to a working demo).

---

## Project positioning

```
DataViz helps competition judges understand datasets by asking questions in natural language and getting instant visualizations.
```

---

## Target user and core pain

```markdown
## Target user
- Who: Competition judges (non-technical)
- Pain: Can't quickly understand complex datasets
- Current solution: Static charts, boring presentations
- Why it's bad: Doesn't show AI capability
```

---

## Tiny MVP

### Feature 1: Upload CSV
- What: Upload a CSV dataset
- User action: Select CSV file
- Output: Data preview table

### Feature 2: Ask questions
- What: Ask questions about the data
- User action: Type "What's the average age?"
- Output: AI-generated answer

### Feature 3: Auto-chart
- What: AI generates a relevant chart
- User action: Click "Visualize"
- Output: Bar/line/pie chart

---

## Not in V1

- ❌ Multiple file formats — CSV only for V1
- ❌ Custom chart styling — Default charts for V1
- ❌ Data cleaning — Use clean data for V1
- ❌ Export functionality — Screenshot for V1
- ❌ User accounts — Public demo for V1

---

## Success criteria

Day 7, judges can:
1. Upload a CSV file
2. Ask a question about the data
3. See an AI-generated answer and chart

---

## Minimal practical stack

| Tool | Purpose | Why |
|------|---------|-----|
| Streamlit | UI | Fastest to build, looks professional |
| Claude API | AI | Understands data questions |
| Pandas | Data | CSV processing |
| Matplotlib | Charts | Auto-generate visualizations |

---

## 7-day plan

| Day | Task | Deliverable |
|-----|------|-------------|
| 1 | Setup Streamlit | App runs |
| 2 | CSV upload + preview | Can see data |
| 3 | Question input | Can type questions |
| 4 | AI answers | AI responds to data questions |
| 5 | Auto-charts | AI generates visualizations |
| 6 | Polish UI | Looks professional |
| 7 | Practice demo | Ready to present |

---

## Copy-paste agent commands

### Day 1 command
```
I'm building DataViz for an AI competition using Streamlit.

Create a Streamlit app:
1. Title: "DataViz - AI Data Analysis"
2. File uploader for CSV files
3. Display uploaded data as a table
4. Show basic stats (row count, column count)

File: app.py
Framework: Streamlit
Language: Python
Libraries: pandas

Do NOT add AI features yet.
```

### Day 4 command
```
I'm building DataViz. Here's what exists:
- app.py with CSV upload and preview
- Data is loaded into pandas DataFrame
- Question input exists

Now implement AI analysis:
1. When user asks a question about the data
2. Convert the DataFrame to a string summary
3. Send to Claude API with the question
4. Return the answer

API: Use anthropic library
Model: your chosen AI model (example: Claude Sonnet)

Format the answer as:
- Text explanation
- Key numbers highlighted

Do NOT add charts yet.
```

### Day 5 command
```
I'm building DataViz. Here's what exists:
- CSV upload, preview, and AI answers work

Now add auto-visualization:
1. After AI answers a question
2. Determine the best chart type (bar, line, pie)
3. Generate the chart using matplotlib
4. Display it below the answer

Use streamlit.pyplot() for display.
Chart type logic:
- Comparisons → bar chart
- Trends → line chart
- Parts of whole → pie chart
```

---

## Multi-agent task split

### Agent A: UI + Charts
- Files: app.py (UI parts)
- Focus: Upload, display, charts
- Command: Day 1, 2, 5, 6 commands

### Agent B: AI Logic
- Files: app.py (API parts), analysis.py
- Focus: Question processing, AI calls
- Command: Day 3, 4 commands

### Merge point
- After Day 5
- Test full flow
- Polish on Day 6

---

## Validation method

- Day 1: App opens, CSV uploads
- Day 2: Data displays in table
- Day 3: Can type questions
- Day 4: AI answers correctly
- Day 5: Charts generate automatically
- Day 6: UI looks professional
- Day 7: Demo runs smoothly (practice 3 times)

---

## Anti-overbuilding warning

> You will want to:
> - Add ML model training
> - Add complex data cleaning
> - Add 10 chart types
> - Add export to PDF
>
> Don't. Judges care about working demos, not feature lists. Ship a demo that works perfectly for 3 use cases.

---

## Demo day tips

1. Have a clean CSV file ready (no missing values)
2. Prepare 3 questions that show different capabilities
3. Practice the demo 3 times before presenting
4. Have a backup if the internet fails (pre-recorded video)

---

## Next immediate action

Copy the Day 1 command. Start building. You have 7 days.

```
→ commands/multi-agent-dispatch-command.md if you want to parallelize
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


