# Beat sheet template

Copy to `presentations/<slug>/beats.md`. Fill from the voiceover first.

```md
# <title>

Audio: `public/<slug>/vo.wav`
Target: 16x9-4k, 30fps
Length: <mm:ss>

| t | dur | layer | component | VO line | visual | notes |
|---|-----|-------|-----------|---------|--------|-------|
| 0:00 | 6s | diagram | CompareCards | | | |
| 0:06 | 8s | diagram | FlowLoop | | | |
| 0:14 | 7s | screencap | ProofScreencap | | | real file: public/<slug>/proof-01.png |
```

Rules:

- `dur` 4-8 seconds unless a screencap needs a 10s hover.
- `component` must be a name from `docs/style/visual-system.md`.
- `screencap` rows need a real file path.
- If a row needs a new component, stop and add it to the kit + visual-system list first.
