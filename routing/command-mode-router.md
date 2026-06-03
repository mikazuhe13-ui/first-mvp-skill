# Command Mode Router / 指令与模式路由器

## Purpose / 用途

根据用户当前任务、每日时间、token 预算、当前 Agent 能力，推荐：

- 使用哪条 command
- 使用哪种 mode
- 是否使用 slash command
- 是否使用 subagent
- 是否使用 long task
- 是否需要 human review

## Quick Decision Table / 快速决策表

| Current situation / 当前情况 | Command / 指令 | Mode / 模式 | Notes / 说明 |
|---|---|---|---|
| Only have an idea / 只有想法 | `commands/planning-command.md` | Compact or Standard | Start small |
| Need MVP scope / 需要定义范围 | `skills/first-mvp-launch/SKILL.md` | Standard | Generate Tiny MVP, Not in V1, 7-day scope |
| Ready to build / 准备构建 | `commands/coding-agent-command.md` | Standard | One task, clear file boundaries |
| Multi-file or complex build / 多文件或复杂构建 | `commands/coding-agent-command.md` | High + Long Task | Use only after scope is clear |
| Need review / 需要审查 | `commands/codex-review-command.md` | High | Check Acceptance Gate and Not in V1 |
| Stuck or off track / 卡住或跑偏 | `commands/execution-feedback-loop-command.md` | Standard | Restore loop |
| Overbuilding / 功能膨胀 | `commands/anti-overbuilding-command.md` | Compact | Cut scope |
| Need multiple agents / 需要多 Agent | `commands/multi-agent-dispatch-command.md` | High + Subagent | Only if boundaries are clear |
| Context too long / 上下文太长 | `routing/compact-output-rules.md` | Compact | Keep scope, Not in V1, Acceptance Gate |
| Unsure about tool/mode / 不知道工具或模式 | `playbooks/agent-mode-matrix.md` | Standard | Decide before building |

## Time Budget Rules / 时间预算规则

| Daily time / 每日时间 | Recommended mode / 推荐模式 |
|---|---|
| 15-30 min | Compact Mode |
| 1 hour | Standard Mode |
| 2-3 hours | Standard or High |
| 4+ hours | High or Long Task, but no uncontrolled scope expansion |

## Token Budget Rules / Token 预算规则

| Token budget / Token 预算 | Recommended mode / 推荐模式 |
|---|---|
| Low | Compact Mode |
| Medium | Standard Mode |
| High | Full Mode or High Review |

Rules:

- Higher token budget means better review, testing, and decision support, not unlimited features.
- Higher time budget means more completeness, testing, polish, and launch readiness, not uncontrolled scope growth.

## Slash Command Rules / 斜杠命令规则

Slash commands are workflow shortcuts, not requirements.

Use slash commands only if the current tool supports them.

Patterns:

- `/first-mvp-launch [idea]` for starting if configured
- `/review` if available
- `/compact` if context is too long
- `/clear` only after saving Project Context Pack
- `/agents` only after scope and file boundaries are clear

Fallback:

If slash commands are unavailable, use the corresponding `.md` command file as a plain prompt.

## Subagent Rules / 子智能体规则

Use subagents only when:

- tasks are independent
- file boundaries are clear
- review gate exists
- user has enough time/token budget

Do not use subagents for:

- first planning
- simple Day 1 tasks
- unclear MVP scope
- low token budget

## Long Task Rules / 长任务规则

Use long task only when:

- task needs multi-step file edits
- acceptance gates are clear
- rollback/review plan exists

Do not use long task when:

- user only has a vague idea
- scope is unstable
- output can be done in one small command

## Human Review Gate / 人工审查门

After every build command, stop and ask:

- Did it pass the Acceptance Gate?
- What is the most unsatisfying point?
- What is one personal idea?
- How much time remains today?

## Do Not / 禁止项

- Do not use advanced modes by default.
- Do not use subagents before scope is clear.
- Do not use long task to explore vague ideas.
- Do not skip review.
- Do not let more time or token budget become uncontrolled feature growth.
- Do not load all playbooks by default.

## Next Action / 下一步

If unsure:

1. Use Compact Mode.
2. Use `commands/planning-command.md`.
3. Ask for daily time, token budget, current agent, and desired 7-day outcome.
