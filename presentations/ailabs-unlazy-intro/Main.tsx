import React from "react";
import { AbsoluteFill, Series, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { loadFont } from "@remotion/google-fonts/IBMPlexMono";
import { explainer } from "../../src/kit";
import { VO_PATH } from "./meta";
import { SCENES, TOTAL_DURATION } from "./scenes";

loadFont("normal", { weights: ["400", "500", "600"], subsets: ["latin"] });

export { TOTAL_DURATION as AILABS_UNLAZY_DURATION_IN_FRAMES };

export const AilabsUnlazyIntro: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: explainer.bg }}>
      <Audio src={staticFile(VO_PATH)} />
      <Series>
        {SCENES.map((scene) => (
          <Series.Sequence
            key={scene.id}
            durationInFrames={scene.durationInFrames}
          >
            <scene.Component />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
};
