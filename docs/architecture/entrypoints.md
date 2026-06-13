# Backend Entrypoints

This is the reference index of every way the Monitor backend can be invoked. Each row links to the exact handler in code, and (where the flow is non-trivial) to a sequence diagram in [`flows/`](./flows/).

## How to read this

`blurts-server` is a Next.js App Router app, so a "backend entrypoint" takes several shapes — page Server Components, route handlers, Server Actions, cron scripts, and Pub/Sub consumers. They are grouped below **by trigger source**: who or what kicks them off.

## Group A — Triggered by a schedule (cron)

Short-lived containers run by a k8s CronJob on a clock.

| Entrypoint             | Trigger                                                                                                 | Code                                                                             | Flow                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------- |
| **A1 · Sync breaches** | k8s CronJob every 10 min; pulls the HIBP catalog → upserts Postgres, syncs icons to S3, refreshes Redis | [syncBreaches/index.ts:16](../../src/scripts/cronjobs/syncBreaches/index.ts#L16) | [breach-sync-cron](./flows/breach-sync-cron.md) |
