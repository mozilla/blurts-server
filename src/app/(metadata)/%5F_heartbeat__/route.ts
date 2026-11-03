/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import createDbConnection from "@/db/connect";
import { redisClient } from "@/db/redis/client";
import { logger } from "@/app/functions/server/logging";

// Note: this URL starts with an underscore, but Next.js interprets that as
//       marking the file as private:
//       https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders
//       To actually use an underscore, we need to name it %5F instead.

const CHECK_TIMEOUT_MS = 2000;

type CheckResult = "ok" | "error" | "timeout";

async function runCheck(check: () => Promise<unknown>): Promise<CheckResult> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  // Timeout checks whether it will hang, e.g. a query waiting
  // for a free connection when every connection in the pool is in use,
  // would otherwise stall this response indefinitely.
  const timeout = new Promise<CheckResult>((resolve) => {
    timer = setTimeout(() => resolve("timeout"), CHECK_TIMEOUT_MS);
  });
  try {
    return await Promise.race([check().then(() => "ok" as const), timeout]);
  } catch {
    return "error";
  } finally {
    clearTimeout(timer);
  }
}

export async function GET() {
  // Reuses the shared pool and client; opening new connections here would
  // add to the exhaustion this endpoint is meant to detect.
  const [database, redis] = await Promise.all([
    runCheck(() => createDbConnection().raw("SELECT 1")),
    runCheck(() => redisClient().ping()),
  ]);

  const healthy = database === "ok" && redis === "ok";
  if (!healthy) {
    logger.error("heartbeat_check_failed", { database, redis });
  }

  return NextResponse.json(
    { status: healthy ? "ok" : "error", checks: { database, redis } },
    { status: healthy ? 200 : 500 },
  );
}
