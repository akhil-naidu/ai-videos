import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { theme } from "./theme";

export type SkeletonLayout = "dashboard" | "article" | "split";

type SkeletonScreenProps = {
  layout?: SkeletonLayout;
  title?: string;
  showChrome?: boolean;
};

const pulseOpacity = (frame: number, offset: number) =>
  interpolate(Math.sin((frame + offset) / 12), [-1, 1], [0.45, 0.9]);

const Block: React.FC<{
  width: number | string;
  height: number;
  opacity: number;
  radius?: number;
}> = ({ width, height, opacity, radius = 8 }) => (
  <div
    style={{
      width,
      height,
      borderRadius: radius,
      background: `linear-gradient(90deg, ${theme.skeleton}, ${theme.skeletonHighlight}, ${theme.skeleton})`,
      opacity,
    }}
  />
);

export const SkeletonScreen: React.FC<SkeletonScreenProps> = ({
  layout = "dashboard",
  title = "Loading surface",
  showChrome = true,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isPortrait = height > width;
  const pad = isPortrait ? 48 : 64;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.bg,
        fontFamily: theme.fontDisplay,
        color: theme.text,
        padding: pad,
      }}
    >
      {showChrome ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 28,
            opacity: interpolate(frame, [0, 12], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: theme.accentCyan,
              boxShadow: `0 0 12px ${theme.accentCyan}`,
            }}
          />
          <span
            style={{
              fontFamily: theme.fontMono,
              fontSize: isPortrait ? 22 : 28,
              letterSpacing: 1,
              color: theme.textMuted,
            }}
          >
            {title}
          </span>
        </div>
      ) : null}

      {layout === "dashboard" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Block width="40%" height={isPortrait ? 36 : 44} opacity={pulseOpacity(frame, 0)} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isPortrait ? "1fr" : "1fr 1fr 1fr",
              gap: 16,
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  background: theme.bgElevated,
                  border: `1px solid ${theme.border}`,
                  borderRadius: 12,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  minHeight: isPortrait ? 140 : 180,
                }}
              >
                <Block width="55%" height={18} opacity={pulseOpacity(frame, i * 8)} />
                <Block width="100%" height={isPortrait ? 72 : 96} opacity={pulseOpacity(frame, i * 8 + 4)} />
              </div>
            ))}
          </div>
          <Block width="100%" height={isPortrait ? 120 : 160} opacity={pulseOpacity(frame, 20)} />
        </div>
      ) : null}

      {layout === "article" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 900 }}>
          <Block width="70%" height={48} opacity={pulseOpacity(frame, 0)} />
          <Block width="100%" height={16} opacity={pulseOpacity(frame, 4)} />
          <Block width="92%" height={16} opacity={pulseOpacity(frame, 8)} />
          <Block width="88%" height={16} opacity={pulseOpacity(frame, 12)} />
          <Block width="100%" height={220} opacity={pulseOpacity(frame, 16)} radius={12} />
        </div>
      ) : null}

      {layout === "split" ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isPortrait ? "1fr" : "1fr 1fr",
            gap: 24,
            height: "80%",
          }}
        >
          <div
            style={{
              background: theme.bgElevated,
              border: `1px solid ${theme.border}`,
              borderRadius: 14,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <Block width="50%" height={22} opacity={pulseOpacity(frame, 0)} />
            <Block width="100%" height={14} opacity={pulseOpacity(frame, 6)} />
            <Block width="90%" height={14} opacity={pulseOpacity(frame, 10)} />
            <Block width="100%" height={160} opacity={pulseOpacity(frame, 14)} />
          </div>
          <div
            style={{
              background: theme.bgMuted,
              border: `1px solid ${theme.border}`,
              borderRadius: 14,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <Block width="45%" height={22} opacity={pulseOpacity(frame, 4)} />
            <Block width="100%" height={14} opacity={pulseOpacity(frame, 8)} />
            <Block width="80%" height={14} opacity={pulseOpacity(frame, 12)} />
            <Block width="100%" height={160} opacity={pulseOpacity(frame, 18)} />
          </div>
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
