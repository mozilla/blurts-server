# BLEnder: Fix CI failures on Dependabot PRs

You are fixing CI failures on a Dependabot pull request in the Mozilla Monitor (blurts-server) repository.

## Context

{{PR_TITLE}}

Failing checks:
{{FAILING_CHECKS}}

## CI logs

{{CI_LOGS}}

## Your task

Fix the CI failures caused by this dependency update. Make the minimum change needed. Do not refactor unrelated code.

## Common fix patterns for this repo

This is a Next.js 15 app with TypeScript. Node 20.20.x, npm for packages.

### Lint (`npm run lint`)

Runs these in sequence:

- `stylelint '**/*.scss'` -- SCSS linting
- `prettier --check './src'` -- code formatting
- `eslint --max-warnings=0 .` -- JS/TS linting (flat config, `eslint.config.js`)
- `next typegen` -- Next.js route types
- `tsc -p tsconfig.json --noEmit` -- TypeScript type checking

Prerequisites before lint:

```
npm ci
npm run build-glean
npm run build-nimbus
```

### Unit tests (`npm test`)

Runs `vitest run`. Config in `vitest.config.ts`.

Prerequisites before test:

```
npm ci
npm run build-nimbus
```

### Build (`npm run build`)

Runs `next build`. Catches type errors and build failures.

Prerequisites before build:

```
npm ci
npm run build-glean
npm run build-nimbus
```

### Common fixes

- **Type errors after `@types/*` bump**: Update type annotations to match new definitions.
- **ESLint rule changes**: Fix violations or update config if a rule was renamed/removed.
- **Stylelint rule changes**: Fix SCSS violations or update `.stylelintrc`.
- **Breaking API changes**: Update imports and usage to match new library API.
- **Prettier formatting**: Run `npx prettier --write './src'` to reformat.

## Strategy

1. If you know which check failed, run that check first to reproduce the error.
2. If unclear, run lint first (`npm run build-glean && npm run build-nimbus && npm run lint`), then tests (`npm test`).
3. Read the error output. Identify the root cause.
4. Make the fix. Run the check again to confirm.
5. If you cannot fix it, say so. Do not guess.

## Rules

- Only change files related to the dependency update failure.
- Do not add new dependencies.
- Do not modify CI configuration files.
- Do not run `git commit` or `git push`. The caller handles that.
- Keep changes minimal and targeted.
- Suppressing deprecation warnings is acceptable. The goal is to make CI pass, not to migrate away from deprecated features.

## Commit message

After fixing the issue, write a commit message to `.blender-commit-msg` using this format:

BLEnder fix(<dependency-name>): <1-line summary of what you fixed>

<Short explanation of the root cause and what you changed. A few sentences max.>

Write the file with the Edit tool. Do not include backticks or markdown formatting in the file.
