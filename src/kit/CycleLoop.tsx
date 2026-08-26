import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Enter, Stage, cardStyle } from "./Stage";
import { SparkIcon } from "./icons";
import { explainer } from "./theme";

type CycleLoopProps = {
  stages?: [string, string, string, string];
  label?: string;
  startPass?: number;
};

const SIZE = 560;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 176;
const CIRC = 2 * Math.PI * R;
const PERIOD = 150;
const ARC = 0.2;

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function formatHms(total: number) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = Math.floor(total % 60);
  return `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
}

/**
 * Circular Plan → Build → Check → Improve around a hub card.
 * Distinct from FlowLoop (linear checklist + retry arc).
 */
export const CycleLoop: React.FC<CycleLoopProps> = ({
  stages = ["Plan", "Build", "Check", "Improve"],
  label = "Agent",
  startPass = 12,
}) => {
  const frame = useCurrentFrame();
  const turns = interpolate(frame, [0, PERIOD], [0, 1], {
    extrapolateLeft: "clamp",
  });
  const frac = turns - Math.floor(turns);
  const pass = startPass + Math.floor(turns);
  const active = Math.floor(frac * 4) % 4;
  const heading = frac * 360 - 90;
  const lead = heading + ARC * 360;
  const rad = (lead * Math.PI) / 180;
  const headX = CX + R * Math.cos(rad);
  const headY = CY + R * Math.sin(rad);
  const seconds = 1 * 3600 + 11 * 60 + 56 + Math.floor(frame / 30);

  return (
    <Stage>
      <div
        style={{
          position: "relative",
          width: SIZE,
          height: SIZE,
        }}
      >
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          <circle
            cx={CX}
            cy={CY}
            r={R}
            fill="none"
            stroke="#2a2a2a"
            strokeWidth={2}
          />
          <circle
            cx={CX}
            cy={CY}
            r={R}
            fill="none"
            stroke={explainer.fail}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeDasharray={`${CIRC * ARC} ${CIRC}`}
            style={{
              rotate: `${heading}deg`,
              transformOrigin: `${CX}px ${CY}px`,
            }}
          />
        </svg>

        {stages.map((name, i) => {
          const a = (i / 4) * Math.PI * 2 - Math.PI / 2;
          const nx = CX + R * Math.cos(a);
          const ny = CY + R * Math.sin(a);
          const lx = CX + (R + 36) * Math.cos(a);
          const ly = CY + (R + 36) * Math.sin(a);
          const hot = i === active;
          return (
            <React.Fragment key={name}>
              <div
                style={{
                  position: "absolute",
                  left: nx - 6,
                  top: ny - 6,
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  background: hot ? explainer.fail : "#3a3a3a",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: lx,
                  top: ly,
                  translate: "-50% -50%",
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: 15,
                  color: hot ? explainer.text : "#8a8a8a",
                  letterSpacing: 0.2,
                }}
              >
                {name}
              </div>
            </React.Fragment>
          );
        })}

        <div
          style={{
            position: "absolute",
            left: headX - 5,
            top: headY - 5,
            width: 10,
            height: 10,
            borderRadius: 999,
            background: explainer.fail,
          }}
        />

        <Enter delay={0} duration={12}>
          <div
            style={{
              ...cardStyle,
              position: "absolute",
              left: CX - 118,
              top: CY - 78,
              width: 236,
              padding: "18px 20px 16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 14,
              }}
            >
              <SparkIcon size={18} />
              <span
                style={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: 14,
                  color: explainer.text,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 999,
                  background: explainer.success,
                  marginLeft: 4,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: 12,
                  color: "#7a7a7a",
                }}
              >
                running
              </span>
            </div>
            <div
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: 36,
                fontWeight: 600,
                color: explainer.text,
                letterSpacing: 0.5,
                lineHeight: 1.1,
              }}
            >
              {formatHms(seconds)}
            </div>
            <div
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: 13,
                color: "#7a7a7a",
                marginTop: 8,
              }}
            >
              pass {pass}
            </div>
          </div>
        </Enter>
      </div>
    </Stage>
  );
};
