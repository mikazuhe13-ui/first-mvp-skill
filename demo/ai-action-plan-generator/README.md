# AI Action Plan Generator

> 把一个模糊想法变成 7 天可执行 MVP。FirstMVPSkill 的最小可运行 demo。

---

## What this is

这是 FirstMVPSkill 的一个最小可运行 demo。

用户输入一个模糊想法，点击按钮，得到完整的 MVP 启动方案：

1. **Goal** — 你的目标
2. **Tiny MVP** — 1-3 个核心功能
3. **Not in V1** — 第一版不做什么
4. **Minimal Stack** — 2-4 个工具及各自用途
5. **7-Day Plan** — 每天做什么
6. **Day 1 Agent Command** — 可复制给 AI Agent 的具体指令（含文件名、代码要求、运行命令）
7. **Acceptance Gate** — 验收标准
8. **Next Action** — 下一步该做什么

不需要后端，不需要 API key，不需要登录，不需要数据库。打开 HTML 就能用。

---

## How to run

```bash
# 方法 1：直接用浏览器打开
open index.html

# 方法 2：用 Python 起一个本地服务
python -m http.server 8000
# 然后打开 http://localhost:8000
```

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | 页面结构 + meta/OG tags |
| `style.css` | 波普艺术 + 黑白素描风格 |
| `script.js` | MVP 计划生成器（5 类模板，无 AI API） |
| `README.md` | 本文件 |

---

## What is intentionally not included

- No AI API integration (uses mock generator)
- No backend / server
- No database / storage
- No user accounts / login
- No framework (React, Vue, etc.)
- No build tools (webpack, vite, etc.)
- No package manager (npm, yarn, etc.)
- No external CDN dependencies (except optional Google Fonts)
- No deployment config

---

## Features

- 5 套计划模板：学习 / 习惯 / 写作 / 编程 / 设计 / 通用
- 8 个输出 section，完整展示 FirstMVPSkill 流程
- Day 1 指令含具体文件名、代码要求、运行命令
- Minimal Stack 推荐工具及各自用途
- 示例 chips，点击直接生成
- Day 1 指令独立复制按钮
- 全部内容一键复制
- 波普艺术视觉风格
- 响应式，移动端可用

---

## Manual test steps

1. 打开 `index.html`
2. 点击示例 chips（如"AI 学习助手"），确认自动生成
3. 确认看到 8 个 section：Goal、Tiny MVP、Not in V1、Minimal Stack、7-Day Plan、Day 1 Command、Acceptance Gate、Next Action
4. 确认 Day 1 指令包含具体文件名（如 app.py）和运行命令
5. 确认 Minimal Stack 显示 2-4 个工具及各自用途
6. 点击"复制指令"按钮，粘贴确认内容正确
7. 点击"复制全部"按钮，粘贴确认全部内容
8. 不输入任何内容，点击按钮，确认输入框 shake
9. 缩小浏览器窗口，确认移动端布局正常

---

## Acceptance Gate

- [x] Opening index.html in a browser works
- [x] Example chips auto-fill and generate
- [x] All 8 sections display correctly
- [x] Minimal Stack shows tools with roles
- [x] Day 1 command includes file name and run command
- [x] Day 1 command is copyable
- [x] Full result is copyable
- [x] Empty input triggers shake
- [x] No backend required
- [x] No API key required
- [x] Works on mobile

---

## Next action

这个 demo 证明 FirstMVPSkill 的核心理念：把模糊想法压缩成可执行的最小版本。用最简单的技术栈就能做出一个可运行的小工具。
