/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useCallback } from "react";
import EventMetricType from "@mozilla/glean/private/metrics/event";
import type { GleanMetricMap } from "../../telemetry/generated/_map";
import { useSession } from "next-auth/react";
import { hasPremium } from "../functions/universal/user";

export const useGlean = () => {
  const session = useSession();
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

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mod[event].record(data as any);
    },
    [isPremiumUser],
  );

  return record;
};
