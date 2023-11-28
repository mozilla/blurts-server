/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
import Glean from "@mozilla/glean/web";
// @ts-expect-error We do not have type declarations for metrics.yaml, yet.
import gleanMetrics from "../../telemetry/metrics.yaml";
import {
  SnakeToCamelCase,
  convertSnakeToCamelCase,
} from "../functions/universal/convertSnakeToCamelCase";

const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV || "";

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

// We do not need $schema here — ignore it.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { $schema, ...metrics }: GleanMetrics = gleanMetrics;

type GleanMetricModules =
  | {
      [K in keyof GleanCategories as SnakeToCamelCase<string>]: GleanCategories[K];
    }
  | null;

// Custom hook that initializes Glean and returns the Glean objects required
// to record data.
export const useGlean = () => {
  const [gleanEvents, setGleanEvents] = useState<GleanMetricModules>(null);

  const loadGleanModules = () => {
    const gleanModuleNames = Object.keys(metrics).map((metricCategory) =>
      convertSnakeToCamelCase(metricCategory),
    );
    const modulePromises = gleanModuleNames.map(
      (moduleName) => import(`../../telemetry/generated/${moduleName}`),
    );

    Promise.all(modulePromises)
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

    if (!APP_ENV) {
      throw new ErrorEvent("No APP_ENV provided for Glean");
    }

    Glean.initialize("monitor.frontend", uploadEnabled, {
      // This will submit an events ping every time an event is recorded.
      maxEvents: 1,
      channel: APP_ENV,
    });

    // Glean debugging options can be found here:
    // https://mozilla.github.io/glean/book/reference/debug/index.html
    if (APP_ENV && ["local", "heroku"].includes(APP_ENV)) {
      // Enable logging pings to the browser console.
      Glean.setLogPings(true);
      // Tag pings for the Debug Viewer
      // @see https://debug-ping-preview.firebaseapp.com/pings/fx-monitor-local-dev
      Glean.setDebugViewTag(`fx-monitor-${APP_ENV}-dev`);

      void loadGleanModules();
    }
    // This effect should only run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Return all generated Glean objects required for recording data.
  return gleanEvents;
};
