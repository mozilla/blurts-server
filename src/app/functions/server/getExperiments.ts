/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { captureException } from "@sentry/node";

/**
 * Call the Cirrus sidecar, which returns a list of eligible experiments for the current user.
 *
 * @see https://github.com/mozilla/experimenter/tree/main/cirrus
 * @param userId Persistent ID for user, either guest or authenticated
 * @returns
 */
export async function getExperiments(
  userId: string | undefined
): Promise<unknown> {
  const serverUrl = process.env.NIMBUS_SIDECAR_URL;
  if (!serverUrl) {
    throw new Error("env var NIMBUS_SIDECAR_URL not set");
  }

  let features;
  try {
    features = await fetch(`${serverUrl}/v1/features/`, {
      method: "POST",
      body: JSON.stringify({ client_id: userId, context: {} }),
    });
  } catch (ex) {
    console.error(`Could not connect to Cirrus on ${serverUrl}`, ex);
    captureException(ex);
  }

  return features?.json();
}
