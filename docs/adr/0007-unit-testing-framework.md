# Unit Testing Framework

- Status: proposed
  - Supercedees E-compatible unit test frameworks (#0001)
- Deciders: Monitor team
- Date: 2023-06-14

Technical Story: [description | ticket/issue URL] <!-- optional -->

## Context and Problem Statement

With the transition to Next.js/React, the team wants to consider testing frameworks again, to confirm what works best for the new architecture.

## Decision Drivers <!-- optional -->

- What works best for the current framework, Next.js
- Which provides the best experience for developers

## Considered Options

- No Change - Ava (ES6+ compatible test runner)
- Jest (with the Rust Compiler)
- Jest (with Babel)

## Decision Outcome

TBD

<!--### Positive Consequences

* [e.g., improvement of quality attribute satisfaction, follow-up decisions required, …]
* …

### Negative Consequences

* [e.g., compromising quality attribute, follow-up decisions required, …]
* …-->

---

## Pros and Cons of the Options <!-- optional -->

### No Change - Ava (ES6+ compatible test runner)

- Good, because the system under test and the test code are pure ES modules
- Good, because the system under test needs no changes
- Bad, because the unit tests need to be rewritten to use the new non-jest test runner and mocking library

### Jest (with the Rust Compiler)

Use Jest and the default compiler, [SWC](https://swc.rs/)

- Good, Next.js now has built-in configuration for Jest
- Good, Auto mocks of `.css`, `.module.css` (and their `.scss` variants), and image imports
- Good, Automatically sets up `transform ` using [SWC](https://swc.rs/)
- Good, Loads `.env` (and all variants) into process.env
- Good, Ignores `node_modules ` from test resolving and transforms
- Good, Ignores `.next` from test resolving
- Good, Loads `next.config.js ` for flags that enable experimental SWC transforms
- Good, SWC is faster than Babel
- Bad, does not fully support ES6+ modules

### Jest (with Babel)

Use Jest and Babel

- Good, Next.js is configured
- Bad, slower than SWC
- Bad, stylesheets and Image imports need to be mocked

## Links <!-- optional -->

- [Next.js / Jest Setup Documentation](https://nextjs.org/docs/pages/building-your-application/optimizing/testing#jest-and-react-testing-library)
- [Next.js Compiler Architecutre](https://nextjs.org/docs/architecture/nextjs-compiler#jest)
