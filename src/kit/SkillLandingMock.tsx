import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Stage, browserChrome } from "./Stage";
import { fadeUp } from "./motion";

const SKILLS = [
  { name: "taste-skill", tag: "V2 EXPERIMENTAL", desc: "The flagship taste system for Claude." },
  { name: "taste-skill-v1", tag: "LEGACY", desc: "Original taste-skill for older workflows." },
  { name: "gpt-tasteskill", tag: "GPT/CODEX", desc: "Taste skill tuned for GPT and Codex." },
];

/** Taste Skill landing — reference product mock (~22s). */
export const SkillLandingMock: React.FC = () => {
  const frame = useCurrentFrame();
  const enter = fadeUp(frame, 0, 18);

  return (
    <Stage>
      <div
        style={{
          ...browserChrome,
          width: 1000,
          background: "#f4f1ea",
          border: "1px solid #ddd",
          ...enter,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 28px",
            borderBottom: "1px solid #e8e4db",
            background: "#f4f1ea",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "#111",
              }}
            />
            <span style={{ fontSize: 15, fontWeight: 600, color: "#111" }}>
              Taste Skill
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              fontSize: 13,
              color: "#666",
              background: "#fff",
              padding: "8px 20px",
              borderRadius: 999,
              border: "1px solid #e5e2d9",
            }}
          >
            {["Docs", "Changelog", "Blog", "Guide"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              background: "#111",
              color: "#fff",
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            ★ 78,428
          </div>
        </div>

        <div style={{ padding: "40px 48px 48px", textAlign: "center" }}>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 600,
              color: "#111",
              margin: "0 0 8px",
              fontFamily: "Georgia, serif",
            }}
          >
            Current <em style={{ fontStyle: "italic" }}>skills.</em>
          </h1>
          <p style={{ fontSize: 15, color: "#666", marginBottom: 36 }}>
            Pick the right skill for the job.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            {SKILLS.map((skill, i) => {
              const t = interpolate(frame, [14 + i * 10, 28 + i * 10], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <div
                  key={skill.name}
                  style={{
                    width: 220,
                    padding: 20,
                    borderRadius: 14,
                    background: "#fff",
                    border: "1px solid #e5e2d9",
                    opacity: t,
                    transform: `translateY(${(1 - t) * 12}px)`,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "#111",
                      marginBottom: 14,
                    }}
                  />
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#111",
                      marginBottom: 4,
                    }}
                  >
                    {skill.name}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: 1,
                      color: "#999",
                      marginBottom: 10,
                    }}
                  >
                    {skill.tag}
                  </div>
                  <div style={{ fontSize: 12, color: "#666", lineHeight: 1.4 }}>
                    {skill.desc}
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
