import React from "react";
import { Enter, Stage } from "./Stage";
import { explainer } from "./theme";

type SlashChipProps = {
  command?: string;
  subtitle?: string;
};

/** Yellow slash-command chip — titles / cold open / close. */
export const SlashChip: React.FC<SlashChipProps> = ({
  command = "/dflow",
  subtitle,
}) => (
  <Stage>
    <Enter>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: explainer.chip,
            color: "#111",
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: 36,
            fontWeight: 600,
            padding: "14px 28px",
            borderRadius: 14,
            letterSpacing: -0.5,
          }}
        >
          {command}
        </div>
        {subtitle ? (
          <div
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 18,
              color: explainer.text,
              opacity: 0.55,
              letterSpacing: 1,
            }}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
    </Enter>
  </Stage>
);
