# Agent Skill Ladder / 智能体能力阶梯

Purpose / 目的：帮助用户从复制 prompt，逐步成长为能稳定指挥 AI Agent 的使用者。

Help users grow from copying prompts to operating AI agents confidently.

**Core rule / 核心规则：** 不要跳级。只有任务真的需要时，才使用高级能力。

Do not skip levels. Use advanced features only when the task needs them.

## Level 0: Copy prompt / 复制 starter prompt

**What you can do:** 复制 [START_HERE.md](../START_HERE.md) 里的 starter prompt，填入你的想法。  
**Use when:** 你第一次使用 FirstMVPSkill，不知道怎么开始。  
**Do Not:** 不要先研究所有工具或 playbooks。  
**Next step:** 拿到 Tiny MVP、Not in V1、Day 1 command 和 Acceptance Gate。

## Level 1: Use Project Context Pack / 使用项目上下文包

**What you can do:** 在每次给 AI Agent 下指令前，先说明项目、阶段、文件、限制和验收标准。  
**Use when:** Agent 开始跑偏、忘记上下文、乱加功能。  
**Do Not:** 不要只说“继续做”或“优化一下”。  
**Next step:** 用 `templates/project-status-template.md` 更新当前状态。

## Level 2: Use command templates / 使用 commands 模板

**What you can do:** 从 `commands/` 选择适合当前阶段的可复制指令。  
**Use when:** 你要 planning、coding、review、fix 或 reset。  
**Do Not:** 不要一次使用所有 commands。  
**Next step:** 读 [commands/README.md](../commands/README.md)，选择一条最小可用命令。

## Level 3: Use slash commands / 合理使用斜杠命令

**What you can do:** 如果工具支持，用 slash commands 作为 workflow shortcuts。  
**Use when:** 你的工具明确支持 `/first-mvp-launch`、`/review`、`/compact` 等命令。  
**Do Not:** 不要假设所有工具都有同样的 slash commands。不要为了显得高级而使用。  
**Next step:** 先输入 `/` 查看可用命令；不支持时，用 command file 里的 plain prompt。

## Level 4: Use modes, review gates, and long tasks / 使用模式、review gates 和长任务

**What you can do:** 根据任务风险选择 mode、reasoning effort、review gate、long task 或 fallback workflow。  
**Use when:** 任务跨文件、风险高、上下文长、需要人工 review。  
**Do Not:** 不要默认 high/xhigh、subagents、multi-agent 或 long tasks。  
**Next step:** 读 `playbooks/agent-mode-matrix.md`、`playbooks/reasoning-effort-decision-matrix.md` 和 `playbooks/long-task-protocol.md`。

## Level 5: Create your own workflow / 创建自己的 workflow

**What you can do:** 把适合你的项目流程沉淀成自己的 commands、checklists 或 playbooks。  
**Use when:** 你已经反复完成 Plan → Command → Build → Review → Fix → Launch。  
**Do Not:** 不要为了抽象而抽象；先证明流程能帮助你交付。  
**Next step:** 用一个真实项目验证，然后再贡献到 examples、commands 或 docs。
