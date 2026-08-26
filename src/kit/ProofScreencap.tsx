import React from "react";
import {
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { Stage, browserChrome } from "./Stage";
import { StaticCursor } from "./SyntheticCursor";
import { fadeUp } from "./motion";

type ProofScreencapProps = {
  src: string;
  /** Show synthetic cursor */
  cursor?: boolean;
  cursorX?: number;
  cursorY?: number;
  /** macOS browser chrome wrapper */
  framed?: boolean;
};

/**
 * Real screenshot in a rounded frame — do not fake GitHub/X in HTML.
 */
export const ProofScreencap: React.FC<ProofScreencapProps> = ({
  src,
  cursor = true,
  cursorX = 0.42,
  cursorY = 0.38,
  framed = true,
}) => {
  const frame = useCurrentFrame();
  const enter = fadeUp(frame, 0, 16);
  const scale = interpolate(frame, [0, 16], [0.98, 1], {
    extrapolateRight: "clamp",
    easing: (t) => 1 - (1 - t) ** 3,
  });

  const imageBlock = (
    <div
      style={{
        position: "relative",
        transform: `scale(${scale})`,
      }}
    >
      <Img
        src={staticFile(src)}
        style={{ width: "100%", display: "block" }}
      />
      {cursor ? (
        <StaticCursor x={cursorX} y={cursorY} />
      ) : null}
    </div>
  );

  return (
    <Stage>
      <div style={{ ...enter, maxWidth: 1100, width: "100%" }}>
        {framed ? (
          <div style={{ ...browserChrome }}>
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
            </div>
            {imageBlock}
          </div>
        ) : (
          imageBlock
        )}
      </div>
    </Stage>
  );
};
