# Use React Framework

* Status: proposed
* Deciders: Monitor team
* Date: 2022-05-03
* Technical Story: [MNTOR-1588](https://mozilla-hub.atlassian.net/browse/MNTOR-1588)

## Context and Problem Statement

The Monitor team is tasked with launching a premium product offering as soon as possible. The current architecture of Monitor is not suited for synchronous feature development and lacks the complex client-side state management premium will require. 


## Decision Drivers <!-- optional -->

* The expansion in Monitor premium requires a framework to manage increased complexity and client-side state management
* Promote component sharing between S&P web-based products, Relay & Monitor
* Allow developers to work on specific components and features without affecting the rest of the codebase (fewer merge conflicts, makes it easier break down tickets)
* Unidirectional (one-way) data flow makes it easier to understand the flow of data in the application, which may be necessary when handling multiple states (especially for the data removal sequence)
* Monitor Front-end engineers have extensive React experience

## Considered Options

1. Migrate framework to React and Next.js
1. Leave as-is 
1. Use a different framework

## Decision Outcome

TBD

## Pros and Cons of the Options <!-- optional -->

### Migrate framework to React and Next.js

* Good, Component-based Architecture: This simplifies code maintenance by breaking complex UIs into reusable components.
* Good, Testing: the virtual DOM makes it feasible to write non-brittle (i.e. without needing to fire up a full browser) unit tests of the front-end
* Good, Fewer bugs: having React take care of removing, adding or changing DOM nodes removes a large surface area for bugs.
* Good, Accessibility: React provides ARIA support, focus management, and components are designed with accessibility best practices in mind.
* Good, Shared knowledge: This approach shares the same structure as Firefox Relay. This would immediately allow the team to reuse and reference.
	* Note that FxA came to a similiar decision: [FxA ADR: Refactor Subscription Platform frontend - with Next.js](https://github.com/mozilla/fxa/blob/main/docs/adr/0035-refactor-payments-frontend-with-nextjs.md) 
* Good, Typescript: TypeScript's static typing enhances code robustness and readability by catching errors at compile-time and making code more self-explanatory.
* Good, Industry Usage/Standard: React has a large and active community of developers, with many resources available, including libraries, tutorials, and support.
* Good, Simpler Code: Hooks in React utilizes simpler code that implements similar functionalities faster and more effectively
* Good, [fluent-react](https://github.com/projectfluent/fluent.js/tree/main/fluent-react) enables more dynamic localized texts and messages
* Bad, Tooling Overhead: React's tooling and ecosystem can be complex, which can be a disadvantage for developers who prefer a more minimalistic approach.
* Bad, Performance cost when rendering a large number of components, may require additional optimization work
* Bad, Learning curve: Challenging for new developers jumping into the project to understand how to debug issues or how components are interacting with each other
* Bad, Time Cost: Time spent porting existing site over to React

*Note: This recommendation is to use Next.js for SSR page generation. We would continue to use Express to handle backend logic, API, etc.*


### Leave as-is

* Good, the current website has gone through extensive testing, fox fooding and is working
* Good, Little Third-Party dependencies
* Good, No throw away code
* Bad, Testing: There are currently no front-end specific tests
* Bad, No Virtual DOM: Current architecture may be slower than React, as it lacks the optimizations provided by a virtual DOM.

### Use a different framework

* Bad, Additional tool fracturing across the Mozilla ecosystem

## Links <!-- optional -->

* [React usage, State of JavaScript](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/)
* [Previous ADR for Native Templating](https://github.com/mozilla/blurts-server/blob/main/docs/adr/0001-native-templating.md)