# 快速入门

## Workflow

Install, load the default mode, paste one idea, and stop. Do not open advanced playbooks yet.

---

## 1. 安装

发布到 npm 后：

```bash
npm install -g first-mvp-skill
first-mvp-skill install
```

发布前或本地仓库测试：

```bash
git clone https://github.com/mikazuhe13-ui/first-mvp-skill.git
cd first-mvp-skill
npm install -g .
first-mvp-skill install
```

默认安装到：

```text
~/.first-mvp-skill
```

---

## 2. 加载默认模式

打开或复制：

```text
~/.first-mvp-skill/config/default-mode.md
```

默认模式会约束输出：

- Compact first
- 1-3 MVP features
- 2-4 tools
- Acceptance Gate before moving on
- One next action

---

## 3. 运行第一个想法

把这句发给你的 AI Agent：

```text
/first-mvp-launch I want to build an AI study assistant that helps students review notes.
```

如果你的 Agent 不支持 slash command，直接粘贴：

```text
Use FirstMVPSkill default mode.
I want to build an AI study assistant that helps students review notes.
Return a Tiny MVP, Not in V1, minimal practical stack, 7-day plan, Day 1 command, Acceptance Gate, and Next action.
```

---

## 成功标准

你应该得到：

- Tiny MVP
- Not in V1
- Minimal practical stack
- 7-day plan
- Project Context Pack
- Day 1 command
- Acceptance Gate
- Next action

---

## Do Not

- Do not read every advanced playbook first.
- Do not ask for the full 14-module output on first use.
- Do not add extra features before Day 1 works.

---

## Next action

```text
Paste the first idea into your current AI Agent.
```
