# Explainer Kit board

Owner: Explainer Kit. Draft/local only. Update this file; ClickUp is not our surface.

Source channel: [AI LABS](https://www.youtube.com/@AILABS-393) (`UCelfWQr9sXVMTvBzviPGlFw`).
House style: `docs/style/visual-system.md`. Tokens: `explainer` in `src/kit/theme.ts`.

IDs below came from `yt-dlp --flat-playlist` on 2026-08-25. Do not invent URLs.

## Queue

Videos not mined. Newest unmined first. Daily pass takes the top row.

| id | title | why next |
|----|-------|----------|
| `D_uojDHkbw4` | This Claude Skill Just Fixed Loop Engineering | Loop / retry language |
| `bBlY5YOsKN8` | How To Use Claude Design To Build Beautiful Sites | Design / mock language |
| `b9k-AE4v5yI` | This Claude Code Skill make Building 10x Faster | Skill walkthrough |
| `AD-EmZ3v6-g` | This Is How Forward Deployed Engineering Is Actually Done | Process diagram |
| `a8tLTd4q-fU` | Buzz Just Fixed AI Agents... But It Has A Serious Flaw | Compare + fail |
| `pGro_uKt-_M` | Claude Code Setup Guide By The Creator Himself | Setup / pipeline |
| `EwTOiqWWqEc` | This Skill Just Made Kimi K3 a 10X Better Designer | After `H7t3uUp3HVw`; design skill |
| `m6IXL_YGqBQ` | This New Skill Finally Solves Thinking For AI Agents | Agent graph |
| `qxjII6x2yPY` | Fleet Engineering Is Insane... The Next Evolution Of Vibe Coding | Fan-out / fleet |

## Mined

Refs on disk under `references/ailabs/`. Do not re-download.

| id | title | on disk | motion noted |
|----|-------|---------|--------------|
| `PLyRe6Zk--8` | Every Level Of Claude Code Loop Engineering Explained | intro + mid clips, thumb, stills (`agent-cycle`, `loop-levels`, `duration-compare`) | CycleLoop (circular Plan/Build/Check/Improve + hub timer/pass). Numbered 01/02/03 loop-level rows (AbstractList-adjacent, not added). Duration histogram vs CounterBar. Human-in-the-loop / ProductMock / VS Code vs Warp compare already covered |
| `Ysr7oNDajJI` | Insane Claude Design Skills You Need To Actually Build Beautiful Sites | intro + mid clips, thumb, stills (`animate-stepper`) | AbstractList, ProductMock, SyntheticCursor, mug click, Animate stepper |
| `c47uqR7XB_c` | GitHub's #1 Trending Author's New Claude Skill Is Insane | intro + mid clips, thumb, stills (`fail-retry-loop`, `github-screencap`) | CompareCards, FlowLoop, ProofScreencap |
| `H7t3uUp3HVw` | Anthropic Just Fixed Graph Engineering's Greatest Flaw | intro + mid clips, thumb, stills (`x-screencap`, `agent-fanout`) | ProofScreencap (X), FanOut, CounterBar, PipelineCards vs parallel |

## Build

Visual-system list that is **not** in `src/kit` yet. Orchestrator's seed list is noted; eight of those already landed before this board.

| component | from refs | status |
|-----------|-----------|--------|
| — | — | visual-system list is in Done |

Already in kit (moved to Done, not rebuilt): CompareCards, FlowLoop, PipelineCards, FanOut, CounterBar, AbstractList, ProductMock, SlashChip.

## Done

| component | file |
|-----------|------|
| `CompareCards` | `src/kit/CompareCards.tsx` |
| `FlowLoop` | `src/kit/FlowLoop.tsx` |
| `PipelineCards` | `src/kit/PipelineCards.tsx` |
| `FanOut` | `src/kit/FanOut.tsx` |
| `CounterBar` | `src/kit/CounterBar.tsx` |
| `AbstractList` | `src/kit/AbstractList.tsx` |
| `ProductMock` | `src/kit/ProductMock.tsx` |
| `SlashChip` | `src/kit/SlashChip.tsx` |
| `Stage` / `Enter` | `src/kit/Stage.tsx` (chrome) |
| `TechLogo` | `src/kit/TechLogo.tsx` |
| `SkeletonScreen` | `src/kit/SkeletonScreen.tsx` (legacy; maps to AbstractList / ProductMock) |
| `WireConnector` | `src/kit/WireConnector.tsx` (legacy; maps to FanOut / FlowLoop) |
| `PageTransition` | `src/kit/PageTransition.tsx` |
| `SyntheticCursor` | `src/kit/SyntheticCursor.tsx` |
| `ProofScreencap` | `src/kit/ProofScreencap.tsx` (kit `SyntheticCursor` overlay) |
| `CycleLoop` | `src/kit/CycleLoop.tsx` |

## Notes

- Weekday mine: one queued video, short clips/stills only, then one reusable component if the motion is clearly repeated.
- Draft only. No commit/PR unless Akhil or Orchestrator asks.
- Fetch-only on YouTube. Never post, comment, or log in.
