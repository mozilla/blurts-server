/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useGa } from "./useGa";
import { useGlean } from "./useGlean";

type RecordParams = {
  name: string;
  action: string;
  path: string;
} & {
  [key: string]: string;
};

export const useTelemetry = () => {
  const glean = useGlean();
  const { gtag } = useGa();

  const record = (eventName: string, params: RecordParams) => {
    // Record event via Glean
    glean?.page.view.record(params);

    // Record event via GA
    const { action, path } = params;
    gtag.record({
      type: "event",
      name: eventName,
      params: {
        ...params,
        action,
        page_location: path,
      },
    });
  };

  return {
    record,
  };
};
