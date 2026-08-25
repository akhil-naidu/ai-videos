import React from "react";
import {
  AbstractList,
  CompareCards,
  CounterBar,
  FanOut,
  FlowLoop,
  PipelineCards,
  ProductMock,
  SlashChip,
} from "../../src/kit";

export type BeatScene = {
  id: string;
  durationInFrames: number;
  Component: React.FC;
};

const fps = 30;
const s = (sec: number) => Math.round(sec * fps);

/**
 * Visual-only beats mapped from beats.md — VO is heard, canvas stays diagram-heavy.
 */
export const SCENES: BeatScene[] = [
  {
    id: "open",
    durationInFrames: s(9),
    Component: () => (
      <SlashChip command="/dflow" subtitle="Agentic Engineering and Modern Deployments" />
    ),
  },
  {
    id: "build-better",
    durationInFrames: s(11),
    Component: () => (
      <CompareCards
        cards={[
          { label: "Build", tone: "success", logos: ["react", "typescript"], fill: 0.9, bars: [0.9, 0.7, 0.55] },
          { label: "Ship", tone: "default", bars: [0.35, 0.25], fill: 0.2 },
        ]}
      />
    ),
  },
  {
    id: "ai-velocity",
    durationInFrames: s(11),
    Component: () => <CounterBar value={0.92} label="code velocity" tone="active" />,
  },
  {
    id: "idea-hours",
    durationInFrames: s(9),
    Component: () => <ProductMock variant="landing" logos={["nextjs", "react"]} />,
  },
  {
    id: "strange-problem",
    durationInFrames: s(9),
    Component: () => <FlowLoop phase={1} />,
  },
  {
    id: "bottleneck",
    durationInFrames: s(11),
    Component: () => (
      <CompareCards
        cards={[
          { label: "Build", tone: "success", logos: ["react"], fill: 0.95 },
          { label: "Ship", tone: "fail", logos: ["docker", "kubernetes"], fill: 0.22 },
        ]}
      />
    ),
  },
  {
    id: "shipping",
    durationInFrames: s(9),
    Component: () => (
      <AbstractList
        emphasizeIndex={0}
        rows={[
          { tone: "fail", width: 0.55 },
          { tone: "muted", width: 0.7 },
          { tone: "muted", width: 0.4 },
        ]}
      />
    ),
  },
  {
    id: "ops-fanout",
    durationInFrames: s(12),
    Component: () => (
      <FanOut
        sourceLogos={["github"]}
        targets={[
          { logo: "docker" },
          { logo: "nginx" },
          { logo: "kubernetes" },
          { logo: "redis" },
          { logo: "postgresql" },
          { logo: "traefik" },
        ]}
      />
    ),
  },
  {
    id: "ops-loop",
    durationInFrames: s(9),
    Component: () => <FlowLoop phase={2} />,
  },
  {
    id: "question",
    durationInFrames: s(11),
    Component: () => (
      <CompareCards
        cards={[
          { label: "BYO infra", tone: "active", logos: ["hetzner", "aws", "googlecloud"], bars: [0.8, 0.5] },
          { label: "Cloud DX", tone: "success", logos: ["vercel"], bars: [0.85, 0.6], fill: 0.88 },
        ]}
      />
    ),
  },
  {
    id: "not-that",
    durationInFrames: s(11),
    Component: () => (
      <AbstractList
        rows={[
          { tone: "fail", width: 0.75 },
          { tone: "fail", width: 0.65 },
          { tone: "fail", width: 0.85 },
        ]}
      />
    ),
  },
  {
    id: "bring-yours",
    durationInFrames: s(12),
    Component: () => (
      <FanOut
        sourceLogos={["hetzner", "aws"]}
        targets={[{ logo: "vercel", agent: true }, { bars: 2 }, { bars: 2 }, { bars: 2 }]}
      />
    ),
  },
  {
    id: "idea-dflow",
    durationInFrames: s(9),
    Component: () => <SlashChip command="/dflow" />,
  },
  {
    id: "pipeline",
    durationInFrames: s(11),
    Component: () => (
      <PipelineCards
        steps={[
          { label: "Code", status: "done", logo: "github" },
          { label: "Build", status: "done", logo: "docker" },
          { label: "Deploy", status: "active", logo: "kubernetes" },
          { label: "Prod", status: "pending" },
        ]}
      />
    ),
  },
  {
    id: "connect",
    durationInFrames: s(9),
    Component: () => (
      <FanOut
        sourceLogos={["github"]}
        targets={[{ logo: "hetzner" }, { logo: "digitalocean" }, { logo: "aws" }]}
      />
    ),
  },
  {
    id: "between",
    durationInFrames: s(11),
    Component: () => (
      <PipelineCards
        steps={[
          { status: "done", logo: "github" },
          { status: "active", logo: "docker" },
          { status: "pending", logo: "nginx" },
          { status: "pending" },
        ]}
      />
    ),
  },
  {
    id: "ownership",
    durationInFrames: s(11),
    Component: () => (
      <CompareCards
        cards={[
          { label: "Your servers", tone: "active", logos: ["linux", "docker"], fill: 0.7 },
          { label: "Your data", tone: "success", logos: ["postgresql", "redis"], fill: 0.7 },
        ]}
      />
    ),
  },
  {
    id: "new-app",
    durationInFrames: s(11),
    Component: () => <ProductMock variant="landing" logos={["nextjs", "typescript"]} />,
  },
  {
    id: "wizard",
    durationInFrames: s(12),
    Component: () => <ProductMock variant="wizard" logos={["github", "nextjs", "docker"]} />,
  },
  {
    id: "thats-it",
    durationInFrames: s(9),
    Component: () => <CounterBar value={1} label="deploy" tone="success" />,
  },
  {
    id: "simple-complex",
    durationInFrames: s(11),
    Component: () => (
      <CompareCards
        cards={[
          { label: "Surface", tone: "success", bars: [0.5], fill: 1 },
          { label: "Underneath", tone: "warning", logos: ["kubernetes", "traefik", "nginx"], fill: 0.6 },
        ]}
      />
    ),
  },
  {
    id: "lifecycle-start",
    durationInFrames: s(9),
    Component: () => (
      <AbstractList rows={[{ tone: "active", width: 0.8 }, { tone: "muted", width: 0.55 }]} />
    ),
  },
  {
    id: "lifecycle-fan",
    durationInFrames: s(14),
    Component: () => (
      <FanOut
        sourceLogos={["nextjs"]}
        targets={[
          { logo: "postgresql" },
          { logo: "redis" },
          { logo: "nginx" },
          { logo: "docker" },
          { logo: "kubernetes" },
        ]}
      />
    ),
  },
  {
    id: "app-dashboard",
    durationInFrames: s(11),
    Component: () => (
      <ProductMock
        variant="dashboard"
        logos={["docker", "redis", "postgresql", "nginx", "github", "kubernetes", "traefik", "linux"]}
      />
    ),
  },
  {
    id: "status-rows",
    durationInFrames: s(11),
    Component: () => (
      <AbstractList
        rows={[
          { tone: "success", width: 0.6 },
          { tone: "active", width: 0.75 },
          { tone: "warning", width: 0.5 },
          { tone: "fail", width: 0.4 },
          { tone: "active", width: 0.85 },
        ]}
      />
    ),
  },
  {
    id: "multi-server",
    durationInFrames: s(11),
    Component: () => (
      <FanOut
        sourceLogos={["docker"]}
        targets={[{ logo: "hetzner" }, { logo: "aws" }, { logo: "googlecloud" }]}
      />
    ),
  },
  {
    id: "providers",
    durationInFrames: s(9),
    Component: () => (
      <CompareCards
        cards={[
          { logos: ["hetzner"], label: "Providers", tone: "active" },
          { logos: ["digitalocean"], label: "Envs", tone: "active" },
          { logos: ["googlecloud"], label: "Regions", tone: "active" },
        ]}
      />
    ),
  },
  {
    id: "platform-same",
    durationInFrames: s(11),
    Component: () => (
      <PipelineCards
        steps={[
          { label: "Platform", status: "done" },
          { label: "Swap infra", status: "active", logo: "aws" },
          { label: "Same DX", status: "pending", logo: "vercel" },
        ]}
      />
    ),
  },
  {
    id: "not-dashboard",
    durationInFrames: s(11),
    Component: () => (
      <CompareCards
        cards={[
          { label: "Thin dash", tone: "fail", bars: [0.4, 0.3] },
          { label: "Owned stack", tone: "success", logos: ["linux", "docker", "kubernetes"], fill: 0.8 },
        ]}
      />
    ),
  },
  {
    id: "stack",
    durationInFrames: s(12),
    Component: () => (
      <AbstractList
        rows={[
          { logo: "docker", tone: "active", width: 0.7 },
          { logo: "traefik", tone: "active", width: 0.55 },
          { logo: "nginx", tone: "active", width: 0.45 },
          { logo: "postgresql", tone: "active", width: 0.65 },
          { logo: "redis", tone: "active", width: 0.5 },
          { logo: "kubernetes", tone: "active", width: 0.8 },
        ]}
      />
    ),
  },
  {
    id: "hide-complexity",
    durationInFrames: s(11),
    Component: () => <FlowLoop phase={0} />,
  },
  {
    id: "tradeoff",
    durationInFrames: s(11),
    Component: () => (
      <CompareCards
        cards={[
          { label: "Managed", tone: "warning", logos: ["vercel"], fill: 0.9 },
          { label: "Bare VPS", tone: "fail", logos: ["linux"], fill: 0.35 },
        ]}
      />
    ),
  },
  {
    id: "middle",
    durationInFrames: s(11),
    Component: () => (
      <CompareCards
        cards={[
          { label: "Managed", bars: [0.5], tone: "default" },
          { label: "dFlow", tone: "active", logos: ["docker", "github"], fill: 0.85 },
          { label: "VPS", bars: [0.5], tone: "default" },
        ]}
      />
    ),
  },
  {
    id: "keep-control",
    durationInFrames: s(9),
    Component: () => (
      <AbstractList
        rows={[
          { tone: "success", width: 0.7 },
          { tone: "success", width: 0.55 },
          { tone: "active", width: 0.8 },
        ]}
      />
    ),
  },
  {
    id: "ai-apps",
    durationInFrames: s(11),
    Component: () => <CounterBar value={1} label="apps generated" tone="active" />,
  },
  {
    id: "still-ship",
    durationInFrames: s(11),
    Component: () => <FlowLoop phase={2} />,
  },
  {
    id: "friction",
    durationInFrames: s(11),
    Component: () => (
      <PipelineCards
        steps={[
          { label: "Code", status: "done", logo: "github" },
          { label: "Build", status: "done", logo: "docker" },
          { label: "Prod", status: "active" },
        ]}
      />
    ),
  },
  {
    id: "fits",
    durationInFrames: s(9),
    Component: () => <SlashChip command="/dflow" subtitle="code → production" />,
  },
  {
    id: "vision",
    durationInFrames: s(12),
    Component: () => (
      <AbstractList
        rows={[
          { tone: "active", width: 0.9 },
          { tone: "active", width: 0.75, logo: "kubernetes" },
          { tone: "active", width: 0.65 },
        ]}
      />
    ),
  },
  {
    id: "serves-product",
    durationInFrames: s(9),
    Component: () => (
      <CompareCards
        cards={[
          { label: "Infra", tone: "active", logos: ["linux"], bars: [0.6] },
          { label: "Product", tone: "success", logos: ["nextjs"], fill: 0.95 },
        ]}
      />
    ),
  },
  {
    id: "why",
    durationInFrames: s(9),
    Component: () => <SlashChip command="/dflow" />,
  },
  {
    id: "close-pipeline",
    durationInFrames: s(12),
    Component: () => (
      <PipelineCards
        steps={[
          { label: "Build", status: "done" },
          { label: "Bring", status: "done", logo: "hetzner" },
          { label: "Deploy", status: "done", logo: "docker" },
          { label: "Scale", status: "active" },
          { label: "Control", status: "pending" },
        ]}
      />
    ),
  },
  {
    id: "yours",
    durationInFrames: s(11),
    Component: () => (
      <AbstractList
        rows={[
          { tone: "success", width: 0.7 },
          { tone: "success", width: 0.55 },
          { tone: "success", width: 0.45 },
        ]}
      />
    ),
  },
  {
    id: "end",
    durationInFrames: s(11),
    Component: () => <SlashChip command="/dflow" subtitle="dflow.sh" />,
  },
];

export const TOTAL_DURATION = SCENES.reduce((a, b) => a + b.durationInFrames, 0);
