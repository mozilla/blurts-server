/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useContext, useEffect } from "react";
import Glean from "@mozilla/glean/web";
import EventMetricType from "@mozilla/glean/private/metrics/event";
import type { GleanMetricMap } from "../../telemetry/generated/_map";
import { PublicEnvContext } from "../../contextProviders/public-env";
import { useSession } from "next-auth/react";
import { hasPremium } from "../functions/universal/user";

export const useGlean = (experimentationId?: string) => {
  const { PUBLIC_APP_ENV } = useContext(PublicEnvContext);

  const session = useSession();
  const isPremiumUser = hasPremium(session.data?.user);

  // Initialize Glean only on the first render of our custom hook.
  useEffect(() => {
    // Enable upload only if the user has not opted out of tracking.
    const uploadEnabled =
      navigator.doNotTrack !== "1" ||
      document.location.hostname === "localhost";

    if (!PUBLIC_APP_ENV) {
      throw new ErrorEvent("No PUBLIC_APP_ENV provided for Glean");
    }

    // Glean debugging options can be found here:
    // https://mozilla.github.io/glean/book/reference/debug/index.html
    if (
      PUBLIC_APP_ENV &&
      ["local", "heroku", "storybook"].includes(PUBLIC_APP_ENV)
    ) {
      // Enable logging pings to the browser console.
      Glean.setLogPings(true);
      // Tag pings for the Debug Viewer
      // @see https://debug-ping-preview.firebaseapp.com/pings/fx-monitor-local-dev
      Glean.setDebugViewTag(`fx-monitor-${PUBLIC_APP_ENV}-dev`);
    }

    Glean.initialize("monitor.frontend", uploadEnabled, {
      // This will submit an events ping every time an event is recorded.
      maxEvents: 1,
      channel: PUBLIC_APP_ENV,
      enableAutoPageLoadEvents: true,
      experimentationId: experimentationId,
    });
    // This effect should only run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const record = async <
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
  };

  return record;
};
