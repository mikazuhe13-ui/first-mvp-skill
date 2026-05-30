# Commit Convention

## Workflow

Use small, readable commits that show the project is actively maintained. Each commit should explain one clear change.

---

## Purpose

Keep FirstMVPSkill easy to review, trust, and maintain.

---

## Format

```text
<type>: <short summary>
```

Examples:

```text
docs: sharpen README quick start
feat: add npm installer
fix: align canonical 14 modules
test: update output checklist
chore: add license metadata
```

---

## Types

| Type | Use for |
|------|---------|
| `docs` | README, examples, writing standards |
| `feat` | New skill, command, template, or installer capability |
| `fix` | Correct inconsistent rules, broken links, bad examples |
| `test` | Eval prompts and expected output checks |
| `chore` | Metadata, package setup, repository maintenance |

---

## Do Not

- Do not mix unrelated changes in one commit.
- Do not use vague messages like `update files`.
- Do not commit generated noise or local environment files.

---

## Next action

```text
Use `docs: polish launch README` for the next README-only release commit.
```
