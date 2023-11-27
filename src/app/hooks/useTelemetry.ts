/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useGa } from "./useGa";
import { useGlean } from "./useGlean";

const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV || ("" as const);

type RecordParams = {
  action: string;
  path: string;
};

export const useTelemetry = () => {
  const { pageEvents } = useGlean(APP_ENV, APP_ENV);
  const { gtag } = useGa();

  const record = (eventName: string, params: RecordParams) => {
    // Record event via Glean
    pageEvents.view.record(params);

    // Record event via GA
    gtag.record({
      type: "event",
      name: eventName,
      params: {
        action: params.action,
        page_location: params.path,
      },
    });
  };

  return {
    record,
  };
};
