/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { captureException } from "@sentry/node";
import { logger } from "./logging";
import { getCountryCode } from "./getCountryCode";
import { headers } from "next/headers";

import {
  ExperimentData,
  defaultExperimentData,
} from "../../../telemetry/generated/nimbus/experiments";
import { getLocale } from "../universal/getLocale";
import { getL10n } from "./l10n";

/**
 * Call the Cirrus sidecar, which returns a list of eligible experiments for the current user.
 *
 * @see https://github.com/mozilla/experimenter/tree/main/cirrus
 * @param experimentationId Persistent ID for user, either guest or authenticated
 * @returns
 */
export async function getExperiments(
  experimentationId: string | undefined,
): Promise<ExperimentData> {
  const headerList = headers();

  // Return ISO language code.
  // @see https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes "set 1"
  const l10n = getL10n();
  const locale = getLocale(l10n).split("-")[0];

  // ISO country code from GCP header.
  const countryCode = getCountryCode(headerList);

  if (["stage", "production"].includes(process.env.APP_ENV ?? "local")) {
    // Stage or production: call the Nimbus Cirrus sidecar to fetch list of experiments.
    const serverUrl = process.env.NIMBUS_SIDECAR_URL;
    if (!serverUrl) {
      throw new Error("env var NIMBUS_SIDECAR_URL not set");
    }

    try {
      const response = await fetch(`${serverUrl}/v1/features`, {
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

      const experimentData = (await response.json()) as ExperimentData;
      return experimentData ?? defaultExperimentData;
    } catch (ex) {
      logger.error(`Could not connect to Cirrus on ${serverUrl}`, ex);
      captureException(ex);
    }
  } else {
    // Development environment: log Cirrus arguments, and fall back to default features list.
    logger.debug("nimbus_cirrus_arguments", {
      client_id: experimentationId,
      context: {
        locale,
        countryCode,
      },
    });
  }
  return defaultExperimentData;
}
