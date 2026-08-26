import { Easing, interpolate } from "remotion";

export const easeOut = Easing.bezier(0.16, 1, 0.3, 1);
export const easeInOut = Easing.bezier(0.4, 0, 0.2, 1);

export function fadeUp(
  frame: number,
  delay = 0,
  duration = 14,
): { opacity: number; transform: string } {
  const t = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  return {
    opacity: t,
    transform: `translateY(${(1 - t) * 8}px) scale(${0.96 + t * 0.04})`,
  };
}

/** Stroke-dashoffset for path draw-on. Returns offset (0 = fully drawn). */
export function drawProgress(
  frame: number,
  start: number,
  duration: number,
  length: number,
): number {
  const t = interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeInOut,
  });
  return length * (1 - t);
}

/** Continuous rotation — no modulo snap at 360. */
export function spinDegrees(frame: number, speed = 6): number {
  return frame * speed;
}
