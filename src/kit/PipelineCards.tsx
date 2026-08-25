import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { Enter, Stage, cardStyle } from "./Stage";
import { explainer } from "./theme";
import { TechLogo, type TechId } from "./TechLogo";

export type PipelineStep = {
  label?: string;
  status: "pending" | "active" | "done";
  logo?: TechId;
};

type PipelineCardsProps = {
  steps: PipelineStep[];
};

export const PipelineCards: React.FC<PipelineCardsProps> = ({ steps }) => {
  const frame = useCurrentFrame();

  return (
    <Stage>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {steps.map((step, i) => {
          const pulse =
            step.status === "active"
              ? interpolate(Math.sin(frame / 10), [-1, 1], [0.55, 1])
              : 1;
          const ring =
            step.status === "done"
              ? explainer.success
              : step.status === "active"
                ? explainer.active
                : "#333";
          return (
            <React.Fragment key={i}>
              <Enter delay={i * 6}>
                <div
                  style={{
                    ...cardStyle,
                    width: 160,
                    minHeight: 140,
                    opacity: pulse,
                    boxShadow: `0 0 0 1px ${ring}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 999,
                      background:
                        step.status === "done"
                          ? explainer.success
                          : step.status === "active"
                            ? explainer.warning
                            : "#2a2a2a",
                      color: "#000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    {step.status === "done" ? "✓" : i + 1}
                  </div>
                  {step.logo ? <TechLogo id={step.logo} size={28} /> : null}
                  {step.label ? (
                    <span
                      style={{
                        fontFamily: "IBM Plex Mono, monospace",
                        fontSize: 12,
                        color: explainer.text,
                        opacity: 0.7,
                        textAlign: "center",
                      }}
                    >
                      {step.label}
                    </span>
                  ) : (
                    <div
                      style={{
                        width: 72,
                        height: 10,
                        borderRadius: 5,
                        background: "#2a2a2a",
                      }}
                    />
                  )}
                  {step.status === "active" ? (
                    <div
                      style={{
                        width: "80%",
                        height: 6,
                        borderRadius: 999,
                        background: "#222",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${interpolate(frame, [0, 60], [15, 85], {
                            extrapolateRight: "clamp",
                          })}%`,
                          height: "100%",
                          background: explainer.active,
                        }}
                      />
                    </div>
                  ) : null}
                </div>
              </Enter>
              {i < steps.length - 1 ? (
                <div style={{ width: 24, height: 2, background: "#333" }} />
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    </Stage>
  );
};
