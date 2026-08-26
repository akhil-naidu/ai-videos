import React from "react";
import { useCurrentFrame } from "remotion";
import { spinDegrees } from "./motion";

type SpinnerProps = {
  size?: number;
  color?: string;
};

/** Partial arc — reference "working" indicator beside lowercase label. */
export const ArcSpinner: React.FC<SpinnerProps> = ({
  size = 14,
  color = "#e06a4e",
}) => {
  const frame = useCurrentFrame();
  const r = size / 2 - 2;
  const rot = spinDegrees(frame, 7);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ transform: `rotate(${rot}deg)`, flexShrink: 0 }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeDasharray={`${r * 2.4} ${r * 4}`}
      />
    </svg>
  );
};

/** Radial burst — reference spark / loading burst at ~3s. */
export const BurstSpinner: React.FC<SpinnerProps> = ({
  size = 44,
  color = "#e06a4e",
}) => {
  const frame = useCurrentFrame();
  const spokes = 12;
  const baseRot = spinDegrees(frame, 4);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {Array.from({ length: spokes }, (_, i) => {
        const angle = baseRot + (360 / spokes) * i;
        const rad = (angle * Math.PI) / 180;
        const cx = size / 2;
        const cy = size / 2;
        const inner = size * 0.22;
        const outer = size * 0.42;
        const x1 = cx + Math.cos(rad) * inner;
        const y1 = cy + Math.sin(rad) * inner;
        const x2 = cx + Math.cos(rad) * outer;
        const y2 = cy + Math.sin(rad) * outer;
        const opacity = 0.25 + ((i + (frame % spokes)) % spokes) / spokes * 0.75;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth={2.5}
            strokeLinecap="round"
            opacity={opacity}
          />
        );
      })}
    </svg>
  );
};
