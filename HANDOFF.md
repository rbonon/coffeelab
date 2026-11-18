# Handoff — coffeelab — 2026-11-18

**Updated:** 2026-11-18T11:35:32-0300
**Status:** consumed

This handoff records session context. Use the GitHub Project board and STATUS.md as sources of truth once they exist.

## Context

Coffee Lab is a planned web app. This session verified the Mac development setup, created the repository, and guided the user through creating a local Codex project. The user has product specs from an earlier ChatGPT conversation and intends to bring them into the project. Those specs were not provided in this session.

## Repository and project

- GitHub repo is private at https://github.com/rbonon/coffeelab.
- Local checkout is /Users/rbonon/Documents/GitHub/rbonon/coffeelab. The user created the **Coffee Lab** project and confirmed it appears under **Projects** in Codex.
- At setup, local `main` and `origin/main` matched at `0870dca3ec00231e9f3a64054afe401ea37df080`.
- The repo has the dotfiles context templates and an OpenSpec scaffold. App code, stack decisions, and product requirements are pending. The OpenSpec bootstrap generated Claude command files under `.claude/`.

## Mac setup

- Git, Homebrew, Node, npm, pnpm, Python and OpenSpec are available.
- In this desktop session, bare `gh` resolves to Homebrew. Use `~/bin/gh` from the repo or account directory. Read-only GitHub API and Projects access were verified as `rbonon`.
- `~/.codex/AGENTS.md` and `~/.claude/CLAUDE.md` both point to the shared rules in the local `ai-skills` checkout.
- Codex discovers the personal skills via symlinks in `~/.agents/skills`, pointing to the shared `ai-skills` directories. This setup is local to this Mac. The dotfiles bootstrap has yet to be updated to create those links.

## Control documents

- Repository instructions in `AGENTS.md` and `CLAUDE.md`.
- Decisions in `DECISIONS.md`. There is no planning directory or `STATUS.md` yet.
- This handoff is `HANDOFF.md`.
- Save generated design mockups in the repo's `mockups/` directory.

## Next session

Open a chat inside the **Coffee Lab** Codex project, provide the earlier specs, and ask Codex to read this handoff and the specs together. Confirm the intended scope and any unresolved product decisions before proposing implementation. The repo is opted in to the user's GitHub Issues and OpenSpec workflow. Follow the shared approval gates for proposal, implementation, and close-out.

## Suggested skills

- `rbo-catch-up` for repository orientation.
- `rbo-product-bootstrap` when the user is ready to start the product workflow with the specs.
