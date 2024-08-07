/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { captureException } from "@sentry/node";
import { logger } from "./logging";
import {
  ExperimentData,
  defaultExperimentData,
  localExperimentData,
} from "../../../telemetry/generated/nimbus/experiments";
import { ExperimentationId } from "./getExperimentationId";

/**
 * Call the Cirrus sidecar, which returns a list of eligible experiments for the current user.
 *
 * @see https://github.com/mozilla/experimenter/tree/main/cirrus
 * @param params
 * @param params.experimentationId
 * @param params.locale
 * @param params.previewMode
 * @param params.countryCode
 * @returns
 */
export async function getExperiments(params: {
  experimentationId: ExperimentationId;
  locale: string;
  countryCode: string;
  previewMode: boolean;
}): Promise<ExperimentData> {
  // TODO MNTOR-3380 - until Cirrus implements preview mode, set all Nimbus features to `true` for QA purposes.
  if (params.previewMode === true) {
    // Clone the `localExperimentData` object so we don't modify the exported data structure.
    const overriddenExperimentData = Object.fromEntries(
      Object.entries(localExperimentData).map(
        ([experimentId, experimentConfig]) => {
          return [experimentId, { ...experimentConfig, enabled: true }];
        },
      ),
    ) as ExperimentData;
    return overriddenExperimentData;
  }

  if (["local"].includes(process.env.APP_ENV ?? "local")) {
    return localExperimentData;
  }

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
        client_id: params.experimentationId,
        context: {
          // Nimbus takes a language, rather than a locale, hence the .split:
          language: params.locale.split("-")[0],
          region: params.countryCode.toUpperCase(),
        },
      }),
    });

    const experimentData = await response.json();

    return (experimentData as ExperimentData) ?? defaultExperimentData;
  } catch (ex) {
    logger.error(`Could not connect to Cirrus on ${serverUrl}`, ex);
    captureException(ex);
    return defaultExperimentData;
  }
}
