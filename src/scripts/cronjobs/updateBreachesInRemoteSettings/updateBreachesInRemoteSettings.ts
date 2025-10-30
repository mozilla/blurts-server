/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

import * as Sentry from "@sentry/node";
import * as HIBP from "../../../utils/hibp";
import { RemoteSettingsClient } from "../../../utils/remoteSettingsClient";
import { type Logger } from "winston";

type RemoteSettingsBreach = Pick<
  HIBP.HibpGetBreachesResponse[number],
  "Name" | "Domain" | "BreachDate" | "PwnCount" | "AddedDate" | "DataClasses"
>;

export type UpdateBreachesJobConfig = {
  user: string;
  password: string;
  server: string;
  breachesPath: string;
};

/**
 *
 * @throws if config is invalid
 */
export function validateConfig(): UpdateBreachesJobConfig {
  const FX_REMOTE_SETTINGS_WRITER_USER =
    process.env.FX_REMOTE_SETTINGS_WRITER_USER;
  const FX_REMOTE_SETTINGS_WRITER_PASS =
    process.env.FX_REMOTE_SETTINGS_WRITER_PASS;
  const FX_REMOTE_SETTINGS_WRITER_SERVER =
    process.env.FX_REMOTE_SETTINGS_WRITER_SERVER;

  if (
    !FX_REMOTE_SETTINGS_WRITER_USER ||
    !FX_REMOTE_SETTINGS_WRITER_PASS ||
    !FX_REMOTE_SETTINGS_WRITER_SERVER
  ) {
    throw new Error(
      "updatebreaches requires FX_REMOTE_SETTINGS_WRITER_SERVER, FX_REMOTE_SETTINGS_WRITER_USER, FX_REMOTE_SETTINGS_WRITER_PASS.",
    );
  } else {
    return {
      user: FX_REMOTE_SETTINGS_WRITER_USER,
      password: FX_REMOTE_SETTINGS_WRITER_PASS,
      server: FX_REMOTE_SETTINGS_WRITER_SERVER,
      breachesPath: "buckets/main-workspace/collections/fxmonitor-breaches",
    };
  }
}

export async function main(parentLogger: Logger) {
  const logger = parentLogger.child({ job: "updateBreachesInRemoteSettings" });

  // Add handlers for ensuring all logs are sent before shutdown
  async function shutdown() {
    return new Promise<void>(async (resolve) => {
      logger.on("finish", () => {
        resolve();
      });
      logger.end();
      if (Sentry.isInitialized()) {
        await Sentry.flush();
      }
    });
  }

  process.on("SIGTERM", async () => {
    await shutdown();
    process.exit(0);
  });

  const config = validateConfig();
  const remoteSettings = new RemoteSettingsClient({
    ...config,
    logger,
    fetch,
  });
  const allHibpBreaches = await HIBP.fetchHibpBreaches();
  const remoteBreaches = await remoteSettings.fetchRemoteBreachNames();
  // Get all valid password breaches that aren't currently in remote settings
  const newBreaches = allHibpBreaches.filter((breach) => {
    return (
      !breach.IsRetired &&
      !breach.IsSpamList &&
      !breach.IsFabricated &&
      breach.IsVerified &&
      breach.Domain !== "" &&
      breach.DataClasses.includes("Passwords") &&
      !remoteBreaches.has(breach.Name)
    );
  });

  logger.info("Breach data", {
    existing: remoteBreaches.size,
    new: newBreaches.length,
  });

  let failed = 0;

  for (const breach of newBreaches) {
    const data: RemoteSettingsBreach = {
      Name: breach.Name,
      Domain: breach.Domain,
      BreachDate: breach.BreachDate,
      PwnCount: breach.PwnCount,
      AddedDate: breach.AddedDate,
      DataClasses: breach.DataClasses,
    };

    try {
      await remoteSettings.addNewBreach(data);
    } catch (e) {
      failed += 1;
      logger.error("POSTing new breach to collection failed", {
        data,
        originalError: e,
      });
    }
  }
  if (failed !== newBreaches.length) {
    try {
      await remoteSettings.requestBreachesReview();
    } catch (e) {
      logger.error("Requesting review of collection failed", {
        originalError: e,
      });
      process.exitCode = 1;
    }
  }
  await shutdown();
}
