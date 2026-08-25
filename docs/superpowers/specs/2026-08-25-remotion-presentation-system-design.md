# Remotion Presentation System — Design Spec

**Date:** 2026-08-25  
**Status:** Approved + v1 implemented (2026-08-25)  
**V1 scope:** Scaffold + kit + demo + local Studio/viewer (Approach A / Approach 1)

---

## 1. Goal

Build a Remotion-based presentation video system where:

- Reusable animated components (skeleton screens, wiring connectors, page transitions) form a design kit.
- Each presentation lives in a dedicated folder under `presentations/`.
- Remotion Studio provides timeline editing and external asset swaps.
- A local viewer index lists presentations and links into Studio.
- Future agents can take a script + audio and generate decks on top of this kit (out of v1 scope).

## 2. Non-goals (v1)

- Automatic script/audio → timeline pipeline
- Deployed public Serve URL / SaaS
- Caption generation
- Map animations
- Full Next.js product shell

## 3. Architecture

Single Remotion app (React 19 + TypeScript). Remotion packages pinned to exact versions (no `^`).

```
ai-videos/
  .cursor/                 # rules, project skills, MCP hints
  src/
    kit/                   # SkeletonScreen, WireConnector, PageTransition, theme
    formats.ts             # HD/4K × 16:9 / 9:16 presets
    Root.tsx
    index.ts
  presentations/
    demo-architecture/     # first deck
      scenes/
      Demo.tsx
      meta.ts
  public/
  viewer/                  # local gallery index
  docs/superpowers/
```

**Flow:** Add `presentations/<slug>/` → register compositions in `Root.tsx` → `npm run studio` or open `viewer/`.

## 4. Visual language

Dark product UI:

- Charcoal canvas backgrounds
- Sharp mono/sans typography (expressive, not Inter/Roboto/system defaults)
- Cyan / amber wire accents
- Skeleton blocks with subtle pulse
- Animated connectors (stroke draw / dashoffset)
- SPA-like page transitions between scenes

Tokens live in `src/kit/theme.ts` (CSS variables or TS constants shared by kit + presentations).

## 5. Formats

Local compute only (not agent token cost). Same scene code, multiple compositions:

| ID suffix | Size | Use |
|-----------|------|-----|
| `16x9-1080` | 1920×1080 | Long-form HD |
| `16x9-4k` | 3840×2160 | Long-form 4K |
| `9x16-1080` | 1080×1920 | Short-form HD |
| `9x16-4k` | 2160×3840 | Short-form 4K |

Default FPS: **30**. Presets exported from `src/formats.ts`.

## 6. Component kit (v1)

### SkeletonScreen

Full-bleed “page” chrome with pulsing placeholder blocks (header, body columns, cards). Props for layout variant and content slots when ready to replace placeholders.

### WireConnector

SVG/path connector between two points (or named anchors). Animates draw-on via `interpolate` / stroke-dashoffset from local frame. Accent color from theme.

### PageTransition

Wrapper or presentation used with `@remotion/transitions` `TransitionSeries` for fade/slide between scenes (live-website route feel).

Components animate from **local** `useCurrentFrame()` so they work inside any `Sequence`.

## 7. Demo presentation

`presentations/demo-architecture/`:

- 3–5 short scenes showcasing skeletons → wires lighting up → page transitions
- Registered as Main + format variants
- No real VO required in v1; optional silent or short placeholder audio later
- Editable `defaultProps` / Zod schema where useful for Studio asset swaps

## 8. Viewer

`viewer/` static index (Vite or plain HTML served locally) that:

- Lists presentations from a simple manifest (or generated list)
- Links to Remotion Studio composition IDs / documents how to open Studio

Scripts:

- `studio` → Remotion Studio (`http://localhost:3000`)
- `viewer` → gallery on a local port (e.g. `http://localhost:5173`)

## 9. Agent / Cursor setup (priority before scaffold)

- `.cursor/rules/` — project conventions (presentations folder, kit usage, formats)
- `.cursor/skills/remotion-presentation/` — custom workflow skill
- Install `remotion-dev/skills` (official Remotion agent skills)
- Context7 MCP for live Remotion docs
- Specs/plans under `docs/superpowers/`

## 10. Data flow (v1)

```
Author / agent writes scenes using kit
        ↓
Root registers Composition(s) per format
        ↓
Studio preview / seek / prop edit
        ↓
remotion render → MP4 (optional)
```

Future (v2+): script + audio → timed scene list → generate presentation folder → same kit.

## 11. Error handling & testing

- Typecheck (`tsc`) and Remotion Studio load as smoke tests
- Kit components: visual check in Studio per format
- No heavy unit suite required for v1 motion kit; prefer Studio verification

## 12. Tech stack

- Remotion 4.x (pin exact, e.g. 4.0.517+)
- React 19, TypeScript 5.x
- `@remotion/transitions`, `@remotion/media` (when audio added)
- Package manager: **bun** preferred if create-video defaults allow; else npm
- Node 22+

## 13. Success criteria (v1)

1. `.cursor` rules + skills installed and discoverable
2. Remotion project runs Studio
3. Kit components visible in demo deck
4. At least one 16:9 HD and one 9:16 HD composition
5. Viewer lists the demo presentation
6. Design/plan docs in `docs/superpowers/`

---

## Decisions log

| Topic | Choice |
|-------|--------|
| V1 outcome | Scaffold + kit + demo + Studio/viewer |
| Visual | Dark product UI |
| Short-form | 9:16 |
| Long-form | 16:9 |
| Resolutions | HD + 4K presets |
| Viewer | Local Studio + presentations index |
| Kit | SkeletonScreen, WireConnector, PageTransition |
| Architecture | Single Remotion app |
| Script/audio pipeline | Deferred |
