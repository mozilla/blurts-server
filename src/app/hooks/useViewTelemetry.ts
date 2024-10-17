/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { IntersectionOptions, useInView } from "react-intersection-observer";
import { useTelemetry } from "./useTelemetry";
import { GleanMetricMap } from "../../telemetry/generated/_map";
import { RefObject } from "react";

export function useViewTelemetry<
  EventModule extends keyof Pick<
    GleanMetricMap,
    "ctaButton" | "banner" | "csatSurvey"
  >,
>(
  eventModule: EventModule,
  args: GleanMetricMap[EventModule]["view"],
  options?: IntersectionOptions,
) {
  const recordTelemetry = useTelemetry();
  const { ref } = useInView({
    skip: Object.keys(args).length === 0,
    threshold: 1,
    triggerOnce: true,
    ...options,
    onChange: (inView) => {
      // Since this function is only triggered once when an element is entering
      // the viewport and not again after leaving it. With the current setting
      // the following condition is not expected to get called. Keeping the
      // condition in place in case this changes.
      /* c8 ignore next 3 */
      if (!inView) {
        return;
      }
      recordTelemetry(eventModule, "view", args);
    },
  });

  return ref as unknown as RefObject<unknown>;
}
