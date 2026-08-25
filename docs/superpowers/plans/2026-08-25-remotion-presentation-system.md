# Remotion Presentation System v1 — Implementation Plan

> **For agentic workers:** Execute task-by-task. AFK mode: use recommendations; skip interactive commit prompts unless user asked to commit.

**Goal:** Scaffold Remotion, add dark kit (SkeletonScreen, WireConnector, PageTransition), format presets, demo presentation, local viewer index.

**Architecture:** Single Remotion app at repo root; presentations under `presentations/`; kit under `src/kit/`.

**Tech Stack:** Remotion 4.x (exact pins), React 19, TypeScript, `@remotion/transitions`, bun or npm.

## Global Constraints

- Pin Remotion packages exact (no `^`)
- FPS 30; formats: 16x9-1080, 16x9-4k, 9x16-1080, 9x16-4k
- Dark product UI via `src/kit/theme.ts`
- Preserve existing `.cursor/`, `.agents/`, `docs/`, `AGENTS.md`

---

### Task 1: Scaffold Remotion into repo root

**Files:**
- Create: Remotion project files at repo root (merge with existing agent docs)
- Preserve: `.cursor/`, `.agents/`, `docs/`, `AGENTS.md`, `skills-lock.json`, `.gitignore`

- [ ] **Step 1:** Scaffold blank Remotion into a temp dir, then merge into root

```bash
cd /Users/dev/Developer/github/akhil-naidu/ai-videos
npx create-video@latest --yes --blank --no-tailwind _scaffold
# Move package.json, src/, public/, config files up; delete _scaffold
# Merge .gitignore; keep our agent files
npm i   # or bun i
```

- [ ] **Step 2:** Ensure scripts include `studio`, `render`; pin remotion deps exact
- [ ] **Step 3:** Verify `npx remotion compositions` lists HelloWorld (or blank default)

---

### Task 2: formats + theme + kit

**Files:**
- Create: `src/formats.ts`, `src/kit/theme.ts`, `src/kit/SkeletonScreen.tsx`, `src/kit/WireConnector.tsx`, `src/kit/PageTransition.tsx`, `src/kit/index.ts`

- [ ] **Step 1:** Implement `FORMAT_PRESETS` map
- [ ] **Step 2:** Implement theme tokens (charcoal, cyan, amber, fonts)
- [ ] **Step 3:** Implement three kit components with local `useCurrentFrame` animation
- [ ] **Step 4:** Export from `src/kit/index.ts`

---

### Task 3: demo-architecture presentation

**Files:**
- Create: `presentations/demo-architecture/meta.ts`, `Main.tsx`, `scenes/*.tsx`
- Modify: `src/Root.tsx`

- [ ] **Step 1:** Build 3–4 scenes using kit
- [ ] **Step 2:** Compose with `TransitionSeries`
- [ ] **Step 3:** Register all format composition IDs in Root

---

### Task 4: viewer gallery

**Files:**
- Create: `viewer/index.html`, `viewer/presentations.json`, package script `viewer`

- [ ] **Step 1:** Static HTML listing presentations + Studio deep links
- [ ] **Step 2:** Serve with `npx serve viewer -p 5173` (or vite)

---

### Task 5: Smoke verify

- [ ] **Step 1:** `npx remotion compositions` shows demo format IDs
- [ ] **Step 2:** Start studio briefly; confirm URL
- [ ] **Step 3:** Update README with run instructions
