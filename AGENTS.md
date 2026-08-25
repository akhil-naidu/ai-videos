# AGENTS.md — ai-videos

Instructions for AI coding agents working in this repository.

## Project

Remotion presentation videos: shared motion kit + per-deck folders under `presentations/`. Design spec: `docs/superpowers/specs/2026-08-25-remotion-presentation-system-design.md`.

## Skills to use

| Priority | Skill | Location |
|----------|--------|----------|
| Always for Remotion API | `remotion-best-practices` / `remotion-markup` | `.agents/skills/` |
| New decks / kit usage | `remotion-presentation` | `.cursor/skills/remotion-presentation/` |
| Studio / render | `remotion-studio`, `remotion-render` | `.agents/skills/` |
| Docs | Context7 MCP (`/remotion-dev/remotion`) or `remotion-docs` | MCP / `.agents/skills/` |
| Process | Superpowers brainstorming → writing-plans → execute | User Cursor plugins |

## Rules

Project rules live in `.cursor/rules/`:

- `project.mdc` — always on
- `remotion-kit.mdc` — `src/**`, `presentations/**`
- `docs-and-agents.mdc` — docs / `.cursor`

## Workflow for a new presentation

1. Read `remotion-presentation` skill.
2. Create `presentations/<slug>/` with `meta.ts`, `Main.tsx`, `scenes/`.
3. Use kit components from `src/kit/`.
4. Register format compositions in `src/Root.tsx`.
5. Update viewer manifest.
6. Verify in Studio (HD 16:9 + 9:16).

## Do not

- Auto-build a script→audio pipeline unless asked.
- Use unpinned Remotion dependency ranges (`^`).
- Put presentations outside `presentations/`.

## Recommended Cursor plugins / MCP

See `.cursor/plugins.md`.

## House style (2026-08-25)
Mandatory: docs/style/visual-system.md
Analysis: docs/superpowers/specs/2026-08-25-ailabs-explainer-system-design.md
References: references/ailabs/
Always-on rule: .cursor/rules/explainer-system.mdc
New video: write presentations/slug/beats.md first, then scenes from the kit.
