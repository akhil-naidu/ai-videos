import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Enter, Stage, cardStyle } from "./Stage";
import { ArcSpinner } from "./LoadingSpinner";
import { FolderMark } from "./icons";
import { drawProgress } from "./motion";
import { explainer } from "./theme";

type ParallelFanOutProps = {
  label?: string;
};

const ROW_COUNT = 4;
const ROW_GAP = 10;
const ROW_HEIGHT = 52;
const STACK_H = ROW_COUNT * ROW_HEIGHT + (ROW_COUNT - 1) * ROW_GAP;
const SVG_W = 120;

/** unlazy → parallel tasks → ✓✓ with curved connectors (reference ~34s). */
export const ParallelFanOut: React.FC<ParallelFanOutProps> = ({
  label = "unlazy",
}) => {
  const frame = useCurrentFrame();
  const activeIndex = Math.min(
    ROW_COUNT - 1,
    Math.floor(interpolate(frame, [20, 200], [0, ROW_COUNT], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })),
  );

  const rowCenterY = (i: number) =>
    i * (ROW_HEIGHT + ROW_GAP) + ROW_HEIGHT / 2;

  return (
    <Stage>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          position: "relative",
          paddingBottom: 56,
        }}
      >
        <Enter delay={0} duration={12}>
          <div
            style={{
              ...cardStyle,
              padding: "10px 14px",
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 13,
              color: explainer.text,
              display: "flex",
              alignItems: "center",
              gap: 8,
              zIndex: 2,
            }}
          >
            <FolderMark />
            {label}
          </div>
        </Enter>

        <svg
          width={SVG_W}
          height={STACK_H}
          viewBox={`0 0 ${SVG_W} ${STACK_H}`}
          style={{ overflow: "visible", flexShrink: 0, margin: "0 -4px" }}
        >
          {Array.from({ length: ROW_COUNT }, (_, i) => {
            const ty = rowCenterY(i);
            const path = `M 0 ${STACK_H / 2} C 50 ${STACK_H / 2}, 50 ${ty}, ${SVG_W} ${ty}`;
            const len = 180;
            const isActive = i === activeIndex;
            const isDone = i < activeIndex;
            const drawT = interpolate(
              frame,
              [10 + i * 8, 28 + i * 8],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );
            const offset = len * (1 - drawT);
            return (
              <path
                key={i}
                d={path}
                fill="none"
                stroke={isActive ? explainer.fail : isDone ? "#3a3a3a" : "#2a2a2a"}
                strokeWidth={isActive ? 2 : 1.5}
                strokeDasharray={len}
                strokeDashoffset={offset}
                opacity={isActive ? 1 : 0.7}
              />
            );
          })}
        </svg>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ROW_GAP,
            zIndex: 2,
          }}
        >
          {Array.from({ length: ROW_COUNT }, (_, i) => {
            const done = i < activeIndex;
            const active = i === activeIndex;
            const t = interpolate(frame, [12 + i * 8, 24 + i * 8], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            return (
              <div
                key={i}
                style={{
                  ...cardStyle,
                  width: 300,
                  height: ROW_HEIGHT,
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  opacity: t,
                  boxShadow: active
                    ? `0 0 0 1px ${explainer.fail}55, 0 0 24px ${explainer.fail}18`
                    : undefined,
                }}
              >
                {done ? (
                  <span style={{ color: explainer.success, fontSize: 15, width: 18 }}>
                    ✓
                  </span>
                ) : active ? (
                  <ArcSpinner size={16} color={explainer.fail} />
                ) : (
                  <span style={{ width: 18, opacity: 0.15 }}>○</span>
                )}
                <div
                  style={{
                    flex: 1,
                    height: 10,
                    borderRadius: 5,
                    background: active ? "#4a4a4a" : "#2e2e2e",
                    maxWidth: `${52 + i * 10}%`,
                  }}
                />
              </div>
            );
          })}
        </div>

        <svg
          width={SVG_W}
          height={STACK_H}
          viewBox={`0 0 ${SVG_W} ${STACK_H}`}
          style={{ overflow: "visible", flexShrink: 0, margin: "0 -4px" }}
        >
          {Array.from({ length: ROW_COUNT }, (_, i) => {
            const ty = rowCenterY(i);
            const path = `M 0 ${ty} C 50 ${ty}, 50 ${STACK_H / 2}, ${SVG_W} ${STACK_H / 2}`;
            const len = 180;
            const isActive = i === activeIndex;
            const drawT = interpolate(
              frame,
              [30 + i * 8, 48 + i * 8],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );
            return (
              <path
                key={i}
                d={path}
                fill="none"
                stroke={isActive ? explainer.fail : "#2a2a2a"}
                strokeWidth={isActive ? 2 : 1.5}
                strokeDasharray={len}
                strokeDashoffset={len * (1 - drawT)}
                opacity={isActive ? 1 : 0.5}
              />
            );
          })}
        </svg>

        <Enter delay={36} duration={14}>
          <span
            style={{
              color: "#8a8a8a",
              fontSize: 26,
              letterSpacing: -2,
              marginLeft: 4,
            }}
          >
            ✓✓
          </span>
        </Enter>

        <svg
          width={480}
          height={64}
          viewBox="0 0 480 64"
          style={{
            position: "absolute",
            left: 8,
            bottom: -48,
            overflow: "visible",
            pointerEvents: "none",
          }}
        >
          <path
            d="M 460 6 L 460 48 L 16 48 L 16 6"
            fill="none"
            stroke="#333"
            strokeWidth={1.5}
            strokeDasharray={900}
            strokeDashoffset={drawProgress(frame, 50, 50, 900)}
          />
        </svg>
      </div>
    </Stage>
  );
};
