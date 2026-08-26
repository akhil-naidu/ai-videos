import React from "react";
import {
  FlowLoop,
  GitHubTrendingMock,
  ParallelFanOut,
  ProofScreencap,
  PromptSpark,
  SkillLandingMock,
  Stage,
  WorkingCompare,
} from "../../src/kit";

export type SceneDef = {
  id: string;
  durationInFrames: number;
  Component: React.FC;
};

const HoldScene: React.FC = () => (
  <Stage>
    <div style={{ opacity: 0 }} />
  </Stage>
);

export const SCENES: SceneDef[] = [
  {
    id: "compare-working",
    durationInFrames: 90,
    Component: () => <WorkingCompare />,
  },
  {
    id: "prompt-spark",
    durationInFrames: 60,
    Component: () => <PromptSpark />,
  },
  {
    id: "flow-fail",
    durationInFrames: 240,
    Component: () => <FlowLoop variant="fail" />,
  },
  {
    id: "flow-pass",
    durationInFrames: 180,
    Component: () => <FlowLoop variant="pass" />,
  },
  {
    id: "github-trending",
    durationInFrames: 120,
    Component: () => <GitHubTrendingMock />,
  },
  {
    id: "skill-landing",
    durationInFrames: 180,
    Component: () => <SkillLandingMock />,
  },
  {
    id: "github-unlazy",
    durationInFrames: 150,
    Component: () => (
      <ProofScreencap
        src="ailabs-unlazy-intro/github-unlazy.jpg"
        cursorX={0.42}
        cursorY={0.22}
        framed={false}
      />
    ),
  },
  {
    id: "parallel-fanout",
    durationInFrames: 240,
    Component: () => <ParallelFanOut />,
  },
  {
    id: "hold",
    durationInFrames: 91,
    Component: HoldScene,
  },
];

export const TOTAL_DURATION = SCENES.reduce(
  (sum, s) => sum + s.durationInFrames,
  0,
);
