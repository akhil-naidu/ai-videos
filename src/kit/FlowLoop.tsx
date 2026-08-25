import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { Enter, Stage, cardStyle } from "./Stage";
import { explainer } from "./theme";

type FlowLoopProps = {
  /** 0 = spark, 1 = checklist with fails, 2 = fail node + retry */
  phase?: number;
};

export const FlowLoop: React.FC<FlowLoopProps> = ({ phase = 2 }) => {
  const frame = useCurrentFrame();
  const arc = interpolate(frame, [20, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Stage>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 32,
          position: "relative",
        }}
      >
        <Enter delay={0}>
          <div
            style={{
              ...cardStyle,
              width: 100,
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              color: explainer.warning,
            }}
          >
            ✦
          </div>
        </Enter>

        <div style={{ width: 40, height: 2, background: "#333" }} />

        <Enter delay={8}>
          <div style={{ ...cardStyle, width: 220, padding: 20 }}>
            {[{ ok: true }, { ok: false }, { ok: false }].map((row, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: i < 2 ? 12 : 0,
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 6,
                    background: row.ok ? explainer.success : explainer.fail,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  {row.ok ? "✓" : "×"}
                </div>
                <div
                  style={{
                    flex: 1,
                    height: 12,
                    borderRadius: 6,
                    background: "#2a2a2a",
                  }}
                />
              </div>
            ))}
          </div>
        </Enter>

        {phase >= 1 ? (
          <>
            <div style={{ width: 40, height: 2, background: "#333" }} />
            <Enter delay={16}>
              <div
                style={{
                  ...cardStyle,
                  width: 100,
                  height: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 999,
                    border: `3px solid ${explainer.fail}`,
                    color: explainer.fail,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                  }}
                >
                  ×
                </div>
              </div>
            </Enter>
          </>
        ) : null}

        {phase >= 2 ? (
          <svg
            width={520}
            height={80}
            style={{
              position: "absolute",
              left: 40,
              bottom: -70,
              overflow: "visible",
            }}
          >
            <path
              d="M 480 10 C 480 70, 40 70, 40 10"
              fill="none"
              stroke={explainer.fail}
              strokeWidth={2}
              strokeDasharray={600}
              strokeDashoffset={600 * (1 - arc)}
              opacity={0.85}
            />
          </svg>
        ) : null}
      </div>
    </Stage>
  );
};
