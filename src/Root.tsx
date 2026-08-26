import React from "react";
import {
  Composition,
  type CalculateMetadataFunction,
} from "remotion";
import { FORMAT_PRESETS } from "./formats";
import {
  DemoArchitecture,
  DEMO_DURATION_IN_FRAMES,
} from "../presentations/demo-architecture/Main";
import { meta as demoMeta } from "../presentations/demo-architecture/meta";
import {
  AilabsUnlazyIntro,
  AILABS_UNLAZY_DURATION_IN_FRAMES,
} from "../presentations/ailabs-unlazy-intro/Main";
import { meta as unlazyMeta } from "../presentations/ailabs-unlazy-intro/meta";
import { getVoDurationSeconds } from "../presentations/ailabs-unlazy-intro/getVoDuration";

type UnlazyProps = { fps?: number };

const calculateUnlazyMetadata: CalculateMetadataFunction<UnlazyProps> = async ({
  props,
}) => {
  const durationInSeconds = await getVoDurationSeconds();
  const fps = props.fps ?? 30;
  return {
    durationInFrames: Math.ceil(durationInSeconds * fps),
  };
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {demoMeta.formats.map((key) => {
        const format = FORMAT_PRESETS[key];
        return (
          <Composition
            key={`${demoMeta.id}-${key}`}
            id={`${demoMeta.id}-${key}`}
            component={DemoArchitecture}
            durationInFrames={DEMO_DURATION_IN_FRAMES}
            fps={format.fps}
            width={format.width}
            height={format.height}
          />
        );
      })}
      {unlazyMeta.formats.map((key) => {
        const format = FORMAT_PRESETS[key];
        return (
          <Composition
            key={`${unlazyMeta.id}-${key}`}
            id={`${unlazyMeta.id}-${key}`}
            component={AilabsUnlazyIntro}
            durationInFrames={AILABS_UNLAZY_DURATION_IN_FRAMES}
            fps={format.fps}
            width={format.width}
            height={format.height}
            defaultProps={{ fps: format.fps }}
            calculateMetadata={calculateUnlazyMetadata}
          />
        );
      })}
    </>
  );
};
