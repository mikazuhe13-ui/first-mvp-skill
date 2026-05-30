#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

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

function install(args) {
  const target = parseTarget(args);
  fs.mkdirSync(target, { recursive: true });

  for (const item of copyItems) {
    const source = path.join(root, item);
    if (!fs.existsSync(source)) continue;
    copyRecursive(source, path.join(target, item));
  }

  console.log(`Installed FirstMVPSkill to:
  ${target}

Next:
  1. Open your AI agent.
  2. Load defaults: ${path.join(target, "config", "default-mode.md")}
  3. Use: ${path.join(target, "skills", "first-mvp-launch", "SKILL.md")}
  4. Paste: /first-mvp-launch I want to build [your AI MVP idea]
`);
}

const args = process.argv.slice(2);
const command = args[0] || "help";

if (command === "install") {
  install(args.slice(1));
} else if (command === "where") {
  console.log(defaultTarget);
} else if (command === "help" || command === "--help" || command === "-h") {
  usage();
} else {
  console.error(`Unknown command: ${command}`);
  usage();
  process.exit(1);
}
