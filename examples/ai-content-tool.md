# Example: AI Content Tool

> "I want AI to help me write."

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## The vague idea

User says:
> "I want to build an AI tool that helps me write blog posts, and social media captions, and email newsletters, and product descriptions, and..."

---

## Common wrong approach

**What beginners do:**
1. Build a tool that does everything
2. Add templates for 20 content types
3. Implement SEO optimization
4. Add image generation
5. Never ship because it's never "complete"

**Result:** After 7 days, they have 5 half-working content types instead of 1 working one.

---

## User level diagnosis

```
User: Freelance content creator
Tech level: Beginner
Tools known: Basic HTML, some JavaScript
Time available: 7 days (1-2 hours/day)
```

**Diagnosis:** Should use Next.js + Claude API (simple, deployable to Vercel).

---

## Project positioning

```
BlogWriter helps content creators write blog post drafts by providing a topic and getting a structured article in return.
```

---

## Target user and core pain

```markdown
## Target user
- Who: Blog writers, content creators
- Pain: Staring at blank page, writer's block
- Current solution: Write from scratch, takes hours
- Why it's bad: Slow, inconsistent quality
```

---

## Tiny MVP

### Feature 1: Enter topic
- What: User enters a blog topic
- User action: Type topic, click "Generate"
- Output: Article outline

### Feature 2: Generate draft
- What: AI writes a full draft from the outline
- User action: Click "Write Draft"
- Output: 500-word blog post

### Feature 3: Edit and copy
- What: User can edit the draft and copy it
- User action: Edit text, click "Copy"
- Output: Draft copied to clipboard

---

## Not in V1

- ❌ Multiple content types — Blog posts only for V1
- ❌ SEO optimization — V2 feature
- ❌ Image generation — V2 feature
- ❌ Templates — Free-form for V1
- ❌ Publishing integration — Copy-paste for V1

---

## Success criteria

Day 7, the user can:
1. Enter a blog topic
2. Get a structured outline
3. Get a 500-word draft
4. Copy the draft to clipboard

---

## Minimal practical stack

| Tool | Purpose | Why |
|------|---------|-----|
| Next.js | Frontend | Simple, deployable |
| Claude API | AI | Generates content |
| Vercel | Deploy | Free, easy |

---

## 7-day plan

| Day | Task | Deliverable |
|-----|------|-------------|
| 1 | Setup Next.js | App runs |
| 2 | Topic input + outline | Can generate outlines |
| 3 | Draft generation | Can generate full drafts |
| 4 | Edit + copy | Can edit and copy |
| 5 | Polish UI | Looks clean |
| 6 | Deploy to Vercel | Live URL |
| 7 | Ship | Published |

---

## Copy-paste agent commands

### Day 1 command
```
I'm building BlogWriter with Next.js.

Create a simple Next.js app:
1. Title: "BlogWriter"
2. Subtitle: "AI-powered blog drafts"
3. Text input for blog topic
4. "Generate Outline" button
5. Display area for outline

Framework: Next.js with App Router
Styling: Tailwind CSS
Language: TypeScript

Do NOT add AI logic yet. Just the UI.
```

### Day 2 command
```
I'm building BlogWriter. Here's what exists:
- Next.js app with topic input and "Generate Outline" button

Now implement outline generation:
1. When user clicks "Generate Outline"
2. Send topic to Claude API
3. Ask for a blog post outline with:
   - Title
   - 3-5 section headings
   - 2-3 bullet points per section
4. Display the outline

API: Use @anthropic-ai/sdk
Model: your chosen AI model (example: Claude Sonnet)

Do NOT add draft generation yet.
```

### Day 3 command
```
I'm building BlogWriter. Here's what exists:
- Topic input and outline generation work

Now implement draft generation:
1. Add "Write Draft" button below the outline
2. When clicked, send the outline to Claude API
3. Ask for a 500-word blog post based on the outline
4. Display the draft in an editable textarea

API: Use @anthropic-ai/sdk
Model: your chosen AI model (example: Claude Sonnet)

Do NOT add copy functionality yet.
```

---

## Validation method

- Day 1: App opens, can type topics
- Day 2: Generates outline from topic
- Day 3: Generates full draft from outline
- Day 4: Can edit and copy
- Day 5: UI looks clean
- Day 6: Works online
- Day 7: Someone else can use it

---

## Anti-overbuilding warning

> You will want to:
> - Add 10 content types (email, social, ads...)
> - Add SEO optimization
> - Add tone settings
> - Add image generation
> - Add publishing to WordPress
>
> Don't. Ship blog drafts first. If people love it, add more content types.

---

## Next immediate action

Copy the Day 1 command. Start building.

```
→ commands/coding-agent-command.md for more build commands
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


