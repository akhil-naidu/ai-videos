# Visual system (mandatory)

Every video in this repo uses this system. If a scene does not fit a component below, change the scene, not the system.

Canonical reference: `references/ailabs/`.
Full analysis: `docs/superpowers/specs/2026-08-25-ailabs-explainer-system-design.md`.
Tokens: `src/kit/theme.ts` (`theme` + `explainer`).

## What we are making

VO-first technical explainers. Dark field. Designed diagrams that are data-driven. Real screenshots only as proof. No talking head. 30 fps. Primary format 16:9 (1080 and 4K).

Akhil supplies the audio (and usually the script). The agent maps that audio onto reusable Remotion components.

## Layers

Tag every beat as one of:

| Layer | When | How |
|-------|------|-----|
| `diagram` | Explain a system, loop, cost, or graph | Kit components. No OS chrome. |
| `mock` | Show a product/UI idea without a real site | Abstract cards, pill-text, fake landing. |
| `screencap` | Prove a real repo, tweet, or doc exists | Real screenshot + synthetic cursor. Do not rebuild GitHub in code. |

A typical 12-14 minute video is mostly `diagram` and `mock`, with `screencap` hitting every 30-60 seconds as proof.

## Required components (reuse, do not reinvent)

1. **CompareCards** — two or more labeled cards (tool vs tool, before vs after).
2. **FlowLoop** — start node → checklist → pass or fail → optional retry arc.
3. **PipelineCards** — sequential cards with status (pending / active / done) and progress bars.
4. **FanOut** — one node to many, Bézier links, optional `agent` tag.
5. **CounterBar** — progress fill bound to a number (tokens, dollars, percent).
6. **AbstractList** — colored row icons + pill-text (no real paragraphs on the canvas).
7. **ProductMock** — browser chrome or landing blocks used as a prop, not a live site.
8. **ProofScreencap** — real screenshot in a rounded frame + synthetic cursor.
9. **SlashChip** — yellow command chip (`/unlazy` style) for titles and thumbnails.
10. **SyntheticCursor** — perfect arcs, scale-down on click, no human jitter.

Existing kit maps roughly: `SkeletonScreen` → AbstractList / ProductMock, `WireConnector` → FanOut / FlowLoop. New videos should grow named components rather than one-off JSX.

## Motion rules

- Data drives motion. A number change moves a bar, a tree, or a cost label. Do not animate decoration for its own sake.
- One idea per 4-8 seconds.
- Cuts are hard or short fades. No cinematic grade, no film grain, no lens flare.
- Cursor paths are mathematical. If it looks like a real mouse recording, redo it.
- Mid-video has no mascots, no lower thirds, no facecam, no watermark bug.
- Thumbnails may use mascots + SlashChip. Body video does not.

## Allowed / banned

Allowed: near-black canvas, dark-gray rounded cards, yellow highlight chip, green success, coral fail, orange warning, muted blue active, abstract pill-text, SVG links, counters.

Banned: Inter / Roboto / Arial / system UI stacks as the display face. Purple glow defaults. Stock CapCut captions. Real webcam. Rebuilding Twitter/GitHub as fake HTML. New easing language per video. Inventing a second brand palette.

## Beat sheet (required before pixels)

```
# presentations/<slug>/beats.md
| t | layer | component | VO line | visual |
|---|-------|-----------|---------|--------|
| 0:00 | diagram | CompareCards | "Claude and Codex both fail this" | two warning cards |
| 0:08 | diagram | FlowLoop | "so it retries" | fail arc back to start |
| 0:16 | screencap | ProofScreencap | "this is the repo" | github still + cursor |
```

No `Main.tsx` work until `beats.md` exists.

## New video checklist

- [ ] `beats.md` written from the script/audio
- [ ] Every row tagged `diagram` / `mock` / `screencap`
- [ ] Only listed components used
- [ ] Audio in `public/<slug>/`
- [ ] Proof screenshots are real files, not generated fakes
- [ ] Registered in `src/Root.tsx`
- [ ] Studio check 16x9-1080 (and 16x9-4k when shipping)
- [ ] Thumbnail uses SlashChip + the same tokens
