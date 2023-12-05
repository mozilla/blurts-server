/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { usePathname } from "next/navigation";
import { useGa } from "./useGa";
import { useGlean } from "./useGlean";
import { GleanMetricMap } from "../../telemetry/generated/_map";

export const useTelemetry = () => {
  const path = usePathname();
  const recordGlean = useGlean();
  const { gtag } = useGa();

  const record = <
    EventModule extends keyof GleanMetricMap,
    EventName extends keyof GleanMetricMap[EventModule],
  >(
    eventModule: EventModule,
    event: EventName,
    data: GleanMetricMap[EventModule][EventName],
  ) => {
    void recordGlean(eventModule, event, data);
    gtag.record({
      type: "event",
      name: eventModule,
      params: {
        ...data,
        action: event,
        page_location: path,
      },
    });
  };

  return record;
};
