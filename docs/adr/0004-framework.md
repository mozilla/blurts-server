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

*Note: If "Migrate to React/Next.js" is selected, we also need to decide on the migration plan*

## Pros and Cons of the Options <!-- optional -->

### Migrate framework to React and Next.js

* Good, Component-based Architecture: This simplifies code maintenance by breaking complex UIs into reusable components.
* Good, Testing: the virtual DOM makes it feasible to write non-brittle (i.e. without needing to fire up a full browser) unit tests of the front-end
* Good, Fewer bugs: having React take care of removing, adding or changing DOM nodes removes a large surface area for bugs.
* Good, Shared knowledge: This approach shares the same structure as Firefox Relay. This would immediately allow the team to reuse and reference.
	* Note that FxA came to a similiar decision: [FxA ADR: Refactor Subscription Platform frontend - with Next.js](https://github.com/mozilla/fxa/blob/main/docs/adr/0035-refactor-payments-frontend-with-nextjs.md) 
* Good, Enables static analysis: programmatically-generated DOM and explicit module imports enables optimal use of TypeScript to catch errors at compile-time and make code more self-explanatory.
* Good, Industry Usage/Standard: React has a large and active community of developers, with many resources available, including libraries, tutorials, and support.
  * Accessibility: Access to [React Aria](https://react-spectrum.adobe.com/react-aria/) (Relay also uses this library).
* Good, [fluent-react](https://github.com/projectfluent/fluent.js/tree/main/fluent-react) enables localised messages that can be updated on the client-side
* Good, Avoid snowflake configs: we won't have to manually set up tooling and make sure they work well together, like [#3003](https://github.com/mozilla/blurts-server/pull/2987) and [#2987](https://github.com/mozilla/blurts-server/pull/2987)
* Good, Automatic code splitting, avoiding e.g. cumulative layout shift, and decreating bundle sizes.
* Good, Poor front-end developer experience: VSCode code plugins for code completeion, error linting, etc. 
* Bad, Tooling Overhead: React's tooling and ecosystem can be complex, which can be a disadvantage for developers who prefer a more minimalistic approach.
* Bad, Performance cost when rendering a large number of components, may require additional optimization work
* Bad, Learning curve: Challenging for new developers jumping into the project to understand how to debug issues or how components are interacting with each other
* Bad, Time Cost: Time spent porting existing site over to React
* Bad, We give away some autonomy w.r.t. what tooling we can use and when we can use the latest versions.
* Bad, The client-side execution time of React is additional overhead.
* Bad, No portability or interoperability to non-React projects.
* Bad, React will require maintenance and periodic upgrades
* Bad, Rendering performance cost: Inital load of React 

## (Secondary Decision) Migration Plan Options

There are roughly three options to migrate to React

#### 1 Static-site generation (SSG)

This is what Relay currently does. This involves a strong split between our front-end and the back-end: the front-end is compiled to a bunch of JS, HTML and CSS files, that are then served as-is by the back-end. After they get loaded by the browser, the client-side JS then makes a bunch of API calls to the server to determine what to show to the user.

Pros:
- Back-end doesn't need to run Node (very applicable to Relay).
- The front-end can be deployed separately from the back-end, e.g. to Netlify.

Cons:
- Negative performance impact on non-prerendered pages (e.g. behind a login), as after downloading the client, JS needs to run and API requests need to complete before the page can be rendered.
- The initial response cannot be tailored to the current user, e.g. by communicating the content language (which is determined by client-side JS). This can negatively affect e.g. client-side translation and thus Lighthouse scores.
- Missing out on a bunch of automatic optimisations Next.js does, and going a bit "against the grain" on the main use case the Next.js folks focus on.

#### 2. Server-side rendering (SSR)

This involves having Next.js run our back-end, where it can tailor the initially-rendered DOM to the current user.

Pros:
- Quick rendering of the first response to the user.
- Back-end wouldn't need to add an API endpoint for all the data we currently use.
- Can benefit from more automatic optimisations provided by Next.js, e.g. [image optimisation](https://nextjs.org/docs/pages/building-your-application/optimizing/images) to speed up data transfer and minimise cumulative layout shift.

Cons:
- Front-end coupled to the back-end, so preview deployments still aren't a given.
- Has significant architectural impacts on the backend.
- Not clear yet how e.g. FxA integration and cron jobs would work.

#### 3. Server-side rendering in front of our current back-end (hybrid SSR?)

Pros:
- We can potentially leave more of our current back-end code unmodified in the short term.
- Quick rendering of the first response to the user.
- Can benefit from more automatic optimisations provided by Next.js, e.g. [image optimisation](https://nextjs.org/docs/pages/building-your-application/optimizing/images) to speed up data transfer and minimise cumulative layout shift.

Cons:
- Not clear how incremental an eventual migration to plain SSR would be - i.e. migrating a whole endpoint at a time is still a fairly big chunk, and I'm not sure if that granularity will even be feasible.
- Might involve lots of complexity to e.g. share sessions between the two back-ends.
- Not sure what impact this will have w.r.t. Kubernetes (which I know basically nothing about).
- Still has significant architectural impacts on the backend.



### Leave as-is

* Good, the current website has gone through extensive testing, fox fooding and is working
* Good, Little Third-Party dependencies
* Good, No throw away code
* Good, Conveys our support for standards and the web standards process
* Bad, Front-end testing requires additional set-up (using a full browser) which would impact test speeds and contribute to flakiness.
* Bad, No Virtual DOM: Current architecture may be slower than React, as it lacks the optimizations provided by a virtual DOM.
* Bad, Harder to learn our snowflake framework (e.g. our use of a proxy on one page to update the DOM)
* Bad, Easy for server and client-side state to get out of sync
* Bad, Hard to re-use code on the client-side (see: dynamic Fluent strings)
* Bad, Hard to statically analyse, and in general doesn't make use of a lot of tooling that can help us deliver better quality code without us manually set up
* Bad, Poor front-end developer experience: Writing in template literals removes tag coloring, auto-complete functions, etc.

### Use a different framework

* Good, Opportunity to explore new, modern tech (Vue, Svelte, etc)
* Good, Other frameworks may have better performance when compared to React
* Bad, Additional tool fracturing across the Mozilla ecosystem
* Bad, Both Next.js and React have lots of momentum and unlikely to go away anytime soon, and have a history of maintaining backwards compatibility
* Bad, Time spent analysing all potential options is time not spent creating value

## Links <!-- optional -->

* [React usage, State of JavaScript](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/)
* [Previous ADR for Native Templating](https://github.com/mozilla/blurts-server/blob/main/docs/adr/0001-native-templating.md)
  * [Additional context for previous Native Templating decision](https://javarome.medium.com/design-noframework-bbc00a02d9b3)