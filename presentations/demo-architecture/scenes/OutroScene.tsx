import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { PageTransition, SkeletonScreen, theme } from "../../../src/kit";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const rise = interpolate(frame, [0, 24], [24, 0], {
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <PageTransition mode="enter">
      <AbsoluteFill>
        <SkeletonScreen layout="article" title="surface://docs" showChrome={false} />
        <AbsoluteFill
          style={{
            background:
              "linear-gradient(180deg, rgba(12,14,18,0.15) 0%, rgba(12,14,18,0.92) 55%, #0c0e12 100%)",
            justifyContent: "flex-end",
            padding: 72,
            fontFamily: theme.fontDisplay,
          }}
        >
          <div style={{ opacity, transform: `translateY(${rise}px)` }}>
            <div
              style={{
                fontFamily: theme.fontMono,
                color: theme.accentAmber,
                fontSize: 20,
                letterSpacing: 2,
                marginBottom: 12,
              }}
            >
              NEXT
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: 56,
                color: theme.text,
                fontWeight: 600,
                letterSpacing: -1,
              }}
            >
              Drop a script. Swap assets in Studio.
            </h2>
            <p
              style={{
                marginTop: 16,
                fontSize: 24,
                color: theme.textMuted,
                maxWidth: 680,
              }}
            >
              Presentations live under <code style={{ color: theme.accentCyan }}>presentations/</code>.
              Open the viewer gallery, then edit timelines in Remotion Studio.
            </p>
          </div>
        </AbsoluteFill>
      </AbsoluteFill>
    </PageTransition>
  );
};
