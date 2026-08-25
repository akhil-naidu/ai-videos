import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { PageTransition, SkeletonScreen, WireConnector, theme } from "../../../src/kit";

export const WiringScene: React.FC = () => {
  const { width, height } = useVideoConfig();
  const isPortrait = height > width;

  const a = { x: width * 0.22, y: height * (isPortrait ? 0.35 : 0.42) };
  const b = { x: width * 0.5, y: height * (isPortrait ? 0.55 : 0.38) };
  const c = { x: width * 0.78, y: height * (isPortrait ? 0.4 : 0.55) };

  return (
    <PageTransition mode="enter">
      <AbsoluteFill>
        <SkeletonScreen layout="split" title="surface://graph" showChrome />
        <AbsoluteFill style={{ pointerEvents: "none" }}>
          <WireConnector
            from={a}
            to={b}
            color={theme.accentCyan}
            delay={8}
            label="ingest"
          />
          <WireConnector
            from={b}
            to={c}
            color={theme.accentAmber}
            delay={22}
            label="render"
          />
        </AbsoluteFill>
      </AbsoluteFill>
    </PageTransition>
  );
};
