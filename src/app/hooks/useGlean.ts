/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect } from "react";
import Glean from "@mozilla/glean/web";
import * as appEvents from "../../telemetry/generated/appEvents";

// Custom hook that initializes Glean and returns the Glean objects required
// to record data.
export const useGlean = () => {
  // Initialize Glean only on the first render
  // of our custom hook.
  useEffect(() => {
    Glean.initialize("monitor-testing", true, {
      // This will submit an events ping every time an event is recorded.
      maxEvents: 1,
    });

    // Log pings to the console and send pings to the debug ping viewer
    // when running locally.
    if (process.env.NEXT_PUBLIC_APP_ENV === "local") {
      // Enable logging pings to the browser console.
      Glean.setLogPings(true);

      // Set the tag and sends pings to the debug ping viewer.
      Glean.setDebugViewTag("monitor-testing");
    }
  }, []);

  // Return all generated Glean objects required for recording data.
  return {
    appEvents,
  };
};
