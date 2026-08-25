import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { theme } from "./theme";

export type Point = { x: number; y: number };

type WireConnectorProps = {
  from: Point;
  to: Point;
  color?: string;
  strokeWidth?: number;
  delay?: number;
  durationInFrames?: number;
  label?: string;
};

export const WireConnector: React.FC<WireConnectorProps> = ({
  from,
  to,
  color = theme.accentCyan,
  strokeWidth = 3,
  delay = 0,
  durationInFrames = 28,
  label,
}) => {
  const frame = useCurrentFrame();
  const midX = (from.x + to.x) / 2;
  const path = `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;
  const length = Math.hypot(to.x - from.x, to.y - from.y) * 1.35;
  const progress = interpolate(frame - delay, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const dashOffset = length * (1 - progress);
  const glow = interpolate(progress, [0, 1], [0, 0.85]);

  return (
    <svg
      width="100%"
      height="100%"
      style={{ position: "absolute", inset: 0, overflow: "visible", pointerEvents: "none" }}
    >
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth + 6}
        strokeOpacity={glow * 0.25}
        strokeLinecap="round"
      />
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={length}
        strokeDashoffset={dashOffset}
      />
      <circle
        cx={from.x}
        cy={from.y}
        r={5}
        fill={theme.bg}
        stroke={color}
        strokeWidth={2}
        opacity={interpolate(frame - delay, [0, 8], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}
      />
      <circle
        cx={to.x}
        cy={to.y}
        r={5}
        fill={color}
        opacity={interpolate(frame - delay, [durationInFrames - 6, durationInFrames], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}
      />
      {label ? (
        <text
          x={(from.x + to.x) / 2}
          y={(from.y + to.y) / 2 - 12}
          fill={theme.textMuted}
          fontSize={18}
          fontFamily={theme.fontMono}
          textAnchor="middle"
          opacity={progress}
        >
          {label}
        </text>
      ) : null}
    </svg>
  );
};
