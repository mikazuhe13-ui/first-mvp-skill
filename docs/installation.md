# Installation / 安装

> FirstMVPSkill 是 Agent Skill Pack，不是 Python package，也不是必须通过 npm 安装的软件包。  
> FirstMVPSkill is an Agent Skill Pack, not a Python package or required npm package.

## 推荐安装方式 / Recommended install

每个 `skills/` 下的文件夹都是一个可复用 skill unit。安装时复制完整文件夹，不要只复制 `SKILL.md`。

Each folder under `skills/` is a reusable skill unit. Copy the full skill folder, not only `SKILL.md`.

**警告 / Warning:** 不要只复制 `SKILL.md`；请复制完整 skill folder。

```text
skills/first-mvp-launch/
skills/agent-command-coach/
```

复制到你的 Agent 支持的 skill 目录，例如：

```text
~/.codex/skills/first-mvp-launch/
~/.codex/skills/agent-command-coach/
```

## 不支持 skills 时 / If your tool has no skill folder

把这些文件当作普通 prompt 或项目说明使用：

- `commands/*.md`
- `templates/*.md`
- `checklists/*.md`
- `playbooks/*.md`
- `routing/*.md`

建议先用：

```text
skills/first-mvp-launch/SKILL.md
commands/planning-command.md
routing/compact-output-rules.md
```

如果你的 Agent 不支持 skills 或 slash commands，不要卡住。使用 fallback prompts，把对应 skill 或 command 的核心规则粘贴成普通 prompt。

If your agent does not support skills or slash commands, do not stop. Use fallback prompts by pasting the relevant skill or command rules as a plain prompt.

常用 fallback 来源：

- `playbooks/slash-command-playbook.md`
- `playbooks/current-agent-adapter.md`
- `commands/planning-command.md`
- `commands/coding-agent-command.md`
- `commands/codex-review-command.md`

## 安装后如何使用 / After install

从一个想法开始：

```text
/first-mvp-launch I want to build an AI study assistant that helps students review notes.
```

如果你的工具不支持 slash command，就把 `skills/first-mvp-launch/SKILL.md` 的规则和你的想法一起粘贴给当前 Agent。

Keep it compact: start with one skill, one command, and one Acceptance Gate.
