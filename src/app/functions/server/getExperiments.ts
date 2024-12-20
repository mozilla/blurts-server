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
}): Promise<ExperimentData["Features"]> {
  if (["local"].includes(process.env.APP_ENV ?? "local")) {
    return localExperimentData["Features"];
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

    const json = await response.json();

    let experimentData;
    if (flags.includes("CirrusV2")) {
      experimentData = json["Features"];
    } else {
      experimentData = json;
    }

    return (
      (experimentData as ExperimentData["Features"]) ??
      defaultExperimentData["Features"]
    );
  } catch (ex) {
    logger.error("Could not connect to Cirrus", { serverUrl, ex });
    captureException(ex);
    return defaultExperimentData["Features"];
  }
}
