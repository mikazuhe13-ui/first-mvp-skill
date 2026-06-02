#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");
const readline = require("readline");

const root = path.resolve(__dirname, "..");
const defaultTarget = path.join(os.homedir(), ".first-mvp-skill");

const copyItems = [
  "skills",
  "commands",
  "templates",
  "checklists",
  "examples",
  "playbooks",
  "routing",
  "docs",
  "assets",
  "config",
  "README.md",
  "LICENSE",
];

function usage() {
  console.log(`
FirstMVPSkill

Usage:
  first-mvp-skill install [--target <dir>]
  first-mvp-skill where
  first-mvp-skill help

Examples:
  first-mvp-skill install
  first-mvp-skill install --target ~/.claude/skills/first-mvp-skill

Default install target:
  ${defaultTarget}
`);
}

function expandHome(input) {
  if (!input) return input;
  if (input === "~") return os.homedir();
  if (input.startsWith("~/") || input.startsWith("~\\")) {
    return path.join(os.homedir(), input.slice(2));
  }
  return input;
}

function parseTarget(args) {
  const index = args.indexOf("--target");
  if (index === -1) return defaultTarget;
  const value = args[index + 1];
  if (!value) {
    console.error("Missing value after --target");
    process.exit(1);
  }
  return path.resolve(expandHome(value));
}

function copyRecursive(source, target) {
  const stat = fs.statSync(source);
  if (stat.isDirectory()) {
    fs.mkdirSync(target, { recursive: true });
    for (const entry of fs.readdirSync(source)) {
      copyRecursive(path.join(source, entry), path.join(target, entry));
    }
    return;
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

const starterInput = "我想做一个 AI 小项目：____。我每天能投入 __ 分钟。请按 FirstMVPSkill 帮我生成 Tiny MVP、Not in V1、7 天计划、Day 1 指令和 Acceptance Gate。";

const agentRoutes = {
  "1": {
    name: "Claude Code",
    files: [
      "START_HERE.md",
      "commands/README.md",
      "commands/coding-agent-command.md",
      "commands/codex-review-command.md",
      "docs/agent-skill-ladder.md",
    ],
  },
  "2": {
    name: "Cursor",
    files: [
      "START_HERE.md",
      "commands/README.md",
      "commands/coding-agent-command.md",
      "playbooks/current-agent-adapter.md",
    ],
  },
  "3": {
    name: "Codex",
    files: [
      "START_HERE.md",
      "commands/coding-agent-command.md",
      "commands/codex-review-command.md",
      "checklists/acceptance-gate-checklist.md",
    ],
  },
  "4": {
    name: "ChatGPT / Claude web",
    files: [
      "START_HERE.md",
      "Copy starter prompt",
      "Use generated Day 1 command in a coding agent later",
    ],
  },
  "5": {
    name: "OpenCode / OpenClaw",
    files: [
      "START_HERE.md",
      "docs/agent-compatibility.md",
      "playbooks/agent-capability-checklist.md",
      "playbooks/fallback-command-patterns.md",
    ],
  },
  "6": {
    name: "Other / Not sure",
    files: [
      "docs/agent-compatibility.md",
      "START_HERE.md",
      "routing/skill-router.md",
    ],
  },
};

function printRoute(target, routeKey) {
  const route = agentRoutes[routeKey] || agentRoutes["6"];
  console.log(`
Recommended path / 推荐路径: ${route.name}
${route.files.map((file, index) => `  ${index + 1}. ${file}`).join("\n")}

Core docs / 核心入口:
  1. START_HERE.md - fastest start / 最快开始
  2. docs/usage-guide.md - all usage modes / 完整使用方式
  3. docs/agent-compatibility.md - current agent matching / 当前 Agent 匹配

Starter input / 第一条输入:
  ${starterInput}

Tip / 提醒:
  If unsure, start by copying the starter prompt from START_HERE.md.
  如果不确定，从 START_HERE.md 复制 starter prompt 开始。
  Slash commands are optional. If your tool does not support them, use the plain prompt files above.
  斜杠命令不是必需的。如果当前工具不支持，就直接使用上面的 prompt 文件。

Repository / 安装位置:
  ${target}
`);
}

function printOnboardingGuide(target) {
  console.log(`
FirstMVPSkill 已安装到:
  ${target}

这是一个帮助普通人、新手、创作者和 Agent 用户，用 AI Agent 把想法做成第一个可运行 AI 小项目的 Skill Pack。

Beginner onboarding / 新手导航:
  1. Yes, first-time user / 是，我第一次使用
  2. No, I already know how to use it / 否，我已经知道怎么用

Which Agent/tool are you using? / 你现在使用的是哪个 Agent 或工具？
  1. Claude Code
  2. Cursor
  3. Codex
  4. ChatGPT / Claude web
  5. OpenCode / OpenClaw
  6. Other / Not sure

Routes / 推荐入口:
  - Claude Code / Cursor / Codex: commands/README.md + commands/coding-agent-command.md
  - ChatGPT / Claude web: START_HERE.md starter prompt
  - Skill folder agents: copy the full skills/first-mvp-launch/ folder
  - Slash command agents: try /first-mvp-launch [your idea]
  - Not sure: docs/agent-compatibility.md

Core docs / 核心入口:
  1. START_HERE.md - fastest start / 最快开始
  2. docs/usage-guide.md - all usage modes / 完整使用方式
  3. docs/agent-compatibility.md - current agent matching / 当前 Agent 匹配

If unsure, start by copying the starter prompt from START_HERE.md.
如果不确定，从 START_HERE.md 复制 starter prompt 开始。

Starter input / 第一条输入:
  ${starterInput}
`);
}

function ask(question, rl) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

async function runOnboarding(target) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    printOnboardingGuide(target);
    return;
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(`
FirstMVPSkill 已安装到:
  ${target}

这是一个帮助普通人、新手、创作者和 Agent 用户，用 AI Agent 把想法做成第一个可运行 AI 小项目的 Skill Pack。
`);

  const onboarding = await ask("是否进入新手导航？(Y/n) ", rl);
  if (onboarding.toLowerCase() === "n") {
    rl.close();
    console.log(`
OK. Start from:
  ${path.join(target, "README.md")}
  ${path.join(target, "START_HERE.md")}
  ${path.join(target, "docs", "usage-guide.md")}
  ${path.join(target, "docs", "agent-compatibility.md")}

If unsure, start by copying the starter prompt from START_HERE.md.
`);
    return;
  }

  console.log(`
你现在使用的是哪个 Agent / 工具？
  1. Claude Code
  2. Cursor
  3. Codex
  4. ChatGPT / Claude web
  5. OpenCode / OpenClaw
  6. Other / Not sure
`);

  const agent = await ask("请选择 1-6: ", rl);
  rl.close();
  printRoute(target, agent);
}

async function install(args) {
  const target = parseTarget(args);
  fs.mkdirSync(target, { recursive: true });

  for (const item of copyItems) {
    const source = path.join(root, item);
    if (!fs.existsSync(source)) continue;
    copyRecursive(source, path.join(target, item));
  }

  await runOnboarding(target);
}

const args = process.argv.slice(2);
const command = args[0] || "help";

async function main() {
  if (command === "install") {
    await install(args.slice(1));
  } else if (command === "where") {
    console.log(defaultTarget);
  } else if (command === "help" || command === "--help" || command === "-h") {
    usage();
  } else {
    console.error(`Unknown command: ${command}`);
    usage();
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
