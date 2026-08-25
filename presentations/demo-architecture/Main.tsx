import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadMono } from "@remotion/google-fonts/IBMPlexMono";
import { meta } from "./meta";
import { IntroScene } from "./scenes/IntroScene";
import { SkeletonScene } from "./scenes/SkeletonScene";
import { WiringScene } from "./scenes/WiringScene";
import { OutroScene } from "./scenes/OutroScene";
import { theme } from "../../src/kit";

const { fontFamily: displayFont } = loadFont("normal", {
  weights: ["500", "600"],
  subsets: ["latin"],
});
const { fontFamily: monoFont } = loadMono("normal", {
  weights: ["400", "500"],
  subsets: ["latin"],
});

const scene = meta.sceneDurationInFrames;
const transition = meta.transitionDurationInFrames;

/** Duration accounting for TransitionSeries overlap (3 transitions). */
export const DEMO_DURATION_IN_FRAMES = scene * 4 - transition * 3;

export const DemoArchitecture: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.bg,
        fontFamily: displayFont,
        // Expose mono for descendants that use theme.fontMono via CSS inherit tricks
        ["--font-mono" as string]: monoFont,
      }}
    >
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={scene}>
          <IntroScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: transition })}
        />
        <TransitionSeries.Sequence durationInFrames={scene}>
          <SkeletonScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: transition })}
        />
        <TransitionSeries.Sequence durationInFrames={scene}>
          <WiringScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: transition })}
        />
        <TransitionSeries.Sequence durationInFrames={scene}>
          <OutroScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
