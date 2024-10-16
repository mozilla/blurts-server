/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect } from "react";
import Glean from "@mozilla/glean/web";

export type Props = {
  experimentationId: string;
  channel: string;
};

export const GleanScript = (props: Props) => {
  // Initialize Glean only on the first render
  useEffect(() => {
    // Enable upload only if the user has not opted out of tracking.
    const uploadEnabled =
      navigator.doNotTrack !== "1" ||
      document.location.hostname === "localhost";

    // Glean debugging options can be found here:
    // https://mozilla.github.io/glean/book/reference/debug/index.html
    if (["local", "heroku", "storybook"].includes(props.channel)) {
      // Enable logging pings to the browser console.
      Glean.setLogPings(true);
      // Tag pings for the Debug Viewer
      // @see https://debug-ping-preview.firebaseapp.com/pings/fx-monitor-local-dev
      Glean.setDebugViewTag(`fx-monitor-${props.channel}-dev`);
    }

    Glean.initialize("monitor.frontend", uploadEnabled, {
      // This will submit an events ping every time an event is recorded.
      maxEvents: 1,
      channel: props.channel,
      enableAutoPageLoadEvents: true,
      experimentationId: props.experimentationId,
    });
  }, [props.channel, props.experimentationId]);

  return <></>;
};
