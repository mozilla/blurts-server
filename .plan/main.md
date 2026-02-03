# Jest to Vitest Migration Plan

## Overview
Migrate from Jest to Vitest for better ES Module support and more active maintenance. Gradual migration maintaining test success throughout.

## Phase 1: Setup Vitest alongside Jest
- [x] Install Vitest dependencies
  ```bash
  npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths @vitest/ui @vitest/coverage-v8
  ```
- [x] Create minimal `vitest.config.ts` with basic Next.js-compatible setup
  - Start with essential configuration only (jsdom, coverage, test patterns)
  - Use `vite-tsconfig-paths` for path resolution
  - Add more advanced config as needed during migration
- [x] Add parallel scripts to package.json (`test:vitest`, `test-integrations:vitest`)
- [x] Keep existing Jest scripts functional

## Phase 2: Gradual file migration (with utilities added as needed)
### Strategy: `.test.ts` → `.vitest.ts` during migration
Add utilities incrementally as tests require them (mocking, Storybook integration, console failure utilities, etc.)

#### 2.1: Utility functions (low risk)
- [x] `src/config.test.ts` → `config.vitest.ts`
- [x] `src/scripts/cronjobs/emailBreachAlerts/emailBreachAlerts.test.ts` → `.vitest.ts`
- [ ] `src/app/functions/universal/*.test.ts` → `.vitest.ts`

#### 2.2: Pure components (medium risk)
- [ ] `src/app/components/client/Button.test.tsx` → `.vitest.tsx`
- [ ] `src/app/components/client/InputField.test.tsx` → `.vitest.tsx`
- [ ] `src/app/components/server/BreachLogo.test.tsx` → `.vitest.tsx`

#### 2.3: Complex components (higher risk)
- [ ] Dashboard components
- [ ] Authentication components
- [ ] Email templates

#### 2.4: Integration tests (highest risk)
- [ ] `src/db/models/*.integration.ts` → `.vitest.ts`
- [ ] `src/db/tables/*.integration.ts` → `.vitest.ts`

## Phase 3: Cleanup
- [ ] Verify all tests migrated and passing
- [ ] Remove Jest dependencies (`jest`, `jest-*`, `@testing-library/jest-dom`, etc.)
- [ ] Remove Jest/Vitest compatibility checks in test helpers (`mockLogger.ts`, `pubsub.ts`)
- [ ] Rename all `.vitest.*` → `.test.*`
- [ ] Update package.json scripts (`test:vitest` → `test`)
- [ ] Update CI configuration
- [ ] Remove `jest.config.cjs` and `jest.setup.ts`
- [ ] Remove `__mocks__` directory if no longer needed

## Configuration Strategy
**Start minimal, grow incrementally during migration:**

### ✅ Current minimal setup
- [x] Basic test environment (jsdom)
- [x] Essential coverage settings
- [x] Test file patterns for `.vitest.{ts,tsx}` files
- [x] TypeScript path resolution
- [x] Core @testing-library imports and globals
- [x] Automatic mock clearing/restoration (`clearMocks: true`, `restoreMocks: true`)
- [x] Node.js environment override support for server-side tests

### Add as needed during migration
- Complex mocking (canvas, IntersectionObserver) when component tests require them
- Storybook integration when migrating component tests
- Console failure utilities (jest-fail-on-console replacement) when tests fail due to console logs
- Advanced coverage exclusions as needed
- Module name mappings (uuid, react-dom/server) when import errors occur
- Accessibility testing setup (jest-axe equivalent) when a11y tests are migrated

## Timeline
**Estimated**: 2-3 weeks

## Notes
- Maintain 100% test coverage throughout
- Use Vitest native mocking system
- Keep same test capabilities with potentially different approaches
- All tests must pass during intermediate steps
- Draw inspiration from Jest config but implement incrementally
- Only add configuration complexity as tests require it
