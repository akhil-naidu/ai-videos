# AI LABS explainer system — analysis and plan

**Date:** 2026-08-25
**Status:** Locked as the house style for `ai-videos`
**Reference files:** `references/ailabs/`

## 1. What we are planning to do

Use this Remotion repo to ship a repeatable series of technical explainers that feel like [AI LABS](https://www.youtube.com/@AILABS-393): VO on top, designed motion in the middle, real screenshots as proof.

We are not becoming their channel. We take the production language (components, pacing, layers) and put Akhil's voice, topics, and products through it.

v1 already built a presentation kit (skeletons, wires, page transitions). This spec turns that kit into an explainer factory. Every new video must look like it came from the same program.

## 2. What AI LABS actually does (from watched clips)

Three videos studied (IDs are real):

- `c47uqR7XB_c` — unlazy / taste-skill (intro + mid)
- `H7t3uUp3HVw` — graph engineering (intro + mid, highest views of the set)
- `Ysr7oNDajJI` — Claude design skills (intro + mid)

Findings:

- Hybrid, not one tool. Designed diagrams and mocks are code-rendered. GitHub, X, and docs are real screenshots. Do not rebuild those sites in Remotion.
- Almost certainly Remotion or Motion Canvas for the designed layer. 4K 30fps source. CSS-like flex layouts. Perfect synthetic cursor. Counters bound to bar width. Programmatic node trees. We already chose Remotion, which matches.
- They never name Remotion on the channel. Public skills (`script-writer`, `storyboard-manager`) are generic Claude packages, not their video pipeline. Do not treat those skills as their motion system.
- Identity is in the thumbnail. Yellow slash-command chip, dark field, orange pixel mascot, blue CLI robot. Mid-video drops the mascots. Body is diagrams + cursor + proof.
- Cadence. High volume Claude/agent explainers, about 12-14 minutes, title formula like "This X is insane / just fixed Y". We do not have to copy the titles.

Mid-clip motion that matters:

- Ceramic mug "Add to cart" to checkmark (ProductMock + SyntheticCursor).
- Animate stepper ticking 1-5 while a wireframe populates (mock + pipeline).
- Sequential bars vs parallel fan-out (PipelineCards vs FanOut).
- Cost counter $0.84 to $0.27 (CounterBar).
- Token tree 0k to 162k (FanOut + CounterBar).

## 3. Design philosophy (steal this, not the logo)

1. One idea on screen. Negative space is the brand.
2. Abstract the text. Pill bars beat paragraphs.
3. State is visible. Pending / active / done, pass / fail, $ / tokens.
4. Proof is a screenshot, not a restyled fake.
5. The cursor is a character. It is not a screen recording.
6. Same chrome every episode. Novelty lives in the topic and the numbers.

## 4. How a video gets made here

```
topic + VO (Akhil)
        ↓
beats.md          (layer + component + VO line)
        ↓
public/<slug>/    (audio + real proof stills)
        ↓
presentations/<slug>/  (scenes using kit only)
        ↓
src/Root.tsx + viewer
        ↓
render 16x9-1080, then 16x9-4k
```

Do not start scenes from a blank composition. Do not invent motion. If the beat needs a component that is not in `docs/style/visual-system.md`, add the component to the kit first.

Script shape (when writing, not just mapping audio):

1. Hook claim (CompareCards or SlashChip)
2. Diagram the problem (FlowLoop / PipelineCards)
3. Proof (ProofScreencap)
4. Walk the mechanism (FanOut, CounterBar, ProductMock)
5. Recap (same diagram in the done state)

## 5. Kit gap (v1 to explainer)

Already in `src/kit/`: SkeletonScreen, WireConnector, PageTransition, theme.

Need as named kit pieces (build when the first real video needs them, not as one-off scene JSX):

- CompareCards, FlowLoop, PipelineCards, FanOut, CounterBar
- AbstractList (may be a SkeletonScreen variant)
- ProductMock, ProofScreencap, SlashChip, SyntheticCursor

Theme: keep current tokens for the demo deck. New explainers use `explainer` tokens in `src/kit/theme.ts` (near-black, yellow chip, green/fail/orange).

## 6. Non-goals

- Auto script to audio pipeline (still v2, only if Akhil asks)
- Copying AI LABS mascots into the body
- Facecam
- After Effects or CapCut as the house tool
- Generating fake GitHub/X pages

## 7. Success

A second video can be assembled by filling `beats.md` and swapping props. Someone watching two of our videos back to back should say they are the same show.
