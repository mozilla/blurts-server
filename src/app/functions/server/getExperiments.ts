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
import { getEnabledFeatureFlags } from "../../../db/tables/featureFlags";

/**
 * After we removing the `CirrusV2` flag, we can return the full `ExperimentData`/
 * But until then, we can make the old experiment data object look like the new one,
 * but we can't backfill the `Enrollments` property.
 */
export type ExperimentData_V2_Or_V2LikeV1 = Partial<ExperimentData> &
  Required<Pick<ExperimentData, "Features">>;

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
}): Promise<ExperimentData_V2_Or_V2LikeV1> {
  if (["local"].includes(process.env.APP_ENV ?? "local")) {
    return localExperimentData;
  }

  if (!process.env.NIMBUS_SIDECAR_URL) {
    throw new Error("env var NIMBUS_SIDECAR_URL not set");
  }

  const serverUrl = new URL(process.env.NIMBUS_SIDECAR_URL);
  const flags = await getEnabledFeatureFlags({ isSignedOut: true });
  if (flags.includes("CirrusV2")) {
    serverUrl.pathname = "/v2/features";
  } else {
    serverUrl.pathname = "/v1/features";
  }

  try {
    if (params.previewMode === true) {
      serverUrl.searchParams.set("nimbus_preview", "true");
    }

    logger.info("Sending request to Cirrus", {
      serverUrl: serverUrl.toString(),
      previewMode: params.previewMode,
    });

    const response = await fetch(serverUrl, {
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

    if (!response.ok) {
      logger.error("Cirrus request failed", {
        status: response.status,
        url: serverUrl.toString(),
      });
      throw new Error(`Cirrus request failed: ${response.statusText}`);
    }

    // With the `CirrusV2` flag enabled, the response is `ExperimentData`,
    // otherwise, it's just `ExperimentData["Features"]`.
    const json = (await response.json()) as
      | ExperimentData
      | ExperimentData["Features"];

    let experimentData: ExperimentData_V2_Or_V2LikeV1;
    if (flags.includes("CirrusV2")) {
      experimentData = json as ExperimentData;
    } else {
      experimentData = {
        Features: json as ExperimentData["Features"],
      };
    }

    return (experimentData as ExperimentData) ?? defaultExperimentData;
  } catch (ex) {
    logger.error("Could not connect to Cirrus", {
      serverUrl,
      ex,
      flags,
      params,
    });
    captureException(ex);
    return defaultExperimentData;
  }
}
