/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useCallback } from "react";
import EventMetricType from "@mozilla/glean/private/metrics/event";
import type { GleanMetricMap } from "../../telemetry/generated/_map";
import { useSession } from "next-auth/react";
import { hasPremium } from "../functions/universal/user";
import { useExperiments } from "../../contextProviders/experiments";

export const useGlean = () => {
  const session = useSession();
  const experimentData = useExperiments();
  // Telemetry recording is mocked in our unit tests, therefore we
  // do not have test coverage for this method.
  /* c8 ignore start */
  const isPremiumUser = hasPremium(session.data?.user);
  const record = useCallback(
    async <
      EventModule extends keyof GleanMetricMap,
      EventName extends keyof GleanMetricMap[EventModule],
    >(
      eventModule: EventModule,
      event: keyof GleanMetricMap[EventModule],
      data: GleanMetricMap[EventModule][EventName],
    ) => {
      const mod = (await import(
        `../../telemetry/generated/${eventModule}`
      )) as Record<keyof GleanMetricMap[EventModule], EventMetricType>;
      // Instead of the specific type definitions we generated in the npm script
      // `build-glean-types`, Glean takes a non-specific "ExtraArgs" type as
      // parameter to `record`.

      // Record the `plan_tier` key on all events.
      // `plan_tier` is set on every metric, but it's too much work for TypeScript
      // to infer that — hence the type assertion.
      (data as GleanMetricMap["button"]["click"]).plan_tier = isPremiumUser
        ? "Plus"
        : "Free";

      // Record the `nimbus_*` keys on all events.
      // `nimbus_*` is set on every metric, but it's too much work for TypeScript
      // to infer that — hence the type assertion.

      if (
        experimentData &&
        typeof experimentData["Enrollments"] !== "undefined"
      ) {
        (data as GleanMetricMap["button"]["click"]).nimbus_user_id =
          experimentData["Enrollments"]["nimbus_user_id"];
        (data as GleanMetricMap["button"]["click"]).nimbus_app_id =
          experimentData["Enrollments"]["app_id"];
        (data as GleanMetricMap["button"]["click"]).nimbus_experiment =
          experimentData["Enrollments"]["experiment"];
        (data as GleanMetricMap["button"]["click"]).nimbus_branch =
          experimentData["Enrollments"]["branch"];
        (data as GleanMetricMap["button"]["click"]).nimbus_experiment_type =
          experimentData["Enrollments"]["experiment_type"];
        (data as GleanMetricMap["button"]["click"]).nimbus_is_preview =
          experimentData["Enrollments"]["is_preview"].toString();
      } else {
        console.warn("No experiment data available for Glean");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mod[event].record(data as any);
    },
    [isPremiumUser, experimentData],
  );
  /* c8 ignore end */

  return record;
};
