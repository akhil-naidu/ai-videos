import React from "react";
import { useCurrentFrame } from "remotion";
import { drawProgress } from "./motion";
import { explainer } from "./theme";

type FlowConnectorProps = {
  width?: number;
  color?: string;
  /** Frames to draw arrow in */
  drawStart?: number;
  drawDuration?: number;
};

/** Horizontal connector with arrowhead — reference node links. */
export const FlowConnector: React.FC<FlowConnectorProps> = ({
  width = 48,
  color = "#3a3a3a",
  drawStart = 0,
  drawDuration = 16,
}) => {
  const frame = useCurrentFrame();
  const len = width + 8;
  const offset = drawProgress(frame, drawStart, drawDuration, len);

  return (
    <svg
      width={width}
      height={12}
      viewBox={`0 0 ${width} 12`}
      style={{ overflow: "visible", flexShrink: 0 }}
    >
      <line
        x1={0}
        y1={6}
        x2={width - 6}
        y2={6}
        stroke={color}
        strokeWidth={1.5}
        strokeDasharray={len}
        strokeDashoffset={offset}
      />
      <path
        d={`M ${width - 6} 6 L ${width - 12} 3 M ${width - 6} 6 L ${width - 12} 9`}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        fill="none"
        strokeDasharray={len}
        strokeDashoffset={offset}
      />
    </svg>
  );
};

type RetryArcProps = {
  drawStart?: number;
  drawDuration?: number;
  color?: string;
};

/** Curved retry loop under fail node — reference fail-retry-loop still. */
export const RetryArc: React.FC<RetryArcProps> = ({
  drawStart = 30,
  drawDuration = 36,
  color = explainer.fail,
}) => {
  const frame = useCurrentFrame();
  const pathLen = 520;
  const offset = drawProgress(frame, drawStart, drawDuration, pathLen);

  return (
    <svg
      width={520}
      height={90}
      viewBox="0 0 520 90"
      style={{
        position: "absolute",
        left: 24,
        bottom: -78,
        overflow: "visible",
        pointerEvents: "none",
      }}
    >
      <path
        d="M 480 8 C 480 72, 48 72, 48 8"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray={pathLen}
        strokeDashoffset={offset}
        opacity={0.9}
      />
      <path
        d="M 48 8 L 42 14 M 48 8 L 54 14"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
        strokeDasharray={20}
        strokeDashoffset={drawProgress(frame, drawStart + drawDuration - 8, 8, 20)}
        opacity={0.9}
      />
    </svg>
  );
};
