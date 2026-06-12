# Backend Entrypoints

This is the reference index of every way the Monitor backend can be invoked. Each row links to the exact handler in code, and (where the flow is non-trivial) to a sequence diagram in [`flows/`](./flows/).

## How to read this

`blurts-server` is a Next.js App Router app, so a "backend entrypoint" takes several shapes — page Server Components, route handlers, Server Actions, cron scripts, and Pub/Sub consumers. They are grouped below **by trigger source**: who or what kicks them off.

## Group A — Triggered by a schedule (cron)

Short-lived containers run by a k8s CronJob on a clock.

| Entrypoint             | Trigger                                                                                                 | Code                                                                             | Flow                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------- |
| **A1 · Sync breaches** | k8s CronJob every 10 min; pulls the HIBP catalog → upserts Postgres, syncs icons to S3, refreshes Redis | [syncBreaches/index.ts:16](../../src/scripts/cronjobs/syncBreaches/index.ts#L16) | [breach-sync-cron](./flows/breach-sync-cron.md) |

## Group B — Triggered by an external service (webhooks)

| Entrypoint                        | Trigger                                                                              | Code                                                                     | Flow                                          |
| --------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ | --------------------------------------------- |
| **B1 · HIBP breach notification** | Have I Been Pwned POSTs on a new breach; validates bearer token, enqueues to Pub/Sub | [hibp/notify/route.ts:34](../../src/app/api/v1/hibp/notify/route.ts#L34) | [breach-pipeline](./flows/breach-pipeline.md) |

## Group C — Triggered by a queue message (consumers)

Long-running consumer containers woken by a GCP Pub/Sub streaming pull.

| Entrypoint                   | Trigger                                                                        | Code                                                                                       | Flow                                          |
| ---------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------- |
| **C1 · Email breach alerts** | Pulls a Pub/Sub subscription on the topic B1 publishes to → sends alert emails | [emailBreachAlerts/index.ts:39](../../src/scripts/cronjobs/emailBreachAlerts/index.ts#L39) | [breach-pipeline](./flows/breach-pipeline.md) |

## Related docs

- [ADR 0003 — Use a queue for backend services](../adr/0003-use-queue-for-backend-services.md) — why B1 hands off to Pub/Sub instead of emailing inline.
