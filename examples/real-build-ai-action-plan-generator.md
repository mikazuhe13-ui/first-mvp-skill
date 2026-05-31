# Real Build: AI Action Plan Generator

这是一个 real-build case study template，用来展示一个普通想法如何被 FirstMVPSkill 收敛成一个小型可运行 AI 项目。

This is a real-build case study template showing how an ordinary idea becomes a small working AI project.

## Why this example exists / 为什么有这个案例

很多人不是没有目标，而是不知道第一步怎么做。

这个案例演示：如何把“帮用户做 7 天行动计划”这个普通想法，变成 Tiny MVP、Not in V1、Agent commands、Acceptance Gates 和 7-day build loop。

Audience / 适合人群：ordinary people, beginners, students, creators, and AI Agent users.

## Original idea / 原始想法

> 我想做一个 AI 工具，帮普通人把一个目标变成 7 天行动计划。

Example inputs:

- 我想 7 天内开始学英语
- 我想开始健身
- 我想做一个副业

## Tiny MVP

第一版只做 3 件事：

1. 用户输入目标
2. AI 生成 7 天行动计划
3. 用户复制结果

## Not in V1

第一版不做：

- Login
- Payment
- User database
- Mobile app
- Multi-agent automation
- Complex analytics

这些不是坏功能，只是不属于 V1。

## Minimal practical stack

使用 2-4 个工具，每个工具只负责一件事：

| Tool | Purpose |
|---|---|
| Streamlit or simple HTML | Build the UI |
| One AI API | Generate the 7-day plan |
| GitHub | Save and share code |
| Optional deployment platform | Deploy if ready |

## 7-day build log

| Day | Task | Acceptance Gate |
|---|---|---|
| Day 1 | Setup and static UI | 页面能打开，显示标题和说明 |
| Day 2 | Input form | 用户能输入一个目标 |
| Day 3 | AI generation | AI 能返回 7 天行动计划 |
| Day 4 | Output formatting | 输出按 Day 1-7 清楚展示 |
| Day 5 | Review and fix | 没有明显 bug，输出不过长 |
| Day 6 | Deploy | 有可访问的 demo URL 或本地运行说明 |
| Day 7 | Share | README、截图或发布说明完成 |

## Agent commands used

### Planning command

```text
I want to build an AI Action Plan Generator.

Use FirstMVPSkill to define:
1. Tiny MVP with 1-3 features
2. Not in V1
3. Minimal practical stack
4. 7-day build plan
5. Day 1 command
6. Acceptance Gates

Constraints:
- Keep it beginner-friendly
- Do not add login, payment, database, or mobile app
- Use one primary agent only
- Keep output concise
```

### Coding command

```text
Project Context Pack:
- Project: AI Action Plan Generator
- Stage: Build
- Day: 2
- MVP scope: goal input, 7-day plan generation, copyable output
- Not in V1: login, payment, database, mobile app
- File boundary: only edit the main app file

Task:
Create a simple input form where the user can enter one goal.

Do Not:
- Do not add authentication
- Do not add a database
- Do not add multiple agents

Acceptance Gate:
The app opens locally and the user can type a goal.

Next action:
Tell me how to test the input form.
```

### Review command

```text
Review this MVP against the original scope.

Check:
1. Does it accept one user goal?
2. Does it generate a clear 7-day plan?
3. Is anything outside Not in V1?
4. Is the output too long or confusing?
5. Verdict: PASS / NEEDS FIX / FAIL

Return:
- Issues found
- Suggested fixes
- Next action
```

## Acceptance Gates

- Planning: Tiny MVP has 1-3 features and clear Not in V1
- Build: User can enter a goal and see an output
- Review: Output is useful, short, and follows Day 1-7 format
- Fix: Bugs are fixed without adding extra scope
- Launch: Demo URL, GitHub repo, or local run instructions exist

## What went wrong / 真实问题

可能遇到的问题：

- Prompt too broad: AI 输出了太多建议
- Output too long: 7 天计划变成了长篇文章
- UI too complicated: 想加太多按钮和设置
- Wanted to add login: 最后用 Not in V1 砍掉

Fix rule / 修复原则：先让一个目标输入和一个 7 天计划跑通。

## Final result / 最终结果

> Placeholder only. Fill these after building.

- Demo URL:
- GitHub repo:
- Screenshot:

## Lessons learned / 学到什么

- Tiny MVP worked: 先做一个能运行的小工具，比规划完整产品更有效。
- Not in V1 prevented scope creep: Login、database、payment 都可以晚点再做。
- Review gate helped: 每一步都有检查点，问题更早暴露。
- One primary agent was enough: 这个项目不需要默认 multi-agent。

## Next action

复制这个案例，把项目想法替换成你自己的目标工具。

Copy this example and replace the project idea with your own small AI tool.
