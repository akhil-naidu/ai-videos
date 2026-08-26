import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Enter, Stage, cardStyle } from "./Stage";
import { ArcSpinner } from "./LoadingSpinner";
import { ClaudeMark, CodexMark } from "./icons";
import { explainer } from "./theme";
import { easeOut } from "./motion";

type WorkingCompareProps = {
  leftLabel?: string;
  rightLabel?: string;
};

/** Claude Code vs Codex "working" — reference opening (~1s). */
export const WorkingCompare: React.FC<WorkingCompareProps> = ({
  leftLabel = "Claude Code",
  rightLabel = "Codex",
}) => {
  const frame = useCurrentFrame();

  return (
    <Stage>
      <div style={{ display: "flex", gap: 24 }}>
        {[
          { label: leftLabel, Mark: ClaudeMark, spinnerColor: explainer.fail },
          { label: rightLabel, Mark: CodexMark, spinnerColor: "#8a8a8a" },
        ].map((side, i) => {
          const delay = i * 5;
          const t = interpolate(frame, [delay, delay + 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: easeOut,
          });
          return (
            <div
              key={side.label}
              style={{
                ...cardStyle,
                width: 300,
                minHeight: 168,
                padding: "28px 32px",
                opacity: t,
                transform: `translateY(${(1 - t) * 8}px) scale(${0.96 + t * 0.04})`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 28,
                }}
              >
                <side.Mark size={20} />
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: explainer.text,
                  }}
                >
                  {side.label}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  justifyContent: "center",
                }}
              >
                <ArcSpinner size={14} color={side.spinnerColor} />
                <span
                  style={{
                    fontSize: 14,
                    color: "#8a8a8a",
                    fontWeight: 400,
                  }}
                >
                  working
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Stage>
  );
};
