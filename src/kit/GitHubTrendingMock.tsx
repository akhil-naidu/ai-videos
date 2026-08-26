import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Enter, Stage, browserChrome } from "./Stage";
import { fadeUp } from "./motion";

const DEVELOPERS = [
  { rank: 1, user: "Leonxlnx", repo: "taste-skill", highlight: true },
  { rank: 2, user: "user2", repo: "project-alpha", highlight: false },
  { rank: 3, user: "user3", repo: "cli-tool", highlight: false },
  { rank: 4, user: "user4", repo: "web-kit", highlight: false },
];

/** GitHub trending developers — browser mock (reference ~16s, not raw screenshot). */
export const GitHubTrendingMock: React.FC = () => {
  const frame = useCurrentFrame();
  const enter = fadeUp(frame, 0, 16);

  return (
    <Stage>
      <div
        style={{
          ...browserChrome,
          width: 920,
          ...enter,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            background: "#161616",
            borderBottom: "1px solid #2a2a2a",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#ff5f57" }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#febc2e" }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#28c840" }} />
          <div
            style={{
              flex: 1,
              margin: "0 12px",
              height: 28,
              borderRadius: 8,
              background: "#0a0a0a",
              border: "1px solid #2a2a2a",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
              gap: 8,
              fontSize: 12,
              color: "#8a8a8a",
            }}
          >
            <span style={{ opacity: 0.5 }}>🔒</span>
            github.com/trending/developers
          </div>
        </div>

        <div style={{ padding: "20px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <svg width={24} height={24} viewBox="0 0 24 24" fill="#fff">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.26.82-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.06 1.82 2.78 1.3 3.46.99 1.08-.68 1.08-.52 1.08-.32 0-.24-.04-.52-.08-.8-2.78-.6-5.7-1.4-5.7-6.24 0-1.38.5-2.5 1.32-3.38-.14-.32-.58-1.6.12-3.34 0 0 1.06-.34 3.48 1.3a12.1 12.1 0 013.48-.46c1.18 0 2.36.16 3.48.46 2.4-1.64 3.46-1.3 3.46-1.3.7 1.74.26 3.02.12 3.34.82.88 1.32 2 1.32 3.38 0 4.86-3.08 5.66-5.72 6.24.46.4.86 1.18.86 2.38v3.52c0 .32.22.7.84.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span style={{ fontSize: 20, fontWeight: 600, color: "#fff" }}>Trending</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <div style={{ display: "flex", gap: 20 }}>
              <span style={{ fontSize: 13, color: "#666" }}>Repositories</span>
              <span
                style={{
                  fontSize: 13,
                  color: "#fff",
                  borderBottom: `2px solid ${"#e06a4e"}`,
                  paddingBottom: 4,
                }}
              >
                Developers
              </span>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {["Language: Any", "This week"].map((f) => (
                <span
                  key={f}
                  style={{
                    fontSize: 12,
                    color: "#8a8a8a",
                    padding: "4px 10px",
                    borderRadius: 6,
                    border: "1px solid #2a2a2a",
                  }}
                >
                  {f} ▾
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {DEVELOPERS.map((dev, i) => {
              const rowT = interpolate(frame, [12 + i * 10, 24 + i * 10], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <div
                  key={dev.rank}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "12px 14px",
                    borderRadius: 8,
                    background: dev.highlight ? "#3d2b2b" : "transparent",
                    opacity: rowT,
                    transform: `translateY(${(1 - rowT) * 6}px)`,
                  }}
                >
                  <span style={{ width: 20, color: "#666", fontSize: 13 }}>{dev.rank}</span>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 999,
                      background: "#2a2a2a",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, color: "#fff", marginBottom: 4 }}>
                      {dev.user}
                    </div>
                    <div style={{ fontSize: 12, color: "#8a8a8a" }}>📖 {dev.repo}</div>
                  </div>
                  <div
                    style={{
                      padding: "6px 14px",
                      borderRadius: 6,
                      border: "1px solid #3a3a3a",
                      fontSize: 12,
                      color: "#ccc",
                    }}
                  >
                    Follow
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Stage>
  );
};
