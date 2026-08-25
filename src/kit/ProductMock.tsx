import React from "react";
import { Enter, Stage, cardStyle } from "./Stage";
import { explainer } from "./theme";
import { TechLogo, type TechId } from "./TechLogo";

type ProductMockProps = {
  variant?: "landing" | "wizard" | "dashboard";
  logos?: TechId[];
};

export const ProductMock: React.FC<ProductMockProps> = ({
  variant = "landing",
  logos = [],
}) => (
  <Stage>
    <Enter>
      <div
        style={{
          ...cardStyle,
          width: 720,
          padding: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 16px",
            borderBottom: "1px solid #222",
            background: "#111",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#ff5f57" }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#febc2e" }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#28c840" }} />
          <div
            style={{
              flex: 1,
              marginLeft: 12,
              height: 18,
              borderRadius: 6,
              background: "#1a1a1a",
            }}
          />
        </div>

        {variant === "landing" ? (
          <div style={{ padding: 36 }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {logos.map((id) => (
                <TechLogo key={id} id={id} size={24} />
              ))}
              <div style={{ width: 24, height: 24, borderRadius: 6, background: explainer.warning }} />
              <div style={{ flex: 1 }} />
              {[0, 1, 2, 3].map((i) => (
                <div key={i} style={{ width: 48, height: 8, borderRadius: 4, background: "#2a2a2a" }} />
              ))}
            </div>
            <div style={{ width: "55%", height: 18, borderRadius: 6, background: "#2a2a2a", marginBottom: 10 }} />
            <div style={{ width: "40%", height: 14, borderRadius: 6, background: "#2a2a2a", marginBottom: 22 }} />
            <div
              style={{
                width: 160,
                height: 40,
                borderRadius: 10,
                background: explainer.warning,
                marginBottom: 28,
              }}
            />
            <div style={{ display: "flex", gap: 14 }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: 110,
                    borderRadius: 12,
                    background: "#1a1a1a",
                    border: "1px solid #222",
                  }}
                />
              ))}
            </div>
          </div>
        ) : null}

        {variant === "wizard" ? (
          <div style={{ display: "flex", minHeight: 280 }}>
            <div style={{ width: 200, borderRight: "1px solid #222", padding: 20 }}>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 999,
                      background: i < 3 ? explainer.success : explainer.warning,
                      color: "#000",
                      fontSize: 12,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {i < 3 ? "✓" : "4"}
                  </div>
                  <div style={{ flex: 1, height: 10, borderRadius: 5, background: "#2a2a2a" }} />
                </div>
              ))}
            </div>
            <div style={{ flex: 1, padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", gap: 12 }}>
                {logos.map((id) => (
                  <TechLogo key={id} id={id} size={36} />
                ))}
              </div>
              <div style={{ width: "60%", height: 14, borderRadius: 6, background: "#2a2a2a" }} />
              <div style={{ width: "100%", height: 10, borderRadius: 999, background: "#222", overflow: "hidden" }}>
                <div style={{ width: "70%", height: "100%", background: explainer.active }} />
              </div>
              <div style={{ width: 120, height: 36, borderRadius: 8, background: explainer.warning, marginTop: 8 }} />
            </div>
          </div>
        ) : null}

        {variant === "dashboard" ? (
          <div style={{ padding: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ width: 160, height: 14, borderRadius: 6, background: "#2a2a2a" }} />
              <div style={{ width: 72, height: 22, borderRadius: 999, background: explainer.success }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {(logos.length
                ? logos
                : (["docker", "redis", "postgresql", "nginx", "github", "kubernetes", "traefik", "linux"] as TechId[])
              )
                .slice(0, 8)
                .map((id, i) => (
                  <div
                    key={`${id}-${i}`}
                    style={{
                      height: 88,
                      borderRadius: 12,
                      background: "#1a1a1a",
                      border: "1px solid #222",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TechLogo id={id} size={28} />
                  </div>
                ))}
            </div>
          </div>
        ) : null}
      </div>
    </Enter>
  </Stage>
);
