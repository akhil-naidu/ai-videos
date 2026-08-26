import React from "react";
import { Enter, Stage, cardStyle } from "./Stage";
import { explainer } from "./theme";

/** Spark → eye icon pair (reference transition beat). */
export const IconPair: React.FC = () => (
  <Stage>
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <Enter delay={0}>
        <div
          style={{
            ...cardStyle,
            width: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            color: explainer.fail,
          }}
        >
          ✦
        </div>
      </Enter>
      <div style={{ width: 48, height: 2, background: "#333" }} />
      <Enter delay={10}>
        <div
          style={{
            ...cardStyle,
            width: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            color: explainer.text,
            opacity: 0.7,
          }}
        >
          ◉
        </div>
      </Enter>
    </div>
  </Stage>
);
