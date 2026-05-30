# Evaluation Prompts

> Test the Skill Pack with these prompts.

---


## Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## Test 1: MVP Definition

### Prompt
```
I want to build an AI tool that helps students organize their study notes. It should have folders, tags, search, AI summaries, flashcards, quizzes, progress tracking, and maybe a mobile app.
```

### Expected behavior
- Agent should cut features to 1-3 (never more than 3)
- Agent should ask about tech level
- Agent should recommend familiar tools (2-4 tools)
- Agent should warn against overbuilding
- Agent should include Project Context Pack

### Evaluation
| Criteria | Score (1-5) |
|----------|-------------|
| Cut to 1-3 features | |
| Asked about tools | |
| Gave 7-day plan | |
| Warned against bloat | |
| Included Project Context Pack | |

---

## Test 2: Command Quality

### Prompt
```
Build me a login feature
```

### Expected behavior
- Agent should ask for more details
- Agent should ask about file location
- Agent should ask about tech stack
- Agent should ask about constraints
- Agent should request Project Context Pack

### Evaluation
| Criteria | Score (1-5) |
|----------|-------------|
| Asked for details | |
| Asked for file path | |
| Asked for constraints | |
| Gave clear template | |
| Requested Project Context Pack | |

---

## Test 3: Anti-Overbuilding

### Prompt
```
I'm building a quiz app with 3 features. But I just thought of a great idea - what if I add social sharing so students can share their scores on Instagram?
```

### Expected behavior
- Agent should warn against adding the feature
- Agent should remind about MVP scope (1-3 features)
- Agent should suggest shipping first
- Agent should update Project Context Pack

### Evaluation
| Criteria | Score (1-5) |
|----------|-------------|
| Warned against adding | |
| Reminded about MVP | |
| Suggested ship first | |
| Referenced Project Context Pack | |

---

## Test 4: Stuck Recovery

### Prompt
```
I've been building for 4 days. My app has a bug I can't fix. I'm also behind schedule. I don't know what to do. Maybe I should start over with a different framework.
```

### Expected behavior
- Agent should NOT suggest starting over
- Agent should diagnose the bug
- Agent should suggest cutting scope
- Agent should give one specific action
- Agent should clarify that "Stop" means document learnings, not rage-quit

### Evaluation
| Criteria | Score (1-5) |
|----------|-------------|
| Didn't suggest restart | |
| Diagnosed issue | |
| Gave one action | |
| Addressed motivation | |
| Clarified "Stop" decision | |

---

## Test 5: Multi-Agent Split

### Prompt
```
I'm building a web app with frontend and backend. How should I split work across two Claude Code instances?
```

### Expected behavior
- Agent should suggest file-based split
- Agent should give per-track commands with Project Context Pack
- Agent should define merge plan
- Agent should warn about shared files
- Agent should include beginner safety rule

### Evaluation
| Criteria | Score (1-5) |
|----------|-------------|
| File-based split | |
| Per-track commands | |
| Merge plan | |
| Conflict warnings | |
| Beginner safety rule | |

---

## Scoring

Total score: ____ / 125

- 100+: Skill Pack works well
- 80-99: Needs improvement
- <80: Major issues to fix

---


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action

```
→ Use tests/expected-output-checklist.md to evaluate outputs
```


