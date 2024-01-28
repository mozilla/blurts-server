/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { captureException, captureMessage } from "@sentry/node";
import { logger } from "./logging";

/**
 * Call the Cirrus sidecar, which returns a list of eligible experiments for the current user.
 *
 * @see https://github.com/mozilla/experimenter/tree/main/cirrus
 * @param userId Persistent ID for user, either guest or authenticated
 * @returns
 */
export async function getExperiments(
  userId: string | undefined,
): Promise<unknown> {
  if (["stage", "production"].includes(process.env.APP_ENV ?? "local")) {
    const serverUrl = process.env.NIMBUS_SIDECAR_URL;
    if (!serverUrl) {
      throw new Error("env var NIMBUS_SIDECAR_URL not set");
    }

    try {
      const features = await fetch(`${serverUrl}/v1/features/`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          client_id: userId,
          context: { key: "example-key" },
        }),
      });

      return features?.json();
    } catch (e) {
      if (e instanceof Error) {
        const error = e.message;
        const stack = e.stack;
        logger.error("cirrus_connection_error", { serverUrl, error, stack });
        captureException(e);
      } else {
        const error = String(e);
        logger.error("cirrus_connection_error", { serverUrl, error });
        captureMessage(error);
      }
    }
  }
}
