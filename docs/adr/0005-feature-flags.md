# Feature Flags

* Status: proposed
* Deciders: Monitor Team
* Date: 2023-04-12

Technical Story: https://mozilla-hub.atlassian.net/browse/MNTOR-24

## Context and Problem Statement

As Monitor becomes a more mature product, we need to support gradual feature rollouts, faster production bug fixes and rollbacks, and streamline our development cycles.

The main function of feature flags is that they facilitate the decoupling of code deployment from feature
release. Feature flags can be used in a few scenarios:
* Operational control: create “kill switches” that can dynamically reconfigure a live production system in response to high load, mission critical bugs, or third-party outages (dependencies).
* CICI: simpler merges into the main branch
* Environment-dependent configurations
* Experimentations: A/B testing and different experiences for different users based on context (user, device, geolocation data etc)

## Decision Drivers <!-- optional -->

When applying feature flagging, we often have a choice between making that toggle on the frontend or the backend. Here are a few factors that we should keep in mind while making that decision

### UI Performance
By moving flagging decisions to the server side, we are reducing code bloat on the frontend, gaining performance that's immediately noticeable by the user. If we decide to move Monitor frontend to SPA in the future, Single-page applications are already making a API call to render the data needed for the UI. With the same payload, we can make a call to a feature-flag service, so one network call can contain all feature-flag configs with the server-side data.

### Config Cache Lag 
There are two general approaches:

1. An app can proactively request flagging decisions based on runtime-context

> This approach consumes a lot more bandwidth (every context changes = new feature flag decision being made by the backend). It's a lot more flexible and prevents cache lag
2. An app can request general config and use client-side router

> With this approach, we essentially cache the config. In the case of a kill switch, the frontend may not be able to react quickly to the changes from the backend.

### Security
One key consideration when deciding where to implement a feature flag is security. If a feature is highly sensitive or critical to the security of the application, it may be safer to implement the toggle on the backend. This can help ensure that the feature is properly secured and that user data is protected.

### Sync Complexity
Implementing feature flagging on the server side reduces the complexity of synchronizing feature toggle logic between the frontend and backend, as there is a single central location to manage the toggle settings. This simplifies development and ensures that the system runs smoothly, as dependencies flow in one direction.

## Considered Options

### Environment Variables
```
ENABLED_FEATURE_FLAGS = "premium,party-mode,feature-x"

function isFlagEnabled(flag: string): boolean {
  return (process.env.ENABLED_FEATURE_FLAGS ?? '').split(',').includes(flag);
}

const confettiScript = isFlagEnabled('party-mode')
  ? '<script src="confetti.js"></script>'
  : "";
```

### Unleashed Open Source Feature Flag (self host)

### Unleased (managed cloud)


...

## Decision Outcome

TBD


## Pros and Cons of the Options <!-- optional -->

### Environment Variable

[example | description | pointer to more information | …] <!-- optional -->

* Good, because it's the easiest/quickest way to implement feature flags
* Good, because the changes can be easily tested in separate environments, programmatically
* Good, because the changes can be scalable (by simply adding and subtracting from the env var array)
* Good, because it's easy to maintain and it's centralized
* Good, because it's easy to learn and understand
* Bad, because we will become dependent on SRE to make any changes in stage and production environment. However, it's not too bad because we will likely have to involve SRE when releasing to production anyways, and during release is when we will be deciding and modifying the environment variables. 
* Bad, because the "implementation" is limited to the current repo. In a world where we have multiple repos serving different parts of the app, there's no easy way to share

### [option 2]

[example | description | pointer to more information | …] <!-- optional -->

* Good, because [argument a]
* Good, because [argument b]
* Bad, because [argument c]
* … <!-- numbers of pros and cons can vary -->

### [option 3]

[example | description | pointer to more information | …] <!-- optional -->

* Good, because [argument a]
* Good, because [argument b]
* Bad, because [argument c]
* … <!-- numbers of pros and cons can vary -->

## Links <!-- optional -->

* [Link type] [Link to ADR] <!-- example: Refined by [ADR-0005](0005-example.md) -->
* … <!-- numbers of links can vary -->
