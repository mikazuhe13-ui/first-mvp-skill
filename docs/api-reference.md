# API 参考

## Workflow

Use this page when you need exact commands, config fields, or directory contracts.

---

## CLI

### `first-mvp-skill install`

Installs the Skill Pack to the default folder.

```bash
first-mvp-skill install
```

Default target:

```text
~/.first-mvp-skill
```

### `first-mvp-skill install --target <dir>`

Installs to a custom folder.

```bash
first-mvp-skill install --target ~/.claude/skills/first-mvp-skill
```

### `first-mvp-skill where`

Prints the default install path.

```bash
first-mvp-skill where
```

### `first-mvp-skill help`

Prints CLI usage.

```bash
first-mvp-skill help
```

---

## Default mode config

Files:

```text
config/default-mode.md
config/default-mode.json
```

Important fields in `default-mode.json`:

| Field | Meaning |
|-------|---------|
| `default_output_mode` | Default is `compact` |
| `full_mode_rule` | Default is `chunk_by_section` |
| `mvp_rules.feature_count.max` | Maximum MVP features |
| `mvp_rules.tool_count.max` | Maximum tools |
| `agent_rules.primary_agent_first` | Start with one primary agent |
| `agent_rules.advanced_playbooks_default` | Hide advanced playbooks by default |

---

## Directory contract

| Directory | Public use |
|-----------|------------|
| `skills/` | Agent skill entry points |
| `commands/` | Copy-paste command templates |
| `templates/` | Planning and status templates |
| `checklists/` | Acceptance and launch gates |
| `examples/` | Real use cases |
| `playbooks/` | Advanced agent operation guides |
| `routing/` | Output mode and file selection rules |
| `config/` | Default behavior |
| `docs/` | Documentation site |

---

## Do Not

- Do not treat advanced playbooks as required APIs.
- Do not change default mode fields without updating README and tests.
- Do not remove config files from the npm package.

---

## Next action

```text
Use `first-mvp-skill install --target <dir>` when integrating with a specific agent.
```
