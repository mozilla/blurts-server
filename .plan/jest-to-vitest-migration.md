# Jest to Vitest Migration Guide

This guide covers converting Jest tests to Vitest. **Note: This guide may be incomplete** - please update it as you discover additional migration patterns.

## Important: Test Commands

- **Jest tests**: Continue to run with `npm run test` (`.test.tsx` files)
- **Vitest tests**: Run with `npm run test:vitest` (`.vitest.tsx` files)

Both test suites should continue to pass during the migration period.

## Quick Migration Steps

### 1. Rename Files
```bash
mv ComponentName.test.tsx ComponentName.vitest.tsx
```

### 2. Update Imports

**Before:**
```typescript
import { it, expect } from "@jest/globals";
import { axe } from "jest-axe";
import { setupJestCanvasMock } from "jest-canvas-mock";
```

**After:**
```typescript
import { it, expect, vi } from "vitest";
import { axe } from "vitest-axe";
import type { MockedFunction } from "vitest";
```

### 3. Replace Mocking

**Before:**
```typescript
jest.mock("../path/to/module");
jest.fn()
jest.spyOn(console, "error").mockImplementation(() => undefined);

beforeEach(() => {
  setupJestCanvasMock();
});
```

**After:**
```typescript
vi.mock("../path/to/module");
vi.fn()

const consoleErrorSpy: MockedFunction<typeof console.error> = vi
  .spyOn(console, "error")
  .mockImplementation(() => undefined);

// Remove setupJestCanvasMock - it's automatic in Vitest
// Remember to restore spies: consoleErrorSpy.mockRestore();
```

### 4. Update Mock Types

**Before:**
```typescript
const mockFn = useTelemetry as () => (...args) => void;
const mockedUseSession = useSession as jest.Mock;
```

**After:**
```typescript
const mockFn = useTelemetry as MockedFunction<() => (...args) => void>;
const mockedUseSession = useSession as MockedFunction<typeof useSession>;
```

## Configuration Notes

- **File Pattern**: `**/src/**/*.vitest.{ts,tsx}`
- **Auto Mocks**: Next.js components (`next/image`, `next/font/*`) are pre-configured
- **Canvas Mock**: Automatically enabled (no manual setup needed)
- **Coverage**: V8 provider with 100% thresholds

## Verification

After migration:
1. Run `npm run test:vitest -- YourTest.vitest.tsx`
2. Ensure original Jest tests still pass with `npm run test`
3. Check mocks work correctly

## Common Issues

- File must use `.vitest.tsx` extension
- Don't forget `mockRestore()` for spies
- Canvas mock is automatic - remove manual setup
- Update Jest references in comments to Vitest