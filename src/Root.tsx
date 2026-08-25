import React from "react";
import { Composition } from "remotion";
import { FORMAT_PRESETS } from "./formats";
import {
  DemoArchitecture,
  DEMO_DURATION_IN_FRAMES,
} from "../presentations/demo-architecture/Main";
import { meta as demoMeta } from "../presentations/demo-architecture/meta";
import {
  DflowFlagship,
  DFLOW_DURATION_IN_FRAMES,
} from "../presentations/dflow-flagship/Main";
import { meta as dflowMeta } from "../presentations/dflow-flagship/meta";

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
      {dflowMeta.formats.map((key) => {
        const format = FORMAT_PRESETS[key];
        return (
          <Composition
            key={`${dflowMeta.id}-${key}`}
            id={`${dflowMeta.id}-${key}`}
            component={DflowFlagship}
            durationInFrames={DFLOW_DURATION_IN_FRAMES}
            fps={format.fps}
            width={format.width}
            height={format.height}
          />
        );
      })}
    </>
  );
};
