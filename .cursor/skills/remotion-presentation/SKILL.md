---
name: remotion-presentation
description: Create and maintain Remotion presentation decks in this repo using the shared kit (SkeletonScreen, WireConnector, PageTransition), presentations/ folder conventions, and HD/4K 16:9 + 9:16 format presets. Use whenever the user asks to create a presentation, deck, slide video, architecture walkthrough, demo composition, or dump a script/audio for a new presentation folder.
---

# Remotion presentation workflow

## When this applies

Any new or edited presentation in `presentations/`, kit usage in scenes, or registering compositions in `src/Root.tsx`.

Also read:

- Official Remotion skills: `remotion-best-practices`, `remotion-markup`, `remotion-create`, `remotion-studio`
- Spec: `docs/superpowers/specs/2026-08-25-remotion-presentation-system-design.md`

## Visual system

Dark product UI only (unless user overrides):

- Charcoal canvas, cyan/amber wire accents
- Tokens from `src/kit/theme.ts`
- Prefer skeletons + animated connectors over dense real UI
- Page changes feel like a live website (SPA transitions)

## New presentation checklist

Copy and track:

```
- [ ] Create presentations/<slug>/meta.ts (title, description, formats)
- [ ] Create scenes under presentations/<slug>/scenes/
- [ ] Compose Main with Series or TransitionSeries using kit components
- [ ] Register format variants in src/Root.tsx via src/formats.ts
- [ ] Add entry to viewer manifest
- [ ] Smoke-check in Remotion Studio (16x9-1080 and 9x16-1080 at minimum)
```

### Folder template

```
presentations/<slug>/
  meta.ts
  Main.tsx
  scenes/
    Intro.tsx
    ...
```

### meta.ts shape

```ts
export const meta = {
  id: 'demo-architecture',
  title: 'Demo Architecture',
  description: 'Kit showcase',
  formats: ['16x9-1080', '16x9-4k', '9x16-1080', '9x16-4k'] as const,
};
```

## Kit usage

1. Import from `src/kit/` — do not duplicate skeleton/connector logic inside a presentation.
2. Drive animation with local `useCurrentFrame()` inside kit components.
3. Place scenes with `Sequence` / `Series` / `TransitionSeries`; keep scene components free of absolute global frame math when possible.
4. For Studio asset swaps, expose image/audio URLs and copy via `defaultProps` + Zod schema on `<Composition>`.

## Script + audio (when user provides them)

v1: manually map script beats to scenes and durations; place audio in `public/<slug>/` with `@remotion/media` `<Audio>` when ready.

v2 (do not build unless asked): automated alignment from transcript timestamps.

## Commands

- Preview: Remotion Studio (`npm run studio` / `bun run studio`)
- Gallery: `npm run viewer`
- Render: use `remotion-render` skill / `npx remotion render <CompositionId>`

## More detail

- Folder + registration patterns: [reference.md](reference.md)
- Format presets: `src/formats.ts`
