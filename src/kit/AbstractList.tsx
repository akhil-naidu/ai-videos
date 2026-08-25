import React from "react";
import { Enter, Stage, cardStyle } from "./Stage";
import { explainer } from "./theme";
import { TechLogo, type TechId } from "./TechLogo";

export type AbstractRow = {
  tone?: "success" | "fail" | "warning" | "active" | "muted";
  logo?: TechId;
  /** Relative pill width 0-1 */
  width?: number;
};

type AbstractListProps = {
  rows: AbstractRow[];
  emphasizeIndex?: number;
};

export const AbstractList: React.FC<AbstractListProps> = ({
  rows,
  emphasizeIndex,
}) => (
  <Stage>
    <div style={{ width: 520, display: "flex", flexDirection: "column", gap: 14 }}>
      {rows.map((row, i) => {
        const color =
          row.tone === "success"
            ? explainer.success
            : row.tone === "fail"
              ? explainer.fail
              : row.tone === "warning"
                ? explainer.warning
                : row.tone === "active"
                  ? explainer.active
                  : "#3a3a3a";
        const hot = emphasizeIndex === i;
        return (
          <Enter key={i} delay={i * 7}>
            <div
              style={{
                ...cardStyle,
                padding: 16,
                display: "flex",
                alignItems: "center",
                gap: 16,
                boxShadow: hot ? `0 0 0 1px ${explainer.fail}` : undefined,
              }}
            >
              {row.logo ? (
                <TechLogo id={row.logo} size={26} />
              ) : (
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: color,
                  }}
                />
              )}
              <div
                style={{
                  flex: 1,
                  height: 14,
                  borderRadius: 7,
                  width: `${(row.width ?? 0.7) * 100}%`,
                  maxWidth: `${(row.width ?? 0.7) * 100}%`,
                  background: hot ? explainer.fail : "#2a2a2a",
                  opacity: hot ? 0.9 : 1,
                }}
              />
            </div>
          </Enter>
        );
      })}
    </div>
  </Stage>
);
