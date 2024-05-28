When dependencies release new versions, we want to make sure they don't break
Monitor when we upgrade. This document describes what to look for when an
upgrade comes in.

## Things to know

Typically, we receive update notifications from
[Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts),
which periodically checks for new versions of dependencies, and then submits
pull requests to update them. Project members can view the [details of the
latest dependency
scans](https://github.com/mozilla/blurts-server/network/updates) to troubleshoot
issues.

Some terms to be aware of:

- **Checks**: at the bottom of a Pull Request's page, GitHub will list the
  outcomes of Continuous Integration runs. It calls these "checks".
- **CI results**: to view the results of a CI run (e.g. `unit-tests`), click
  the "Details" link next to the respective Check.
- **Preview deployment**: for every PR, an instance of Storybook with that PR's
  code is deployed to Netlify. You can view that deployment by clicking the
  "Details" link next to the `netlify/fx-monitor-storybook/deploy-preview` Check.
  (Additionally, at the time of writing, we are working on setting up a complete
  production-like environment with a PR's code. These can be found by following
  the "Preview URL" link that the `github-actions` bot leaves in a comment on
  PRs — by the time you're reading this, these may actually work 😅)

All dependency updates involve verifying that all Checks are successful,
investigating the results of failing CI runs, and a cursory inspection of the
changelog (if any) for anything that might be relevant to Monitor, in particular
when a dependency's [major version](https://semver.org/) is bumped, or when a
dependency doesn't use Semantic Versioning.

If you're unsure whether anything looks as expected, try to replicate what
you're doing on the `main` branch. If the results differ, there's probably an
issue with the update.
**Make sure to do a fresh install of the dependencies when switching branches!**

You can line up multiple Dependabot PRs for merging by leaving a comment saying
`@dependabot merge` on those PRs. Dependabot will then update the PRs with the
latest code from `main` and, if the Checks still succeed, merge it in.

## GitHub Actions

Every now and then a new version of a GitHub Action is released. You will
primarily need to check that those Actions still do what they're supposed to do.
For example, the unit tests Workflow (`/.github/workflows/unittests.yaml`) uses
the `setup-node` Action, so if that gets updated, the tests should continue to
run, and to result in a failing check if the tests fail.

## Docker

TODO: Describe how to verify that an update of the base Docker image doesn't
break the app.

## npm

What follows is a list of npm dependencies and how to check for potential
breakage when they release new versions:

### `*lint*`, `@types/*`, `typescript`, `*jest*`, `jsdom`, `@testing-library/*`, `fast-check`, `prettier`

For linters, type definitions, and non-Playwright testing-related packages, a
successful CI run generally provides enough confidence that the upgrade is fine.
That said, it can't harm to occassionally scan the results of the
`build`, `lint` or `unittests` CI runs to see if any new warnings were
added.

### `react-intersection-observer`

We're only using a test utility from this package (see the comments in
`/jest.setup.ts`), so if the tests pass, this upgrade was probably fine.

### `@playwright/test` and `dotenv`

Our Playwright tests run as two GitHub Actions Workflows: [PR e2e tests][] and
[cron e2e tests][]: the former runs a small subset of the end-to-end tests for PRs, the latter runs a more extensive suite once a day from the `main` branch.

TODO: Document how to run e2e tests locally, and refer to those docs here.

Once the PR is merged, you can wait for the daily test run, or manually run the
test by going to the [cron e2e tests][] GitHub Action page, select "Run
workflow", and pick the `main` branch and the `stage` environment.

[PR e2e tests]: https://github.com/mozilla/blurts-server/actions/workflows/e2e_pr.yml
[cron e2e tests]: https://github.com/mozilla/blurts-server/actions/workflows/e2e_cron.yml

### `storybook` and `@storybook/*`

Storybook allows us to view (parts of) the frontend in various states without
having to create a user account that is in exactly the right state. You can look
at the preview deployment that it still looks as expected.

### `@faker-js/faker`

Used to generate realistic-looking but fake data, primarily for use in Storybook
and tests. If the Storybooks still look normal and the tests succeed, this is
good to go.

### `react-aria` and `react-stately`

These dependencies handle most of the dynamic UI elements in our frontend, such
as the user menu and the app menu in the header, the modal dialogs, or the
toggle that allows you to switch between monthly and yearly pricing on the
landing page. To verfy these updates, open the preview deployments and check
that you can still interact with those using both a keyboard and a mouse.

### `@fluent/*`

[Fluent](https://projectfluent.org/) handles localisation, so verifying these
involves setting your browser language to something other than English, and
verifing that the website content indeed shows up in your chosen different
language.

### `next`

[Next.js](https://nextjs.org/) is the backbone of our website. You'll want to
run it, verify that you can still navigate from page to page, that data gets
saved successfully (e.g. by changing something on the settings page), and in
general that nothing looks off.

### `next-auth`

Next-Auth is responsible for handling the authentication process to Mozilla
Accounts, so if you can still log in, log out, and create a new account, it's
still working correctly.

### `sass`

[Sass](https://sass-lang.com/) gives us some handy tooling to ease working with
CSS. It can be verified by checking the preview deployment and making sure the
styling doesn't look weird.

### `react` and `react-dom`

[React](https://react.dev/) is our front-end framework. If you can open the
preview deployment and general interactions still work, these upgrades were
probably successful.

### `react-cookie`

Used to set and read various cookies. Perhaps the easiest way to verify this is
to ensure the `RebrandAnnouncement` flag is enabled, and then open the landing
page in a private browsing window. You should see a banner at the bottom saying

> Mozilla Monitor: New name, look and even more ways to reclaim your privacy.

If you dismiss that banner, refresh the page, and it doesn't re-appear,
everything is still working as expected.

### `@mozilla/glean` and `@next/third-parties`

These are used to learn about feature usages with respectively Glean (Mozilla's
internal tool) and Google Analytics. See `/docs/analytics.md` to learn how to
see that analytics data is still coming in correctly.

### `@leeoniya/ufuzzy`

This is used for the `<LocationAutocompleteInput>` component, or more
specifically, the API that provides location suggestions. It makes sure that you
can type e.g. `slc` and get "Salt Lake City" as a suggestion when entering your
address during the free data broker scan, so if that works, the update was fine.

### `canvas-confetti`

This is used for the small confetti animation when completing the guided
resolution flow. This can be seen in action in Storybook, in the story
`Logged in / Guided resolution / 4. Security recommendations / 4d. Done`.

### `husky` and `lint-staged`

Used to run basic code formatting when committing. You can verify that these
work locally by changing formatting (e.g. changing `"` into `'`) and checking
that it gets changed back (resulting in an empty commit) when committing.

### `@stripe/stripe-js`

This is only included for fraud detection on the website and shouldn't otherwise
influence behaviour, so updates should generally be safe.

### `knex` and `pg`

We use Knex.js (which builds on `pg`) to interact with the database, so if you
can load your data and change your settings, nothing broke.

### `mjml` and `mjml-browser`

MJML is a templating language that outputs HTML that works well across the
notoriously incompatible email clients. We also render this HTML in Storybook
(under the "Emails" section), so if you can view it properly there, this update
probably went well.

### `esbuild`

Used to compile cronjob scripts. You can test this by running
`npm run build-cronjobs` and verifying that the output still looks sane in
`/dist/scripts/cronjobs/`.

### `tsx`

Used to run cronjobs locally and compile them on the fly. You can verify this by
running `npm run dev:cronjobs`; if the cronjobs run like in `main`, it's still
working.

### `yaml`

Used to generate type definitions from our `nimbus.yaml` file. If
`npm run build-nimbus` still generates a sane-looking
`src/telemetry/generated/nimbus/experiments.ts`, it's still working as expected.

### `jsonwebtoken` and `jwk-to-pem`

TODO: Describe how the `fxa-rp-events` endpoint uses these packages.

### `uuid`

TODO: Describe how to verify that `uuid` updates didn't break anything.

### `@aws-sdk/*`

TODO: Describe how to verify that AWS SDK updates didn't break anything.

### `@google-cloud/pubsub`

TODO: Describe how to verify that GCP pubsub updates didn't break anything.

### `@grpc/grpc-js`

TODO: Describe how to verify that GRPC updates didn't break anything.

### `winston` and `@google-cloud/logging-winston`

TODO: Describe how to verify that logger updates didn't break anything.

### `@sentry/*`

TODO: Describe how to verify that Sentry updates didn't break anything.

### `nodemailer`

TODO: Describe how to verify that nodemailer updates didn't break anything.

### `adm-zip`

TODO: Describe how to verify that uploading auto-complete locations still works
as expected.
