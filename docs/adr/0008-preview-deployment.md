# Preview Deployment

- Status: Accepted
- Deciders: Monitor team
- Date: 2024-05-08

Technical Story: [MNTOR-3110](https://mozilla-hub.atlassian.net/browse/MNTOR-3110)

## Context and Problem Statement

With the first phase of CI/CD in place, at present, all changes merged into `main` are immediately deployed to the staging environment, but we are unable to continuously deploy to production because we cannot release changesets until they have been validated by QA, accessibility (a11y), and other teams.

Pull requests can be categorized into several types:

- Dependency updates (primarily through Dependabot)
- Feature enhancements and bug fixes that require QA verification
- Bug fixes that do not necessitate QA action
- Accessibility fixes that need approval from the a11y team

It seems counterproductive to delay all deployments due to a small number of changesets requiring verification. Moreover, the impact of postponing a11y changes is uncertain.

If we stick to our current release process, the steps would be:

- Establish a release branch
- Undo the unwanted changes (although cherry-picking the desired changes might be more appropriate in this case)
- Tag the release branch
- Deploy the tag to the staging environment, undoing the unwanted changes (which could interfere with the verification process)
- Deploy to the production environment
- Revert the staging environment to the main branch

This approach appears to be disruptive and prone to errors. If our test automation and feature flags are not yet reliable enough to ensure safe continuous deployment, we should consider how to enable PR verification by QA/a11y/etc. prior to merging, similar to the process we use with Netlify and Storybook for components.

We aim to identify potential solutions that would allow QA to be involved earlier in the process.

In this exploration, we want to investigate how we can incorporate QA earlier in the process. A crucial step would be to explore a Heroku preview-like solution, where a self-contained environment would be set up for each PR, and QA would be able to test the changes before merging changes into the main branch.

## Decision Drivers <!-- optional -->

- Solution that provides the best experience for developers
- Move away from predefined releases (weekly release cycle for stage, where QAs used to test), it's slow, manual, and incompatible with modern industry practices
- Five keys of CICD release process

## Considered Options

- No Change - stagger the stage and production weekly release like we do now
- Utilizing GCP Native tools (cloudrun + managed cloud SQL / postgres)
- Vercel (NextJS Cloud) + Neon
- GCP Cloud Run + Neon

## Decision Outcome

GCP Native only

This decision was made:

1. to avoid the need for additional vendor negotiations
2. simplify the architecture
3. security (encapsulated in GCP)

### Positive Consequences

- Easy to test with GCP sandbox, there's no need to acquire test accounts from external vendors

### Negative Consequences

- The cloudSQL setup has some drawbacks compare to using serverless Postgres (Neon):
  - The database is shared, so technically schema changes are not possible
  - There might be a few solutions for this, none is very straightforward:
    - namespace a new database for each PR (this process is time-consuming, expensive, and might be hard to set up in CICD)
    - namespace schemas within the same database (this would require significant changes to existing application code)

---

## Links <!-- optional -->

- [Google Cloud Run](https://cloud.google.com/run/docs)
- [Upgrade Guide (NextAuth.js v5)](https://authjs.dev/getting-started/migrating-to-v5)
- [Vercel](https://vercel.com/docs)
- [Neon](https://neon.tech/docs/postgres/postgres-intro)
- [Heroku Preview](https://devcenter.heroku.com/articles/github-integration-review-apps)
