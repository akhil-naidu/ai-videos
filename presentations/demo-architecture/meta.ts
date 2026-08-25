import type { FormatKey } from "../../src/formats";
import { DEFAULT_FORMATS } from "../../src/formats";

export const meta = {
  id: "demo-architecture",
  title: "Demo Architecture",
  description:
    "Kit showcase — skeleton screens, animated wire connectors, SPA page transitions.",
  formats: DEFAULT_FORMATS as readonly FormatKey[],
  /** Total scene time before transition overlap accounting in Main */
  sceneDurationInFrames: 75,
  transitionDurationInFrames: 15,
} as const;
