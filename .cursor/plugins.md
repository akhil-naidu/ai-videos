# Cursor plugins & MCP for this repo

Project agents cannot auto-install Cursor Marketplace plugins into your IDE. Enable these in Cursor settings if not already on.

## Recommended plugins (user-level)

| Plugin | Why |
|--------|-----|
| **Context7** | Live Remotion / React docs (prefer over training data) |
| **Superpowers** | Brainstorm → plan → TDD / subagent execution |
| **Playwright** (optional) | Later: smoke-test viewer pages |

## MCP

This repo documents expected MCP usage. If your Cursor already has Context7 enabled globally, no project file is required.

**Context7 library IDs for this project:**

- Remotion: `/remotion-dev/remotion`
- Remotion agent skills docs: `/remotion-dev/skills`

Optional project MCP stub (uncomment / adapt if you want project-scoped servers):

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
```

Copy into `.cursor/mcp.json` only if you intentionally want project-scoped MCP (may duplicate your global Context7 plugin).

## Skills already installed in-repo

Via `npx skills add remotion-dev/skills`:

- `.agents/skills/remotion-*` (12 skills)
- Lockfile: `skills-lock.json`

Custom project skill:

- `.cursor/skills/remotion-presentation/`

## Update Remotion skills

```bash
npx skills update -p -y
# or
npx skills add remotion-dev/skills -y
```
