import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { loadFont } from "@remotion/google-fonts/IBMPlexMono";
import { explainer } from "../../src/kit";
import { SCENES, TOTAL_DURATION } from "./scenes";

loadFont("normal", { weights: ["400", "500", "600"], subsets: ["latin"] });

export { TOTAL_DURATION as DFLOW_DURATION_IN_FRAMES };

export const DflowFlagship: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: explainer.bg }}>
      {/* Drop VO at public/dflow-flagship/voiceover.mp3 later */}
      <Series>
        {SCENES.map((scene) => (
          <Series.Sequence key={scene.id} durationInFrames={scene.durationInFrames}>
            <scene.Component />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
};
