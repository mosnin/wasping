<p align="center">
  <a href="https://swarmz.dev">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://swarmz.dev/logo.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://huggingface.co/buckets/julien-c/my-training-bucket/resolve/swarmz-logo-dark.svg">
      <img alt="swarmz logo" src="https://swarmz.dev/logo.svg" width="128">
    </picture>
  </a>
</p>
<p align="center">
  <a href="https://discord.com/invite/3cU7Bz4UPx"><img alt="Discord" src="https://img.shields.io/badge/discord-community-5865F2?style=flat-square&logo=discord&logoColor=white" /></a>
  <a href="https://github.com/badlogic/pi-mono/actions/workflows/ci.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/badlogic/swarmz/ci.yml?style=flat-square&branch=main" /></a>
</p>
<p align="center">
  <a href="https://swarmz.dev">swarmz.dev</a> domain graciously donated by
  <br /><br />
  <a href="https://exe.dev"><img src="packages/coding-agent/docs/images/exy.png" alt="Exy mascot" width="48" /><br />exe.dev</a>
</p>

> New issues and PRs from new contributors are auto-closed by default. Maintainers review auto-closed issues daily. See [CONTRIBUTING.md](CONTRIBUTING.md).

---

# Swarmzrepo

> **Looking for the swarmz coding agent?** See **[packages/coding-agent](packages/coding-agent)** for installation and usage.

Tools for building AI agents.

## Share your OSS coding agent sessions

If you use swarmz or other coding agents for open source work, please share your sessions.

Public OSS session data helps improve coding agents with real-world tasks, tool use, failures, and fixes instead of toy benchmarks.

For the full explanation, see [this post on X](https://x.com/badlogicgames/status/2037811643774652911).

To publish sessions, use [`badlogic/swarmz-share-hf`](https://github.com/badlogic/pi-mono-share-hf). Read its README.md for setup instructions. All you need is a Hugging Face account, the Hugging Face CLI, and `swarmz-share-hf`.

You can also watch [this video](https://x.com/badlogicgames/status/2041151967695634619), where I show how I publish my `swarmz` sessions.

I regularly publish my own `swarmz` work sessions here:

- [badlogicgames/swarmz on Hugging Face](https://huggingface.co/datasets/badlogicgames/swarmz)

## Packages

| Package | Description |
|---------|-------------|
| **[@mariozechner/pi-ai](packages/ai)** | Unified multi-provider LLM API (OpenAI, Anthropic, Google, etc.) |
| **[@mariozechner/pi-agent-core](packages/agent)** | Agent runtime with tool calling and state management |
| **[@mariozechner/pi-coding-agent](packages/coding-agent)** | Interactive coding agent CLI |
| **[@mariozechner/pi-tui](packages/tui)** | Terminal UI library with differential rendering |
| **[@mariozechner/pi-web-ui](packages/web-ui)** | Web components for AI chat interfaces |

## Chat bot workflows

For Slack/chat automation, see [earendil-works/swarmz-chat](https://github.com/earendil-works/swarmz-chat).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines and [AGENTS.md](AGENTS.md) for project-specific rules (for both humans and agents).

## Development

```bash
npm install          # Install all dependencies
npm run build        # Build all packages
npm run check        # Lint, format, and type check
./test.sh            # Run tests (skips LLM-dependent tests without API keys)
./swarmz-test.sh         # Run swarmz from sources (can be run from any directory)
```

> **Note:** `npm run check` requires `npm run build` to be run first. The web-ui package uses `tsc` which needs compiled `.d.ts` files from dependencies.

## License

MIT
