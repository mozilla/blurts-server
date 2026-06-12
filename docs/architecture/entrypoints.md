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

| Entrypoint                   | Trigger                                                           | Code                                                                                       | Flow                                          |
| ---------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------- |
| **C1 · Email breach alerts** | Pulls the Pub/Sub topic that B1 publishes to → sends alert emails | [emailBreachAlerts/index.ts:39](../../src/scripts/cronjobs/emailBreachAlerts/index.ts#L39) | [breach-pipeline](./flows/breach-pipeline.md) |

## Group D — Triggered by an end user (browser → page render)

Next.js page Server Components: a browser GET renders them on the server. The URL is the folder path.

| Entrypoint                         | Trigger                                                                  | Code                                                                                                                             | Flow                                            |
| ---------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **D1 · Recent Data Breaches page** | Browser GET `/breaches`; renders the full public breach catalog          | [breaches/page.tsx:36](<../../src/app/[locale]/(redesign)/(public)/breaches/page.tsx#L36>)                                       | [breach-read-path](./flows/breach-read-path.md) |
| **D2 · Breach detail page**        | Browser GET `/breach-details/[breachName]`; one breach by name           | [breach-details/page.tsx:51](<../../src/app/[locale]/(redesign)/(public)/breach-details/[breachName]/page.tsx#L51>)              | [breach-read-path](./flows/breach-read-path.md) |
| **D3 · Dashboard breaches**        | Browser GET `/user/dashboard` (authenticated); per-user matched breaches | [dashboard/page.tsx:32](<../../src/app/[locale]/(redesign)/(authenticated)/user/(dashboard)/dashboard/[[...slug]]/page.tsx#L32>) | [breach-read-path](./flows/breach-read-path.md) |

## Related docs

- [ADR 0003 — Use a queue for backend services](../adr/0003-use-queue-for-backend-services.md) — why B1 hands off to Pub/Sub instead of emailing inline.
- [`docs/fx-integration.mmd`](../fx-integration.mmd) — the Firefox ↔ FxA ↔ Monitor OAuth handshake.
