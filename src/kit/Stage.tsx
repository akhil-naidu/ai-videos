import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { fadeUp } from "./motion";
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
  duration = 14,
}) => {
  const frame = useCurrentFrame();
  const style = fadeUp(frame, delay, duration);
  return <div style={style}>{children}</div>;
};

export const cardStyle: React.CSSProperties = {
  background: explainer.bgElevated,
  borderRadius: 14,
  padding: 24,
  border: "1px solid #2a2a2a",
  boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
};

export const browserChrome: React.CSSProperties = {
  borderRadius: 14,
  overflow: "hidden",
  border: "1px solid #2a2a2a",
  boxShadow: "0 24px 80px rgba(0,0,0,0.55)",
  background: "#0d1117",
};
