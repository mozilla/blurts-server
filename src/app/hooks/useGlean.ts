/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
import Glean from "@mozilla/glean/web";
// @ts-expect-error We do not have type declarations for metrics.yaml, yet.
import gleanMetrics from "../../telemetry/metrics.yaml";

export type GleanExtraKeys = Record<string, string | boolean | number>;

type GleanCategoryKey = keyof typeof gleanMetrics;

type GleanEvent = {
  [key: string]: {
    type: string;
    description: string;
    bugs: string;
    data_reviews: string;
    data_sensitivity: string;
    notification_emails: string;
    expires: string;
    extra_keys: GleanExtraKeys;
    record: (params: GleanExtraKeys) => void;
  };
};

type GleanCategories = {
  [key: GleanCategoryKey]: GleanEvent;
};

type GleanMetrics = {
  $schema: string;
} & GleanCategories;

type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamelCase<U>>}`
  : S;

type GleanMetricModules = {
  [K in keyof GleanCategories as SnakeToCamelCase<string>]: GleanCategories[K];
};

function convertSnakeToCamelCase(string: string): string {
  const underscore = "_" as const;
  if (!string.includes(underscore)) {
    return string;
  }

  return string
    .split(underscore)
    .map((segment, segmentIndex) =>
      segmentIndex === 0
        ? segment
        : `${segment[0].toUpperCase()}${segment.slice(1)}`,
    )
    .join("");
}

// We do not need $schema here — ignore it.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getMetrics({ $schema, ...metrics }: GleanMetrics): GleanCategories {
  return metrics;
}

// Custom hook that initializes Glean and returns the Glean objects required
// to record data.
export const useGlean = (channel: string, appEnv: string) => {
  const [gleanEvents, setGleanEvents] = useState<GleanMetricModules | null>(
    null,
  );

  const loadGleanEvents = () => {
    const metrics = getMetrics(gleanMetrics);
    const gleanModuleNames = Object.keys(metrics).map((metricCategory) =>
      convertSnakeToCamelCase(metricCategory),
    );
    Promise.all(
      gleanModuleNames.map(
        (moduleName) => import(`../../telemetry/generated/${moduleName}`),
      ),
    )
      .then((importedModules) => {
        const exportModules = gleanModuleNames.reduce(
          (modules, moduleName, moduleIndex) => ({
            ...modules,
            [moduleName]: importedModules[moduleIndex],
          }),
          {},
        );

        setGleanEvents(exportModules);
      })
      .catch((error) => {
        console.log("Failed to load Glean modules:", error);
      });
  };

  // Initialize Glean only on the first render of our custom hook.
  useEffect(() => {
    if (gleanEvents) {
      return;
    }

    // Enable upload only if the user has not opted out of tracking.
    const uploadEnabled = navigator.doNotTrack !== "1";

    if (!channel) {
      throw new ErrorEvent("No channel provided for Glean");
    }

    if (!appEnv) {
      throw new ErrorEvent("No appEnv provided for Glean");
    }

    Glean.initialize("monitor.frontend", uploadEnabled, {
      // This will submit an events ping every time an event is recorded.
      maxEvents: 1,
      channel,
    });

    // Glean debugging options can be found here:
    // https://mozilla.github.io/glean/book/reference/debug/index.html
    if (appEnv && ["local", "heroku"].includes(appEnv)) {
      // Enable logging pings to the browser console.
      Glean.setLogPings(true);
      // Tag pings for the Debug Viewer
      // @see https://debug-ping-preview.firebaseapp.com/pings/fx-monitor-local-dev
      Glean.setDebugViewTag(`fx-monitor-${appEnv}-dev`);

      void loadGleanEvents();
    }
    // This effect should only run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel, appEnv]);

  // Return all generated Glean objects required for recording data.
  return gleanEvents;
};
