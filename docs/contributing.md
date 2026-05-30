# 贡献指南

## Workflow

Make one focused improvement, verify it, and use a clear commit message.

---

## What to contribute

Good contributions:

- Clearer command templates
- Better examples
- Simpler checklists
- Fixes for inconsistent terminology
- Better troubleshooting entries

---

## Local checks

Run:

```bash
node bin/first-mvp-skill.js help
node bin/first-mvp-skill.js install --target ./.tmp-install-test
npm.cmd --cache ./.npm-cache pack --dry-run
```

On non-Windows shells, `npm pack --dry-run` is usually enough.

---

## Commit format

Use:

```text
<type>: <short summary>
```

Examples:

```text
docs: add troubleshooting guide
feat: add default mode config
fix: align minimal practical stack wording
test: update expected output checklist
chore: update package metadata
```

See [Commit Convention](commit-convention.md).

---

## Pull request checklist

- [ ] README still explains the value in 30 seconds
- [ ] Quick Start still works
- [ ] Default mode is not broken
- [ ] No advanced feature is required on Day 1
- [ ] Acceptance Gates are preserved
- [ ] Markdown code fences are balanced

---

## Do Not

- Do not add unrelated features in one PR.
- Do not make beginner output longer by default.
- Do not introduce a new required tool without fallback.

---

## Next action

```text
Make one small docs, command, or checklist improvement and verify it locally.
```
