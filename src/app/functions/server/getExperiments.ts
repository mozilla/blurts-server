/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { captureException } from "@sentry/node";

/**
 * Call the Cirrus sidecar, which returns a list of eligible experiments for the current user.
 *
 * @see https://github.com/mozilla/experimenter/tree/main/cirrus
 * @param userId Persistent ID for user, either guest or authenticated
 * @returns {object}
 */
export async function getExperiments(userId: string) {
  const serverUrl = process.env.NIMBUS_SIDECAR_URL ?? process.env.SERVER_URL;
  if (!serverUrl) {
    throw new Error("env vars NIMBUS_SERVER_URL and SERVER_URL not set");
  }

  try {
    const features = await fetch(`${serverUrl}/v1/features/`, {
      method: "POST",
      body: JSON.stringify({ client_id: userId }),
    });

    return features;
  } catch (ex) {
    console.error(`Could not connect to Cirrus on ${serverUrl}`, ex);
    captureException(ex);
    throw ex;
  }
}
