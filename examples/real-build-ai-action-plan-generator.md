# Real Build: AI Action Plan Generator

这是一个用 FirstMVPSkill 做出来的真正可运行 demo。

This is a real working demo built with FirstMVPSkill.

## Real demo / 真实 Demo

Demo path:

```
demo/ai-action-plan-generator/index.html
```

直接用浏览器打开，不需要安装任何东西。

Open in browser directly. No installation needed.

## This demo is intentionally small / 这个 demo 故意做得很小

- No backend / 没有后端
- No API key / 没有 API key
- No login / 没有登录
- No database / 没有数据库
- No framework / 没有框架
- No build tools / 没有构建工具
- No package manager / 没有包管理器

用最简单的技术栈（HTML + CSS + JS）证明 FirstMVPSkill 的核心理念：

Uses the simplest tech stack (HTML + CSS + JS) to prove FirstMVPSkill's core idea:

**一个模糊想法 → 一个可运行的小工具。**

**A vague idea → a working small tool.**

## What works / 已实现的功能

- [x] 用户可以输入目标 / Users can enter a goal
- [x] Demo 会生成 Tiny MVP、Not in V1、Minimal Stack、7-Day Plan、Day 1 Agent Command、Acceptance Gate、Next Action
- [x] 输出是中英双语内联展示 / Output is Chinese-English bilingual inline
- [x] Day 1 指令可独立复制 / Day 1 command copyable separately
- [x] 全部内容可一键复制 / All content copyable at once
- [x] 示例 chips 点击即生成 / Example chips generate instantly
- [x] 空输入有 shake 提示 / Empty input triggers shake
- [x] 移动端响应式 / Mobile responsive

## Why this matters / 为什么这很重要

这个 demo 证明 FirstMVPSkill 的工作流真的能把模糊想法变成可运行的小工具。

This demo proves the FirstMVPSkill workflow can turn a vague idea into a small executable demo.

它不是教程，不是模板，不是理论。它是一个打开就能用的东西。

It is not a tutorial. Not a template. Not theory. It is a thing you can open and use right now.

## What this demo does / 这个 demo 做了什么

用户输入一个模糊想法，demo 输出完整的 MVP 启动方案：

User enters a vague idea. The demo outputs a complete MVP launch plan:

1. **Goal / 目标** — 用户的原始想法
2. **Tiny MVP / 最小可运行版本** — 1-3 个核心功能
3. **Not in V1 / 第一版不做** — 明确排除的功能
4. **Minimal Stack / 最小工具栈** — 2-4 个推荐工具及各自用途
5. **7-Day Plan / 7 天计划** — 每天具体做什么
6. **Day 1 Agent Command / 智能体指令** — 可直接复制给 AI Agent 的具体指令
7. **Acceptance Gate / 验收标准** — 怎么检查做得对不对
8. **Next Action / 下一步** — 现在该做什么

## How it was built / 怎么做的

这个 demo 本身就是 FirstMVPSkill 流程的产物：

This demo is itself a product of the FirstMVPSkill workflow:

### Day 1: 定义 Tiny MVP

原始想法："做一个 AI Action Plan Generator demo"

压缩成 3 个功能：
1. 用户输入目标
2. 生成 7 天计划
3. 复制结果

### Day 2: 搭建最小界面

创建 index.html + style.css + script.js。用 mock 数据先跑通，不接 AI API。

### Day 3-4: 增加 FirstMVPSkill 特色

从"只输出 7 天计划"升级为输出完整的 8 个 section：Tiny MVP、Not in V1、Minimal Stack、Day 1 Command、Acceptance Gate。

### Day 5: 双语支持

从中文单语升级为中英双语内联展示。

### Day 6: 视觉风格

加入波普艺术风格：粗边框、高对比色、halftone 背景、stamp 动画。

### Day 7: 验收

```
✅ 浏览器打开 index.html 可用
✅ 5 个示例 chips 都能生成
✅ 8 个 section 全部显示
✅ Day 1 指令可复制
✅ 全部内容可复制
✅ 移动端可用
✅ 无 XSS 风险
✅ 零外部依赖
```

## Minimal Stack used / 用到的最小工具栈

| Tool | Purpose |
|------|---------|
| HTML | 页面结构 |
| CSS | 波普艺术视觉风格 |
| JavaScript | 逻辑和交互 |
| 浏览器 | 测试和使用 |

4 个工具。没有更多了。

4 tools. No more.

## Lessons learned / 学到什么

- **Tiny MVP 有效**：先做一个能用的小版本，比规划完整产品更有效。
- **Not in V1 防止范围膨胀**：不加 AI API、不加后端、不加框架，反而做得更快。
- **Day 1 Command 是关键**：用户拿到可复制的指令，比看教程更容易行动。
- **双语内联比切换更好**：一眼看出这是国际化项目，不需要额外操作。

---

## Next action / 下一步

打开 demo 试一试：

Open the demo and try it:

```
demo/ai-action-plan-generator/index.html
```

然后用 FirstMVPSkill 为你自己的想法做同样的事。

Then use FirstMVPSkill to do the same for your own idea.
