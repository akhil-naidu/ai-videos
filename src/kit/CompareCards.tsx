import React from "react";
import { Enter, Stage, cardStyle } from "./Stage";
import { explainer } from "./theme";
import { TechLogo, type TechId } from "./TechLogo";

export type CompareCard = {
  label?: string;
  tone?: "default" | "success" | "fail" | "warning" | "active";
  /** Pill bars instead of paragraphs */
  bars?: number[];
  logos?: TechId[];
  fill?: number;
};

type CompareCardsProps = {
  cards: CompareCard[];
  delay?: number;
};

const toneColor = (tone: CompareCard["tone"]) => {
  switch (tone) {
    case "success":
      return explainer.success;
    case "fail":
      return explainer.fail;
    case "warning":
      return explainer.warning;
    case "active":
      return explainer.active;
    default:
      return "transparent";
  }
};

export const CompareCards: React.FC<CompareCardsProps> = ({
  cards,
  delay = 0,
}) => (
  <Stage>
    <div
      style={{
        display: "flex",
        gap: 28,
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      {cards.map((card, i) => (
        <Enter key={i} delay={delay + i * 8}>
          <div
            style={{
              ...cardStyle,
              width: 280,
              minHeight: 200,
              boxShadow:
                card.tone && card.tone !== "default"
                  ? `0 0 0 1px ${toneColor(card.tone)}66`
                  : undefined,
            }}
          >
            {card.label ? (
              <div
                style={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: 13,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: toneColor(card.tone) || explainer.text,
                  opacity: 0.85,
                  marginBottom: 16,
                }}
              >
                {card.label}
              </div>
            ) : null}
            <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
              {(card.logos ?? []).map((id) => (
                <TechLogo key={id} id={id} size={28} />
              ))}
            </div>
            {(card.bars ?? [0.9, 0.65, 0.5]).map((w, bi) => (
              <div
                key={bi}
                style={{
                  height: 12,
                  width: `${w * 100}%`,
                  borderRadius: 6,
                  background: "#2a2a2a",
                  marginBottom: 10,
                }}
              />
            ))}
            {typeof card.fill === "number" ? (
              <div
                style={{
                  marginTop: 16,
                  height: 8,
                  borderRadius: 999,
                  background: "#222",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${card.fill * 100}%`,
                    height: "100%",
                    background: toneColor(card.tone) || explainer.active,
                  }}
                />
              </div>
            ) : null}
          </div>
        </Enter>
      ))}
    </div>
  </Stage>
);
