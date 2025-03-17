/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { usePathname } from "next/navigation";
import { useCallback } from "react";
// Imports for the `useGlean` and `useGa` hooks are restricted.

import { useGlean } from "./useGlean";
import { GleanMetricMap } from "../../telemetry/generated/_map";
import { convertCamelToSnakeCase } from "../functions/universal/convertCamelToSnakeCase";
import { sendGAEvent } from "../components/client/GoogleAnalyticsWorkaround";

const TelemetryPlatforms = {
  Glean: "glean",
  Ga: "ga",
} as const;

export const useTelemetry = () => {
  const path = usePathname();
  const recordGlean = useGlean();

  const { Glean, Ga } = TelemetryPlatforms;
  // Telemetry recording is mocked in our unit tests, therefore we
  // do not have test coverage for this method.
  /* c8 ignore start */
  const recordTelemetry = useCallback(
    <
      EventModule extends keyof GleanMetricMap,
      EventName extends keyof GleanMetricMap[EventModule],
    >(
      eventModule: EventModule,
      event: EventName,
      data: GleanMetricMap[EventModule][EventName],
      platforms: Array<
        (typeof TelemetryPlatforms)[keyof typeof TelemetryPlatforms]
      > = [Glean, Ga],
    ) => {
      if (platforms.includes(Glean)) {
        void recordGlean(eventModule, event, {
          path: path,
          ...data,
        });
      }
      if (platforms.includes(Ga)) {
        sendGAEvent("event", convertCamelToSnakeCase(eventModule), {
          ...data,
          action: event,
          page_location: path,
        });
      }
    },
    [Ga, Glean, path, recordGlean],
  );
  /* c8 ignore stop */

  return recordTelemetry;
};
