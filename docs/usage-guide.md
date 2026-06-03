# Usage Guide / 使用指南

FirstMVPSkill 可以当作 Agent Skill 使用，也可以完全当作普通 prompt、模板和检查清单使用。最重要的是先开始，不要先研究所有文件。

FirstMVPSkill can be used as an agent-native skill, or simply as prompts, templates, and checklists. Start small before studying everything.

---

## 0. Fastest path / 最快开始方式

如果你不确定该怎么用，先用普通 prompt 方法。它适用于 ChatGPT、Claude 网页版、Cursor、Codex、Claude Code 和大多数 AI 工具。

If you are not sure what to do, use the plain prompt method first.

1. 打开 `START_HERE.md`
2. 复制 starter prompt
3. 填入你的想法和每天可投入时间
4. 让当前 AI 工具生成 Tiny MVP、Not in V1、7-day plan、Day 1 command、Acceptance Gate 和 Next Action

Tiny MVP 是最低起点，不是最高上限。7 天目标会根据你的时间、能力和 Agent 工具调整，但不承诺成熟商业产品。

Tiny MVP is the minimum starting point, not the maximum outcome. The 7-day target adapts to your time, skill, and agent capability, but does not promise a mature commercial product.

| Daily time / 每天时间 | 7-day target / 7 天目标 |
|---|---|
| 15-30 min/day | Tiny MVP / 最小可运行 demo |
| 1 hour/day | Small MVP / 1-3 个核心功能的小项目 |
| 2-3 hours/day | Rough Product / 粗糙但完整的可展示产品 |
| 4+ hours/day | Mid-sized Prototype / 中小型产品原型 |

Starter pattern / 第一条输入:

```text
我想做一个 AI 小项目：____。
我每天能投入 __ 分钟。
请按 FirstMVPSkill 帮我生成：
1. Tiny MVP
2. Not in V1
3. 7 天计划
4. Day 1 指令
5. Acceptance Gate
6. 下一步动作
```

---

## 1. Use without agent skill support / 不用 Agent Skill 也能用

FirstMVPSkill 不要求你的工具原生支持 skill folder 或 slash commands。你可以把 `.md` 文件当作普通 prompt 和工作流文档使用。

FirstMVPSkill can be used as plain prompts and workflow docs. You do not need native skill support.

| Need / 需求 | Use / 使用 |
|---|---|
| First use / 第一次使用 | `START_HERE.md` |
| Choose commands / 选择指令 | `commands/README.md` |
| Keep context structured / 保持上下文清晰 | `templates/` |
| Review results / 检查结果 | `checklists/` |
| Learn by example / 看案例 | `examples/` |

---

## 2. Slash Commands / 斜杠命令

Slash commands 是工作流快捷方式，不是必需功能。不同工具支持的 slash commands 不一样。先输入 `/` 查看你当前工具有哪些可用命令。

Slash commands are workflow shortcuts, not required features. Different agents support different slash commands. Type `/` first to inspect what your current tool supports.

| Situation / 场景 | Slash command pattern / 斜杠命令模式 | Fallback / 不支持时 |
|---|---|---|
| Start a new MVP / 开始新项目 | `/first-mvp-launch [idea]` | Copy `START_HERE.md` starter prompt |
| Review output / 审查结果 | `/review` if available | Use `commands/codex-review-command.md` |
| Context too long / 上下文太长 | `/compact` if available | Use `routing/compact-output-rules.md` |
| Start fresh / 开始新任务 | `/clear` if available | Save Project Context Pack first, then start a new chat |
| Manage agents / 管理子智能体 | `/agents` if available | Use `playbooks/subagent-decision-matrix.md` only after scope is clear |

### Do Not / 禁止项

- 不要假设每个工具都有相同的 slash commands / Do not assume every tool has the same slash commands.
- 不要因为 slash commands 看起来高级就使用它们 / Do not use slash commands just because they look advanced.
- 不要在保存 Project Context Pack 前使用 `/clear` / Do not use `/clear` before saving Project Context Pack.
- 不要在 MVP scope 和 file boundaries 清楚前使用 `/agents` / Do not use `/agents` before MVP scope and file boundaries are clear.
- 不要跳过 review / Do not skip review after slash-command execution.

---

## 3. Choose by current agent / 根据当前 Agent 选择用法

| Current tool / 当前工具 | Recommended path / 推荐路径 |
|---|---|
| ChatGPT / Claude web | `START_HERE.md` → starter prompt → generate plan → send Day 1 command to coding tool |
| Claude Code | `commands/README.md` → `coding-agent-command.md` → `codex-review-command.md` |
| Cursor | `START_HERE.md` → Project Context Pack → `coding-agent-command.md` → review gate |
| Codex | `coding-agent-command.md` → `codex-review-command.md` → `acceptance-gate-checklist.md` |
| OpenCode / OpenClaw | `agent-compatibility.md` → `agent-capability-checklist.md` → `fallback-command-patterns.md` |
| Unknown / 不确定 | `agent-compatibility.md` → `START_HERE.md` |

---

## 4. Choose by task / 根据任务选择文件

For command and mode decisions, use `routing/command-mode-router.md`.

如果不确定用哪条指令、哪种 mode、是否需要 slash command、subagent 或 long task，先看 `routing/command-mode-router.md`。

| Task / 任务 | File / 文件 |
|---|---|
| I have an idea but no plan | `skills/first-mvp-launch/SKILL.md` |
| I need to choose a command | `commands/README.md` |
| I need to build | `commands/coding-agent-command.md` |
| I need to review | `commands/codex-review-command.md` |
| I am stuck | `commands/execution-feedback-loop-command.md` |
| I am overbuilding | `commands/anti-overbuilding-command.md` |
| I need tool/mode decisions | `playbooks/agent-mode-matrix.md` |
| I need compatibility help | `docs/agent-compatibility.md` |

---

## 5. Advanced use / 高级用法

只有在任务真的需要时，才打开高级文件。不要默认加载所有 playbooks。

Only use advanced files when needed. Do not load all advanced playbooks by default.

- `playbooks/agent-mode-matrix.md`
- `playbooks/reasoning-effort-decision-matrix.md`
- `playbooks/subagent-decision-matrix.md`
- `playbooks/long-task-protocol.md`
- `playbooks/human-review-gates.md`

---

## 6. Next action / 下一步

如果不确定：从 `START_HERE.md` 开始。

If unsure: start with `START_HERE.md`.

如果正在使用 coding agent：读 `commands/README.md`。

If using a coding agent: read `commands/README.md`.

如果想用 slash commands：先读第 2 节。

If using slash commands: read section 2 first.
