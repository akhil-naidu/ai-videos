import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { PageTransition, theme } from "../../../src/kit";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <PageTransition mode="enter">
      <AbsoluteFill
        style={{
          backgroundColor: theme.bg,
          justifyContent: "center",
          alignItems: "center",
          fontFamily: theme.fontDisplay,
          color: theme.text,
        }}
      >
        <div style={{ opacity, textAlign: "center", padding: 48, maxWidth: 1100 }}>
          <div
            style={{
              fontFamily: theme.fontMono,
              color: theme.accentCyan,
              fontSize: 22,
              letterSpacing: 3,
              marginBottom: 20,
              textTransform: "uppercase",
            }}
          >
            ai-videos / kit
          </div>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 600,
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: -1.5,
            }}
          >
            Architecture that feels
            <br />
            like a live product.
          </h1>
          <p
            style={{
              marginTop: 28,
              fontSize: 28,
              color: theme.textMuted,
              maxWidth: 720,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Skeletons, wiring, and page transitions — assembled in Remotion.
          </p>
        </div>
      </AbsoluteFill>
    </PageTransition>
  );
};
