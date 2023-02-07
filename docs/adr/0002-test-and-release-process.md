# [short title of solved problem and solution]

* Status: proposed
* Deciders:
* Date: 2022-02-06

Technical Story: https://mozilla-hub.atlassian.net/browse/MNTOR-1162

## Context and Problem Statement

We need to ensure quality and stability of Monitor as it goes from
design to development to QA to release.

There are several steps to release a fix or new feature:

1. new feature or fix is designed and described in mocks/issues/etc.
2. developer creates changeset
3. changeset is tested and deployed to stage
4. QA verifies changeset(s) on stage
5. changeset is released to production
6. QA verifies changeset(s) on production
7. user reports and automated alerts are watched, for unexpected issues

The further along this pipeline that a bug persists, the more people it
involves, and the more expensive it tends to be.

## Considered Options

Testing for regressions as a changeset moves from one stage to the next
is essential to determine if it's safe to go to the next step. Regression
tests can be automated and/or manual, but it's important that they are
run consistently, and also monitored and improved over time.

We assume the following:

1. developers will be responsible for sign-off from product/UX before merging to staging server
2. QA will not be responsible for testing until changeset(s) are on staging server

This still leaves some decisions to be made around exactly the mechanics of
testing, merging, and releasing:

Decision 1 (testing)

In addition to unit tests, having end-to-end integration tests to check
for regressions can be valuable:

* Option 1a - run automated playwright tests on PR and against stage + prod
* Option 1b - manual regression tests again stage + prod

Decision 2 (merging) - who merges and pushed to stage?

* Option 2a - devs ensure regression tests have run before merge
* Option 2b - release manager cherry-picks changes

Decision 3 (release) - how often to release?

* Option 3a - a release is prepared at regular intervals, bundling multiple changesets
* Option 3b - changesets are pushed individually (continuous delivery)

## Decision Outcome

1a - run automated playwright tests on PR and against stage + prod
2a - devs ensure regression tests have run before merge
3a - release is prepared at regular intervals, bundling multiple changesets

Developers need to ensure that their feature passes regressions tests,
and that all other sign-offs required sign-offs are done, before merging to
`main`.

The simplest way to do this is to have each GitHub PR have its own temporary
dev enviroment (sometimes called a "preview URL") which can be used by
product, UX, and other developers to review changes before merging.

Heroku used to support this, but temporarily disabled a required feature and
 are working on re-enabling it in https://github.com/heroku/roadmap/issues/1

In the meantime, this means the dev workflow looks like:

1. ensure that designs (UX mocks, product requirements, etc) are complete enough to implement
2. implement feature/fix and unit tests as appropriate in new PR
3. create development enviroment to track PR
4. ensure that all sign-offs are received, and regressions tests pass
5. merge to `main` branch, which makes these changeset(s) eligible for the next scheduled release

### Positive Consequences <!-- optional -->

* quality issues are caught as soon as possible in the design->release pipeline
* no bottleneck on a particular person or role
* minimal changes to current QA/release cadence
* developer environments cannot interfere with each other

### Negative Consequences <!-- optional -->

* more automation means more infra to monitor
* end-to-end tests can fail in ways that require extra debugging to determine
  * good unit tests can help
* there is some evidence that batching unrelated changes increases risk vs CD
* devs have an extra burden of setting up / tearing down dev environments, until Heroku is ready (or a replacement is found)

## Links <!-- optional -->

* [Link type] [Link to ADR] <!-- example: Refined by [ADR-0005](0005-example.md) -->
* … <!-- numbers of links can vary -->
