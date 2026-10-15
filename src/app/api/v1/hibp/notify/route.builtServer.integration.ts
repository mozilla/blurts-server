/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Starts the production build with `next start` (what the Docker image runs), POSTs a breach
 * notification to it, and checks that the message lands on Pub/Sub.
 *
 * Unit tests load @google-cloud/pubsub and @grpc/grpc-js from node_modules. Production runs
 * whatever `next build` emitted. MNTOR-5314 only broke the latter, so this test must go
 * through a real build. Run `npm run build` first.
 *
 * Emulator mode: set PUBSUB_EMULATOR_HOST. The test makes a throwaway subscription.
 * Real mode: leave PUBSUB_EMULATOR_HOST unset, provide GCP credentials, and set
 * PUBSUB_SMOKE_SUBSCRIPTION_NAME to an existing subscription on GCP_PUBSUB_TOPIC_NAME.
 */

import { spawn, type ChildProcess } from "node:child_process";
import { existsSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { it, expect, beforeAll, afterAll } from "vitest";
import env from "@next/env";
import { PubSub, type Message, type Subscription } from "@google-cloud/pubsub";

env.loadEnvConfig(process.cwd());

const isEmulator = Boolean(process.env.PUBSUB_EMULATOR_HOST);
const port = process.env.BUILT_SERVER_PORT ?? "6070";
const notifyToken = `built-server-test-${randomUUID()}`;
const projectId = requireEnv("GCP_PUBSUB_PROJECT_ID");
const topicName = requireEnv("GCP_PUBSUB_TOPIC_NAME");

let server: ChildProcess;
let serverOutput = "";
let subscription: Subscription;

beforeAll(async () => {
  if (!existsSync(".next/BUILD_ID")) {
    throw new Error("No production build found. Run `npm run build` first.");
  }

  const pubsub = new PubSub({ projectId });
  subscription = isEmulator
    ? (
        await pubsub
          .topic(topicName)
          .createSubscription(`built-server-test-${randomUUID()}`)
      )[0]
    : pubsub.subscription(requireEnv("PUBSUB_SMOKE_SUBSCRIPTION_NAME"));

  server = spawn("npx", ["next", "start", "-p", port], {
    env: {
      ...process.env,
      NODE_ENV: "production",
      HIBP_NOTIFY_TOKEN: notifyToken,
    },
  });
  server.stdout?.on("data", (d) => (serverOutput += d));
  server.stderr?.on("data", (d) => (serverOutput += d));
  await waitForServer(`http://localhost:${port}/`, 60_000);
}, 90_000);

afterAll(async () => {
  server?.kill();
  await subscription?.close();
  if (isEmulator) {
    await subscription?.delete();
  }
});

it("publishes a POSTed breach notification to Pub/Sub", async () => {
  const notification = {
    breachName: `built-server-test-${randomUUID()}`,
    hashPrefix: "abcde",
    hashSuffixes: ["0123456789"],
  };

  // A failing publish can retry for up to 60s before the route answers.
  const res = await fetch(`http://localhost:${port}/api/v1/hibp/notify`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${notifyToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(notification),
    signal: AbortSignal.timeout(150_000),
  });

  // Check the log first: if publishing failed, this prints the route's logged Pub/Sub error.
  expect(serverOutput).not.toContain("error_queuing_hibp_breach");
  expect(res.status).toBe(200);
  expect(
    await waitForMessage(subscription, notification.breachName, 30_000),
  ).toEqual(notification);
}, 200_000);

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} must be set`);
  }
  return value;
}

async function waitForServer(url: string, timeoutMs: number) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`next start exited early:\n${serverOutput}`);
    }
    try {
      await fetch(url);
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  throw new Error(
    `next start did not answer within ${timeoutMs}ms:\n${serverOutput}`,
  );
}

// Ack everything we see. The smoke-test subscription only carries test traffic, and leaving
// stale messages unacked would make later runs redeliver them.
function waitForMessage(
  sub: Subscription,
  breachName: string,
  timeoutMs: number,
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      sub.removeListener("message", onMessage);
      reject(
        new Error(`No Pub/Sub message for ${breachName} within ${timeoutMs}ms`),
      );
    }, timeoutMs);
    function onMessage(message: Message) {
      message.ack();
      const data = JSON.parse(message.data.toString());
      if (data.breachName === breachName) {
        clearTimeout(timer);
        sub.removeListener("message", onMessage);
        resolve(data);
      }
    }
    sub.on("message", onMessage);
  });
}
