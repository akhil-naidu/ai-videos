import { config } from "@remotion/eslint-config-flat";

export default [
  ...config,
  {
    ignores: [".agents/**", ".cursor/**", "docs/**", "viewer/**", "out/**"],
  },
];
