import React from "react";
import { Enter, Stage, cardStyle } from "./Stage";
import { BurstSpinner } from "./LoadingSpinner";
import { explainer } from "./theme";

/** Prompt chip + burst spinner — reference ~3s transition. */
export const PromptSpark: React.FC<{ prompt?: string }> = ({
  prompt = "> add the checkout page",
}) => (
  <Stage>
    <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
      <Enter delay={0} duration={12}>
        <div
          style={{
            ...cardStyle,
            padding: "14px 22px",
            borderRadius: 999,
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: 14,
            color: "#b8b8b8",
            whiteSpace: "nowrap",
          }}
        >
          {prompt}
        </div>
      </Enter>
      <Enter delay={6} duration={12}>
        <div
          style={{
            ...cardStyle,
            width: 88,
            height: 88,
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BurstSpinner size={48} color={explainer.fail} />
        </div>
      </Enter>
    </div>
  </Stage>
);
