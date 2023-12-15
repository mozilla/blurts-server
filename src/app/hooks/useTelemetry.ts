/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { usePathname } from "next/navigation";
// Imports for the `useGlean` and `useGa` hooks are restricted.
/* eslint-disable no-restricted-imports */
import { useGa } from "./useGa";
import { useGlean } from "./useGlean";
/* eslint-enable no-restricted-imports */
import { GleanMetricMap } from "../../telemetry/generated/_map";

const TelemetryPlatforms = {
  Glean: "glean",
  Ga: "ga",
} as const;

export const useTelemetry = () => {
  const path = usePathname();
  const recordGlean = useGlean();
  const { gtag } = useGa();

  const { Glean, Ga } = TelemetryPlatforms;
  const record = <
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
      gtag.record({
        type: "event",
        name: eventModule,
        params: {
          ...data,
          action: event,
          page_location: path,
        },
      });
    }
  };

  return record;
};
