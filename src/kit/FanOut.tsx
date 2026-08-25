import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { Enter, Stage, cardStyle } from "./Stage";
import { explainer } from "./theme";
import { TechLogo, type TechId } from "./TechLogo";

type FanOutProps = {
  /** Center / source node logos */
  sourceLogos?: TechId[];
  /** Fan targets */
  targets: Array<{ logo?: TechId; agent?: boolean; bars?: number }>;
};

export const FanOut: React.FC<FanOutProps> = ({
  sourceLogos = ["react"],
  targets,
}) => {
  const frame = useCurrentFrame();
  const draw = interpolate(frame, [10, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const h = Math.max(targets.length * 88, 280);
  const srcY = h / 2;

  return (
    <Stage>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          position: "relative",
          height: h,
        }}
      >
        <Enter delay={0}>
          <div
            style={{
              ...cardStyle,
              width: 160,
              minHeight: 140,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              zIndex: 2,
            }}
          >
            <div style={{ display: "flex", gap: 8 }}>
              {sourceLogos.map((id) => (
                <TechLogo key={id} id={id} size={32} />
              ))}
            </div>
            {[0.85, 0.6, 0.7, 0.45].map((w, i) => (
              <div
                key={i}
                style={{
                  width: `${w * 100}%`,
                  height: 10,
                  borderRadius: 5,
                  background: "#2a2a2a",
                }}
              />
            ))}
          </div>
        </Enter>

        <svg
          width={160}
          height={h}
          style={{ overflow: "visible" }}
        >
          {targets.map((_, i) => {
            const ty = ((i + 0.5) / targets.length) * h;
            const path = `M 0 ${srcY} C 80 ${srcY}, 80 ${ty}, 160 ${ty}`;
            const len = 220;
            return (
              <path
                key={i}
                d={path}
                fill="none"
                stroke="#3a3a3a"
                strokeWidth={2}
                strokeDasharray={len}
                strokeDashoffset={len * (1 - draw)}
              />
            );
          })}
        </svg>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            zIndex: 2,
          }}
        >
          {targets.map((t, i) => (
            <Enter key={i} delay={12 + i * 6}>
              <div
                style={{
                  ...cardStyle,
                  width: 200,
                  padding: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  position: "relative",
                }}
              >
                {t.logo ? (
                  <TechLogo id={t.logo} size={28} />
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                    {Array.from({ length: t.bars ?? 2 }).map((_, bi) => (
                      <div
                        key={bi}
                        style={{
                          height: 10,
                          width: bi === 0 ? "70%" : "45%",
                          borderRadius: 5,
                          background: bi === 0 ? explainer.active : "#2a2a2a",
                          opacity: bi === 0 ? 0.7 : 1,
                        }}
                      />
                    ))}
                  </div>
                )}
                {t.agent ? (
                  <span
                    style={{
                      position: "absolute",
                      right: -56,
                      fontFamily: "IBM Plex Mono, monospace",
                      fontSize: 12,
                      color: explainer.text,
                      opacity: 0.8,
                    }}
                  >
                    <span style={{ color: explainer.fail }}>•</span> agent
                  </span>
                ) : null}
              </div>
            </Enter>
          ))}
        </div>
      </div>
    </Stage>
  );
};
