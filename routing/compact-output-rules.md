# Compact Output Rules

> 默认输出最小有用答案；只有需要时才展开。  
> Default to the smallest useful output. Expand only when needed.

---


## 工作流 / Workflow

Use the sections in this file in order. Keep the output compact, preserve MVP scope, include constraints, and end with one next action.

---
## 核心规则 / Core rule

中文优先说明，保留英文关键词。默认用 Compact Mode，避免一次性加载所有 playbooks、commands、templates。

**Do not dump every module. Return the smallest useful answer that moves the user forward.**

---

## 默认行为 / Default behavior

When the user asks a question or describes a situation:

1. Diagnose in 1-2 lines
2. Give one clear recommendation
3. Reference the relevant file(s) — do not copy full content
4. Give one next action

---

## 优先引用文件，不复制全文 / Prefer references over full text

Instead of copying full playbooks or commands, say:

```
Use: playbooks/agent-mode-matrix.md
Use: commands/coding-agent-command.md
Use: checklists/acceptance-gate-checklist.md
```

Only expand the full content when the user explicitly asks.

---

## Compact / Standard / Full Mode

- **Compact Mode:** 默认模式。输出诊断、一个建议、相关文件和 Next Action。
- **Standard Mode:** 用于 MVP 计划或 Agent Command Pack，输出 Tiny MVP、7-day plan 和一条可执行命令。
- **Full Mode:** 只在用户明确要求完整方案、文档或示例时使用，分块输出，不一次性倾倒。

For bilingual output, explain key decisions in Chinese first and keep English terms such as Tiny MVP, Project Context Pack, Agent Command Pack, Acceptance Gate, and Execution Feedback Loop.

---

## Compact response format

```markdown
## Diagnosis
[1-2 lines about what the user needs]

## Recommendation
[one clear decision]

## Use
- [relevant file 1]
- [relevant file 2]


## Do Not

- Do not add scope beyond this file's purpose.
- Do not skip acceptance gates, evidence, or the next action.
- Do not switch tools unless the user explicitly asks or the current tool cannot complete the task.

---
## Next action
[one concrete action the user can take now]
```

---

## Hard limits

- Do not output more than one full command unless needed
- Do not include examples unless the user asks
- Do not include multi-agent guidance unless the task requires it
- Do not include slash command fallback unless the current tool lacks slash commands
- Do not include high/xhigh reasoning guidance unless task risk or complexity requires it
- Do not list all 13 playbooks unless the user asks for the full system

---

## When to expand

Expand to full content only when:

- The user says "show me the full command"
- The user says "give me the complete plan"
- The user is generating documentation or examples
- The user is preparing a final launch package
- The task requires a specific command template to copy-paste

---

## Example: compact vs full

### Compact (default)

```
You want to build an AI study assistant? Good idea.

## Recommendation
Start with a 3-feature Tiny MVP. Use Streamlit + Claude API.

## Use
- skills/first-mvp-launch/SKILL.md
- commands/planning-command.md

## Next action
Run /first-mvp-launch with your idea, or paste this into ChatGPT:
"I want to build an AI study assistant. Define a Tiny MVP with 1-3 features, 7-day plan, and Day 1 command."
```

### Full (only when asked)

```
[user asks "give me the complete plan"]

## Full output
[14 modules, Project Context Pack, commands, and examples in chunks]
```

---

## Next action

```
→ Default to compact output
→ Reference files instead of copying
→ Expand only when the user asks
→ Read token-budget-policy.md for the three output modes
```


