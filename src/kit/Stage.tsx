import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { explainer } from "./theme";

/** Centered stage — AI LABS negative space around a mid-canvas idea. */
export const Stage: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <AbsoluteFill
    style={{
      backgroundColor: explainer.bg,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: 1280,
        padding: "0 64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  </AbsoluteFill>
);

type EnterProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
};

export const Enter: React.FC<EnterProps> = ({
  children,
  delay = 0,
  duration = 18,
}) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  return (
    <div
      style={{
        opacity: t,
        transform: `translateY(${(1 - t) * 16}px)`,
      }}
    >
      {children}
    </div>
  );
};

export const cardStyle: React.CSSProperties = {
  background: explainer.bgElevated,
  borderRadius: 16,
  padding: 24,
};
