import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Enter, Stage, cardStyle } from "./Stage";
import { FlowConnector, RetryArc } from "./FlowConnector";
import { SparkIcon, EyeIcon } from "./icons";
import { explainer } from "./theme";
import { easeOut } from "./motion";

type FlowLoopProps = {
  /** fail = X + retry arc; pass = all checks + green done */
  variant?: "fail" | "pass";
  /** @deprecated ignored — kept for legacy decks */
  phase?: number;
};

type RowState = "empty" | "ok" | "fail";

export const FlowLoop: React.FC<FlowLoopProps> = ({ variant = "fail" }) => {
  const frame = useCurrentFrame();
  const isPass = variant === "pass";

  const rowStates: RowState[] = isPass
    ? ["ok", "ok", "ok"]
    : frame < 90
      ? ["ok", "empty", "empty"]
      : ["ok", "fail", "fail"];

  const showEnd = frame >= (isPass ? 8 : 36);
  const showFailNode = !isPass && frame >= 90;
  const showRetry = !isPass && frame >= 120;

  const rowReveal = (i: number) =>
    interpolate(frame, [18 + i * 10, 28 + i * 10], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeOut,
    });

  const passMorph = (i: number) => {
    if (!isPass) return rowReveal(i);
    return interpolate(frame, [20 + i * 14, 34 + i * 14], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeOut,
    });
  };

  return (
    <Stage>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          position: "relative",
          paddingBottom: isPass ? 0 : 48,
        }}
      >
        <Enter delay={0} duration={12}>
          <div
            style={{
              ...cardStyle,
              width: 96,
              height: 96,
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SparkIcon size={40} />
          </div>
        </Enter>

        <FlowConnector drawStart={8} drawDuration={18} />

        <Enter delay={14} duration={12}>
          <div style={{ ...cardStyle, width: 240, padding: "18px 20px" }}>
            {rowStates.map((state, i) => {
              const failFlip =
                !isPass && i > 0
                  ? interpolate(frame, [88, 102], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    })
                  : 0;
              const effectiveState: RowState =
                !isPass && i > 0 && failFlip > 0.5 ? "fail" : state;
              const t = passMorph(i);
              const displayState: RowState = isPass
                ? t > 0.5
                  ? "ok"
                  : effectiveState
                : effectiveState;
              const showRow = isPass ? t > 0 : rowReveal(i) > 0;

              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: i < 2 ? 14 : 0,
                    opacity: showRow ? 1 : 0,
                    transform: `translateX(${(1 - (isPass ? t : rowReveal(i))) * 6}px)`,
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background:
                        displayState === "ok"
                          ? explainer.success
                          : displayState === "fail"
                            ? explainer.fail
                            : "#2a2a2a",
                      border:
                        displayState === "empty"
                          ? "1.5px solid #3a3a3a"
                          : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: displayState === "empty" ? "transparent" : "#000",
                      fontSize: 13,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {displayState === "ok"
                      ? "✓"
                      : displayState === "fail"
                        ? "×"
                        : ""}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      height: 12,
                      borderRadius: 6,
                      background:
                        displayState === "fail"
                          ? explainer.fail
                          : displayState === "ok"
                            ? "#3a3a3a"
                            : "#2a2a2a",
                      opacity: displayState === "fail" ? 0.55 : 1,
                      maxWidth:
                        i === 0 ? "72%" : i === 1 ? "58%" : "64%",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </Enter>

        {showEnd ? (
          <>
            <FlowConnector
              drawStart={isPass ? 0 : showFailNode ? 90 : 30}
              drawDuration={16}
            />
            <Enter
              delay={isPass ? 4 : showFailNode ? 94 : 38}
              duration={12}
            >
              <div
                style={{
                  ...cardStyle,
                  width: 96,
                  height: 96,
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isPass ? (
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 999,
                      border: `2.5px solid ${explainer.success}`,
                      color: explainer.success,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 26,
                    }}
                  >
                    ✓
                  </div>
                ) : showFailNode ? (
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 999,
                      border: `2.5px solid ${explainer.fail}`,
                      color: explainer.fail,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 26,
                    }}
                  >
                    ×
                  </div>
                ) : (
                  <EyeIcon size={36} color="#b0b0b0" />
                )}
              </div>
            </Enter>
          </>
        ) : null}

        {showRetry ? <RetryArc drawStart={0} drawDuration={40} /> : null}
      </div>
    </Stage>
  );
};
