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
## Maintenance & Best Practices
### Naming Flags
Defining a pattern or naming convention is generally a good practice for keeping things organized. Engineers can quickly identify from the name what the feature is about and be able to recognize what areas of the application for which the feature is being used. I'll list a few useful examples of naming structures and demonstrate the practical benefits.

A good naming **convention** I found is as follows:
```
section_featurepurpose_service
```

The feature name example that follows has three parts:
1. section: we present the name of the section the feature is gating. 
2. purpose: indicates what the feature does
3. layer: where in the stack the feature is located

An **example** of such names would be:
```
settings_premium_email
```

In this example, the feature is gating functionality in the "settings" section. It is a part of the "premium" feature. The main area of concern is the "email"
service.

### Retiring Flags / Zombies
One of the worst problems when an org adopts feature flags is that the number of flags within a product can grow to become overwhelming. No one is entirely sure who’s responsible for which flags or which flags are no longer being used.

We need to have a process in place where flags are retired after they serve their purpose. This can be done as a part of our agile process (grooming /planning) where we always have a task in the working backlog to clean up the feature flags that were created for the current feature. It's important to not mark this task as tech debt though, since tech debts can have a nasty tendency of being perpetually deprioritized.

For more drastic measure, there are teams that opt to place a limit on the number of active flags they have under management. This incentivizes the removal of old flags to make room for a new flag.

It's much easier to spot the zombie flags if our code is being maintained properly after feature complete. The if/elses that usually associate with feature flags should be deleted upon completition of a feature, and with a simple search, we should be able to quickly spot stale feature flags

### Ownership
Looking ahead, there may come a time when we need a system that enables the ability to assign ownership of a flag

Feature flags offer a powerful way to directly modify the behavior of production systems, acting as a kill switch. The configuration of flags should undergo the same level of change control as the deployment of production code. Associating explicit ownership with a flag allows for the application of change control policies. For instance, individuals can be restricted from modifying flags they do not own, or approval can be required before making feature-flag configuration changes in the production environment.

### Flag Tagging
Attaching information like expiration dates and ownership to a flag are specific examples of a more general capability: the ability to tag flags.

Tagging refers to the ability to attach arbitrary key:value pairs to a feature flag. This concept is employed in infrastructure systems like Kubernetes and AWS. It provides a highly adaptable method for users to associate semantic metadata with entities within the system. Tags can be used to track various aspects of a flag, such as its creation date, expiration date, life-cycle status, flag type, ownership, authorized modifier etc.

## Considered Options

### Environment Variables

### Unleashed Open Source Feature Flag (self host)

### Unleased (managed cloud)

## Decision Outcome

TBD


## Pros and Cons of the Options <!-- optional -->

### Environment Variable

```
ENABLED_FEATURE_FLAGS = "premium,party-mode,feature-x"

function isFlagEnabled(flag: string): boolean {
  return (process.env.ENABLED_FEATURE_FLAGS ?? '').split(',').includes(flag);
}

const confettiScript = isFlagEnabled('party-mode')
  ? '<script src="confetti.js"></script>'
  : "";
```

* Good, because it's the easiest/quickest way to implement feature flags
* Good, because the changes can be easily tested in separate environments, programmatically
* Good, because the changes can be scalable (by simply adding and subtracting from the env var array)
* Good, because it's easy to maintain and it's centralized
* Good, because it's easy to learn and understand
* Bad, because we will become dependent on SRE to make any changes in stage and production environment. However, it's not too bad because we will likely have to involve SRE when releasing to production anyways, and during release is when we will be deciding and modifying the environment variables. 
* Bad, because the "implementation" is limited to the current repo. In a world where we have multiple repos serving different parts of the app, there's no easy way to share

### Unleash (Cloud)


* Good, because set up is minimized
* Good, because it is manged so we have support when things fall apart, relatively worry-free
* Good, because new features get added without costing us valuable engineering time
* Bad, because we have to pay and probably sign a contract
* Bad, because we adds an additonal dependency


### Unleash (self-hosted)



* Good, because we have visibility into the entire stack
* Good, because it is more flexible, we can pick and choose what we need
* Good, because it's open source and we can fork / modify features
* Bad, because we need more support from SRE
* Bad, because we have to keep up with open source development
* Bad, because we won't have the support that a paying customer would get, have to rely on Github issues mainly for support

## Links <!-- optional -->

* [Unleash: Open source](https://github.com/Unleash/unleash)
* [Unleash: Hosted](https://www.getunleash.io/)
* [Feature Flags in Next.js with iron-session](https://doist.dev/posts/feature-flags-iron-session-nextjs)