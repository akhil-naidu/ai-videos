import React from "react";
import { explainer } from "./theme";

export const SparkIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 36,
  color = explainer.fail,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l1.4 4.2L17 7l-3.6 1.8L12 13l-1.4-4.2L7 7l3.6-1.8L12 2z"
      fill={color}
    />
    <path
      d="M20 11l-1.2 2.4L17 12.8l2.4 1.2L20 16l1.2-2.4L23 12.8l-2.4-1.2L20 11z"
      fill={color}
      opacity={0.85}
    />
    <path
      d="M5 14l-0.8 1.6L3 15.2l1.6 0.8L5 17l0.8-1.6L7 15.2l-1.6-0.8L5 14z"
      fill={color}
      opacity={0.7}
    />
  </svg>
);

export const EyeIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 32,
  color = "#9a9a9a",
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"
      stroke={color}
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
    <circle cx={12} cy={12} r={2.5} fill={color} />
  </svg>
);

export const ClaudeMark: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <SparkIcon size={size} color={explainer.fail} />
);

export const CodexMark: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x={3} y={3} width={18} height={18} rx={4} fill={explainer.active} />
    <path d="M7 8h10M7 12h7M7 16h10" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

export const FolderMark: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      d="M2 4.5A1 1 0 013 3.5h3l1 1.5h5A1 1 0 0116 6v6.5a1 1 0 01-1 1H3a1 1 0 01-1-1V4.5z"
      stroke="#888"
      strokeWidth={1.2}
    />
  </svg>
);
