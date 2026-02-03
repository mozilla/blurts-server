# Jest to Vitest Migration Plan

## Overview
Migrate from Jest to Vitest for better ES Module support and more active maintenance. Gradual migration maintaining test success throughout.

## Phase 1: Setup Vitest alongside Jest
- [ ] Install Vitest dependencies
  ```bash
  npm install -D vitest @vitest/ui @vitest/coverage-v8 jsdom
  ```
- [ ] Create `vitest.config.ts` with Next.js-compatible setup
- [ ] Add parallel scripts to package.json (`test:vitest`, `test-integrations:vitest`)
- [ ] Keep existing Jest scripts functional

## Phase 2: Create test utilities
- [ ] Create `vitest.setup.ts` replacing Jest globals
- [ ] Migrate Storybook integration to Vitest
- [ ] Setup console failure utilities (replace jest-fail-on-console)
- [ ] Implement Intersection Observer mocking for Next.js Links
- [ ] Setup canvas mocking with Vitest native mocking
- [ ] Create accessibility testing setup (jest-axe equivalent)
- [ ] Setup module mocking helpers

## Phase 3: Gradual file migration
### Strategy: `.test.ts` → `.vitest.ts` during migration

#### 3.1: Utility functions (low risk)
- [ ] `src/app/functions/universal/*.test.ts` → `.vitest.ts`
- [ ] `src/config.test.ts` → `config.vitest.ts`

#### 3.2: Pure components (medium risk)
- [ ] `src/app/components/client/Button.test.tsx` → `.vitest.tsx`
- [ ] `src/app/components/client/InputField.test.tsx` → `.vitest.tsx`
- [ ] `src/app/components/server/BreachLogo.test.tsx` → `.vitest.tsx`

#### 3.3: Complex components (higher risk)
- [ ] Dashboard components
- [ ] Authentication components
- [ ] Email templates

#### 3.4: Integration tests (highest risk)
- [ ] `src/db/models/*.integration.ts` → `.vitest.ts`
- [ ] `src/db/tables/*.integration.ts` → `.vitest.ts`

## Phase 4: Cleanup
- [ ] Verify all tests migrated and passing
- [ ] Remove Jest dependencies (`jest`, `jest-*`, `@testing-library/jest-dom`, etc.)
- [ ] Rename all `.vitest.*` → `.test.*`
- [ ] Update package.json scripts (`test:vitest` → `test`)
- [ ] Update CI configuration
- [ ] Remove `jest.config.cjs` and `jest.setup.ts`
- [ ] Remove `__mocks__` directory if no longer needed

## Timeline
**Estimated**: 2-3 weeks

## Notes
- Maintain 100% test coverage throughout
- Use Vitest native mocking system
- Keep same test capabilities with potentially different approaches
- All tests must pass during intermediate steps