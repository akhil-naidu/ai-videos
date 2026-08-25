# remotion-presentation — reference

## Composition registration pattern

```tsx
// src/Root.tsx (illustrative)
import { Composition } from 'remotion';
import { Main } from '../presentations/demo-architecture/Main';
import { meta } from '../presentations/demo-architecture/meta';
import { FORMAT_PRESETS } from './formats';

export const RemotionRoot = () => (
  <>
    {meta.formats.map((key) => {
      const f = FORMAT_PRESETS[key];
      return (
        <Composition
          key={`${meta.id}-${key}`}
          id={`${meta.id}-${key}`}
          component={Main}
          durationInFrames={f.durationInFrames ?? 300}
          fps={f.fps}
          width={f.width}
          height={f.height}
          defaultProps={{}}
        />
      );
    })}
  </>
);
```

## Format preset keys

| Key | Width | Height | Typical use |
|-----|-------|--------|-------------|
| `16x9-1080` | 1920 | 1080 | Long-form HD |
| `16x9-4k` | 3840 | 2160 | Long-form 4K |
| `9x16-1080` | 1080 | 1920 | Short-form HD |
| `9x16-4k` | 2160 | 3840 | Short-form 4K |

FPS: 30.

## Viewer manifest

Keep a simple JSON or TS list consumed by `viewer/` so new decks appear without hunting Studio IDs. Update it whenever you add `presentations/<slug>/`.

## Official Remotion skills map

| Task | Skill |
|------|--------|
| Unsure | remotion-best-practices |
| New project/composition | remotion-create |
| Markup / animation / audio | remotion-markup |
| Preview | remotion-studio |
| Render | remotion-render |
| Metadata / Mediabunny | remotion-multimedia |
| Studio editability | remotion-interactivity |
| Docs lookup | remotion-docs |
| Upgrade | remotion-upgrade |
