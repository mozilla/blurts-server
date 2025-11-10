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
import { loadNextHeaders } from "./loadNextHeaders";
import { CONST_CIRRUS_V2_PATHNAME } from "../../../constants";

/**
 * Call the Cirrus sidecar, which returns a list of eligible experiments for the current user.
 *
 * @see https://github.com/mozilla/experimenter/tree/main/cirrus
 * @param params
 * @param params.experimentationId
 * @param params.locale
 * @param params.countryCode
 * @returns
 */
export async function getExperiments(params: {
  experimentationId?: ExperimentationId;
  locale: string;
  countryCode: string;
}): Promise<ExperimentData> {
  if (!params.experimentationId) {
    return defaultExperimentData;
  }

  if (["local"].includes(process.env.APP_ENV ?? "local")) {
    return localExperimentData;
  }

  if (!process.env.NIMBUS_SIDECAR_URL) {
    throw new Error("env var NIMBUS_SIDECAR_URL not set");
  }

  const serverUrl = new URL(process.env.NIMBUS_SIDECAR_URL);
  const flags = await getEnabledFeatureFlags({ isSignedOut: true });
  serverUrl.pathname += CONST_CIRRUS_V2_PATHNAME;

  const nextHeaders = await loadNextHeaders();
  let previewMode = false;
  if (nextHeaders) {
    const headersList = await nextHeaders.headers();
    // Check if the Nimbus preview mode has been set by the middleware.
    const nimbusPreviewMode = headersList.get("x-nimbus-preview-mode");
    if (nimbusPreviewMode === "true") {
      previewMode = true;
    }
  }

  try {
    if (previewMode === true) {
      serverUrl.searchParams.set("nimbus_preview", "true");
    }

    logger.info("Sending request to Cirrus", {
      serverUrl: serverUrl.toString(),
      previewMode,
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

    const json = (await response.json()) as ExperimentData;
    const experimentData = json;

    return (experimentData as ExperimentData) ?? defaultExperimentData;
  } catch (ex) {
    logger.error("Could not connect to Cirrus", {
      serverUrl,
      ex,
      flags,
      params,
      previewMode,
    });
    captureException(ex);
    return defaultExperimentData;
  }
}
