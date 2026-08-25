export const theme = {
  bg: "#0c0e12",
  bgElevated: "#151922",
  bgMuted: "#1c2230",
  border: "#2a3344",
  text: "#e8edf5",
  textMuted: "#8b97ab",
  accentCyan: "#3ee0d0",
  accentAmber: "#f0a45d",
  skeleton: "#243044",
  skeletonHighlight: "#2f3d55",
  fontDisplay: '"Space Grotesk", "Segoe UI", sans-serif',
  fontMono: 'var(--font-mono, "IBM Plex Mono"), "SF Mono", ui-monospace, monospace',
} as const;

export type Theme = typeof theme;

export const explainer = {
  bg: "#000000",
  bgElevated: "#161616",
  text: "#f2f2f2",
  chip: "#f5d400",
  success: "#3ddc84",
  fail: "#e06a4e",
  warning: "#f07a3d",
  active: "#4c8dff",
} as const;
export type ExplainerTheme = typeof explainer;
