# ai-videos

Remotion presentation system: shared motion kit + decks under `presentations/`.

## Quick start

```bash
npm install
npm run studio    # http://localhost:3000
npm run viewer    # http://localhost:5173 — presentation gallery
```

## Layout

| Path | Role |
|------|------|
| `src/kit/` | SkeletonScreen, WireConnector, PageTransition, theme |
| `src/formats.ts` | HD/4K × 16:9 / 9:16 presets |
| `presentations/` | One folder per deck |
| `viewer/` | Local gallery index |
| `.cursor/` | Rules + project skill |
| `.agents/skills/` | Official Remotion agent skills |

## Demo compositions

- `demo-architecture-16x9-1080`
- `demo-architecture-16x9-4k`
- `demo-architecture-9x16-1080`
- `demo-architecture-9x16-4k`

## Agent docs

See `AGENTS.md` and `docs/superpowers/specs/2026-08-25-remotion-presentation-system-design.md`.
