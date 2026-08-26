import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { explainer } from "./theme";

export type CursorPoint = { x: number; y: number };

export type SyntheticCursorProps = {
  from: CursorPoint;
  to: CursorPoint;
  /** optional cubic control; default a high arch between from/to */
  control?: CursorPoint;
  delay?: number;
  durationInFrames?: number;
  /** local frame for click squash; default duration - 4 */
  clickAt?: number;
  color?: string;
};

/** Cubic Bézier (one control is converted from a quadratic peak). */
const cubic = (p0: number, c1: number, c2: number, p3: number, t: number) => {
  const u = 1 - t;
  return u * u * u * p0 + 3 * u * u * t * c1 + 3 * u * t * t * c2 + t * t * t * p3;
};

const highArch = (from: CursorPoint, to: CursorPoint): CursorPoint => {
  const dist = Math.hypot(to.x - from.x, to.y - from.y);
  return {
    x: (from.x + to.x) / 2,
    y: Math.min(from.y, to.y) - Math.max(48, dist * 0.36),
  };
};

/** Quadratic peak → cubic controls (identical curve, Studio-friendly cubic). */
const toCubicControls = (from: CursorPoint, peak: CursorPoint, to: CursorPoint) => ({
  c1: {
    x: from.x + (2 / 3) * (peak.x - from.x),
    y: from.y + (2 / 3) * (peak.y - from.y),
  },
  c2: {
    x: to.x + (2 / 3) * (peak.x - to.x),
    y: to.y + (2 / 3) * (peak.y - to.y),
  },
});

/**
 * Overlay cursor — perfect arc, scale-down on click, no human jitter.
 * Sit this inside a positioned parent (ProductMock / ProofScreencap).
 */
export const SyntheticCursor: React.FC<SyntheticCursorProps> = ({
  from,
  to,
  control,
  delay = 0,
  durationInFrames = 36,
  clickAt,
  color = explainer.text,
}) => {
  const frame = useCurrentFrame();
  const peak = control ?? highArch(from, to);
  const { c1, c2 } = toCubicControls(from, peak, to);
  const clickFrame = clickAt ?? durationInFrames - 4;
  const t = interpolate(frame, [delay, delay + durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const x = cubic(from.x, c1.x, c2.x, to.x, t);
  const y = cubic(from.y, c1.y, c2.y, to.y, t);

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 22,
        height: 28,
        pointerEvents: "none",
        zIndex: 40,
        translate: `${x}px ${y}px`,
        scale: interpolate(
          frame - delay,
          [clickFrame, clickFrame + 3, clickFrame + 7],
          [1, 0.78, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          },
        ),
        transformOrigin: "0px 0px",
        filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.45))",
      }}
    >
      <svg width={22} height={28} viewBox="0 0 22 28" aria-hidden>
        <path
          d="M1.1 1.1 L1.1 21.8 6.5 16.6 10.8 26.6 14.4 25.1 10.1 15.2 17.8 15.2 Z"
          fill={color}
          stroke={explainer.bg}
          strokeWidth={1.15}
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

/** Percentage-positioned cursor for proof stills (parent must be position:relative). */
export const StaticCursor: React.FC<{
  x: number;
  y: number;
  clickAt?: number;
}> = ({ x, y, clickAt }) => {
  const frame = useCurrentFrame();
  const click =
    clickAt != null
      ? interpolate(frame, [clickAt, clickAt + 4], [1, 0.88], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x * 100}%`,
        top: `${y * 100}%`,
        width: 22,
        height: 28,
        transform: `translate(-2px, -2px) scale(${click})`,
        pointerEvents: "none",
        zIndex: 40,
        filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.45))",
      }}
    >
      <svg width={22} height={28} viewBox="0 0 22 28" aria-hidden>
        <path
          d="M1.1 1.1 L1.1 21.8 6.5 16.6 10.8 26.6 14.4 25.1 10.1 15.2 17.8 15.2 Z"
          fill={explainer.text}
          stroke={explainer.bg}
          strokeWidth={1.15}
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
