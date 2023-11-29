/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useContext, useEffect } from "react";
import Glean from "@mozilla/glean/web";
import * as gleanEvents from "../../telemetry/generated";
import { PublicEnvContext } from "../../contextProviders/public-env";

export type GleanEvents = typeof gleanEvents;

// Custom hook that initializes Glean and returns all available events.
export const useGlean = (): GleanEvents => {
  const { PUBLIC_APP_ENV } = useContext(PublicEnvContext);

  // Initialize Glean only on the first render of our custom hook.
  useEffect(() => {
    // Enable upload only if the user has not opted out of tracking.
    const uploadEnabled = navigator.doNotTrack !== "1";

    if (!PUBLIC_APP_ENV) {
      throw new ErrorEvent("No PUBLIC_APP_ENV provided for Glean");
    }

    Glean.initialize("monitor.frontend", uploadEnabled, {
      // This will submit an events ping every time an event is recorded.
      maxEvents: 1,
      channel: PUBLIC_APP_ENV,
    });

    // Glean debugging options can be found here:
    // https://mozilla.github.io/glean/book/reference/debug/index.html
    if (PUBLIC_APP_ENV && ["local", "heroku"].includes(PUBLIC_APP_ENV)) {
      // Enable logging pings to the browser console.
      Glean.setLogPings(true);
      // Tag pings for the Debug Viewer
      // @see https://debug-ping-preview.firebaseapp.com/pings/fx-monitor-local-dev
      Glean.setDebugViewTag(`fx-monitor-${PUBLIC_APP_ENV}-dev`);
    }
    // This effect should only run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return gleanEvents;
};
