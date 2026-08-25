import type { FormatKey } from "../../src/formats";
import { DEFAULT_FORMATS } from "../../src/formats";
import { TOTAL_DURATION } from "./scenes";

export const meta = {
  id: "dflow-flagship",
  title: "dFlow Flagship",
  description:
    "AI LABS–style explainer — centered diagrams, real tech logos, VO-ready.",
  formats: DEFAULT_FORMATS as readonly FormatKey[],
  durationInFrames: TOTAL_DURATION,
} as const;
