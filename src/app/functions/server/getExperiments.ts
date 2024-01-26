/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { captureException } from "@sentry/node";
import { logger } from "./logging";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/utils/auth";
import { getCountryCode } from "./getCountryCode";
import { headers } from "next/headers";

interface Features {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any;
}

/**
 * Call the Cirrus sidecar, which returns a list of eligible experiments for the current user.
 *
 * @see https://github.com/mozilla/experimenter/tree/main/cirrus
 * @param userId Persistent ID for user, either guest or authenticated
 * @returns
 */
export async function getExperiments(
  userId: string | undefined,
): Promise<Features | undefined> {
  const session = await getServerSession(authOptions);
  const headerList = headers();

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
          context: {
            locale: session?.user.fxa?.locale,
            countryCode: getCountryCode(headerList),
          },
        }),
      });

      return features?.json() as unknown as Features;
    } catch (ex) {
      logger.error(`Could not connect to Cirrus on ${serverUrl}`, ex);
      captureException(ex);
    }
  }
}
