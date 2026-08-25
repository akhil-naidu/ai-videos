import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

/**
 * Lightweight SPA-style wipe used as a TransitionSeries presentation overlay
 * or as a scene enter/exit wrapper. Prefer @remotion/transitions fade/slide
 * for crossfades; use this when you need a website-route feel on a single scene.
 */
export type PageTransitionMode = "enter" | "exit" | "none";

type PageTransitionProps = {
  children: React.ReactNode;
  mode?: PageTransitionMode;
  durationInFrames?: number;
};

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  mode = "enter",
  durationInFrames = 18,
}) => {
  const frame = useCurrentFrame();
  const { width } = useVideoConfig();

  if (mode === "none") {
    return <AbsoluteFill>{children}</AbsoluteFill>;
  }

  const t =
    mode === "enter"
      ? interpolate(frame, [0, durationInFrames], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : interpolate(frame, [0, durationInFrames], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

  const x = (1 - t) * (mode === "enter" ? width * 0.08 : -width * 0.08);

  return (
    <AbsoluteFill
      style={{
        opacity: t,
        transform: `translateX(${x}px)`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
