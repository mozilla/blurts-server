# Feature Flags

* Status: proposed
* Deciders: Amri Toufali, Joe Zhou, Rob Helmer, Florian Zia, Emmett Lynch, Vincent Tunru
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

* [driver 1, e.g., a force, facing concern, …]
* [driver 2, e.g., a force, facing concern, …]
* … <!-- numbers of drivers can vary -->

## Considered Options

* [option 1]
* [option 2]
* [option 3]
* … <!-- numbers of options can vary -->

## Decision Outcome

Chosen option: "[option 1]", because [justification. e.g., only option, which meets k.o. criterion decision driver | which resolves force force | … | comes out best (see below)].

### Positive Consequences <!-- optional -->

* [e.g., improvement of quality attribute satisfaction, follow-up decisions required, …]
* …

### Negative Consequences <!-- optional -->

* [e.g., compromising quality attribute, follow-up decisions required, …]
* …

## Pros and Cons of the Options <!-- optional -->

### [option 1]

[example | description | pointer to more information | …] <!-- optional -->

* Good, because [argument a]
* Good, because [argument b]
* Bad, because [argument c]
* … <!-- numbers of pros and cons can vary -->

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
