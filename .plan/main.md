# Jest to Vitest Migration Plan

## Overview
Migrate from Jest to Vitest for better ES Module support and more active maintenance. Gradual migration maintaining test success throughout.

## Phase 1: Setup Vitest alongside Jest
- [ ] Install Vitest dependencies
  ```bash
  npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths @vitest/ui @vitest/coverage-v8
  ```
- [ ] Create minimal `vitest.config.ts` with basic Next.js-compatible setup
  - Start with essential configuration only (jsdom, coverage, test patterns)
  - Use `vite-tsconfig-paths` for path resolution
  - Add more advanced config as needed during migration
- [ ] Add parallel scripts to package.json (`test:vitest`, `test-integrations:vitest`)
- [ ] Keep existing Jest scripts functional

## Phase 2: Create test utilities
- [ ] Create minimal `vitest.setup.ts` replacing essential Jest globals
  - Start with basic @testing-library imports and global setup
  - Add complex setups (canvas, intersection observer, etc.) only as tests require them
- [ ] Add Storybook integration incrementally as component tests are migrated
- [ ] Setup console failure utilities (replace jest-fail-on-console) when needed
- [ ] Implement mocking utilities as migration progresses:
  - [ ] Intersection Observer mocking for Next.js Links
  - [ ] Canvas mocking with Vitest native mocking
  - [ ] Accessibility testing setup (jest-axe equivalent)
  - [ ] Module mocking helpers

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

## Configuration Strategy
**Start minimal, grow incrementally:**

### Initial vitest.config.ts
- Basic test environment (jsdom)
- Essential coverage settings
- Test file patterns
- TypeScript path resolution

### Initial vitest.setup.ts
- Core @testing-library imports
- Basic globals (TextEncoder, etc.)
- Environment variables

### Add as needed during migration
- Complex mocking (canvas, IntersectionObserver)
- Storybook integration
- Console failure utilities
- Advanced coverage exclusions
- Module name mappings

## Timeline
**Estimated**: 2-3 weeks

## Notes
- Maintain 100% test coverage throughout
- Use Vitest native mocking system
- Keep same test capabilities with potentially different approaches
- All tests must pass during intermediate steps
- Draw inspiration from Jest config but implement incrementally
- Only add configuration complexity as tests require it