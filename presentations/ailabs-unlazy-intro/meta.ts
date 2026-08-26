import type { FormatKey } from "../../src/formats";
import { DEFAULT_FORMATS } from "../../src/formats";

export const VO_PATH = "ailabs-unlazy-intro/vo.wav";

export const meta = {
  id: "ailabs-unlazy-intro",
  title: "AI LABS — unlazy intro (reference)",
  description:
    "Recreation of references/ailabs/clips/c47uqR7XB_c-intro.mp4 with extracted VO and proof stills.",
  formats: DEFAULT_FORMATS as readonly FormatKey[],
} as const;
