# Use ES-compatible unit test frameworks

* Status: proposed
* Deciders: Monitor team
* Date: 2023-01-17

## Context and Problem Statement

The Firefox Monitor "blurts" server is catching up on technical debt as part of
a move from V1 to V2:

- reducing dependencies where feasible/adivsable to reduce the risk of [supply-chain attacks](https://snyk.io/blog/npm-security-preventing-supply-chain-attacks/)
- move from the older [CommonJS module system](https://nodejs.org/api/modules.html) to the more standardized [ECMAScript Modules (ES aka ESM)](https://nodejs.org/api/esm.html)

Monitor V1 uses the [Jest](https://jestjs.io/) for unit tests. Jest is both a test runner and also a [mocking](https://jestjs.io/docs/mock-functions) library.
V1 currently has [~30% code coverage](https://coveralls.io/builds/55941931) over 24 tests, and uses Jest mocks in 11 of
these to mock 8 modules.

Jest does not fully support ES6+ modules for several reasons:

* Per the spec, ES6+ does not allow so-called "monkey-patching" already-loaded modules
* Jest expects to be able to "hoist" it's `jest.mock` commands before modules are loaded, which also isn't allowed in ES6+
* Jest still requires a an experimental Node flag to load ES modules as of this writing
  * `node --experimental-vm-modules` https://nodejs.org/api/vm.html#vm_class_vm_module

Jest currently supports two ways to test ES6+ code:

- use [Babel](https://babeljs.io/) to "transpile" the current code (aka "system under test") to ES5
- the unstable `jest.unstable_mockModule` API is available, which needs to be used in conjunction with ESM dynamic imports, [per their documentation](https://jestjs.io/docs/ecmascript-modules)

### Terminology
#### Test Doubles (Fakes vs. Mocks vs. Stubs)

The term "mock" is frequently used as a catch-all term, but there is already a catch-all term
for this - [Test Double](https://en.wikipedia.org/wiki/Test_double) - which is a superset of three different
types of test functions that are commonly used in unit tests:

* Fake: has a working implementation, usually simplified (e.g. simplified in-memory DB instead of real database)
* Mock: pre-programmed to return specific values, and track if the test functions are called (and how many times)
* Stub: like a mock, but doesn't allow for verifying if methods are called or not

### Dependency injection vs. intercepting module loads

Another concept that is generally tied up with "mock" is how exactly test functions are loaded. Jest for example is commonly
used for its ability to intercept module loads dynamically and return a deeply-cloned version of a module, in which behavior
can be overridden conditionally (i.e., you do not have to construct an entire "fake", and it can tell when the mocked
functions have been called, vs. a "stub")

## Decision Drivers

* We'd like to avoid transpiling to ES5, since this is modifying the system under test
* We'd prefer to use non-experimental APIs wherever possible. If we do depend on experimental APIs, they should ideally not require us to do major rewrites of the code (i.e. be on a path to standardization)

## Considered Options

1. Transpile code under test to ES5 using Babel, and continue with Jest
2. Use an ES6+ compatible test runner, and stop using mocks
3. Use an ES6+ compatible test runner, along with an ES6+ compatible mocking library

## Decision Outcome

Chosen option: 3. Use an ES6+ compatible test runner, along with an ES6+ compatible mocking library.

While we should strive to reduce our use of test doubles, we have quite a few existing tests, and we should also try to
avoid reducing test coverage until we refactor the codebase to use other approaches to make the code more testable
without using mocks/stubs/fakes.

We've chosen the following tools:

* [AVA](https://github.com/avajs/ava) as a test runner
* [testdouble.js aka td.js](https://github.com/testdouble/testdouble.js/) as a mock library
  * Optionally uses [quibble](https://github.com/testdouble/quibble) for ES module interception

Both of these are subject to change, but the fulfill the basic requirements and require fairly minimal changes
from our current setup with Jest.

### Positive Consequences

* remove the need to transpile the code to older version of JS
* current tests can be ported over with minimal changes
* no changes needed to system under test (existing code)

### Negative Consequences

* module interception requires the use of [experimental module loader feature](https://nodejs.org/api/esm.html#loaders) in Node
* current test code needs changes to support new test runner and mocking library, and dynamic imports

## Pros and Cons of the Options

### Jest using Babel for transpilation to ES5

* Good, because both system under test and existing test code need no changes
* Good, because no experimental features are required (node ESM support)
* Bad, because the system under test is modified by transpilation to ES5
* Bad, because the test code will require changes eventually (the current ES5 Jest approach will not work according to ES spec)

### Use an ES6+ compatible test runner, and stop using mocks

* Good, because the system under test and the test code are pure ES modules
* Good, because no experimental features are required (Node experimental module loader)
* Bad, because both the system under test and also unit test need changes
  * the system under test needs to be rewritten to support being tested without mocks
  * the unit tests need to be rewritten to use the new non-jest test runner

### Use an ES6+ compatible test runner, along with an ES6+ compatible mocking library

* Good, because the system under test and the test code are pure ES modules
* Good, because the system under test needs no changes
* Bad, because the unit tests need to be rewritten to use the new non-jest test runner and mocking library
* Bad, because an experimental feature is required (Node experimental module loader)
  * `node --loader` https://nodejs.org/api/esm.html#loaders

## Code Samples

### Option 1. Transpile code under test to ES5 using Babel, and continue with Jest

```js
import { createTransport } from 'nodemailer'
jest.mock('nodemailer') // intercept module load, replace with deeply-cloned replaceable version

test('EmailUtils.init invokes nodemailer.createTransport', async () => {
  createTransport = () => ({
    verify: jest.fn() // overridden mock function
  )}

  await expect(EmailUtils.init(testSmtpUrl)).resolves.toBe('verified')
})
```

### Option 2. Use an ES6+ compatible test runner, with manual mocking and dependency injection

```js
test('EmailUtils.init invokes nodemailer.createTransport', async t => {
  let verifyWasCalled = false;
  const createTransport = () => {
    // Implement a mock by hand, this will be injected below (no module load interception)
    verify = () => {
      if (verifyWasCalled) {
        t.fail('verify was called more than once')
      }
      verifyWasCalled = true;
      return 'verified'
    }
  }

  // NOTE: `createTransport` is now passed to `EmailUtils`, i.e. injected instead of mocked
  t.is((await EmailUtils.init(testSmtpUrl, createTransport)), 'verified')
  t.true(verifyWasCalled)
})
```

### 3. Use an ES6+ compatible test runner, along with an ES6+ compatible mocking library and module interception

```js
// NOTE: using ES module interception requires tests to be run serially, AVA runs tests in parallel by default.
// This is also true of any test that modifies external shared state e.g. a database.
test.serial('EmailUtils.init invokes nodemailer.createTransport', async t => {
  const createTransport = {
    verify: td.func(), // mocked function
  }

  const nodemailer = await td.replaceEsm('nodemailer') // replace calls in future imports with mocked version
  const { default: EmailUtils } = await import('./email.js') // dyanmic imports are required

  td.when(nodemailer.createTransport(testSmtpUrl)).thenReturn(createTransport)
  td.when(createTransport.verify(), { times: 1 }).thenResolve('verified')

  t.is((await EmailUtils.init(testSmtpUrl, createTransport)), 'verified')
})

test.afterEach(async () => {
  td.reset() // reset all mocked modules for next test
})
```