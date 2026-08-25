export type FormatKey =
  | "16x9-1080"
  | "16x9-4k"
  | "9x16-1080"
  | "9x16-4k";

export type FormatPreset = {
  width: number;
  height: number;
  fps: number;
  label: string;
};

export const FORMAT_PRESETS: Record<FormatKey, FormatPreset> = {
  "16x9-1080": {
    width: 1920,
    height: 1080,
    fps: 30,
    label: "Long-form HD 16:9",
  },
  "16x9-4k": {
    width: 3840,
    height: 2160,
    fps: 30,
    label: "Long-form 4K 16:9",
  },
  "9x16-1080": {
    width: 1080,
    height: 1920,
    fps: 30,
    label: "Short-form HD 9:16",
  },
  "9x16-4k": {
    width: 2160,
    height: 3840,
    fps: 30,
    label: "Short-form 4K 9:16",
  },
};

export const DEFAULT_FORMATS: FormatKey[] = [
  "16x9-1080",
  "16x9-4k",
  "9x16-1080",
  "9x16-4k",
];
