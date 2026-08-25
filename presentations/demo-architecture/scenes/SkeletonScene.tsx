import React from "react";
import { AbsoluteFill } from "remotion";
import { PageTransition, SkeletonScreen } from "../../../src/kit";

export const SkeletonScene: React.FC = () => {
  return (
    <PageTransition mode="enter">
      <AbsoluteFill>
        <SkeletonScreen layout="dashboard" title="surface://dashboard" />
      </AbsoluteFill>
    </PageTransition>
  );
};
