import React from "react";
import {
  siDocker,
  siGithub,
  siGooglecloud,
  siHetzner,
  siKubernetes,
  siNextdotjs,
  siNginx,
  siPostgresql,
  siReact,
  siRedis,
  siTypescript,
  siVercel,
  siDigitalocean,
  siLinux,
  siAmazonwebservices,
  siTraefikproxy,
  type SimpleIcon,
} from "simple-icons";
import { explainer } from "./theme";

/** Logos that are near-black — force light fill on our canvas. */
const LIGHT_ON_DARK = new Set([
  "nextdotjs",
  "github",
  "vercel",
  "amazonwebservices",
]);

const ICONS: Record<string, SimpleIcon> = {
  docker: siDocker,
  github: siGithub,
  googlecloud: siGooglecloud,
  hetzner: siHetzner,
  kubernetes: siKubernetes,
  nextjs: siNextdotjs,
  nginx: siNginx,
  postgresql: siPostgresql,
  react: siReact,
  redis: siRedis,
  typescript: siTypescript,
  vercel: siVercel,
  digitalocean: siDigitalocean,
  linux: siLinux,
  aws: siAmazonwebservices,
  traefik: siTraefikproxy,
};

export type TechId = keyof typeof ICONS;

type TechLogoProps = {
  id: TechId;
  size?: number;
  /** Override brand color */
  color?: string;
};

export const TechLogo: React.FC<TechLogoProps> = ({
  id,
  size = 40,
  color,
}) => {
  const icon = ICONS[id];
  if (!icon) return null;
  const fill =
    color ??
    (LIGHT_ON_DARK.has(icon.slug) ? explainer.text : `#${icon.hex}`);

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={icon.title}
    >
      <title>{icon.title}</title>
      <path d={icon.path} fill={fill} />
    </svg>
  );
};

type LogoTileProps = {
  id: TechId;
  label?: string;
  size?: number;
  active?: boolean;
};

/** Centered logo chip — AI LABS style dark tile. */
export const LogoTile: React.FC<LogoTileProps> = ({
  id,
  label,
  size = 36,
  active = true,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      opacity: active ? 1 : 0.35,
    }}
  >
    <div
      style={{
        width: 72,
        height: 72,
        borderRadius: 16,
        background: explainer.bgElevated,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: active ? `0 0 0 1px ${explainer.active}55` : "none",
      }}
    >
      <TechLogo id={id} size={size} />
    </div>
    {label ? (
      <span
        style={{
          fontSize: 12,
          color: explainer.text,
          opacity: 0.55,
          fontFamily: "IBM Plex Mono, ui-monospace, monospace",
          letterSpacing: 0.4,
        }}
      >
        {label}
      </span>
    ) : null}
  </div>
);

export const TECH_IDS = Object.keys(ICONS) as TechId[];
