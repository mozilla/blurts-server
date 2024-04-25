/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { captureException } from "@sentry/node";
import { logger } from "./logging";
import { getServerSession } from "./getServerSession";
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
 * @param experimentationId Persistent ID for user, either guest or authenticated
 * @returns
 */
export async function getExperiments(
  experimentationId: string | undefined,
): Promise<Features | undefined> {
  const session = await getServerSession();
  const headerList = headers();

  if (["stage", "production"].includes(process.env.APP_ENV ?? "local")) {
    // Stage or production: call the Nimbus Cirrus sidecar to fetch list of experiments.
    const serverUrl = process.env.NIMBUS_SIDECAR_URL;
    if (!serverUrl) {
      throw new Error("env var NIMBUS_SIDECAR_URL not set");
    }

    try {
      // Parse Accept-Language header into ISO language code.
      // @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
      // @see https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes "set 1"
      const localeRegion = session?.user.fxa?.locale.split(",")[0];
      const locale = localeRegion?.split("-")[0];

      // ISO country code from GCP header.
      const countryCode = getCountryCode(headerList);
      const features = await fetch(`${serverUrl}/v1/features`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          client_id: experimentationId,
          context: {
            locale,
            countryCode,
          },
        }),
      });

      return features?.json() as unknown as Features;
    } catch (ex) {
      logger.error(`Could not connect to Cirrus on ${serverUrl}`, ex);
      captureException(ex);
    }
  } else {
    // Development environment: return mocked features list.
    return {
      "example-feature": { enabled: true },
    } as unknown as Features;
  }
}
