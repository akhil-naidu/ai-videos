import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { Enter, Stage, cardStyle } from "./Stage";
import { explainer } from "./theme";

type CounterBarProps = {
  /** 0-1 progress driven by scene or prop */
  value?: number;
  /** Animate from 0 → value across the scene */
  animate?: boolean;
  label?: string;
  tone?: "active" | "success" | "warning" | "fail";
};

export const CounterBar: React.FC<CounterBarProps> = ({
  value = 0.85,
  animate = true,
  label,
  tone = "active",
}) => {
  const frame = useCurrentFrame();
  const t = animate
    ? interpolate(frame, [8, 55], [0, value], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : value;
  const color =
    tone === "success"
      ? explainer.success
      : tone === "warning"
        ? explainer.warning
        : tone === "fail"
          ? explainer.fail
          : explainer.active;

  return (
    <Stage>
      <Enter>
        <div style={{ ...cardStyle, width: 560, padding: 32 }}>
          {label ? (
            <div
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: 14,
                color: explainer.text,
                opacity: 0.6,
                marginBottom: 16,
              }}
            >
              {label}
            </div>
          ) : (
            <div
              style={{
                width: 120,
                height: 12,
                borderRadius: 6,
                background: "#2a2a2a",
                marginBottom: 16,
              }}
            />
          )}
          <div
            style={{
              height: 16,
              borderRadius: 999,
              background: "#222",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${t * 100}%`,
                height: "100%",
                background: color,
              }}
            />
          </div>
          <div
            style={{
              marginTop: 14,
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 28,
              color,
            }}
          >
            {Math.round(t * 100)}%
          </div>
        </div>
      </Enter>
    </Stage>
  );
};
