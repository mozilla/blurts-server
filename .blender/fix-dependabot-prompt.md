# BLEnder: Fix CI failures on Dependabot PRs

You are fixing CI failures on a Dependabot pull request in the Firefox Monitor (Blurts Server) repository.

## Context

{{PR_TITLE}}

Failing checks:
{{FAILING_CHECKS}}

## CI logs

{{CI_LOGS}}

## Your task

Fix the CI failures caused by this dependency update. Make the minimum change needed. Do not refactor unrelated code.

## Common fix patterns for this repo

### Linters and formatters

**ESLint** (JavaScript/TypeScript):
```
npm run build-glean
npm run build-nimbus
npx eslint --fix <file>
# Or for all files:
npx eslint .
```
CI runs: `npm run lint` (which includes eslint, prettier, stylelint, tsc, typegen, Nimbus validation)

**Prettier** (formatting):
```
npx prettier --write <file>
# Or check only:
npx prettier --check .
```

**Stylelint** (CSS/SCSS):
```
npx stylelint --allow-empty-input --fix "**/*.{scss,css}"
```

**TypeScript type checking**:
```
npx tsc --noEmit
```

### Running the full lint suite (as CI does)

```bash
npm ci
npm run build-glean
npm run build-nimbus
npm run lint
```

`npm run lint` runs in sequence: stylelint, prettier --check, eslint, tsc --noEmit, typegen validation, Nimbus validation, and a Node version alignment check.

### Unit tests

```bash
npm ci
npm run build-glean
npm test
```

CI runs `npm test` which calls `npm run build-glean && vitest run`.

### Code generation (Glean telemetry)

If a dependency update touches Glean or metrics YAML files, regenerate:
```bash
npm run build-glean
```
This runs:
- `glean translate src/telemetry/metrics.yaml --format typescript --output src/telemetry/generated`
- `glean translate src/telemetry/backend-metrics.yaml --format typescript --output src/telemetry/generated/backend`
- `node src/scripts/build/gleanTypes.js` (generates `_map.ts` from all generated Glean modules)

### Code generation (Nimbus experiments)

If a dependency update touches `config/nimbus.yaml` or the Nimbus type generator:
```bash
npm run build-nimbus
```
This runs `node src/scripts/build/nimbusTypes.js`, which generates `src/telemetry/generated/nimbus/experiments.ts`.

### Fluent localization linter (Python)

CI runs a separate Python-based linter for `.ftl` locale files:
```bash
pip install -r .github/requirements.txt
moz-fluent-lint ./locales/en/ --config .github/linter_config.yml
moz-fluent-lint ./locales-pending/ --config .github/linter_config.yml
```

### Pre-commit hooks (lint-staged via Husky)

The repo uses Husky + lint-staged. If you need to run staged-file hooks manually, lint-staged applies these rules to staged files:
- `*.{js,cjs,mjs,jsx,ts,tsx}` → `eslint --fix`
- `*.{scss,css}` → `stylelint --allow-empty-input --fix`
- `*.{js,ts,tsx,jsx,cjs,mjs,scss,css,md,html}` → `prettier --write`

Because the caller expects **unstaged** changes as output, use this workaround when running lint-staged:
```bash
git add <changed files>
npx lint-staged
git restore --staged <changed files>
```

### Build check

CI also runs a full build:
```bash
npm ci
npm run build-glean
npm run build
```
`npm run build` runs: Glean build, Nimbus build, Next.js build, cronjob build.

### Node version alignment check

Part of `npm run lint`. The script `src/scripts/build/checkNodeVersionAlignment.js` verifies that the Node version is consistent across `package.json` (volta + engines), `Dockerfile`, `netlify.toml`, esbuild target, and all GitHub Actions workflows. If you update `.github/workflows/` files or `package.json`, ensure the node version stays at `20.20.x`.

## Strategy

1. If you know which check failed, run that check first to reproduce the error.
2. If unclear, run the relevant checks in this order:
   - `npm run build-glean && npm run build-nimbus && npm run lint`
   - `npm run build-glean && npm test`
3. Read the error output. Identify the root cause.
4. Make the fix. Run the check again to confirm.
5. If you cannot fix it, say so. Do not guess.
6. You have a limited number of turns. Be direct. Do not explore the codebase beyond what is needed to fix the specific error.

## Rules

- Only change files related to the dependency update failure.
- Do not add new dependencies.
- Do not modify CI configuration files.
- Do not run `git commit` or `git push`. The caller handles that.
- Keep changes minimal and targeted.
- Do not make whitespace, formatting, or style changes unless they fix the CI error.
- Suppressing deprecation warnings is acceptable. The goal is to make CI pass, not to migrate away from deprecated features.

## Commit message

After fixing the issue, write a commit message to `.blender-commit-msg` using this format:

BLEnder fix(<dependency-name>): <1-line summary of what you fixed>

<Short explanation of the root cause and what you changed. A few sentences max.>

Write the file with the Edit tool. Do not include backticks or markdown formatting in the file.

Example:

BLEnder fix(typescript): add scrollMargin to IntersectionObserver mock

TypeScript 6.0 added scrollMargin to the IntersectionObserver interface.
The test mock was missing this property, causing a type error.
